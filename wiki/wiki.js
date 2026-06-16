const WIKI_CATEGORIES = {
  terms: { zh: "术语", en: "Terms" },
  systems: { zh: "系统", en: "Systems" },
  resources: { zh: "资源", en: "Resources" },
  factions: { zh: "派系", en: "Factions" },
  events: { zh: "事件", en: "Events" },
};

const UI_TEXT = {
  searchEmpty: { zh: "没有找到匹配的档案。", en: "No matching archive entries." },
  loadFailed: { zh: "百科资料加载失败，请稍后再试。", en: "Wiki data failed to load. Please try again later." },
  articleFailed: { zh: "该词条加载失败。", en: "This entry failed to load." },
  openHint: { zh: "打开查看详情。", en: "Open to view details." },
  countSuffix: { zh: "条", en: "entries" },
  category: { zh: "分类", en: "Category" },
  status: { zh: "状态", en: "Status" },
  updated: { zh: "最后更新", en: "Updated" },
  archived: { zh: "已记录", en: "Archived" },
  unmarked: { zh: "未标注", en: "Unmarked" },
};

const state = {
  manifest: null,
  articles: new Map(),
  category: "terms",
  articleId: null,
  search: "",
  language: "zh",
  expandedCategories: new Set(),
  embed: new URLSearchParams(window.location.search).get("embed") === "1",
};

const categoryList = document.getElementById("wikiCategoryList");
const articlePanel = document.getElementById("wikiArticle");
const searchInput = document.getElementById("wikiSearch");
const modeLabel = document.getElementById("wikiModeLabel");

initWiki();

async function initWiki() {
  document.body.classList.add(state.embed ? "wiki-embed" : "wiki-standalone");
  modeLabel.textContent = state.embed ? "EMBEDDED FIELD WIKI" : "STANDALONE DATABASE";
  searchInput.addEventListener("input", () => {
    state.search = searchInput.value.trim().toLowerCase();
    if (state.search) expandCategoriesWithMatches();
    renderCategories();
  });

  try {
    state.manifest = await fetchJson("manifest.json");
    normalizeManifest();
    await selectFirstAvailableArticle();
  } catch (error) {
    console.warn("Wiki failed to load:", error);
    renderError(text(UI_TEXT.loadFailed));
  }
}

async function fetchJson(path) {
  const response = await fetch(path, { cache: "no-cache" });
  if (!response.ok) throw new Error(`${path} ${response.status}`);
  return response.json();
}

function normalizeManifest() {
  const categories = state.manifest.categories || [];
  state.manifest.categories = categories.map((category) => ({
    id: category.id,
    label: category.label || WIKI_CATEGORIES[category.id] || category.id,
    entries: Array.isArray(category.entries) ? category.entries : [],
  }));
}

async function selectFirstAvailableArticle() {
  const firstCategory = state.manifest.categories.find((category) => category.entries.length);
  if (!firstCategory) {
    renderCategories();
    return;
  }
  state.category = firstCategory.id;
  if (!state.embed) state.expandedCategories.add(firstCategory.id);
  renderCategories();
  await selectArticle(firstCategory.entries[0].id);
}

function renderCategories() {
  categoryList.replaceChildren();
  state.manifest.categories.forEach((category) => {
    const entries = getFilteredEntries(category);
    const expanded = state.expandedCategories.has(category.id);
    const group = document.createElement("section");
    group.className = "wiki-category-group";
    group.classList.toggle("open", expanded);
    group.classList.toggle("active", category.id === state.category);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "wiki-category-button";
    button.setAttribute("aria-expanded", String(expanded));

    const titleWrap = document.createElement("span");
    titleWrap.className = "wiki-category-title";
    const arrow = document.createElement("i");
    arrow.setAttribute("aria-hidden", "true");
    const label = document.createElement("strong");
    label.textContent = text(category.label);
    titleWrap.append(arrow, label);

    const count = document.createElement("span");
    count.textContent = `${category.entries.length} ${text(UI_TEXT.countSuffix)}`;

    button.append(titleWrap, count);
    button.addEventListener("click", async () => {
      if (expanded) {
        state.expandedCategories.delete(category.id);
      } else {
        state.expandedCategories.add(category.id);
      }
      state.category = category.id;
      renderCategories();
    });

    const children = document.createElement("div");
    children.className = "wiki-category-children";

    if (!entries.length) {
      const empty = document.createElement("p");
      empty.className = "wiki-empty-entry";
      empty.textContent = text(UI_TEXT.searchEmpty);
      children.append(empty);
    } else {
      entries.forEach((entry) => {
        const entryButton = document.createElement("button");
        entryButton.type = "button";
        entryButton.className = "wiki-entry-button";
        entryButton.classList.toggle("active", entry.id === state.articleId);

        const entryTitle = document.createElement("strong");
        entryTitle.textContent = text(entry.title);
        const entrySummary = document.createElement("span");
        entrySummary.textContent = text(entry.summary) || text(UI_TEXT.openHint);

        entryButton.append(entryTitle, entrySummary);
        entryButton.addEventListener("click", () => selectArticle(entry.id));
        children.append(entryButton);
      });
    }

    group.append(button, children);
    categoryList.append(group);
  });
}

async function selectArticle(articleId) {
  const entry = getAllEntries().find((candidate) => candidate.id === articleId);
  if (!entry) return;
  state.articleId = articleId;
  state.category = entry.category || state.category;
  if (!state.embed) state.expandedCategories.add(state.category);
  renderCategories();
  try {
    const article = await loadArticle(entry);
    renderArticle(article, entry);
  } catch (error) {
    console.warn("Wiki article failed to load:", error);
    renderError(text(UI_TEXT.articleFailed));
  }
}

async function loadArticle(entry) {
  if (state.articles.has(entry.id)) return state.articles.get(entry.id);
  const article = await fetchJson(entry.data);
  state.articles.set(entry.id, article);
  return article;
}

function renderArticle(article, entry) {
  const root = document.createElement("div");
  root.className = "wiki-article-body";

  const kicker = document.createElement("div");
  kicker.className = "wiki-article-kicker";
  kicker.textContent = `${text(WIKI_CATEGORIES[entry.category]) || entry.category} / ${article.version || "ARCHIVE"}`;

  const title = document.createElement("h2");
  title.textContent = text(article.title) || text(entry.title);

  const summary = document.createElement("p");
  summary.className = "wiki-summary";
  summary.textContent = text(article.summary) || text(entry.summary) || "";

  const meta = document.createElement("ul");
  meta.className = "wiki-meta";
  [
    [text(UI_TEXT.category), text(WIKI_CATEGORIES[entry.category]) || entry.category],
    [text(UI_TEXT.status), text(article.status) || text(UI_TEXT.archived)],
    [text(UI_TEXT.updated), article.updated || text(UI_TEXT.unmarked)],
  ].forEach(([label, value]) => {
    const item = document.createElement("li");
    item.textContent = `${label}: ${value}`;
    meta.append(item);
  });

  root.append(kicker, title, summary, meta);

  (article.sections || []).forEach((section) => {
    const sectionNode = document.createElement("section");
    sectionNode.className = "wiki-section";
    const heading = document.createElement("h3");
    heading.textContent = text(section.heading);
    sectionNode.append(heading);

    if (section.body) {
      const body = document.createElement("p");
      body.textContent = text(section.body);
      sectionNode.append(body);
    }

    if (Array.isArray(section.items) && section.items.length) {
      const list = document.createElement("ul");
      section.items.forEach((itemText) => {
        const item = document.createElement("li");
        item.textContent = text(itemText);
        list.append(item);
      });
      sectionNode.append(list);
    }

    root.append(sectionNode);
  });

  articlePanel.replaceChildren(root);
}

function renderError(message) {
  const root = document.createElement("div");
  root.className = "wiki-empty";
  const label = document.createElement("span");
  label.textContent = "ARCHIVE ERROR";
  const title = document.createElement("h2");
  title.className = "wiki-error";
  title.textContent = message;
  root.append(label, title);
  articlePanel.replaceChildren(root);
}

function expandCategoriesWithMatches() {
  state.manifest.categories.forEach((category) => {
    if (getFilteredEntries(category).length) state.expandedCategories.add(category.id);
  });
}

function getAllEntries() {
  return state.manifest.categories.flatMap((category) =>
    category.entries.map((entry) => ({ ...entry, category: category.id }))
  );
}

function getFilteredEntries(category) {
  const entries = category.entries.map((entry) => ({ ...entry, category: category.id }));
  if (!state.search) return entries;
  return entries.filter((entry) =>
    [entry.id, text(entry.title), text(entry.summary)]
      .some((value) => String(value || "").toLowerCase().includes(state.search))
  );
}

function text(value) {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (typeof value === "object") {
    return value[state.language] || value.zh || value.en || "";
  }
  return String(value);
}
