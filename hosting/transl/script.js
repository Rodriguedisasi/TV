/* =========================================================
   Traduction — app mobile (HTML / CSS / JS)
   ========================================================= */

const LANGUAGES = [
  { code: "en", name: "Anglais", label: "EN", speech: "en-US", ocr: "eng" },
  { code: "fr", name: "Français", label: "FR", speech: "fr-FR", ocr: "fra" },
  { code: "es", name: "Espagnol", label: "ES", speech: "es-ES", ocr: "spa" },
  { code: "zh", name: "Chinois", label: "ZH", speech: "zh-CN", ocr: "chi_sim" },
  { code: "hi", name: "Hindi", label: "HI", speech: "hi-IN", ocr: "hin" },
  { code: "ar", name: "Arabe", label: "AR", speech: "ar-SA", ocr: "ara" },
  { code: "bn", name: "Bengali", label: "BN", speech: "bn-BD", ocr: "ben" },
  { code: "pt", name: "Portugais", label: "PT", speech: "pt-PT", ocr: "por" },
  { code: "ru", name: "Russe", label: "RU", speech: "ru-RU", ocr: "rus" },
  { code: "id", name: "Indonésien", label: "ID", speech: "id-ID", ocr: "ind" },
  { code: "ur", name: "Ourdou", label: "UR", speech: "ur-PK", ocr: "urd" },
  { code: "de", name: "Allemand", label: "DE", speech: "de-DE", ocr: "deu" },
  { code: "ja", name: "Japonais", label: "JA", speech: "ja-JP", ocr: "jpn" },
  { code: "ko", name: "Coréen", label: "KO", speech: "ko-KR", ocr: "kor" },
  { code: "it", name: "Italien", label: "IT", speech: "it-IT", ocr: "ita" },
  { code: "tr", name: "Turc", label: "TR", speech: "tr-TR", ocr: "tur" },
  { code: "vi", name: "Vietnamien", label: "VI", speech: "vi-VN", ocr: "vie" },
  { code: "nl", name: "Néerlandais", label: "NL", speech: "nl-NL", ocr: "nld" },
  { code: "pl", name: "Polonais", label: "PL", speech: "pl-PL", ocr: "pol" },
  { code: "sw", name: "Swahili", label: "SW", speech: "sw-KE", ocr: "swa" },
  { code: "ln", name: "Lingala", label: "LN", speech: "ln-CD", ocr: "eng" },
  { code: "lua", name: "Tshiluba", label: "LU", speech: "lua", ocr: "eng" },
];

const DEFAULT_TRANSLATION = "La traduction apparaîtra ici...";
const STORAGE_SETTINGS = "st_settings";
const STORAGE_HISTORY = "st_history";
const STORAGE_CACHE = "st_translation_cache";
const STORAGE_AUTH = "st_auth_users";
const STORAGE_AI_USAGE = "st_ai_usage";

const DEFAULT_SETTINGS = {
  theme: "dark",
  source: "en",
  target: "fr",
  interval: 4,
  floatSize: 58,
  floatOpacity: 1,
  floatVisible: true,
  loggedIn: false,
  userName: null,
  userId: null,
  autoTranslateTyping: true,
  autoCorrectSource: true,
  preprocessImage: true,
  autoDetectLang: true,
  cleanText: true,
  geminiApiKey: "",
  geminiModel: "gemini-2.5-flash",
  subscription: "gratuit",
  ocrHighQuality: false,
  deviceId: null,
  deviceCount: 0,
};

/* ============================ DOM ============================ */
const $ = (id) => document.getElementById(id);

const headerSubtitle = $("headerSubtitle");
const liveDot = $("liveDot");
const offlineBadge = $("offlineBadge");
const installButton = $("installButton");
const userButton = $("userButton");
const themeButton = $("themeButton");
const themeIcon = $("themeIcon");
const themeButtonLabel = $("themeButtonLabel");
const accountDesc = $("accountDesc");
const accountToggle = $("accountToggle");
const themeToggleBtn = $("themeToggleBtn");

const authModal = $("authModal");
const authBackdrop = $("authBackdrop");
const authClose = $("authClose");
const authForm = $("authForm");
const authTitle = $("authTitle");
const authSub = $("authSub");
const authIdLabel = $("authIdLabel");
const authIdentifier = $("authIdentifier");
const authPassword = $("authPassword");
const authPassword2 = $("authPassword2");
const authConfirmField = $("authConfirmField");
const authError = $("authError");
const authSubmit = $("authSubmit");
const authSubmitLabel = $("authSubmitLabel");
const authSubmitSpinner = $("authSubmitSpinner");
const authForgot = $("authForgot");
const authHint = $("authHint");
const toggleAuthPass = $("toggleAuthPass");
const toggleAuthPass2 = $("toggleAuthPass2");
const toggleGeminiKey = $("toggleGeminiKey");
const authSwitch = $("authSwitch");
const authSwitchText = $("authSwitchText");

const views = {
  translate: $("view-translate"),
  history: $("view-history"),
  abonnement: $("view-abonnement"),
  settings: $("view-settings"),
  help: $("view-help"),
};
const navItems = document.querySelectorAll(".nav-item");

const sourceLangSel = $("sourceLang");
const targetLangSel = $("targetLang");
const swapLang = $("swapLang");

const screenFrame = $("screenFrame");
const screenVideo = $("screenVideo");
const screenImage = $("screenImage");
const screenPlaceholder = $("screenPlaceholder");
const overlayLayer = $("overlayLayer");

const captureButton = $("captureButton");
const captureLabel = $("captureLabel");
const scanButton = $("scanButton");
const scanLabel = $("scanLabel");
const autoButton = $("autoButton");
const regionButton = $("regionButton");
const overlayToggle = $("overlayToggle");
const imageButton = $("imageButton");
const imageInput = $("imageInput");
const photoInput = $("photoInput");
const importFileBtn = $("importFileBtn");
const importCameraBtn = $("importCameraBtn");

const sourceLabel = $("sourceLabel");
const sourceFlag = $("sourceFlag");
const sourceLangName = $("sourceLangName");
const sourceMic = $("sourceMic");
const sourceSpeak = $("sourceSpeak");
const confidence = $("confidence");
const clearButton = $("clearButton");
const sourceInput = $("sourceInput");

const targetLabel = $("targetLabel");
const targetFlag = $("targetFlag");
const targetLangName = $("targetLangName");
const resultBox = $("resultBox");
const resultActions = $("resultActions");
const copyButton = $("copyButton");
const speakButton = $("speakButton");
const shareButton = $("shareButton");

const translateButton = $("translateButton");
const buttonSpinner = $("buttonSpinner");
const buttonIcon = $("buttonIcon");
const buttonLabel = $("buttonLabel");

const historyList = $("historyList");
const clearHistory = $("clearHistory");
const clearHistory2 = $("clearHistory2");

const themeToggle = $("themeToggle");
const intervalRange = $("intervalRange");
const intervalValue = $("intervalValue");

const floatSizeRange = $("floatSizeRange");
const floatSizeValue = $("floatSizeValue");
const floatOpacityRange = $("floatOpacityRange");
const floatOpacityValue = $("floatOpacityValue");
const floatVisibleToggle = $("floatVisibleToggle");
const autoTypingToggle = $("autoTypingToggle");
const autoCorrectToggle = $("autoCorrectToggle");
const preprocessToggle = $("preprocessToggle");
const autoDetectToggle = $("autoDetectToggle");
const cleanTextToggle = $("cleanTextToggle");
const exportHistoryBtn = $("exportHistory");
const exportHistoryBtn2 = $("exportHistory2");

const floatButton = $("floatButton");
const floatIcon = $("floatIcon");
const floatSpinner = $("floatSpinner");
const floatMenu = $("floatMenu");
const floatMenuBackdrop = $("floatMenuBackdrop");
const floatMenuClose = $("floatMenuClose");
const floatToggleAuto = $("floatToggleAuto");
const floatToggleAutoLabel = $("floatToggleAutoLabel");
const floatSelectRegion = $("floatSelectRegion");
const floatImportImage = $("floatImportImage");
const floatToggleOverlay = $("floatToggleOverlay");
const floatToggleOverlayLabel = $("floatToggleOverlayLabel");
const floatIntervalRange = $("floatIntervalRange");
const floatIntervalValue = $("floatIntervalValue");
const floatStop = $("floatStop");
const floatSourceLang = $("floatSourceLang");
const floatTargetLang = $("floatTargetLang");
const floatSwapLang = $("floatSwapLang");
const floatTranslateNow = $("floatTranslateNow");
const floatCopyResult = $("floatCopyResult");
const floatSpeakResult = $("floatSpeakResult");
const floatSizeRangeMenu = $("floatSizeRangeMenu");
const floatSizeValueMenu = $("floatSizeValueMenu");
const floatOpacityRangeMenu = $("floatOpacityRangeMenu");
const floatOpacityValueMenu = $("floatOpacityValueMenu");
const floatAutoTyping = $("floatAutoTyping");
const floatAutoTypingValue = $("floatAutoTypingValue");
const floatAutoCorrect = $("floatAutoCorrect");
const floatAutoCorrectValue = $("floatAutoCorrectValue");

const toastEl = $("toast");

const aiInput = $("aiInput");
const aiAskButton = $("aiAskButton");
const aiSpinner = $("aiSpinner");
const aiAskIcon = $("aiAskIcon");
const aiAskLabel = $("aiAskLabel");
const aiAnswer = $("aiAnswer");
const aiClearButton = $("aiClearButton");
const aiBadge = $("aiBadge");
const aiKeyHint = $("aiKeyHint");
const geminiKeyInput = $("geminiKeyInput");
const geminiModelInput = $("geminiModelInput");

const subsCurrentBadge = $("subsCurrentBadge");
const subsCurrentTitle = $("subsCurrentTitle");
const subsDevices = $("subsDevices");
const plansGrid = $("plansGrid");
const btnManageSubs = $("btnManageSubs");
const settingSubscription = $("settingSubscription");
const autoCorrectDesc = $("autoCorrectDesc");
const vipBadge = $("vipBadge");
const promoBanner = $("promoBanner");
const promoUpgrade = $("promoUpgrade");
const ocrHqToggle = $("ocrHqToggle");
const confirmModal = $("confirmModal");
const confirmBackdrop = $("confirmBackdrop");
const confirmTitle = $("confirmTitle");
const confirmMessage = $("confirmMessage");
const confirmCancel = $("confirmCancel");
const confirmOk = $("confirmOk");

/* ===================== Environment ========================= */
const IS_FILE_PROTOCOL = window.location.protocol === "file:";
const IS_SECURE_HTTP = /^https?:$/.test(window.location.protocol);
function isCordova() {
  return typeof window.cordova !== "undefined";
}

/* ========================== State =========================== */
let settings = loadJSON(STORAGE_SETTINGS, DEFAULT_SETTINGS);
let history = loadJSON(STORAGE_HISTORY, []);

let stream = null;
let isLoading = false;
let isScanning = false;
let autoMode = false;
let autoTimer = null;
let translatedText = "";
let lastLines = [];
let currentText = "";
let typingTimer = null;
let correctionApplied = false;
const workers = {};

let showOverlay = true;
let isSelectingRegion = false;
let regionStart = null;
let regionRect = null;
let selectionBox = null;

let translationCache = loadCache();
let lastTranslationOffline = false;
let offlineNoticeShown = false;
let aiLoading = false;

function loadCache() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_CACHE)) || {};
  } catch {
    return {};
  }
}

function saveCache() {
  const keys = Object.keys(translationCache);
  const limit = cacheLimit();
  if (keys.length > limit) {
    keys.slice(0, keys.length - limit).forEach((k) => delete translationCache[k]);
  }
  localStorage.setItem(STORAGE_CACHE, JSON.stringify(translationCache));
}

/* ========================= Helpers ========================== */
function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return Array.isArray(fallback) ? [] : { ...fallback };
    const parsed = JSON.parse(raw);
    if (Array.isArray(fallback)) return Array.isArray(parsed) ? parsed : [];
    return { ...fallback, ...parsed };
  } catch {
    return Array.isArray(fallback) ? [] : { ...fallback };
  }
}

function saveSettings() {
  localStorage.setItem(STORAGE_SETTINGS, JSON.stringify(settings));
}

function saveHistory() {
  localStorage.setItem(STORAGE_HISTORY, JSON.stringify(history));
}

// Icône vectorielle (fichiers img/icons/, classe .ico) — remplace les emojis.
function ico(name) {
    return `<span class="ico ico-${name}" aria-hidden="true"></span>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function lang(code) {
  return LANGUAGES.find((l) => l.code === code) || LANGUAGES[0];
}

let toastTimer = null;
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
}

/* ======================= Translation ======================== */
// Moteur en ligne 1 : Google (endpoint public, couvre plus de langues dont sw/ln/lua)
async function translateGoogle(text, from, to) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(
    text
  )}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("google");
  const data = await response.json();
  const out = (data[0] || []).map((seg) => (seg && seg[0] ? seg[0] : "")).join("");
  if (!out.trim()) throw new Error("google vide");
  return out;
}

// Moteur en ligne 2 : MyMemory (endpoint public sans clé)
async function translateMyMemory(text, source = "en", target = "fr") {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    text
  )}&langpair=${source}|${target}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Impossible de joindre le service de traduction.");
  const data = await response.json();
  const translated = data?.responseData?.translatedText;
  if (!translated || /INVALID|NO CONTENT|QUERY LENGTH/i.test(translated)) {
    throw new Error("Traduction indisponible pour ce texte.");
  }
  return translated;
}

async function translateOnline(text, from, to) {
  try {
    return await translateGoogle(text, from, to);
  } catch {
    return translateMyMemory(text, from, to);
  }
}

/* =================== Offline translation ==================== */
// Dictionnaires mot-à-mot locaux (via pivot anglais), un par langue.
const DICT_LANGS = [
  "en", "fr", "es", "de", "it", "pt", "ru", "ar", "zh", "ja",
  "hi", "bn", "ko", "tr", "nl", "pl", "vi", "id",
];
const dictCache = {};

async function loadDict(from, to) {
  const key = `${from}-${to}`;
  if (key in dictCache) return dictCache[key];
  try {
    const res = await fetch(`vendor/dict/${from}-${to}.json`);
    dictCache[key] = res.ok ? await res.json() : null;
  } catch {
    dictCache[key] = null;
  }
  return dictCache[key];
}

function cacheKey(text, from, to) {
  return `${from}|${to}|${text.toLowerCase()}`;
}

function matchCase(source, translated) {
  if (source.length > 1 && source === source.toUpperCase()) {
    return translated.toUpperCase();
  }
  if (source[0] === source[0].toUpperCase()) {
    return translated.charAt(0).toUpperCase() + translated.slice(1);
  }
  return translated;
}

function applyDict(text, dict) {
  return text.replace(/[\p{L}\p{M}']+/gu, (word) => {
    const hit = dict[word.toLowerCase()];
    return hit ? matchCase(word, hit) : word;
  });
}

async function offlineTranslate(text, from, to) {
  const cached = translationCache[cacheKey(text, from, to)];
  if (cached) return cached;
  if (from === to) return text;

  let english = text;
  if (from !== "en") {
    const d = await loadDict(from, "en");
    if (!d) return null;
    english = applyDict(text, d);
  }

  if (to === "en") return english;

  const d = await loadDict("en", to);
  if (!d) return null;
  return applyDict(english, d);
}

function isOfflinePair(from, to) {
  return (from === "en" || DICT_LANGS.includes(from)) &&
    (to === "en" || DICT_LANGS.includes(to));
}

async function performTranslate(text, from, to) {
  const trimmed = text.trim();
  if (!trimmed) throw new Error("Aucun texte à traduire.");

  if (navigator.onLine) {
    try {
      const result = await translateOnline(trimmed, from, to);
      translationCache[cacheKey(trimmed, from, to)] = result;
      saveCache();
      lastTranslationOffline = false;
      return result;
    } catch {
      /* bascule hors-ligne */
    }
  }

  const fallback = await offlineTranslate(trimmed, from, to);
  if (fallback && fallback.toLowerCase() !== trimmed.toLowerCase()) {
    lastTranslationOffline = true;
    if (!offlineNoticeShown) {
      offlineNoticeShown = true;
      showToast("Mode hors-ligne : traduction mot-à-mot");
    }
    return fallback;
  }
  throw new Error(
    "Traduction hors-ligne indisponible pour ce texte (langue non prise en charge)."
  );
}

/* =================== Correction automatique ================= */
// Corrige le texte source (fautes de frappe / erreurs OCR) avant traduction :
//   - hors-ligne : rapprochement par distance de Levenshtein contre le
//     vocabulaire du dictionnaire local (vendor/dict/<lang>-en.json).
//   - en ligne   : suggestions "misspelling" de LanguageTool (API publique).
const LT_LANGS = {
  en: "en-US", fr: "fr", de: "de-DE", es: "es", it: "it",
  pt: "pt-PT", nl: "nl", pl: "pl", ru: "ru",
};
const vocabCache = {};
const correctionCache = {};
let correctionCacheSize = 0;
let lastOnlineCheck = 0;

function canCallOnline() {
  const now = Date.now();
  if (now - lastOnlineCheck < 1500) return false;
  lastOnlineCheck = now;
  return true;
}

async function loadVocab(code) {
  if (code in vocabCache) return vocabCache[code];
  const dict =
    code === "en" ? await loadDict("en", "fr") : await loadDict(code, "en");
  vocabCache[code] = dict ? new Set(Object.keys(dict)) : null;
  return vocabCache[code];
}

function buildLengthIndex(vocab) {
  const byLen = new Map();
  vocab.forEach((word) => {
    const len = word.length;
    if (!byLen.has(len)) byLen.set(len, []);
    byLen.get(len).push(word);
  });
  return byLen;
}

function levenshteinMax(a, b, max) {
  const al = a.length;
  const bl = b.length;
  if (Math.abs(al - bl) > max) return max + 1;
  if (a === b) return 0;
  const prev = new Array(bl + 1);
  const cur = new Array(bl + 1);
  for (let j = 0; j <= bl; j += 1) prev[j] = j;
  for (let i = 1; i <= al; i += 1) {
    cur[0] = i;
    let rowMin = cur[0];
    const ca = a.charCodeAt(i - 1);
    for (let j = 1; j <= bl; j += 1) {
      const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (cur[j] < rowMin) rowMin = cur[j];
    }
    if (rowMin > max) return max + 1;
    for (let j = 0; j <= bl; j += 1) prev[j] = cur[j];
  }
  return prev[bl];
}

function correctWord(word, vocab, byLen, lowerWord) {
  const lower = lowerWord || word.toLowerCase();
  if (vocab.has(lower)) return word;
  if (lower.length < 3) return word;
  if (/[0-9]/u.test(lower)) return word;
  if (/^[A-Z]{2,5}$/.test(word)) return word;

  const maxDist = lower.length >= 5 ? 2 : 1;
  let best = null;
  let bestDist = maxDist + 1;
  let ties = 0;

  for (let len = lower.length - maxDist; len <= lower.length + maxDist; len += 1) {
    const bucket = byLen.get(len);
    if (!bucket) continue;
    for (let i = 0; i < bucket.length; i += 1) {
      const d = levenshteinMax(lower, bucket[i], maxDist);
      if (d > maxDist) continue;
      if (d < bestDist) {
        bestDist = d;
        best = bucket[i];
        ties = 1;
      } else if (d === bestDist) {
        ties += 1;
      }
    }
  }

  if (!best || ties > 1) return word;
  return matchCase(word, best);
}

async function correctOffline(text, code) {
  const vocab = await loadVocab(code);
  if (!vocab || !vocab.size) return { text, unknown: 0, changed: false };
  const byLen = buildLengthIndex(vocab);
  let unknown = 0;
  let changed = false;
  const out = text.replace(/[\p{L}\p{M}]+/gu, (word, offset, full) => {
    const before = full[offset - 1];
    const after = full[offset + word.length];
    if (before === "'" || before === "\u2019" || after === "'" || after === "\u2019") return word;
    const capAfterSpace =
      /[.!?\n]/.test(before || " ") || (offset > 0 && /\s/.test(full[offset - 1]));
    if (!capAfterSpace && word[0] === word[0].toUpperCase() && /[A-Z]/.test(word[0])) {
      return word;
    }
    const lower = word.toLowerCase();
    if (vocab.has(lower)) return word;
    unknown += 1;
    const fixed = correctWord(word, vocab, byLen, lower);
    if (fixed !== word) {
      changed = true;
      return fixed;
    }
    return word;
  });
  return { text: out, unknown, changed };
}

function decodeEntities(value) {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

async function correctOnline(text, code) {
  const lt = LT_LANGS[code];
  if (!lt || text.length > 20000) return null;
  const body = new URLSearchParams({ text, language: lt });
  const res = await fetch("https://api.languagetool.org/v2/check", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  if (!res.ok) return null;
  const data = await res.json();
  const matches = (data.matches || []).filter((m) => {
    const issueType = (m.rule && m.rule.issueType) || "";
    const ruleId = (m.rule && m.rule.id) || "";
    return issueType === "misspelling" || /MORFOLOGIK|HUNSPELL|SPELL/i.test(ruleId);
  }).filter((m) => typeof m.offset === "number" && typeof m.length === "number");
  if (!matches.length) return text;

  let out = text;
  matches.sort((a, b) => b.offset - a.offset);
  for (const m of matches) {
    const rep = m.replacements && m.replacements[0] && m.replacements[0].value;
    if (typeof rep !== "string" || rep.length < 1 || rep.length > 256) continue;
    out = out.slice(0, m.offset) + decodeEntities(rep) + out.slice(m.offset + m.length);
  }
  return out;
}

async function correctSource(text, code) {
  if (settings.autoCorrectSource === false) return text;
  const raw = text;
  if (!raw || !raw.trim()) return raw;

  const key = `${code}|${raw}`;
  if (key in correctionCache) return correctionCache[key];

  const offline = await correctOffline(raw, code);
  let result = offline.text;
  // Correction avancée (LanguageTool en ligne) réservée aux plans PRO / PREMIUM
  if (navigator.onLine && offline.unknown > 0 && canCallOnline() && canAccessPlan("pro")) {
    try {
      const online = await correctOnline(offline.text, code);
      if (online != null) result = online;
    } catch {
      /* on garde la correction locale */
    }
  }

  correctionCache[key] = result;
  correctionCacheSize += 1;
  if (correctionCacheSize > 300) {
    const keys = Object.keys(correctionCache).slice(0, 100);
    for (const k of keys) {
      delete correctionCache[k];
      correctionCacheSize -= 1;
    }
  }
  return result;
}

/* ================== Qualité OCR ============================= */
// 1) Prétraitement : agrandissement des petites zones + niveaux de gris,
//    étirement du contraste et accentuation. Améliore nettement la précision
//    de Tesseract sur les captures d'écran ternes ou floues.
function preprocessImage(canvas) {
  const srcW = canvas.width;
  const srcH = canvas.height;
  if (!srcW || !srcH) return canvas;

  // OCR haute précision (PRO / PREMIUM) : agrandissement et accentuation renforcés
  const hq = settings.ocrHighQuality === true && canAccessPlan("pro");
  const scale = hq
    ? srcW < 1400
      ? Math.min(2.5, Math.max(1.4, 1500 / srcW))
      : 1
    : srcW < 900
      ? Math.min(2, Math.max(1.2, 1100 / srcW))
      : 1;
  const W = Math.round(srcW * scale);
  const H = Math.round(srcH * scale);

  const out = document.createElement("canvas");
  out.width = W;
  out.height = H;
  const ctx = out.getContext("2d", { willReadFrequently: true });
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(canvas, 0, 0, W, H);

  const img = ctx.getImageData(0, 0, W, H);
  const d = img.data;
  const n = W * H;
  const gray = new Float32Array(n);
  const hist = new Uint32Array(256);

  for (let p = 0, i = 0; p < n; p += 1, i += 4) {
    const l = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
    gray[p] = l;
    hist[Math.round(l)] += 1;
  }

  let cum = 0;
  let p2 = 0;
  let p98 = 255;
  const t2 = n * 0.02;
  const t98 = n * 0.98;
  for (let b = 0; b < 256; b += 1) {
    cum += hist[b];
    if (p2 === 0 && cum >= t2) p2 = b;
    if (cum >= t98) {
      p98 = b;
      break;
    }
  }
  if (p98 < p2) p98 = p2;
  const rng = Math.max(28, p98 - p2);

  const outLum = new Uint8ClampedArray(n);
  for (let y = 0; y < H; y += 1) {
    for (let x = 0; x < W; x += 1) {
      const p = y * W + x;
      const stretched = ((gray[p] - p2) / rng) * 255;
      const lap =
        gray[p] * 5 -
        (x > 0 ? gray[p - 1] : gray[p]) -
        (x < W - 1 ? gray[p + 1] : gray[p]) -
        (y > 0 ? gray[p - W] : gray[p]) -
        (y < H - 1 ? gray[p + W] : gray[p]);
      const v = stretched + lap * (hq ? 0.8 : 0.55);
      outLum[p] = v < 0 ? 0 : v > 255 ? 255 : v;
    }
  }

  for (let p = 0, i = 0; p < n; p += 1, i += 4) {
    const v = outLum[p];
    d[i] = d[i + 1] = d[i + 2] = v;
    d[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return out;
}

// 2) Détection automatique de la langue source :
//    - script (cyrillique, arabe, devanagari, bengali, CJK...) => immédiat,
//    - sinon score du vocabulaire local (vendor/dict/<lang>-en.json) pour
//      départager les langues latines (en/fr/es/de/it/pt/nl/pl).
function detectScript(text) {
  if (/[\u0980-\u09FF]/.test(text)) return "bn";
  if (/[\u0900-\u097F]/.test(text)) return "hi";
  if (/[\u0600-\u06FF\u0750-\u077F]/.test(text)) return "ar";
  if (/[\u0400-\u04FF]/.test(text)) return "ru";
  if (/[\uAC00-\uD7AF]/.test(text)) return "ko";
  if (/[\u3040-\u30FF]/.test(text)) return "ja";
  if (/[\u4E00-\u9FFF\u3400-\u4DBF]/.test(text)) return "zh";
  return "latin";
}

const normVocabCache = {};
function normWord(word) {
  return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

async function scoreLangVocab(text, code) {
  const vocab = await loadVocab(code);
  if (!vocab || !vocab.size) return -1;
  let ns = normVocabCache[code];
  if (!ns) {
    ns = new Set();
    vocab.forEach((w) => ns.add(normWord(w)));
    normVocabCache[code] = ns;
  }
  let total = 0;
  let hits = 0;
  const tokens = text.match(/[\p{L}\p{M}]{3,}/gu) || [];
  for (const t of tokens) {
    total += 1;
    if (ns.has(normWord(t.toLowerCase()))) hits += 1;
  }
  return total ? hits / total : -1;
}

const LATIN_VOCAB_CANDIDATES = ["en", "fr", "es", "de", "it", "pt", "nl", "pl"];

async function detectSourceLanguage(text, current) {
  const script = detectScript(text);
  if (script !== "latin") {
    if (script !== current && LANGUAGES.some((l) => l.code === script)) return script;
    return current;
  }
  const words = (text.match(/[\p{L}\p{M}]{3,}/gu) || []).length;
  if (words < 3) return current;
  const scores = await Promise.all(
    LATIN_VOCAB_CANDIDATES.map((c) => scoreLangVocab(text, c).then((score) => ({ code: c, score })))
  );
  scores.sort((a, b) => b.score - a.score);
  const best = scores[0];
  const cur = scores.find((s) => s.code === current) || { score: -1 };
  if (best && best.score >= 0.2 && best.score > cur.score + 0.12) return best.code;
  return current;
}

// 3) Nettoyage du texte reconnu : fusionne les lignes coupées par l'OCR et
//    corrige les espaces/ponctuation parasites.
function cleanOcrText(raw) {
  const src = String(raw || "");
  const lines = src
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
  const merged = [];
  for (const line of lines) {
    const prev = merged[merged.length - 1];
    if (
      prev !== undefined &&
      prev.length > 0 &&
      !/[.:;,!?…»"'\u201d]$/u.test(prev) &&
      /^[\p{Ll}(«"'\d]/u.test(line)
    ) {
      merged[merged.length - 1] = prev + " " + line;
    } else {
      merged.push(line);
    }
  }
  let text = merged.join("\n");
  text = text.replace(/\s+([,.;:!?%)\u2019'"»])/g, "$1");
  text = text.replace(/([(\u201c«])\s+/g, "$1");
  return text
    .split("\n")
    .map((l) => l.replace(/\s{2,}/g, " ").replace(/^\s+|\s+$/g, ""))
    .join("\n");
}

// Alertes (throttlées) pour la faible confiance et le changement de langue.
const LOW_CONF_THRESHOLD = 55;
let lastLowConfNoticeAt = 0;
let lastLangDetectNoticeAt = 0;

function maybeWarnLowConfidence(conf) {
  const now = Date.now();
  if (conf >= LOW_CONF_THRESHOLD || now - lastLowConfNoticeAt < 8000) return;
  lastLowConfNoticeAt = now;
  showToast("Reconnaissance peu fiable — vérifie ou édite le texte");
}

async function notifyLangDetected(code) {
  const now = Date.now();
  if (now - lastLangDetectNoticeAt < 10000) return;
  lastLangDetectNoticeAt = now;
  showToast(`Langue source détectée : ${lang(code).name}`);
}

/* ========================== OCR ============================= */
async function getWorker(langCode) {
  let target = lang(langCode).ocr;
  if (workers[target]) return workers[target];

  const base = new URL("./vendor/", window.location.href).href;
  const options = {
    workerPath: base + "worker.min.js",
    corePath: base + "core",
    langPath: base + "lang",
    workerBlobURL: false,
    gzip: true,
  };

  scanLabel.textContent = "Chargement...";
  try {
    workers[target] = await Tesseract.createWorker(target, 1, options);
  } catch (err) {
    if (target !== "eng") {
      try {
        target = "eng";
        workers[target] = await Tesseract.createWorker("eng", 1, options);
      } catch (err2) {
        throw ocrLoadError(err2);
      }
    } else {
      throw ocrLoadError(err);
    }
  }
  return workers[target];
}

function ocrLoadError(err) {
  if (IS_FILE_PROTOCOL) {
    return new Error(
      "OCR indisponible en mode file:// : le WebView bloque les Web Workers et les ressources locales. " +
        "Configure le scheme https://localhost (plugin webview) ou utilise Capacitor."
    );
  }
  return err instanceof Error ? err : new Error("Chargement OCR impossible.");
}

/* ===================== Screen capture ====================== */
async function startCapture() {
  if (!navigator.mediaDevices || typeof navigator.mediaDevices.getDisplayMedia !== "function") {
    showToast(
      isCordova()
        ? "Le partage d'écran natif n'est pas supporté. Importe une image à la place."
        : "Capture d'écran indisponible ici. Importe une image à la place."
    );
    openImagePicker();
    return;
  }
  try {
    stream = await navigator.mediaDevices.getDisplayMedia({
      video: { frameRate: 5 },
      audio: false,
    });
  } catch {
    showToast("Partage d'écran annulé ou non autorisé.");
    return;
  }

  screenVideo.srcObject = stream;
  await screenVideo.play().catch(() => {});
  screenVideo.hidden = false;
  if (screenImage) screenImage.hidden = true;
  if (previewImageUrl) {
    URL.revokeObjectURL(previewImageUrl);
    previewImageUrl = null;
  }
  importedImage = null;
  importedNatural = null;
  screenPlaceholder.hidden = true;
  captureLabel.textContent = "Arrêter";
  updateCaptureButtons();
  liveDot.hidden = false;

  stream.getVideoTracks()[0].addEventListener("ended", stopCapture);
  updateFloatButton();
}

function stopCapture() {
  if (stream) {
    stream.getTracks().forEach((t) => t.stop());
    stream = null;
  }
  screenVideo.srcObject = null;
  screenVideo.hidden = true;
  if (screenImage) screenImage.hidden = !importedImage;
  screenPlaceholder.hidden = !!importedImage;
  captureLabel.textContent = "Partager l'écran";
  updateCaptureButtons();
  liveDot.hidden = true;
  setAuto(false);
  overlayLayer.innerHTML = "";
  lastLines = [];
  updateFloatButton();
}

function grabFrame(cropRect, srcCanvas) {
  const canvas = document.createElement("canvas");
  const source = srcCanvas || null;
  const vw = source ? source.width : screenVideo.videoWidth;
  const vh = source ? source.height : screenVideo.videoHeight;

  if (cropRect && vw > 0 && vh > 0) {
    const frameW = cropRect.scaleW || vw;
    const frameH = cropRect.scaleH || vh;
    const scale = Math.min(frameW / vw, frameH / vh);
    const offX = (frameW - vw * scale) / 2;
    const offY = (frameH - vh * scale) / 2;
    const r = {
      x: Math.min(vw - 1, Math.max(0, Math.round((cropRect.x - offX) / scale))),
      y: Math.min(vh - 1, Math.max(0, Math.round((cropRect.y - offY) / scale))),
      w: Math.max(1, Math.round(cropRect.w / scale)),
      h: Math.max(1, Math.round(cropRect.h / scale)),
    };
    r.w = Math.min(r.w, vw - r.x);
    r.h = Math.min(r.h, vh - r.y);
    if (r.w < 1 || r.h < 1) return null;
    canvas.width = r.w;
    canvas.height = r.h;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(source || screenVideo, r.x, r.y, r.w, r.h, 0, 0, r.w, r.h);
    return canvas;
  }

  canvas.width = vw;
  canvas.height = vh;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(source || screenVideo, 0, 0, canvas.width, canvas.height);
  return canvas;
}

function renderOverlay(lines, translation, translatedLines) {
  if (!showOverlay) {
    overlayLayer.innerHTML = "";
    lastLines = lines;
    return;
  }

  overlayLayer.innerHTML = "";
  lastLines = lines;

  const frameW = screenFrame.clientWidth;
  const frameH = screenFrame.clientHeight;
  const srcW = screenVideo.videoWidth || (importedNatural ? importedNatural.w : 0);
  const srcH = screenVideo.videoHeight || (importedNatural ? importedNatural.h : 0);
  if (!frameW || !srcW || !srcH) return;

  const scale = Math.min(frameW / srcW, frameH / srcH);
  const offsetX = (frameW - srcW * scale) / 2;
  const offsetY = (frameH - srcH * scale) / 2;

  const translations =
    Array.isArray(translatedLines) && translatedLines.length === lines.length
      ? translatedLines
      : (typeof translation === "string" && translation ? [translation] : []);

  lines.forEach((line, idx) => {
    const { x0, y0, x1, y1 } = line.bbox;
    const left = offsetX + x0 * scale;
    const top = offsetY + y0 * scale;
    const w = (x1 - x0) * scale;
    const h = (y1 - y0) * scale;

    const box = document.createElement("div");
    box.className = "detect-box";
    box.style.left = `${left}px`;
    box.style.top = `${top}px`;
    box.style.width = `${w}px`;
    box.style.height = `${h}px`;
    overlayLayer.appendChild(box);

    const t = translations[idx] || translations[0];
    if (t) {
      const tooltip = document.createElement("div");
      tooltip.className = "detect-tooltip";
      tooltip.textContent = t;
      tooltip.style.left = `${Math.max(left, 4)}px`;
      tooltip.style.top = `${top + h + 4}px`;
      tooltip.style.maxWidth = `${frameW - 8}px`;
      overlayLayer.appendChild(tooltip);
    }
  });
}

/* ========================= Result ========================== */
function renderResult() {
  if (isLoading) {
    resultBox.innerHTML =
      '<div class="loading-box">' +
      '<span class="spinner small"></span>' +
      '<span class="loading-text">Traduction en cours...</span>' +
      "</div>";
    resultActions.hidden = true;
    return;
  }

  if (translatedText && translatedText.error) {
    resultBox.innerHTML = `<p class="error-text">${escapeHtml(
      translatedText.error
    )}</p>`;
    resultActions.hidden = true;
    return;
  }

  const text = translatedText || DEFAULT_TRANSLATION;
  const cls = translatedText ? "result-text" : "result-text result-placeholder";
  resultBox.innerHTML = `<p class="${cls}">${escapeHtml(text)}</p>`;
  resultActions.hidden = !translatedText;
}

function showError(message) {
  isLoading = false;
  translatedText = { error: message };
  renderResult();
}

function updateAccountUI() {
  const logged = !!(settings.loggedIn && settings.userName);
  if (userButton) {
    userButton.classList.toggle("active", logged);
    userButton.title = logged ? `Connecté : ${settings.userName}` : "Se connecter / S'inscrire";
  }
  if (!accountDesc || !accountToggle) return;
  if (logged) {
    accountDesc.textContent = `Connecté : ${settings.userName}`;
    accountToggle.textContent = "Se déconnecter";
  } else {
    accountDesc.textContent = firebaseAuth ? "Non connecté (compte en ligne)" : "Non connecté (compte local)";
    accountToggle.textContent = "Se connecter";
  }
}

function updateButtons() {
  const hasText = sourceInput.value.trim().length > 0;
  translateButton.disabled = !hasText || isLoading;

  buttonSpinner.hidden = !isLoading;
  buttonIcon.hidden = isLoading;
  buttonLabel.hidden = isLoading;
  sourceSpeak.hidden = !hasText;
}

function updateFloatButton() {
  const active = !!stream && autoMode;
  floatButton.classList.toggle("active", active);
  floatIcon.hidden = isScanning;
  floatSpinner.hidden = !isScanning;
}

function updateCaptureButtons() {
  const hasSource = !!stream || !!importedImage;
  setButtonLocked(scanButton, !hasSource || isScanning);
  setButtonLocked(regionButton, !hasSource);
  setButtonLocked(overlayToggle, !hasSource);
  overlayToggle.classList.toggle("active", showOverlay);
  setButtonLocked(autoButton, !stream);
}

function setButtonLocked(btn, locked) {
  if (!btn) return;
  btn.classList.toggle("is-locked", !!locked);
  btn.setAttribute("aria-disabled", locked ? "true" : "false");
}

function ensureSource(needStream) {
  if (needStream) {
    if (stream) return true;
    showToast("Lance d'abord le partage de l'écran.");
    return false;
  }
  if (stream || importedImage) return true;
  showToast("Partage l'écran ou importe une image d'abord.");
  return false;
}

function updateFloatMenu() {
  if (!floatMenu) return;
  if (floatToggleAutoLabel) {
    floatToggleAutoLabel.textContent = autoMode ? "Mettre en pause" : "Lancer la traduction auto";
  }
  if (floatToggleOverlayLabel) {
    floatToggleOverlayLabel.textContent = showOverlay ? "Masquer surimpression" : "Afficher surimpression";
  }
  if (floatIntervalRange) floatIntervalRange.value = settings.interval;
  if (floatIntervalValue) floatIntervalValue.textContent = settings.interval + "s";
  if (floatSourceLang) floatSourceLang.value = settings.source;
  if (floatTargetLang) floatTargetLang.value = settings.target;
  if (floatSizeRangeMenu) floatSizeRangeMenu.value = settings.floatSize ?? 58;
  if (floatSizeValueMenu) floatSizeValueMenu.textContent = (settings.floatSize ?? 58) + "px";
  if (floatOpacityRangeMenu) floatOpacityRangeMenu.value = Math.round((settings.floatOpacity ?? 1) * 100);
  if (floatOpacityValueMenu) floatOpacityValueMenu.textContent = Math.round((settings.floatOpacity ?? 1) * 100) + "%";
  if (floatAutoTypingValue) floatAutoTypingValue.textContent = settings.autoTranslateTyping !== false ? "OUI" : "NON";
  if (floatAutoCorrectValue) floatAutoCorrectValue.textContent = settings.autoCorrectSource !== false ? "OUI" : "NON";
}

function openFloatMenu() {
  if (!floatMenu || !floatMenuBackdrop) return;
  updateFloatMenu();
  const rect = floatButton.getBoundingClientRect();
  const menuW = 264;
  const menuH = floatMenu.offsetHeight || 280;
  let left = rect.left + rect.width / 2 - menuW / 2;
  let top = rect.top - menuH - 8;
  if (left < 8) left = 8;
  if (left + menuW > window.innerWidth - 8) left = window.innerWidth - menuW - 8;
  if (top < 8) top = rect.bottom + 8;
  floatMenu.style.left = left + "px";
  floatMenu.style.top = top + "px";
  floatMenu.hidden = false;
  floatMenuBackdrop.hidden = false;
}

function closeFloatMenu() {
  if (!floatMenu || !floatMenuBackdrop) return;
  floatMenu.hidden = true;
  floatMenuBackdrop.hidden = true;
}

/* ====================== Scan / translate ==================== */
function setAuto(enabled) {
  autoMode = enabled;
  autoButton.classList.toggle("active", enabled);
  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
  }
  if (enabled) {
    scan();
    autoTimer = setInterval(scan, settings.interval * 1000);
  }
  updateFloatButton();
}

async function scan() {
  if ((!stream && !importedImage) || isScanning) return;
  const canvas = stream ? grabFrame() : grabFrame(null, importedImage);
  if (!canvas) return;
  await runOcrTranslate(canvas, { showOverlayBoxes: true });
}

async function runOcrTranslate(canvas, options) {
  const showOverlayBoxes = !!(options && options.showOverlayBoxes);
  if (isScanning) return;
    isScanning = true;
    correctionApplied = false;
    scanLabel.textContent = "Scanner...";
    setButtonLocked(scanButton, true);
  updateFloatButton();

  if (!requireLogin()) return;
  try {
    const img = settings.preprocessImage === false ? canvas : preprocessImage(canvas);
    let ocr = await getWorker(settings.source);
    let data = await ocr.recognize(img);

    let lines = (data.lines || []).filter(
      (l) => l.text && l.text.trim() && l.confidence > 35
    );

    currentText =
      lines.map((l) => l.text.trim()).join("\n") || (data.text || "").trim();

    if (settings.autoDetectLang !== false && currentText.trim()) {
      const prevSource = settings.source;
      const detected = await detectSourceLanguage(currentText, settings.source);
      if (detected && detected !== settings.source) {
        const prevOcr = lang(settings.source).ocr;
        setSourceLang(detected);
        await notifyLangDetected(detected);
        if (lang(detected).ocr !== prevOcr) {
          ocr = await getWorker(detected);
          data = await ocr.recognize(img);
          lines = (data.lines || []).filter(
            (l) => l.text && l.text.trim() && l.confidence > 35
          );
          currentText =
            lines.map((l) => l.text.trim()).join("\n") || (data.text || "").trim();
        }
      }
      if (prevSource !== settings.source) updateFloatMenu();
    }

    if (settings.cleanText !== false && currentText.trim()) {
      currentText = cleanOcrText(currentText);
    }

    if (currentText) {
      const cleaned = await correctSource(currentText, settings.source);
      if (cleaned && cleaned !== currentText) {
        currentText = cleaned;
        correctionApplied = true;
      }
    }
    sourceInput.value = currentText;
    clearButton.hidden = currentText.length === 0;
    updateButtons();

    if (lines.length) {
      confidence.hidden = false;
      const conf = Math.round(data.confidence);
      confidence.textContent = `confiance ${conf}%${correctionApplied ? " · corrigé" : ""}`;
      confidence.classList.toggle("low", conf < LOW_CONF_THRESHOLD);
      if (conf < LOW_CONF_THRESHOLD) maybeWarnLowConfidence(conf);
    } else {
      confidence.hidden = true;
    }

    if (!currentText) {
      translatedText = { error: "Aucun texte détecté à l'image." };
      if (showOverlayBoxes) {
        overlayLayer.innerHTML = "";
        lastLines = [];
      }
      renderResult();
      return;
    }

    isLoading = true;
    renderResult();

    try {
      translatedText = await performTranslate(
        currentText,
        settings.source,
        settings.target
      );
      addHistory(currentText, translatedText);
    } catch (err) {
      translatedText = { error: err?.message ?? "Une erreur est survenue." };
    } finally {
      isLoading = false;
      renderResult();
      let translatedLines = null;
      if (showOverlayBoxes && lines.length > 1 && typeof translatedText === "string" && settings.target !== settings.source) {
        try {
          translatedLines = (await Promise.all(
            lines.map(async (l) => {
              try {
                return await translateOnline(l.text.trim(), settings.source, settings.target);
              } catch {
                return l.text.trim();
              }
            })
          )).map((t) => (t && typeof t === "string" ? t : ""));
        } catch {
          translatedLines = null;
        }
      }
      renderOverlay(
        lines,
        showOverlayBoxes && typeof translatedText === "string" ? translatedText : null,
        showOverlayBoxes ? translatedLines : null
      );
    }
  } catch (err) {
    showError("Erreur OCR : " + (err?.message ?? "inconnue"));
  } finally {
    isScanning = false;
    scanLabel.textContent = "Scanner";
    updateCaptureButtons();
    updateFloatButton();
  }
}

async function handleTranslate() {
  if (!sourceInput.value.trim() || isLoading) return;
  if (!requireLogin()) return;

  isLoading = true;
  translatedText = "";
  updateButtons();
  renderResult();

  try {
    const sourceText = await correctSource(sourceInput.value, settings.source);
    if (sourceText !== sourceInput.value) {
      sourceInput.value = sourceText;
      clearButton.hidden = sourceText.length === 0;
    }
    translatedText = await performTranslate(
      sourceText,
      settings.source,
      settings.target
    );
    addHistory(sourceText.trim(), translatedText);
  } catch (err) {
    translatedText = { error: err?.message ?? "Une erreur est survenue." };
  } finally {
    isLoading = false;
    updateButtons();
    renderResult();
  }
}

function cancelTypingTranslate() {
  if (typingTimer) {
    clearTimeout(typingTimer);
    typingTimer = null;
  }
}

async function handleTypingTranslate() {
  typingTimer = null;
  if (!settings.autoTranslateTyping) return;
  if (!sourceInput.value.trim() || isLoading) return;

  isLoading = true;
  updateButtons();
  renderResult();

  try {
    const sourceText = await correctSource(sourceInput.value, settings.source);
    translatedText = await performTranslate(
      sourceText,
      settings.source,
      settings.target
    );
  } catch (err) {
    translatedText = { error: err?.message ?? "Une erreur est survenue." };
  } finally {
    isLoading = false;
    updateButtons();
    renderResult();
  }
}

function scheduleTypingTranslate() {
  cancelTypingTranslate();
  if (!settings.autoTranslateTyping) return;
  if (!sourceInput.value.trim() || isLoading) return;
  typingTimer = setTimeout(handleTypingTranslate, 700);
}

function handleClear() {
  cancelTypingTranslate();
  stopDictation(true);
  sourceInput.value = "";
  currentText = "";
  correctionApplied = false;
  translatedText = "";
  clearButton.hidden = true;
  confidence.hidden = true;
  overlayLayer.innerHTML = "";
  lastLines = [];
  updateButtons();
  renderResult();
}

async function toggleScreenTranslate() {
  if (!stream) {
    await startCapture();
    if (stream) setAuto(true);
  } else {
    setAuto(!autoMode);
  }
  updateFloatButton();
}

/* ======================== Actions =========================== */
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copié dans le presse-papiers");
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showToast("Copié dans le presse-papiers");
    } catch {
      showToast("Copie impossible");
    }
    document.body.removeChild(ta);
  }
}

function speak(text, langCode) {
  if (!("speechSynthesis" in window)) {
    showToast("Synthèse vocale non supportée");
    return;
  }
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang(langCode).speech;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

/* ===================== Dictée vocale ======================== */
let recognition = null;
let isDictating = false;
let dictationBase = "";

function speechRecognitionSupported() {
  return !!((window.SpeechRecognition || window.webkitSpeechRecognition));
}

function getRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!recognition && SR) {
    recognition = new SR();
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.onresult = (event) => {
      let interim = "";
      let final = "";
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const res = event.results[i];
        if (res.isFinal) final += res[0].transcript;
        else interim += res[0].transcript;
      }
      sourceInput.value = dictationBase + final + interim;
      clearButton.hidden = sourceInput.value.length === 0;
      updateButtons();
      sourceInput.dispatchEvent(new Event("input", { bubbles: true }));
    };
    recognition.onerror = (event) => {
      if (event.error === "no-speech") return;
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        showToast("Micro non autorisé");
      } else if (event.error === "aborted") {
        return;
      } else {
        showToast("Erreur de dictée : " + (event.error || "inconnue"));
      }
      stopDictation();
    };
    recognition.onend = () => {
      if (isDictating) {
        try {
          recognition.start();
        } catch {
          /* ignoré */
        }
      }
    };
  }
  if (recognition) recognition.lang = lang(settings.source).speech;
  return recognition;
}

function updateMicState() {
  if (sourceMic) sourceMic.classList.toggle("recording", isDictating);
  if (sourceMic) sourceMic.title = isDictating ? "Arrêter la dictée" : "Dicter à voix haute";
}

function startDictation() {
  if (isDictating) return;
  if (!speechRecognitionSupported()) {
    showToast("Dictée vocale non supportée sur cet appareil");
    return;
  }
  stopDictation(true);
  const rec = getRecognition();
  if (!rec) {
    showToast("Dictée vocale non supportée sur cet appareil");
    return;
  }
  dictationBase = sourceInput.value;
  isDictating = true;
  updateMicState();
  try {
    rec.start();
  } catch {
    isDictating = false;
    updateMicState();
    showToast("Impossible de démarrer la dictée");
  }
}

function stopDictation(quiet) {
  if (isDictating) {
    isDictating = false;
    updateMicState();
  }
  if (recognition) {
    try {
      recognition.stop();
    } catch {
      /* déjà arrêté */
    }
  }
  if (!quiet) showToast("Dictée arrêtée");
}

function updateDictationLang() {
  if (isDictating && recognition) {
    try {
      recognition.lang = lang(settings.source).speech;
    } catch {
      /* ignoré */
    }
  }
}

async function shareText(text) {
  if (navigator.share) {
    try {
      await navigator.share({ text });
    } catch {
      /* annulé */
    }
  } else {
    copyText(text);
  }
}

/* ==================== Assistant IA ========================== */
// Par défaut : IA gratuite sans clé (Pollinations). Si une clé API
// Gemini est fournie dans les Réglages, elle est utilisée à la place.
const DEFAULT_GEMINI_MODEL = "gemini-2.5-flash";
const POLLINATIONS_URL = "https://text.pollinations.ai/";

// Quota IA par jour selon le plan (PREMIUM = illimité)
const AI_DAILY_LIMITS = { gratuit: 5, pro: 50, premium: Infinity };

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadAiUsage() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_AI_USAGE));
    if (raw && raw.date === todayKey() && typeof raw.count === "number") return raw;
  } catch {
    /* ignore */
  }
  return { date: todayKey(), count: 0 };
}

let aiUsage = loadAiUsage();

function saveAiUsage() {
  localStorage.setItem(STORAGE_AI_USAGE, JSON.stringify(aiUsage));
}

function refreshAiUsage() {
  if (aiUsage.date !== todayKey()) {
    aiUsage = { date: todayKey(), count: 0 };
    saveAiUsage();
  }
}

function aiDailyLimit() {
  const limit = AI_DAILY_LIMITS[subscriptionPlanKey()];
  return typeof limit === "number" ? limit : Infinity;
}

function aiRemaining() {
  const limit = aiDailyLimit();
  if (!isFinite(limit)) return Infinity;
  refreshAiUsage();
  return Math.max(0, limit - aiUsage.count);
}

function aiQuotaReached() {
  const limit = aiDailyLimit();
  if (!isFinite(limit)) return false;
  refreshAiUsage();
  return aiUsage.count >= limit;
}

function registerAiUse() {
  if (!isFinite(aiDailyLimit())) return;
  refreshAiUsage();
  aiUsage.count += 1;
  saveAiUsage();
  updateAiHead();
}

function aiKey() {
  return (settings.geminiApiKey || "").trim();
}

function updateAiHead() {
  const usingGemini = !!aiKey();
  const premium = !isFinite(aiDailyLimit());
  if (aiBadge) {
    aiBadge.textContent = premium ? "IA PREMIUM" : usingGemini ? "GEMINI" : "IA GRATUITE";
  }
  if (aiKeyHint) {
    aiKeyHint.hidden = false;
    const source = usingGemini ? "clé Gemini" : "sans clé";
    if (premium) {
      aiKeyHint.textContent = `${source} · illimité`;
    } else {
      aiKeyHint.textContent = `${source} · ${aiRemaining()}/${aiDailyLimit()} aujourd'hui`;
    }
  }
  if (geminiKeyInput && document.activeElement !== geminiKeyInput) {
    geminiKeyInput.value = settings.geminiApiKey || "";
  }
  if (geminiModelInput && document.activeElement !== geminiModelInput) {
    geminiModelInput.value = settings.geminiModel || "";
  }
}

function updateAiButtons() {
  if (aiAskButton) {
    aiAskButton.disabled = aiLoading || !(aiInput && aiInput.value.trim());
    if (aiSpinner) aiSpinner.hidden = !aiLoading;
    if (aiAskIcon) aiAskIcon.hidden = aiLoading;
    if (aiAskLabel) aiAskLabel.hidden = aiLoading;
  }
  if (aiClearButton) {
    const hasText = !!(aiInput && aiInput.value.trim());
    const hasAnswer = !!(aiAnswer && !aiAnswer.hidden);
    aiClearButton.hidden = !(hasText || hasAnswer);
  }
}

function buildAiContext() {
  const src = sourceInput.value.trim();
  const dst = typeof translatedText === "string" ? translatedText.trim() : "";
  if (!src && !dst) return "";
  let ctx = "Contexte : l'utilisateur utilise un traducteur d'écran mobile.";
  if (src) ctx += `\nTexte source (${lang(settings.source).name}) : ${src}`;
  if (dst) ctx += `\nTraduction (${lang(settings.target).name}) : ${dst}`;
  ctx += "\nRéponds de manière claire et concise.";
  return ctx;
}

function renderAiAnswer(text, isError) {
  if (!aiAnswer) return;
  aiAnswer.hidden = false;
  aiAnswer.classList.remove("pending");
  aiAnswer.classList.toggle("error", !!isError);
  aiAnswer.textContent = text;
}

async function askPollinations(question) {
  const messages = [];
  const context = buildAiContext();
  if (context) messages.push({ role: "system", content: context });
  messages.push({ role: "user", content: question });

  const res = await fetch(POLLINATIONS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "openai",
      messages,
      referrer: "rodss-screen-translator",
    }),
  });
  if (!res.ok) throw new Error(`IA indisponible (${res.status}).`);
  const out = (await res.text()).trim();
  if (!out) throw new Error("Réponse vide de l'IA.");
  return out;
}

async function askGemini(question) {
  const key = aiKey();
  if (!key) throw new Error("Clé API Gemini manquante.");

  const model = (settings.geminiModel || DEFAULT_GEMINI_MODEL).trim() || DEFAULT_GEMINI_MODEL;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
    model
  )}:generateContent`;

  const parts = [];
  const context = buildAiContext();
  if (context) parts.push({ text: context + "\n\nQuestion : " });
  parts.push({ text: question });

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": key,
    },
    body: JSON.stringify({ contents: [{ role: "user", parts }] }),
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    /* corps non JSON */
  }

  if (!res.ok) {
    const detail = data && data.error && data.error.message;
    throw new Error(detail || `Erreur API Gemini (${res.status}).`);
  }

  const candidate = data && data.candidates && data.candidates[0];
  const out = (candidate && candidate.content && candidate.content.parts
    ? candidate.content.parts
    : []
  )
    .map((p) => (p && typeof p.text === "string" ? p.text : ""))
    .join("")
    .trim();

  if (!out) {
    throw new Error(
      candidate && candidate.finishReason
        ? `Réponse bloquée (${candidate.finishReason}).`
        : "Réponse vide de l'IA."
    );
  }
  return out;
}

function askAI(question) {
  return aiKey() ? askGemini(question) : askPollinations(question);
}

async function handleAiAsk() {
  if (aiLoading) return;
  const question = (aiInput.value || "").trim();
  if (!question) {
    showToast("Écris d'abord ta question");
    return;
  }

  if (aiQuotaReached()) {
    const plan = SUBSCRIPTION_PLANS[subscriptionPlanKey()] || SUBSCRIPTION_PLANS.gratuit;
    renderAiAnswer(
      `Limite atteinte : ${aiDailyLimit()} questions/jour sur le plan ${plan.label}. ` +
      `Passez à PREMIUM pour l'IA illimitée.`,
      true
    );
    showConfirm(
      `Vous avez utilisé vos ${aiDailyLimit()} questions IA du jour.\n\n` +
      `Passez au plan PREMIUM (${SUBSCRIPTION_PLANS.premium.price}${SUBSCRIPTION_PLANS.premium.period}) pour l'assistant IA illimité (Gemini / Pollinations).`,
      () => switchView("abonnement"),
      "IA illimitée",
      "Voir les offres"
    );
    return;
  }

  aiLoading = true;
  updateAiButtons();
  if (aiAnswer) {
    aiAnswer.hidden = false;
    aiAnswer.classList.remove("error");
    aiAnswer.classList.add("pending");
    aiAnswer.textContent = "L'IA réfléchit...";
  }

  try {
    registerAiUse();
    const answer = await askAI(question);
    renderAiAnswer(answer, false);
  } catch (err) {
    renderAiAnswer((err && err.message) || "Une erreur est survenue.", true);
  } finally {
    aiLoading = false;
    updateAiButtons();
    updateAiHead();
  }
}

function handleAiClear() {
  if (aiInput) aiInput.value = "";
  if (aiAnswer) {
    aiAnswer.hidden = true;
    aiAnswer.textContent = "";
    aiAnswer.classList.remove("error", "pending");
  }
  updateAiButtons();
}


/* ======================== History =========================== */
function addHistory(source, target) {
  const src = (source || "").trim();
  const dst = (target || "").trim();
  if (!src || !dst) return;

  const last = history[0];
  if (last && last.source === src && last.target === dst && last.to === settings.target) {
    return;
  }

  history.unshift({
    source: src,
    target: dst,
    from: settings.source,
    to: settings.target,
    time: Date.now(),
  });
  history = history.slice(0, historyLimit());
  saveHistory();
  renderHistory();
}

function formatTime(ts) {
  const d = new Date(ts);
  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return sameDay ? time : `${d.getDate()}/${d.getMonth() + 1} ${time}`;
}

function renderHistory() {
  if (!history.length) {
    historyList.innerHTML =
      '<div class="empty-state">Aucune traduction pour le moment.<br>Lance un scan ou une traduction pour la voir ici.</div>';
    return;
  }

  historyList.innerHTML = history
    .map((item, index) => {
      const from = lang(item.from).label;
      const to = lang(item.to).label;
      return `
        <div class="history-item" data-index="${index}">
          <div class="history-langs">
            <span class="lang-flag">${from}</span>
            <span class="lang-label"><span class="ico ico-arrow-right"></span></span>
            <span class="lang-flag">${to}</span>
            <span class="history-time">${formatTime(item.time)}</span>
          </div>
          <p class="history-source">${escapeHtml(item.source)}</p>
          <p class="history-target">${escapeHtml(item.target)}</p>
        </div>`;
    })
    .join("");

  historyList.querySelectorAll(".history-item").forEach((node) => {
    node.addEventListener("click", () => {
      const item = history[Number(node.dataset.index)];
      if (!item) return;
      sourceInput.value = item.source;
      translatedText = item.target;
      clearButton.hidden = false;
      updateButtons();
      renderResult();
      switchView("translate");
      showToast("Traduction rechargée");
    });
  });
}

function clearAllHistory() {
  if (!history.length) {
    showToast("Historique déjà vide");
    return;
  }
  history = [];
  saveHistory();
  renderHistory();
  showToast("Historique effacé");
}

function exportHistory() {
  if (!history.length) {
    showToast("Historique vide");
    return;
  }
  const items = history.map((h, i) => {
    const from = lang(h.from || "en").label;
    const to = lang(h.to || settings.target).label;
    return `#${i + 1} \u00b7 ${from} \u2192 ${to} \u00b7 ${formatTime(h.time)}\n${h.source}\n${h.target}`;
  });
  const text = `Rod'ss Traduction \u2014 Historique\n${"\u2550".repeat(38)}\n\n${items.join(
    "\n\n"
  )}`;
  shareText(text);
}

/* ================== Languages & labels UI =================== */
const OFFLINE_LANGS = DICT_LANGS;
const isOfflineLang = (code) => OFFLINE_LANGS.includes(code);

function langOptionLabel(l) {
  const base = isOfflineLang(l.code)
    ? `${l.name}  ·  hors-ligne`
    : `${l.name}  ·  en ligne`;
  return isPremiumLang(l.code) ? `${base}  ·  premium` : base;
}

function fillLangSelect(select, selected) {
  const premium = canAccessPlan("premium");
  select.innerHTML = LANGUAGES.map((l) => {
    const locked = isPremiumLang(l.code) && !premium;
    return `<option value="${l.code}" ${locked ? "disabled" : ""} ${
      l.code === selected ? "selected" : ""
    }>${langOptionLabel(l)}</option>`;
  }).join("");
}

function fillFloatLangSelects() {
  if (!floatSourceLang || !floatTargetLang) return;
  const premium = canAccessPlan("premium");
  const options = LANGUAGES.map((l) => {
    const locked = isPremiumLang(l.code) && !premium;
    return `<option value="${l.code}" ${locked ? "disabled" : ""}>${l.name} (${l.label})${
      locked ? "  ·  premium" : ""
    }</option>`;
  }).join("");
  floatSourceLang.innerHTML = options;
  floatTargetLang.innerHTML = options;
  floatSourceLang.value = settings.source;
  floatTargetLang.value = settings.target;
}

function updateLangUI() {
  const s = lang(settings.source);
  const t = lang(settings.target);

  sourceFlag.textContent = s.label;
  sourceLangName.textContent = s.name;
  sourceLabel.textContent = `TEXTE DÉTECTÉ (${s.label})`;

  targetFlag.textContent = t.label;
  targetLangName.textContent = t.name;
  targetLabel.textContent = `TRADUCTION (${t.label})`;

  headerSubtitle.textContent = `${s.label} \u2794 ${t.label}`;

  sourceLangSel.value = settings.source;
  targetLangSel.value = settings.target;
}

function setSourceLang(code) {
  if (isPremiumLang(code) && !requirePlan("premium", "Langues premium")) {
    updateLangUI();
    return;
  }
  if (code === settings.target) settings.target = settings.source;
  settings.source = code;
  saveSettings();
  updateLangUI();
  updateDictationLang();
}

function setTargetLang(code) {
  if (isPremiumLang(code) && !requirePlan("premium", "Langues premium")) {
    updateLangUI();
    return;
  }
  if (code === settings.source) settings.source = settings.target;
  settings.target = code;
  saveSettings();
  updateLangUI();
}

function swapLanguages() {
  const oldSource = settings.source;
  const oldTarget = settings.target;
  settings.source = oldTarget;
  settings.target = oldSource;

  const oldInput = sourceInput.value;
  if (typeof translatedText === "string" && translatedText) {
    sourceInput.value = translatedText;
  } else {
    sourceInput.value = oldInput;
  }
  translatedText = "";
  clearButton.hidden = sourceInput.value.length === 0;

  saveSettings();
  updateLangUI();
  updateButtons();
  renderResult();
}

/* ======================== Theme ============================= */
function applyTheme(theme) {
  settings.theme = theme;
  document.body.dataset.theme = theme;
  saveSettings();

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "light" ? "#F4F5F8" : "#0A0E17");

  themeToggle.querySelectorAll("button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === theme);
  });
  if (themeIcon) {
    if (theme === "light") {
      themeIcon.innerHTML = '<circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />';
    } else {
      themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />';
    }
  }
  if (themeButton) {
    const next = theme === "dark" ? "clair" : "sombre";
    themeButton.title = `Passer en thème ${next}`;
    themeButton.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  }
  if (themeButtonLabel) {
    themeButtonLabel.textContent = theme === "light" ? "Clair" : "Sombre";
  }
}

/* ======================== Views ============================= */
function switchView(name) {
  Object.entries(views).forEach(([key, el]) => {
    el.classList.toggle("active", key === name);
  });
  const navName = name === "help" ? "settings" : name;
  navItems.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === navName);
  });
  if (name === "abonnement") updateSubscriptionUI();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =================== Floating button drag =================== */
let dragState = null;

floatButton.addEventListener("pointerdown", (event) => {
  dragState = {
    startX: event.clientX,
    startY: event.clientY,
    rect: floatButton.getBoundingClientRect(),
    moved: false,
  };
  floatButton.setPointerCapture(event.pointerId);
});

floatButton.addEventListener("pointermove", (event) => {
  if (!dragState) return;
  const dx = event.clientX - dragState.startX;
  const dy = event.clientY - dragState.startY;

  if (Math.hypot(dx, dy) > 6) dragState.moved = true;
  if (!dragState.moved) return;

  const maxLeft = window.innerWidth - floatButton.offsetWidth - 6;
  const maxTop = window.innerHeight - floatButton.offsetHeight - 6;
  const left = Math.min(Math.max(dragState.rect.left + dx, 6), maxLeft);
  const top = Math.min(Math.max(dragState.rect.top + dy, 6), maxTop);

  floatButton.style.left = `${left}px`;
  floatButton.style.top = `${top}px`;
  floatButton.style.right = "auto";
  floatButton.style.bottom = "auto";
});

floatButton.addEventListener("pointerup", (event) => {
  if (!dragState) return;
  const { moved } = dragState;
  dragState = null;
  if (floatButton.hasPointerCapture(event.pointerId)) {
    floatButton.releasePointerCapture(event.pointerId);
  }
  if (moved) return;
  openFloatMenu();
});

/* ========================= Events =========================== */
captureButton.addEventListener("click", () => {
  if (stream) stopCapture();
  else startCapture();
});

scanButton.addEventListener("click", () => {
  if (!ensureSource(false)) return;
  scan();
});
autoButton.addEventListener("click", () => {
  if (!requirePlan("pro", "Traduction en direct (Auto)")) return;
  if (!ensureSource(true)) return;
  setAuto(!autoMode);
});
if (regionButton) regionButton.addEventListener("click", () => {
  if (!requirePlan("pro", "Sélection de zone")) return;
  if (!ensureSource(false)) return;
  toggleRegionSelect();
});
if (overlayToggle) overlayToggle.addEventListener("click", () => {
  if (!requirePlan("pro", "Surimpression des traductions")) return;
  if (!ensureSource(false)) return;
  showOverlay = !showOverlay;
  overlayToggle.classList.toggle("active", showOverlay);
  if (!showOverlay) overlayLayer.innerHTML = "";
  else if (lastLines.length) renderOverlay(lastLines, typeof translatedText === "string" ? translatedText : null);
});

floatMenuClose?.addEventListener("click", closeFloatMenu);
floatMenuBackdrop?.addEventListener("click", closeFloatMenu);

floatToggleAuto?.addEventListener("click", () => {
  if (!requirePlan("pro", "Traduction en direct (Auto)")) {
    closeFloatMenu();
    return;
  }
  if (!stream) {
    startCapture().then(() => {
      if (stream) setAuto(true);
      closeFloatMenu();
      updateFloatMenu();
    });
    return;
  }
  setAuto(!autoMode);
  closeFloatMenu();
  updateFloatMenu();
});

floatSelectRegion?.addEventListener("click", () => {
  if (!requirePlan("pro", "Sélection de zone")) {
    closeFloatMenu();
    return;
  }
  if (typeof toggleRegionSelect === "function") toggleRegionSelect();
  closeFloatMenu();
});

floatToggleOverlay?.addEventListener("click", () => {
  if (!requirePlan("pro", "Surimpression des traductions")) {
    closeFloatMenu();
    return;
  }
  showOverlay = !showOverlay;
  overlayToggle?.classList.toggle("active", showOverlay);
  if (!showOverlay) overlayLayer.innerHTML = "";
  else if (lastLines.length) renderOverlay(lastLines, typeof translatedText === "string" ? translatedText : null);
  closeFloatMenu();
  updateFloatMenu();
});

floatIntervalRange?.addEventListener("input", (e) => {
  const val = Number(e.target.value);
  settings.interval = val;
  if (floatIntervalValue) floatIntervalValue.textContent = val + "s";
  saveSettings();
  if (autoMode) setAuto(true);
});

floatSourceLang?.addEventListener("change", (e) => {
  setSourceLang(e.target.value);
  if (floatSourceLang) floatSourceLang.value = settings.source;
  if (floatTargetLang) floatTargetLang.value = settings.target;
  if (autoMode) setAuto(true);
});

floatTargetLang?.addEventListener("change", (e) => {
  setTargetLang(e.target.value);
  if (floatSourceLang) floatSourceLang.value = settings.source;
  if (floatTargetLang) floatTargetLang.value = settings.target;
  if (autoMode) setAuto(true);
});

floatSwapLang?.addEventListener("click", () => {
  swapLanguages();
  if (floatSourceLang) floatSourceLang.value = settings.source;
  if (floatTargetLang) floatTargetLang.value = settings.target;
  if (autoMode) setAuto(true);
});

floatTranslateNow?.addEventListener("click", () => {
  closeFloatMenu();
  if (!stream) {
    startCapture().then(() => {
      if (stream) scan();
    });
    return;
  }
  scan();
});

floatCopyResult?.addEventListener("click", () => {
  if (typeof translatedText === "string" && translatedText) {
    copyText(translatedText);
  } else {
    showToast("Aucune traduction à copier");
  }
  closeFloatMenu();
});

floatSpeakResult?.addEventListener("click", () => {
  if (typeof translatedText === "string" && translatedText) {
    speak(translatedText, settings.target);
  } else {
    showToast("Aucune traduction à écouter");
  }
  closeFloatMenu();
});

floatImportImage?.addEventListener("click", () => {
  closeFloatMenu();
  openImagePicker();
});

function setAutoTranslateTyping(enabled) {
  settings.autoTranslateTyping = !!enabled;
  saveSettings();
  if (autoTypingToggle) autoTypingToggle.checked = settings.autoTranslateTyping;
  updateFloatMenu();
  if (enabled && sourceInput.value.trim()) {
    scheduleTypingTranslate();
  } else {
    cancelTypingTranslate();
  }
}

floatAutoTyping?.addEventListener("click", () => {
  setAutoTranslateTyping(settings.autoTranslateTyping === false);
  closeFloatMenu();
});

autoTypingToggle?.addEventListener("change", (e) => {
  setAutoTranslateTyping(e.target.checked);
});

function setAutoCorrect(enabled) {
  settings.autoCorrectSource = !!enabled;
  saveSettings();
  if (autoCorrectToggle) autoCorrectToggle.checked = settings.autoCorrectSource;
  updateFloatMenu();
}

floatAutoCorrect?.addEventListener("click", () => {
  setAutoCorrect(settings.autoCorrectSource === false);
  closeFloatMenu();
});

autoCorrectToggle?.addEventListener("change", (e) => {
  setAutoCorrect(e.target.checked);
});

function setPreprocessImage(enabled) {
  settings.preprocessImage = !!enabled;
  saveSettings();
  if (preprocessToggle) preprocessToggle.checked = settings.preprocessImage;
  updateFloatMenu();
}

preprocessToggle?.addEventListener("change", (e) => {
  setPreprocessImage(e.target.checked);
});

function setOcrHighQuality(enabled) {
  settings.ocrHighQuality = !!enabled;
  saveSettings();
  if (ocrHqToggle) ocrHqToggle.checked = settings.ocrHighQuality;
}

if (ocrHqToggle) {
  ocrHqToggle.addEventListener("change", (e) => {
    if (e.target.checked && !requirePlan("pro", "OCR haute précision")) {
      e.target.checked = false;
      return;
    }
    setOcrHighQuality(e.target.checked);
  });
}

function setAutoDetectLang(enabled) {
  settings.autoDetectLang = !!enabled;
  saveSettings();
  if (autoDetectToggle) autoDetectToggle.checked = settings.autoDetectLang;
  updateFloatMenu();
}

autoDetectToggle?.addEventListener("change", (e) => {
  setAutoDetectLang(e.target.checked);
});

function setCleanText(enabled) {
  settings.cleanText = !!enabled;
  saveSettings();
  if (cleanTextToggle) cleanTextToggle.checked = settings.cleanText;
  updateFloatMenu();
}

cleanTextToggle?.addEventListener("change", (e) => {
  setCleanText(e.target.checked);
});

exportHistoryBtn?.addEventListener("click", exportHistory);
exportHistoryBtn2?.addEventListener("click", exportHistory);

imageButton?.addEventListener("click", openImagePicker);

imageInput?.addEventListener("change", (e) => {
  const file = e.target.files && e.target.files[0];
  importImage(file);
  e.target.value = "";
});

photoInput?.addEventListener("change", (e) => {
  const file = e.target.files && e.target.files[0];
  importImage(file);
  e.target.value = "";
});

importFileBtn?.addEventListener("click", openImagePicker);
importCameraBtn?.addEventListener("click", openCamera);

screenFrame?.addEventListener("click", (e) => {
  if (importedImage || stream || isSelectingRegion) return;
  if (e.target && e.target.closest && e.target.closest(".import-btn")) return;
  openImagePicker();
});

setupImageDrop();

document.addEventListener("paste", (e) => {
  const items = e.clipboardData && e.clipboardData.items;
  if (!items) return;
  for (const item of items) {
    if (item.type && item.type.startsWith("image/")) {
      const file = item.getAsFile();
      if (file) {
        e.preventDefault();
        importImage(file);
        return;
      }
    }
  }
});

floatSizeRangeMenu?.addEventListener("input", (e) => {
  const val = Number(e.target.value);
  settings.floatSize = val;
  if (floatSizeValueMenu) floatSizeValueMenu.textContent = val + "px";
  if (floatSizeValue) floatSizeValue.textContent = val;
  saveSettings();
  applyFloatSettings();
});

floatOpacityRangeMenu?.addEventListener("input", (e) => {
  const val = Number(e.target.value);
  settings.floatOpacity = val / 100;
  if (floatOpacityValueMenu) floatOpacityValueMenu.textContent = val + "%";
  if (floatOpacityValue) floatOpacityValue.textContent = val;
  saveSettings();
  applyFloatSettings();
});

floatStop?.addEventListener("click", () => {
  setAuto(false);
  stopCapture();
  closeFloatMenu();
});
translateButton.addEventListener("click", handleTranslate);
clearButton.addEventListener("click", handleClear);

sourceInput.addEventListener("input", () => {
  clearButton.hidden = sourceInput.value.length === 0;
  updateButtons();
  if (settings.autoTranslateTyping) {
    if (sourceInput.value.trim()) {
      scheduleTypingTranslate();
    } else {
      cancelTypingTranslate();
      translatedText = "";
      renderResult();
    }
  }
});

sourceInput.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") handleTranslate();
});

sourceLangSel.addEventListener("change", (e) => setSourceLang(e.target.value));
targetLangSel.addEventListener("change", (e) => setTargetLang(e.target.value));
swapLang.addEventListener("click", swapLanguages);

copyButton.addEventListener("click", () => {
  if (typeof translatedText === "string") copyText(translatedText);
});

speakButton.addEventListener("click", () => {
  if (typeof translatedText === "string") speak(translatedText, settings.target);
});

sourceSpeak.addEventListener("click", () => {
  if (sourceInput.value.trim()) speak(sourceInput.value, settings.source);
});

sourceMic?.addEventListener("click", () => {
  if (isDictating) stopDictation();
  else startDictation();
});

shareButton.addEventListener("click", () => {
  if (typeof translatedText === "string") {
    shareText(`${sourceInput.value.trim()}\n\n${translatedText}`);
  }
});

if (aiAskButton) aiAskButton.addEventListener("click", handleAiAsk);
if (aiClearButton) aiClearButton.addEventListener("click", handleAiClear);

if (aiInput) {
  aiInput.addEventListener("input", updateAiButtons);
  aiInput.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") handleAiAsk();
  });
}

if (geminiKeyInput) {
  geminiKeyInput.addEventListener("input", (e) => {
    settings.geminiApiKey = e.target.value.trim();
    saveSettings();
    updateAiHead();
  });
}

if (geminiModelInput) {
  geminiModelInput.addEventListener("input", (e) => {
    settings.geminiModel = e.target.value.trim();
    saveSettings();
  });
}

navItems.forEach((btn) =>
  btn.addEventListener("click", () => switchView(btn.dataset.view))
);

const openHelp = $("openHelp");
const helpBack = $("helpBack");
if (openHelp) openHelp.addEventListener("click", () => switchView("help"));
if (helpBack) helpBack.addEventListener("click", () => switchView("settings"));

clearHistory.addEventListener("click", clearAllHistory);
clearHistory2.addEventListener("click", clearAllHistory);

themeToggle.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => applyTheme(btn.dataset.theme));
});

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const next = settings.theme === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const next = settings.theme === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}

/* ================ Auth (Firebase + local) =================== */
let authMode = "login";

/* --- Firebase Auth (email / mot de passe) --------------------- */
let firebaseAuth = null;
let firebaseDb = null;

function firebaseConfigured() {
  const cfg = window.FIREBASE_CONFIG;
  return !!(cfg && cfg.apiKey && cfg.projectId);
}

function initFirebase() {
  if (!firebaseConfigured() || !window.firebase || !firebase.initializeApp) return;
  try {
    if (!firebase.apps || !firebase.apps.length) firebase.initializeApp(window.FIREBASE_CONFIG);
    firebaseAuth = firebase.auth();
    if (typeof firebase.firestore === "function") {
      try {
        firebaseDb = firebase.firestore();
      } catch (e) {
        firebaseDb = null;
      }
    }
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setSession({ id: user.uid, identifier: user.email || user.displayName || user.uid });
        syncUserProfile(user);
      } else {
        settings.loggedIn = false;
        settings.userName = null;
        settings.userId = null;
        settings.subscription = "gratuit";
        saveSettings();
  updateAccountUI();
  updateSubscriptionUI();
  buildHelpToc();
      }
    });
  } catch (err) {
    console.warn("Firebase init échouée :", err);
    firebaseAuth = null;
    firebaseDb = null;
  }
}

/* Enregistre / met à jour le profil dans Firestore (projet rodss-tv) sur
   la collection partagée "users" afin que le tableau de bord admin (TV2)
   puisse compter les utilisateurs de l'application Traduction. */
function syncUserProfile(user) {
  if (!user || !firebaseDb) return;
  const name = user.displayName || (user.email ? user.email.split("@")[0] : "Utilisateur");
  const ref = firebaseDb.collection("users").doc(user.uid);
  ref
    .get()
    .then((doc) => {
      const existing = doc.exists ? doc.data() : null;
      const data = {
        email: user.email || "",
        lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
        apps: firebase.firestore.FieldValue.arrayUnion("transl"),
      };
      if (!existing) {
        data.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        data.name = name;
        data.source = "transl";
      } else if (!existing.name) {
        data.name = name;
      }
      if (existing && existing.subscription && SUBSCRIPTION_PLANS[existing.subscription]) {
        settings.subscription = existing.subscription;
        saveSettings();
      }
      const devices = reconcileDevices(existing && existing.devices);
      data.devices = devices;
      updateSubscriptionUI();
      return ref.set(data, { merge: true });
    })
    .catch((err) => {
      console.warn("Synchronisation du profil impossible :", err);
    });
}

// Met à jour la liste des appareils liés au compte et signale un dépassement.
// Ne bloque jamais l'accès : au pire, l'utilisateur choisit de ne garder que
// l'appareil courant (les autres doivent se reconnecter).
function reconcileDevices(rawDevices) {
  const id = getDeviceId();
  const now = Date.now();
  const limit = deviceLimit();
  let devices = Array.isArray(rawDevices)
    ? rawDevices
        .filter((d) => d && typeof d === "object" && d.id)
        .map((d) => ({ id: d.id, label: d.label || "Appareil", lastSeen: d.lastSeen || 0 }))
    : [];

  const known = devices.find((d) => d.id === id);
  if (known) {
    known.lastSeen = now;
    known.label = deviceLabel();
  } else if (devices.length < limit) {
    devices.push({ id, label: deviceLabel(), lastSeen: now });
  } else {
    warnDeviceLimit(devices, limit, id);
    settings.deviceCount = devices.length;
    saveSettings();
    return devices;
  }
  settings.deviceCount = devices.length;
  saveSettings();
  return devices;
}

function warnDeviceLimit(devices, limit, currentId) {
  const others = devices.filter((d) => d.id !== currentId);
  showConfirm(
    `Votre plan autorise ${limit} appareil${limit > 1 ? "s" : ""} et ${devices.length} sont déjà liés à ce compte.\n\n` +
    `Utilisez « Garder cet appareil » pour retirer les ${others.length} autre(s). ` +
    `Ou passez à un plan supérieur pour utiliser plusieurs appareils.`,
    () => {
      const kept = devices.map((d) => (d.id === currentId ? { ...d, lastSeen: Date.now() } : d))
        .filter((d) => d.id === currentId);
      const keptDevice = kept[0] || { id: currentId, label: deviceLabel(), lastSeen: Date.now() };
      const user = firebaseAuth && firebaseAuth.currentUser;
      if (firebaseDb && user) {
        firebaseDb.collection("users").doc(user.uid)
          .set({ devices: [keptDevice] }, { merge: true })
          .then(() => showToast("Cet appareil est maintenant le seul lié au compte."))
          .catch((err) => console.warn("Mise à jour des appareils impossible :", err));
      }
    },
    "Limite d'appareils",
    "Garder cet appareil"
  );
}

function authErrorMessage(err) {
  const code = err && err.code ? String(err.code) : "";
  const messages = {
    "auth/email-already-in-use": "Cet email est déjà utilisé.",
    "auth/invalid-email": "Adresse email invalide.",
    "auth/weak-password": "Mot de passe trop faible (6 caractères minimum).",
    "auth/user-not-found": "Aucun compte avec cet email.",
    "auth/wrong-password": "Mot de passe incorrect.",
    "auth/invalid-credential": "Email ou mot de passe incorrect.",
    "auth/invalid-login-credentials": "Email ou mot de passe incorrect.",
    "auth/too-many-requests": "Trop de tentatives. Réessaie plus tard.",
    "auth/network-request-failed": "Problème de réseau. Vérifie ta connexion.",
    "auth/operation-not-allowed": "Active la connexion Email/Mot de passe dans la console Firebase.",
    "auth/missing-password": "Entre un mot de passe.",
    "auth/missing-email": "Entre ton adresse email.",
    "auth/user-disabled": "Ce compte a été désactivé. Contacte l'administrateur.",
  };
  return messages[code] || (err && err.message) || "Erreur inconnue.";
}

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_AUTH)) || {};
  } catch {
    return {};
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_AUTH, JSON.stringify(users));
}

function normalizeId(value) {
  return String(value || "").trim().toLowerCase();
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidIdentifier(value) {
  return isEmail(value) || /^[a-zA-Z0-9._-]{3,20}$/.test(value);
}

function randomSalt() {
  if (window.crypto && window.crypto.getRandomValues) {
    const a = new Uint8Array(16);
    window.crypto.getRandomValues(a);
    return Array.from(a, (b) => b.toString(16).padStart(2, "0")).join("");
  }
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

async function hashPassword(password, salt) {
  const data = `${salt}::${password}`;
  if (window.crypto && window.crypto.subtle && window.TextEncoder) {
    const buf = await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(data));
    return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
  }
  let h = 5381;
  for (let i = 0; i < data.length; i += 1) h = ((h << 5) + h + data.charCodeAt(i)) >>> 0;
  return "djb2:" + h.toString(16);
}

function setSession(user) {
  settings.loggedIn = true;
  settings.userName = user.identifier;
  settings.userId = user.id;
  saveSettings();
  updateAccountUI();
}

function clearSession() {
  settings.loggedIn = false;
  settings.userName = null;
  settings.userId = null;
  settings.subscription = "gratuit";
  saveSettings();
  updateAccountUI();
  updateSubscriptionUI();
  if (firebaseAuth) {
    try {
      firebaseAuth.signOut().catch(() => {});
    } catch {
      /* ignoré */
    }
  }
}

async function registerUser(identifier, password) {
  if (firebaseAuth) {
    const value = identifier.trim();
    const cred = await firebaseAuth.createUserWithEmailAndPassword(value, password);
    setSession({ id: cred.user.uid, identifier: cred.user.email || value });
    return;
  }
  const value = identifier.trim();
  const key = normalizeId(value);
  const users = loadUsers();
  if (users[key]) throw new Error("Cet identifiant est déjà utilisé.");
  const salt = randomSalt();
  const hash = await hashPassword(password, salt);
  users[key] = { id: key, identifier: value, email: isEmail(value), salt, hash, createdAt: Date.now() };
  saveUsers(users);
  setSession(users[key]);
}

async function loginUser(identifier, password) {
  if (firebaseAuth) {
    const value = identifier.trim();
    const cred = await firebaseAuth.signInWithEmailAndPassword(value, password);
    setSession({ id: cred.user.uid, identifier: cred.user.email || value });
    return;
  }
  const key = normalizeId(identifier);
  const users = loadUsers();
  const user = users[key];
  if (!user) throw new Error("Aucun compte avec cet identifiant sur cet appareil.");
  const hash = await hashPassword(password, user.salt);
  if (hash !== user.hash) throw new Error("Mot de passe incorrect.");
  setSession(user);
}

function applyAuthMode() {
  if (!authModal) return;
  const reg = authMode === "register";
  authTitle.textContent = reg ? "Créer un compte" : "Se connecter";
  if (authSub) {
    authSub.textContent = firebaseAuth
      ? reg
        ? "Crée ton compte en ligne sécurisé."
        : "Connecte-toi à ton compte pour synchroniser l'app."
      : reg
        ? "Le compte sera enregistré sur cet appareil uniquement."
        : "Compte enregistré sur cet appareil uniquement.";
  }
  if (authIdLabel) authIdLabel.textContent = firebaseAuth ? "Adresse email" : "Email ou nom d'utilisateur";
  if (authIdentifier) authIdentifier.placeholder = firebaseAuth ? "ex. alex@mail.com" : "ex. alex@mail.com ou alex";
  if (authSubmitLabel) authSubmitLabel.textContent = reg ? "S'inscrire" : "Se connecter";
  authConfirmField.hidden = !reg;
  if (authForgot) authForgot.hidden = reg || !firebaseAuth;
  if (authHint) {
    if (reg) {
      authHint.hidden = false;
      authHint.textContent = firebaseAuth
        ? "Le mot de passe doit contenir au moins 6 caractères."
        : "Le mot de passe doit contenir au moins 4 caractères.";
    } else {
      authHint.hidden = true;
      authHint.textContent = "";
    }
  }
  authSwitchText.textContent = reg ? "Déjà un compte ?" : "Pas encore de compte ?";
  authSwitch.textContent = reg ? "Se connecter" : "Créer un compte";
  authPassword.setAttribute("autocomplete", reg ? "new-password" : "current-password");
  resetPasswordVisibility();
}

function showAuthError(message) {
  if (!authError) return;
  authError.textContent = message || "Erreur inconnue.";
  authError.hidden = false;
}

function hidePassword(input, btn) {
  if (!input || !btn) return;
  input.type = "password";
  btn.classList.remove("is-visible");
  btn.setAttribute("aria-pressed", "false");
  btn.setAttribute("aria-label", "Afficher le mot de passe");
}

function resetPasswordVisibility() {
  hidePassword(authPassword, toggleAuthPass);
  hidePassword(authPassword2, toggleAuthPass2);
}

function bindPasswordToggle(btn, input) {
  if (!btn || !input) return;
  btn.addEventListener("click", () => {
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    btn.classList.toggle("is-visible", show);
    btn.setAttribute("aria-pressed", show ? "true" : "false");
    btn.setAttribute("aria-label", show ? "Masquer le mot de passe" : "Afficher le mot de passe");
    input.focus();
    const end = input.value.length;
    try {
      input.setSelectionRange(end, end);
    } catch {
      /* ignoré */
    }
  });
}

async function handleForgotPassword() {
  if (!firebaseAuth) {
    showAuthError("La connexion est indisponible pour le moment. Réessaie plus tard.");
    return;
  }
  const email = (authIdentifier.value || "").trim();
  if (!isEmail(email)) {
    showAuthError("Entre ton adresse email pour recevoir le lien de réinitialisation.");
    authIdentifier.focus();
    return;
  }
  authError.hidden = true;
  authForgot.disabled = true;
  const old = authForgot.textContent;
  authForgot.classList.remove("is-sent");
  authForgot.textContent = "Envoi en cours\u2026";
  try {
    await firebaseAuth.sendPasswordResetEmail(email);
    authForgot.classList.add("is-sent");
    authForgot.textContent = "Email envoy\u00e9 \u2713";
    showToast("Email de r\u00e9initialisation envoy\u00e9 \u00e0 " + email + ". V\u00e9rifie aussi tes spams.");
  } catch (err) {
    authForgot.classList.remove("is-sent");
    authForgot.textContent = old;
    authForgot.disabled = false;
    showAuthError(authErrorMessage(err));
    return;
  }
  setTimeout(() => {
    authForgot.classList.remove("is-sent");
    authForgot.disabled = false;
    authForgot.textContent = old;
  }, 2600);
}

function requireLogin() {
  const logged = !!(settings.loggedIn && settings.userName);
  if (!logged) {
    openAuthModal("login");
    showToast("Vous devez vous connecter pour utiliser l'application");
    return false;
  }
  return true;
}

function openAuthModal(mode) {
  if (!authModal) return;
  authMode = mode === "register" ? "register" : "login";
  authError.hidden = true;
  authError.textContent = "";
  authForm.reset();
  applyAuthMode();
  authModal.hidden = false;
  setTimeout(() => authIdentifier && authIdentifier.focus(), 60);
}

function closeAuthModal() {
  if (authModal) authModal.hidden = true;
}

async function submitAuth(event) {
  event.preventDefault();
  const identifier = authIdentifier.value.trim();
  const password = authPassword.value;
  if (firebaseAuth) {
    if (!identifier) return showAuthError("Entre ton adresse email.");
    if (!isEmail(identifier)) return showAuthError("Adresse email invalide.");
    if (password.length < 6) return showAuthError("Mot de passe : 6 caractères minimum.");
  } else {
    if (!identifier) return showAuthError("Entre un email ou un nom d'utilisateur.");
    if (!isValidIdentifier(identifier))
      return showAuthError("Identifiant invalide : email, ou pseudo de 3 à 20 caractères (lettres, chiffres, . _ -).");
    if (password.length < 4) return showAuthError("Mot de passe : 4 caractères minimum.");
  }
  if (authMode === "register" && password !== authPassword2.value)
    return showAuthError("Les mots de passe ne correspondent pas.");

  const mode = authMode;
  authError.hidden = true;
  authSubmit.disabled = true;
  authSubmit.classList.add("is-loading");
  try {
    if (mode === "register") await registerUser(identifier, password);
    else await loginUser(identifier, password);
    closeAuthModal();
    showToast(mode === "register" ? "Compte créé — connecté" : "Connecté");
  } catch (err) {
    showAuthError(firebaseAuth ? authErrorMessage(err) : (err && err.message ? err.message : "Erreur inconnue."));
  } finally {
    authSubmit.disabled = false;
    authSubmit.classList.remove("is-loading");
  }
}

function doAccountToggle() {
  if (settings.loggedIn && settings.userName) {
    const name = settings.userName;
    clearSession();
    showToast(`Déconnecté (${name})`);
    return;
  }
  openAuthModal("login");
}

if (userButton) {
  userButton.addEventListener("click", doAccountToggle);
}
if (accountToggle) {
  accountToggle.addEventListener("click", doAccountToggle);
}
if (authClose) authClose.addEventListener("click", closeAuthModal);
if (authBackdrop) authBackdrop.addEventListener("click", closeAuthModal);
bindPasswordToggle(toggleAuthPass, authPassword);
bindPasswordToggle(toggleAuthPass2, authPassword2);
bindPasswordToggle(toggleGeminiKey, geminiKeyInput);
if (authForgot) authForgot.addEventListener("click", handleForgotPassword);
if (authSwitch)
  authSwitch.addEventListener("click", () => {
    authMode = authMode === "register" ? "login" : "register";
    authError.hidden = true;
    applyAuthMode();
  });
if (authForm) authForm.addEventListener("submit", submitAuth);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && authModal && !authModal.hidden) closeAuthModal();
});

intervalRange.addEventListener("input", (e) => {
  settings.interval = Number(e.target.value);
  intervalValue.textContent = settings.interval;
  if (typeof floatIntervalValue !== "undefined" && floatIntervalValue) floatIntervalValue.textContent = settings.interval + "s";
  saveSettings();
  if (autoMode) setAuto(true);
});

function applyFloatSettings() {
  if (!floatButton) return;
  if (settings.floatSize) {
    floatButton.style.width = settings.floatSize + "px";
    floatButton.style.height = settings.floatSize + "px";
    if (floatIcon) {
      const s = Math.round(settings.floatSize * 0.45);
      floatIcon.setAttribute("width", s);
      floatIcon.setAttribute("height", s);
    }
    if (floatSpinner) {
      const s2 = Math.round(settings.floatSize * 0.38);
      floatSpinner.style.width = s2 + "px";
      floatSpinner.style.height = s2 + "px";
    }
  }
  if (settings.floatOpacity !== undefined) {
    floatButton.style.opacity = String(settings.floatOpacity);
  }
  if (settings.floatVisible !== false) {
    floatButton.style.display = "";
  } else {
    floatButton.style.display = "none";
  }
}

if (floatSizeRange) {
  floatSizeRange.addEventListener("input", (e) => {
    settings.floatSize = Number(e.target.value);
    if (floatSizeValue) floatSizeValue.textContent = settings.floatSize;
    saveSettings();
    applyFloatSettings();
  });
}
if (floatOpacityRange) {
  floatOpacityRange.addEventListener("input", (e) => {
    settings.floatOpacity = Number(e.target.value) / 100;
    if (floatOpacityValue) floatOpacityValue.textContent = e.target.value;
    saveSettings();
    applyFloatSettings();
  });
}
if (floatVisibleToggle) {
  floatVisibleToggle.addEventListener("change", (e) => {
    settings.floatVisible = e.target.checked;
    saveSettings();
    applyFloatSettings();
  });
}

  if (window.ResizeObserver) {
    new ResizeObserver(() => {
      if (lastLines.length) {
        renderOverlay(lastLines, typeof translatedText === "string" ? translatedText : null);
      }
    }).observe(screenFrame);
  }

function setupRegionSelection() {
  screenFrame.addEventListener("pointerdown", (e) => {
    if (!isSelectingRegion) return;
    const rect = screenFrame.getBoundingClientRect();
    regionStart = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    if (!selectionBox) {
      selectionBox = document.createElement("div");
      selectionBox.style.position = "absolute";
      selectionBox.style.border = "2px dashed var(--primary)";
      selectionBox.style.background = "rgba(255,212,0,0.15)";
      selectionBox.style.pointerEvents = "none";
      selectionBox.style.zIndex = 5;
      overlayLayer.parentElement.appendChild(selectionBox);
    }
    selectionBox.style.display = "block";
    selectionBox.style.left = regionStart.x + "px";
    selectionBox.style.top = regionStart.y + "px";
    selectionBox.style.width = "0px";
    selectionBox.style.height = "0px";
  });

  screenFrame.addEventListener("pointermove", (e) => {
    if (!isSelectingRegion || !regionStart) return;
    const rect = screenFrame.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const left = Math.min(regionStart.x, x);
    const top = Math.min(regionStart.y, y);
    const w = Math.abs(x - regionStart.x);
    const h = Math.abs(y - regionStart.y);
    selectionBox.style.left = left + "px";
    selectionBox.style.top = top + "px";
    selectionBox.style.width = w + "px";
    selectionBox.style.height = h + "px";
    regionRect = {
      x: left,
      y: top,
      w,
      h,
      scaleW: rect.width,
      scaleH: rect.height,
    };
  });

  window.addEventListener("pointerup", (e) => {
    if (!isSelectingRegion) return;
    isSelectingRegion = false;
    regionStart = null;
    if (regionButton) regionButton.classList.remove("active");
    if (selectionBox) selectionBox.style.display = "none";
    if (regionRect && regionRect.w > 20 && regionRect.h > 10) {
      scanRegion();
    }
    regionRect = null;
  });
}

async function scanRegion() {
  if ((!stream && !importedImage) || isScanning) return;
  const crop = regionRect;
  try {
    const canvas = stream ? grabFrame(crop) : grabFrame(crop, importedImage);
    if (!canvas) throw new Error("Impossible de capturer la zone");
    await runOcrTranslate(canvas, { showOverlayBoxes: false });
  } catch (err) {
    showError("Erreur OCR : " + (err?.message ?? "inconnue"));
  }
}

function toggleRegionSelect() {
  if (!stream && !importedImage) return;
  isSelectingRegion = !isSelectingRegion;
  if (regionButton) regionButton.classList.toggle("active", isSelectingRegion);
  if (isSelectingRegion) {
    overlayLayer.innerHTML = "";
    showToast("Sélectionnez une zone à traduire");
  }
}

/* ======================= Image import ======================== */
let previewImageUrl = null;
let importedImage = null;
let importedNatural = null;

function openImagePicker() {
  if (!imageInput) return;
  imageInput.click();
}

function openCamera() {
  if (photoInput) { photoInput.click(); return; }
  openImagePicker();
}

const IMPORT_MAX_W = 1600;

function drawBitmapToCanvas(source, srcW, srcH) {
  const scale = Math.min(1, IMPORT_MAX_W / (srcW || 1));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(srcW * scale));
  canvas.height = Math.max(1, Math.round(srcH * scale));
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
  return canvas;
}

async function loadImageToCanvas(file) {
  // Voie rapide : createImageBitmap gère l'orientation EXIF et de nombreux formats.
  if (typeof createImageBitmap === "function") {
    try {
      let bmp;
      try {
        bmp = await createImageBitmap(file, { imageOrientation: "from-image" });
      } catch (_) {
        bmp = await createImageBitmap(file);
      }
      if (bmp) {
        const canvas = drawBitmapToCanvas(bmp, bmp.width, bmp.height);
        if (bmp.close) bmp.close();
        return canvas;
      }
    } catch (_) {
      /* on tente le repli <img> ci-dessous */
    }
  }

  // Repli : élément <img> classique.
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      const canvas = drawBitmapToCanvas(img, img.naturalWidth, img.naturalHeight);
      URL.revokeObjectURL(url);
      resolve(canvas);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Format d'image non pris en charge"));
    };
    img.src = url;
  });
}

function unsupportedFormatHint(file) {
  const name = (file && file.name ? file.name : "").toLowerCase();
  const type = (file && file.type ? file.type : "").toLowerCase();
  if (/heic|heif/.test(type) || /\.(heic|heif)$/.test(name)) {
    return "Les fichiers HEIC/HEIF (iPhone) ne sont pas décodables par ce navigateur. Utilise une image JPG/PNG, ou prends la photo via l'appareil photo.";
  }
  if (/tiff?/.test(type) || /\.(tif|tiff)$/.test(name)) {
    return "Le format TIFF n'est pas pris en charge par le navigateur. Convertis l'image en JPG ou PNG.";
  }
  return null;
}

function setupImageDrop() {
  if (!screenFrame) return;
  const stop = (e) => { e.preventDefault(); e.stopPropagation(); };
  screenFrame.addEventListener("dragenter", (e) => { stop(e); screenFrame.classList.add("drag-over"); });
  screenFrame.addEventListener("dragover", (e) => { stop(e); screenFrame.classList.add("drag-over"); });
  screenFrame.addEventListener("dragleave", (e) => { stop(e); screenFrame.classList.remove("drag-over"); });
  screenFrame.addEventListener("drop", (e) => {
    stop(e);
    screenFrame.classList.remove("drag-over");
    const dt = e.dataTransfer;
    const file = dt && dt.files && dt.files[0];
    if (file) importImage(file);
  });
  // Empêche le navigateur d'ouvrir le fichier si on le dépose à côté.
  window.addEventListener("dragover", (e) => e.preventDefault());
  window.addEventListener("drop", (e) => { if (!screenFrame.contains(e.target)) e.preventDefault(); });
}

async function importImage(file) {
  if (!file || isScanning) return;
  try {
    scanLabel.textContent = "Chargement...";
    const canvas = await loadImageToCanvas(file);
    if (stream) stopCapture();
    importedImage = canvas;
    importedNatural = { w: canvas.width, h: canvas.height };
    if (screenImage) {
      if (previewImageUrl) URL.revokeObjectURL(previewImageUrl);
      previewImageUrl = URL.createObjectURL(file);
      screenImage.src = previewImageUrl;
      screenImage.hidden = false;
      screenPlaceholder.hidden = true;
    }
    updateCaptureButtons();
    await runOcrTranslate(canvas, { showOverlayBoxes: true });
  } catch (err) {
    const hint = unsupportedFormatHint(file);
    showToast(hint || ("Import impossible : " + (err?.message ?? "image")));
    scanLabel.textContent = "Scanner";
    updateCaptureButtons();
  }
}

/* ====================== PWA install ========================= */
let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installButton.hidden = true;
});

/* ==================== Online / offline ====================== */
function updateOnlineStatus() {
  const offline = !navigator.onLine;
  if (typeof offlineBadge !== "undefined" && offlineBadge) offlineBadge.hidden = !offline;
}

window.addEventListener("online", () => {
  updateOnlineStatus();
  offlineNoticeShown = false;
  showToast("Connexion rétablie");
});

window.addEventListener("offline", () => {
  updateOnlineStatus();
  showToast("Hors-ligne : OCR local et traduction par dictionnaire");
});

/* ======================== Abonnements ======================= */
const SUBSCRIPTION_LEVEL = { free: 0, pro: 1, premium: 2 };

const SUBSCRIPTION_PLANS = {
  gratuit: {
    key: "gratuit",
    label: "GRATUIT",
    icon: "gift",
    price: "0 FC",
    period: "pour toujours",
    color: "#8B93A7",
    quality: "BASE",
    qualityNote: "Traduction essentielle",
    features: [
      "OCR + traduction (10 langues)",
      "Dictionnaire hors-ligne EN/FR",
      "Historique (50) & export",
      "IA gratuite : 5 questions/jour",
      "1 appareil"
    ]
  },
  pro: {
    key: "pro",
    label: "PRO",
    icon: "diamond",
    price: "2 500 FC",
    period: "/ mois",
    color: "#4FA3FF",
    quality: "ILLIMITÉ",
    qualityNote: "Sans limite",
    features: [
      "Tout le contenu GRATUIT",
      "Surimpression & traduction en direct (Auto)",
      "Sélection de zone précise",
      "Correction avancée (LanguageTool + IA)",
      "OCR haute précision",
      "IA : 50 questions/jour",
      "2 appareils",
      "Support prioritaire"
    ]
  },
  premium: {
    key: "premium",
    label: "PREMIUM",
    icon: "crown",
    price: "5 000 FC",
    period: "/ mois",
    color: "#FFD400",
    quality: "VIP",
    qualityNote: "IA & OCR premium",
    features: [
      "Tout le contenu PRO",
      "Assistant IA illimité (Gemini / Pollinations)",
      "12 langues premium débloquées",
      "Historique & cache illimités",
      "Sans publicité",
      "5 appareils + badge VIP",
      "Support VIP 24/7 & avantages"
    ]
  }
};

function subscriptionPlanKey() {
  return SUBSCRIPTION_PLANS[settings.subscription] ? settings.subscription : "gratuit";
}

function canAccessPlan(level) {
  const have = SUBSCRIPTION_LEVEL[subscriptionPlanKey()] ?? SUBSCRIPTION_LEVEL.free;
  return have >= (SUBSCRIPTION_LEVEL[level] ?? SUBSCRIPTION_LEVEL.free);
}

// Langues réservées au plan PREMIUM (assets OCR déjà présents dans vendor/lang)
const PREMIUM_LANGS = ["zh", "ja", "ko", "ar", "hi", "bn", "ur", "ru", "id", "tr", "vi", "pl"];

function isPremiumLang(code) {
  return PREMIUM_LANGS.includes(code);
}

// Limites d'historique / cache selon le plan (PREMIUM = illimité)
function historyLimit() {
  const p = subscriptionPlanKey();
  return p === "premium" ? Infinity : p === "pro" ? 200 : 50;
}

function cacheLimit() {
  const p = subscriptionPlanKey();
  return p === "premium" ? 5000 : p === "pro" ? 1000 : 300;
}

// Nombre d'appareils autorisés par plan
const DEVICE_LIMITS = { gratuit: 1, pro: 2, premium: 5 };

function deviceLimit() {
  return DEVICE_LIMITS[subscriptionPlanKey()] || DEVICE_LIMITS.gratuit;
}

// Identifiant stable de l'appareil courant (persisté localement)
function getDeviceId() {
  if (!settings.deviceId) {
    settings.deviceId =
      (window.crypto && typeof window.crypto.randomUUID === "function")
        ? window.crypto.randomUUID()
        : `dev-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    saveSettings();
  }
  return settings.deviceId;
}

function deviceLabel() {
  const ua = navigator.userAgent || "";
  let os = "Appareil";
  if (/Windows/i.test(ua)) os = "Windows";
  else if (/Android/i.test(ua)) os = "Android";
  else if (/iPhone|iPad|iPod/i.test(ua)) os = "iOS";
  else if (/Macintosh/i.test(ua)) os = "macOS";
  else if (/Linux/i.test(ua)) os = "Linux";
  return os;
}

// Bloque une fonction réservée à un plan et propose l'abonnement
function requirePlan(level, feature) {
  if (canAccessPlan(level)) return true;
  const needed = SUBSCRIPTION_PLANS[level] || SUBSCRIPTION_PLANS.pro;
  showConfirm(
    `« ${feature} » est réservé au plan ${needed.label} (${needed.price}${needed.period}).\n\n` +
    `Débloquez-le dès maintenant pour profiter de toutes les fonctions premium.`,
    () => switchView("abonnement"),
    `${needed.label} requis`,
    "Voir les offres"
  );
  return false;
}

// Applique un libellé d'aide sur un élément verrouillé (et le restaure)
function setLockHint(el, locked, hint) {
  if (!el) return;
  if (locked) {
    if (el.dataset.baseTitle === undefined) {
      el.dataset.baseTitle = el.getAttribute("title") || "";
    }
    el.setAttribute("title", hint);
  } else if (el.dataset.baseTitle !== undefined) {
    if (el.dataset.baseTitle) el.setAttribute("title", el.dataset.baseTitle);
    else el.removeAttribute("title");
    delete el.dataset.baseTitle;
  }
}

// Verrouillage visuel des fonctions selon le plan
function updatePremiumLocks() {
  const pro = canAccessPlan("pro");
  const premium = canAccessPlan("premium");
  const proHint = "Réservé au plan PRO — touchez pour débloquer";

  [autoButton, overlayToggle, regionButton, floatToggleAuto, floatToggleOverlay, floatSelectRegion].forEach((el) => {
    if (!el) return;
    el.classList.toggle("plan-locked", !pro);
    setLockHint(el, !pro, proHint);
  });

  if (ocrHqToggle) {
    const row = ocrHqToggle.closest(".setting-row");
    if (row) row.classList.toggle("plan-locked", !pro);
    setLockHint(row, !pro, proHint);
    ocrHqToggle.checked = settings.ocrHighQuality === true;
  }

  if (vipBadge) vipBadge.hidden = !premium;
  if (promoBanner) promoBanner.hidden = premium;
}

// Réapplique les verrous de langues premium et corrige la sélection courante
function refreshLangLocks() {
  if (!canAccessPlan("premium")) {
    let changed = false;
    if (isPremiumLang(settings.source)) { settings.source = DEFAULT_SETTINGS.source; changed = true; }
    if (isPremiumLang(settings.target)) { settings.target = DEFAULT_SETTINGS.target; changed = true; }
    if (settings.source === settings.target) settings.target = settings.source === "en" ? "fr" : "en";
    if (changed) {
      saveSettings();
      updateLangUI();
    }
  }
  if (sourceLangSel) fillLangSelect(sourceLangSel, settings.source);
  if (targetLangSel) fillLangSelect(targetLangSel, settings.target);
  fillFloatLangSelects();
}

function updateSubscriptionUI() {
  const plan = SUBSCRIPTION_PLANS[subscriptionPlanKey()] || SUBSCRIPTION_PLANS.gratuit;

  if (subsCurrentBadge) {
    subsCurrentBadge.innerHTML = ico(plan.icon) + ' ' + escapeHtml(plan.label);
    subsCurrentBadge.style.background = plan.color;
  }

  if (subsCurrentTitle) {
    subsCurrentTitle.textContent = plan.key === "gratuit"
      ? "Vous êtes sur le plan GRATUIT"
      : `Vous êtes abonné ${plan.label} — profitez de tout le catalogue !`;
  }

  if (settingSubscription) {
    settingSubscription.innerHTML = ico(plan.icon) + ' ' + escapeHtml(plan.label);
    settingSubscription.style.color = plan.color;
  }

  if (autoCorrectDesc) {
    autoCorrectDesc.textContent = canAccessPlan("pro")
      ? "Correction avancée : dictionnaire + LanguageTool en ligne + IA"
      : "Correction de base hors-ligne (dictionnaire) — avancée avec PRO";
  }

  if (subsDevices) {
    if (settings.loggedIn && settings.deviceCount > 0) {
      const limit = deviceLimit();
      const over = settings.deviceCount > limit;
      subsDevices.innerHTML = ico('smartphone') + ` Appareils liés : ${settings.deviceCount} / ${limit}`;
      subsDevices.classList.toggle("over", over);
      subsDevices.hidden = false;
    } else {
      subsDevices.hidden = true;
    }
  }

  updatePremiumLocks();
  refreshLangLocks();
  updateAiHead();
  renderSubscriptionPlans();
}

function renderSubscriptionPlans() {
  const container = plansGrid;
  if (!container) return;

  container.innerHTML = "";

  const order = ["gratuit", "pro", "premium"];
  order.forEach((key, idx) => {
    const plan = SUBSCRIPTION_PLANS[key];
    const isCurrent = key === subscriptionPlanKey();

    const card = document.createElement("div");
    card.className = "plan-card" + (isCurrent ? " current" : "") + (key === "premium" ? " premium" : "") + (key === "pro" ? " recommended" : "");
    card.style.animationDelay = `${Math.min(idx * 60, 240)}ms`;

    const badge = isCurrent
      ? `<span class="plan-current-badge"><span class="ico ico-check"></span> Plan actuel</span>`
      : (key === "pro" ? `<span class="plan-reco-badge"><span class="ico ico-star-filled"></span> Populaire</span>` : "");

    const features = plan.features.map((f) => `<li>${escapeHtml(f)}</li>`).join("");

    const qualityRow = plan.quality
      ? `<div class="plan-quality${key === "premium" ? " plan-quality-gold" : ""}">${plan.quality}<span class="plan-quality-note">${plan.qualityNote || ""}</span></div>`
      : "";

    card.innerHTML = `
      <div class="plan-head">
        <span class="plan-emoji">${ico(plan.icon)}</span>
        <span class="plan-name" style="color:${plan.color}">${plan.label}</span>
      </div>
      <div class="plan-price">${plan.price}<span class="plan-period"> ${plan.period}</span></div>
      ${qualityRow}
      ${badge}
      <ul class="plan-features">${features}</ul>
    `;

    if (key !== "gratuit") {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "plan-btn";
      btn.textContent = isCurrent ? "Renouveler" : "S'abonner";
      btn.addEventListener("click", () => orderSubscription(key));
      card.appendChild(btn);
    } else {
      const tag = document.createElement("div");
      tag.className = "plan-free-tag";
      tag.textContent = "Inclus par défaut";
      card.appendChild(tag);
    }

    container.appendChild(card);
  });
}

function orderSubscription(planKey) {
  const plan = SUBSCRIPTION_PLANS[planKey];
  if (!plan || plan.key === "gratuit") return;
  if (!requireLogin()) return;

  showConfirm(
    `Souscrire au plan ${plan.label} (${plan.price} ${plan.period}) ?\n\n` +
    `1. Payez ${plan.price} par Mobile Money au +243 997 555 148.\n` +
    `2. Envoyez le reçu via WhatsApp.\n` +
    `3. Votre compte sera activé sous 24h.\n\n` +
    `Nous ouvrons WhatsApp avec le message pré-rempli.`,
    () => finaliserAbonnement(plan),
    `Abonnement ${plan.label}`
  );
}

function finaliserAbonnement(plan) {
  const user = firebaseAuth && firebaseAuth.currentUser;
  const email = user && user.email ? user.email : "";
  const name = settings.userName || (email ? email.split("@")[0] : "Utilisateur");

  if (firebaseDb && user) {
    firebaseDb.collection("subscription_requests").doc(user.uid).set({
      email: email,
      name: name,
      plan: plan.key,
      status: "pending",
      source: "transl",
      requestedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true }).catch((err) => {
      console.warn("Impossible d'enregistrer la demande :", err);
    });
  }

  const msg = encodeURIComponent(
    `Bonjour Rod'ss Traduction, je souhaite souscrire au plan ${plan.label} à ${plan.price}${plan.period}.\n` +
    `Nom : ${name}\n` +
    (email ? `Email : ${email}\n` : "") +
    `J'ai effectué le paiement Mobile Money. Merci d'activer mon compte.`
  );
  try {
    window.open(`https://wa.me/243997555148?text=${msg}`, "_blank");
  } catch {
    showToast("Ouvrez WhatsApp +243 997 555 148 pour finaliser.");
  }
  showToast(`Demande ${plan.label} envoyée — activation sous 24h.`);
}

let confirmCallback = null;
function showConfirm(message, onConfirm, title = "Confirmer", okLabel = null) {
  if (!confirmModal) return;
  confirmCallback = typeof onConfirm === "function" ? onConfirm : null;
  if (confirmTitle) confirmTitle.textContent = title;
  if (confirmMessage) confirmMessage.textContent = message;
  if (confirmCancel) confirmCancel.hidden = !confirmCallback;
  if (confirmOk) confirmOk.textContent = okLabel || (confirmCallback ? "OK" : "Fermer");
  confirmModal.hidden = false;
}

function closeConfirm() {
  if (confirmModal) confirmModal.hidden = true;
  confirmCallback = null;
}

if (btnManageSubs) btnManageSubs.addEventListener("click", () => switchView("abonnement"));
if (promoUpgrade) promoUpgrade.addEventListener("click", () => switchView("abonnement"));
if (confirmOk) confirmOk.addEventListener("click", () => {
  const cb = confirmCallback;
  closeConfirm();
  if (typeof cb === "function") cb();
});
if (confirmCancel) confirmCancel.addEventListener("click", closeConfirm);
if (confirmBackdrop) confirmBackdrop.addEventListener("click", closeConfirm);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && confirmModal && !confirmModal.hidden) closeConfirm();
});

/* ========================= Init ============================= */
function init() {
  const valid = LANGUAGES.map((l) => l.code);
  if (!valid.includes(settings.source)) settings.source = DEFAULT_SETTINGS.source;
  if (!valid.includes(settings.target)) settings.target = DEFAULT_SETTINGS.target;
  if (settings.source === settings.target) settings.target = settings.source === "en" ? "fr" : "en";
  saveSettings();

  fillLangSelect(sourceLangSel, settings.source);
  fillLangSelect(targetLangSel, settings.target);
  fillFloatLangSelects();
  applyTheme(settings.theme);
  updateLangUI();
  renderHistory();
renderResult();
  updateButtons();
  updateFloatButton();
  updateCaptureButtons();
  intervalRange.value = settings.interval;
  intervalValue.textContent = settings.interval;

  if (floatSizeRange) floatSizeRange.value = settings.floatSize ?? 58;
  if (floatSizeValue) floatSizeValue.textContent = settings.floatSize ?? 58;
  if (floatOpacityRange) floatOpacityRange.value = ((settings.floatOpacity ?? 1) * 100);
  if (floatOpacityValue) floatOpacityValue.textContent = Math.round((settings.floatOpacity ?? 1) * 100);
  if (floatVisibleToggle) floatVisibleToggle.checked = settings.floatVisible !== false;
  if (autoTypingToggle) autoTypingToggle.checked = settings.autoTranslateTyping !== false;
  if (autoCorrectToggle) autoCorrectToggle.checked = settings.autoCorrectSource !== false;
  if (preprocessToggle) preprocessToggle.checked = settings.preprocessImage !== false;
  if (autoDetectToggle) autoDetectToggle.checked = settings.autoDetectLang !== false;
  if (cleanTextToggle) cleanTextToggle.checked = settings.cleanText !== false;
  if (ocrHqToggle) ocrHqToggle.checked = settings.ocrHighQuality === true;
  updateFloatMenu();
  if (typeof applyFloatSettings === "function") applyFloatSettings();
  updateAiHead();
  updateAiButtons();

  updateOnlineStatus();
  if (overlayToggle) overlayToggle.classList.toggle("active", showOverlay);
  setupRegionSelection();

  initFirebase();

  if (!firebaseAuth && settings.loggedIn && settings.userId) {
    const users = loadUsers();
    if (!users[settings.userId]) {
      settings.loggedIn = false;
      settings.userName = null;
      settings.userId = null;
      saveSettings();
    }
  }
  updateAccountUI();
  updateSubscriptionUI();

  const logged = !!(settings.loggedIn && settings.userName);
  if (!logged) {
    openAuthModal("login");
  }

  setupNativeBackButton();

  if (IS_SECURE_HTTP && "serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

/* ======================== Aide : sommaire ======================= */
function buildHelpToc() {
  const toc = $("helpToc");
  const list = $("helpTocList");
  const helpView = $("view-help");
  if (!toc || !list || !helpView) return;

  const labels = Array.from(helpView.querySelectorAll(".section-label")).filter(
    (el) => !el.closest(".view-head")
  );
  if (labels.length < 2) return;

  labels.forEach((label) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "toc-link";
    btn.textContent = label.textContent.trim();
    btn.addEventListener("click", () => {
      label.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    list.appendChild(btn);
  });

  toc.hidden = false;
}

function handleBackButton() {
  if (authModal && !authModal.hidden) {
    closeAuthModal();
    return;
  }
  if (floatMenu && !floatMenu.hidden) {
    closeFloatMenu();
    return;
  }
  if (views.help && views.help.classList.contains("active")) {
    switchView("settings");
    return;
  }
  const activeNav = document.querySelector(".nav-item.active");
  if (activeNav && activeNav.dataset.view && activeNav.dataset.view !== "translate") {
    switchView("translate");
    return;
  }
  if (window.navigator.app && typeof navigator.app.exitApp === "function") {
    navigator.app.exitApp();
  }
}

function setupNativeBackButton() {
  if (!isCordova()) return;
  const attach = () => document.addEventListener("backbutton", handleBackButton, false);
  if (window.cordova && window.cordova.platformId) attach();
  else document.addEventListener("deviceready", attach, false);
}

init();
