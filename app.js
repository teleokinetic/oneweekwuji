/* ============================================================
   Learn Wuji in One Week — v1 preview app
   Hash routing · data-driven render · accordion · placeholder player
   ============================================================ */

const app = document.getElementById("app");
const byId = (id) => COURSE.items.find((it) => it.id === id);
const lessons = () => COURSE.items.filter((it) => it.kind === "lesson");

/* ---- time helpers (self-narrate timer) ---- */
function fmtTime(secs) {
  secs = Math.max(0, secs | 0);
  const m = Math.floor(secs / 60), s = secs % 60;
  return m + ":" + String(s).padStart(2, "0");
}
function parseDuration(str) {
  if (!str) return 0;
  const [m, s] = String(str).split(":").map((n) => parseInt(n, 10) || 0);
  return m * 60 + s;
}

/* ---- tiny persistence so checks feel real across reloads ---- */
const store = {
  get(k) { try { return JSON.parse(localStorage.getItem("wuji:" + k)); } catch { return null; } },
  set(k, v) { try { localStorage.setItem("wuji:" + k, JSON.stringify(v)); } catch {} }
};

/* ---- completion state (persisted) ---- */
function completedSet() {
  // true first-run: nothing complete. (Pre-seed here only if you want a populated demo.)
  return new Set(store.get("completed") || []);
}
function markComplete(id) {
  const s = completedSet();
  s.add(id);
  // completing any day implies the intro was passed — auto-complete Start Here
  if (/^day\d/.test(id)) s.add("start");
  store.set("completed", [...s]);
}
/* derive each item's status + the current "today" + days done */
function computeState() {
  const done = completedSet();
  let activeId = "next";
  for (const it of COURSE.items) {
    if (it.id === "next") continue;
    if (!done.has(it.id)) { activeId = it.id; break; }
  }
  const doneDays = COURSE.items.filter((it) => it.kind === "lesson" && done.has(it.id)).length;
  return { done, activeId, doneDays };
}
function statusOf(it, st) {
  if (st.done.has(it.id)) return "completed";
  if (it.id === st.activeId) return "active";
  if (it.id === "next") return "after";
  return "upcoming";
}

/* ---- per-view runtime state ---- */
let view = { openIdx: 0, playing: false, fakeTimer: null, timerHandle: null };

/* ---- glyphs (text/CSS placeholders, per the handoff) ---- */
const ICON = {
  check: "✓",
  star: "★",
  chevR: "▸",
  chevD: "▾"
};

/* ====================== ROUTER ====================== */
function route() {
  const hash = location.hash || "#/";
  stopFakePlayer();
  stopTimer();
  window.scrollTo(0, 0);

  if (hash === "#/" || hash === "") return renderHome();

  const m = hash.match(/^#\/(day\d|start|next)$/);
  if (m) {
    const item = byId(m[1]);
    if (item && item.kind === "lesson") return renderLesson(item);
    if (item && item.kind === "article") return renderArticle(item);
  }
  return renderHome();
}
window.addEventListener("hashchange", route);

/* ====================== HOME ====================== */
function renderHome() {
  const st = computeState();
  const totalDays = lessons().length;
  const pct = Math.round((st.doneDays / totalDays) * 100);

  const rows = COURSE.items.map((it) => {
    const status = statusOf(it, st);
    let num;
    if (status === "completed") num = ICON.check;
    else if (status === "after") num = ICON.star;
    else if (status === "active") num = it.num != null ? it.num : '<span class="adot"></span>';
    else num = it.num != null ? it.num : "";
    const subtitle = status === "active" && it.context
      ? `<div class="subtitle">${it.context}</div>` : "";
    const today = status === "active"
      ? `<div class="today">${it.kind === "lesson" ? "Today →" : "Open →"}</div>` : "";
    return `
      <button class="row ${status}" data-go="${it.id}">
        <div class="circle">${num}</div>
        <div class="title">${it.listTitle}${subtitle}</div>
        ${today}
      </button>`;
  }).join("");

  const active = byId(st.activeId);
  let contLabel;
  if (active.kind === "lesson") contLabel = `Continue — Day ${active.num}`;
  else if (st.activeId === "start") contLabel = "Begin — Start here";
  else contLabel = "Review — Where to go next";

  app.innerHTML = `
    <div class="topbar">
      <div class="wordmark">Learn Wuji</div>
      <div class="right">
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        <span class="progress-label">${st.doneDays} of ${totalDays} days</span>
      </div>
    </div>

    <div class="home-wrap">
      <div class="home-body">
        <div class="home-hero">
          <div class="eyebrow home-eyebrow only-mobile">Learn Wuji</div>
          <h1 class="home-h1">${COURSE.title}</h1>
          <p class="home-intro">${COURSE.intro}</p>
          <div class="quote-panel"><p>"${COURSE.quote}"</p></div>
          <div class="progress-row only-mobile">
            <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
            <span class="progress-label">${st.doneDays} of ${totalDays}</span>
          </div>
          <a class="btn-primary continue" href="#/${st.activeId}">${contLabel} <span class="chev">›</span></a>
        </div>

        <div class="home-week">
          <div class="eyebrow week-eyebrow">Your week</div>
          <div class="week-list">${rows}</div>
        </div>
      </div>
    </div>`;

  app.querySelectorAll("[data-go]").forEach((el) =>
    el.addEventListener("click", () => { location.hash = "#/" + el.dataset.go; })
  );
}

/* ====================== LESSON ====================== */
function defaultOpenIdx(item) {
  const i = item.segments.findIndex((s) => s.type === "explore");
  return i >= 0 ? i : 0;
}

function renderLesson(item) {
  view.openIdx = defaultOpenIdx(item);
  view.playing = false;
  paintLesson(item);
}

function paintLesson(item) {
  const total = item.segments.length;
  const active = item.segments[view.openIdx];

  app.innerHTML = `
    <div class="topbar">
      <a class="backlink" href="#/">‹ Your week</a>
      <span class="dayof">Day ${item.num} of 7</span>
    </div>
    <div class="lesson-top-mobile only-mobile">
      <a class="backlink" href="#/">‹ Your week</a>
      <span>Day ${item.num} of 7</span>
    </div>

    <div class="lesson-body">
      <div class="lesson-left">
        <div class="lesson-head">
          <div class="eyebrow clay">${item.eyebrow}</div>
          <h1 class="lesson-h1">${item.title}</h1>
          <p class="lesson-oneliner">${item.oneLiner}</p>
        </div>
        ${heroHTML(active, view.openIdx, total)}
        <div class="step-caption">Step ${view.openIdx + 1} of ${total} in today's session · ~20 min</div>
      </div>

      <div class="lesson-right">
        <div class="eyebrow session-eyebrow">This session</div>
        <div class="accordion">${item.segments.map((s, i) => segHTML(item, s, i)).join("")}</div>
        ${item.closing ? `<div class="lesson-closing">${item.closing}</div>` : ""}
        ${finishBlock(item)}
      </div>
    </div>`;

  wireLesson(item);
}

/* the left-column "hero" is type-aware: audio only where audio lives */
function heroHTML(seg, idx, total) {
  if (seg.type === "self-narrate") return timerHTML(seg);
  if (seg.type === "explore") return playerHTML(seg, idx, total);
  return promptHTML(seg); // recall / read — same frame, no audio
}

/* live countdown — ported from the drafting tool's [!timer] card */
function timerHTML(seg) {
  const secs = parseDuration(seg.duration) || 150;
  return `
    <div class="player timer-hero" data-timer="${secs}">
      <button class="playbtn t-toggle" data-t="toggle" aria-label="Start timer"><div class="triangle"></div></button>
      <div class="meta">
        <div class="now">Self-narrate · timer</div>
        <div class="timer-row">
          <span class="timer-display">${fmtTime(secs)}</span>
          <div class="timer-controls">
            <button class="t-btn" data-t="-30">−30s</button>
            <button class="t-btn" data-t="30">+30s</button>
            <button class="t-btn" data-t="reset">Reset</button>
          </div>
        </div>
      </div>
    </div>`;
}

/* non-audio prompt card for recall / read — mirrors the player frame, no transport */
function promptHTML(seg) {
  const label = seg.type === "recall" ? "From memory" : "Read once, slowly";
  return `
    <div class="player prompt-hero">
      <div class="playbtn static prompt"><span class="prompt-dot"></span></div>
      <div class="meta">
        <div class="now">${label}</div>
        <div class="track-title">${seg.title}</div>
      </div>
    </div>`;
}

function playerHTML(seg, idx, total) {
  const glyph = view.playing
    ? `<div class="triangle"></div>`
    : `<div class="bars"><i></i><i></i></div>`;
  const time = seg.duration ? "0:00" : "—:—";
  return `
    <div class="player">
      <button class="playbtn" data-play aria-label="Play">${glyph}</button>
      <div class="meta">
        <div class="now">Now playing · ${idx + 1} of ${total}</div>
        <div class="track-title">${seg.title}</div>
        <div class="scrub">
          <div class="ptrack"><div class="pfill"></div><div class="knob"></div></div>
          <span class="ptime">${time}</span>
        </div>
      </div>
    </div>`;
}

function segHTML(item, seg, i) {
  if (i === view.openIdx) return segOpenHTML(item, seg, i);

  const isDone = i < view.openIdx;
  const cls = isDone ? "completed" : "upcoming";
  let circle;
  if (isDone) circle = `<div class="scircle">${ICON.check}</div>`;
  else if (seg.type === "self-narrate") circle = `<div class="scircle timer">⏱</div>`;
  else if (seg.type === "explore") circle = `<div class="scircle"><span class="tri"></span></div>`;
  else circle = `<div class="scircle"><span class="dot"></span></div>`;

  const sub = seg.subtitle ? ` <span class="sub">· ${seg.subtitle}</span>` : "";
  const dur = seg.duration || "—:—";
  return `
    <button class="seg ${cls}" data-seg="${i}">
      ${circle}
      <div class="stitle">${seg.title}${sub}</div>
      <div class="sdur">${dur}</div>
      <div class="schev">${ICON.chevR}</div>
    </button>`;
}

function segOpenHTML(item, seg, i) {
  const dur = seg.duration || "—:—";
  const checklist = seg.checklist ? checklistHTML(item.id, i, seg.checklist, seg.revealLabel) : "";
  const success = seg.success ? successHTML(item.id, i, seg.success) : "";
  const placeholder = seg.guidedPlaceholder
    ? `<div class="audio-placeholder">▸ ${seg.guidedPlaceholder} — coming soon</div>` : "";

  let headGlyph;
  if (seg.type === "explore") headGlyph = `<div class="bars"><i></i><i></i></div>`;
  else if (seg.type === "self-narrate") headGlyph = `<span class="head-timer">⏱</span>`;
  else headGlyph = `<span class="head-dot"></span>`;

  return `
    <div class="seg-open">
      <div class="open-head" data-seg="${i}">
        <div class="scircle">${headGlyph}</div>
        <div class="stitle">${seg.title}${seg.subtitle ? ` <span style="font-weight:400;color:var(--t-muted-2)">· ${seg.subtitle}</span>` : ""}</div>
        <div class="sdur">${dur}</div>
        <div class="schev">${ICON.chevD}</div>
      </div>
      <div class="seg-body">
        ${seg.body}
        ${checklist}
        ${placeholder}
        ${success}
      </div>
    </div>`;
}

function checklistHTML(itemId, segIdx, items, revealLabel) {
  const saved = store.get(`chk:${itemId}:${segIdx}`) || {};
  const lis = items.map((txt, n) => {
    const on = saved[n] ? "checked" : "";
    return `<li><span class="box ${on}" data-chk="${n}">${saved[n] ? ICON.check : ""}</span><span class="ctext">${txt}</span></li>`;
  }).join("");
  // collapsed by default: narrate / recall from memory first, then reveal to self-check
  const label = revealLabel || "Check the cues you found";
  return `
    <details class="cuecheck">
      <summary>${label}</summary>
      <ul class="checklist" data-checklist="${itemId}:${segIdx}">${lis}</ul>
    </details>`;
}

function successHTML(itemId, segIdx, text) {
  const on = store.get(`taste:${itemId}:${segIdx}`) ? "checked" : "";
  return `
    <div class="success">
      <div class="slabel">${ICON.check} Success sensation</div>
      <p class="stext">${text}</p>
      <div class="check" data-taste="${itemId}:${segIdx}">
        <span class="box ${on}">${on ? ICON.check : ""}</span>
        <span>I got a taste of this</span>
      </div>
    </div>`;
}

/* completion block at the bottom of every day / article */
function finishBlock(item) {
  const done = completedSet().has(item.id);
  let label, complete, goto, glyph;
  if (item.id === "start") {
    // entry point: read the intro, then go straight into Day 1
    label = "Begin Day One"; complete = "start"; goto = "#/day1"; glyph = "›";
  } else if (item.id === "next") {
    // perpetual reference — no completion, just return
    label = "Back to your week"; complete = ""; goto = "#/"; glyph = "›";
  } else {
    // a day's lesson
    label = done ? "Back to your week" : "Mark day complete";
    complete = item.id; goto = "#/"; glyph = done ? "›" : ICON.check;
  }
  return `
    <div class="day-finish">
      <button class="btn-primary finish-btn" data-finish data-complete="${complete}" data-goto="${goto}">${label} <span class="chev">${glyph}</span></button>
    </div>`;
}

/* ---- wiring ---- */
function wireLesson(item) {
  app.querySelectorAll("[data-finish]").forEach((el) =>
    el.addEventListener("click", () => {
      if (el.dataset.complete) markComplete(el.dataset.complete);
      location.hash = el.dataset.goto || "#/";
    })
  );
  app.querySelectorAll("[data-seg]").forEach((el) =>
    el.addEventListener("click", () => {
      const i = +el.dataset.seg;
      view.openIdx = i;
      view.playing = false;
      stopFakePlayer();
      stopTimer();
      paintLesson(item);
    })
  );
  const playBtn = app.querySelector("[data-play]");
  if (playBtn) playBtn.addEventListener("click", () => togglePlay(item));

  // live self-narrate timer (the play/pause circle IS the start control)
  const timerEl = app.querySelector(".timer-hero");
  if (timerEl) {
    let total = parseInt(timerEl.dataset.timer, 10) || 150;
    let remaining = total, ticking = false;
    const disp = timerEl.querySelector(".timer-display");
    const toggle = timerEl.querySelector(".t-toggle");
    const PLAY = `<div class="triangle"></div>`;
    const PAUSE = `<div class="bars"><i></i><i></i></div>`;
    const render = () => { disp.textContent = fmtTime(remaining); };
    const setIcon = (running) => {
      toggle.innerHTML = running ? PAUSE : PLAY;
      toggle.setAttribute("aria-label", running ? "Pause timer" : "Start timer");
    };
    const stop = () => { stopTimer(); ticking = false; setIcon(false); };
    timerEl.querySelectorAll("[data-t]").forEach((b) =>
      b.addEventListener("click", () => {
        const t = b.dataset.t;
        if (t === "toggle") {
          if (ticking) { stop(); return; }
          ensureAudio(); // unlock audio within the user gesture so the end-bell can play
          if (remaining <= 0) remaining = total;
          ticking = true; setIcon(true);
          view.timerHandle = setInterval(() => {
            remaining--;
            if (remaining <= 0) { stop(); disp.textContent = "done ✓"; chime(); return; }
            render();
          }, 1000);
        } else if (t === "reset") {
          stop(); remaining = total; render();
        } else { // ±30s
          total = Math.max(30, total + parseInt(t, 10));
          timerEl.dataset.timer = total;
          remaining = total; render();
        }
      })
    );
  }

  // checklists
  app.querySelectorAll(".checklist").forEach((ul) => {
    const [itemId, segIdx] = ul.dataset.checklist.split(":");
    ul.querySelectorAll("[data-chk]").forEach((box) =>
      box.addEventListener("click", () => {
        const n = box.dataset.chk;
        const key = `chk:${itemId}:${segIdx}`;
        const saved = store.get(key) || {};
        saved[n] = !saved[n];
        store.set(key, saved);
        box.classList.toggle("checked", saved[n]);
        box.textContent = saved[n] ? ICON.check : "";
      })
    );
  });

  // success "got a taste"
  app.querySelectorAll("[data-taste]").forEach((el) =>
    el.addEventListener("click", () => {
      const key = `taste:${el.dataset.taste}`;
      const next = !store.get(key);
      store.set(key, next);
      const box = el.querySelector(".box");
      box.classList.toggle("checked", next);
      box.textContent = next ? ICON.check : "";
    })
  );
}

/* ---- placeholder player: no audio, just a living progress bar ---- */
function togglePlay(item) {
  view.playing = !view.playing;
  const seg = item.segments[view.openIdx];
  const playBtn = app.querySelector("[data-play]");
  const fill = app.querySelector(".player .pfill");
  const knob = app.querySelector(".player .knob");

  // pause (two bars) while "playing"; play triangle while paused
  playBtn.innerHTML = view.playing
    ? `<div class="bars"><i></i><i></i></div>`
    : `<div class="triangle"></div>`;

  stopFakePlayer();
  if (view.playing && seg.duration) {
    let p = parseFloat(fill.style.width) || 0;
    view.fakeTimer = setInterval(() => {
      p += 0.6;
      if (p >= 100) { p = 100; stopFakePlayer(); }
      fill.style.width = p + "%";
      knob.style.left = p + "%";
    }, 120);
  }
}
function stopFakePlayer() {
  if (view.fakeTimer) { clearInterval(view.fakeTimer); view.fakeTimer = null; }
}
function stopTimer() {
  if (view.timerHandle) { clearInterval(view.timerHandle); view.timerHandle = null; }
}

/* gentle end-of-timer bell (Web Audio — no asset). Unlocked on the Start gesture. */
let audioCtx = null;
function ensureAudio() {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!audioCtx) audioCtx = new AC();
    if (audioCtx.state === "suspended") audioCtx.resume();
  } catch { audioCtx = null; }
  return audioCtx;
}
function chime() {
  const ctx = ensureAudio();
  if (!ctx) return;
  const now = ctx.currentTime;
  // two soft sine tones a rising fifth apart, with a bell-like decay
  [[880, 0], [1318.5, 0.14]].forEach(([freq, t]) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    const start = now + t;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.16, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 1.6);
    osc.connect(gain).connect(ctx.destination);
    osc.start(start);
    osc.stop(start + 1.7);
  });
}

/* ====================== ARTICLE ====================== */
function renderArticle(item) {
  app.innerHTML = `
    <div class="topbar">
      <a class="backlink" href="#/">‹ Your week</a>
      <span class="dayof">${item.id === "start" ? "Before you begin" : "After the week"}</span>
    </div>
    <div class="lesson-top-mobile only-mobile">
      <a class="backlink" href="#/">‹ Your week</a>
    </div>
    <article class="article">${item.html}${finishBlock(item)}</article>`;

  app.querySelectorAll("[data-finish]").forEach((el) =>
    el.addEventListener("click", () => {
      if (el.dataset.complete) markComplete(el.dataset.complete);
      location.hash = el.dataset.goto || "#/";
    })
  );
}

/* ====================== GO ====================== */
route();
