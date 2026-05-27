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
const creditsScreen = document.getElementById("creditsScreen");
const startGame = document.getElementById("startGame");
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
  { name: "Li Xinyu", role: "副手", grade: 11, personality: "忠诚", faction: "激进学生", trust: 92 },
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
let selectedRecruitGrade = 6;
let selectedStudentId = null;
const pressedKeys = new Set();
let activeMapImage = campusMap;
let inactiveMapImage = campusMapAlt;
let currentMapVisual = MAP_VISUALS.day;
let gameTime = {
  day: 1,
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

startGame.addEventListener("click", () => {
  playSound(startSound);
  settingsPanel.hidden = true;
  document.body.classList.remove("settings-open");
  cloudTransition.classList.remove("open");
  cloudTransition.classList.add("active");

  window.setTimeout(() => {
    document.body.classList.remove("menu-active");
    document.body.classList.add("game-active");
    if (allStudents.length === 0) initializeStudentPopulation();
    gameTime.lastTickAt = performance.now();
    updateTimeUi();
    updateMemberUi();
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
});

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

document.querySelectorAll(".grade-tab").forEach((button) => {
  button.addEventListener("click", () => {
    selectedRecruitGrade = Number(button.dataset.grade);
    document.querySelectorAll(".grade-tab").forEach((tab) => tab.classList.toggle("active", tab === button));
    renderRecruitList(selectedRecruitGrade);
    studentDetailPanel.hidden = true;
  });
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
  if (faction === "激进学生") return randomInt(55, 88);
  if (faction === "中立") return randomInt(20, 65);
  return randomInt(15, 75);
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

  if (gameTime.day >= DAYS_PER_SEMESTER) {
    finishSemester();
  } else {
    gameTime.day += 1;
  }

  appendLog(`${getSemesterName()} 第 ${gameTime.day} 天开始：校园时间进入${getCurrentPhase()}。`);
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
}

function updateTimeUi() {
  dayLabel.textContent = `第 ${gameTime.day} 天`;
  phaseLabel.textContent = getCurrentPhase();
  semesterDayLabel.textContent = `${getSemesterName()} 第 ${gameTime.day} 天`;
  dayProgressFill.style.width = `${Math.min(100, (gameTime.dayProgressMs / REAL_MS_PER_GAME_DAY) * 100)}%`;
  updateMapVisual();
}

function updateMemberUi() {
  memberCount.textContent = String(playerMembers.length);
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
  membersList.replaceChildren();
  playerMembers.forEach((student) => {
    membersList.append(createStudentRow(student, true));
  });
}

function createStudentRow(student, showRole = false) {
  const row = document.createElement("button");
  row.type = "button";
  row.className = "student-row";
  row.dataset.studentId = student.id;
  row.classList.toggle("active", student.id === selectedStudentId);

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
  trust.textContent = `${student.trust}%`;

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
  studentDetailPanel.hidden = false;
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

    if (button.id === "startGame") return;
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
