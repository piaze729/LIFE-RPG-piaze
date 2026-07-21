const activityTypes = [
  { id: "steps", category: "걷기/이동", label: "걷기", unit: "보", pointsPerUnit: 0.02, kcalPerUnit: 0.035 },
  { id: "running_km", category: "유산소", label: "러닝", unit: "km", pointsPerUnit: 70, kcalPerUnit: 70 },
  { id: "cycling_km", category: "유산소", label: "자전거", unit: "km", pointsPerUnit: 25, kcalPerUnit: 25 },
  { id: "jump_rope_minutes", category: "유산소", label: "줄넘기", unit: "분", pointsPerUnit: 8, kcalPerUnit: 12 },
  { id: "swimming_minutes", category: "유산소", label: "수영", unit: "분", pointsPerUnit: 9, kcalPerUnit: 10 },
  { id: "hiking_minutes", category: "유산소", label: "등산", unit: "분", pointsPerUnit: 7, kcalPerUnit: 8 },
  { id: "stretching_minutes", category: "회복", label: "스트레칭", unit: "분", pointsPerUnit: 3, kcalPerUnit: 2.5 },
  { id: "yoga_minutes", category: "회복", label: "요가", unit: "분", pointsPerUnit: 4, kcalPerUnit: 3 },
  { id: "squat_count", category: "근력", label: "스쿼트", unit: "개", pointsPerUnit: 0.8, kcalPerUnit: 0.5 },
  { id: "pushup_count", category: "근력", label: "팔굽혀펴기", unit: "개", pointsPerUnit: 1.2, kcalPerUnit: 0.8 },
  { id: "pullup_count", category: "근력", label: "턱걸이", unit: "개", pointsPerUnit: 3, kcalPerUnit: 1 },
  { id: "lunge_count", category: "근력", label: "런지", unit: "개", pointsPerUnit: 0.9, kcalPerUnit: 0.6 },
  { id: "situp_count", category: "근력", label: "윗몸일으키기", unit: "개", pointsPerUnit: 0.9, kcalPerUnit: 0.5 },
  { id: "burpee_count", category: "근력", label: "버피", unit: "개", pointsPerUnit: 2.5, kcalPerUnit: 1.5 },
  { id: "mountain_climber_count", category: "근력", label: "마운틴 클라이머", unit: "개", pointsPerUnit: 1.5, kcalPerUnit: 1 },
  { id: "plank_minutes", category: "근력", label: "플랭크", unit: "분", pointsPerUnit: 15, kcalPerUnit: 7 },
  { id: "weight_volume_kg", category: "근력", label: "웨이트 볼륨", unit: "kg", pointsPerUnit: 0.04, kcalPerUnit: 0.015 },
  { id: "stairs_floors", category: "생활 활동", label: "계단", unit: "층", pointsPerUnit: 5, kcalPerUnit: 3 },
  { id: "cleaning_minutes", category: "생활 활동", label: "청소", unit: "분", pointsPerUnit: 3, kcalPerUnit: 4 },
  { id: "commute", category: "생활/자기계발", label: "출근", unit: "회", pointsPerUnit: 100, kcalPerUnit: 0 },
  { id: "study_hours", category: "생활/자기계발", label: "순공 시간", unit: "시간", pointsPerUnit: 30, kcalPerUnit: 0, tieredFocus: true },
  { id: "reading_minutes", category: "생활/자기계발", label: "독서", unit: "분", pointsPerUnit: 0.5, kcalPerUnit: 0, tieredFocus: true },
  { id: "language_minutes", category: "생활/자기계발", label: "외국어 공부", unit: "분", pointsPerUnit: 0.5, kcalPerUnit: 0, tieredFocus: true },
  { id: "coding_minutes", category: "생활/자기계발", label: "코딩/프로젝트", unit: "분", pointsPerUnit: 0.5, kcalPerUnit: 0, tieredFocus: true },
  { id: "instrument_minutes", category: "생활/자기계발", label: "악기 연습", unit: "분", pointsPerUnit: 0.5, kcalPerUnit: 0, tieredFocus: true },
  { id: "drawing_minutes", category: "생활/자기계발", label: "그림 그리기", unit: "분", pointsPerUnit: 0.5, kcalPerUnit: 0, tieredFocus: true },
  { id: "journaling_minutes", category: "생활/자기계발", label: "일기/회고", unit: "분", pointsPerUnit: 1, kcalPerUnit: 0 },
  { id: "prayer_minutes", category: "생활/자기계발", label: "기도/묵상", unit: "분", pointsPerUnit: 1, kcalPerUnit: 0 }
];

const shopItems = [
  { id: "egg", category: "단백질", title: "계란", unit: "1개", costPerUnit: 0, kcalPerUnit: 70 },
  { id: "tofu", category: "단백질", title: "두부", unit: "100g", costPerUnit: 0, kcalPerUnit: 80 },
  { id: "chicken_breast", category: "단백질", title: "닭가슴살", unit: "100g", costPerUnit: 0, kcalPerUnit: 110 },
  { id: "tuna_can", category: "단백질", title: "참치", unit: "1캔", costPerUnit: 0, kcalPerUnit: 180 },
  { id: "milk", category: "단백질", title: "우유", unit: "1잔", costPerUnit: 0, kcalPerUnit: 130 },
  { id: "greek_yogurt", category: "단백질", title: "그릭요거트", unit: "100g", costPerUnit: 0, kcalPerUnit: 100 },
  { id: "beef_shortplate", category: "고기류", title: "우삼겹", unit: "100g", costPerUnit: 300, kcalPerUnit: 330 },
  { id: "thin_pork_belly", category: "고기류", title: "대패삼겹", unit: "100g", costPerUnit: 320, kcalPerUnit: 360 },
  { id: "pork_belly", category: "고기류", title: "삼겹살", unit: "100g", costPerUnit: 400, kcalPerUnit: 420 },
  { id: "pork_shoulder", category: "고기류", title: "목살", unit: "100g", costPerUnit: 350, kcalPerUnit: 270 },
  { id: "beef", category: "고기류", title: "소고기", unit: "100g", costPerUnit: 450, kcalPerUnit: 250 },
  { id: "steak", category: "고기류", title: "스테이크", unit: "100g", costPerUnit: 600, kcalPerUnit: 270 },
  { id: "duck_meat", category: "고기류", title: "오리고기", unit: "100g", costPerUnit: 420, kcalPerUnit: 300 },
  { id: "pork_bulgogi", category: "고기류", title: "제육볶음", unit: "1인분", costPerUnit: 350, kcalPerUnit: 520 },
  { id: "shrimp", category: "해산물", title: "새우", unit: "100g", costPerUnit: 220, kcalPerUnit: 100 },
  { id: "squid", category: "해산물", title: "오징어", unit: "100g", costPerUnit: 180, kcalPerUnit: 90 },
  { id: "rice", category: "탄수화물", title: "밥", unit: "1공기", costPerUnit: 180, kcalPerUnit: 300 },
  { id: "sweet_potato", category: "탄수화물", title: "고구마", unit: "100g", costPerUnit: 120, kcalPerUnit: 130 },
  { id: "potato", category: "탄수화물", title: "감자", unit: "100g", costPerUnit: 100, kcalPerUnit: 85 },
  { id: "oatmeal", category: "탄수화물", title: "오트밀", unit: "50g", costPerUnit: 150, kcalPerUnit: 190 },
  { id: "banana", category: "탄수화물", title: "바나나", unit: "1개", costPerUnit: 100, kcalPerUnit: 90 },
  { id: "ramen", category: "면/분식", title: "라면", unit: "1봉", costPerUnit: 350, kcalPerUnit: 500 },
  { id: "noodle", category: "면/분식", title: "국수", unit: "1그릇", costPerUnit: 320, kcalPerUnit: 450 },
  { id: "udon", category: "면/분식", title: "우동", unit: "1그릇", costPerUnit: 380, kcalPerUnit: 470 },
  { id: "kimbap", category: "면/분식", title: "김밥", unit: "1줄", costPerUnit: 220, kcalPerUnit: 350 },
  { id: "tteokbokki", category: "면/분식", title: "떡볶이", unit: "1인분", costPerUnit: 450, kcalPerUnit: 600 },
  { id: "americano", category: "음료", title: "아메리카노", unit: "1잔", costPerUnit: 100, kcalPerUnit: 15 },
  { id: "latte", category: "음료", title: "라떼", unit: "1잔", costPerUnit: 180, kcalPerUnit: 180 },
  { id: "soda", category: "음료", title: "탄산", unit: "1캔", costPerUnit: 200, kcalPerUnit: 150 },
  { id: "zero_soda", category: "음료", title: "제로탄산", unit: "1캔", costPerUnit: 80, kcalPerUnit: 0 },
  { id: "energy_drink", category: "음료", title: "에너지드링크", unit: "1캔", costPerUnit: 250, kcalPerUnit: 120 },
  { id: "snack", category: "간식", title: "과자", unit: "1봉", costPerUnit: 200, kcalPerUnit: 360 },
  { id: "chocolate", category: "간식", title: "초콜릿", unit: "1개", costPerUnit: 200, kcalPerUnit: 280 },
  { id: "ice_cream", category: "간식", title: "아이스크림", unit: "1개", costPerUnit: 180, kcalPerUnit: 240 },
  { id: "cake", category: "간식", title: "케이크", unit: "1조각", costPerUnit: 350, kcalPerUnit: 430 },
  { id: "bread", category: "간식", title: "빵", unit: "1개", costPerUnit: 250, kcalPerUnit: 320 },
  { id: "delivery_meal", category: "특별권", title: "배달음식", unit: "1회", costPerUnit: 1000, kcalPerUnit: 0 },
  { id: "dining_out", category: "특별권", title: "외식권", unit: "1회", costPerUnit: 1000, kcalPerUnit: 0 },
  { id: "late_night", category: "특별권", title: "야식권", unit: "1회", costPerUnit: 700, kcalPerUnit: 0 }
];

const weeklyGoals = [
  { id: "weekly_steps_10000", title: "주간 10,000보", metric: "steps", target: 10000, xp: 100 },
  { id: "weekly_steps_30000", title: "주간 30,000보", metric: "steps", target: 30000, xp: 300 },
  { id: "weekly_steps_50000", title: "주간 50,000보", metric: "steps", target: 50000, xp: 500 },
  { id: "weekly_cardio_volume_25", title: "주간 유산소 환산 25km", metric: "cardio_volume", target: 25, xp: 500 },
  { id: "weekly_strength_points_700", title: "주간 근력 포인트 700P", metric: "strength_points", target: 700, xp: 600 },
  { id: "weekly_recovery_90", title: "주간 회복 90분", metric: "recovery_minutes", target: 90, xp: 300 },
  { id: "weekly_study_10", title: "주간 순공 10시간", metric: "study_hours", target: 10, xp: 500 },
  { id: "weekly_growth_300", title: "주간 자기계발 300분", metric: "development_minutes", target: 300, xp: 350 }
];

const monthlyGoals = [
  { id: "monthly_steps_150000", title: "월간 150,000보", metric: "steps", target: 150000, xp: 1500 },
  { id: "monthly_steps_300000", title: "월간 300,000보", metric: "steps", target: 300000, xp: 3500 },
  { id: "monthly_cardio_volume_100", title: "월간 유산소 환산 100km", metric: "cardio_volume", target: 100, xp: 3000 },
  { id: "monthly_strength_points_2500", title: "월간 근력 포인트 2,500P", metric: "strength_points", target: 2500, xp: 3000 },
  { id: "monthly_growth_1200", title: "월간 자기계발 1,200분", metric: "development_minutes", target: 1200, xp: 1500 }
];

const achievements = [
  { id: "first_activity", title: "첫 활동 기록", xp: 100, titleName: "첫 걸음", isComplete: () => state.activityLogs.length >= 1 },
  { id: "first_10000_steps", title: "첫 10,000보", xp: 200, titleName: "만보 정복자", isComplete: () => getTotalMetric("steps") >= 10000 },
  { id: "total_50000_steps", title: "누적 50,000보", xp: 500, titleName: "오만보 기사", isComplete: () => getTotalMetric("steps") >= 50000 },
  { id: "total_100000_steps", title: "누적 100,000보", xp: 1000, titleName: "십만보 군주", isComplete: () => getTotalMetric("steps") >= 100000 },
  { id: "workout_20_sessions", title: "근력 포인트 5,000P", xp: 700, titleName: "철인", isComplete: () => getTotalMetric("strength_points") >= 5000 },
  { id: "weight_7_logs", title: "체중 기록 7회", xp: 300, titleName: "불굴의 의지", isComplete: () => state.weightLogs.length >= 7 },
  { id: "first_commute", title: "첫 출근 기록", xp: 120, titleName: "출근 생존자", hidden: true, isComplete: () => getTotalMetric("commute_count") >= 1 },
  { id: "study_10_hours", title: "순공 10시간", xp: 400, titleName: "몰입하는 사람", hidden: true, isComplete: () => getTotalMetric("study_hours") >= 10 },
  { id: "development_1000", title: "자기계발 1,000분", xp: 700, titleName: "성장 설계자", hidden: true, isComplete: () => getTotalMetric("development_minutes") >= 1000 },
  {
    id: "salary_warrior",
    title: "주 5일 출근 + 매일 만보",
    xp: 1200,
    titleName: "월급전사",
    hidden: true,
    isComplete: () => getWeeklyCommuteTenThousandDays() >= 5
  }
];

const titleSets = [
  {
    id: "salary_set",
    title: "월급전사 세트",
    requirementIds: ["first_commute", "salary_warrior"],
    effect: "출근과 걸음을 동시에 해낸 칭호 세트"
  },
  {
    id: "growth_set",
    title: "성장 루틴 세트",
    requirementIds: ["first_activity", "study_10_hours"],
    effect: "활동과 순공 칭호 동시 보유"
  }
];

const lifeStatDefinitions = [
  { id: "body", label: "신체", code: "BODY", description: "움직임과 운동으로 성장합니다." },
  { id: "wisdom", label: "지혜", code: "WIS", description: "공부, 독서, 프로젝트로 성장합니다." },
  { id: "discipline", label: "성실", code: "DISC", description: "출근과 생활 루틴으로 성장합니다." },
  { id: "faith", label: "신앙", code: "FAITH", description: "기도와 묵상으로 성장합니다." },
  { id: "creation", label: "창작", code: "CREATE", description: "그림, 악기, 프로젝트로 성장합니다." },
  { id: "recovery", label: "회복", code: "REST", description: "스트레칭과 요가로 성장합니다." }
];

const quickRecordPresets = [
  { activityTypeId: "steps", label: "걷기", value: 5000 },
  { activityTypeId: "running_km", label: "러닝", value: 3 },
  { activityTypeId: "squat_count", label: "스쿼트", value: 100 },
  { activityTypeId: "pushup_count", label: "팔굽혀펴기", value: 50 },
  { activityTypeId: "stretching_minutes", label: "스트레칭", value: 10 },
  { activityTypeId: "study_hours", label: "순공", value: 1 },
  { activityTypeId: "reading_minutes", label: "독서", value: 30 },
  { activityTypeId: "commute", label: "출근", value: 1 },
  { activityTypeId: "prayer_minutes", label: "기도/묵상", value: 20 },
  { activityTypeId: "drawing_minutes", label: "그림", value: 30 },
  { activityTypeId: "instrument_minutes", label: "악기", value: 30 }
];

const cardioActivityIds = ["running_km", "cycling_km", "jump_rope_minutes", "swimming_minutes", "hiking_minutes"];
const strengthActivityIds = [
  "squat_count",
  "pushup_count",
  "pullup_count",
  "lunge_count",
  "situp_count",
  "burpee_count",
  "mountain_climber_count",
  "plank_minutes",
  "weight_volume_kg",
  "stairs_floors"
];
const recoveryActivityIds = ["stretching_minutes", "yoga_minutes"];
const exerciseActivityIds = [...new Set([...cardioActivityIds, ...strengthActivityIds, ...recoveryActivityIds])];
const developmentActivityIds = [
  "study_hours",
  "reading_minutes",
  "language_minutes",
  "coding_minutes",
  "instrument_minutes",
  "drawing_minutes",
  "journaling_minutes",
  "prayer_minutes"
];
const tieredFocusActivityIds = ["study_hours", "reading_minutes", "language_minutes", "coding_minutes", "instrument_minutes", "drawing_minutes"];

const setBonuses = [
  {
    id: "balanced_training_volume_week",
    title: "밸런스 운동 세트",
    description: "유산소 환산 25km + 근력 포인트 700P + 회복 90분",
    rewardPoints: 700,
    period: "weekly",
    activityTypeIds: exerciseActivityIds,
    requirements: [
      { metric: "cardio_volume", target: 25, label: "유산소 환산" },
      { metric: "strength_points", target: 700, label: "근력 포인트" },
      { metric: "recovery_minutes", target: 90, label: "회복" }
    ]
  },
  {
    id: "lower_core_week",
    title: "하체·코어 세트",
    description: "스쿼트 300개 + 런지 200개 + 플랭크 10분 + 계단 60층",
    rewardPoints: 600,
    period: "weekly",
    activityTypeIds: ["squat_count", "lunge_count", "plank_minutes", "stairs_floors"],
    requirements: [
      { metric: "squat_count", target: 300, label: "스쿼트" },
      { metric: "lunge_count", target: 200, label: "런지" },
      { metric: "plank_minutes", target: 10, label: "플랭크" },
      { metric: "stairs_floors", target: 60, label: "계단" }
    ]
  },
  {
    id: "cardio_engine_week",
    title: "유산소 엔진 세트",
    description: "걷기 70,000보 + 러닝/자전거 25km 또는 줄넘기 50분 상당",
    rewardPoints: 900,
    period: "weekly",
    activityTypeIds: ["steps", "running_km", "cycling_km", "jump_rope_minutes", "swimming_minutes", "hiking_minutes"],
    requirements: [
      { metric: "steps", target: 70000, label: "걷기" },
      { metric: "cardio_volume", target: 25, label: "유산소 환산" }
    ]
  },
  {
    id: "recovery_week",
    title: "회복 루틴 세트",
    description: "스트레칭 60분 + 요가 30분",
    rewardPoints: 250,
    period: "weekly",
    activityTypeIds: ["stretching_minutes", "yoga_minutes"],
    requirements: [
      { metric: "stretching_minutes", target: 60, label: "스트레칭" },
      { metric: "yoga_minutes", target: 30, label: "요가" }
    ]
  }
];

const levelTitles = [
  "태어난 김에 사는 사람",
  "오늘은 움직인 사람",
  "다시 시작한 사람",
  "어제보다 나은 사람",
  "나도 뭔가 할 수 있다!",
  "하면 되는구나",
  "조금씩 달라지는 사람",
  "습관이 생기는 사람",
  "스스로를 믿는 사람",
  "변화하는 사람",
  "포기하지 않는 사람",
  "꾸준한 사람",
  "자신을 관리하는 사람",
  "자신을 이기는 사람",
  "삶을 바꾸는 사람",
  "흔들려도 가는 사람",
  "스스로를 존중하는 사람",
  "강해진 사람",
  "인생을 설계하는 사람",
  "내 삶의 주인"
];

const levelThresholds = [
  0, 300, 800, 1500, 2500, 3800, 5400, 7300, 9500, 12000,
  15000, 18500, 22500, 27000, 32000, 37500, 43500, 50000, 57000, 65000
];

const STORAGE_KEY = "lifeRpgPointState.v1";
const APP_VERSION = "v0.4.1";
const WITHDRAW_FEE_RATE = 0.15;
const HANGUL_INITIALS = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const shopCategories = ["전체", ...new Set(shopItems.map((item) => item.category))];

let state = loadState();
let activeShopCategory = "전체";
let shopQuantities = Object.fromEntries(shopItems.map((item) => [item.id, 1]));

const el = {
  appVersion: document.querySelector("#appVersion"),
  updateBanner: document.querySelector("#updateBanner"),
  applyUpdateButton: document.querySelector("#applyUpdateButton"),
  forceRefreshButton: document.querySelector("#forceRefreshButton"),
  pointBalance: document.querySelector("#pointBalance"),
  savingsBalance: document.querySelector("#savingsBalance"),
  todayEarned: document.querySelector("#todayEarned"),
  todaySpent: document.querySelector("#todaySpent"),
  levelLabel: document.querySelector("#levelLabel"),
  xpLabel: document.querySelector("#xpLabel"),
  levelTitle: document.querySelector("#levelTitle"),
  selectedTitle: document.querySelector("#selectedTitle"),
  weeklySteps: document.querySelector("#weeklySteps"),
  incomeStatus: document.querySelector("#incomeStatus"),
  motivationText: document.querySelector("#motivationText"),
  characterAvatar: document.querySelector("#characterAvatar"),
  identityLabel: document.querySelector("#identityLabel"),
  identityCopy: document.querySelector("#identityCopy"),
  lifeWeekLabel: document.querySelector("#lifeWeekLabel"),
  lifeStatGrid: document.querySelector("#lifeStatGrid"),
  weeklyReviewBox: document.querySelector("#weeklyReviewBox"),
  activityForm: document.querySelector("#activityForm"),
  activityTypeSelect: document.querySelector("#activityTypeSelect"),
  activityValueInput: document.querySelector("#activityValueInput"),
  activityPreview: document.querySelector("#activityPreview"),
  quickRecordList: document.querySelector("#quickRecordList"),
  weeklyGoalList: document.querySelector("#weeklyGoalList"),
  monthlyGoalList: document.querySelector("#monthlyGoalList"),
  achievementList: document.querySelector("#achievementList"),
  setBonusList: document.querySelector("#setBonusList"),
  shopSearchInput: document.querySelector("#shopSearchInput"),
  recentPurchaseBox: document.querySelector("#recentPurchaseBox"),
  shopFilters: document.querySelector("#shopFilters"),
  shopResultLabel: document.querySelector("#shopResultLabel"),
  shopList: document.querySelector("#shopList"),
  savingsForm: document.querySelector("#savingsForm"),
  savingsInput: document.querySelector("#savingsInput"),
  savingsPreview: document.querySelector("#savingsPreview"),
  withdrawForm: document.querySelector("#withdrawForm"),
  withdrawInput: document.querySelector("#withdrawInput"),
  withdrawPreview: document.querySelector("#withdrawPreview"),
  runIncomeButton: document.querySelector("#runIncomeButton"),
  profileBox: document.querySelector("#profileBox"),
  titleSelect: document.querySelector("#titleSelect"),
  weightForm: document.querySelector("#weightForm"),
  weightDate: document.querySelector("#weightDate"),
  weightInput: document.querySelector("#weightInput"),
  weightMemo: document.querySelector("#weightMemo"),
  chartWrap: document.querySelector(".chart-wrap"),
  weightChart: document.querySelector("#weightChart"),
  weightLogList: document.querySelector("#weightLogList"),
  weeklySummary: document.querySelector("#weeklySummary"),
  activitySummary: document.querySelector("#activitySummary"),
  logList: document.querySelector("#logList"),
  growthLogList: document.querySelector("#growthLogList"),
  clearDataButton: document.querySelector("#clearDataButton"),
  exportDataButton: document.querySelector("#exportDataButton"),
  importDataButton: document.querySelector("#importDataButton"),
  importDataInput: document.querySelector("#importDataInput"),
  toast: document.querySelector("#toast")
};

function todayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const getDateTime = () => new Date().toISOString();

function loadState() {
  const fallback = {
    points: 0,
    savings: 0,
    xp: 0,
    totalEarned: 0,
    totalSpent: 0,
    activityLogs: [],
    purchaseLogs: [],
    weightLogs: [],
    savingsLogs: [],
    weeklyIncomeLogs: [],
    xpLogs: [],
    claimedWeeklyGoals: [],
    claimedMonthlyGoals: [],
    claimedAchievements: [],
    claimedSetBonuses: [],
    setBonusLogs: [],
    selectedTitleId: null
  };

  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return normalizeState(stored, fallback);
  } catch {
    return fallback;
  }
}

function normalizeState(input = {}, fallback = loadStateFallback()) {
  return {
    ...fallback,
    ...input,
    activityLogs: Array.isArray(input.activityLogs) ? input.activityLogs : fallback.activityLogs,
    purchaseLogs: Array.isArray(input.purchaseLogs) ? input.purchaseLogs : fallback.purchaseLogs,
    weightLogs: Array.isArray(input.weightLogs) ? input.weightLogs : fallback.weightLogs,
    savingsLogs: Array.isArray(input.savingsLogs) ? input.savingsLogs : fallback.savingsLogs,
    weeklyIncomeLogs: Array.isArray(input.weeklyIncomeLogs) ? input.weeklyIncomeLogs : fallback.weeklyIncomeLogs,
    xpLogs: Array.isArray(input.xpLogs) ? input.xpLogs : fallback.xpLogs || [],
    claimedWeeklyGoals: Array.isArray(input.claimedWeeklyGoals) ? input.claimedWeeklyGoals : fallback.claimedWeeklyGoals,
    claimedMonthlyGoals: Array.isArray(input.claimedMonthlyGoals) ? input.claimedMonthlyGoals : fallback.claimedMonthlyGoals,
    claimedAchievements: Array.isArray(input.claimedAchievements) ? input.claimedAchievements : fallback.claimedAchievements,
    claimedSetBonuses: Array.isArray(input.claimedSetBonuses) ? input.claimedSetBonuses : fallback.claimedSetBonuses,
    setBonusLogs: Array.isArray(input.setBonusLogs) ? input.setBonusLogs : fallback.setBonusLogs
  };
}

function loadStateFallback() {
  return {
    points: 0,
    savings: 0,
    xp: 0,
    totalEarned: 0,
    totalSpent: 0,
    activityLogs: [],
    purchaseLogs: [],
    weightLogs: [],
    savingsLogs: [],
    weeklyIncomeLogs: [],
    xpLogs: [],
    claimedWeeklyGoals: [],
    claimedMonthlyGoals: [],
    claimedAchievements: [],
    claimedSetBonuses: [],
    setBonusLogs: [],
    selectedTitleId: null
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatPoints(value) {
  return `${Math.round(value).toLocaleString("ko-KR")} P`;
}

function formatXp(value) {
  return `${Math.round(value).toLocaleString("ko-KR")} XP`;
}

function formatWeight(value) {
  return Number.isFinite(value) ? `${value.toFixed(1)}kg` : "-";
}

function formatShopQuantity(item, quantity) {
  const match = item.unit.match(/^(\d+(?:\.\d+)?)(.+)$/);
  if (!match) return `${quantity}${item.unit}`;

  const unitAmount = Number(match[1]);
  const unitLabel = match[2];
  const totalAmount = quantity * unitAmount;
  return `${Number.isInteger(totalAmount) ? totalAmount : totalAmount.toFixed(1)}${unitLabel}`;
}

function formatLogQuantity(log) {
  const item = shopItems.find((shopItem) => shopItem.id === log.itemId);
  if (item) return formatShopQuantity(item, log.quantity || 1);
  return `${log.quantity || 1}${log.unit || ""}`;
}

function formatActivityValue(activity, value) {
  if (!activity) return String(value);
  const amount = Number.isInteger(value) ? value.toLocaleString("ko-KR") : Number(value.toFixed(1)).toLocaleString("ko-KR");
  return `${amount}${activity.unit}`;
}

function normalizeSearchText(value) {
  return String(value || "").replace(/\s+/g, "").toLowerCase();
}

function getHangulInitials(value) {
  return String(value || "").split("").map((char) => {
    const code = char.charCodeAt(0);
    if (code < 0xac00 || code > 0xd7a3) return char;
    return HANGUL_INITIALS[Math.floor((code - 0xac00) / 588)];
  }).join("");
}

function includesInOrder(target, query) {
  let cursor = 0;
  return [...query].every((char) => {
    const index = target.indexOf(char, cursor);
    if (index < 0) return false;
    cursor = index + 1;
    return true;
  });
}

function matchesShopSearch(item, query) {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return true;
  const searchableText = normalizeSearchText(`${item.title}${item.category}${item.unit}`);
  const initials = normalizeSearchText(getHangulInitials(item.title));
  return searchableText.includes(normalizedQuery)
    || initials.includes(normalizedQuery)
    || includesInOrder(initials, normalizedQuery);
}

function getRecentPurchasedItems(limit = 8) {
  const seen = new Set();
  const recent = [];

  [...state.purchaseLogs].reverse().forEach((log) => {
    if (seen.has(log.itemId)) return;
    const item = shopItems.find((shopItem) => shopItem.id === log.itemId);
    if (!item) return;
    seen.add(log.itemId);
    recent.push(item);
  });

  return recent.slice(0, limit);
}

function byDateDesc(a, b) {
  return `${b.date} ${b.createdAt || ""}`.localeCompare(`${a.date} ${a.createdAt || ""}`);
}

function getActivityType(activityTypeId) {
  return activityTypes.find((activity) => activity.id === activityTypeId);
}

function getActivityHours(activity, value) {
  if (!activity) return 0;
  return activity.unit === "시간" ? value : value / 60;
}

function calculateTieredFocusPoints(startHours, addedHours) {
  const tiers = [
    { until: 1, pointsPerHour: 30 },
    { until: 2, pointsPerHour: 45 },
    { until: Infinity, pointsPerHour: 60 }
  ];
  let remaining = addedHours;
  let cursor = startHours;
  let points = 0;

  for (const tier of tiers) {
    if (remaining <= 0) break;
    if (cursor >= tier.until) continue;
    const available = tier.until - cursor;
    const used = Math.min(remaining, available);
    points += used * tier.pointsPerHour;
    cursor += used;
    remaining -= used;
  }

  return Math.round(points);
}

function getActivityHoursOnDate(activityTypeId, date) {
  const activity = getActivityType(activityTypeId);
  return state.activityLogs
    .filter((log) => log.date === date && log.activityTypeId === activityTypeId)
    .reduce((sum, log) => sum + getActivityHours(activity, log.value), 0);
}

function calculateActivity(activityTypeId, rawValue, date = todayKey()) {
  const activity = getActivityType(activityTypeId);
  const value = Number(rawValue);
  if (!activity || !Number.isFinite(value) || value <= 0) {
    return { activity, value: 0, points: 0, estimatedCalories: 0 };
  }

  if (tieredFocusActivityIds.includes(activityTypeId)) {
    const startHours = getActivityHoursOnDate(activityTypeId, date);
    const addedHours = getActivityHours(activity, value);
    return {
      activity,
      value,
      points: calculateTieredFocusPoints(startHours, addedHours),
      estimatedCalories: 0
    };
  }

  return {
    activity,
    value,
    points: Math.round(value * activity.pointsPerUnit),
    estimatedCalories: Math.floor(value * activity.kcalPerUnit)
  };
}

function calculatePurchase(item, quantity = 1) {
  const safeQuantity = Math.max(1, Number(quantity) || 1);
  return {
    quantity: safeQuantity,
    totalCost: safeQuantity * item.costPerUnit,
    estimatedCalories: safeQuantity * item.kcalPerUnit
  };
}

function getPurchaseCost(log) {
  return log.totalCost ?? log.cost ?? 0;
}

function getWeekStart(date = new Date()) {
  const copy = new Date(date);
  const day = copy.getDay() || 7;
  copy.setDate(copy.getDate() - day + 1);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function getMonthStart(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getWeekId(date = new Date()) {
  const start = getWeekStart(date);
  const yearStart = new Date(start.getFullYear(), 0, 1);
  const week = Math.ceil((((start - yearStart) / 86400000) + yearStart.getDay() + 1) / 7);
  return `${start.getFullYear()}-W${String(week).padStart(2, "0")}`;
}

function getMonthId(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function getLogsInRange(start) {
  return state.activityLogs.filter((log) => new Date(log.date) >= start);
}

function isWorkoutLog(log) {
  return exerciseActivityIds.includes(log.activityTypeId);
}

function getActivityPointsFor(logs, activityTypeIds) {
  return logs
    .filter((log) => activityTypeIds.includes(log.activityTypeId))
    .reduce((sum, log) => sum + log.points, 0);
}

function getMetric(metric, logs) {
  if (metric === "steps") {
    return logs.filter((log) => log.activityTypeId === "steps").reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "workout_minutes") {
    return logs.filter((log) => log.activityTypeId === "workout_minutes").reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "workout_sessions") {
    return logs.filter(isWorkoutLog).length;
  }
  if (metric === "cardio_sessions") {
    return logs.filter((log) => cardioActivityIds.includes(log.activityTypeId)).length;
  }
  if (metric === "exercise_points") {
    return getActivityPointsFor(logs, exerciseActivityIds);
  }
  if (metric === "strength_points") {
    return getActivityPointsFor(logs, strengthActivityIds);
  }
  if (metric === "recovery_minutes") {
    return logs
      .filter((log) => recoveryActivityIds.includes(log.activityTypeId))
      .reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "development_minutes") {
    return logs
      .filter((log) => developmentActivityIds.includes(log.activityTypeId))
      .reduce((sum, log) => sum + (log.activityTypeId === "study_hours" ? log.value * 60 : log.value), 0);
  }
  if (metric === "cardio_distance") {
    return logs
      .filter((log) => ["running_km", "cycling_km"].includes(log.activityTypeId))
      .reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "cardio_volume") {
    const distance = getMetric("cardio_distance", logs);
    const jumpRopeEquivalent = logs
      .filter((log) => log.activityTypeId === "jump_rope_minutes")
      .reduce((sum, log) => sum + log.value / 2, 0);
    const swimmingEquivalent = logs
      .filter((log) => log.activityTypeId === "swimming_minutes")
      .reduce((sum, log) => sum + log.value / 6, 0);
    const hikingEquivalent = logs
      .filter((log) => log.activityTypeId === "hiking_minutes")
      .reduce((sum, log) => sum + log.value / 10, 0);
    return distance + jumpRopeEquivalent + swimmingEquivalent + hikingEquivalent;
  }
  if (metric === "strength_sessions") {
    return logs.filter((log) => strengthActivityIds.includes(log.activityTypeId)).length;
  }
  if (metric === "squat_count") {
    return logs.filter((log) => log.activityTypeId === "squat_count").reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "pushup_count") {
    return logs.filter((log) => log.activityTypeId === "pushup_count").reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "pullup_count") {
    return logs.filter((log) => log.activityTypeId === "pullup_count").reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "lunge_count") {
    return logs.filter((log) => log.activityTypeId === "lunge_count").reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "situp_count") {
    return logs.filter((log) => log.activityTypeId === "situp_count").reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "burpee_count") {
    return logs.filter((log) => log.activityTypeId === "burpee_count").reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "mountain_climber_count") {
    return logs.filter((log) => log.activityTypeId === "mountain_climber_count").reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "plank_minutes") {
    return logs.filter((log) => log.activityTypeId === "plank_minutes").reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "stretching_minutes") {
    return logs.filter((log) => log.activityTypeId === "stretching_minutes").reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "yoga_minutes") {
    return logs.filter((log) => log.activityTypeId === "yoga_minutes").reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "stairs_floors") {
    return logs.filter((log) => log.activityTypeId === "stairs_floors").reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "commute_count") {
    return logs.filter((log) => log.activityTypeId === "commute").reduce((sum, log) => sum + log.value, 0);
  }
  if (metric === "study_hours") {
    return logs.filter((log) => log.activityTypeId === "study_hours").reduce((sum, log) => sum + log.value, 0);
  }
  return 0;
}

function getTotalMetric(metric) {
  return getMetric(metric, state.activityLogs);
}

function getWeeklyCommuteTenThousandDays() {
  const dayMap = new Map();
  getLogsInRange(getWeekStart()).forEach((log) => {
    const day = dayMap.get(log.date) || { commute: 0, steps: 0 };
    if (log.activityTypeId === "commute") day.commute += log.value;
    if (log.activityTypeId === "steps") day.steps += log.value;
    dayMap.set(log.date, day);
  });
  return [...dayMap.values()].filter((day) => day.commute >= 1 && day.steps >= 10000).length;
}

function getTodayStats() {
  const today = todayKey();
  const logs = state.activityLogs.filter((log) => log.date === today);
  const spent = state.purchaseLogs.filter((log) => log.date === today).reduce((sum, log) => sum + getPurchaseCost(log), 0);
  return {
    earned: logs.reduce((sum, log) => sum + log.points, 0),
    spent,
    calories: logs.reduce((sum, log) => sum + log.estimatedCalories, 0)
  };
}

function getTodayFoodStats() {
  const today = todayKey();
  const logs = state.purchaseLogs.filter((log) => log.date === today);
  return {
    count: logs.reduce((sum, log) => sum + (log.quantity || 1), 0),
    calories: logs.reduce((sum, log) => sum + (log.estimatedCalories || 0), 0)
  };
}

function getWeeklyStats() {
  const logs = getLogsInRange(getWeekStart());
  return {
    steps: getMetric("steps", logs),
    exercisePoints: getMetric("exercise_points", logs),
    calories: logs.reduce((sum, log) => sum + log.estimatedCalories, 0)
  };
}

function addStatGain(target, statId, value) {
  target[statId] = (target[statId] || 0) + value;
}

function getActivityStatGains(log) {
  const gains = Object.fromEntries(lifeStatDefinitions.map((stat) => [stat.id, 0]));
  const points = log.points || 0;
  const value = Number(log.value) || 0;
  const id = log.activityTypeId;

  if (id === "steps") {
    addStatGain(gains, "body", value / 2500);
    addStatGain(gains, "discipline", value / 12000);
  } else if (cardioActivityIds.includes(id) || strengthActivityIds.includes(id)) {
    addStatGain(gains, "body", points / 45);
  } else if (recoveryActivityIds.includes(id)) {
    addStatGain(gains, "recovery", value / 20);
    addStatGain(gains, "body", points / 120);
  } else if (id === "commute") {
    addStatGain(gains, "discipline", value * 2);
  } else if (id === "study_hours") {
    addStatGain(gains, "wisdom", value * 1.5);
    addStatGain(gains, "discipline", value * 0.5);
  } else if (["reading_minutes", "language_minutes"].includes(id)) {
    addStatGain(gains, "wisdom", value / 30);
  } else if (id === "coding_minutes") {
    addStatGain(gains, "wisdom", value / 40);
    addStatGain(gains, "creation", value / 60);
  } else if (["instrument_minutes", "drawing_minutes"].includes(id)) {
    addStatGain(gains, "creation", value / 30);
    addStatGain(gains, "discipline", value / 90);
  } else if (id === "journaling_minutes") {
    addStatGain(gains, "wisdom", value / 60);
    addStatGain(gains, "discipline", value / 60);
  } else if (id === "prayer_minutes") {
    addStatGain(gains, "faith", value / 20);
    addStatGain(gains, "recovery", value / 80);
  }

  return gains;
}

function getLifeStatSummary(logs = state.activityLogs) {
  const totals = Object.fromEntries(lifeStatDefinitions.map((stat) => [stat.id, 0]));
  logs.forEach((log) => {
    const gains = getActivityStatGains(log);
    lifeStatDefinitions.forEach((stat) => {
      totals[stat.id] += gains[stat.id] || 0;
    });
  });
  return lifeStatDefinitions
    .map((stat) => ({ ...stat, value: totals[stat.id] || 0 }))
    .sort((a, b) => b.value - a.value);
}

function getIdentityFromStats(stats) {
  const top = stats[0];
  if (!top || top.value < 1) {
    return {
      label: "기록 대기자",
      copy: "아직 삶의 패턴을 읽을 기록이 부족합니다."
    };
  }
  const identities = {
    body: ["개척자형", "몸을 움직여 삶을 열어가는 패턴이 가장 뚜렷합니다."],
    wisdom: ["탐구자형", "배움과 사고를 통해 삶을 성장시키는 흐름이 강합니다."],
    discipline: ["생활인형", "출근과 루틴으로 현실을 운영하는 힘이 쌓이고 있습니다."],
    faith: ["수행자형", "기도와 묵상으로 내면을 세우는 기록이 돋보입니다."],
    creation: ["창조자형", "만들고 표현하는 활동이 삶의 중심으로 자라고 있습니다."],
    recovery: ["회복가형", "무리보다 회복을 선택하며 지속 가능한 리듬을 만들고 있습니다."]
  };
  const [label, copy] = identities[top.id] || ["성장형", "기록이 하나의 방향으로 쌓이고 있습니다."];
  return { label, copy };
}

function getAvatarTheme(topStatId) {
  const themes = {
    body: { accent: "#52d273", aura: "#1d9f58", symbol: "STR", item: "검" },
    wisdom: { accent: "#65a9ff", aura: "#2563eb", symbol: "WIS", item: "책" },
    discipline: { accent: "#f7c948", aura: "#b98918", symbol: "DSC", item: "방패" },
    faith: { accent: "#c084fc", aura: "#7c3aed", symbol: "FTH", item: "빛" },
    creation: { accent: "#fb7185", aura: "#be123c", symbol: "CRT", item: "붓" },
    recovery: { accent: "#5eead4", aura: "#0f766e", symbol: "RST", item: "잎" }
  };
  return themes[topStatId] || { accent: "#a7b0c3", aura: "#374151", symbol: "NEW", item: "씨앗" };
}

function renderCharacterAvatar(level, stats, identity) {
  const topStat = stats[0] || { id: "new", value: 0, label: "기록" };
  const theme = getAvatarTheme(topStat.value >= 1 ? topStat.id : "new");
  const rank = level.level >= 15 ? "MASTER" : level.level >= 10 ? "ELITE" : level.level >= 5 ? "ADEPT" : "NOVICE";
  const glow = Math.min(0.9, 0.28 + (level.level / 28));
  el.characterAvatar.innerHTML = `
    <svg viewBox="0 0 220 220" role="img" aria-label="${identity.label} 캐릭터">
      <defs>
        <radialGradient id="avatarAura" cx="50%" cy="38%" r="64%">
          <stop offset="0%" stop-color="${theme.accent}" stop-opacity="${glow}"/>
          <stop offset="100%" stop-color="${theme.aura}" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="avatarArmor" x1="45" x2="175" y1="55" y2="185">
          <stop offset="0%" stop-color="${theme.accent}" stop-opacity="0.96"/>
          <stop offset="100%" stop-color="#172033"/>
        </linearGradient>
      </defs>
      <circle cx="110" cy="110" r="104" fill="url(#avatarAura)"/>
      <circle cx="110" cy="112" r="84" fill="#0b1220" stroke="${theme.accent}" stroke-opacity="0.45" stroke-width="3"/>
      <path d="M64 158c8-30 28-47 46-47s38 17 46 47v18H64v-18Z" fill="url(#avatarArmor)" stroke="${theme.accent}" stroke-width="3"/>
      <circle cx="110" cy="81" r="34" fill="#f8fafc"/>
      <path d="M75 76c11-29 27-39 43-35 19 4 31 18 30 41-14-11-34-10-73-6Z" fill="#111827" stroke="${theme.accent}" stroke-width="3"/>
      <circle cx="98" cy="85" r="4" fill="#111827"/>
      <circle cx="122" cy="85" r="4" fill="#111827"/>
      <path d="M99 101c8 6 15 6 23 0" fill="none" stroke="#111827" stroke-linecap="round" stroke-width="4"/>
      <path d="M55 129 34 92l19-10 23 42Z" fill="#111827" stroke="${theme.accent}" stroke-width="3"/>
      <path d="M165 129 186 92l-19-10-23 42Z" fill="#111827" stroke="${theme.accent}" stroke-width="3"/>
      <rect x="82" y="145" width="56" height="24" rx="8" fill="#070b13" stroke="${theme.accent}" stroke-width="2"/>
      <text x="110" y="162" text-anchor="middle" fill="${theme.accent}" font-size="13" font-weight="900">${theme.symbol}</text>
      <text x="110" y="197" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="900">Lv.${level.level} ${rank}</text>
    </svg>
    <span>${theme.item}</span>
  `;
}

function getLifeWeekLabel(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 1);
  const dayOffset = Math.floor((date - start) / 86400000);
  return `${date.getFullYear()}년 ${Math.floor(dayOffset / 7) + 1}번째 주`;
}

function getWeeklyReview(stats, logs) {
  if (!logs.length) return "이번 주는 아직 해석할 기록이 없습니다. 오늘 살아낸 일을 하나 기록해보세요.";
  const grown = stats.filter((stat) => stat.value > 0).slice(0, 2);
  const names = grown.map((stat) => stat.label).join(grown.length > 1 ? "와 " : "");
  const steps = getMetric("steps", logs);
  const developmentMinutes = getMetric("development_minutes", logs);
  const exercisePoints = getMetric("exercise_points", logs);
  const details = [];
  if (steps > 0) details.push(`걷기 ${Math.round(steps).toLocaleString("ko-KR")}보`);
  if (exercisePoints > 0) details.push(`운동 ${formatPoints(exercisePoints)}`);
  if (developmentMinutes > 0) details.push(`자기계발 ${Math.round(developmentMinutes).toLocaleString("ko-KR")}분`);
  return `이번 주 당신은 ${names}를 성장시켰습니다. ${details.slice(0, 3).join(" · ") || "작은 기록들이 쌓였습니다."}`;
}

function getWeightStats() {
  const logs = [...state.weightLogs].sort((a, b) => a.date.localeCompare(b.date));
  const latestSeven = logs.slice(-7);
  const average7 = latestSeven.length
    ? latestSeven.reduce((sum, log) => sum + log.weight, 0) / latestSeven.length
    : NaN;
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 30);
  const recent = logs.filter((log) => new Date(log.date) >= cutoff);
  const delta30 = recent.length >= 2 ? recent.at(-1).weight - recent[0].weight : NaN;
  return { average7, delta30 };
}

function getLevel() {
  let level = 1;
  for (let index = 0; index < levelThresholds.length; index += 1) {
    if (state.xp >= levelThresholds[index]) level = index + 1;
  }
  return { level: Math.min(level, 20), title: levelTitles[Math.min(level, 20) - 1] };
}

function getUnlockedTitles() {
  return achievements
    .filter((achievement) => state.claimedAchievements.includes(achievement.id))
    .map((achievement) => ({ id: achievement.id, title: achievement.titleName }));
}

function getSelectedTitleName() {
  const unlocked = getUnlockedTitles();
  return unlocked.find((title) => title.id === state.selectedTitleId)?.title || unlocked[0]?.title || "칭호 없음";
}

function getActiveTitleSets() {
  return titleSets.filter((set) => set.requirementIds.every((id) => state.claimedAchievements.includes(id)));
}

function getSetBonusPeriodId(setBonus) {
  return setBonus.period === "weekly" ? getWeekId() : getMonthId();
}

function getSetBonusLogs(setBonus) {
  return setBonus.period === "weekly" ? getLogsInRange(getWeekStart()) : getLogsInRange(getMonthStart());
}

function formatRequirementProgress(metric, value) {
  if (["workout_minutes", "plank_minutes", "stretching_minutes", "yoga_minutes", "recovery_minutes"].includes(metric)) return `${Math.floor(value)}분`;
  if (["development_minutes"].includes(metric)) return `${Math.floor(value).toLocaleString("ko-KR")}분`;
  if (["study_hours"].includes(metric)) return `${Number(value.toFixed(1)).toLocaleString("ko-KR")}시간`;
  if (["cardio_distance", "cardio_volume"].includes(metric)) return `${Number(value.toFixed(1)).toLocaleString("ko-KR")}km`;
  if (["exercise_points", "strength_points"].includes(metric)) return `${Math.floor(value).toLocaleString("ko-KR")}P`;
  if (["steps"].includes(metric)) return `${Math.floor(value).toLocaleString("ko-KR")}보`;
  if (["weight_volume_kg"].includes(metric)) return `${Math.floor(value).toLocaleString("ko-KR")}kg`;
  if (["stairs_floors"].includes(metric)) return `${Math.floor(value).toLocaleString("ko-KR")}층`;
  if ([
    "squat_count",
    "pushup_count",
    "pullup_count",
    "lunge_count",
    "situp_count",
    "burpee_count",
    "mountain_climber_count"
  ].includes(metric)) return `${Math.floor(value).toLocaleString("ko-KR")}개`;
  return `${Math.floor(value).toLocaleString("ko-KR")}회`;
}

function getSetBonusBasePoints(setBonus, logs) {
  return logs
    .filter((log) => setBonus.activityTypeIds.includes(log.activityTypeId))
    .reduce((sum, log) => sum + log.points, 0);
}

function getSetBonusReward(setBonus, logs) {
  return Math.min(setBonus.rewardPoints, Math.floor(getSetBonusBasePoints(setBonus, logs) / 2));
}

function addXp(amount, source, sourceId) {
  state.xp += amount;
  state.xpLogs = state.xpLogs || [];
  state.xpLogs.push({ id: `xp_${Date.now()}`, date: todayKey(), createdAt: getDateTime(), source, sourceId, xp: amount });
}

function renderDashboard() {
  const today = getTodayStats();
  const week = getWeeklyStats();
  const level = getLevel();
  const allStats = getLifeStatSummary();
  const weeklyLogs = getLogsInRange(getWeekStart());
  const weeklyStats = getLifeStatSummary(weeklyLogs);
  const identity = getIdentityFromStats(allStats);

  el.pointBalance.textContent = formatPoints(state.points);
  el.savingsBalance.textContent = formatPoints(state.savings);
  el.todayEarned.textContent = `+${formatPoints(today.earned)}`;
  el.todaySpent.textContent = `-${formatPoints(today.spent)}`;
  el.levelLabel.textContent = `Lv. ${level.level}`;
  el.xpLabel.textContent = formatXp(state.xp);
  el.levelTitle.textContent = level.title;
  el.selectedTitle.textContent = getSelectedTitleName();
  el.weeklySteps.textContent = `${Math.round(week.steps).toLocaleString("ko-KR")}보`;
  el.weeklySummary.textContent = `이번 주 ${Math.round(week.steps).toLocaleString("ko-KR")}보 · 운동 ${formatPoints(week.exercisePoints)}`;
  el.incomeStatus.textContent = `예상 일요일 인컴 +${Math.floor(state.savings / 10).toLocaleString("ko-KR")}XP`;
  el.identityLabel.textContent = identity.label;
  el.identityCopy.textContent = identity.copy;
  el.lifeWeekLabel.textContent = getLifeWeekLabel();
  renderCharacterAvatar(level, allStats, identity);
  el.lifeStatGrid.innerHTML = lifeStatDefinitions.map((stat) => {
    const total = allStats.find((item) => item.id === stat.id)?.value || 0;
    const weekly = weeklyStats.find((item) => item.id === stat.id)?.value || 0;
    const percent = Math.min(100, Math.round((total % 10) * 10));
    return `
      <article>
        <div>
          <span>${stat.code}</span>
          <strong>${stat.label}</strong>
        </div>
        <b>Lv.${Math.floor(total) + 1}</b>
        <div class="mini-track"><i style="width:${percent}%"></i></div>
        <small>이번 주 +${Number(weekly.toFixed(1)).toLocaleString("ko-KR")}</small>
      </article>
    `;
  }).join("");
  el.weeklyReviewBox.textContent = getWeeklyReview(weeklyStats, weeklyLogs);
  el.motivationText.textContent = state.points > 0
    ? "계획은 직접 세우고, 기록은 자산으로 남깁니다."
    : "오늘 살아낸 일을 하나 기록해보세요.";
}

function renderActivityForm() {
  const categories = [...new Set(activityTypes.map((activity) => activity.category || "기타"))];
  el.activityTypeSelect.innerHTML = categories.map((category) => {
    const options = activityTypes
      .filter((activity) => (activity.category || "기타") === category)
      .map((activity) => `<option value="${activity.id}">${activity.label} (${activity.unit})</option>`)
      .join("");
    return `<optgroup label="${category}">${options}</optgroup>`;
  }).join("");
  updateActivityPreview();
}

function renderQuickRecords() {
  el.quickRecordList.innerHTML = quickRecordPresets.map((preset) => {
    const activity = getActivityType(preset.activityTypeId);
    if (!activity) return "";
    const result = calculateActivity(preset.activityTypeId, preset.value, todayKey());
    return `
      <button class="quick-record" type="button" data-quick-activity-id="${preset.activityTypeId}" data-quick-value="${preset.value}">
        <span>${preset.label}</span>
        <strong>${formatActivityValue(activity, preset.value)}</strong>
        <small>+${result.points}P</small>
      </button>
    `;
  }).join("");
}

function updateActivityPreview() {
  const { activity, points, estimatedCalories } = calculateActivity(el.activityTypeSelect.value, el.activityValueInput.value);
  el.activityValueInput.placeholder = activity?.id === "steps" ? "7843" : `수치 입력 (${activity?.unit || ""})`;
  const tierText = activity?.tieredFocus ? " · 오늘 누적 30/45/60P" : "";
  el.activityPreview.textContent = `예상 +${points}P / ${estimatedCalories}kcal${tierText}`;
}

function renderGoalList(target, goals, periodId, claimedIds, logs) {
  target.innerHTML = goals.map((goal) => {
    const progress = getMetric(goal.metric, logs);
    const done = progress >= goal.target;
    const claimId = `${periodId}:${goal.id}`;
    const claimed = claimedIds.includes(claimId);
    const percent = Math.min(100, Math.round((progress / goal.target) * 100));
    return `
      <article class="rpg-item">
        <div class="item-row">
          <div>
            <div class="item-title">${goal.title}</div>
            <div class="item-meta">${Math.floor(progress).toLocaleString("ko-KR")} / ${goal.target.toLocaleString("ko-KR")} · ${percent}%</div>
          </div>
          <span class="reward">+${goal.xp}XP</span>
        </div>
        <div class="progress-track"><span style="width:${percent}%"></span></div>
        <button class="item-button" type="button" data-goal-id="${goal.id}" data-goal-period="${periodId}" data-goal-kind="${goals === weeklyGoals ? "weekly" : "monthly"}" ${done && !claimed ? "" : "disabled"}>
          ${claimed ? "수령 완료" : done ? "XP 수령" : "진행 중"}
        </button>
      </article>
    `;
  }).join("");
}

function renderGoals() {
  renderGoalList(el.weeklyGoalList, weeklyGoals, getWeekId(), state.claimedWeeklyGoals, getLogsInRange(getWeekStart()));
  renderGoalList(el.monthlyGoalList, monthlyGoals, getMonthId(), state.claimedMonthlyGoals, getLogsInRange(getMonthStart()));
}

function renderAchievements() {
  el.achievementList.innerHTML = achievements.map((achievement) => {
    const done = achievement.isComplete();
    const claimed = state.claimedAchievements.includes(achievement.id);
    const discovered = done || claimed;
    const title = claimed ? achievement.title : done ? "새 업적 발견" : "숨겨진 업적";
    const meta = claimed
      ? `칭호: ${achievement.titleName}`
      : done
        ? "기록이 쌓여 새로운 칭호가 열렸습니다."
        : "살아낸 기록이 쌓이면 언젠가 드러납니다.";
    return `
      <article class="rpg-item ${discovered ? "" : "locked-discovery"}">
        <div class="item-row">
          <div>
            <div class="item-title">${title}</div>
            <div class="item-meta">${meta}</div>
          </div>
          <span class="reward">${discovered ? `+${achievement.xp}XP` : "???"}</span>
        </div>
        <button class="item-button" type="button" data-achievement-id="${achievement.id}" ${done && !claimed ? "" : "disabled"}>
          ${claimed ? "획득 완료" : done ? "칭호 받기" : "미발견"}
        </button>
      </article>
    `;
  }).join("");
}

function renderSetBonuses() {
  el.setBonusList.innerHTML = setBonuses.map((setBonus) => {
    const logs = getSetBonusLogs(setBonus);
    const claimId = `${getSetBonusPeriodId(setBonus)}:${setBonus.id}`;
    const claimed = state.claimedSetBonuses.includes(claimId);
    const requirements = setBonus.requirements.map((requirement) => {
      const progress = getMetric(requirement.metric, logs);
      return { ...requirement, progress, done: progress >= requirement.target };
    });
    const done = requirements.every((requirement) => requirement.done);
    const basePoints = getSetBonusBasePoints(setBonus, logs);
    const rewardPoints = getSetBonusReward(setBonus, logs);
    const percent = Math.min(100, Math.round(
      requirements.reduce((sum, requirement) => sum + Math.min(1, requirement.progress / requirement.target), 0) / requirements.length * 100
    ));
    const detail = requirements.map((requirement) => (
      `${requirement.label} ${formatRequirementProgress(requirement.metric, requirement.progress)} / ${formatRequirementProgress(requirement.metric, requirement.target)}`
    )).join(" · ");

    return `
      <article class="rpg-item">
        <div class="item-row">
          <div>
            <div class="item-title">${setBonus.title}</div>
            <div class="item-meta">${setBonus.description}</div>
          </div>
          <span class="reward">+${rewardPoints}P</span>
        </div>
        <div class="item-meta">${detail}</div>
        <div class="item-meta">관련 운동 포인트 ${basePoints.toLocaleString("ko-KR")}P · 보너스 상한 50%</div>
        <div class="progress-track"><span style="width:${percent}%"></span></div>
        <button class="item-button" type="button" data-set-bonus-id="${setBonus.id}" ${done && !claimed && rewardPoints > 0 ? "" : "disabled"}>
          ${claimed ? "수령 완료" : done ? "포인트 수령" : "진행 중"}
        </button>
      </article>
    `;
  }).join("");
}

function renderShopFilters() {
  el.shopFilters.innerHTML = shopCategories.map((category) => `
    <button class="filter-button ${category === activeShopCategory ? "active" : ""}" type="button" data-shop-category="${category}">${category}</button>
  `).join("");
}

function renderRecentPurchases() {
  const recentItems = getRecentPurchasedItems();
  if (!recentItems.length) {
    el.recentPurchaseBox.innerHTML = "";
    return;
  }

  el.recentPurchaseBox.innerHTML = `
    <div class="recent-title">최근 구매</div>
    <div class="recent-chip-row">
      ${recentItems.map((item) => `
        <button class="recent-chip" type="button" data-shop-select-id="${item.id}">
          ${item.title}
        </button>
      `).join("")}
    </div>
  `;
}

function renderShop() {
  const query = el.shopSearchInput.value.trim();
  const visibleItems = query
    ? shopItems.filter((item) => matchesShopSearch(item, query))
    : activeShopCategory === "전체"
      ? shopItems
      : shopItems.filter((item) => item.category === activeShopCategory);
  const label = query
    ? `"${query}" 검색 결과 ${visibleItems.length}개`
    : `${activeShopCategory} 보상 ${visibleItems.length}개`;
  el.shopResultLabel.textContent = label;
  el.shopList.classList.toggle("shop-grid", visibleItems.length > 0);
  el.shopList.innerHTML = visibleItems.length ? visibleItems.map((item) => {
    const quantity = shopQuantities[item.id] || 1;
    const purchase = calculatePurchase(item, quantity);
    const canBuy = state.points >= purchase.totalCost;
    const unitCost = item.costPerUnit === 0 ? "무료" : `${item.costPerUnit}P`;
    const totalCost = purchase.totalCost === 0 ? "무료" : `${purchase.totalCost.toLocaleString("ko-KR")}P`;
    return `
      <article class="rpg-item shop-card">
        <div class="shop-card-head">
          <div>
            <span class="category-badge">${item.category}</span>
            <div class="item-title shop-title">${item.title}</div>
          </div>
          <strong class="shop-unit-price">${unitCost}<span> / ${item.unit}</span></strong>
        </div>
        <div class="quantity-control" aria-label="${item.title} 수량 선택">
          <button class="quantity-button" type="button" data-quantity-action="decrease" data-item-id="${item.id}" ${quantity <= 1 ? "disabled" : ""}>-</button>
          <span>${formatShopQuantity(item, quantity)}</span>
          <button class="quantity-button" type="button" data-quantity-action="increase" data-item-id="${item.id}">+</button>
        </div>
        <div class="shop-total">
          <span>참고 ${purchase.estimatedCalories.toLocaleString("ko-KR")} kcal</span>
          <strong class="cost">${totalCost}</strong>
        </div>
        <button class="item-button buy" type="button" data-buy-item-id="${item.id}" ${canBuy ? "" : "disabled"}>${canBuy ? "구매하기" : "포인트 부족"}</button>
      </article>
    `;
  }).join("") : `<p class="empty-text" style="display:block">검색 결과 없음</p>`;
}

function renderGrowth() {
  const level = getLevel();
  const unlockedTitles = getUnlockedTitles();
  const activeSets = getActiveTitleSets();
  const totalCalories = state.activityLogs.reduce((sum, log) => sum + log.estimatedCalories, 0);
  const totalSteps = getTotalMetric("steps");
  el.profileBox.innerHTML = `
    <div><span>레벨</span><strong>Lv${level.level}</strong></div>
    <div><span>레벨명</span><strong>${level.title}</strong></div>
    <div><span>칭호</span><strong>${getSelectedTitleName()}</strong></div>
    <div><span>누적 걸음</span><strong>${Math.round(totalSteps).toLocaleString("ko-KR")}보</strong></div>
    <div><span>누적 소모</span><strong>${Math.round(totalCalories).toLocaleString("ko-KR")} kcal</strong></div>
    <div><span>칭호세트</span><strong>${activeSets.length ? activeSets.map((set) => set.title).join(", ") : "없음"}</strong></div>
  `;
  el.titleSelect.innerHTML = unlockedTitles.length
    ? unlockedTitles.map((title) => `<option value="${title.id}" ${title.id === state.selectedTitleId ? "selected" : ""}>${title.title}</option>`).join("")
    : `<option value="">칭호 없음</option>`;
  updateSavingsPreview();
  updateWithdrawPreview();

  const savingsEntries = state.savingsLogs.map((log) => ({
    date: log.date,
    createdAt: log.createdAt,
    title: log.type === "withdraw" ? "포인트 출금" : "포인트 저축",
    detail: log.type === "withdraw"
      ? `지갑 +${(log.received ?? log.amount).toLocaleString("ko-KR")}P · 수수료 ${(log.fee || 0).toLocaleString("ko-KR")}P`
      : "지갑에서 저축으로 이동",
    amount: `${log.type === "withdraw" ? "-" : "+"}${log.amount.toLocaleString("ko-KR")}P`
  }));
  const incomeEntries = state.weeklyIncomeLogs.map((log) => ({
    date: log.date,
    createdAt: log.createdAt,
    title: "일요일 인컴",
    detail: `저축 ${log.savingsSnapshot.toLocaleString("ko-KR")}P 기준`,
    amount: `+${log.xpEarned.toLocaleString("ko-KR")}XP`
  }));
  const xpEntries = (state.xpLogs || []).map((log) => ({
    date: log.date,
    createdAt: log.createdAt,
    title: log.source,
    detail: log.sourceId || "XP 획득",
    amount: `+${log.xp.toLocaleString("ko-KR")}XP`
  }));
  const entries = [...savingsEntries, ...incomeEntries, ...xpEntries].sort(byDateDesc).slice(0, 12);
  const setMarkup = activeSets.length ? `
    <div class="set-effect-list">
      ${activeSets.map((set) => `<article class="set-effect"><strong>${set.title}</strong><span>${set.effect}</span></article>`).join("")}
    </div>
  ` : "";
  el.growthLogList.innerHTML = `${setMarkup}${entries.length ? entries.map((entry) => `
    <article class="log-item">
      <div class="log-row"><strong>${entry.title}</strong><strong class="positive">${entry.amount}</strong></div>
      <small>${entry.date} · ${entry.detail}</small>
    </article>
  `).join("") : ""}`;
}

function updateSavingsPreview() {
  const amount = Math.max(0, Number(el.savingsInput.value) || 0);
  const projectedSavings = state.savings + Math.min(amount, state.points);
  el.savingsPreview.textContent = `예상 일요일 인컴 +${Math.floor(projectedSavings / 10).toLocaleString("ko-KR")}XP`;
}

function updateWithdrawPreview() {
  const amount = Math.max(0, Number(el.withdrawInput.value) || 0);
  const withdrawAmount = Math.min(amount, state.savings);
  const fee = Math.ceil(withdrawAmount * WITHDRAW_FEE_RATE);
  const received = Math.max(0, withdrawAmount - fee);
  const projectedWallet = state.points + received;
  const projectedSavings = state.savings - withdrawAmount;
  el.withdrawPreview.textContent = `입금 ${formatPoints(received)} · 수수료 ${formatPoints(fee)} · 출금 후 지갑 ${formatPoints(projectedWallet)} · 저축 ${formatPoints(projectedSavings)}`;
}

function renderWeightLogs() {
  const logs = [...state.weightLogs].sort(byDateDesc).slice(0, 8);
  el.weightLogList.innerHTML = logs.length ? logs.map((log) => `
    <article class="log-item">
      <div class="log-row"><strong>${formatWeight(log.weight)}</strong><small>${log.date}</small></div>
      <small>${log.memo || "메모 없음"}</small>
    </article>
  `).join("") : "";
}

function drawWeightChart() {
  const logs = [...state.weightLogs].sort((a, b) => a.date.localeCompare(b.date)).slice(-30);
  el.chartWrap.classList.toggle("empty", logs.length === 0);
  if (!logs.length) return;

  const canvas = el.weightChart;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const padding = 42;
  const weights = logs.map((log) => log.weight);
  const minWeight = Math.min(...weights) - 0.5;
  const maxWeight = Math.max(...weights) + 0.5;
  const range = Math.max(maxWeight - minWeight, 1);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#0b1220";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "rgba(255,255,255,0.1)";
  ctx.lineWidth = 1;
  ctx.font = "22px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillStyle = "#a7b0c3";

  for (let i = 0; i <= 4; i += 1) {
    const y = padding + ((height - padding * 2) / 4) * i;
    const value = maxWeight - (range / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
    ctx.fillText(value.toFixed(1), 8, y + 7);
  }

  const pointFor = (log, index) => {
    const x = logs.length === 1 ? width / 2 : padding + ((width - padding * 2) / (logs.length - 1)) * index;
    const y = padding + ((maxWeight - log.weight) / range) * (height - padding * 2);
    return { x, y };
  };

  ctx.strokeStyle = "#65a9ff";
  ctx.lineWidth = 5;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.beginPath();
  logs.forEach((log, index) => {
    const point = pointFor(log, index);
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.stroke();

  logs.forEach((log, index) => {
    const point = pointFor(log, index);
    ctx.beginPath();
    ctx.fillStyle = "#f7c948";
    ctx.arc(point.x, point.y, 7, 0, Math.PI * 2);
    ctx.fill();
  });

  const latest = logs.at(-1);
  ctx.fillStyle = "#f8fafc";
  ctx.fillText(`${latest.date} · ${latest.weight.toFixed(1)}kg`, padding, height - 12);
}

function renderLogs() {
  const activityEntries = state.activityLogs.map((log) => {
    const activity = getActivityType(log.activityTypeId);
    return {
      id: log.id,
      kind: "activity",
      date: log.date,
      createdAt: log.createdAt,
      title: activity?.label || "활동 기록",
      detail: `${log.value.toLocaleString("ko-KR")}${log.unit} · ${log.estimatedCalories} kcal`,
      earned: log.points,
      spent: 0,
      saved: 0,
      withdrawn: 0,
      fee: 0,
      calories: log.estimatedCalories,
      amount: `+${log.points}P`,
      className: "positive"
    };
  });
  const purchaseEntries = state.purchaseLogs.map((log) => ({
    kind: "purchase",
    date: log.date,
    createdAt: log.createdAt,
    title: log.title || shopItems.find((item) => item.id === log.itemId)?.title || "상점 구매",
    detail: log.quantity ? `${formatLogQuantity(log)} · ${log.estimatedCalories.toLocaleString("ko-KR")} kcal` : "상점 구매",
    earned: 0,
    spent: getPurchaseCost(log),
    saved: 0,
    withdrawn: 0,
    fee: 0,
    calories: 0,
    amount: `-${getPurchaseCost(log)}P`,
    className: "negative"
  }));
  const savingsEntries = state.savingsLogs.map((log) => ({
    kind: "savings",
    date: log.date,
    createdAt: log.createdAt,
    title: log.type === "withdraw" ? "저축 출금" : "저축",
    detail: log.type === "withdraw"
      ? `요청 ${log.amount.toLocaleString("ko-KR")}P · 수수료 ${(log.fee || 0).toLocaleString("ko-KR")}P`
      : "지갑에서 저축으로 이동",
    earned: 0,
    spent: 0,
    saved: log.type === "withdraw" ? 0 : log.amount,
    withdrawn: log.type === "withdraw" ? (log.received ?? log.amount) : 0,
    fee: log.type === "withdraw" ? (log.fee || 0) : 0,
    calories: 0,
    amount: log.type === "withdraw"
      ? `+${(log.received ?? log.amount).toLocaleString("ko-KR")}P`
      : `-${log.amount.toLocaleString("ko-KR")}P`,
    className: log.type === "withdraw" ? "positive" : "negative"
  }));
  const setBonusEntries = state.setBonusLogs.map((log) => ({
    kind: "setBonus",
    date: log.date,
    createdAt: log.createdAt,
    title: log.title,
    detail: "세트효과 보너스",
    earned: log.rewardPoints,
    spent: 0,
    saved: 0,
    withdrawn: 0,
    fee: 0,
    calories: 0,
    amount: `+${log.rewardPoints}P`,
    className: "positive"
  }));
  const entries = [...activityEntries, ...purchaseEntries, ...savingsEntries, ...setBonusEntries].sort(byDateDesc);
  const recentCutoff = new Date();
  recentCutoff.setDate(recentCutoff.getDate() - 6);
  recentCutoff.setHours(0, 0, 0, 0);
  const recentEntries = entries.filter((entry) => new Date(entry.date) >= recentCutoff);
  const recentSummary = recentEntries.reduce((sum, entry) => ({
    earned: sum.earned + entry.earned,
    spent: sum.spent + entry.spent,
    saved: sum.saved + entry.saved,
    withdrawn: sum.withdrawn + entry.withdrawn,
    fee: sum.fee + entry.fee
  }), { earned: 0, spent: 0, saved: 0, withdrawn: 0, fee: 0 });

  el.activitySummary.innerHTML = `
    <div><span>최근 7일 획득</span><strong>${formatPoints(recentSummary.earned)}</strong></div>
    <div><span>최근 7일 사용</span><strong>${formatPoints(recentSummary.spent)}</strong></div>
    <div><span>저축</span><strong>${formatPoints(recentSummary.saved)}</strong></div>
    <div><span>출금</span><strong>${formatPoints(recentSummary.withdrawn)}</strong></div>
    <div><span>수수료</span><strong>${formatPoints(recentSummary.fee)}</strong></div>
  `;

  const grouped = entries.slice(0, 80).reduce((map, entry) => {
    if (!map.has(entry.date)) {
      map.set(entry.date, {
        date: entry.date,
        earned: 0,
        spent: 0,
        saved: 0,
        withdrawn: 0,
        fee: 0,
        calories: 0,
        entries: []
      });
    }
    const day = map.get(entry.date);
    day.earned += entry.earned;
    day.spent += entry.spent;
    day.saved += entry.saved;
    day.withdrawn += entry.withdrawn;
    day.fee += entry.fee;
    day.calories += entry.calories;
    day.entries.push(entry);
    return map;
  }, new Map());

  const dayCards = [...grouped.values()].slice(0, 14);
  el.logList.innerHTML = dayCards.length ? dayCards.map((day) => `
    <article class="ledger-day">
      <div class="ledger-day-head">
        <div>
          <strong>${day.date === todayKey() ? "오늘" : day.date}</strong>
          <small>${day.entries.length}개 기록 · 소모 ${day.calories.toLocaleString("ko-KR")} kcal</small>
        </div>
        <strong class="${day.earned - day.spent >= 0 ? "positive" : "negative"}">${day.earned - day.spent >= 0 ? "+" : ""}${formatPoints(day.earned - day.spent)}</strong>
      </div>
      <div class="ledger-summary">
        <span>획득 ${formatPoints(day.earned)}</span>
        <span>사용 ${formatPoints(day.spent)}</span>
        <span>저축 ${formatPoints(day.saved)}</span>
        <span>출금 ${formatPoints(day.withdrawn)}</span>
        <span>수수료 ${formatPoints(day.fee)}</span>
      </div>
      <div class="ledger-lines">
        ${day.entries.map((entry) => `
          <div class="ledger-line">
            <div>
              <strong>${entry.title}</strong>
              <small>${entry.detail}</small>
            </div>
            <div class="ledger-line-side">
              <strong class="${entry.className}">${entry.amount}</strong>
              ${entry.kind === "activity" ? `<button class="delete-log-button" type="button" data-activity-log-id="${entry.id}">삭제</button>` : ""}
            </div>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("") : `<p class="empty-text" style="display:block">아직 기록이 없습니다.</p>`;
}

function renderAll() {
  renderDashboard();
  renderQuickRecords();
  renderGoals();
  renderSetBonuses();
  renderAchievements();
  renderShopFilters();
  renderRecentPurchases();
  renderShop();
  renderGrowth();
  renderWeightLogs();
  drawWeightChart();
  renderLogs();
}

function recordActivity(activityTypeId = el.activityTypeSelect.value, rawValue = el.activityValueInput.value, options = {}) {
  const date = todayKey();
  const result = calculateActivity(activityTypeId, rawValue, date);
  if (!result.activity || result.value <= 0 || result.points <= 0) {
    showToast("활동 수치를 입력해주세요.");
    return;
  }

  const log = {
    id: `log_${Date.now()}`,
    date,
    createdAt: getDateTime(),
    activityTypeId: result.activity.id,
    value: result.value,
    unit: result.activity.unit,
    points: result.points,
    estimatedCalories: result.estimatedCalories
  };

  state.points += log.points;
  state.totalEarned += log.points;
  state.activityLogs.push(log);
  saveState();
  if (!options.keepInput) {
    el.activityValueInput.value = "";
    updateActivityPreview();
  }
  renderAll();
  showToast(`${result.activity.label} 기록: +${log.points}P`);
}

function deleteActivityLog(logId) {
  const log = state.activityLogs.find((activityLog) => activityLog.id === logId);
  if (!log) return;

  state.activityLogs = state.activityLogs.filter((activityLog) => activityLog.id !== logId);
  state.points = Math.max(0, state.points - log.points);
  state.totalEarned = Math.max(0, state.totalEarned - log.points);
  saveState();
  renderAll();
  showToast(`활동 기록 삭제: -${log.points}P 되돌림`);
}

function buyItem(itemId) {
  const item = shopItems.find((shopItem) => shopItem.id === itemId);
  if (!item) return;
  const purchase = calculatePurchase(item, shopQuantities[item.id]);
  if (state.points < purchase.totalCost) {
    showToast("포인트가 부족합니다.");
    return;
  }

  state.points -= purchase.totalCost;
  state.totalSpent += purchase.totalCost;
  state.purchaseLogs.push({
    id: `purchase_${Date.now()}`,
    date: todayKey(),
    createdAt: getDateTime(),
    itemId: item.id,
    title: item.title,
    quantity: purchase.quantity,
    unit: item.unit,
    totalCost: purchase.totalCost,
    estimatedCalories: purchase.estimatedCalories
  });
  saveState();
  renderAll();
  const costText = purchase.totalCost === 0 ? "무료" : `-${purchase.totalCost}P`;
  showToast(`${item.title} ${formatShopQuantity(item, purchase.quantity)} 기록: ${costText}`);
}

function depositSavings() {
  const amount = Math.floor(Number(el.savingsInput.value));
  if (!Number.isFinite(amount) || amount <= 0) {
    showToast("저축할 포인트를 입력해주세요.");
    return;
  }
  if (amount > state.points) {
    showToast("지갑 포인트가 부족합니다.");
    return;
  }

  state.points -= amount;
  state.savings += amount;
  state.savingsLogs.push({ id: `savings_${Date.now()}`, type: "deposit", date: todayKey(), createdAt: getDateTime(), amount });
  saveState();
  el.savingsInput.value = "";
  renderAll();
  showToast(`${amount.toLocaleString("ko-KR")}P를 저축했습니다.`);
}

function withdrawSavings() {
  const amount = Math.floor(Number(el.withdrawInput.value));
  if (!Number.isFinite(amount) || amount <= 0) {
    showToast("출금할 포인트를 입력해주세요.");
    return;
  }
  if (amount > state.savings) {
    showToast("저축 포인트가 부족합니다.");
    return;
  }

  const fee = Math.ceil(amount * WITHDRAW_FEE_RATE);
  const received = Math.max(0, amount - fee);
  state.savings -= amount;
  state.points += received;
  state.savingsLogs.push({
    id: `savings_${Date.now()}`,
    type: "withdraw",
    date: todayKey(),
    createdAt: getDateTime(),
    amount,
    fee,
    received
  });
  saveState();
  el.withdrawInput.value = "";
  renderAll();
  showToast(`출금 ${amount.toLocaleString("ko-KR")}P · 수수료 ${fee.toLocaleString("ko-KR")}P · 입금 ${received.toLocaleString("ko-KR")}P`);
}

function runWeeklyIncome(manual = false, force = false) {
  const now = new Date();
  const weekId = getWeekId(now);
  if (!force && now.getDay() !== 0) {
    el.incomeStatus.textContent = `일요일 정산 대기 · 예상 +${Math.floor(state.savings / 10)}XP`;
    if (manual) showToast("일요일에 저축 인컴이 정산됩니다.");
    return;
  }
  if (state.weeklyIncomeLogs.some((log) => log.weekId === weekId)) {
    if (manual) showToast("이번 주 인컴은 이미 정산되었습니다.");
    return;
  }

  const xpEarned = Math.floor(state.savings / 10);
  if (xpEarned <= 0) {
    if (manual) showToast("저축 포인트가 있어야 XP 인컴이 생깁니다.");
    return;
  }
  state.weeklyIncomeLogs.push({
    id: `income_${Date.now()}`,
    weekId,
    date: todayKey(),
    createdAt: getDateTime(),
    savingsSnapshot: state.savings,
    xpEarned
  });
  addXp(xpEarned, "일요일 인컴", weekId);
  saveState();
  showToast(`저축 인컴 +${xpEarned.toLocaleString("ko-KR")}XP`);
}

function claimGoal(goalId, periodId, kind) {
  const goals = kind === "weekly" ? weeklyGoals : monthlyGoals;
  const claimedKey = kind === "weekly" ? "claimedWeeklyGoals" : "claimedMonthlyGoals";
  const logs = kind === "weekly" ? getLogsInRange(getWeekStart()) : getLogsInRange(getMonthStart());
  const goal = goals.find((item) => item.id === goalId);
  const claimId = `${periodId}:${goalId}`;
  if (!goal || state[claimedKey].includes(claimId) || getMetric(goal.metric, logs) < goal.target) return;

  state[claimedKey].push(claimId);
  addXp(goal.xp, `${kind === "weekly" ? "주간" : "월간"} 퀘스트`, goal.title);
  saveState();
  renderAll();
  showToast(`${goal.title}: +${goal.xp}XP`);
}

function claimSetBonus(setBonusId) {
  const setBonus = setBonuses.find((item) => item.id === setBonusId);
  if (!setBonus) return;

  const logs = getSetBonusLogs(setBonus);
  const claimId = `${getSetBonusPeriodId(setBonus)}:${setBonus.id}`;
  const done = setBonus.requirements.every((requirement) => getMetric(requirement.metric, logs) >= requirement.target);
  const rewardPoints = getSetBonusReward(setBonus, logs);
  if (!done || state.claimedSetBonuses.includes(claimId) || rewardPoints <= 0) return;

  state.claimedSetBonuses.push(claimId);
  state.points += rewardPoints;
  state.totalEarned += rewardPoints;
  state.setBonusLogs.push({
    id: `set_bonus_${Date.now()}`,
    date: todayKey(),
    createdAt: getDateTime(),
    setBonusId: setBonus.id,
    title: setBonus.title,
    rewardPoints,
    basePoints: getSetBonusBasePoints(setBonus, logs),
    periodId: getSetBonusPeriodId(setBonus)
  });
  saveState();
  renderAll();
  showToast(`${setBonus.title}: +${rewardPoints}P`);
}

function claimAchievement(achievementId) {
  const achievement = achievements.find((item) => item.id === achievementId);
  if (!achievement || state.claimedAchievements.includes(achievement.id) || !achievement.isComplete()) return;

  state.claimedAchievements.push(achievement.id);
  if (!state.selectedTitleId) state.selectedTitleId = achievement.id;
  addXp(achievement.xp, "업적", achievement.title);
  saveState();
  renderAll();
  showToast(`${achievement.title}: +${achievement.xp}XP`);
}

function upsertWeight(date, weight, memo) {
  const existing = state.weightLogs.find((log) => log.date === date);
  if (existing) {
    existing.weight = weight;
    existing.memo = memo;
    existing.createdAt = getDateTime();
  } else {
    state.weightLogs.push({ date, weight, memo, createdAt: getDateTime() });
  }
  saveState();
  renderAll();
  showToast("체중 기록을 저장했습니다.");
}

function clearAllData() {
  if (!confirm("모든 포인트, 저축, XP, 구매, 체중 기록을 삭제할까요?")) return;
  localStorage.removeItem(STORAGE_KEY);
  state = loadState();
  renderAll();
  showToast("전체 데이터를 삭제했습니다.");
}

function exportData() {
  const backup = {
    app: "Life RPG Point",
    version: APP_VERSION,
    exportedAt: getDateTime(),
    storageKey: STORAGE_KEY,
    state
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `life-rpg-backup-${todayKey()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("백업 파일을 만들었습니다.");
}

function importDataFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(String(reader.result || "{}"));
      const importedState = parsed.state || parsed;
      if (!importedState || typeof importedState !== "object" || !Array.isArray(importedState.activityLogs)) {
        showToast("백업 파일 형식이 맞지 않습니다.");
        return;
      }
      if (!confirm("현재 기기의 Life RPG 데이터를 백업 파일 내용으로 교체할까요?")) return;
      state = normalizeState(importedState);
      saveState();
      renderAll();
      showToast("백업 데이터를 가져왔습니다.");
    } catch {
      showToast("백업 파일을 읽지 못했습니다.");
    } finally {
      el.importDataInput.value = "";
    }
  });
  reader.readAsText(file);
}

let toastTimer;
let waitingServiceWorker = null;
let isReloadingForUpdate = false;

function showToast(message) {
  clearTimeout(toastTimer);
  el.toast.textContent = message;
  el.toast.classList.add("show");
  toastTimer = setTimeout(() => el.toast.classList.remove("show"), 2200);
}

function showUpdateBanner(worker = null) {
  waitingServiceWorker = worker;
  el.updateBanner.hidden = false;
}

async function clearAppCaches() {
  if (!("caches" in window)) return;
  const cacheNames = await caches.keys();
  await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
}

async function forceRefreshApp() {
  showToast("캐시를 비우고 최신 파일을 불러옵니다.");
  await clearAppCaches();
  if ("serviceWorker" in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((registration) => registration.update()));
  }
  window.location.reload();
}

function applyAvailableUpdate() {
  if (waitingServiceWorker) {
    waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
    return;
  }
  forceRefreshApp();
}

function bindEvents() {
  function activateTab(tabName) {
    const button = document.querySelector(`.tab[data-tab="${tabName}"]`);
    const panel = document.querySelector(`#${tabName}Panel`);
    if (!button || !panel) return;
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
    document.querySelectorAll(".panel").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    panel.classList.add("active");
  }

  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      activateTab(button.dataset.tab);
    });
  });

  document.querySelectorAll("[data-jump-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      activateTab(button.dataset.jumpTab);
      document.querySelector(".tab-bar")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  el.activityForm.addEventListener("submit", (event) => {
    event.preventDefault();
    recordActivity();
  });
  el.activityTypeSelect.addEventListener("change", updateActivityPreview);
  el.activityValueInput.addEventListener("input", updateActivityPreview);

  el.quickRecordList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-quick-activity-id]");
    if (!button) return;
    recordActivity(button.dataset.quickActivityId, button.dataset.quickValue, { keepInput: true });
  });

  el.weeklyGoalList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-goal-id]");
    if (button) claimGoal(button.dataset.goalId, button.dataset.goalPeriod, button.dataset.goalKind);
  });

  el.monthlyGoalList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-goal-id]");
    if (button) claimGoal(button.dataset.goalId, button.dataset.goalPeriod, button.dataset.goalKind);
  });

  el.setBonusList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-set-bonus-id]");
    if (button) claimSetBonus(button.dataset.setBonusId);
  });

  el.achievementList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-achievement-id]");
    if (button) claimAchievement(button.dataset.achievementId);
  });

  el.shopFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-shop-category]");
    if (!button) return;
    activeShopCategory = button.dataset.shopCategory;
    renderShopFilters();
    renderShop();
  });

  el.shopSearchInput.addEventListener("input", renderShop);

  el.recentPurchaseBox.addEventListener("click", (event) => {
    const button = event.target.closest("[data-shop-select-id]");
    if (!button) return;
    const item = shopItems.find((shopItem) => shopItem.id === button.dataset.shopSelectId);
    if (!item) return;
    el.shopSearchInput.value = item.title;
    renderShop();
    el.shopList.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  el.shopList.addEventListener("click", (event) => {
    const quantityButton = event.target.closest("[data-quantity-action]");
    if (quantityButton) {
      const itemId = quantityButton.dataset.itemId;
      const currentQuantity = shopQuantities[itemId] || 1;
      shopQuantities[itemId] = quantityButton.dataset.quantityAction === "increase"
        ? currentQuantity + 1
        : Math.max(1, currentQuantity - 1);
      renderShop();
      return;
    }

    const button = event.target.closest("[data-buy-item-id]");
    if (button) buyItem(button.dataset.buyItemId);
  });

  el.savingsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    depositSavings();
  });
  el.savingsInput.addEventListener("input", updateSavingsPreview);
  el.withdrawForm.addEventListener("submit", (event) => {
    event.preventDefault();
    withdrawSavings();
  });
  el.withdrawInput.addEventListener("input", updateWithdrawPreview);
  el.runIncomeButton.addEventListener("click", () => {
    runWeeklyIncome(true);
    saveState();
    renderAll();
  });
  el.titleSelect.addEventListener("change", () => {
    state.selectedTitleId = el.titleSelect.value || null;
    saveState();
    renderAll();
  });

  el.logList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-activity-log-id]");
    if (button) deleteActivityLog(button.dataset.activityLogId);
  });

  el.weightForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const date = el.weightDate.value;
    const weight = Number(el.weightInput.value);
    const memo = el.weightMemo.value.trim();
    if (!date || !Number.isFinite(weight)) return;
    upsertWeight(date, weight, memo);
    el.weightInput.value = "";
    el.weightMemo.value = "";
  });

  el.clearDataButton.addEventListener("click", clearAllData);
  el.exportDataButton.addEventListener("click", exportData);
  el.importDataButton.addEventListener("click", () => el.importDataInput.click());
  el.importDataInput.addEventListener("change", () => importDataFile(el.importDataInput.files?.[0]));
  el.applyUpdateButton.addEventListener("click", applyAvailableUpdate);
  el.forceRefreshButton.addEventListener("click", forceRefreshApp);
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (isReloadingForUpdate) return;
      isReloadingForUpdate = true;
      window.location.reload();
    });

    navigator.serviceWorker.register("service-worker.js").then((registration) => {
      if (registration.waiting) showUpdateBanner(registration.waiting);

      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        if (!worker) return;
        worker.addEventListener("statechange", () => {
          if (worker.state === "installed" && navigator.serviceWorker.controller) {
            showUpdateBanner(worker);
          }
        });
      });

      setInterval(() => registration.update(), 60 * 60 * 1000);
    }).catch(() => {
      console.warn("Service worker registration failed.");
    });
  }
}

el.appVersion.textContent = `Life RPG Point ${APP_VERSION}`;
el.weightDate.value = todayKey();
renderActivityForm();
bindEvents();
runWeeklyIncome(false);
renderAll();
registerServiceWorker();
