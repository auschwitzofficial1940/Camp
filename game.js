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
const regionActionsToggle = document.getElementById("regionActionsToggle");
const regionActionsArrow = document.getElementById("regionActionsArrow");
const regionActionList = document.getElementById("regionActionList");
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
const squadInfoMembers = document.getElementById("squadInfoMembers");
const squadInfoMove = document.getElementById("squadInfoMove");
const squadInfoEdit = document.getElementById("squadInfoEdit");
const squadStatusMenu = document.getElementById("squadStatusMenu");
const squadMemberPanel = document.getElementById("squadMemberPanel");
const squadMemberPanelTitle = document.getElementById("squadMemberPanelTitle");
const actionConfirmModal = document.getElementById("actionConfirmModal");
const actionConfirmTitle = document.getElementById("actionConfirmTitle");
const actionConfirmBody = document.getElementById("actionConfirmBody");
const actionSquadList = document.getElementById("actionSquadList");
const closeActionConfirm = document.getElementById("closeActionConfirm");
const quickDock = document.getElementById("quickDock");
const quickDockToggle = document.getElementById("quickDockToggle");
const quickDockUpdate = document.getElementById("quickDockUpdate");
const updateLogOverlay = document.getElementById("updateLogOverlay");
const updateLogContent = document.getElementById("updateLogContent");
const closeUpdateLogButton = document.getElementById("closeUpdateLog");
const globalVersionBadge = document.getElementById("globalVersionBadge");
const endingScreen = document.getElementById("endingScreen");
const endingType = document.getElementById("endingType");
const endingTitle = document.getElementById("endingTitle");
const endingBody = document.getElementById("endingBody");

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
  "assets/image/火箭发射.gif",
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
  "assets/icon/wiki.png",
  "assets/icon/update.png",
  "assets/icon/bug.png",
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
  fullNames: [],
  firstNames: ["James", "Mary", "Daniel", "Sarah", "Michael", "Linda"],
  lastNames: ["Smith", "Johnson", "Brown", "Garcia", "Wilson", "Martin"],
  nameOrder: "first-last",
  separator: " ",
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
  理想主义: {
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
  { name: "Hong Xixi", role: "我", grade: 9, personality: "理想主义", faction: "激进学生", trust: 100 },
  { name: "Li Xinyu", role: "副主席", grade: 11, personality: "忠诚", faction: "激进学生", trust: 92 },
];
const ORGANIZATION_ROLES = ["副主席", "宣传部长", "情报部长", "后勤部长", "成员"];
const SQUAD_MEMBER_ROLES = ["队长", "宣传员", "侦查员", "成员"];
const LIMITED_SQUAD_ROLES = ["队长", "宣传员", "侦查员"];
const SQUAD_STATUSES = ["分散", "集合", "潜伏"];
const SQUAD_STATUS_DESCRIPTIONS = {
  分散: "这支小队会回到普通学生日程，不执行任何行动，也不会增加察觉。",
  集合: "这支小队会以 100% 能力行动，但更容易被管理层察觉。",
  潜伏: "这支小队只发挥 60% 能力，较难被察觉，但长期潜伏会逐渐引起怀疑。",
};
const REGION_ACTIONS = {
  宣传: { durationMs: REAL_MS_PER_GAME_DAY / 2, cooldownMs: REAL_MS_PER_GAME_DAY },
  招募: { durationMs: REAL_MS_PER_GAME_DAY / 2, cooldownMs: REAL_MS_PER_GAME_DAY },
  侦查: { durationMs: REAL_MS_PER_GAME_DAY / 2, cooldownMs: REAL_MS_PER_GAME_DAY * 3, minScouting: 45 },
  集会: { durationMs: REAL_MS_PER_GAME_DAY / 2, cooldownMs: REAL_MS_PER_GAME_DAY * 3 },
  休息: { durationMs: REAL_MS_PER_GAME_DAY, cooldownMs: REAL_MS_PER_GAME_DAY },
};
const FALLBACK_UPDATE_LOG_DATES = [
  {
    date: "2026-06-15",
    label: "2026年6月15日",
    timezone: "UTC+9",
    latest: true,
    updateCount: 1,
    logs: [
      {
        id: "09_45",
        date: "2026-06-15",
        time: "09:45",
        datetime: "2026-06-15T09:45:00+09:00",
        layer: 1,
        title: "V1.6.2 主页快捷菜单与更新日志系统",
        latest: true,
        sections: [
          { heading: "主页快捷菜单", items: ["新增主页右下角伸展快捷菜单。", "快捷菜单仅在主页显示，游戏内、阵营选择、设置和制作人员页面不会显示。", "当前提供百科、更新日志、报告问题三个入口，并接入 hover 提示与 UI 音效。"] },
          { heading: "更新日志弹窗", items: ["点击更新日志入口后，会在当前主页打开游戏风格弹窗。", "支持三层 URL、Esc 逐级返回、浏览器返回按钮，以及 X / 背景直接关闭。", "新增火箭 GIF 时间线视觉效果。"] },
          { heading: "外置 JSON 系统", items: ["更新日志数据拆分为真实 JSON 文件结构。", "支持按日期与时间点读取详情，并兼容 items 与 sections 两种内容格式。", "加入缓存与 fallback 机制，读取失败时不会导致界面崩溃。"] },
          { heading: "内容与 UI", items: ["录入从 V1.0.0 到最新版本的真实更新内容。", "隐藏原生滚动条，同时保留滚动能力。", "修复时间线点击后滚动位置跳回顶部的问题，并优化文字排版稳定性。"] },
        ],
      },
    ],
  },
  {
    date: "2026-06-10",
    label: "2026年6月10日",
    timezone: "UTC+9",
    latest: false,
    updateCount: 1,
    logs: [
      {
        id: "13_57",
        date: "2026-06-10",
        time: "13:57",
        datetime: "2026-06-10T13:57:00+09:00",
        layer: 1,
        title: "V1.6.1 SEO 基础优化",
        latest: true,
        sections: [
          { heading: "SEO 基础优化", items: ["检查并整理网站现有 SEO 配置。", "保留并兼容项目中已有的 Meta 信息。", "覆盖 Title、Description、Keywords、Robots、Canonical、Open Graph 与 Twitter Card 等核心标签。"] },
          { heading: "搜索展示", items: ["优化网站标题结构，让搜索引擎更容易理解页面内容。", "强化校园政治、策略模拟、网页游戏等核心关键词。", "改善搜索结果与社交平台分享时的展示效果。"] },
          { heading: "兼容性", items: ["不影响现有页面功能与样式。", "保持与 Google、Bing 及主流社交平台分享卡片兼容。", "为后续 Sitemap、Robots.txt 与收录优化做准备。"] },
        ],
      },
    ],
  },
  {
    date: "2026-06-06",
    label: "2026年6月6日",
    timezone: "UTC+9",
    latest: true,
    updateCount: 1,
    logs: [
      {
        id: "00_30",
        date: "2026-06-06",
        time: "00:30",
        datetime: "2026-06-06T00:30:00+09:00",
        layer: 1,
        title: "V1.6.0 区域行动系统",
        latest: true,
        sections: [
          {
            heading: "区域行动系统",
            items: ["新增地块信息面板行动折叠栏。", "支持宣传、招募、侦查、集会、休息五种区域行动。", "不满足条件的行动会自动置灰显示。", "行动下达前会弹出确认窗口，并按本地块空闲、外地块空闲、忙碌不可用排序显示可选小队。"],
          },
          {
            heading: "小队行动规则",
            items: ["分散状态小队无法执行区域行动。", "仅集合或潜伏状态且空闲的小队可接受任务。", "若小队不在目标地块，会先移动至指定区域后再开始行动。", "行动期间小队进入忙碌状态并显示红色标记。", "地图上新增行动进度条显示当前任务进展。"],
          },
          {
            heading: "行动时间机制",
            items: ["行动持续时间与冷却时间均采用实时计时。", "不再依赖每日结算刷新。"],
          },
          {
            heading: "系统联动",
            items: ["宣传、招募、侦查、集会、休息已接入现有游戏系统。", "可影响知名度、管理层察觉度、学生信任度、压力等属性。", "行动结果会记录到游戏日志中。"],
          },
          {
            heading: "地块支持率",
            items: ["地块支持率改为基于该区域真实学生信任度平均值动态计算。", "支持率会随学生态度变化实时更新。"],
          },
        ],
      },
    ],
  },
  {
    date: "2026-06-05",
    label: "2026年6月5日",
    timezone: "UTC+9",
    latest: false,
    updateCount: 1,
    logs: [
      {
        id: "18_20",
        date: "2026-06-05",
        time: "18:20",
        datetime: "2026-06-05T18:20:00+09:00",
        layer: 1,
        title: "V1.5.1 行动小队状态系统",
        latest: true,
        sections: [
          {
            heading: "行动小队状态系统",
            items: ["新增分散 / 集合 / 潜伏三种小队状态。", "小队信息面板状态栏改为可切换按钮。", "状态切换时会显示确认窗口及对应说明。", "当前状态会在下拉菜单中标记为“当前”。"],
          },
          {
            heading: "状态效果",
            items: ["分散：成员按正常学生日程活动，总部迁移立即完成。", "集合：成员脱离日程，小队能力提升至100%。", "潜伏：成员脱离日程，小队行动能力降至60%，稳定度与压力保持不变。", "潜伏超过3天后，每天增加1点管理层察觉度。"],
          },
          {
            heading: "小队移动机制",
            items: ["集合或潜伏状态下迁移总部时，不再瞬间移动。", "小队会进入“移动中”状态，抵达后自动完成迁移。"],
          },
          {
            heading: "地图显示更新",
            items: ["分散状态使用原队旗标记。", "集合状态队旗改为菱形标记。", "潜伏状态队旗改为三角形标记。", "小队移动期间仅显示状态图标，暂时隐藏队名标签。", "抵达目的地后恢复完整队伍标记显示。"],
          },
          {
            heading: "兼容性与优化",
            items: ["兼容编辑队伍功能。", "兼容总部选择与迁移系统。", "兼容地图小队标记显示。", "兼容地块人数统计与刷新逻辑。"],
          },
        ],
      },
    ],
  },
  {
    date: "2026-06-04",
    label: "2026年6月4日",
    timezone: "UTC+9",
    latest: false,
    updateCount: 1,
    logs: [
      {
        id: "00_46",
        date: "2026-06-04",
        time: "00:46",
        datetime: "2026-06-04T00:46:00+09:00",
        layer: 1,
        title: "V1.5.0 行动小队地图系统",
        latest: true,
        sections: [
          { heading: "总部选择与迁移", items: ["创建小队时新增地图总部选择模式。", "编辑小队时可重新迁移总部，并继承有效地块限制。", "修复地图边缘区域难以选择的问题。"] },
          { heading: "地图显示与交互", items: ["地图缩放后会显示行动小队标记和组织成员位置。", "小队标记支持点击查看详情，并优先于地块交互。", "优化高倍率缩放下的标记大小与队名显示。"] },
          { heading: "面板与焦点", items: ["小队信息面板与地块面板互斥显示。", "Esc 支持按层级关闭窗口与取消选中。", "优化地图焦点逻辑，选择模式下可直接使用 WASD。"] },
          { heading: "资源预加载", items: ["新增启动 Loading Screen。", "启动时预加载关键图片、图标、音效、音乐和 name.json。", "部分资源加载失败时会提示玩家，并允许继续进入。"] },
        ],
      },
    ],
  },
  {
    date: "2026-06-03",
    label: "2026年6月3日",
    timezone: "UTC+9",
    latest: false,
    updateCount: 1,
    logs: [
      {
        id: "13_20",
        date: "2026-06-03",
        time: "13:20",
        datetime: "2026-06-03T13:20:00+09:00",
        layer: 1,
        title: "V1.4.0 时间快进与学生 AI",
        latest: true,
        sections: [
          { heading: "学生日程 AI", items: ["学生会根据年级和当前时间段自动分布到不同地块。", "组织成员在小队集合前仍按普通学生日程活动。", "日程 AI 只在时间段切换时重新分配，减少地图乱跳。"] },
          { heading: "地块信息面板", items: ["新增学生人数统计。", "组织学生列表改为独立面板，并可继续查看人员详情。", "地块支持率与压力改为根据当前区域学生动态计算。"] },
          { heading: "时间速度系统", items: ["右上角新增 S / 1X / 2X / 5X 时间速度 UI。", "支持 Space 暂停与数字键切换速度。", "时间推进现在会根据速度档位变化。"] },
        ],
      },
    ],
  },
  {
    date: "2026-06-01",
    label: "2026年6月1日",
    timezone: "UTC+9",
    latest: false,
    updateCount: 1,
    logs: [
      {
        id: "20_30",
        date: "2026-06-01",
        time: "20:30",
        datetime: "2026-06-01T20:30:00+09:00",
        layer: 1,
        title: "V1.3.6 顶部 hover 优化",
        latest: true,
        items: ["进一步修复顶部 HUD hover 菜单换行与层级问题。", "边缘项目会调整弹出方向，避免内容跑出屏幕。"],
      },
    ],
  },
  {
    date: "2026-05-29",
    label: "2026年5月29日",
    timezone: "UTC+9",
    latest: false,
    updateCount: 1,
    logs: [
      {
        id: "14_55",
        date: "2026-05-29",
        time: "14:55",
        datetime: "2026-05-29T14:55:00+09:00",
        layer: 1,
        title: "V1.3.5 顶部 hover 修复",
        latest: true,
        items: ["修复顶部 HUD hover 菜单文字溢出问题。", "hover 菜单现在会自动换行，并根据内容撑开高度。"],
      },
    ],
  },
  {
    date: "2026-05-28",
    label: "2026年5月28日",
    timezone: "UTC+9",
    latest: false,
    updateCount: 1,
    logs: [
      {
        id: "03_15",
        date: "2026-05-28",
        time: "03:15",
        datetime: "2026-05-28T03:15:00+09:00",
        layer: 1,
        title: "V1.3.4 顶部 HUD 数据化",
        latest: true,
        items: ["顶部 HUD 的压力、稳定度、学生支持、知名度和察觉接入真实数据。", "所有进度条项目新增 hover 说明，显示当前数值和简短解释。"],
      },
    ],
  },
  {
    date: "2026-05-27",
    label: "2026年5月27日",
    timezone: "UTC+9",
    latest: false,
    updateCount: 2,
    logs: [
      {
        id: "23_49",
        date: "2026-05-27",
        time: "23:49",
        datetime: "2026-05-27T23:49:00+09:00",
        layer: 2,
        title: "V1.3.3 压力事件调整",
        latest: true,
        items: ["重做压力达到极限后的事件规则。", "失踪事件改为未知持续时间，并在详情面板显示 MISSING 标记。", "Final Exam Week 现在会影响全体学生。"],
      },
      {
        id: "11_46",
        date: "2026-05-27",
        time: "11:46",
        datetime: "2026-05-27T11:46:00+09:00",
        layer: 1,
        title: "V1.3.2 行动小队 UI",
        latest: false,
        items: ["行动小队创建 / 编辑面板的学生信息框新增可信度与压力进度条。", "玩家现在能更直观判断成员是否适合加入队伍。"],
      },
    ],
  },
  {
    date: "2026-05-26",
    label: "2026年5月26日",
    timezone: "UTC+9",
    latest: false,
    updateCount: 1,
    logs: [
      {
        id: "09_00",
        date: "2026-05-26",
        time: "09:00",
        datetime: "2026-05-26T09:00:00+09:00",
        layer: 1,
        title: "V1.3.1 压力显示优化",
        latest: true,
        items: ["学生详情中的压力抗性改为低 / 中 / 高显示。", "新增压力抗性 hover 说明，让玩家更容易理解恢复与减压效果。"],
      },
    ],
  },
  {
    date: "2026-05-24",
    label: "2026年5月24日",
    timezone: "UTC+9",
    latest: false,
    updateCount: 1,
    logs: [
      {
        id: "17_14",
        date: "2026-05-24",
        time: "17:14",
        datetime: "2026-05-24T17:14:00+09:00",
        layer: 1,
        title: "V1.3.0 压力值系统",
        latest: true,
        sections: [
          { heading: "压力系统", items: ["新增学生个人压力值，不同年级拥有不同初始压力范围。", "压力会影响学生能力表现，并参与后续事件判定。"] },
          { heading: "压力抗性", items: ["新增低 / 中 / 高压力抗性。", "压力抗性会影响压力增长与每日自然恢复。"] },
          { heading: "考试与状态", items: ["新增 Final Exam Week，期末阶段会提高全体学生压力。", "压力过高会让学生能力下降，并同步影响行动小队平均能力。"] },
          { heading: "崩溃事件", items: ["学生压力达到极限时可能退出组织、退出小队或暂时失踪。", "压力系统已接入学生能力与组织行动效率。"] },
        ],
      },
    ],
  },
  {
    date: "2026-05-23",
    label: "2026年5月23日",
    timezone: "UTC+9",
    latest: false,
    updateCount: 3,
    logs: [
      {
        id: "16_40",
        date: "2026-05-23",
        time: "16:40",
        datetime: "2026-05-23T16:40:00+09:00",
        layer: 3,
        title: "V1.2.2 学生能力图标",
        latest: true,
        items: ["小队能力图标统一到行动小队面板中。", "创建 / 编辑队伍时，学生详情中的能力也会显示对应图标。"],
      },
      {
        id: "09_00",
        date: "2026-05-23",
        time: "09:00",
        datetime: "2026-05-23T09:00:00+09:00",
        layer: 2,
        title: "V1.2.1 时间快捷键与音效",
        latest: false,
        items: ["新增 Space 暂停 / 继续快捷键，并同步到时间系统。", "暂停、创建队伍和更改小队职位等操作接入对应 UI 音效。"],
      },
      {
        id: "00_10",
        date: "2026-05-23",
        time: "00:10",
        datetime: "2026-05-23T00:10:00+09:00",
        layer: 1,
        title: "V1.2.0 创建条件优化",
        latest: false,
        sections: [
          { heading: "创建条件", items: ["创建 / 编辑小队现在需要队名、成员和队长。", "灰色按钮可 hover 查看尚未满足的条件。", "队名重复时会明确显示队名已存在。"] },
          { heading: "取消编辑", items: ["创建或编辑小队时按 Esc 会取消本次操作。", "编辑取消后，原队伍会保持上一次保存状态。"] },
        ],
      },
    ],
  },
  {
    date: "2026-05-22",
    label: "2026年5月22日",
    timezone: "UTC+9",
    latest: false,
    updateCount: 1,
    logs: [
      {
        id: "11_50",
        date: "2026-05-22",
        time: "11:50",
        datetime: "2026-05-22T11:50:00+09:00",
        layer: 1,
        title: "V1.1.1 小队数值 UI",
        latest: true,
        items: ["创建小队左侧信息栏加入人数、稳定度、压力和小队能力图标。", "小队数值面板改为更统一的小圆角卡片风格。"],
      },
    ],
  },
  {
    date: "2026-05-21",
    label: "2026年5月21日",
    timezone: "UTC+9",
    latest: false,
    updateCount: 1,
    logs: [
      {
        id: "23_22",
        date: "2026-05-21",
        time: "23:22",
        datetime: "2026-05-21T23:22:00+09:00",
        layer: 1,
        title: "V1.1.0 行动小队编辑",
        latest: true,
        sections: [
          { heading: "队伍管理", items: ["已创建小队支持右键编辑与解散。", "编辑队伍可修改名称、队旗、成员和职位。", "队名现在不能重复。"] },
          { heading: "创建窗口优化", items: ["创建 / 编辑窗口改为固定高度，内部可滚动。", "已在其他小队的学生会排序到底部并标记为不可用。", "学生详情改为独立弹窗，避免挤占组队页面。"] },
          { heading: "小队列表", items: ["小队卡片新增人数、创建日期、存在天数。", "稳定度、压力和主要能力现在以更清晰的卡片信息展示。"] },
        ],
      },
    ],
  },
  {
    date: "2026-05-20",
    label: "2026年5月20日",
    timezone: "UTC+9",
    latest: false,
    updateCount: 1,
    logs: [
      {
        id: "14_00",
        date: "2026-05-20",
        time: "14:00",
        datetime: "2026-05-20T14:00:00+09:00",
        layer: 1,
        title: "V1.0.0 行动小队",
        latest: true,
        sections: [
          { heading: "行动小队基础", items: ["新增左侧行动小队菜单。", "玩家可以创建新的行动小队，并在居中弹窗中配置队伍。", "小队会记录创建日期和已存在天数。"] },
          { heading: "队伍创建", items: ["支持设置队旗、队名和小队成员。", "新增队长、宣传员、侦查员、成员四种小队职位。", "创建队伍需要至少一名学生和一名队长。"] },
          { heading: "成员选择", items: ["组织成员可加入编队，已选成员会高亮显示。", "已在其他小队的成员会标记为不可用。", "成员详情会显示所属小队。"] },
        ],
      },
    ],
  },
];
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
let pendingRegionAction = null;
let choosingSquadHeadquarters = false;
let choosingActionTarget = false;
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
let gameEnded = false;
const updateLogState = {
  open: false,
  view: "overview",
  date: null,
  logId: null,
  railScrollTop: 0,
};
const updateLogCache = {
  manifest: null,
  days: new Map(),
  details: new Map(),
  failed: false,
  errorMessage: "",
};
const pressedKeys = new Set();
let detailDrag = null;
let activeMapImage = campusMap;
let inactiveMapImage = campusMapAlt;
let currentMapVisual = MAP_VISUALS.day;
let lastStudentScheduleKey = "";
const memberMarkerState = new Map();
let lastMarkerUpdateAt = 0;
let lastSquadMovementUpdateAt = 0;
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
updateGlobalVersionBadge();
refreshGlobalVersionFromLogs();
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
  gameEnded,
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
  if (choosingActionTarget && event.key === "Enter") {
    event.preventDefault();
    completeActionTargetSelection();
    return;
  }
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

quickDockToggle.addEventListener("click", () => {
  const expanded = !quickDock.classList.contains("open");
  quickDock.classList.toggle("open", expanded);
  quickDock.classList.remove("pop");
  quickDock.querySelector(".quick-dock-panel")?.setAttribute("aria-hidden", String(!expanded));
  quickDockToggle.setAttribute("aria-expanded", String(expanded));
  quickDockToggle.setAttribute("aria-label", expanded ? "收起快捷菜单" : "展开快捷菜单");
  void quickDock.offsetWidth;
  quickDock.classList.add("pop");
  window.setTimeout(() => quickDock.classList.remove("pop"), 460);
});

quickDockUpdate.addEventListener("click", () => {
  openUpdateLog();
});

closeUpdateLogButton.addEventListener("click", () => {
  closeUpdateLog();
});

updateLogOverlay.addEventListener("click", (event) => {
  if (event.target === updateLogOverlay) closeUpdateLog();
});

window.addEventListener("popstate", syncUpdateLogFromPath);

pauseToggle.addEventListener("click", () => {
  togglePause();
  focusMapAfterUiAction();
});

speedOptions.forEach((button) => {
  button.addEventListener("click", () => {
    const speed = Number(button.dataset.speed);
    if (speed === 0) {
      setPausedState(true);
      focusMapAfterUiAction();
      return;
    }
    setTimeSpeed(speed);
    focusMapAfterUiAction();
  });
});

function togglePause() {
  if (gameEnded) return;
  playSound(pauseSound, 0.62);
  setPausedState(!paused);
}

function setTimeSpeed(speed) {
  if (gameEnded) return;
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
  const clickedSquadUi = Boolean(event.target.closest("#squadInfoPanel") || event.target.closest("#squadMemberPanel"));
  const clickedSquadMarker = Boolean(event.target.closest(".squad-map-marker"));
  if (!clickedMap && !clickedRegionUi) {
    clearRegionSelection();
  }
  if (!clickedSquadMarker && !clickedSquadUi) {
    closeSquadInfoPanel();
  }
  if (!squadStatusMenu.hidden && !squadStatusMenu.contains(event.target) && event.target !== squadInfoStatus) {
    squadStatusMenu.hidden = true;
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
  if (!squadMemberPanel.hidden && !squadMemberPanel.contains(event.target) && !squadInfoCount.contains(event.target)) {
    squadMemberPanel.hidden = true;
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

regionActionsToggle.addEventListener("click", () => {
  const expanded = regionActionList.hidden;
  regionActionList.hidden = !expanded;
  regionActionsToggle.setAttribute("aria-expanded", String(expanded));
  regionActionsToggle.classList.toggle("expanded", expanded);
  if (expanded && selectedRegion) renderRegionActionList(selectedRegion);
});

squadInfoCount.addEventListener("click", () => {
  if (!selectedSquadInfoId) return;
  squadMemberPanel.hidden = false;
  renderSquadInfoMembers(selectedSquadInfoId);
});

squadInfoMove.addEventListener("click", () => {
  if (!selectedSquadInfoId) return;
  startSquadRelocation(selectedSquadInfoId);
});

squadInfoEdit.addEventListener("click", () => {
  if (!selectedSquadInfoId) return;
  const squadId = selectedSquadInfoId;
  openSquadEditModal(squadId);
  closeSquadInfoPanel();
});

squadInfoStatus.addEventListener("click", () => {
  if (!selectedSquadInfoId) return;
  const squad = actionSquads.find((candidate) => candidate.id === selectedSquadInfoId);
  if (squad?.currentAction || squad?.moving) return;
  renderSquadStatusMenu(selectedSquadInfoId);
  squadStatusMenu.hidden = !squadStatusMenu.hidden;
});

closeActionConfirm.addEventListener("click", closeActionConfirmModal);

actionConfirmModal.addEventListener("click", (event) => {
  if (event.target === actionConfirmModal) closeActionConfirmModal();
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
    if (choosingActionTarget) return;
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
  let preloadSettled = false;
  let lastProgressAt = performance.now();
  const markDone = (src, failed = false) => {
    if (preloadSettled) return;
    completed += 1;
    lastProgressAt = performance.now();
    if (failed) failures.push(src);
    const percent = Math.round((completed / resources.length) * 100);
    updateLoadingProgress(percent, failed ? "发现缺失资源，继续尝试加载..." : "正在预加载战略资源...");
  };

  const preloadJobs = resources.map(async (src) => {
    try {
      if (src === "name.json") {
        await loadNameData();
      } else {
        await preloadAsset(src);
      }
      markDone(src);
    } catch {
      if (src === "name.json") nameData = DEFAULT_NAMES;
      markDone(src, true);
    }
  });

  const result = await new Promise((resolve) => {
    const startedAt = performance.now();
    const watcher = window.setInterval(() => {
      const now = performance.now();
      if (completed >= resources.length) {
        window.clearInterval(watcher);
        resolve({ timedOut: false, stalled: false });
        return;
      }
      if (now - lastProgressAt >= 5000) {
        window.clearInterval(watcher);
        resolve({ timedOut: false, stalled: true });
        return;
      }
      if (now - startedAt >= 20000) {
        window.clearInterval(watcher);
        resolve({ timedOut: true, stalled: false });
      }
    }, 160);

    Promise.allSettled(preloadJobs).then(() => {
      window.clearInterval(watcher);
      resolve({ timedOut: false, stalled: false });
    });
  });

  preloadSettled = true;

  if (result.stalled || result.timedOut) {
    failures.push(result.stalled ? "stalled" : "timeout");
    loadingStatus.textContent = result.stalled
      ? "资源加载失败，可能是网络错误，但仍可继续"
      : "资源加载超过 20 秒，已停止等待，但仍可继续";
    loadingContinue.hidden = false;
    loadingContinue.focus();
    return;
  }

  updateLoadingProgress(100, failures.length ? "部分资源加载失败，但仍可继续" : "资源加载完成");
  if (failures.length) {
    loadingContinue.hidden = false;
    loadingContinue.focus();
    return;
  }
  window.setTimeout(hideLoadingScreen, 420);
}

function preloadAsset(src) {
  if (/\.(png|jpe?g|gif|webp|ico)$/i.test(src)) return preloadImage(src);
  return preloadBinary(src);
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
    const normalized = normalizeNameData(data);
    if (normalized.fullNames.length || (normalized.firstNames.length && normalized.lastNames.length)) nameData = normalized;
  } catch {
    nameData = DEFAULT_NAMES;
  }
}

function normalizeNameData(data) {
  return {
    fullNames: getStringArray(data.fullNames || data.names),
    firstNames: getStringArray(data.firstNames || data.givenNames),
    lastNames: getStringArray(data.lastNames || data.familyNames),
    nameOrder: data.nameOrder === "last-first" ? "last-first" : "first-last",
    separator: typeof data.separator === "string" ? data.separator : " ",
  };
}

function getStringArray(value) {
  return Array.isArray(value) ? value.map((item) => String(item).trim()).filter(Boolean) : [];
}

function initializeStudentPopulation() {
  allStudents = [];
  mailHistory = [];
  actionSquads = [];
  draftSquad = null;
  resources.phones = 10;
  managementAwareness = 0;
  gameEnded = false;
  if (endingScreen) {
    endingScreen.classList.remove("open");
    endingScreen.hidden = true;
  }
  bribeUsedDayKey = null;
  resetDailyInviteCounters();
  Object.entries(INITIAL_GRADE_COUNTS).forEach(([gradeText, range]) => {
    const grade = Number(gradeText);
    const count = randomInt(range[0], range[1]);
    for (let index = 0; index < count; index += 1) {
      allStudents.push(createStudent(grade));
    }
  });

  CORE_MEMBER_DEFS.forEach((definition) => {
    const member = createStudent(definition.grade, definition);
    member.isCore = true;
    member.role = definition.role;
    member.trust = definition.trust;
    allStudents.push(member);
    playerMembers.push(member);
  });
  protectLockedMemberTrust();
  updateStudentSchedules(true);
  appendLog(`学生生态初始化：全校 ${allStudents.length} 人，地下组织核心成员 ${playerMembers.length} 人。`);
  updateMemberUi();
  updateResourceUi();
  updateTopMeters();
  updateAwarenessUi();
  renderRecruitList(selectedRecruitGrade);
  renderMembersList();
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
  const personalityName = options.forcePersonality || options.personality || randomFrom(Object.keys(PERSONALITY_TEMPLATES));
  const template = PERSONALITY_TEMPLATES[personalityName];
  const faction = options.forceFaction || options.faction || randomFrom(FACTIONS);
  const trust = options.trustRange ? randomInt(...options.trustRange) : Number.isFinite(options.trust) ? clamp(options.trust, 0, 100) : generateTrustForFaction(faction);
  const abilities = {
    literature: randomInt(...template.literature),
    emergency: randomInt(...template.emergency),
    strength: randomInt(...template.strength),
    vision: randomInt(...template.vision),
  };

  return {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    name: options.name || generateStudentName(),
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
  if (nameData.fullNames?.length) return randomFrom(nameData.fullNames);
  const first = randomFrom(nameData.firstNames);
  const last = randomFrom(nameData.lastNames);
  const separator = nameData.separator ?? " ";
  return nameData.nameOrder === "last-first" ? `${last}${separator}${first}` : `${first}${separator}${last}`;
}

function generateTrustForFaction(faction) {
  if (faction === "管理层支持者") return randomInt(0, 20);
  return randomInt(0, 50);
}

function updateGameClock() {
  if (!document.body.classList.contains("game-active") || gameEnded) return;

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
  processSquadActions();
  updateTimeUi();
}

function advanceGameDay() {
  applyDailyStudentDrift();
  applyDailySquadStatusEffects();
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
  const playerGraduates = playerMembers.some((student) => isPlayerAvatar(student) && graduatingIds.has(student.id));

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
  if (playerGraduates) {
    endGame("draw", "任期结束", "玩家代表已从 12 年级毕业离校。学生自治尚未建立，管理层也未彻底瓦解，校园局势进入平局。");
  }
}

function endGame(result, title, body) {
  if (gameEnded) return;
  gameEnded = true;
  paused = true;
  document.body.classList.add("time-paused");
  pauseToggle.setAttribute("aria-label", "继续");
  pauseToggle.dataset.label = "继续";
  pauseIcon.src = "assets/icon/开始.png";
  updateSpeedUi();
  endingType.textContent = result === "draw" ? "平局" : result;
  endingTitle.textContent = title;
  endingBody.textContent = body;
  endingScreen.hidden = false;
  window.requestAnimationFrame(() => endingScreen.classList.add("open"));
  appendLog(`${endingType.textContent}：${title}。`);
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

function applyDailySquadStatusEffects() {
  actionSquads.forEach((squad) => {
    if (!squad.status) squad.status = "分散";
    if (squad.status === "潜伏") {
      squad.hiddenDays = Number(squad.hiddenDays || 0) + 1;
      if (squad.hiddenDays > 3) {
        managementAwareness = clamp(managementAwareness + 1, 0, 100);
        appendLog(`${squad.name} 连续潜伏过久，引起了管理层的轻微怀疑。`);
      }
    } else {
      squad.hiddenDays = 0;
    }
  });
  updateAwarenessUi();
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
    card.classList.toggle("acting", Boolean(squad.currentAction));
    card.dataset.squadId = squad.id;
    const flag = createSquadFlagNode(squad);
    const body = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = squad.name;
    const meta = document.createElement("p");
    const age = Math.max(0, gameTime.totalDay - squad.createdTotalDay);
    meta.textContent = `${squad.members.length} 人 / ${squad.createdLabel} 创建 / 已存在 ${age} 天`;
    const values = calculateSquadStats(squad.members.map((member) => member.studentId), squad);
    const meters = document.createElement("div");
    meters.className = "squad-card-meters";
    meters.append(createSquadMiniMeter("稳定度", values.stability, "stability"), createSquadMiniMeter("压力", values.pressure, "pressure"));
    const abilities = document.createElement("div");
    abilities.className = "squad-card-abilities";
    abilities.innerHTML = `<span>宣传 ${values.propaganda}</span><span>应急 ${values.emergency}</span><span>行动 ${values.mobility}</span><span>侦查 ${values.scouting}</span>`;
    body.append(title, meta, meters);
    if (squad.currentAction) {
      const progress = document.createElement("div");
      progress.className = "squad-action-progress";
      progress.innerHTML = `<span>${squad.currentAction.name}中</span><i><b style="width:${clamp(squad.currentAction.progress || 0, 0, 100)}%"></b></i>`;
      body.append(progress);
    }
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

function openUpdateLog() {
  navigateUpdateLogOverview();
}

function closeUpdateLog({ updateUrl = true } = {}) {
  updateLogState.open = false;
  updateLogState.view = "overview";
  updateLogState.date = null;
  updateLogState.logId = null;
  updateLogState.railScrollTop = 0;
  updateLogOverlay.classList.remove("open");
  window.setTimeout(() => {
    if (!updateLogState.open) updateLogOverlay.hidden = true;
  }, 220);
  if (updateUrl) history.replaceState({}, "", "/");
}

async function navigateUpdateLogOverview({ replace = false } = {}) {
  updateLogState.open = true;
  updateLogState.view = "overview";
  updateLogState.date = null;
  updateLogState.logId = null;
  setUpdateLogPath("/update-log", replace);
  await renderUpdateLog();
}

async function navigateUpdateLogDay(date, { replace = false } = {}) {
  const day = await loadUpdateLogDay(date);
  if (!day) {
    await navigateUpdateLogOverview({ replace: true });
    return;
  }
  updateLogState.open = true;
  updateLogState.view = "day";
  updateLogState.date = day.date;
  updateLogState.logId = null;
  setUpdateLogPath(`/update-log/${day.date}/`, replace);
  await renderUpdateLog();
}

async function navigateUpdateLogDetail(date, logId, { replace = false } = {}) {
  const log = await loadUpdateLogDetail(date, logId);
  if (!log) {
    await navigateUpdateLogDay(date, { replace: true });
    return;
  }
  updateLogState.open = true;
  updateLogState.view = "detail";
  updateLogState.date = date;
  updateLogState.logId = logId;
  setUpdateLogPath(`/update-log/${date}/${logId}/`, replace);
  await renderUpdateLog();
}

function setUpdateLogPath(path, replace = false) {
  if (window.location.pathname === path) return;
  const method = replace ? "replaceState" : "pushState";
  history[method]({}, "", path);
}

async function renderUpdateLog() {
  rememberUpdateLogRailScroll();
  updateLogOverlay.hidden = false;
  requestAnimationFrame(() => updateLogOverlay.classList.add("open"));
  updateLogContent.replaceChildren();
  renderUpdateLogLoading();
  try {
    if (updateLogState.view === "day") {
      await renderUpdateLogDay(updateLogState.date);
      return;
    }
    if (updateLogState.view === "detail") {
      await renderUpdateLogDetail(updateLogState.date, updateLogState.logId);
      return;
    }
    await renderUpdateLogOverview();
  } catch (error) {
    console.warn("Update log render failed:", error);
    renderUpdateLogError("更新日志加载失败，请稍后再试。");
  }
}

async function renderUpdateLogOverview() {
  const manifest = await loadUpdateLogManifest();
  await Promise.all((manifest.dates || []).map((day) => loadUpdateLogDay(day.date)));
  const layout = createUpdateLogLayout();
  const rocket = document.createElement("div");
  rocket.className = "rocket-node";
  const rocketImage = document.createElement("img");
  rocketImage.src = "assets/image/火箭发射.gif";
  rocketImage.alt = "更新日志启动";
  rocketImage.addEventListener("error", () => {
    rocketImage.replaceWith(createRocketFallback());
  });
  rocket.append(rocketImage);
  const timeline = createDateTimeline();
  timeline.classList.add("connected-start");
  layout.rail.append(rocket, timeline);

  const eyebrow = createTextElement("p", "update-panel-eyebrow", "UPDATE ARCHIVE");
  const title = createTextElement("h3", "update-panel-title", "版本档案");
  const copy = createTextElement("p", "update-panel-copy", "选择左侧日期查看当日更新。这里记录《剑拔弩张》的系统变化、功能追加和重要修复。");
  layout.main.append(eyebrow, title);
  appendUpdateLogFallbackNotice(layout.main);
  layout.main.append(copy);
  mountUpdateLogLayout(layout.root);
}

async function renderUpdateLogDay(date) {
  const day = await loadUpdateLogDay(date);
  if (!day) return;
  const layout = createUpdateLogLayout();
  layout.rail.append(createDateTimeline(date));

  const eyebrow = createTextElement("p", "update-panel-eyebrow", `${day.label} ${day.timezone}`);
  const title = createTextElement("h3", "update-panel-title", "当日更新节点");
  const copy = createTextElement("p", "update-panel-copy", "选择一个时间点查看详细更新说明。当天记录按时间从新到旧排列。");
  layout.main.append(eyebrow, title);
  appendUpdateLogFallbackNotice(layout.main);
  layout.main.append(copy, createLogTimeline(day));
  mountUpdateLogLayout(layout.root);
}

async function renderUpdateLogDetail(date, logId) {
  const day = await loadUpdateLogDay(date);
  const log = await loadUpdateLogDetail(date, logId);
  if (!day || !log) return;
  const layout = createUpdateLogLayout();
  layout.rail.append(createLogTimeline(day, logId));

  const eyebrow = createTextElement("p", "update-panel-eyebrow", `${day.label} ${log.time} ${day.timezone}`);
  const title = createTextElement("h3", "update-panel-title", log.title);
  layout.main.append(eyebrow, title);
  appendUpdateLogFallbackNotice(layout.main);
  layout.main.append(createUpdateLogDetails(log));
  mountUpdateLogLayout(layout.root);
}

function createUpdateLogLayout() {
  const root = document.createElement("div");
  root.className = "update-log-layout";
  const rail = document.createElement("aside");
  rail.className = "update-log-rail";
  const main = document.createElement("section");
  main.className = "update-log-main";
  root.append(rail, main);
  return { root, rail, main };
}

function rememberUpdateLogRailScroll() {
  const rail = updateLogContent.querySelector(".update-log-rail");
  if (rail) updateLogState.railScrollTop = rail.scrollTop;
}

function restoreUpdateLogRailScroll() {
  const rail = updateLogContent.querySelector(".update-log-rail");
  if (!rail) return;
  const maxScroll = Math.max(0, rail.scrollHeight - rail.clientHeight);
  rail.scrollTop = Math.min(updateLogState.railScrollTop, maxScroll);
}

function mountUpdateLogLayout(root) {
  updateLogContent.replaceChildren(root);
  requestAnimationFrame(restoreUpdateLogRailScroll);
}

function renderUpdateLogLoading() {
  const loading = document.createElement("div");
  loading.className = "update-log-message";
  loading.textContent = "正在读取更新日志...";
  updateLogContent.replaceChildren(loading);
}

function renderUpdateLogError(message) {
  const error = document.createElement("div");
  error.className = "update-log-message error";
  error.textContent = message;
  updateLogContent.replaceChildren(error);
}

function appendUpdateLogFallbackNotice(container) {
  if (!updateLogCache.failed) return;
  const notice = document.createElement("p");
  notice.className = "update-log-fallback";
  notice.textContent = updateLogCache.errorMessage || "更新日志加载失败，已显示本地备用记录。";
  container.append(notice);
}

async function refreshGlobalVersionFromLogs() {
  try {
    const manifest = await loadUpdateLogManifest();
    const latestDate = manifest.dates?.[0]?.date;
    if (!latestDate) return;
    const latestDay = await loadUpdateLogDay(latestDate);
    const latestLog = getSortedLogs(latestDay)[0];
    updateGlobalVersionBadge(extractVersionFromTitle(latestLog?.title));
  } catch (error) {
    console.warn("Failed to refresh global version:", error);
    updateGlobalVersionBadge();
  }
}

function updateGlobalVersionBadge(version = getFallbackLatestVersion()) {
  if (!globalVersionBadge) return;
  const safeVersion = version || getFallbackLatestVersion() || "V1.0.0";
  globalVersionBadge.textContent = safeVersion;
  globalVersionBadge.setAttribute("aria-label", `当前版本 ${safeVersion}`);
}

function getFallbackLatestVersion() {
  const latestLog = getSortedLogs(FALLBACK_UPDATE_LOG_DATES[0] || {})[0];
  return extractVersionFromTitle(latestLog?.title);
}

function extractVersionFromTitle(title = "") {
  return String(title).match(/V\d+(?:\.\d+){1,3}/i)?.[0]?.toUpperCase() || "";
}

function createDateTimeline(activeDate = "") {
  const timeline = document.createElement("div");
  timeline.className = "update-timeline";
  getUpdateLogDates().forEach((dateEntry, index) => {
    const day = getUpdateLogDay(dateEntry.date) || dateEntry;
    const updateCount = day.logs?.length ?? day.updateCount ?? 0;
    const row = document.createElement("button");
    row.type = "button";
    row.className = "timeline-row";
    row.classList.toggle("latest", index === 0);
    row.classList.toggle("active", dateEntry.date === activeDate);
    row.append(createTextElement("span", "timeline-date", day.label), createTimelineDot(), createTextElement("span", "timeline-count", `此日更新 ${updateCount} 次`));
    row.addEventListener("click", () => navigateUpdateLogDay(dateEntry.date));
    timeline.append(row);
  });
  return timeline;
}

function createLogTimeline(day, activeLogId = "") {
  const timeline = document.createElement("div");
  timeline.className = "update-timeline";
  getSortedLogs(day).forEach((log, index) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "timeline-row";
    row.classList.toggle("latest", index === 0);
    row.classList.toggle("active", log.id === activeLogId);
    row.append(createTextElement("span", "timeline-time", log.time), createTimelineDot(), createTextElement("span", "timeline-title", log.title));
    row.addEventListener("click", () => navigateUpdateLogDetail(day.date, log.id));
    timeline.append(row);
  });
  return timeline;
}

function createUpdateLogDetails(log) {
  if (Array.isArray(log.sections) && log.sections.length) {
    const sectionList = document.createElement("div");
    sectionList.className = "update-section-list";
    log.sections.forEach((section) => {
      const block = document.createElement("section");
      block.className = "update-section";
      block.append(createTextElement("h3", "", section.heading || section.title || "更新内容"));
      const list = document.createElement("ul");
      (section.items || []).forEach((item) => {
        list.append(createTextElement("li", "", item));
      });
      block.append(list);
      sectionList.append(block);
    });
    return sectionList;
  }
  const list = document.createElement("ul");
  list.className = "update-detail-list";
  (log.items || []).forEach((item) => {
    list.append(createTextElement("li", "", item));
  });
  return list;
}

function createTimelineDot() {
  const dot = document.createElement("span");
  dot.className = "timeline-dot";
  dot.setAttribute("aria-hidden", "true");
  return dot;
}

function createRocketFallback() {
  const fallback = document.createElement("span");
  fallback.className = "rocket-fallback";
  fallback.textContent = "🚀";
  fallback.setAttribute("aria-hidden", "true");
  return fallback;
}

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

async function loadUpdateLogManifest() {
  if (updateLogCache.manifest) return updateLogCache.manifest;
  try {
    const data = await fetchUpdateLogJson("update-log/manifest.json");
    const dates = Array.isArray(data.dates) ? data.dates.map(normalizeUpdateLogDateEntry) : [];
    updateLogCache.manifest = { dates };
    return updateLogCache.manifest;
  } catch (error) {
    console.warn("Failed to load update log manifest:", error);
    useFallbackUpdateLogs("更新日志加载失败，已显示本地备用记录。");
    return updateLogCache.manifest;
  }
}

async function loadUpdateLogDay(date) {
  if (updateLogCache.days.has(date)) return updateLogCache.days.get(date);
  if (!updateLogCache.manifest) await loadUpdateLogManifest();
  const dateEntry = getUpdateLogDates().find((day) => day.date === date);
  if (!dateEntry) return null;
  try {
    const data = await fetchUpdateLogJson(dateEntry.manifest || `update-log/${date}/manifest.json`);
    const day = normalizeUpdateLogDayManifest(data, dateEntry);
    updateLogCache.days.set(date, day);
    return day;
  } catch (error) {
    console.warn(`Failed to load update log day ${date}:`, error);
    const fallbackDay = getFallbackUpdateLogDay(date);
    if (fallbackDay) {
      useFallbackUpdateLogs("部分更新日志加载失败，已显示本地备用记录。", false);
      updateLogCache.days.set(date, cloneUpdateLogData(fallbackDay));
      return updateLogCache.days.get(date);
    }
    return null;
  }
}

async function loadUpdateLogDetail(date, logId) {
  const cacheKey = `${date}/${logId}`;
  if (updateLogCache.details.has(cacheKey)) return updateLogCache.details.get(cacheKey);
  const day = await loadUpdateLogDay(date);
  const logMeta = day?.logs.find((log) => log.id === logId);
  if (!logMeta) return null;
  try {
    const data = await fetchUpdateLogJson(logMeta.data || `update-log/${date}/${logId}/log.json`);
    const detail = normalizeUpdateLogDetail(data, day, logMeta);
    updateLogCache.details.set(cacheKey, detail);
    return detail;
  } catch (error) {
    console.warn(`Failed to load update log detail ${cacheKey}:`, error);
    const fallbackLog = getFallbackUpdateLogEntry(date, logId);
    if (fallbackLog) {
      useFallbackUpdateLogs("部分更新日志加载失败，已显示本地备用记录。", false);
      updateLogCache.details.set(cacheKey, cloneUpdateLogData(fallbackLog));
      return updateLogCache.details.get(cacheKey);
    }
    return null;
  }
}

async function fetchUpdateLogJson(path) {
  const response = await fetch(toRootAssetPath(path), { cache: "no-cache" });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.json();
}

function toRootAssetPath(path) {
  return `/${String(path).replace(/^\/+/, "")}`;
}

function normalizeUpdateLogDateEntry(entry) {
  return {
    date: entry.date,
    label: entry.label || entry.date,
    timezone: entry.timezone || "UTC+9",
    manifest: entry.manifest || `update-log/${entry.date}/manifest.json`,
  };
}

function normalizeUpdateLogDayManifest(data, dateEntry = {}) {
  const date = data.date || dateEntry.date;
  return {
    date,
    label: data.label || dateEntry.label || date,
    timezone: data.timezone || dateEntry.timezone || "UTC+9",
    logs: getSortedLogs({
      logs: (Array.isArray(data.logs) ? data.logs : []).map((log) => ({
        date,
        id: log.id,
        time: log.time,
        datetime: log.datetime,
        layer: Number(log.layer) || 0,
        title: log.title || "更新内容",
        data: log.data || `update-log/${date}/${log.id}/log.json`,
      })),
    }),
  };
}

function normalizeUpdateLogDetail(data, day, logMeta) {
  return {
    id: data.id || logMeta.id,
    date: data.date || day.date,
    time: data.time || logMeta.time,
    datetime: data.datetime || logMeta.datetime,
    layer: Number(data.layer ?? logMeta.layer) || 0,
    title: data.title || logMeta.title || "更新内容",
    sections: Array.isArray(data.sections) ? data.sections : undefined,
    items: Array.isArray(data.items) ? data.items : [],
  };
}

function useFallbackUpdateLogs(message, replaceManifest = true) {
  updateLogCache.failed = true;
  updateLogCache.errorMessage = message;
  if (replaceManifest || !updateLogCache.manifest) {
    const dates = FALLBACK_UPDATE_LOG_DATES.map((day) => ({
      date: day.date,
      label: day.label,
      timezone: day.timezone,
      manifest: `update-log/${day.date}/manifest.json`,
    }));
    updateLogCache.manifest = { dates };
    FALLBACK_UPDATE_LOG_DATES.forEach((day) => {
      updateLogCache.days.set(day.date, cloneUpdateLogData(day));
      day.logs.forEach((log) => updateLogCache.details.set(`${day.date}/${log.id}`, cloneUpdateLogData(log)));
    });
  }
}

function cloneUpdateLogData(data) {
  return JSON.parse(JSON.stringify(data));
}

function getUpdateLogDates() {
  return updateLogCache.manifest?.dates || FALLBACK_UPDATE_LOG_DATES;
}

function getUpdateLogDay(date) {
  return updateLogCache.days.get(date) || getFallbackUpdateLogDay(date);
}

function getFallbackUpdateLogDay(date) {
  return FALLBACK_UPDATE_LOG_DATES.find((day) => day.date === date) || null;
}

function getFallbackUpdateLogEntry(date, logId) {
  const day = getFallbackUpdateLogDay(date);
  return day?.logs.find((log) => log.id === logId) || null;
}

function getSortedLogs(day) {
  return [...(day.logs || [])].sort((a, b) => {
    if (a.datetime && b.datetime) return new Date(b.datetime) - new Date(a.datetime);
    return (Number(b.layer) || 0) - (Number(a.layer) || 0);
  });
}

async function syncUpdateLogFromPath() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  if (parts[0] !== "update-log") {
    closeUpdateLog({ updateUrl: false });
    return;
  }
  if (parts[1] && parts[2]) {
    await navigateUpdateLogDetail(parts[1], parts[2], { replace: true });
    return;
  }
  if (parts[1]) {
    await navigateUpdateLogDay(parts[1], { replace: true });
    return;
  }
  await navigateUpdateLogOverview({ replace: true });
}

function handleUpdateLogEsc() {
  if (!updateLogState.open) return false;
  if (updateLogState.view === "detail") {
    navigateUpdateLogDay(updateLogState.date);
    return true;
  }
  if (updateLogState.view === "day") {
    navigateUpdateLogOverview();
    return true;
  }
  closeUpdateLog();
  return true;
}

function handleEscapeKey() {
  if (handleUpdateLogEsc()) return true;
  if (choosingActionTarget) {
    exitActionTargetSelection();
    return true;
  }
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
  if (!squadStatusMenu.hidden) {
    squadStatusMenu.hidden = true;
    return true;
  }
  if (!actionConfirmModal.hidden) {
    closeActionConfirmModal();
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
  if (!squadMemberPanel.hidden) {
    squadMemberPanel.hidden = true;
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
  squadMemberPanel.hidden = true;
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
    const emoji = document.createElement("span");
    emoji.className = "squad-flag-emoji";
    emoji.textContent = squad.flagValue;
    target.append(emoji);
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

function calculateSquadStats(memberIds, squad = null) {
  const members = memberIds.map((id) => allStudents.find((student) => student.id === id)).filter(Boolean);
  const average = (getter) => (members.length ? Math.round(members.reduce((sum, student) => sum + getter(student), 0) / members.length) : 0);
  const abilityMultiplier = squad?.status === "潜伏" ? 0.6 : 1;
  const abilityAverage = (getter) => Math.round(average(getter) * abilityMultiplier);
  return {
    count: members.length,
    pressure: average((student) => student.stress),
    stability: average((student) => student.trust),
    propaganda: abilityAverage((student) => getEffectiveAbilities(student).literature),
    emergency: abilityAverage((student) => getEffectiveAbilities(student).emergency),
    mobility: abilityAverage((student) => getEffectiveAbilities(student).strength),
    scouting: abilityAverage((student) => getEffectiveAbilities(student).vision),
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
    hiddenDays: 0,
    moving: false,
    movement: null,
  };
  closeSquadCreateModal();
  enterHeadquartersSelection();
}

function startSquadRelocationFromDraft() {
  if (!draftSquad || draftSquad.mode !== "edit") return;
  startSquadRelocation(draftSquad.editingSquadId);
}

function startSquadRelocation(squadId) {
  const squad = actionSquads.find((candidate) => candidate.id === squadId);
  if (!squad) return;
  playSound(createSound, 0.5);
  pendingHeadquartersSquad = {
    ...squad,
    mode: "relocate",
  };
  if (!squadCreateModal.hidden) closeSquadCreateModal();
  closeSquadInfoPanel();
  enterHeadquartersSelection("迁移行动小队总部");
}

function startSquadMovementToHeadquarters(squad, nextHeadquarters) {
  const from = getSquadMapPoint(squad) || squad.headquarters || nextHeadquarters;
  squad.moving = true;
  squad.movement = {
    purpose: "relocate",
    x: Math.round(from.x),
    y: Math.round(from.y),
    targetX: nextHeadquarters.x,
    targetY: nextHeadquarters.y,
    targetRegion: nextHeadquarters.region,
  };
  syncSquadMemberLocations(squad);
}

function clearSquadMovement(squad) {
  squad.moving = false;
  squad.movement = null;
}

function updateSquadMovements(elapsedSeconds) {
  if (paused || elapsedSeconds <= 0) return "none";
  let renderMode = "none";
  actionSquads.forEach((squad) => {
    if (!squad.moving || !squad.movement) return;
    const movement = squad.movement;
    const dx = movement.targetX - movement.x;
    const dy = movement.targetY - movement.y;
    const distance = Math.hypot(dx, dy);
    if (distance < 2) {
      if (movement.purpose === "action" && squad.currentAction) {
        const region = regions.find((candidate) => candidate.name === movement.targetRegion);
        squad.fieldPosition = {
          region: movement.targetRegion,
          x: Math.round(movement.targetX),
          y: Math.round(movement.targetY),
        };
        clearSquadMovement(squad);
        syncSquadMemberLocations(squad);
        if (region) startRegionAction(squad, region, squad.currentAction.name, squad.currentAction.commandAt);
        renderMode = "full";
        return;
      }
      squad.headquarters = {
        region: movement.targetRegion,
        x: movement.targetX,
        y: movement.targetY,
      };
      squad.fieldPosition = { ...squad.headquarters };
      clearSquadMovement(squad);
      syncSquadMemberLocations(squad);
      appendLog(`${squad.name} 已抵达新的总部：${squad.headquarters.region}。`);
      if (selectedSquadInfoId === squad.id) showSquadInfoPanel(squad.id);
      refreshRegionPanel();
      renderMode = "full";
      return;
    }
    const speed = 36 * (0.85 + Math.min(timeSpeed, 5) * 0.16);
    const step = Math.min(distance, speed * elapsedSeconds);
    movement.x += (dx / distance) * step;
    movement.y += (dy / distance) * step;
    if (renderMode !== "full") renderMode = "position";
  });
  return renderMode;
}

function processSquadActions() {
  const now = getAbsoluteGameMs();
  let changed = false;
  let progressed = false;
  actionSquads.forEach((squad) => {
    const action = squad.currentAction;
    if (!action || action.phase !== "running") return;
    const definition = REGION_ACTIONS[action.name];
    action.progress = clamp(((now - action.commandAt) / definition.durationMs) * 100, 0, 100);
    progressed = true;
    if (now < action.endAt) return;
    completeRegionAction(squad, action);
    squad.currentAction = null;
    changed = true;
  });
  if (!changed && !progressed) return;
  renderSquadMapMarkers();
  if (!squadPanel.hidden) renderSquadPanel();
  refreshRegionPanel();
  if (selectedSquadInfoId) showSquadInfoPanel(selectedSquadInfoId);
}

function renderSquadStatusMenu(squadId) {
  const squad = actionSquads.find((candidate) => candidate.id === squadId);
  if (!squad) return;
  if (squad.currentAction || squad.moving) {
    squadStatusMenu.hidden = true;
    return;
  }
  const currentStatus = squad.status || "分散";
  squadStatusMenu.replaceChildren();
  SQUAD_STATUSES.forEach((status) => {
    const button = document.createElement("button");
    button.type = "button";
    button.disabled = status === currentStatus;
    button.textContent = status === currentStatus ? `${status}（当前）` : status;
    button.addEventListener("click", () => requestSquadStatusChange(squad.id, status));
    squadStatusMenu.append(button);
  });
}

function requestSquadStatusChange(squadId, status) {
  const squad = actionSquads.find((candidate) => candidate.id === squadId);
  if (!squad || squad.status === status || squad.currentAction || squad.moving) return;
  squadStatusMenu.hidden = true;
  openConfirmModal(
    `你确定要将「${squad.name}」的状态设置为「${status}」吗？<br><span class="confirm-note">${SQUAD_STATUS_DESCRIPTIONS[status]}</span>`,
    () => setSquadStatus(squad.id, status),
  );
}

function setSquadStatus(squadId, status) {
  const squad = actionSquads.find((candidate) => candidate.id === squadId);
  if (!squad || !SQUAD_STATUSES.includes(status) || squad.currentAction || squad.moving) return;
  squad.status = status;
  if (status !== "潜伏") squad.hiddenDays = 0;
  if (status === "分散") squad.fieldPosition = null;
  appendLog(`${squad.name} 的状态切换为${status}。`);
  syncSquadMemberLocations(squad);
  updateStudentSchedules(true);
  renderSquadMapMarkers();
  renderSquadPanel();
  refreshRegionPanel();
  if (!squadMemberPanel.hidden && selectedSquadInfoId === squad.id) renderSquadInfoMembers(squad.id);
  if (selectedSquadInfoId === squad.id) showSquadInfoPanel(squad.id);
}

function getAbsoluteGameMs() {
  return (gameTime.totalDay - 1) * REAL_MS_PER_GAME_DAY + gameTime.dayProgressMs;
}

function getRegionCooldown(region, actionName) {
  return Number(region.actionCooldowns?.[actionName] || 0);
}

function isRegionActionCoolingDown(region, actionName) {
  return getAbsoluteGameMs() < getRegionCooldown(region, actionName);
}

function getActionReadySquads() {
  return actionSquads.filter((squad) => ["集合", "潜伏"].includes(squad.status) && !squad.currentAction && !squad.moving);
}

function canRegionActionRun(region, actionName) {
  if (!region) return { ok: false, reason: "未选择区域" };
  if (region.name === "校长办公室" && actionName !== "侦查") return { ok: false, reason: "校长办公室仅可侦查" };
  if (isRegionActionCoolingDown(region, actionName)) return { ok: false, reason: "冷却中" };
  if (getActionReadySquads().length === 0) return { ok: false, reason: "没有可用小队" };
  if (actionName === "招募" && getStudentsInRegion(region.name).filter((student) => !isPlayerMember(student.id)).length === 0) {
    return { ok: false, reason: "区域内没有可招募学生" };
  }
  if (actionName === "侦查" && !getActionReadySquads().some((squad) => calculateSquadStats(squad.members.map((member) => member.studentId), squad).scouting >= REGION_ACTIONS.侦查.minScouting)) {
    return { ok: false, reason: "侦查不足" };
  }
  return { ok: true, reason: "" };
}

function renderRegionActionList(region) {
  regionActionList.replaceChildren();
  Object.keys(REGION_ACTIONS).forEach((actionName) => {
    const availability = canRegionActionRun(region, actionName);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "region-action-button";
    button.disabled = !availability.ok;
    button.textContent = actionName;
    button.title = availability.ok ? `在${region.name}执行${actionName}` : availability.reason;
    button.addEventListener("click", () => openActionConfirm(region, actionName));
    regionActionList.append(button);
  });
}

function openActionConfirm(region, actionName) {
  const availability = canRegionActionRun(region, actionName);
  if (!availability.ok) return;
  actionConfirmTitle.textContent = actionName;
  actionConfirmBody.textContent = `你确定要在「${region.name}」执行「${actionName}」吗？`;
  actionSquadList.replaceChildren();
  getSquadsForActionList(region, actionName).forEach(({ squad, disabled, label }) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "action-squad-row";
    row.classList.toggle("disabled", disabled);
    row.disabled = disabled;
    const flag = createSquadFlagNode(squad);
    const name = document.createElement("strong");
    name.textContent = squad.name;
    const status = document.createElement("span");
    status.textContent = label;
    const location = document.createElement("em");
    location.textContent = getSquadRegionName(squad);
    row.append(flag, name, status, location);
    row.addEventListener("click", () => commandRegionAction(region, actionName, squad.id));
    actionSquadList.append(row);
  });
  actionConfirmModal.hidden = false;
  requestAnimationFrame(() => actionConfirmModal.classList.add("open"));
}

function closeActionConfirmModal() {
  actionConfirmModal.classList.remove("open");
  window.setTimeout(() => {
    if (!actionConfirmModal.classList.contains("open")) actionConfirmModal.hidden = true;
  }, 160);
}

function getSquadsForActionList(region, actionName) {
  return [...actionSquads]
    .map((squad) => {
      const values = calculateSquadStats(squad.members.map((member) => member.studentId), squad);
      const busy = Boolean(squad.currentAction || squad.moving);
      const wrongStatus = !["集合", "潜伏"].includes(squad.status);
      const weakScouting = actionName === "侦查" && values.scouting < REGION_ACTIONS.侦查.minScouting;
      const disabled = busy || wrongStatus || weakScouting;
      const sameRegion = getSquadRegionName(squad) === region.name;
      const actionLabel = squad.currentAction ? `${squad.currentAction.name}中` : squad.moving ? "移动中" : squad.status;
      const label = `${actionLabel}${weakScouting ? " / 侦查不足" : ""}`;
      return { squad, disabled, sameRegion, label };
    })
    .sort((a, b) => {
      if (a.disabled !== b.disabled) return a.disabled ? 1 : -1;
      if (a.sameRegion !== b.sameRegion) return a.sameRegion ? -1 : 1;
      return a.squad.name.localeCompare(b.squad.name);
    });
}

function commandRegionAction(region, actionName, squadId) {
  const squad = actionSquads.find((candidate) => candidate.id === squadId);
  if (!squad || squad.currentAction || squad.moving) return;
  closeActionConfirmModal();
  const commandAt = getAbsoluteGameMs();
  setRegionActionCooldown(region, actionName, commandAt);
  if (getSquadRegionName(squad) === region.name) {
    startRegionAction(squad, region, actionName, commandAt);
    return;
  }
  pendingRegionAction = { squadId, regionName: region.name, actionName, commandAt };
  enterActionTargetSelection(region, actionName, squad);
}

function enterActionTargetSelection(region, actionName, squad) {
  choosingActionTarget = true;
  actionConfirmModal.hidden = true;
  regionMemberPanel.hidden = true;
  squadMemberPanel.hidden = true;
  headquartersSelectOverlay.hidden = false;
  headquartersSelectOverlay.querySelector("strong").textContent = "选择行动目标";
  headquartersHintText.textContent = `移动地图，让准星中心落在${region.name}内。按 Enter 后，${squad.name} 将前往目标点并开始${actionName}。`;
  document.body.classList.add("choosing-headquarters");
  setMapScaleAtViewportCenter(Math.max(scale, 1.45));
  mapViewport.focus({ preventScroll: true });
}

function exitActionTargetSelection() {
  choosingActionTarget = false;
  pendingRegionAction = null;
  headquartersSelectOverlay.hidden = true;
  document.body.classList.remove("choosing-headquarters");
}

function completeActionTargetSelection() {
  if (!choosingActionTarget || !pendingRegionAction) return;
  const rect = mapViewport.getBoundingClientRect();
  const point = viewportToMapPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
  const region = getRegionAtMapPoint(point.x, point.y);
  if (!region || region.name !== pendingRegionAction.regionName) {
    showHeadquartersError(`准星中心必须落在${pendingRegionAction.regionName}内。`);
    return;
  }
  const squad = actionSquads.find((candidate) => candidate.id === pendingRegionAction.squadId);
  if (!squad) {
    exitActionTargetSelection();
    return;
  }
  startSquadActionMovement(squad, region, pendingRegionAction.actionName, point, pendingRegionAction.commandAt);
  appendLog(`${squad.name} 正在前往${region.name}，准备执行${pendingRegionAction.actionName}。`);
  exitActionTargetSelection();
  renderSquadMapMarkers();
  if (selectedSquadInfoId === squad.id) showSquadInfoPanel(squad.id);
}

function startSquadActionMovement(squad, region, actionName, point, commandAt) {
  const from = getSquadMapPoint(squad) || squad.headquarters || point;
  squad.currentAction = { name: actionName, regionName: region.name, commandAt, phase: "moving", progress: 0 };
  squad.moving = true;
  squad.movement = {
    purpose: "action",
    x: Math.round(from.x),
    y: Math.round(from.y),
    targetX: Math.round(point.x),
    targetY: Math.round(point.y),
    targetRegion: region.name,
  };
}

function startRegionAction(squad, region, actionName, commandAt = getAbsoluteGameMs()) {
  const definition = REGION_ACTIONS[actionName];
  const now = getAbsoluteGameMs();
  setRegionActionCooldown(region, actionName, commandAt);
  squad.currentAction = {
    name: actionName,
    regionName: region.name,
    commandAt,
    startAt: now,
    endAt: commandAt + definition.durationMs,
    phase: "running",
    progress: clamp(((now - commandAt) / definition.durationMs) * 100, 0, 100),
  };
  if (actionName === "集会") {
    getStudentsInRegion(region.name).forEach((student) => {
      student.trust = clamp(student.trust + 10, 0, 100);
    });
  }
  appendLog(`${squad.name}在${region.name}进行${actionName}。`);
  renderSquadMapMarkers();
  renderSquadPanel();
  refreshRegionPanel();
  if (selectedSquadInfoId === squad.id) showSquadInfoPanel(squad.id);
}

function setRegionActionCooldown(region, actionName, commandAt) {
  const definition = REGION_ACTIONS[actionName];
  if (!region.actionCooldowns) region.actionCooldowns = {};
  region.actionCooldowns[actionName] = commandAt + definition.cooldownMs;
}

function completeRegionAction(squad, action) {
  const region = regions.find((candidate) => candidate.name === action.regionName);
  if (!region) return;
  if (action.name === "宣传") completePropagandaAction(squad, region);
  if (action.name === "招募") completeRecruitAction(squad, region);
  if (action.name === "侦查") completeScoutAction(squad, region);
  if (action.name === "集会") completeRallyAction(squad, region);
  if (action.name === "休息") completeRestAction(squad, region);
  updateTopMeters();
  updateAwarenessUi();
}

function completePropagandaAction(squad, region) {
  const students = getStudentsInRegion(region.name).filter((student) => !isStudentMissing(student));
  const affected = pickRandomSubset(students, randomInt(30, 50) / 100);
  affected.forEach((student) => {
    student.trust = clamp(student.trust + randomInt(5, 10), 0, 100);
  });
  factionFame = clamp(factionFame + 5, 0, 100);
  const supporters = students.filter((student) => student.faction === "管理层支持者").length;
  const awarenessGain = supporters > 0 ? 10 + supporters * 2 : 0;
  managementAwareness = clamp(managementAwareness + awarenessGain, 0, 100);
  appendLog(`${squad.name}在${region.name}完成宣传。组织知名度 +5%，部分学生信任度上升。${awarenessGain ? `管理层支持者注意到了异常，察觉 +${awarenessGain}%。` : ""}`);
}

function completeRecruitAction(squad, region) {
  const candidates = getStudentsInRegion(region.name).filter((student) => !isPlayerMember(student.id) && getInviteChance(student) > 0);
  appendLog(`${squad.name}在${region.name}完成招募摸排，发现 ${candidates.length} 名可尝试邀请的学生。`);
}

function completeScoutAction(squad, region) {
  const supporters = getStudentsInRegion(region.name).filter((student) => student.faction === "管理层支持者").length;
  region.patrolKnown = true;
  appendLog(`${squad.name}完成了对${region.name}的侦查。巡逻等级：${region.patrol}。管理层支持者：${supporters}人。`);
}

function completeRallyAction(squad, region) {
  const values = calculateSquadStats(squad.members.map((member) => member.studentId), squad);
  const fameGain = Math.round(2 + values.propaganda / 20);
  const awarenessGain = Math.round(5 + fameGain / 2);
  factionFame = clamp(factionFame + fameGain, 0, 100);
  managementAwareness = clamp(managementAwareness + awarenessGain, 0, 100);
  appendLog(`${squad.name}在${region.name}组织了一场集会。组织知名度 +${fameGain}%，区域学生信任度上升，管理层察觉 +${awarenessGain}%。`);
}

function completeRestAction(squad, region) {
  squad.members.forEach((entry) => {
    const student = allStudents.find((candidate) => candidate.id === entry.studentId);
    if (student) student.stress = clamp(student.stress - 5, 0, 100);
  });
  appendLog(`${squad.name}在${region.name}休息了一天。队员压力下降。`);
}

function pickRandomSubset(items, ratio) {
  const count = Math.max(0, Math.round(items.length * ratio));
  return [...items].sort(() => Math.random() - 0.5).slice(0, count);
}

function getSquadRegionName(squad) {
  if (squad.moving && squad.movement) return squad.movement.targetRegion;
  if (squad.currentAction?.regionName) return squad.currentAction.regionName;
  if (squad.fieldPosition?.region) return squad.fieldPosition.region;
  return squad.headquarters?.region || "--";
}

function syncSquadMemberLocations(squad) {
  if (!squad || (squad.status || "分散") === "分散" || squad.status === "潜伏") return;
  const regionName = squad.fieldPosition?.region || squad.headquarters?.region;
  if (!regionName) return;
  squad.members.forEach((entry) => {
    const student = allStudents.find((candidate) => candidate.id === entry.studentId);
    if (student && !isStudentMissing(student)) student.location = regionName;
  });
}

function finalizePendingSquad(region, point) {
  if (!pendingHeadquartersSquad) return;
  playSound(createSound, 0.62);
  if (pendingHeadquartersSquad.mode === "relocate") {
    const squad = actionSquads.find((candidate) => candidate.id === pendingHeadquartersSquad.id);
    if (!squad) return;
    const nextHeadquarters = {
      region: region.name,
      x: Math.round(point.x),
      y: Math.round(point.y),
    };
    if ((squad.status || "分散") === "分散") {
      squad.headquarters = nextHeadquarters;
      squad.fieldPosition = null;
      clearSquadMovement(squad);
      appendLog(`${squad.name} 的总部已迁移至${region.name}。`);
    } else {
      startSquadMovementToHeadquarters(squad, nextHeadquarters);
      appendLog(`${squad.name} 开始向${region.name}缓慢迁移。`);
    }
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
  syncSquadMemberLocations(squad);
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
  return Boolean(squad && squad.status !== "分散");
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
  const squadMovementRenderMode = updateSquadMovements(elapsedSeconds);
  if (squadMovementRenderMode === "full") {
    renderSquadMapMarkers();
  } else if (squadMovementRenderMode === "position") {
    updateSquadMarkerPositions();
  }
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
    marker.className = `squad-map-marker ${getSquadMarkerClass(squad)}`;
    marker.classList.toggle("moving", Boolean(squad.moving));
    marker.classList.toggle("acting", Boolean(squad.currentAction));
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
      mapViewport.focus({ preventScroll: true });
    });
    squadMarkerLayer.append(marker);
  });
}

function updateSquadMarkerPositions() {
  if (squadMarkerLayer.hidden) return;
  actionSquads.forEach((squad) => {
    const marker = squadMarkerLayer.querySelector(`.squad-map-marker[data-squad-id="${CSS.escape(squad.id)}"]`);
    const point = getSquadMapPoint(squad);
    if (!marker || !point) return;
    marker.style.left = `${point.x}px`;
    marker.style.top = `${point.y}px`;
    marker.style.setProperty("--marker-scale", String(1 / Math.max(scale, 1)));
  });
}

function getSquadMapPoint(squad) {
  if (squad.moving && squad.movement) return { x: squad.movement.x, y: squad.movement.y, region: squad.movement.targetRegion };
  if (squad.fieldPosition) return squad.fieldPosition;
  if (squad.status === "已集合" && squad.assemblyPoint) return squad.assemblyPoint;
  return squad.headquarters;
}

function getSquadMarkerClass(squad) {
  if (squad.status === "集合") return "status-assembled";
  if (squad.status === "潜伏") return "status-hidden";
  return "status-dispersed";
}

function showSquadInfoPanel(squadId) {
  const squad = actionSquads.find((candidate) => candidate.id === squadId);
  if (!squad) return;
  selectedSquadInfoId = squadId;
  clearHover();
  clearRegionSelection();
  const values = calculateSquadStats(squad.members.map((member) => member.studentId), squad);
  appendSquadFlagVisual(squadInfoFlag, squad);
  squadInfoName.textContent = squad.name;
  squadInfoStatus.textContent = `状态：${squad.currentAction ? `${squad.currentAction.name}中` : squad.status || "分散"}${squad.moving ? " / 移动中" : ""}`;
  squadInfoStatus.disabled = Boolean(squad.currentAction || squad.moving);
  squadInfoStatus.title = squad.currentAction ? "行动进行中，无法切换队伍状态" : squad.moving ? "移动中，无法切换队伍状态" : "切换队伍状态";
  squadInfoCount.textContent = `${squad.members.length} 人`;
  squadInfoHeadquarters.textContent = squad.headquarters?.region || "--";
  squadInfoStability.textContent = `${values.stability}%`;
  squadInfoPressure.textContent = `${values.pressure}%`;
  if (!squadMemberPanel.hidden) renderSquadInfoMembers(squad.id);
  squadInfoPanel.hidden = false;
}

function renderSquadInfoMembers(squadId) {
  const squad = actionSquads.find((candidate) => candidate.id === squadId);
  squadInfoMembers.replaceChildren();
  squadMemberPanelTitle.textContent = squad ? `${squad.name} 成员` : "小队成员";
  if (!squad || squad.members.length === 0) {
    const empty = document.createElement("p");
    empty.className = "draft-empty";
    empty.textContent = "暂无成员。";
    squadInfoMembers.append(empty);
    return;
  }
  squad.members.forEach((entry) => {
    const student = allStudents.find((candidate) => candidate.id === entry.studentId);
    if (!student) return;
    const row = document.createElement("button");
    row.type = "button";
    row.className = "squad-info-member-row";
    row.classList.toggle("missing", isStudentMissing(student));
    const name = document.createElement("strong");
    name.textContent = `${student.name}${isStudentMissing(student) ? " / 失踪" : ""}`;
    const meta = document.createElement("span");
    meta.textContent = `${student.grade}年级 / ${entry.role}`;
    row.append(name, meta);
    row.addEventListener("click", () => showStudentDetail(student.id, "squad"));
    squadInfoMembers.append(row);
  });
}

function closeSquadInfoPanel() {
  squadInfoPanel.hidden = true;
  selectedSquadInfoId = null;
  squadMemberPanel.hidden = true;
  squadStatusMenu.hidden = true;
}

function updateOrganizationMemberMarker(student, elapsedSeconds) {
  if (!student.location || isStudentMissing(student)) return;
  const hiddenSquad = getStudentHiddenSquad(student);
  if (hiddenSquad) {
    updateHiddenSquadMemberMarker(student, hiddenSquad, elapsedSeconds);
    return;
  }
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
  marker.node.classList.remove("hidden-squad");
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

function updateHiddenSquadMemberMarker(student, squad, elapsedSeconds) {
  const squadPoint = getSquadMapPoint(squad);
  if (!squadPoint) return;
  let marker = memberMarkerState.get(student.id);
  if (!marker) {
    const point = getPointNearSquadMarker(squadPoint);
    const node = document.createElement("span");
    node.className = "member-map-marker";
    memberMarkerLayer.append(node);
    marker = { node, x: point.x, y: point.y, targetX: point.x, targetY: point.y, regionName: `潜伏-${squad.id}` };
    memberMarkerState.set(student.id, marker);
  }
  marker.node.classList.add("hidden-squad");
  if (marker.regionName !== `潜伏-${squad.id}` || Math.hypot(marker.x - squadPoint.x, marker.y - squadPoint.y) > 82) {
    const point = getPointNearSquadMarker(squadPoint);
    Object.assign(marker, { x: point.x, y: point.y, targetX: point.x, targetY: point.y, regionName: `潜伏-${squad.id}` });
  }
  if (Math.hypot(marker.targetX - marker.x, marker.targetY - marker.y) < 3) {
    const target = getPointNearSquadMarker(squadPoint);
    marker.targetX = target.x;
    marker.targetY = target.y;
  }
  if (!paused && elapsedSeconds > 0) {
    const dx = marker.targetX - marker.x;
    const dy = marker.targetY - marker.y;
    const distance = Math.hypot(dx, dy);
    const speed = 4.5 * (0.9 + Math.min(timeSpeed, 5) * 0.05);
    const step = Math.min(distance, speed * elapsedSeconds);
    if (distance > 0) {
      marker.x += (dx / distance) * step;
      marker.y += (dy / distance) * step;
    }
  }
  marker.node.style.left = `${marker.x}px`;
  marker.node.style.top = `${marker.y}px`;
}

function getPointNearSquadMarker(point) {
  const angle = Math.random() * Math.PI * 2;
  const distance = randomInt(10, 42);
  return {
    x: clamp(point.x + Math.cos(angle) * distance, 0, campusMap.naturalWidth),
    y: clamp(point.y + Math.sin(angle) * distance, 0, campusMap.naturalHeight),
  };
}

function getStudentHiddenSquad(student) {
  if (!student.squadId) return null;
  const squad = actionSquads.find((candidate) => candidate.id === student.squadId);
  return squad?.status === "潜伏" ? squad : null;
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
  if (choosingSquadHeadquarters || choosingActionTarget) return true;
  if (event.target?.closest?.(".squad-map-marker")) return true;
  if (event.target?.closest?.(".time-chip, #pauseToggle, #speedControl, #zoomValue")) return true;
  const tagName = event.target?.tagName?.toLowerCase();
  return !["input", "textarea", "select", "button"].includes(tagName);
}

function focusMapAfterUiAction() {
  if (!document.body.classList.contains("game-active")) return;
  window.requestAnimationFrame(() => {
    mapViewport.focus({ preventScroll: true });
  });
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
  regionActionList.hidden = true;
  regionActionsToggle.classList.remove("expanded");
  regionActionsToggle.setAttribute("aria-expanded", "false");
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
  regionPatrol.textContent = region.patrolKnown === false ? "???" : region.patrol;
  regionMembersButton.textContent = `${organizationStudents.length} 人`;
  regionMembersButton.disabled = organizationStudents.length === 0;
  regionStudentCount.textContent = `${regionStudents.length} 人`;
  if (!regionMemberPanel.hidden) renderRegionMemberList(region);
  if (!regionActionList.hidden) renderRegionActionList(region);
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
