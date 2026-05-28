const regions = [
  { name: "游乐区", role: "集会/娱乐", color: [255, 0, 0], support: 21, pressure: 38, patrol: "低", members: 0 },
  { name: "禁闭室", role: "镇压", color: [255, 255, 0], support: 4, pressure: 78, patrol: "高", members: 0 },
  { name: "空旷甲板", role: "举行活动", color: [255, 0, 255], support: 14, pressure: 42, patrol: "中", members: 0 },
  { name: "艺术中心", role: "宣传", color: [0, 255, 255], support: 26, pressure: 34, patrol: "中", members: 1 },
  { name: "主教学楼", role: "科技/管理", color: [0, 0, 255], support: 12, pressure: 51, patrol: "高", members: 0 },
  { name: "副教学楼", role: "人口核心", color: [0, 255, 0], support: 18, pressure: 45, patrol: "中", members: 1 },
  { name: "校长办公室", role: "权力中心", color: [100, 0, 0], support: 2, pressure: 62, patrol: "高", members: 0 },
  { name: "室内体育馆", role: "大型活动", color: [100, 50, 50], support: 11, pressure: 36, patrol: "中", members: 0 },
  { name: "宿舍楼", role: "人口/组织", color: [100, 100, 0], support: 25, pressure: 48, patrol: "中", members: 1 },
  { name: "食堂", role: "食物资源", color: [50, 100, 0], support: 19, pressure: 40, patrol: "中", members: 0 },
  { name: "操场", role: "集会/活动", color: [100, 100, 100], support: 16, pressure: 29, patrol: "低", members: 0 },
  { name: "网球场", role: "边缘路线/学生压力&忠诚度", color: [0, 100, 100], support: 23, pressure: 33, patrol: "低", members: 0 },
  { name: "小卖铺", role: "金钱流通&小型食物资源点", color: [255, 200, 200], support: 17, pressure: 31, patrol: "中", members: 0 },
  { name: "学校出口", role: "对外连接", color: [255, 88, 88], support: 9, pressure: 44, patrol: "高", members: 0 },
  { name: "保安亭", role: "检查", color: [100, 0, 50], support: 3, pressure: 55, patrol: "高", members: 0 },
  { name: "侧面出口", role: "偷运路线", color: [0, 150, 150], support: 13, pressure: 39, patrol: "中", members: 0 },
  { name: "侧面保安亭", role: "次级封锁", color: [0, 50, 150], support: 5, pressure: 52, patrol: "高", members: 0 },
  { name: "停车场", role: "黑市/外部交易", color: [50, 50, 30], support: 10, pressure: 47, patrol: "中", members: 0 },
];

const mapViewport = document.getElementById("mapViewport");
const mainMenu = document.getElementById("mainMenu");
const factionSelect = document.getElementById("factionSelect");
const creditsScreen = document.getElementById("creditsScreen");
const startGame = document.getElementById("startGame");
const selectFaculty = document.getElementById("selectFaculty");
const selectStudents = document.getElementById("selectStudents");
const showCredits = document.getElementById("showCredits");
const backToMenu = document.getElementById("backToMenu");
const openSettings = document.getElementById("openSettings");
const gameSettings = document.getElementById("gameSettings");
const closeSettings = document.getElementById("closeSettings");
const settingsPanel = document.getElementById("settingsPanel");
const musicSelect = document.getElementById("musicSelect");
const playMode = document.getElementById("playMode");
const cloudTransition = document.getElementById("cloudTransition");
const mapContent = document.getElementById("mapContent");
const campusMap = document.getElementById("campusMap");
const campusMapAlt = document.getElementById("campusMapAlt");
const highlightCanvas = document.getElementById("highlightCanvas");
const highlightCtx = highlightCanvas.getContext("2d");
const hoverCard = document.getElementById("hoverCard");
const hoverName = document.getElementById("hoverName");
const hoverFunction = document.getElementById("hoverFunction");
const eventLog = document.getElementById("eventLog");
const collapseLog = document.getElementById("collapseLog");
const expandLog = document.getElementById("expandLog");
const pauseToggle = document.getElementById("pauseToggle");
const pauseIcon = document.getElementById("pauseIcon");
const dayLabel = document.getElementById("dayLabel");
const phaseLabel = document.getElementById("phaseLabel");
const semesterDayLabel = document.getElementById("semesterDayLabel");
const dayProgressFill = document.getElementById("dayProgressFill");
const memberCount = document.getElementById("memberCount");
const logList = document.getElementById("logList");
const recruitButton = document.getElementById("recruitButton");
const recruitPanel = document.getElementById("recruitPanel");
const recruitTitle = document.getElementById("recruitTitle");
const recruitList = document.getElementById("recruitList");
const membersButton = document.getElementById("membersButton");
const membersPanel = document.getElementById("membersPanel");
const coreMembersList = document.getElementById("coreMembersList");
const membersList = document.getElementById("membersList");
const studentDetailPanel = document.getElementById("studentDetailPanel");
const studentDetailName = document.getElementById("studentDetailName");
const studentDetailGrade = document.getElementById("studentDetailGrade");
const studentDetailPersonality = document.getElementById("studentDetailPersonality");
const studentDetailFaction = document.getElementById("studentDetailFaction");
const studentDetailStatus = document.getElementById("studentDetailStatus");
const studentDetailTrust = document.getElementById("studentDetailTrust");
const studentDetailStress = document.getElementById("studentDetailStress");
const studentDetailResistance = document.getElementById("studentDetailResistance");
const studentLiterature = document.getElementById("studentLiterature");
const studentEmergency = document.getElementById("studentEmergency");
const studentStrength = document.getElementById("studentStrength");
const studentVision = document.getElementById("studentVision");
const positionPanel = document.getElementById("positionPanel");
const positionOptions = document.getElementById("positionOptions");
const phoneCount = document.getElementById("phoneCount");
const awarenessChip = document.getElementById("awarenessChip");
const awarenessMeter = document.getElementById("awarenessMeter");
const bribeStudent = document.getElementById("bribeStudent");
const inviteStudent = document.getElementById("inviteStudent");
const removeMember = document.getElementById("removeMember");
const confirmModal = document.getElementById("confirmModal");
const confirmMessage = document.getElementById("confirmMessage");
const cancelConfirm = document.getElementById("cancelConfirm");
const acceptConfirm = document.getElementById("acceptConfirm");
const mailButton = document.getElementById("mailButton");
const mailPanel = document.getElementById("mailPanel");
const mailList = document.getElementById("mailList");

const regionName = document.getElementById("regionName");
const regionPanel = document.getElementById("regionPanel");
const regionFunction = document.getElementById("regionFunction");
const regionSupport = document.getElementById("regionSupport");
const regionPressure = document.getElementById("regionPressure");
const regionPatrol = document.getElementById("regionPatrol");
const regionMembers = document.getElementById("regionMembers");

const indexImage = new Image();
indexImage.src = "assets/索引图.png";

const indexCanvas = document.createElement("canvas");
const indexCtx = indexCanvas.getContext("2d", { willReadFrequently: true });
const clickSounds = [new Audio("assets/sound/点击按钮1.mp3"), new Audio("assets/sound/点击按钮2.mp3")];
const hoverSound = new Audio("assets/sound/翻页.mp3");
const startSound = new Audio("assets/sound/装备.mp3");
const musicTracks = [
  { name: "Aphelion", src: "assets/music/Aphelion.mp3" },
  { name: "Phoenix", src: "assets/music/Phoenix.mp3" },
  { name: "Scott", src: "assets/music/Scott.mp3" },
  { name: "There was a time", src: "assets/music/There_was_a_time.mp3" },
];
const menuMusic = new Audio(musicTracks[0].src);
const gameMusic = new Audio();
const DEFAULT_NAMES = {
  firstNames: ["James", "Mary", "Daniel", "Sarah", "Michael", "Linda"],
  lastNames: ["Smith", "Johnson", "Brown", "Garcia", "Wilson", "Martin"],
};
const PERSONALITY_TEMPLATES = {
  勇敢: {
    literature: [20, 30],
    emergency: [40, 50],
    strength: [50, 60],
    vision: [35, 40],
    stressResistance: "中",
  },
  忠诚: {
    literature: [40, 45],
    emergency: [40, 50],
    strength: [50, 60],
    vision: [35, 40],
    stressResistance: "高",
  },
  社交: {
    literature: [50, 60],
    emergency: [50, 65],
    strength: [20, 30],
    vision: [30, 40],
    stressResistance: "中",
  },
  压力: {
    literature: [30, 40],
    emergency: [30, 35],
    strength: [30, 40],
    vision: [20, 30],
    stressResistance: "高",
  },
  理想主义压力: {
    literature: [30, 40],
    emergency: [20, 30],
    strength: [20, 35],
    vision: [30, 40],
    stressResistance: "低",
  },
};
const FACTIONS = ["管理层支持者", "中立", "激进学生", "利己主义者"];
const STATUS_POOL = ["正常", "恐惧", "愤怒", "热情", "怀疑"];
const DAY_SCHEDULE = [
  { label: "上课", durationMs: 60 * 1000 },
  { label: "午饭", durationMs: 30 * 1000 },
  { label: "上课", durationMs: 60 * 1000 },
  { label: "放学后", durationMs: 30 * 1000 },
  { label: "晚上", durationMs: 120 * 1000 },
];
const MAP_VISUALS = {
  day: "assets/学校视图.png",
  lunch: "assets/中午TCIS.png",
  dusk: "assets/傍晚TCIS.png",
  night: "assets/夜晚TCIS.png",
};
const REAL_MS_PER_GAME_DAY = 5 * 60 * 1000;
const DAYS_PER_SEMESTER = 30;
const SEMESTERS_PER_YEAR = 2;
const INITIAL_GRADE_COUNTS = {
  6: [20, 30],
  7: [15, 20],
  8: [20, 32],
  9: [10, 15],
  10: [5, 10],
  11: [10, 10],
  12: [9, 9],
};
const CORE_MEMBER_DEFS = [
  { name: "Hong Xixi", role: "我", grade: 11, personality: "理想主义压力", faction: "激进学生", trust: 100 },
  { name: "Li Xinyu", role: "副主席", grade: 11, personality: "忠诚", faction: "激进学生", trust: 92 },
];
const ORGANIZATION_ROLES = ["副主席", "宣传部长", "情报部长", "后勤部长", "成员"];
const BRIBE_PHONE_COST = 5;
const BRIBE_TRUST_GAIN = 15;
const VOLUNTARY_TRUST_THRESHOLD = 80;
const VOLUNTARY_FAME_THRESHOLD = 40;
const MAIL_TEMPLATES = [
  {
    subject: ".......",
    body:
      "我不确定这封邮件会不会被看到。\n\n最近学校里有很多人在讨论一些事情。\n\n我不知道你们到底是谁，\n但如果你们真的想改变什么……\n\n也许我能帮上忙。",
  },
  {
    subject: "我受够了",
    body:
      "每天都一样。\n\n巡逻、检查、压力、规矩。\n\n所有人都装作正常，\n但根本没人真的开心。\n\n如果你们不是在开玩笑，\n我愿意加入。",
  },
  {
    subject: "不要回复太快",
    body:
      "有人说最近有学生被约谈了。\n\n我不知道是不是因为那个论坛。\n\n如果这封邮件有风险，\n请直接删掉。\n\n但如果安全的话……\n我想知道你们到底在做什么。",
  },
  {
    subject: "今天晚上又突击检查。",
    body: "他们翻了所有人的柜子。\n\n我已经受够这种生活了。\n\n如果你们准备行动，\n算我一个。",
  },
  {
    subject: "我有条件",
    body:
      "我知道你们最近发展得很快。\n\n我可以帮你们。\n\n但我不想被当成炮灰。\n\n如果你们真的有能力保护成员，\n再联系我。",
  },
  {
    subject: "申请加入",
    body:
      "我已经观察你们很久了。\n\n现在越来越多人开始意识到，\n学校并不像它表现出来的那样。\n\n我愿意正式加入组织。\n\n不用回复这封邮件。\n明天午饭后，\n我会在网球场旁边等也可以线上告诉我。",
  },
];

let indexReady = false;
let scale = 1;
let panX = 0;
let panY = 0;
let isDragging = false;
let dragStart = { x: 0, y: 0, panX: 0, panY: 0 };
let hoveredRegion = null;
let selectedRegion = null;
let currentHighlightKey = "";
let paused = false;
let lastHoverSoundAt = 0;
let currentTrackIndex = 0;
let musicMode = "sequence";
let gameTrackIndex = 1;
let gameMusicTimer = null;
let menuIdleTimer = null;
let nameData = DEFAULT_NAMES;
let allStudents = [];
let playerMembers = [];
let mailHistory = [];
let selectedRecruitGrade = 6;
let selectedStudentId = null;
let resources = {
  phones: 10,
};
let managementAwareness = 0;
let bribeUsedDayKey = null;
let dailyInviteAttempts = 0;
let dailyInviteFailures = 0;
let dailyInviteAwarenessPenaltyApplied = false;
let dailyInviteTrustPenaltyApplied = false;
let pendingConfirmAction = null;
let factionFame = 6;
const pressedKeys = new Set();
let detailDrag = null;
let activeMapImage = campusMap;
let inactiveMapImage = campusMapAlt;
let currentMapVisual = MAP_VISUALS.day;
let gameTime = {
  day: 1,
  totalDay: 1,
  semester: 1,
  year: 1,
  dayProgressMs: 0,
  lastTickAt: null,
};

document.body.classList.add("menu-active");
setupUiAudio();
setupMenuMusic();
setupMenuIdle();
loadNameData();
window.tpDebug = () => ({
  paused,
  gameTime: { ...gameTime },
  currentMapVisual,
  resources: { ...resources },
  pendingApplications: mailHistory.filter((mail) => mail.status === "pending").length,
  mailHistory: mailHistory.length,
  dailyInviteAttempts,
  dailyInviteFailures,
  managementAwareness,
  allStudents: allStudents.length,
  playerMembers: playerMembers.length,
  sampleStudent: allStudents[0] ? structuredClone(allStudents[0]) : null,
});

indexImage.onload = () => {
  initializeIndexCanvas();
};

function initializeIndexCanvas() {
  if (!indexImage.complete || !indexImage.naturalWidth) return false;
  indexCanvas.width = indexImage.naturalWidth;
  indexCanvas.height = indexImage.naturalHeight;
  indexCtx.drawImage(indexImage, 0, 0);
  indexReady = true;
  return true;
}

window.addEventListener("load", () => {
  initializeIndexCanvas();
  resetView();
});

window.addEventListener("resize", () => {
  clampPan();
  applyTransform();
});

window.setInterval(updateGameClock, 1000);
window.setInterval(updateKeyboardPan, 16);

window.addEventListener("keydown", (event) => {
  if (!shouldCaptureMapKeys(event)) return;
  const key = event.key.toLowerCase();
  if (!["w", "a", "s", "d"].includes(key)) return;
  event.preventDefault();
  pressedKeys.add(key);
});

window.addEventListener("keyup", (event) => {
  pressedKeys.delete(event.key.toLowerCase());
});

studentDetailPanel.querySelector(".panel-title").addEventListener("pointerdown", (event) => {
  if (event.button !== 0) return;
  const rect = studentDetailPanel.getBoundingClientRect();
  detailDrag = {
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
  };
  studentDetailPanel.classList.add("dragging");
  studentDetailPanel.style.left = `${rect.left}px`;
  studentDetailPanel.style.top = `${rect.top}px`;
  studentDetailPanel.setPointerCapture(event.pointerId);
});

studentDetailPanel.addEventListener("pointermove", (event) => {
  if (!detailDrag) return;
  const nextLeft = clamp(event.clientX - detailDrag.offsetX, 12, window.innerWidth - studentDetailPanel.offsetWidth - 12);
  const nextTop = clamp(event.clientY - detailDrag.offsetY, 12, window.innerHeight - 80);
  studentDetailPanel.style.left = `${nextLeft}px`;
  studentDetailPanel.style.top = `${nextTop}px`;
});

studentDetailPanel.addEventListener("pointerup", (event) => {
  if (!detailDrag) return;
  detailDrag = null;
  studentDetailPanel.classList.remove("dragging");
  studentDetailPanel.releasePointerCapture(event.pointerId);
});

document.addEventListener("pointerdown", (event) => {
  if (studentDetailPanel.hidden) return;
  if (studentDetailPanel.contains(event.target)) return;
  studentDetailPanel.hidden = true;
});

startGame.addEventListener("click", () => {
  playSound(startSound);
  settingsPanel.hidden = true;
  document.body.classList.remove("settings-open");
  document.body.classList.remove("menu-active");
  document.body.classList.add("faction-active");
  factionSelect.hidden = false;
  resetMenuIdleTimer();
});

selectFaculty.addEventListener("pointerenter", () => {
  selectFaculty.querySelector("strong").textContent = "敬请谅解";
  selectFaculty.querySelector("span").textContent = "COMING SOON";
});

selectFaculty.addEventListener("pointerleave", () => {
  selectFaculty.querySelector("strong").textContent = "加入老师阵营";
  selectFaculty.querySelector("span").textContent = "JOIN THE FACULTY";
});

selectFaculty.addEventListener("click", (event) => {
  event.preventDefault();
});

selectStudents.addEventListener("click", () => {
  enterStudentFactionGame();
});

function enterStudentFactionGame() {
  playSound(startSound);
  settingsPanel.hidden = true;
  document.body.classList.remove("settings-open");
  cloudTransition.classList.remove("open");
  cloudTransition.classList.add("active");

  window.setTimeout(() => {
    document.body.classList.remove("menu-active", "faction-active");
    document.body.classList.add("game-active");
    factionSelect.hidden = true;
    if (allStudents.length === 0) initializeStudentPopulation();
    gameTime.lastTickAt = performance.now();
    updateTimeUi();
    updateMemberUi();
    updateResourceUi();
    updateAwarenessUi();
    menuMusic.pause();
    startGameMusicAfterDelay();
    initializeIndexCanvas();
    resetView();
    clearHover();
    cloudTransition.classList.add("open");
  }, 260);

  window.setTimeout(() => {
    cloudTransition.classList.remove("active", "open");
  }, 1550);
}

showCredits.addEventListener("click", () => {
  creditsScreen.hidden = false;
  document.body.classList.remove("menu-active");
  document.body.classList.add("credits-active");
});

backToMenu.addEventListener("click", () => {
  document.body.classList.remove("credits-active");
  document.body.classList.add("menu-active");
  creditsScreen.hidden = true;
  resetMenuIdleTimer();
});

openSettings.addEventListener("click", () => {
  musicSelect.value = String(currentTrackIndex);
  openSettingsPanel();
});

gameSettings.addEventListener("click", () => {
  musicSelect.value = String(gameTrackIndex);
  openSettingsPanel();
});

closeSettings.addEventListener("click", () => {
  closeSettingsPanel();
  resetMenuIdleTimer();
});

settingsPanel.addEventListener("click", (event) => {
  if (event.target === settingsPanel) {
    closeSettingsPanel();
    resetMenuIdleTimer();
  }
});

musicSelect.addEventListener("change", () => {
  if (document.body.classList.contains("game-active")) {
    gameTrackIndex = Number(musicSelect.value);
    loadGameMusic();
    playGameMusic();
  } else {
    currentTrackIndex = Number(musicSelect.value);
    loadCurrentMusic();
    playMenuMusic();
  }
});

playMode.addEventListener("change", () => {
  musicMode = playMode.value;
  menuMusic.loop = musicMode === "loop";
  gameMusic.loop = musicMode === "loop";
});

collapseLog.addEventListener("click", () => {
  eventLog.classList.add("collapsed");
  expandLog.hidden = false;
});

expandLog.addEventListener("click", () => {
  eventLog.classList.remove("collapsed");
  expandLog.hidden = true;
});

pauseToggle.addEventListener("click", () => {
  paused = !paused;
  gameTime.lastTickAt = performance.now();
  document.body.classList.toggle("time-paused", paused);
  pauseToggle.setAttribute("aria-label", paused ? "继续" : "暂停");
  pauseToggle.dataset.label = paused ? "继续" : "暂停";
  pauseIcon.src = paused ? "assets/icon/开始.png" : "assets/icon/停.png";
});

recruitButton.addEventListener("click", () => {
  const shouldOpen = recruitPanel.hidden;
  membersPanel.hidden = true;
  mailPanel.hidden = true;
  recruitPanel.hidden = !shouldOpen;
  document.querySelectorAll(".rail-button").forEach((button) => button.classList.remove("active"));
  recruitButton.classList.toggle("active", shouldOpen);
  if (!shouldOpen) document.querySelector(".rail-button")?.classList.add("active");
  if (shouldOpen) {
    renderRecruitList(selectedRecruitGrade);
  } else {
    studentDetailPanel.hidden = true;
  }
});

membersButton.addEventListener("click", () => {
  const shouldOpen = membersPanel.hidden;
  recruitPanel.hidden = true;
  mailPanel.hidden = true;
  membersPanel.hidden = !shouldOpen;
  document.querySelectorAll(".rail-button").forEach((button) => button.classList.remove("active"));
  membersButton.classList.toggle("active", shouldOpen);
  if (!shouldOpen) {
    document.querySelector(".rail-button")?.classList.add("active");
    studentDetailPanel.hidden = true;
    return;
  }
  renderMembersList();
});

mailButton.addEventListener("click", () => {
  const shouldOpen = mailPanel.hidden;
  recruitPanel.hidden = true;
  membersPanel.hidden = true;
  mailPanel.hidden = !shouldOpen;
  studentDetailPanel.hidden = true;
  document.querySelectorAll(".rail-button").forEach((button) => button.classList.remove("active"));
  mailButton.classList.toggle("active", shouldOpen);
  if (!shouldOpen) document.querySelector(".rail-button")?.classList.add("active");
  if (shouldOpen) renderMailList();
});

document.querySelectorAll(".grade-tab").forEach((button) => {
  button.addEventListener("click", () => {
    selectedRecruitGrade = Number(button.dataset.grade);
    document.querySelectorAll(".grade-tab").forEach((tab) => tab.classList.toggle("active", tab === button));
    renderRecruitList(selectedRecruitGrade);
    studentDetailPanel.hidden = true;
  });
});

bribeStudent.addEventListener("click", () => {
  const student = getSelectedStudent();
  if (!student || !canBribeStudent(student)) return;
  openConfirmModal(
    `你确定要使用 <strong class="phone-emphasis">${BRIBE_PHONE_COST}个手机</strong> 来增加这个学生的信任度吗？`,
    () => confirmBribeStudent(student),
  );
});

inviteStudent.addEventListener("click", () => {
  const student = getSelectedStudent();
  if (!student || getInviteChance(student) <= 0 || isPlayerMember(student.id)) return;
  const chance = getInviteChance(student);
  const riskText = chance >= 0.75 ? "有较小概率失败。" : "有极大概率失败。";
  openConfirmModal(`你确定要邀请这个学生吗？<br><span class="confirm-note">${riskText}</span>`, () => confirmInviteStudent(student));
});

removeMember.addEventListener("click", () => {
  const student = getSelectedStudent();
  if (!student || !isPlayerMember(student.id)) return;
  removeStudentFromOrganization(student);
});

cancelConfirm.addEventListener("click", closeConfirmModal);

acceptConfirm.addEventListener("click", () => {
  if (typeof pendingConfirmAction === "function") pendingConfirmAction();
  closeConfirmModal();
});

confirmModal.addEventListener("click", (event) => {
  if (event.target === confirmModal) closeConfirmModal();
});

mapViewport.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    const zoomIntensity = event.deltaY < 0 ? 1.08 : 1 / 1.08;
    zoomAtPoint(zoomIntensity, event.clientX, event.clientY);
  },
  { passive: false },
);

mapViewport.addEventListener("pointerdown", (event) => {
  if (event.button !== 0) return;
  isDragging = true;
  mapViewport.classList.add("dragging");
  dragStart = {
    x: event.clientX,
    y: event.clientY,
    panX,
    panY,
  };
  mapViewport.setPointerCapture(event.pointerId);
});

mapViewport.addEventListener("pointermove", (event) => {
  if (isDragging) {
    panX = dragStart.panX + event.clientX - dragStart.x;
    panY = dragStart.panY + event.clientY - dragStart.y;
    clampPan();
    applyTransform();
    return;
  }

  const mapPoint = viewportToMapPoint(event.clientX, event.clientY);
  const region = getRegionAtMapPoint(mapPoint.x, mapPoint.y);
  updateHover(region, event.clientX, event.clientY);
});

mapViewport.addEventListener("pointerup", (event) => {
  if (!isDragging) return;
  isDragging = false;
  mapViewport.classList.remove("dragging");
  mapViewport.releasePointerCapture(event.pointerId);
});

mapViewport.addEventListener("pointerleave", () => {
  if (!isDragging) {
    clearHover();
  }
});

mapViewport.addEventListener("click", (event) => {
  const moved = Math.abs(event.clientX - dragStart.x) + Math.abs(event.clientY - dragStart.y);
  if (moved > 6) return;
  const mapPoint = viewportToMapPoint(event.clientX, event.clientY);
  const region = getRegionAtMapPoint(mapPoint.x, mapPoint.y);
  if (region) selectRegion(region);
});

function resetView() {
  const viewport = mapViewport.getBoundingClientRect();
  const naturalWidth = 1988;
  const naturalHeight = 791;
  const coverScale = Math.max(viewport.width / naturalWidth, viewport.height / naturalHeight);
  scale = Math.max(coverScale * 1.03, 0.42);
  panX = (viewport.width - naturalWidth * scale) / 2;
  panY = (viewport.height - naturalHeight * scale) / 2;
  applyTransform();
}

async function loadNameData() {
  try {
    const response = await fetch("name.json");
    if (!response.ok) throw new Error("name.json load failed");
    const data = await response.json();
    if (Array.isArray(data.firstNames) && Array.isArray(data.lastNames)) {
      nameData = data;
    }
  } catch {
    nameData = DEFAULT_NAMES;
  }
}

function initializeStudentPopulation() {
  allStudents = [];
  mailHistory = [];
  resources.phones = 10;
  managementAwareness = 0;
  bribeUsedDayKey = null;
  resetDailyInviteCounters();
  Object.entries(INITIAL_GRADE_COUNTS).forEach(([gradeText, range]) => {
    const grade = Number(gradeText);
    const count = randomInt(...range);
    for (let index = 0; index < count; index += 1) {
      allStudents.push(createStudent(grade));
    }
  });

  playerMembers = CORE_MEMBER_DEFS.map((member) => createCoreMember(member));
  allStudents.push(...playerMembers);

  appendLog(`学生生态初始化：全校 ${allStudents.length} 人，地下组织核心成员 ${playerMembers.length} 人。`);
  updateResourceUi();
  updateAwarenessUi();
  renderRecruitList(selectedRecruitGrade);
}

function createCoreMember(member) {
  const student = createStudent(member.grade, { forceFaction: member.faction, trustRange: [member.trust, member.trust] });
  student.name = member.name;
  student.role = member.role;
  student.personality = member.personality;
  student.status = "热情";
  student.trust = member.trust;
  student.stress = 0;
  return student;
}

function createStudent(grade, options = {}) {
  const personalityName = randomFrom(Object.keys(PERSONALITY_TEMPLATES));
  const template = PERSONALITY_TEMPLATES[personalityName];
  const faction = options.forceFaction || randomFrom(FACTIONS);
  const trust = options.trustRange ? randomInt(...options.trustRange) : generateTrustForFaction(faction);

  return {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    name: generateStudentName(),
    grade,
    personality: personalityName,
    faction,
    status: "正常",
    trust,
    stress: 0,
    stressResistance: template.stressResistance,
    abilities: {
      literature: randomInt(...template.literature),
      emergency: randomInt(...template.emergency),
      strength: randomInt(...template.strength),
      vision: randomInt(...template.vision),
    },
  };
}

function generateStudentName() {
  return `${randomFrom(nameData.firstNames)} ${randomFrom(nameData.lastNames)}`;
}

function generateTrustForFaction(faction) {
  if (faction === "管理层支持者") return randomInt(0, 20);
  return randomInt(0, 50);
}

function updateGameClock() {
  if (!document.body.classList.contains("game-active")) return;

  const now = performance.now();
  if (gameTime.lastTickAt === null) {
    gameTime.lastTickAt = now;
    return;
  }

  const elapsed = now - gameTime.lastTickAt;
  gameTime.lastTickAt = now;
  if (paused) return;

  gameTime.dayProgressMs += elapsed;
  while (gameTime.dayProgressMs >= REAL_MS_PER_GAME_DAY) {
    gameTime.dayProgressMs -= REAL_MS_PER_GAME_DAY;
    advanceGameDay();
  }
  updateTimeUi();
}

function advanceGameDay() {
  applyDailyStudentDrift();
  bribeUsedDayKey = null;
  resetDailyInviteCounters();
  gameTime.totalDay += 1;

  if (gameTime.day >= DAYS_PER_SEMESTER) {
    finishSemester();
  } else {
    gameTime.day += 1;
  }

  checkVoluntaryApplications();
  appendLog(`${getSemesterName()} 第 ${gameTime.day} 天开始：校园时间进入${getCurrentPhase()}。`);
  if (!studentDetailPanel.hidden) {
    const student = getSelectedStudent();
    if (student) updateStudentActionButtons(student);
  }
}

function finishSemester() {
  const endingSemester = gameTime.semester;
  appendLog(`${getSemesterName(endingSemester)} 第 ${DAYS_PER_SEMESTER} 天结束。学生压力与信任关系进入新一轮波动。`);

  if (endingSemester >= SEMESTERS_PER_YEAR) {
    advanceAcademicYear();
    gameTime.semester = 1;
  } else {
    gameTime.semester += 1;
  }
  gameTime.day = 1;
}

function advanceAcademicYear() {
  gameTime.year += 1;
  const graduatingIds = new Set(allStudents.filter((student) => student.grade >= 12).map((student) => student.id));
  const graduates = graduatingIds.size;

  allStudents = allStudents.filter((student) => !graduatingIds.has(student.id));
  playerMembers = playerMembers.filter((student) => !graduatingIds.has(student.id));
  allStudents.forEach((student) => {
    student.grade += 1;
  });

  let newcomers = 0;
  for (let grade = 6; grade <= 10; grade += 1) {
    const count = randomInt(5, 15);
    newcomers += count;
    for (let index = 0; index < count; index += 1) {
      allStudents.push(createStudent(grade));
    }
  }

  appendLog(`学年更替：${graduates} 名 12 年级学生离校，全体升年级，6-10 年级新增 ${newcomers} 名学生。`);
  updateMemberUi();
}

function applyDailyStudentDrift() {
  allStudents.forEach((student) => {
    if (student.status === "热情") student.trust = clamp(student.trust + randomInt(0, 2), 0, 100);
    if (student.status === "怀疑") student.trust = clamp(student.trust - randomInt(0, 2), 0, 100);
    if (student.status === "愤怒") student.stress = clamp(student.stress + randomInt(0, 3), 0, 100);
    if (student.status === "恐惧" && student.stressResistance === "低") student.stress = clamp(student.stress + randomInt(0, 2), 0, 100);
  });
  protectLockedMemberTrust();
}

function updateTimeUi() {
  dayLabel.textContent = `第 ${gameTime.totalDay} 天`;
  phaseLabel.textContent = getCurrentPhase();
  semesterDayLabel.textContent = `${getSemesterName()} 第 ${gameTime.day} 天`;
  dayProgressFill.style.width = `${Math.min(100, (gameTime.dayProgressMs / REAL_MS_PER_GAME_DAY) * 100)}%`;
  updateMapVisual();
}

function updateMemberUi() {
  memberCount.textContent = String(playerMembers.length);
}

function updateResourceUi() {
  phoneCount.textContent = String(resources.phones);
  phoneCount.closest(".resource-chip").title = `手机：${resources.phones}`;
}

function updateAwarenessUi() {
  awarenessMeter.style.width = `${managementAwareness}%`;
  awarenessChip.title = `管理层察觉：${managementAwareness}%`;
}

function renderRecruitList(grade) {
  recruitTitle.textContent = `${grade} 年级学生`;
  recruitList.replaceChildren();
  const students = allStudents.filter((student) => student.grade === grade);

  students.forEach((student) => {
    recruitList.append(createStudentRow(student));
  });
}

function renderMembersList() {
  coreMembersList.replaceChildren();
  membersList.replaceChildren();
  playerMembers.filter(isLeadershipMember).forEach((student) => {
    coreMembersList.append(createStudentRow(student, true));
  });
  playerMembers.filter((student) => !isLeadershipMember(student)).forEach((student) => {
    membersList.append(createStudentRow(student, true));
  });
  if (membersList.children.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-member-list";
    empty.textContent = "暂无普通成员。";
    membersList.append(empty);
  }
}

function createStudentRow(student, showRole = false) {
  const row = document.createElement("button");
  row.type = "button";
  row.className = "student-row";
  row.dataset.studentId = student.id;
  row.classList.toggle("active", student.id === selectedStudentId);
  row.classList.toggle("joined", isPlayerMember(student.id));

  const avatar = document.createElement("img");
  avatar.src = "assets/icon/人.png";
  avatar.alt = "";

  const body = document.createElement("span");
  const name = document.createElement("strong");
  name.textContent = showRole && student.role ? `${student.name} - ${student.role}` : student.name;
  const meta = document.createElement("span");
  meta.textContent = `${student.personality} / ${student.faction}`;
  body.append(name, meta);

  const trust = document.createElement("em");
  trust.textContent = isPlayerMember(student.id) && !showRole ? "已加入" : `${student.trust}%`;

  row.append(avatar, body, trust);
  row.addEventListener("click", () => showStudentDetail(student.id));
  return row;
}

function showStudentDetail(studentId) {
  const student = allStudents.find((candidate) => candidate.id === studentId);
  if (!student) return;
  selectedStudentId = studentId;
  document.querySelectorAll(".student-row").forEach((row) => row.classList.toggle("active", row.dataset.studentId === studentId));

  studentDetailName.textContent = student.role ? `${student.name} - ${student.role}` : student.name;
  studentDetailGrade.textContent = `${student.grade} 年级`;
  studentDetailPersonality.textContent = student.personality;
  studentDetailFaction.textContent = student.faction;
  studentDetailStatus.textContent = student.status;
  studentDetailTrust.textContent = `${student.trust}%`;
  studentDetailStress.textContent = `${student.stress}%`;
  studentDetailResistance.textContent = student.stressResistance;
  studentLiterature.textContent = `文学 ${student.abilities.literature}`;
  studentEmergency.textContent = `应急 ${student.abilities.emergency}`;
  studentStrength.textContent = `体力 ${student.abilities.strength}`;
  studentVision.textContent = `视力 ${student.abilities.vision}`;
  updateStudentActionButtons(student);
  renderPositionOptions(student);
  studentDetailPanel.hidden = false;
}

function updateStudentActionButtons(student) {
  const alreadyMember = isPlayerMember(student.id);
  const selectedFromMembers = !membersPanel.hidden && alreadyMember;
  const protectedMember = isProtectedCoreMember(student);
  const bribeDisabledReason = getBribeDisabledReason(student);
  const inviteChance = getInviteChance(student);

  bribeStudent.hidden = selectedFromMembers;
  inviteStudent.hidden = selectedFromMembers;
  removeMember.hidden = !selectedFromMembers;
  removeMember.parentElement.classList.toggle("member-mode", selectedFromMembers);

  bribeStudent.disabled = alreadyMember || Boolean(bribeDisabledReason);
  bribeStudent.title = alreadyMember ? "该学生已经是组织成员" : bribeDisabledReason || "使用 5 个手机提高信任度";

  inviteStudent.disabled = alreadyMember || inviteChance <= 0;
  inviteStudent.title = alreadyMember ? "该学生已经是组织成员" : inviteChance <= 0 ? "信任度低于 20%，无法邀请" : `成功概率 ${Math.round(inviteChance * 100)}%`;
  removeMember.disabled = protectedMember;
  removeMember.title = protectedMember ? "初始核心成员不可移除" : "从组织成员中移除，信任度下降 30%";
}

function renderPositionOptions(student) {
  const selectedFromMembers = !membersPanel.hidden && isPlayerMember(student.id);
  positionPanel.hidden = !selectedFromMembers;
  positionOptions.replaceChildren();
  if (!selectedFromMembers) return;

  if (isPlayerAvatar(student)) {
    const locked = document.createElement("p");
    locked.className = "position-locked";
    locked.textContent = "玩家身份固定为主席。";
    positionOptions.append(locked);
    return;
  }

  ORGANIZATION_ROLES.forEach((role) => {
    const occupant = getRoleOccupant(role);
    const occupiedByOther = role !== "成员" && occupant && occupant.id !== student.id;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "position-option";
    button.classList.toggle("active", student.role === role);
    button.disabled = occupiedByOther;
    button.textContent = role === "成员" ? "成员" : `${role} ${occupant ? "1/1" : "0/1"}`;
    button.title = occupiedByOther ? `${role} 已由 ${occupant.name} 担任` : `任命为${role}`;
    button.addEventListener("click", () => changeMemberRole(student, role));
    positionOptions.append(button);
  });
}

function getRoleOccupant(role) {
  if (role === "成员") return null;
  return playerMembers.find((member) => member.role === role) || null;
}

function changeMemberRole(student, role) {
  if (!isPlayerMember(student.id) || isPlayerAvatar(student)) return;
  const occupant = getRoleOccupant(role);
  if (role !== "成员" && occupant && occupant.id !== student.id) return;
  student.role = role;
  renderMembersList();
  showStudentDetail(student.id);
  appendLog(`${student.name} 的职位变更为 ${role}。`);
}

function getSelectedStudent() {
  return allStudents.find((student) => student.id === selectedStudentId) || null;
}

function isPlayerMember(studentId) {
  return playerMembers.some((member) => member.id === studentId);
}

function isLeadershipMember(student) {
  return isPlayerMember(student?.id) && student?.role !== "成员";
}

function isProtectedCoreMember(student) {
  return student?.name === "Hong Xixi" || student?.name === "Li Xinyu";
}

function isPlayerAvatar(student) {
  return student?.name === "Hong Xixi" && student?.role === "我";
}

function protectLockedMemberTrust() {
  allStudents.forEach((student) => {
    if (isPlayerAvatar(student)) student.trust = 100;
  });
}

function getCurrentDayKey() {
  return `${gameTime.year}-${gameTime.semester}-${gameTime.day}`;
}

function getBribeDisabledReason(student) {
  if (resources.phones < BRIBE_PHONE_COST) return "手机不足";
  if (bribeUsedDayKey === getCurrentDayKey()) return "今天已经贿赂过一名学生";
  if (student.trust >= 100) return "该学生信任度已经满值";
  return "";
}

function canBribeStudent(student) {
  return !isPlayerMember(student.id) && !getBribeDisabledReason(student);
}

function getInviteChance(student) {
  if (student.trust < 20) return 0;
  if (student.trust < 50) return 0.5;
  if (student.trust < 70) return 0.75;
  return 1;
}

function openConfirmModal(messageHtml, onConfirm) {
  confirmMessage.innerHTML = messageHtml;
  pendingConfirmAction = onConfirm;
  confirmModal.hidden = false;
  requestAnimationFrame(() => confirmModal.classList.add("open"));
}

function closeConfirmModal() {
  confirmModal.classList.remove("open");
  pendingConfirmAction = null;
  window.setTimeout(() => {
    if (!confirmModal.classList.contains("open")) confirmModal.hidden = true;
  }, 160);
}

function confirmBribeStudent(student) {
  if (!canBribeStudent(student)) return;
  resources.phones -= BRIBE_PHONE_COST;
  bribeUsedDayKey = getCurrentDayKey();
  if (student.faction === "管理层支持者" && Math.random() < 0.3) {
    managementAwareness = clamp(managementAwareness + 10, 0, 100);
    updateResourceUi();
    updateAwarenessUi();
    refreshStudentViews(student);
    appendLog(`${student.name} 收下手机后向管理层上报，察觉值上升到 ${managementAwareness}%。`);
    return;
  }

  student.trust = clamp(student.trust + BRIBE_TRUST_GAIN, 0, 100);
  student.status = "热情";
  updateResourceUi();
  refreshStudentViews(student);
  appendLog(`${student.name} 的信任度提高到 ${student.trust}%。`);
}

function confirmInviteStudent(student) {
  if (isPlayerMember(student.id)) return;
  const chance = getInviteChance(student);
  if (chance <= 0) return;

  dailyInviteAttempts += 1;
  applyInviteAttemptPressure();

  if (Math.random() <= chance) {
    addStudentToOrganization(student, "手动邀请");
    appendLog(`${student.name} 同意加入地下组织。`);
  } else {
    dailyInviteFailures += 1;
    student.status = "怀疑";
    student.trust = clamp(student.trust - randomInt(2, 6), 0, 100);
    appendLog(`${student.name} 拒绝了邀请，关系出现动摇。`);
    applyInviteFailurePressure();
    refreshStudentViews(student);
  }
}

function applyInviteAttemptPressure() {
  if (dailyInviteAttempts <= 10 || dailyInviteAwarenessPenaltyApplied) return;
  dailyInviteAwarenessPenaltyApplied = true;
  managementAwareness = clamp(managementAwareness + 5, 0, 100);
  updateAwarenessUi();
  appendLog(`频繁邀请引起管理层注意，察觉值上升到 ${managementAwareness}%。`);
}

function applyInviteFailurePressure() {
  if (dailyInviteFailures <= 5 || dailyInviteTrustPenaltyApplied) return;
  dailyInviteTrustPenaltyApplied = true;
  allStudents.forEach((student) => {
    student.trust = clamp(student.trust - 5, 0, 100);
  });
  protectLockedMemberTrust();
  refreshStudentViews(getSelectedStudent() || allStudents[0]);
  appendLog("一天内邀请失败过多，学生群体信任度整体下降 5%。");
}

function resetDailyInviteCounters() {
  dailyInviteAttempts = 0;
  dailyInviteFailures = 0;
  dailyInviteAwarenessPenaltyApplied = false;
  dailyInviteTrustPenaltyApplied = false;
}

function addStudentToOrganization(student, source = "申请") {
  if (isPlayerMember(student.id)) return;
  student.role = "成员";
  student.status = "热情";
  playerMembers.push(student);
  mailHistory.forEach((mail) => {
    if (mail.studentId === student.id && mail.status === "pending") {
      mail.status = "accepted";
      mail.handledDayKey = getCurrentDayKey();
    }
  });
  updateMemberUi();
  refreshStudentViews(student);
  renderMailList();
}

function removeStudentFromOrganization(student) {
  if (isProtectedCoreMember(student)) return;
  playerMembers = playerMembers.filter((member) => member.id !== student.id);
  student.trust = clamp(student.trust - 30, 0, 100);
  student.status = "怀疑";
  student.role = "";
  updateMemberUi();
  renderMembersList();
  if (!recruitPanel.hidden) renderRecruitList(selectedRecruitGrade);
  showStudentDetail(student.id);
  appendLog(`${student.name} 离开了组织，信任度下降到 ${student.trust}%。`);
}

function refreshStudentViews(student) {
  if (!recruitPanel.hidden) renderRecruitList(selectedRecruitGrade);
  if (!membersPanel.hidden) renderMembersList();
  if (!studentDetailPanel.hidden && selectedStudentId === student.id) showStudentDetail(student.id);
}

function checkVoluntaryApplications() {
  if (factionFame < VOLUNTARY_FAME_THRESHOLD) return;
  const candidates = allStudents.filter(
    (student) =>
      !isPlayerMember(student.id) &&
      student.trust >= VOLUNTARY_TRUST_THRESHOLD &&
      !mailHistory.some((mail) => mail.studentId === student.id && mail.status === "pending"),
  );
  if (candidates.length === 0) return;

  const student = randomFrom(candidates);
  const template = randomFrom(MAIL_TEMPLATES);
  mailHistory.unshift({
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    studentId: student.id,
    subject: template.subject,
    body: template.body,
    dayKey: getCurrentDayKey(),
    status: "pending",
  });
  appendLog(`${student.name} 发来一封加入申请邮件。`);
  if (!mailPanel.hidden) renderMailList();
}

function renderMailList() {
  mailList.replaceChildren();
  if (mailHistory.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-mail";
    empty.textContent = "暂无邮件记录。";
    mailList.append(empty);
    return;
  }

  mailHistory.forEach((mail) => {
    const student = allStudents.find((candidate) => candidate.id === mail.studentId);

    const card = document.createElement("article");
    card.className = "mail-card";
    card.classList.toggle("handled", mail.status !== "pending");

    const subject = document.createElement("h3");
    subject.textContent = `主题：${mail.subject}`;

    const body = document.createElement("p");
    body.textContent = `${mail.body}\n${student?.name || "已离校学生"}`;

    const status = document.createElement("span");
    status.className = `mail-status ${mail.status}`;
    status.textContent = getMailStatusText(mail.status);

    const actions = document.createElement("div");
    actions.className = "mail-actions";

    if (mail.status === "pending" && student) {
      const reject = document.createElement("button");
      reject.type = "button";
      reject.className = "mail-reject";
      reject.textContent = "拒绝";
      reject.addEventListener("click", () => rejectApplication(mail.id, student));

      const accept = document.createElement("button");
      accept.type = "button";
      accept.className = "mail-accept";
      accept.textContent = "同意";
      accept.addEventListener("click", () => acceptApplication(mail.id, student));

      actions.append(reject, accept);
    }

    card.append(subject, body, status);
    if (actions.children.length > 0) card.append(actions);
    mailList.append(card);
  });
}

function acceptApplication(mailId, student) {
  const mail = mailHistory.find((candidate) => candidate.id === mailId);
  if (mail) {
    mail.status = "accepted";
    mail.handledDayKey = getCurrentDayKey();
  }
  addStudentToOrganization(student, "自愿申请");
  appendLog(`${student.name} 的加入申请已通过。`);
}

function rejectApplication(mailId, student) {
  const mail = mailHistory.find((candidate) => candidate.id === mailId);
  if (mail) {
    mail.status = "rejected";
    mail.handledDayKey = getCurrentDayKey();
  }
  student.status = "怀疑";
  student.trust = clamp(student.trust - randomInt(1, 4), 0, 100);
  renderMailList();
  refreshStudentViews(student);
  appendLog(`${student.name} 的加入申请被拒绝。`);
}

function getMailStatusText(status) {
  if (status === "accepted") return "已同意";
  if (status === "rejected") return "已拒绝";
  return "未处理";
}

function getCurrentPhase() {
  let elapsed = gameTime.dayProgressMs;
  for (const phase of DAY_SCHEDULE) {
    if (elapsed < phase.durationMs) return phase.label;
    elapsed -= phase.durationMs;
  }
  return DAY_SCHEDULE[DAY_SCHEDULE.length - 1].label;
}

function getCurrentMapVisual() {
  const elapsed = gameTime.dayProgressMs;
  if (elapsed >= 180 * 1000) return MAP_VISUALS.night;
  if (elapsed >= 150 * 1000) return MAP_VISUALS.dusk;
  if (elapsed >= 60 * 1000 && elapsed < 90 * 1000) return MAP_VISUALS.lunch;
  return MAP_VISUALS.day;
}

function updateMapVisual() {
  const nextVisual = getCurrentMapVisual();
  if (nextVisual === currentMapVisual) return;
  crossfadeMapVisual(nextVisual);
}

function crossfadeMapVisual(nextVisual) {
  currentMapVisual = nextVisual;
  inactiveMapImage.src = nextVisual;
  inactiveMapImage.classList.remove("active");
  inactiveMapImage.offsetHeight;
  inactiveMapImage.classList.add("active");
  activeMapImage.classList.remove("active");
  [activeMapImage, inactiveMapImage] = [inactiveMapImage, activeMapImage];
}

function getSemesterName(semester = gameTime.semester) {
  return semester === 1 ? "第一学期" : "第二学期";
}

function appendLog(message) {
  const item = document.createElement("li");
  const time = document.createElement("time");
  time.textContent = `第${gameTime.day}天`;
  item.append(time, ` ${message}`);
  logList.prepend(item);

  while (logList.children.length > 6) {
    logList.lastElementChild.remove();
  }
}

function zoomAtViewportCenter(multiplier) {
  const rect = mapViewport.getBoundingClientRect();
  zoomAtPoint(multiplier, rect.left + rect.width / 2, rect.top + rect.height / 2);
}

function zoomAtPoint(multiplier, clientX, clientY) {
  const rect = mapViewport.getBoundingClientRect();
  const beforeX = (clientX - rect.left - panX) / scale;
  const beforeY = (clientY - rect.top - panY) / scale;
  const nextScale = clamp(scale * multiplier, 0.36, 3.2);
  scale = nextScale;
  panX = clientX - rect.left - beforeX * scale;
  panY = clientY - rect.top - beforeY * scale;
  clampPan();
  applyTransform();
}

function applyTransform() {
  mapContent.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
}

function updateKeyboardPan() {
  if (!document.body.classList.contains("game-active") || pressedKeys.size === 0) return;
  const speed = 7;
  let dx = 0;
  let dy = 0;

  if (pressedKeys.has("w")) dy += speed;
  if (pressedKeys.has("s")) dy -= speed;
  if (pressedKeys.has("a")) dx += speed;
  if (pressedKeys.has("d")) dx -= speed;

  if (dx === 0 && dy === 0) return;
  panX += dx;
  panY += dy;
  clampPan();
  applyTransform();
}

function shouldCaptureMapKeys(event) {
  if (!document.body.classList.contains("game-active")) return false;
  if (event.metaKey || event.ctrlKey || event.altKey) return false;
  const tagName = event.target?.tagName?.toLowerCase();
  return !["input", "textarea", "select", "button"].includes(tagName);
}

function clampPan() {
  const rect = mapViewport.getBoundingClientRect();
  const mapWidth = 1988 * scale;
  const mapHeight = 791 * scale;
  const margin = 80;

  if (mapWidth <= rect.width) {
    panX = (rect.width - mapWidth) / 2;
  } else {
    panX = clamp(panX, rect.width - mapWidth - margin, margin);
  }

  if (mapHeight <= rect.height) {
    panY = (rect.height - mapHeight) / 2;
  } else {
    panY = clamp(panY, rect.height - mapHeight - margin, margin);
  }
}

function viewportToMapPoint(clientX, clientY) {
  const rect = mapViewport.getBoundingClientRect();
  return {
    x: (clientX - rect.left - panX) / scale,
    y: (clientY - rect.top - panY) / scale,
  };
}

function getRegionAtMapPoint(x, y) {
  if (!indexReady || x < 0 || y < 0 || x >= campusMap.naturalWidth || y >= campusMap.naturalHeight) {
    return null;
  }

  const indexX = Math.floor((x / campusMap.naturalWidth) * indexCanvas.width);
  const indexY = Math.floor((y / campusMap.naturalHeight) * indexCanvas.height);
  const pixel = indexCtx.getImageData(indexX, indexY, 1, 1).data;
  return regions.find((region) => sameColor(region.color, pixel)) || null;
}

function updateHover(region, clientX, clientY) {
  if (!region) {
    clearHover();
    return;
  }

  hoverCard.hidden = false;
  hoverName.textContent = region.name;
  hoverFunction.textContent = region.role;
  hoverCard.style.left = `${clientX + 14}px`;
  hoverCard.style.top = `${clientY + 14}px`;

  if (hoveredRegion?.name !== region.name) {
    hoveredRegion = region;
    drawRegionHighlight(region);
  }
}

function clearHover() {
  hoverCard.hidden = true;
  hoveredRegion = null;
  if (!selectedRegion) {
    clearHighlight();
  } else {
    drawRegionHighlight(selectedRegion);
  }
}

function selectRegion(region) {
  selectedRegion = region;
  regionPanel.hidden = false;
  regionName.textContent = region.name;
  regionFunction.textContent = region.role;
  regionSupport.textContent = `${region.support}%`;
  regionPressure.textContent = `${region.pressure}%`;
  regionPatrol.textContent = region.patrol;
  regionMembers.textContent = `${region.members} 人`;
  drawRegionHighlight(region, true);
}

function drawRegionHighlight(region, selected = false) {
  if (!indexReady) return;
  const key = `${region.color.join(",")}:${selected ? "selected" : "hover"}`;
  if (currentHighlightKey === key) return;
  currentHighlightKey = key;

  const width = highlightCanvas.width;
  const height = highlightCanvas.height;
  const image = highlightCtx.createImageData(width, height);
  const output = image.data;
  const source = indexCtx.getImageData(0, 0, indexCanvas.width, indexCanvas.height).data;
  const sxRatio = indexCanvas.width / width;
  const syRatio = indexCanvas.height / height;
  const [r, g, b] = region.color;

  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const sx = Math.floor(x * sxRatio);
      const sy = Math.floor(y * syRatio);
      const sourceIndex = (sy * indexCanvas.width + sx) * 4;
      if (source[sourceIndex] !== r || source[sourceIndex + 1] !== g || source[sourceIndex + 2] !== b) {
        continue;
      }

      const left = sourceIndex - 4;
      const right = sourceIndex + 4;
      const up = sourceIndex - indexCanvas.width * 4;
      const down = sourceIndex + indexCanvas.width * 4;
      const isEdge =
        source[left] !== r ||
        source[left + 1] !== g ||
        source[left + 2] !== b ||
        source[right] !== r ||
        source[right + 1] !== g ||
        source[right + 2] !== b ||
        source[up] !== r ||
        source[up + 1] !== g ||
        source[up + 2] !== b ||
        source[down] !== r ||
        source[down + 1] !== g ||
        source[down + 2] !== b;

      const outputIndex = (y * width + x) * 4;
      if (isEdge) {
        output[outputIndex] = selected ? 255 : 250;
        output[outputIndex + 1] = selected ? 190 : 255;
        output[outputIndex + 2] = selected ? 40 : 255;
        output[outputIndex + 3] = 255;

        thicken(output, width, height, x, y, selected);
      } else if (selected) {
        output[outputIndex] = 255;
        output[outputIndex + 1] = 210;
        output[outputIndex + 2] = 70;
        output[outputIndex + 3] = 26;
      } else {
        output[outputIndex] = 255;
        output[outputIndex + 1] = 255;
        output[outputIndex + 2] = 255;
        output[outputIndex + 3] = 16;
      }
    }
  }

  highlightCtx.clearRect(0, 0, width, height);
  highlightCtx.putImageData(image, 0, 0);
}

function thicken(output, width, height, x, y, selected) {
  const radius = selected ? 2 : 1;
  for (let oy = -radius; oy <= radius; oy += 1) {
    for (let ox = -radius; ox <= radius; ox += 1) {
      const nx = x + ox;
      const ny = y + oy;
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
      const index = (ny * width + nx) * 4;
      output[index] = selected ? 255 : 250;
      output[index + 1] = selected ? 190 : 255;
      output[index + 2] = selected ? 40 : 255;
      output[index + 3] = Math.max(output[index + 3], selected ? 230 : 210);
    }
  }
}

function clearHighlight() {
  currentHighlightKey = "";
  highlightCtx.clearRect(0, 0, highlightCanvas.width, highlightCanvas.height);
}

function sameColor(color, pixel) {
  return color[0] === pixel[0] && color[1] === pixel[1] && color[2] === pixel[2];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setupUiAudio() {
  const buttons = document.querySelectorAll("button:not(:disabled)");
  buttons.forEach((button) => {
    button.addEventListener("pointerenter", () => {
      const now = performance.now();
      if (now - lastHoverSoundAt < 90) return;
      lastHoverSoundAt = now;
      playSound(hoverSound, 0.32);
    });

    if (["startGame", "selectStudents", "selectFaculty"].includes(button.id)) return;
    button.addEventListener("click", () => {
      playRandomClickSound();
    });
  });
}

function setupMenuMusic() {
  menuMusic.volume = 0.46;
  gameMusic.volume = 0.42;
  menuMusic.addEventListener("ended", () => {
    if (musicMode === "loop") return;
    if (musicMode === "random") {
      currentTrackIndex = getRandomTrackIndex(currentTrackIndex, 0);
    } else {
      currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length;
    }
    musicSelect.value = String(currentTrackIndex);
    loadCurrentMusic();
    playMenuMusic();
  });

  gameMusic.addEventListener("ended", () => {
    if (musicMode === "loop") return;
    if (musicMode === "random") {
      gameTrackIndex = getRandomTrackIndex(gameTrackIndex, 1);
    } else {
      gameTrackIndex = gameTrackIndex >= musicTracks.length - 1 ? 1 : gameTrackIndex + 1;
    }
    loadGameMusic();
    playGameMusic();
  });

  playMenuMusic();
  window.addEventListener(
    "pointerdown",
    () => {
      playMenuMusic();
    },
    { once: true },
  );
}

function loadCurrentMusic() {
  menuMusic.src = musicTracks[currentTrackIndex].src;
  menuMusic.loop = musicMode === "loop";
  menuMusic.load();
}

function playMenuMusic() {
  menuMusic.play().catch(() => {});
}

function startGameMusicAfterDelay() {
  window.clearTimeout(gameMusicTimer);
  gameMusic.pause();
  gameMusic.currentTime = 0;
  gameTrackIndex = getRandomTrackIndex(0, 1);
  loadGameMusic();
  gameMusicTimer = window.setTimeout(() => {
    if (document.body.classList.contains("game-active")) {
      playGameMusic();
    }
  }, 3000);
}

function loadGameMusic() {
  gameMusic.src = musicTracks[gameTrackIndex].src;
  gameMusic.loop = musicMode === "loop";
  gameMusic.load();
}

function playGameMusic() {
  gameMusic.play().catch(() => {});
}

function getRandomTrackIndex(previousIndex, minIndex = 0) {
  const candidates = musicTracks.map((_, index) => index).filter((index) => index >= minIndex && index !== previousIndex);
  return candidates[Math.floor(Math.random() * candidates.length)] ?? minIndex;
}

function openSettingsPanel() {
  settingsPanel.hidden = false;
  requestAnimationFrame(() => {
    document.body.classList.add("settings-open");
  });
}

function closeSettingsPanel() {
  document.body.classList.remove("settings-open");
  window.setTimeout(() => {
    if (!document.body.classList.contains("settings-open")) {
      settingsPanel.hidden = true;
    }
  }, 180);
}

function setupMenuIdle() {
  resetMenuIdleTimer();
  ["pointermove", "pointerdown", "keydown"].forEach((eventName) => {
    window.addEventListener(eventName, resetMenuIdleTimer, { passive: true });
  });
}

function resetMenuIdleTimer() {
  document.body.classList.remove("menu-idle");
  window.clearTimeout(menuIdleTimer);
  if (!document.body.classList.contains("menu-active")) return;
  menuIdleTimer = window.setTimeout(() => {
    if (document.body.classList.contains("menu-active") && !document.body.classList.contains("settings-open")) {
      document.body.classList.add("menu-idle");
    }
  }, 3000);
}

function playRandomClickSound() {
  const sound = clickSounds[Math.floor(Math.random() * clickSounds.length)];
  playSound(sound);
}

function playSound(sound, volume = 0.58) {
  sound.pause();
  sound.currentTime = 0;
  sound.volume = volume;
  sound.play().catch(() => {});
}


