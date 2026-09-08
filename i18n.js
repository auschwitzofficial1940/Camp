(() => {
  const STORAGE_KEY = "tp.language";
  const SUPPORTED_LANGUAGES = new Set(["zh", "en"]);
  const dictionaries = new Map();
  let language = normalizeLanguage(localStorage.getItem(STORAGE_KEY)) || "zh";

  function normalizeLanguage(value) {
    const normalized = String(value || "").toLowerCase().split("-")[0];
    return SUPPORTED_LANGUAGES.has(normalized) ? normalized : null;
  }

  async function loadDictionary(nextLanguage) {
    if (dictionaries.has(nextLanguage)) return dictionaries.get(nextLanguage);
    const response = await fetch(`/assets/i18n/${nextLanguage}.json`, { cache: "no-cache" });
    if (!response.ok) throw new Error(`i18n ${nextLanguage}: ${response.status}`);
    const dictionary = await response.json();
    dictionaries.set(nextLanguage, dictionary);
    return dictionary;
  }

  function interpolate(value, variables = {}) {
    return String(value).replace(/\{(\w+)\}/g, (_, key) =>
      Object.prototype.hasOwnProperty.call(variables, key) ? variables[key] : `{${key}}`
    );
  }

  function t(key, variables = {}) {
    const active = dictionaries.get(language) || {};
    const fallback = dictionaries.get("zh") || {};
    return interpolate(active[key] ?? fallback[key] ?? key, variables);
  }

  function apply(root = document) {
    root.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    ["placeholder", "aria-label", "title", "data-label"].forEach((attribute) => {
      const datasetKey = `i18n${attribute.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join("")}`;
      root.querySelectorAll(`[data-i18n-${attribute}]`).forEach((element) => {
        element.setAttribute(attribute, t(element.dataset[datasetKey]));
      });
    });
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }

  async function setLanguage(nextLanguage, { persist = true } = {}) {
    const normalized = normalizeLanguage(nextLanguage) || "zh";
    try {
      await Promise.all([loadDictionary("zh"), loadDictionary(normalized)]);
      language = normalized;
    } catch (error) {
      console.warn("Language pack failed to load:", error);
      language = "zh";
      await loadDictionary("zh").catch(() => {});
    }
    if (persist) localStorage.setItem(STORAGE_KEY, language);
    apply();
    window.dispatchEvent(new CustomEvent("tp:languagechange", { detail: { language } }));
    return language;
  }

  async function init() {
    return setLanguage(language, { persist: false });
  }

  window.tpI18n = {
    init,
    apply,
    setLanguage,
    t,
    getLanguage: () => language,
    storageKey: STORAGE_KEY,
  };
})();
