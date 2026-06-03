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

const loadingScreen = document.getElementById("loadingScreen");
const loadingPercent = document.getElementById("loadingPercent");
const loadingFill = document.getElementById("loadingFill");
const loadingStatus = document.getElementById("loadingStatus");
const loadingContinue = document.getElementById("loadingContinue");
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
const squadMarkerLayer = document.getElementById("squadMarkerLayer");
const memberMarkerLayer = document.getElementById("memberMarkerLayer");
const headquartersSelectOverlay = document.getElementById("headquartersSelectOverlay");
const headquartersHintText = document.getElementById("headquartersHintText");
const hoverCard = document.getElementById("hoverCard");
const hoverName = document.getElementById("hoverName");
const hoverFunction = document.getElementById("hoverFunction");
const eventLog = document.getElementById("eventLog");
const collapseLog = document.getElementById("collapseLog");
const expandLog = document.getElementById("expandLog");
const pauseToggle = document.getElementById("pauseToggle");
const pauseIcon = document.getElementById("pauseIcon");
const speedControl = document.getElementById("speedControl");
const speedOptions = document.querySelectorAll(".speed-option");
const zoomValue = document.getElementById("zoomValue");
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
const squadButton = document.getElementById("squadButton");
const squadPanel = document.getElementById("squadPanel");
const squadList = document.getElementById("squadList");
const squadCreateModal = document.getElementById("squadCreateModal");
const closeSquadCreate = document.getElementById("closeSquadCreate");
const squadFlagButton = document.getElementById("squadFlagButton");
const squadFlagImage = document.getElementById("squadFlagImage");
const squadFlagEmoji = document.getElementById("squadFlagEmoji");
const squadNameInput = document.getElementById("squadNameInput");
const draftSquadStats = document.getElementById("draftSquadStats");
const draftSquadMembers = document.getElementById("draftSquadMembers");
const squadCandidateList = document.getElementById("squadCandidateList");
const createSquadConfirm = document.getElementById("createSquadConfirm");
const relocateSquadButton = document.getElementById("relocateSquadButton");
const flagPicker = document.getElementById("flagPicker");
const squadMemberContext = document.getElementById("squadMemberContext");
const removeDraftMember = document.getElementById("removeDraftMember");
const inspectDraftMember = document.getElementById("inspectDraftMember");
const squadListContext = document.getElementById("squadListContext");
const editSquad = document.getElementById("editSquad");
const disbandSquad = document.getElementById("disbandSquad");
const candidateInfoPopup = document.getElementById("candidateInfoPopup");
const studentDetailPanel = document.getElementById("studentDetailPanel");
const studentDetailName = document.getElementById("studentDetailName");
const studentDetailGrade = document.getElementById("studentDetailGrade");
const studentDetailPersonality = document.getElementById("studentDetailPersonality");
const studentDetailFaction = document.getElementById("studentDetailFaction");
const studentDetailStatus = document.getElementById("studentDetailStatus");
const studentDetailTrust = document.getElementById("studentDetailTrust");
const studentDetailStress = document.getElementById("studentDetailStress");
const studentDetailSquad = document.getElementById("studentDetailSquad");
const studentDetailResistance = document.getElementById("studentDetailResistance");
const studentDetailResistanceTip = document.getElementById("studentDetailResistanceTip");
const studentLiterature = document.getElementById("studentLiterature");
const studentEmergency = document.getElementById("studentEmergency");
const studentStrength = document.getElementById("studentStrength");
const studentVision = document.getElementById("studentVision");
const positionPanel = document.getElementById("positionPanel");
const positionOptions = document.getElementById("positionOptions");
const phoneCount = document.getElementById("phoneCount");
const pressureChip = document.getElementById("pressureChip");
const pressureMeter = document.getElementById("pressureMeter");
const pressureTip = document.getElementById("pressureTip");
const stabilityChip = document.getElementById("stabilityChip");
const stabilityMeter = document.getElementById("stabilityMeter");
const stabilityTip = document.getElementById("stabilityTip");
const studentSupportChip = document.getElementById("studentSupportChip");
const studentSupportMeter = document.getElementById("studentSupportMeter");
const studentSupportTip = document.getElementById("studentSupportTip");
const fameChip = document.getElementById("fameChip");
const fameMeter = document.getElementById("fameMeter");
const fameTip = document.getElementById("fameTip");
const awarenessChip = document.getElementById("awarenessChip");
const awarenessMeter = document.getElementById("awarenessMeter");
const awarenessTip = document.getElementById("awarenessTip");
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
const regionMembersButton = document.getElementById("regionMembersButton");
const regionStudentCount = document.getElementById("regionStudentCount");
const regionMemberPanel = document.getElementById("regionMemberPanel");
const regionMemberPanelTitle = document.getElementById("regionMemberPanelTitle");
const regionMemberList = document.getElementById("regionMemberList");
const squadInfoPanel = document.getElementById("squadInfoPanel");
const squadInfoFlag = document.getElementById("squadInfoFlag");
const squadInfoName = document.getElementById("squadInfoName");
const squadInfoStatus = document.getElementById("squadInfoStatus");
const squadInfoCount = document.getElementById("squadInfoCount");
const squadInfoHeadquarters = document.getElementById("squadInfoHeadquarters");
const squadInfoStability = document.getElementById("squadInfoStability");
const squadInfoPressure = document.getElementById("squadInfoPressure");

const indexImage = new Image();
indexImage.src = "assets/索引图.png";

const indexCanvas = document.createElement("canvas");
const indexCtx = indexCanvas.getContext("2d", { willReadFrequently: true });
const clickSounds = [new Audio("assets/sound/点击按钮1.mp3"), new Audio("assets/sound/点击按钮2.mp3")];
const hoverSound = new Audio("assets/sound/翻页.mp3");
const startSound = new Audio("assets/sound/装备.mp3");
const pauseSound = new Audio("assets/sound/时间暂停.wav");
const createSound = new Audio("assets/sound/创建.mp3");
const roleChangeSound = new Audio("assets/sound/点击按钮2.mp3");
const musicTracks = [
  { name: "Aphelion", src: "assets/music/Aphelion.mp3" },
  { name: "Phoenix", src: "assets/music/Phoenix.mp3" },
  { name: "Scott", src: "assets/music/Scott.mp3" },
  { name: "There was a time", src: "assets/music/There_was_a_time.mp3" },
];
const PRELOAD_RESOURCES = [
  "favicon.ico",
  "name.json",
  "assets/主页.png",
  "assets/学校视图.png",
  "assets/索引图.png",
  "assets/中午TCIS.png",
  "assets/傍晚TCIS.png",
  "assets/夜晚TCIS.png",
  "assets/学生阵营背景.png",
  "assets/学生阵营logo.png",
  "assets/学生代表.png",
  "assets/老师阵营背景.png",
  "assets/老师阵营logo.png",
  "assets/老师代表.png",
  "assets/image/云朵.png",
  "assets/icon/随机.png",
  "assets/icon/管理.png",
  "assets/icon/行动小队.png",
  "assets/icon/人数.png",
  "assets/icon/突发事件.png",
  "assets/icon/区域.png",
  "assets/icon/食物.png",
  "assets/icon/循环.png",
  "assets/icon/设置.png",
  "assets/icon/信任度.png",
  "assets/icon/停.png",
  "assets/icon/文学能力.png",
  "assets/icon/手机.png",
  "assets/icon/人.png",
  "assets/icon/知名度.png",
  "assets/icon/日志.png",
  "assets/icon/巡逻.png",
  "assets/icon/支持率.png",
  "assets/icon/压力.png",
  "assets/icon/招募.png",
  "assets/icon/察觉.png",
  "assets/icon/时间.png",
  "assets/icon/音频.png",
  "assets/icon/时间指针.png",
  "assets/icon/邮件.png",
  "assets/icon/开始.png",
  "assets/icon/收起.png",
  "assets/icon/稳定度.png",
  "assets/icon/钱.png",
  "assets/icon/禁止.png",
  "assets/icon/科技树.png",
  "assets/sound/装备.mp3",
  "assets/sound/翻页.mp3",
  "assets/sound/科技树解锁.mp3",
  "assets/sound/时间暂停.wav",
  "assets/sound/点击按钮1.mp3",
  "assets/sound/点击按钮2.mp3",
  "assets/sound/创建.mp3",
  "assets/sound/邮件提示.mp3",
  "assets/music/Aphelion.mp3",
  "assets/music/Phoenix.mp3",
  "assets/music/Scott.mp3",
  "assets/music/There_was_a_time.mp3",
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
const SQUAD_MEMBER_ROLES = ["队长", "宣传员", "侦查员", "成员"];
const LIMITED_SQUAD_ROLES = ["队长", "宣传员", "侦查员"];
const STRESS_RESISTANCE_RULES = {
  低: { gainMultiplier: 0.9, dailyRecovery: 1 },
  中: { gainMultiplier: 0.75, dailyRecovery: 2 },
  高: { gainMultiplier: 0.6, dailyRecovery: 3 },
};
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
let timeSpeed = 1;
let lastTimeSpeed = 1;
let lastHoverSoundAt = 0;
let currentTrackIndex = 0;
let musicMode = "sequence";
let gameTrackIndex = 1;
let gameMusicTimer = null;
let menuIdleTimer = null;
let nameData = DEFAULT_NAMES;
let allStudents = [];
let playerMembers = [];
let actionSquads = [];
let draftSquad = null;
let pendingHeadquartersSquad = null;
let choosingSquadHeadquarters = false;
let selectedCandidateId = null;
let contextDraftMemberId = null;
let contextSquadId = null;
let selectedSquadInfoId = null;
let mailHistory = [];
let selectedRecruitGrade = 6;
let selectedStudentId = null;
let studentDetailSource = "";
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
let lastStudentScheduleKey = "";
const memberMarkerState = new Map();
let lastMarkerUpdateAt = 0;
let gameTime = {
  day: 1,
  totalDay: 1,
  semester: 1,
  year: 1,
  dayProgressMs: 0,
  lastTickAt: null,
};

document.body.classList.add("loading-active", "menu-active");
setupUiAudio();
setupMenuMusic();
setupMenuIdle();
preloadStartupResources();
window.tpDebug = () => ({
  paused,
  timeSpeed,
  lastTimeSpeed,
  gameTime: { ...gameTime },
  currentMapVisual,
  resources: { ...resources },
  pendingApplications: mailHistory.filter((mail) => mail.status === "pending").length,
  mailHistory: mailHistory.length,
  actionSquads: actionSquads.length,
  selectedRegion: selectedRegion?.name || "",
  regionPopulation: selectedRegion ? getStudentsInRegion(selectedRegion.name).length : 0,
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

loadingContinue.addEventListener("click", hideLoadingScreen);

window.setInterval(updateGameClock, 1000);
window.setInterval(updateKeyboardPan, 16);
requestAnimationFrame(updateOrganizationMemberMarkers);

window.addEventListener("keydown", (event) => {
  if (choosingSquadHeadquarters && event.key === "Enter") {
    event.preventDefault();
    completeHeadquartersSelection();
    return;
  }
  if (event.key === "Escape" && handleEscapeKey()) {
    event.preventDefault();
    return;
  }
  if (event.code === "Space" && shouldCaptureGlobalShortcut(event)) {
    if (event.repeat) return;
    event.preventDefault();
    togglePause();
    return;
  }
  if (["Digit1", "Digit2", "Digit3"].includes(event.code) && shouldCaptureGlobalShortcut(event)) {
    if (event.repeat) return;
    event.preventDefault();
    playSound(pauseSound, 0.62);
    setTimeSpeed(event.code === "Digit3" ? 5 : Number(event.code.replace("Digit", "")));
    return;
  }
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
    updateTopMeters();
    updateAwarenessUi();
    updateSpeedUi();
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

pauseToggle.addEventListener("click", togglePause);

speedOptions.forEach((button) => {
  button.addEventListener("click", () => {
    const speed = Number(button.dataset.speed);
    if (speed === 0) {
      setPausedState(true);
      return;
    }
    setTimeSpeed(speed);
  });
});

function togglePause() {
  playSound(pauseSound, 0.62);
  setPausedState(!paused);
}

function setTimeSpeed(speed) {
  timeSpeed = [1, 2, 5].includes(speed) ? speed : 1;
  lastTimeSpeed = timeSpeed;
  setPausedState(false, { skipSound: true });
}

function setPausedState(nextPaused) {
  paused = nextPaused;
  gameTime.lastTickAt = performance.now();
  document.body.classList.toggle("time-paused", paused);
  pauseToggle.setAttribute("aria-label", paused ? "继续" : "暂停");
  pauseToggle.dataset.label = paused ? "继续" : "暂停";
  pauseIcon.src = paused ? "assets/icon/开始.png" : "assets/icon/停.png";
  if (!paused) timeSpeed = lastTimeSpeed;
  updateSpeedUi();
}

function updateSpeedUi() {
  const speedIndexMap = { 0: 0, 1: 1, 2: 2, 5: 3 };
  const activeIndex = paused ? 0 : speedIndexMap[timeSpeed];
  speedControl.style.setProperty("--speed-index", String(activeIndex));
  speedOptions.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.speed) === (paused ? 0 : timeSpeed));
  });
}

recruitButton.addEventListener("click", () => {
  const shouldOpen = recruitPanel.hidden;
  membersPanel.hidden = true;
  mailPanel.hidden = true;
  squadPanel.hidden = true;
  recruitPanel.hidden = !shouldOpen;
  document.querySelectorAll(".rail-button").forEach((button) => button.classList.remove("active"));
  recruitButton.classList.toggle("active", shouldOpen);
  if (!shouldOpen) document.querySelector(".rail-button")?.classList.add("active");
  if (shouldOpen) {
    renderRecruitList(selectedRecruitGrade);
  } else {
    studentDetailPanel.hidden = true;
    studentDetailSource = "";
  }
});

membersButton.addEventListener("click", () => {
  const shouldOpen = membersPanel.hidden;
  recruitPanel.hidden = true;
  mailPanel.hidden = true;
  squadPanel.hidden = true;
  membersPanel.hidden = !shouldOpen;
  document.querySelectorAll(".rail-button").forEach((button) => button.classList.remove("active"));
  membersButton.classList.toggle("active", shouldOpen);
  if (!shouldOpen) {
    document.querySelector(".rail-button")?.classList.add("active");
    studentDetailPanel.hidden = true;
    studentDetailSource = "";
    return;
  }
  renderMembersList();
});

squadButton.addEventListener("click", () => {
  const shouldOpen = squadPanel.hidden;
  recruitPanel.hidden = true;
  membersPanel.hidden = true;
  mailPanel.hidden = true;
  squadPanel.hidden = !shouldOpen;
  studentDetailPanel.hidden = true;
  studentDetailSource = "";
  document.querySelectorAll(".rail-button").forEach((button) => button.classList.remove("active"));
  squadButton.classList.toggle("active", shouldOpen);
  if (!shouldOpen) document.querySelector(".rail-button")?.classList.add("active");
  if (shouldOpen) renderSquadPanel();
});

mailButton.addEventListener("click", () => {
  const shouldOpen = mailPanel.hidden;
  recruitPanel.hidden = true;
  membersPanel.hidden = true;
  squadPanel.hidden = true;
  mailPanel.hidden = !shouldOpen;
  studentDetailPanel.hidden = true;
  studentDetailSource = "";
  document.querySelectorAll(".rail-button").forEach((button) => button.classList.remove("active"));
  mailButton.classList.toggle("active", shouldOpen);
  if (!shouldOpen) document.querySelector(".rail-button")?.classList.add("active");
  if (shouldOpen) renderMailList();
});

closeSquadCreate.addEventListener("click", closeSquadCreateModal);

squadCreateModal.addEventListener("pointerdown", (event) => {
  if (event.target === squadCreateModal) closeSquadCreateModal();
});

squadFlagButton.addEventListener("click", (event) => {
  event.stopPropagation();
  const rect = squadFlagButton.getBoundingClientRect();
  flagPicker.style.left = `${rect.left}px`;
  flagPicker.style.top = `${rect.bottom + 8}px`;
  flagPicker.hidden = !flagPicker.hidden;
});

flagPicker.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || !draftSquad) return;
  draftSquad.flagType = button.dataset.flagType;
  draftSquad.flagValue = button.dataset.flagValue;
  flagPicker.hidden = true;
  renderDraftSquad();
});

document.addEventListener("pointerdown", (event) => {
  const clickedMap = Boolean(event.target.closest(".map-stage"));
  const clickedRegionUi = Boolean(event.target.closest("#regionPanel") || event.target.closest("#regionMemberPanel"));
  const clickedSquadMarker = Boolean(event.target.closest(".squad-map-marker"));
  if (!clickedMap && !clickedRegionUi) {
    clearRegionSelection();
  }
  if (!clickedSquadMarker && !event.target.closest("#squadInfoPanel")) {
    closeSquadInfoPanel();
  }
  if (!flagPicker.hidden && !flagPicker.contains(event.target) && !squadFlagButton.contains(event.target)) {
    flagPicker.hidden = true;
  }
  if (!squadMemberContext.hidden && !squadMemberContext.contains(event.target)) {
    squadMemberContext.hidden = true;
  }
  if (!squadListContext.hidden && !squadListContext.contains(event.target)) {
    squadListContext.hidden = true;
  }
  if (!candidateInfoPopup.hidden && !candidateInfoPopup.contains(event.target) && !squadCandidateList.contains(event.target)) {
    candidateInfoPopup.hidden = true;
  }
  if (!regionMemberPanel.hidden && !regionMemberPanel.contains(event.target) && !regionMembersButton.contains(event.target)) {
    regionMemberPanel.hidden = true;
  }
});

squadNameInput.addEventListener("input", () => {
  if (!draftSquad) return;
  squadNameInput.value = clampSquadName(squadNameInput.value);
  draftSquad.name = squadNameInput.value.trim();
  renderDraftSquad();
});

createSquadConfirm.addEventListener("click", createDraftSquad);

relocateSquadButton.addEventListener("click", () => {
  if (!draftSquad || draftSquad.mode !== "edit") return;
  startSquadRelocationFromDraft();
});

regionMembersButton.addEventListener("click", () => {
  if (!selectedRegion) return;
  regionMemberPanel.hidden = false;
  renderRegionMemberList(selectedRegion);
});

removeDraftMember.addEventListener("click", () => {
  if (contextDraftMemberId) removeDraftMemberById(contextDraftMemberId);
  squadMemberContext.hidden = true;
});

inspectDraftMember.addEventListener("click", () => {
  if (contextDraftMemberId) openCandidateInfoPopup(contextDraftMemberId);
  squadMemberContext.hidden = true;
});

editSquad.addEventListener("click", () => {
  if (contextSquadId) openSquadEditModal(contextSquadId);
  squadListContext.hidden = true;
});

disbandSquad.addEventListener("click", () => {
  if (contextSquadId) disbandActionSquad(contextSquadId);
  squadListContext.hidden = true;
});

document.querySelectorAll(".grade-tab").forEach((button) => {
  button.addEventListener("click", () => {
    selectedRecruitGrade = Number(button.dataset.grade);
    document.querySelectorAll(".grade-tab").forEach((tab) => tab.classList.toggle("active", tab === button));
    renderRecruitList(selectedRecruitGrade);
    studentDetailPanel.hidden = true;
    studentDetailSource = "";
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
    if (choosingSquadHeadquarters) return;
    const zoomIntensity = event.deltaY < 0 ? 1.08 : 1 / 1.08;
    zoomAtPoint(zoomIntensity, event.clientX, event.clientY);
  },
  { passive: false },
);

mapViewport.addEventListener("pointerdown", (event) => {
  if (event.target.closest(".squad-map-marker")) return;
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
  if (event.target.closest(".squad-map-marker")) {
    clearHover();
    return;
  }
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
  if (event.target.closest(".squad-map-marker")) return;
  const moved = Math.abs(event.clientX - dragStart.x) + Math.abs(event.clientY - dragStart.y);
  if (moved > 6) return;
  const mapPoint = viewportToMapPoint(event.clientX, event.clientY);
  const region = getRegionAtMapPoint(mapPoint.x, mapPoint.y);
  if (region) {
    selectRegion(region);
  } else {
    clearRegionSelection();
  }
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

async function preloadStartupResources() {
  updateLoadingProgress(0, "正在检查校园档案...");
  const resources = [...new Set(PRELOAD_RESOURCES)];
  let completed = 0;
  const failures = [];
  const markDone = (src, failed = false) => {
    completed += 1;
    if (failed) failures.push(src);
    const percent = Math.round((completed / resources.length) * 100);
    updateLoadingProgress(percent, failed ? "发现缺失资源，继续尝试加载..." : "正在预加载战略资源...");
  };

  await Promise.all(
    resources.map(async (src) => {
      try {
        if (src === "name.json") {
          await withTimeout(loadNameData(), 9000, src);
        } else {
          await preloadAsset(src);
        }
        markDone(src);
      } catch {
        if (src === "name.json") nameData = DEFAULT_NAMES;
        markDone(src, true);
      }
    }),
  );

  updateLoadingProgress(100, failures.length ? "部分资源加载失败，但仍可继续" : "资源加载完成");
  if (failures.length) {
    loadingContinue.hidden = false;
    loadingContinue.focus();
    return;
  }
  window.setTimeout(hideLoadingScreen, 420);
}

function preloadAsset(src) {
  const loader = /\.(png|jpe?g|gif|webp|ico)$/i.test(src) ? preloadImage(src) : preloadBinary(src);
  return withTimeout(loader, 9000, src);
}

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      if (typeof image.decode === "function") {
        image.decode().then(resolve).catch(resolve);
      } else {
        resolve();
      }
    };
    image.onerror = reject;
    image.src = src;
  });
}

async function preloadBinary(src) {
  const response = await fetch(src, { cache: "force-cache" });
  if (!response.ok) throw new Error(`${src} failed`);
  await response.blob();
}

function withTimeout(promise, timeoutMs, src) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      window.setTimeout(() => reject(new Error(`${src} timed out`)), timeoutMs);
    }),
  ]);
}

function updateLoadingProgress(percent, statusText) {
  if (!loadingScreen) return;
  const safePercent = clamp(percent, 0, 100);
  loadingPercent.textContent = `${safePercent}%`;
  loadingFill.style.width = `${safePercent}%`;
  loadingStatus.textContent = statusText;
}

function hideLoadingScreen() {
  if (!loadingScreen) return;
  document.body.classList.remove("loading-active");
  loadingScreen.classList.add("hidden");
  resetMenuIdleTimer();
  window.setTimeout(() => {
    loadingScreen.hidden = true;
  }, 560);
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
  actionSquads = [];
  draftSquad = null;
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
  updateTopMeters();
  updateAwarenessUi();
  renderRecruitList(selectedRecruitGrade);
}

function createCoreMember(member) {
  const student = createStudent(member.grade, { forceFaction: member.faction, forcePersonality: member.personality, trustRange: [member.trust, member.trust] });
  student.name = member.name;
  student.role = member.role;
  student.status = "热情";
  student.trust = member.trust;
  return student;
}

function createStudent(grade, options = {}) {
  const personalityName = options.forcePersonality || randomFrom(Object.keys(PERSONALITY_TEMPLATES));
  const template = PERSONALITY_TEMPLATES[personalityName];
  const faction = options.forceFaction || randomFrom(FACTIONS);
  const trust = options.trustRange ? randomInt(...options.trustRange) : generateTrustForFaction(faction);
  const abilities = {
    literature: randomInt(...template.literature),
    emergency: randomInt(...template.emergency),
    strength: randomInt(...template.strength),
    vision: randomInt(...template.vision),
  };

  return {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    name: generateStudentName(),
    grade,
    personality: personalityName,
    faction,
    status: "正常",
    trust,
    stress: generateInitialStress(grade),
    missingDays: 0,
    location: "",
    squadId: "",
    squadName: "",
    squadRole: "",
    stressResistance: template.stressResistance,
    abilities,
  };
}

function generateInitialStress(grade) {
  return grade <= 8 ? randomInt(0, 30) : randomInt(10, 60);
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

  gameTime.dayProgressMs += elapsed * timeSpeed;
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
  updateTopMeters();
  if (!membersPanel.hidden) renderMembersList();
  if (!recruitPanel.hidden) renderRecruitList(selectedRecruitGrade);
  if (!squadPanel.hidden) renderSquadPanel();
  if (!squadCreateModal.hidden) renderDraftSquad();
  if (!studentDetailPanel.hidden) {
    const student = getSelectedStudent();
    if (student) showStudentDetail(student.id);
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
    tickMissingStudent(student);
    recoverStudentStress(student);
    if (student.status === "热情") student.trust = clamp(student.trust + randomInt(0, 2), 0, 100);
    if (student.status === "怀疑") student.trust = clamp(student.trust - randomInt(0, 2), 0, 100);
    if (student.status === "愤怒") increaseStudentStress(student, randomInt(0, 3), "愤怒状态");
    if (student.status === "恐惧" && student.stressResistance === "低") increaseStudentStress(student, randomInt(0, 2), "恐惧状态");
    if (gameTime.day >= 25 && gameTime.day <= 30) increaseStudentStress(student, 5, "Final考试");
  });
  protectLockedMemberTrust();
  resolveStressBreakdowns();
}

function getStressRule(student) {
  return STRESS_RESISTANCE_RULES[student.stressResistance] || STRESS_RESISTANCE_RULES["中"];
}

function increaseStudentStress(student, amount, source = "") {
  if (amount <= 0 || isStudentMissing(student)) return;
  const next = Math.round(amount * getStressRule(student).gainMultiplier);
  student.stress = clamp(student.stress + next, 0, 100);
  if (source && student.stress >= 80) student.lastStressSource = source;
}

function recoverStudentStress(student) {
  if (isStudentMissing(student)) return;
  student.stress = clamp(student.stress - getStressRule(student).dailyRecovery, 0, 100);
}

function tickMissingStudent(student) {
  if (!isStudentMissing(student)) return;
  student.stress = clamp(student.stress - 5, 0, 100);
  student.missingDays = Math.max(0, student.missingDays - 1);
  if (!student.missingDays) {
    student.status = "怀疑";
    appendLog(`${student.name} 重新出现了，但状态仍然很不稳定。`);
  }
}

function resolveStressBreakdowns() {
  allStudents.forEach((student) => {
    if (student.stress < 100 || isStudentMissing(student)) return;
    triggerStressBreakdown(student);
  });
}

function triggerStressBreakdown(student) {
  const outcomes = ["missing"];
  if (student.squadId) outcomes.push("leaveSquad");
  if (isPlayerMember(student.id) && !isProtectedCoreMember(student)) outcomes.push("leaveOrganization");
  const outcome = randomFrom(outcomes);
  if (outcome === "leaveOrganization") {
    removeStudentFromSquad(student);
    removeStudentFromOrganization(student, 30);
    student.stress = clamp(student.stress - 20, 0, 100);
    appendLog(`${student.name} 压力达到极限，退出了组织。`);
    refreshStudentViews(student);
    if (!squadPanel.hidden) renderSquadPanel();
    if (!squadCreateModal.hidden) renderDraftSquad();
    return;
  }
  if (outcome === "leaveSquad") {
    removeStudentFromSquad(student);
    student.stress = clamp(student.stress - 15, 0, 100);
    student.status = "恐惧";
    appendLog(`${student.name} 压力达到极限，退出了行动小队。`);
    refreshStudentViews(student);
    if (!squadPanel.hidden) renderSquadPanel();
    if (!squadCreateModal.hidden) renderDraftSquad();
    return;
  }
  student.missingDays = randomInt(2, 5);
  student.status = "失踪";
  appendLog(`${student.name} 压力达到极限，暂时失踪了。`);
  refreshStudentViews(student);
  if (!squadPanel.hidden) renderSquadPanel();
  if (!squadCreateModal.hidden) renderDraftSquad();
}

function updateTimeUi() {
  dayLabel.textContent = `第 ${gameTime.totalDay} 天`;
  phaseLabel.textContent = getCurrentPhase();
  semesterDayLabel.textContent = `${getSemesterName()} 第 ${gameTime.day} 天`;
  dayProgressFill.style.width = `${Math.min(100, (gameTime.dayProgressMs / REAL_MS_PER_GAME_DAY) * 100)}%`;
  updateStudentSchedules();
  updateMapVisual();
}

function updateMemberUi() {
  memberCount.textContent = String(playerMembers.length);
}

function updateTopMeters() {
  const memberIds = new Set(playerMembers.map((student) => student.id));
  const organizationPressure = averageStudents(playerMembers, (student) => student.stress);
  const organizationStability = averageStudents(playerMembers, (student) => student.trust);
  const outsideStudents = allStudents.filter((student) => !memberIds.has(student.id));
  const studentSupport = averageStudents(outsideStudents, (student) => student.trust);

  setHudMeter(pressureMeter, pressureChip, pressureTip, organizationPressure, "玩家阵营成员压力", "当前组织成员压力的平均值。越高越容易出现失踪、退队或退出组织。");
  setHudMeter(stabilityMeter, stabilityChip, stabilityTip, organizationStability, "玩家阵营稳定度", "当前组织成员信任度的平均值。越高代表内部关系越稳。");
  setHudMeter(studentSupportMeter, studentSupportChip, studentSupportTip, studentSupport, "学生支持", "未加入玩家阵营的学生信任度平均值。代表外围学生对你的整体态度。");
  setHudMeter(fameMeter, fameChip, fameTip, factionFame, "知名度", "地下组织在校园里的被知晓程度。目前主要影响高信任学生是否主动发来申请。");
}

function averageStudents(students, getter) {
  return students.length ? Math.round(students.reduce((sum, student) => sum + getter(student), 0) / students.length) : 0;
}

function setHudMeter(meter, chip, tip, value, label, description) {
  const safeValue = clamp(value, 0, 100);
  meter.style.width = `${safeValue}%`;
  chip.title = "";
  tip.replaceChildren();

  const title = document.createElement("span");
  title.className = "hud-tooltip-title";
  title.textContent = `${label}：`;

  const valueRow = document.createElement("span");
  valueRow.className = "hud-tooltip-value";
  const bar = document.createElement("span");
  bar.className = "hud-tooltip-meter";
  const fill = document.createElement("i");
  fill.style.width = `${safeValue}%`;
  bar.append(fill);
  const valueText = document.createElement("strong");
  valueText.textContent = `${safeValue}%`;
  valueRow.append(bar, valueText);

  const copy = document.createElement("span");
  copy.className = "hud-tooltip-copy";
  copy.textContent = `解释：${description}`;

  tip.append(title, valueRow, copy);
}

function updateResourceUi() {
  phoneCount.textContent = String(resources.phones);
  phoneCount.closest(".resource-chip").title = `手机：${resources.phones}`;
}

function updateAwarenessUi() {
  awarenessMeter.style.width = `${managementAwareness}%`;
  awarenessChip.title = `管理层察觉：${managementAwareness}%`;
  setHudMeter(awarenessMeter, awarenessChip, awarenessTip, managementAwareness, "管理层察觉", "管理层对地下组织的怀疑程度。越高越容易触发巡查、封锁和调查。");
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

function renderSquadPanel() {
  squadList.replaceChildren();
  if (actionSquads.length === 0) {
    const empty = document.createElement("section");
    empty.className = "squad-empty";
    const text = document.createElement("p");
    text.textContent = "你目前没有任何行动小队";
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "创建新的行动小队";
    button.addEventListener("click", openSquadCreateModal);
    empty.append(text, button);
    squadList.append(empty);
    return;
  }

  actionSquads.forEach((squad) => {
    const card = document.createElement("article");
    card.className = "squad-card";
    card.dataset.squadId = squad.id;
    const flag = createSquadFlagNode(squad);
    const body = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = squad.name;
    const meta = document.createElement("p");
    const age = Math.max(0, gameTime.totalDay - squad.createdTotalDay);
    meta.textContent = `${squad.members.length} 人 / ${squad.createdLabel} 创建 / 已存在 ${age} 天`;
    const values = calculateSquadStats(squad.members.map((member) => member.studentId));
    const meters = document.createElement("div");
    meters.className = "squad-card-meters";
    meters.append(createSquadMiniMeter("稳定度", values.stability, "stability"), createSquadMiniMeter("压力", values.pressure, "pressure"));
    const abilities = document.createElement("div");
    abilities.className = "squad-card-abilities";
    abilities.innerHTML = `<span>宣传 ${values.propaganda}</span><span>应急 ${values.emergency}</span><span>行动 ${values.mobility}</span><span>侦查 ${values.scouting}</span>`;
    body.append(title, meta, meters);
    card.append(flag, body, abilities);
    card.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      contextSquadId = squad.id;
      squadListContext.style.left = `${event.clientX}px`;
      squadListContext.style.top = `${event.clientY}px`;
      squadListContext.hidden = false;
    });
    squadList.append(card);
  });

  const createAnother = document.createElement("button");
  createAnother.type = "button";
  createAnother.className = "squad-create-small";
  createAnother.textContent = "创建新的行动小队";
  createAnother.addEventListener("click", openSquadCreateModal);
  squadList.append(createAnother);
}

function createSquadMiniMeter(label, value, type) {
  const wrap = document.createElement("div");
  wrap.className = `squad-mini-meter ${type}`;
  const text = document.createElement("span");
  text.textContent = `${label} ${value}`;
  const bar = document.createElement("i");
  bar.style.width = `${clamp(value, 0, 100)}%`;
  wrap.append(text, bar);
  return wrap;
}

function openSquadCreateModal() {
  draftSquad = {
    mode: "create",
    editingSquadId: "",
    name: "",
    flagType: "image",
    flagValue: "assets/学生阵营logo.png",
    members: [],
  };
  selectedCandidateId = null;
  squadNameInput.value = draftSquad.name;
  squadCreateModal.hidden = false;
  renderDraftSquad();
}

function openSquadEditModal(squadId) {
  const squad = actionSquads.find((candidate) => candidate.id === squadId);
  if (!squad) return;
  draftSquad = {
    mode: "edit",
    editingSquadId: squad.id,
    name: squad.name,
    flagType: squad.flagType,
    flagValue: squad.flagValue,
    members: squad.members.map((member) => ({ ...member })),
  };
  selectedCandidateId = null;
  squadNameInput.value = draftSquad.name;
  squadCreateModal.hidden = false;
  renderDraftSquad();
}

function closeSquadCreateModal() {
  squadCreateModal.hidden = true;
  flagPicker.hidden = true;
  squadMemberContext.hidden = true;
  draftSquad = null;
  selectedCandidateId = null;
  contextSquadId = null;
  candidateInfoPopup.hidden = true;
  if (!squadPanel.hidden) squadButton.focus();
}

function handleEscapeKey() {
  if (!squadCreateModal.hidden) {
    closeSquadCreateModal();
    return true;
  }
  if (!flagPicker.hidden) {
    flagPicker.hidden = true;
    return true;
  }
  if (!candidateInfoPopup.hidden) {
    candidateInfoPopup.hidden = true;
    return true;
  }
  if (!squadMemberContext.hidden) {
    squadMemberContext.hidden = true;
    return true;
  }
  if (!squadListContext.hidden) {
    squadListContext.hidden = true;
    return true;
  }
  if (!studentDetailPanel.hidden) {
    studentDetailPanel.hidden = true;
    studentDetailSource = "";
    return true;
  }
  if (!regionMemberPanel.hidden) {
    regionMemberPanel.hidden = true;
    return true;
  }
  if (isLeftMenuFocused() && closeActiveRailPanel()) return true;
  if (selectedRegion || !regionPanel.hidden) {
    clearRegionSelection();
    return true;
  }
  if (!squadInfoPanel.hidden) {
    closeSquadInfoPanel();
    return true;
  }
  if (closeActiveRailPanel()) return true;
  return false;
}

function isLeftMenuFocused() {
  const focused = document.activeElement;
  return Boolean(focused?.closest?.(".left-rail, #recruitPanel, #membersPanel, #squadPanel, #mailPanel"));
}

function closeActiveRailPanel() {
  const hasOpenPanel = !recruitPanel.hidden || !membersPanel.hidden || !squadPanel.hidden || !mailPanel.hidden;
  if (!hasOpenPanel) return false;
  recruitPanel.hidden = true;
  membersPanel.hidden = true;
  squadPanel.hidden = true;
  mailPanel.hidden = true;
  studentDetailPanel.hidden = true;
  studentDetailSource = "";
  resetRailFocus();
  return true;
}

function resetRailFocus() {
  document.querySelectorAll(".rail-button").forEach((button) => button.classList.remove("active"));
  document.querySelector(".left-rail .rail-button")?.classList.add("active");
}

function enterHeadquartersSelection(title = "选择小队总部") {
  choosingSquadHeadquarters = true;
  regionPanel.hidden = true;
  regionMemberPanel.hidden = true;
  squadInfoPanel.hidden = true;
  squadPanel.hidden = true;
  squadListContext.hidden = true;
  squadMemberContext.hidden = true;
  candidateInfoPopup.hidden = true;
  headquartersSelectOverlay.hidden = false;
  headquartersSelectOverlay.querySelector("strong").textContent = title;
  headquartersHintText.textContent = "移动地图，让准星中心对准有效地块。按 Enter 完成选择。";
  document.body.classList.add("choosing-headquarters");
  setMapScaleAtViewportCenter(1.6);
  mapViewport.focus({ preventScroll: true });
}

function exitHeadquartersSelection() {
  choosingSquadHeadquarters = false;
  headquartersSelectOverlay.hidden = true;
  document.body.classList.remove("choosing-headquarters");
}

function completeHeadquartersSelection() {
  if (!choosingSquadHeadquarters || !pendingHeadquartersSquad) return;
  const rect = mapViewport.getBoundingClientRect();
  const point = viewportToMapPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
  const region = getRegionAtMapPoint(point.x, point.y);
  if (!region) {
    showHeadquartersError("准星中心没有落在有效地块上。");
    return;
  }
  if (region.name === "校长办公室") {
    showHeadquartersError("不能把行动小队总部设在校长办公室。");
    return;
  }
  finalizePendingSquad(region, point);
}

function showHeadquartersError(message) {
  headquartersHintText.textContent = message;
  headquartersSelectOverlay.classList.remove("invalid");
  requestAnimationFrame(() => headquartersSelectOverlay.classList.add("invalid"));
}

function renderDraftSquad() {
  if (!draftSquad) return;
  renderSquadFlag(draftSquad);
  renderDraftStats();
  renderDraftMembers();
  renderSquadCandidates();
  renderCreateSquadButton();
}

function renderSquadFlag(squad) {
  if (squad.flagType === "emoji") {
    squadFlagImage.hidden = true;
    squadFlagEmoji.hidden = false;
    squadFlagEmoji.textContent = squad.flagValue;
  } else {
    squadFlagImage.hidden = false;
    squadFlagEmoji.hidden = true;
    squadFlagImage.src = squad.flagValue;
  }
}

function createSquadFlagNode(squad) {
  const wrap = document.createElement("span");
  wrap.className = "squad-card-flag";
  appendSquadFlagVisual(wrap, squad);
  return wrap;
}

function appendSquadFlagVisual(target, squad) {
  target.replaceChildren();
  if (squad.flagType === "emoji") {
    target.textContent = squad.flagValue;
  } else {
    const img = document.createElement("img");
    img.src = squad.flagValue;
    img.alt = "";
    target.append(img);
  }
}

function renderDraftStats() {
  draftSquadStats.replaceChildren();
  const stats = calculateSquadStats(draftSquad.members.map((member) => member.studentId));
  [
    { label: "人数", value: stats.count, icon: "assets/icon/人数.png", type: "value" },
    { label: "稳定度", value: stats.stability, icon: "assets/icon/稳定度.png", type: "meter", className: "stability" },
    { label: "压力", value: stats.pressure, icon: "assets/icon/压力.png", type: "meter", className: "pressure" },
    { label: "宣传", value: stats.propaganda, icon: "assets/icon/文学能力.png", type: "value" },
    { label: "应急", value: stats.emergency, icon: "assets/icon/突发事件.png", type: "value" },
    { label: "行动力", value: stats.mobility, icon: "assets/icon/行动小队.png", type: "value" },
    { label: "侦查", value: stats.scouting, icon: "assets/icon/巡逻.png", type: "value" },
  ].forEach((item) => {
    const row = document.createElement("div");
    row.className = `squad-stat-card ${item.type === "meter" ? "meter-stat" : "value-stat"} ${item.className || ""}`;
    const icon = document.createElement("img");
    icon.src = item.icon;
    icon.alt = "";
    const label = document.createElement("dt");
    label.textContent = item.label;
    row.append(icon, label);
    if (item.type === "meter") {
      const meter = document.createElement("span");
      meter.className = "squad-stat-meter";
      const fill = document.createElement("i");
      fill.style.width = `${clamp(item.value, 0, 100)}%`;
      meter.append(fill);
      const value = document.createElement("dd");
      value.textContent = `${item.value}%`;
      row.append(meter, value);
    } else {
      const value = document.createElement("dd");
      value.textContent = item.value;
      row.append(value);
    }
    draftSquadStats.append(row);
  });
}

function calculateSquadStats(memberIds) {
  const members = memberIds.map((id) => allStudents.find((student) => student.id === id)).filter(Boolean);
  const average = (getter) => (members.length ? Math.round(members.reduce((sum, student) => sum + getter(student), 0) / members.length) : 0);
  return {
    count: members.length,
    pressure: average((student) => student.stress),
    stability: average((student) => student.trust),
    propaganda: average((student) => getEffectiveAbilities(student).literature),
    emergency: average((student) => getEffectiveAbilities(student).emergency),
    mobility: average((student) => getEffectiveAbilities(student).strength),
    scouting: average((student) => getEffectiveAbilities(student).vision),
  };
}

function getStressAbilityMultiplier(student) {
  if (isStudentMissing(student)) return 0;
  if (student.stress >= 80) return 0.7;
  if (student.stress >= 60) return 0.85;
  return 1;
}

function getEffectiveAbilities(student) {
  const multiplier = getStressAbilityMultiplier(student);
  return {
    literature: Math.round(student.abilities.literature * multiplier),
    emergency: Math.round(student.abilities.emergency * multiplier),
    strength: Math.round(student.abilities.strength * multiplier),
    vision: Math.round(student.abilities.vision * multiplier),
  };
}

function getStressStateLabel(student) {
  if (isStudentMissing(student)) return "失踪";
  if (student.stress >= 80) return "高压";
  if (student.stress >= 60) return "紧张";
  return "";
}

function isStudentMissing(student) {
  return Number(student?.missingDays || 0) > 0;
}

function renderDraftMembers() {
  draftSquadMembers.replaceChildren();
  if (draftSquad.members.length === 0) {
    const empty = document.createElement("p");
    empty.className = "draft-empty";
    empty.textContent = "从右侧选择成员加入编队。";
    draftSquadMembers.append(empty);
    return;
  }

  draftSquad.members.forEach((entry) => {
    const student = allStudents.find((candidate) => candidate.id === entry.studentId);
    if (!student) return;
    const row = document.createElement("div");
    row.className = "draft-member-row";
    row.classList.toggle("missing", isStudentMissing(student));
    row.dataset.studentId = student.id;
    const name = document.createElement("strong");
    name.textContent = `${student.name} ${student.grade}年级${isStudentMissing(student) ? " / 失踪" : ""}`;
    const select = document.createElement("select");
    SQUAD_MEMBER_ROLES.forEach((role) => {
      const option = document.createElement("option");
      option.value = role;
      option.textContent = role;
      option.disabled = isDraftRoleOccupied(role, student.id);
      select.append(option);
    });
    select.value = entry.role;
    select.disabled = isStudentMissing(student);
    select.addEventListener("change", () => {
      entry.role = select.value;
      playSound(roleChangeSound, 0.54);
      renderDraftSquad();
    });
    row.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      contextDraftMemberId = student.id;
      squadMemberContext.style.left = `${event.clientX}px`;
      squadMemberContext.style.top = `${event.clientY}px`;
      squadMemberContext.hidden = false;
    });
    row.append(name, select);
    draftSquadMembers.append(row);
  });
}

function renderSquadCandidates() {
  squadCandidateList.replaceChildren();
  const sortedMembers = [...playerMembers].sort((a, b) => {
    const aBlocked = isCandidateInOtherSquad(a);
    const bBlocked = isCandidateInOtherSquad(b);
    if (aBlocked !== bBlocked) return aBlocked ? 1 : -1;
    const aSelected = draftSquad.members.some((member) => member.studentId === a.id);
    const bSelected = draftSquad.members.some((member) => member.studentId === b.id);
    if (aSelected !== bSelected) return aSelected ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
  sortedMembers.forEach((student) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "squad-candidate-row";
    row.classList.toggle("selected", draftSquad.members.some((member) => member.studentId === student.id));
    row.classList.toggle("blocked", isCandidateInOtherSquad(student) || isStudentMissing(student));
    row.dataset.studentId = student.id;
    const name = document.createElement("strong");
    name.textContent = isStudentMissing(student) ? `${student.name} / 失踪` : student.name;
    const grade = document.createElement("span");
    grade.textContent = `${student.grade}年级`;
    row.append(name, grade);
    row.addEventListener("click", () => {
      selectedCandidateId = student.id;
      renderSquadCandidates();
      openCandidateInfoPopup(student.id);
    });
    squadCandidateList.append(row);
  });
}

function openCandidateInfoPopup(studentId) {
  selectedCandidateId = studentId;
  const student = allStudents.find((candidate) => candidate.id === selectedCandidateId);
  candidateInfoPopup.replaceChildren();
  candidateInfoPopup.hidden = !student;
  if (!student) return;
  const effectiveAbilities = getEffectiveAbilities(student);
  const stressState = getStressStateLabel(student);

  const title = document.createElement("h3");
  title.textContent = student.name;
  const meta = document.createElement("div");
  meta.className = "candidate-meta-card";
  meta.textContent = `${student.grade}年级 / ${student.role || "成员"}${stressState ? ` / ${stressState}` : ""}`;
  const meters = document.createElement("div");
  meters.className = "candidate-meter-stack";
  [
    { label: "可信度", value: student.trust, icon: "assets/icon/稳定度.png", className: "trust" },
    { label: "压力", value: student.stress, icon: "assets/icon/压力.png", className: "pressure" },
  ].forEach((meter) => {
    const item = document.createElement("div");
    item.className = `candidate-meter-card ${meter.className}`;
    const icon = document.createElement("img");
    icon.src = meter.icon;
    icon.alt = "";
    const label = document.createElement("span");
    label.textContent = meter.label;
    const bar = document.createElement("i");
    const fill = document.createElement("b");
    fill.style.width = `${clamp(meter.value, 0, 100)}%`;
    bar.append(fill);
    const value = document.createElement("strong");
    value.textContent = `${meter.value}%`;
    item.append(icon, label, bar, value);
    meters.append(item);
  });
  const stats = document.createElement("div");
  stats.className = "candidate-stat-grid";
  [
    { label: "文学", value: effectiveAbilities.literature, icon: "assets/icon/文学能力.png" },
    { label: "应急", value: effectiveAbilities.emergency, icon: "assets/icon/突发事件.png" },
    { label: "体力", value: effectiveAbilities.strength, icon: "assets/icon/行动小队.png" },
    { label: "视力", value: effectiveAbilities.vision, icon: "assets/icon/巡逻.png" },
  ].forEach((stat) => {
    const item = document.createElement("div");
    const icon = document.createElement("img");
    const key = document.createElement("span");
    const val = document.createElement("strong");
    icon.src = stat.icon;
    icon.alt = "";
    key.textContent = stat.label;
    val.textContent = stat.value;
    item.append(icon, key, val);
    stats.append(item);
  });
  const add = document.createElement("button");
  add.type = "button";
  if (isStudentMissing(student)) {
    add.disabled = true;
    add.className = "candidate-add blocked";
    add.textContent = "该学生正在失踪";
  } else if (isCandidateInOtherSquad(student)) {
    add.disabled = true;
    add.className = "candidate-add blocked";
    add.textContent = `该学生已在“${student.squadName}”`;
  } else if (draftSquad.members.some((member) => member.studentId === student.id)) {
    add.className = "candidate-add selected";
    add.textContent = "已加入编队";
  } else {
    add.className = "candidate-add";
    add.textContent = "加入编队";
    add.addEventListener("click", () => addDraftMember(student));
  }
  candidateInfoPopup.append(title, meta, meters, stats, add);
  const modalRect = squadCreateModal.getBoundingClientRect();
  candidateInfoPopup.style.right = `${Math.max(18, window.innerWidth - modalRect.right + 18)}px`;
  candidateInfoPopup.style.top = `${Math.max(78, modalRect.top + 74)}px`;
}

function isCandidateInOtherSquad(student) {
  return Boolean(student.squadId && student.squadId !== draftSquad?.editingSquadId);
}

function addDraftMember(student) {
  if (!draftSquad || isStudentMissing(student) || isCandidateInOtherSquad(student) || draftSquad.members.some((member) => member.studentId === student.id)) return;
  draftSquad.members.push({ studentId: student.id, role: "成员" });
  renderDraftSquad();
  openCandidateInfoPopup(student.id);
}

function removeDraftMemberById(studentId) {
  if (!draftSquad) return;
  draftSquad.members = draftSquad.members.filter((member) => member.studentId !== studentId);
  if (selectedCandidateId === studentId) selectedCandidateId = null;
  renderDraftSquad();
}

function isDraftRoleOccupied(role, currentStudentId = "") {
  return LIMITED_SQUAD_ROLES.includes(role) && draftSquad.members.some((member) => member.role === role && member.studentId !== currentStudentId);
}

function hasDraftRoleOverflow() {
  return LIMITED_SQUAD_ROLES.some((role) => draftSquad.members.filter((member) => member.role === role).length > 1);
}

function canCreateDraftSquad() {
  return !getDraftSquadBlockReason();
}

function getDraftSquadBlockReason() {
  const requirements = getDraftSquadRequirements();
  if (!requirements.hasName) return "请输入队名";
  if (!requirements.hasMember) return "至少需要一名成员";
  if (!requirements.hasCaptain) return "需要一名队长";
  if (hasDraftRoleOverflow()) return "职位超出限制";
  if (isSquadNameTaken(draftSquad.name, draftSquad.editingSquadId)) return "队名已存在";
  return "";
}

function getDraftSquadRequirements() {
  const members = draftSquad?.members || [];
  return {
    hasName: Boolean(draftSquad?.name),
    hasMember: members.some((member) => member.role === "成员"),
    hasCaptain: members.some((member) => member.role === "队长"),
  };
}

function getRequirementTooltip() {
  const requirements = getDraftSquadRequirements();
  return [
    "需要：",
    `${requirements.hasName ? "☑" : "☐"} 队伍名称`,
    `${requirements.hasMember ? "☑" : "☐"} 至少1名成员`,
    `${requirements.hasCaptain ? "☑" : "☐"} 至少1名队长`,
  ].join("\n");
}

function renderCreateSquadButton() {
  const reason = getDraftSquadBlockReason();
  relocateSquadButton.hidden = draftSquad?.mode !== "edit";
  createSquadConfirm.disabled = false;
  createSquadConfirm.classList.toggle("invalid", Boolean(reason));
  createSquadConfirm.setAttribute("aria-disabled", String(Boolean(reason)));
  createSquadConfirm.dataset.requirements = reason ? getRequirementTooltip() : "";
  if (reason === "队名已存在") {
    createSquadConfirm.textContent = "队名已存在";
    return;
  }
  createSquadConfirm.textContent = draftSquad?.mode === "edit" ? "保存队伍" : "创建队伍";
}

function isSquadNameTaken(name, ignoredSquadId = "") {
  const normalized = name.trim().toLowerCase();
  return actionSquads.some((squad) => squad.id !== ignoredSquadId && squad.name.trim().toLowerCase() === normalized);
}

function createDraftSquad() {
  if (!draftSquad || !canCreateDraftSquad()) return;
  if (draftSquad.mode === "edit") {
    playSound(createSound, 0.62);
    saveDraftSquadEdit();
    return;
  }
  pendingHeadquartersSquad = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    name: draftSquad.name,
    flagType: draftSquad.flagType,
    flagValue: draftSquad.flagValue,
    createdDay: gameTime.day,
    createdSemester: gameTime.semester,
    createdTotalDay: gameTime.totalDay,
    createdLabel: `${getSemesterName()} 第${gameTime.day}天`,
    members: draftSquad.members.map((member) => ({ ...member })),
    headquarters: null,
    status: "分散",
  };
  closeSquadCreateModal();
  enterHeadquartersSelection();
}

function startSquadRelocationFromDraft() {
  const squad = actionSquads.find((candidate) => candidate.id === draftSquad.editingSquadId);
  if (!squad) return;
  playSound(createSound, 0.5);
  pendingHeadquartersSquad = {
    ...squad,
    mode: "relocate",
  };
  closeSquadCreateModal();
  enterHeadquartersSelection("迁移行动小队总部");
}

function finalizePendingSquad(region, point) {
  if (!pendingHeadquartersSquad) return;
  playSound(createSound, 0.62);
  if (pendingHeadquartersSquad.mode === "relocate") {
    const squad = actionSquads.find((candidate) => candidate.id === pendingHeadquartersSquad.id);
    if (!squad) return;
    squad.headquarters = {
      region: region.name,
      x: Math.round(point.x),
      y: Math.round(point.y),
    };
    appendLog(`${squad.name} 的总部已迁移至${region.name}。`);
    pendingHeadquartersSquad = null;
    exitHeadquartersSelection();
    renderSquadMapMarkers();
    renderSquadPanel();
    showSquadInfoPanel(squad.id);
    return;
  }
  const squad = {
    ...pendingHeadquartersSquad,
    headquarters: {
      region: region.name,
      x: Math.round(point.x),
      y: Math.round(point.y),
    },
  };
  actionSquads.push(squad);
  squad.members.forEach((entry) => {
    const student = allStudents.find((candidate) => candidate.id === entry.studentId);
    if (!student) return;
    student.squadId = squad.id;
    student.squadName = squad.name;
    student.squadRole = entry.role;
  });
  appendLog(`${squad.name} 创建完成，总部设于${region.name}，共 ${squad.members.length} 名成员。`);
  pendingHeadquartersSquad = null;
  exitHeadquartersSelection();
  renderSquadMapMarkers();
  renderSquadPanel();
}

function saveDraftSquadEdit() {
  const squad = actionSquads.find((candidate) => candidate.id === draftSquad.editingSquadId);
  if (!squad) return;
  const previousMemberIds = new Set(squad.members.map((member) => member.studentId));
  squad.name = draftSquad.name;
  squad.flagType = draftSquad.flagType;
  squad.flagValue = draftSquad.flagValue;
  squad.members = draftSquad.members.map((member) => ({ ...member }));
  previousMemberIds.forEach((studentId) => {
    if (squad.members.some((member) => member.studentId === studentId)) return;
    const student = allStudents.find((candidate) => candidate.id === studentId);
    if (!student) return;
    student.squadId = "";
    student.squadName = "";
    student.squadRole = "";
  });
  squad.members.forEach((entry) => {
    const student = allStudents.find((candidate) => candidate.id === entry.studentId);
    if (!student) return;
    student.squadId = squad.id;
    student.squadName = squad.name;
    student.squadRole = entry.role;
  });
  appendLog(`${squad.name} 编制已更新。`);
  closeSquadCreateModal();
  renderSquadMapMarkers();
  renderSquadPanel();
}

function disbandActionSquad(squadId) {
  const squad = actionSquads.find((candidate) => candidate.id === squadId);
  if (!squad) return;
  squad.members.forEach((entry) => {
    const student = allStudents.find((candidate) => candidate.id === entry.studentId);
    if (!student) return;
    student.squadId = "";
    student.squadName = "";
    student.squadRole = "";
  });
  actionSquads = actionSquads.filter((candidate) => candidate.id !== squadId);
  appendLog(`${squad.name} 已解散。`);
  if (selectedSquadInfoId === squadId) {
    selectedSquadInfoId = null;
    squadInfoPanel.hidden = true;
  }
  renderSquadMapMarkers();
  renderSquadPanel();
}

function clampSquadName(value) {
  let total = 0;
  let output = "";
  for (const char of value) {
    const weight = char.charCodeAt(0) <= 127 ? 1 : 2;
    if (total + weight > 16) break;
    total += weight;
    output += char;
  }
  return output;
}

function createStudentRow(student, showRole = false) {
  const row = document.createElement("button");
  row.type = "button";
  row.className = "student-row";
  row.dataset.studentId = student.id;
  row.classList.toggle("active", student.id === selectedStudentId);
  row.classList.toggle("joined", isPlayerMember(student.id));
  row.classList.toggle("missing", isStudentMissing(student));

  const avatar = document.createElement("img");
  avatar.src = "assets/icon/人.png";
  avatar.alt = "";

  const body = document.createElement("span");
  const name = document.createElement("strong");
  name.textContent = showRole && student.role ? `${student.name} - ${student.role}` : student.name;
  const meta = document.createElement("span");
  meta.textContent = `${student.personality} / ${student.faction}${isStudentMissing(student) ? " / 失踪" : ""}`;
  body.append(name, meta);

  const trust = document.createElement("em");
  trust.textContent = isPlayerMember(student.id) && !showRole ? "已加入" : `${student.trust}%`;

  row.append(avatar, body, trust);
  row.addEventListener("click", () => showStudentDetail(student.id));
  return row;
}

function showStudentDetail(studentId, source = "") {
  const student = allStudents.find((candidate) => candidate.id === studentId);
  if (!student) return;
  const effectiveAbilities = getEffectiveAbilities(student);
  const stressState = getStressStateLabel(student);
  selectedStudentId = studentId;
  studentDetailSource = source;
  document.querySelectorAll(".student-row").forEach((row) => row.classList.toggle("active", row.dataset.studentId === studentId));

  studentDetailName.textContent = student.role ? `${student.name} - ${student.role}` : student.name;
  studentDetailPanel.classList.toggle("missing", isStudentMissing(student));
  studentDetailGrade.textContent = `${student.grade} 年级`;
  studentDetailPersonality.textContent = student.personality;
  studentDetailFaction.textContent = student.faction;
  studentDetailStatus.textContent = stressState || student.status;
  studentDetailTrust.textContent = `${student.trust}%`;
  studentDetailStress.textContent = `${student.stress}%`;
  studentDetailSquad.textContent = student.squadName || "无";
  const stressRule = getStressRule(student);
  studentDetailResistance.textContent = student.stressResistance;
  studentDetailResistanceTip.textContent = `每日恢复${stressRule.dailyRecovery}%\n压力减免${100 - Math.round(stressRule.gainMultiplier * 100)}%`;
  studentLiterature.textContent = `文学 ${effectiveAbilities.literature}`;
  studentEmergency.textContent = `应急 ${effectiveAbilities.emergency}`;
  studentStrength.textContent = `体力 ${effectiveAbilities.strength}`;
  studentVision.textContent = `视力 ${effectiveAbilities.vision}`;
  updateStudentActionButtons(student);
  renderPositionOptions(student);
  studentDetailPanel.hidden = false;
}

function updateStudentActionButtons(student) {
  const alreadyMember = isPlayerMember(student.id);
  const selectedFromMembers = !membersPanel.hidden && alreadyMember;
  const selectedFromRegion = studentDetailSource === "region";
  const protectedMember = isProtectedCoreMember(student);
  const bribeDisabledReason = getBribeDisabledReason(student);
  const inviteChance = getInviteChance(student);

  bribeStudent.hidden = selectedFromMembers || selectedFromRegion;
  inviteStudent.hidden = selectedFromMembers || selectedFromRegion;
  removeMember.hidden = !selectedFromMembers || selectedFromRegion;
  removeMember.parentElement.classList.toggle("member-mode", selectedFromMembers && !selectedFromRegion);

  bribeStudent.disabled = alreadyMember || Boolean(bribeDisabledReason);
  bribeStudent.title = alreadyMember ? "该学生已经是组织成员" : bribeDisabledReason || "使用 5 个手机提高信任度";

  inviteStudent.disabled = alreadyMember || inviteChance <= 0;
  inviteStudent.title = alreadyMember ? "该学生已经是组织成员" : inviteChance <= 0 ? "信任度低于 20%，无法邀请" : `成功概率 ${Math.round(inviteChance * 100)}%`;
  removeMember.disabled = protectedMember;
  removeMember.title = protectedMember ? "初始核心成员不可移除" : "从组织成员中移除，信任度下降 30%";
}

function renderPositionOptions(student) {
  const selectedFromMembers = !membersPanel.hidden && isPlayerMember(student.id);
  const selectedFromRegion = studentDetailSource === "region";
  positionPanel.hidden = !selectedFromMembers || selectedFromRegion;
  positionOptions.replaceChildren();
  if (!selectedFromMembers || selectedFromRegion) return;

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
  playSound(roleChangeSound, 0.54);
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
  if (isStudentMissing(student)) return "该学生正在失踪";
  if (resources.phones < BRIBE_PHONE_COST) return "手机不足";
  if (bribeUsedDayKey === getCurrentDayKey()) return "今天已经贿赂过一名学生";
  if (student.trust >= 100) return "该学生信任度已经满值";
  return "";
}

function canBribeStudent(student) {
  return !isPlayerMember(student.id) && !getBribeDisabledReason(student);
}

function getInviteChance(student) {
  if (isStudentMissing(student)) return 0;
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

function removeStudentFromSquad(student) {
  if (!student?.squadId) return;
  const squad = actionSquads.find((candidate) => candidate.id === student.squadId);
  if (squad) {
    squad.members = squad.members.filter((member) => member.studentId !== student.id);
  }
  student.squadId = "";
  student.squadName = "";
  student.squadRole = "";
}

function removeStudentFromOrganization(student) {
  if (isProtectedCoreMember(student)) return;
  removeStudentFromSquad(student);
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
  updateTopMeters();
  refreshRegionPanel();
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

function getCurrentPhaseIndex() {
  let elapsed = gameTime.dayProgressMs;
  for (let index = 0; index < DAY_SCHEDULE.length; index += 1) {
    if (elapsed < DAY_SCHEDULE[index].durationMs) return index;
    elapsed -= DAY_SCHEDULE[index].durationMs;
  }
  return DAY_SCHEDULE.length - 1;
}

function getCurrentPhase() {
  return DAY_SCHEDULE[getCurrentPhaseIndex()].label;
}

function updateStudentSchedules(force = false) {
  if (allStudents.length === 0) return;
  const scheduleKey = `${gameTime.totalDay}-${getCurrentPhaseIndex()}`;
  if (!force && scheduleKey === lastStudentScheduleKey) return;
  lastStudentScheduleKey = scheduleKey;
  allStudents.forEach((student) => {
    if (isStudentMissing(student) || isStudentDetachedFromSchedule(student)) return;
    student.location = getScheduledRegionForStudent(student);
  });
  refreshRegionPanel();
}

function isStudentDetachedFromSchedule(student) {
  if (!student.squadId) return false;
  const squad = actionSquads.find((candidate) => candidate.id === student.squadId);
  return ["集合", "已集合", "召集中", "集结中", "assembled", "assembling"].includes(squad?.status);
}

function getScheduledRegionForStudent(student) {
  const phaseIndex = getCurrentPhaseIndex();
  if (phaseIndex === 0) return student.grade <= 8 ? "主教学楼" : "副教学楼";
  if (phaseIndex === 1) return weightedRegionPick([
    ["食堂", 72],
    ["小卖铺", 10],
    ["操场", 10],
    ["宿舍楼", 8],
  ]);
  if (phaseIndex === 2) return student.grade >= 9 ? "主教学楼" : "副教学楼";
  if (phaseIndex === 3) return randomFrom(["宿舍楼", "操场", "网球场", "室内体育馆", "艺术中心", "游乐区"]);
  return weightedRegionPick([
    ["宿舍楼", 84],
    ["操场", 16],
  ]);
}

function weightedRegionPick(entries) {
  const total = entries.reduce((sum, [, weight]) => sum + weight, 0);
  let roll = Math.random() * total;
  for (const [regionName, weight] of entries) {
    if (roll < weight) return regionName;
    roll -= weight;
  }
  return entries[entries.length - 1][0];
}

function updateOrganizationMemberMarkers(now = performance.now()) {
  requestAnimationFrame(updateOrganizationMemberMarkers);
  if (!document.body.classList.contains("game-active")) return;
  const elapsedSeconds = lastMarkerUpdateAt ? Math.min(0.25, (now - lastMarkerUpdateAt) / 1000) : 0;
  lastMarkerUpdateAt = now;
  const visible = scale >= 1.7;
  memberMarkerLayer.hidden = !visible;
  if (!visible) return;

  const activeIds = new Set(playerMembers.map((student) => student.id));
  [...memberMarkerState.keys()].forEach((studentId) => {
    if (!activeIds.has(studentId)) {
      memberMarkerState.get(studentId)?.node.remove();
      memberMarkerState.delete(studentId);
    }
  });

  playerMembers.forEach((student) => updateOrganizationMemberMarker(student, elapsedSeconds));
}

function renderSquadMapMarkers() {
  squadMarkerLayer.replaceChildren();
  const visible = document.body.classList.contains("game-active") && scale >= 1;
  squadMarkerLayer.hidden = !visible;
  if (!visible) return;

  actionSquads.forEach((squad) => {
    const point = getSquadMapPoint(squad);
    if (!point) return;
    const marker = document.createElement("button");
    marker.type = "button";
    marker.className = "squad-map-marker";
    marker.dataset.squadId = squad.id;
    marker.style.left = `${point.x}px`;
    marker.style.top = `${point.y}px`;
    marker.style.setProperty("--marker-scale", String(1 / Math.max(scale, 1)));

    const flag = document.createElement("span");
    flag.className = "squad-map-flag";
    appendSquadFlagVisual(flag, squad);

    const name = document.createElement("span");
    name.className = "squad-map-name";
    name.textContent = squad.name;

    marker.append(flag, name);
    marker.addEventListener("click", (event) => {
      event.stopPropagation();
      showSquadInfoPanel(squad.id);
    });
    squadMarkerLayer.append(marker);
  });
}

function getSquadMapPoint(squad) {
  if (squad.status === "已集合" && squad.assemblyPoint) return squad.assemblyPoint;
  return squad.headquarters;
}

function showSquadInfoPanel(squadId) {
  const squad = actionSquads.find((candidate) => candidate.id === squadId);
  if (!squad) return;
  selectedSquadInfoId = squadId;
  clearHover();
  clearRegionSelection();
  const values = calculateSquadStats(squad.members.map((member) => member.studentId));
  appendSquadFlagVisual(squadInfoFlag, squad);
  squadInfoName.textContent = squad.name;
  squadInfoStatus.textContent = `状态：${squad.status || "分散"}`;
  squadInfoCount.textContent = `${squad.members.length} 人`;
  squadInfoHeadquarters.textContent = squad.headquarters?.region || "--";
  squadInfoStability.textContent = `${values.stability}%`;
  squadInfoPressure.textContent = `${values.pressure}%`;
  squadInfoPanel.hidden = false;
}

function closeSquadInfoPanel() {
  squadInfoPanel.hidden = true;
  selectedSquadInfoId = null;
}

function updateOrganizationMemberMarker(student, elapsedSeconds) {
  if (!student.location || isStudentMissing(student)) return;
  const region = regions.find((candidate) => candidate.name === student.location);
  if (!region) return;
  let marker = memberMarkerState.get(student.id);
  if (!marker) {
    const point = getRandomPointInRegion(region);
    const node = document.createElement("span");
    node.className = "member-map-marker";
    memberMarkerLayer.append(node);
    marker = { node, x: point.x, y: point.y, targetX: point.x, targetY: point.y, regionName: region.name };
    memberMarkerState.set(student.id, marker);
  }
  if (marker.regionName !== region.name || !isMapPointInRegion(region, marker.x, marker.y)) {
    const point = getRandomPointInRegion(region);
    Object.assign(marker, { x: point.x, y: point.y, targetX: point.x, targetY: point.y, regionName: region.name });
  }

  const distanceToTarget = Math.hypot(marker.targetX - marker.x, marker.targetY - marker.y);
  if (distanceToTarget < 4) {
    const target = getRandomNearbyPointInRegion(region, marker.x, marker.y);
    marker.targetX = target.x;
    marker.targetY = target.y;
  }

  if (!paused && elapsedSeconds > 0) {
    const dx = marker.targetX - marker.x;
    const dy = marker.targetY - marker.y;
    const distance = Math.hypot(dx, dy);
    const markerSpeed = 7 * (0.85 + Math.min(timeSpeed, 5) * 0.09);
    const step = Math.min(distance, markerSpeed * elapsedSeconds);
    if (distance > 0) {
      const nextX = marker.x + (dx / distance) * step;
      const nextY = marker.y + (dy / distance) * step;
      if (isMapPointInRegion(region, nextX, nextY)) {
        marker.x = nextX;
        marker.y = nextY;
      } else {
        const target = getRandomNearbyPointInRegion(region, marker.x, marker.y);
        marker.targetX = target.x;
        marker.targetY = target.y;
      }
    }
  }

  marker.node.style.left = `${marker.x}px`;
  marker.node.style.top = `${marker.y}px`;
}

function getRandomNearbyPointInRegion(region, x, y) {
  for (let attempt = 0; attempt < 24; attempt += 1) {
    const angle = Math.random() * Math.PI * 2;
    const distance = randomInt(18, 70);
    const nextX = clamp(x + Math.cos(angle) * distance, 0, campusMap.naturalWidth);
    const nextY = clamp(y + Math.sin(angle) * distance, 0, campusMap.naturalHeight);
    if (isMapPointInRegion(region, nextX, nextY)) return { x: nextX, y: nextY };
  }
  return getRandomPointInRegion(region);
}

function getRandomPointInRegion(region) {
  for (let attempt = 0; attempt < 700; attempt += 1) {
    const x = Math.random() * campusMap.naturalWidth;
    const y = Math.random() * campusMap.naturalHeight;
    if (isMapPointInRegion(region, x, y)) return { x, y };
  }
  return { x: campusMap.naturalWidth / 2, y: campusMap.naturalHeight / 2 };
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

function setMapScaleAtViewportCenter(nextScale) {
  const rect = mapViewport.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const beforeX = (centerX - rect.left - panX) / scale;
  const beforeY = (centerY - rect.top - panY) / scale;
  scale = clamp(nextScale, 0.36, 3.2);
  panX = centerX - rect.left - beforeX * scale;
  panY = centerY - rect.top - beforeY * scale;
  clampPan();
  applyTransform();
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
  updateZoomValue();
  renderSquadMapMarkers();
}

function updateZoomValue() {
  zoomValue.textContent = `${Math.round(scale * 100)}%`;
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
  if (choosingSquadHeadquarters) return true;
  const tagName = event.target?.tagName?.toLowerCase();
  return !["input", "textarea", "select", "button"].includes(tagName);
}

function shouldCaptureGlobalShortcut(event) {
  if (!document.body.classList.contains("game-active")) return false;
  if (event.metaKey || event.ctrlKey || event.altKey) return false;
  const tagName = event.target?.tagName?.toLowerCase();
  return !["input", "textarea", "select"].includes(tagName);
}

function clampPan() {
  const rect = mapViewport.getBoundingClientRect();
  const mapWidth = 1988 * scale;
  const mapHeight = 791 * scale;
  const margin = 80;

  if (choosingSquadHeadquarters) {
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    panX = clamp(panX, centerX - mapWidth, centerX);
    panY = clamp(panY, centerY - mapHeight, centerY);
    return;
  }

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

function isMapPointInRegion(region, x, y) {
  if (!indexReady || !region || x < 0 || y < 0 || x >= campusMap.naturalWidth || y >= campusMap.naturalHeight) return false;
  const indexX = Math.floor((x / campusMap.naturalWidth) * indexCanvas.width);
  const indexY = Math.floor((y / campusMap.naturalHeight) * indexCanvas.height);
  const pixel = indexCtx.getImageData(indexX, indexY, 1, 1).data;
  return sameColor(region.color, pixel);
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
  closeSquadInfoPanel();
  regionPanel.hidden = false;
  regionMemberList.hidden = true;
  refreshRegionPanel();
  drawRegionHighlight(region, true);
}

function clearRegionSelection() {
  selectedRegion = null;
  regionPanel.hidden = true;
  regionMemberPanel.hidden = true;
  hoverCard.hidden = true;
  hoveredRegion = null;
  clearHighlight();
}

function refreshRegionPanel() {
  if (!selectedRegion) return;
  const region = selectedRegion;
  const regionStudents = getStudentsInRegion(region.name);
  const organizationStudents = getOrganizationStudentsInRegion(region.name);
  const support = averageStudents(regionStudents, (student) => student.trust);
  const pressure = averageStudents(regionStudents, (student) => student.stress);
  regionName.textContent = region.name;
  regionFunction.textContent = region.role;
  regionSupport.textContent = `${support}%`;
  regionPressure.textContent = `${pressure}%`;
  regionPatrol.textContent = region.patrol;
  regionMembersButton.textContent = `${organizationStudents.length} 人`;
  regionMembersButton.disabled = organizationStudents.length === 0;
  regionStudentCount.textContent = `${regionStudents.length} 人`;
  if (!regionMemberPanel.hidden) renderRegionMemberList(region);
}

function getStudentsInRegion(regionName) {
  return allStudents.filter((student) => student.location === regionName && !isStudentMissing(student));
}

function getOrganizationStudentsInRegion(regionName) {
  return getStudentsInRegion(regionName).filter((student) => isPlayerMember(student.id));
}

function renderRegionMemberList(region) {
  const members = getOrganizationStudentsInRegion(region.name);
  regionMemberPanelTitle.textContent = `${region.name} / 组织学生`;
  regionMemberList.replaceChildren();
  if (members.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "此区域暂无我方成员。";
    regionMemberList.append(empty);
    return;
  }
  members.forEach((student) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "region-member-row";
    const name = document.createElement("strong");
    name.textContent = student.role ? `${student.name} - ${student.role}` : student.name;
    const meta = document.createElement("span");
    meta.textContent = `${student.grade}年级 / 信任 ${student.trust}% / 压力 ${student.stress}%`;
    row.append(name, meta);
    row.addEventListener("click", () => showStudentDetail(student.id, "region"));
    regionMemberList.append(row);
  });
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
  document.addEventListener("pointerover", (event) => {
    const button = event.target.closest("button");
    if (!button || button.disabled) return;
    if (button.contains(event.relatedTarget)) return;
    const now = performance.now();
    if (now - lastHoverSoundAt < 90) return;
    lastHoverSoundAt = now;
    playSound(hoverSound, 0.32);
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button || button.disabled || button.getAttribute("aria-disabled") === "true") return;
    if (["startGame", "selectStudents", "selectFaculty"].includes(button.id)) return;
    if (["pauseToggle", "createSquadConfirm"].includes(button.id)) return;
    if (button.classList.contains("position-option")) return;
    playRandomClickSound();
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
