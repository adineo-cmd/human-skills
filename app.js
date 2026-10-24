/* humanity/skills — registry engine */

(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);

  /* ── flatten dataset ─────────────────────────────────────────── */

  const RAW_PARTS = [SKILLS_PART1, SKILLS_PART2, SKILLS_PART3, SKILLS_PART4, SKILLS_PART5, SKILLS_PART6];
  const PARTS = {};
  RAW_PARTS.forEach(part => {
    for (const [domainId, list] of Object.entries(part)) {
      if (!PARTS[domainId]) PARTS[domainId] = [];
      PARTS[domainId].push(...list);
    }
  });
  const DOMAIN_BY_ID = Object.fromEntries(DOMAINS.map(d => [d.id, d]));

  const ALL = [];
  for (const [domainId, list] of Object.entries(PARTS)) {
    list.forEach(([name, desc, era, p, diff]) => {
      ALL.push({
        id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        name, desc, era, p, diff, domain: domainId
      });
    });
  }

  const hash = (s) => {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0);
  };
  ALL.forEach(s => { s.h = hash(s.name); });
  ALL.forEach(s => { s.trend = s.era * 3 + (s.h % 6) + Math.max(0, s.p - 7); });

  const DOMAIN_COUNT = {};
  ALL.forEach(s => { DOMAIN_COUNT[s.domain] = (DOMAIN_COUNT[s.domain] || 0) + 1; });
  const ERA_COUNT = {};
  ALL.forEach(s => { ERA_COUNT[s.era] = (ERA_COUNT[s.era] || 0) + 1; });

  /* ── formatting helpers ──────────────────────────────────────── */

  const fmtCount = (p) => {
    const v = Math.pow(10, p);
    if (v >= 1e9) return (v / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
    if (v >= 1e6) return (v / 1e6).toFixed(v >= 1e8 ? 0 : 1).replace(/\.0$/, "") + "M";
    if (v >= 1e3) return (v / 1e3).toFixed(0) + "K";
    return Math.round(v).toString();
  };

  const DIFF_LABELS = ["Novice", "Apprentice", "Journeyman", "Expert", "Master"];
  const AGE_NOTES = [
    "Older than writing, passed hand to hand ever since.",
    "Refined across many civilizations and still in use.",
    "Carried through the medieval world into ours.",
    "Born of engines, workshops and standard parts.",
    "A twentieth-century addition to the human repertoire.",
    "New this century — and already spreading."
  ];

  const escapeHtml = (s) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  /* ── sparkline: adoption across 300,000 years ────────────────── */

  const sparkline = (skill, w = 96, h = 26) => {
    const n = 12;
    const rise = 1 + Math.round((skill.era / 5) * 7) + (skill.h % 2);
    const plateau = 0.68 + (skill.h % 17) / 100;
    const pts = [];
    for (let i = 0; i < n; i++) {
      const noise = ((skill.h >> i % 12) % 7 - 3) / 90;
      let v;
      if (i < rise) v = 0.05 + noise;
      else if (i < rise + 2) v = 0.05 + (plateau - 0.05) * (i - rise + 1) / 3 + noise;
      else v = plateau + noise * 0.5;
      v = Math.max(0.03, Math.min(0.95, v));
      pts.push([ (i / (n - 1)) * w, h - v * (h - 3) - 1.5 ]);
    }
    const line = pts.map(p => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true">
      <polygon points="0,${h} ${line} ${w},${h}" fill="currentColor" opacity="0.12"/>
      <polyline points="${line}" fill="none" stroke="currentColor" stroke-width="1.4"
        stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  };

  /* ── state ───────────────────────────────────────────────────── */

  const state = { query: "", sort: "practiced", era: null, domain: null };

  const visibleSkills = () => {
    const q = state.query.trim().toLowerCase();
    let list = ALL.filter(s => {
      if (state.era !== null && s.era !== state.era) return false;
      if (state.domain !== null && s.domain !== state.domain) return false;
      if (!q) return true;
      return s.name.toLowerCase().includes(q)
        || s.desc.toLowerCase().includes(q)
        || DOMAIN_BY_ID[s.domain].name.toLowerCase().includes(q);
    });
    if (state.sort === "practiced") list.sort((a, b) => b.p - a.p || a.name.localeCompare(b.name));
    else if (state.sort === "oldest") list.sort((a, b) => a.era - b.era || b.p - a.p || a.name.localeCompare(b.name));
    else list.sort((a, b) => b.trend - a.trend || b.p - a.p);
    return list;
  };

  /* ── rendering ───────────────────────────────────────────────── */

  const leaderboardEl = $("#leaderboard");
  const emptyEl = $("#empty");
  const resultLine = $("#result-line");

  const highlight = (name) => {
    const q = state.query.trim();
    if (!q) return escapeHtml(name);
    const idx = name.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return escapeHtml(name);
    return escapeHtml(name.slice(0, idx)) + "<mark>" +
      escapeHtml(name.slice(idx, idx + q.length)) + "</mark>" +
      escapeHtml(name.slice(idx + q.length));
  };

  const renderRows = () => {
    const list = visibleSkills();
    leaderboardEl.innerHTML = "";
    const frag = document.createDocumentFragment();

    list.forEach((s, i) => {
      const li = document.createElement("li");
      li.className = "skill-row";
      li.tabIndex = 0;
      li.setAttribute("role", "button");
      li.setAttribute("aria-haspopup", "dialog");
      li.dataset.id = s.id;
      li.innerHTML = `
        <span class="row-rank">${i + 1}</span>
        <span class="row-main">
          <span class="row-name">${highlight(s.name)}</span>
          <span class="row-desc">${escapeHtml(s.desc)}</span>
        </span>
        <span class="row-domain">${DOMAIN_BY_ID[s.domain].name}</span>
        <span class="row-era"><span class="era-dot" style="background:var(--era${s.era})"></span>${ERAS[s.era].name}</span>
        <span class="row-spark" style="color:var(--era${s.era})" title="Adoption across 300,000 years">${sparkline(s)}</span>
        <span class="row-count" title="Estimated living practitioners">${fmtCount(s.p)}</span>`;
      frag.appendChild(li);
    });
    leaderboardEl.appendChild(frag);

    emptyEl.hidden = list.length !== 0;
    const total = ALL.length;
    resultLine.textContent = list.length === total
      ? `Showing ${total.toLocaleString()} skills — every one we know of.`
      : `Showing ${list.length.toLocaleString()} of ${total.toLocaleString()} skills.`;
  };

  /* ── filter chips ────────────────────────────────────────────── */

  const eraBox = $("#era-chips");
  const domBox = $("#domain-chips");

  const renderChips = () => {
    const eraChips = [`<button class="chip ${state.era === null ? "is-active" : ""}" data-era="">All eras</button>`];
    ERAS.forEach((e, i) => {
      eraChips.push(`<button class="chip ${state.era === i ? "is-active" : ""}" data-era="${i}">
        <span class="era-dot" style="background:var(--era${i})"></span>${e.name}
        <span class="chip-count">${ERA_COUNT[i] || 0}</span></button>`);
    });

    const domChips = [`<button class="chip ${state.domain === null ? "is-active" : ""}" data-domain="">All domains</button>`];
    DOMAINS.forEach(d => {
      domChips.push(`<button class="chip ${state.domain === d.id ? "is-active" : ""}" data-domain="${d.id}">
        ${d.name} <span class="chip-count">${DOMAIN_COUNT[d.id]}</span></button>`);
    });

    eraBox.innerHTML = eraChips.join("");
    domBox.innerHTML = domChips.join("");
  };

  eraBox.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-era]");
    if (!btn) return;
    state.era = btn.dataset.era === "" ? null : Number(btn.dataset.era);
    renderChips(); renderRows();
  });
  domBox.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-domain]");
    if (!btn) return;
    state.domain = btn.dataset.domain === "" ? null : btn.dataset.domain;
    renderChips(); renderRows();
  });

  /* ── dialog ──────────────────────────────────────────────────── */

  const dialog = $("#skill-dialog");
  const dialogBody = $("#dialog-body");

  const openSkill = (id) => {
    const list = visibleSkills();
    const s = ALL.find(x => x.id === id);
    if (!s) return;
    const rank = list.findIndex(x => x.id === id) + 1;

    const related = ALL
      .filter(x => x.domain === s.domain && x.id !== s.id)
      .sort((a, b) => b.p - a.p)
      .slice(0, 4);

    const command = `skills learn ${s.name.toLowerCase()}`;

    dialogBody.innerHTML = `
      <p class="dl-rank">${rank ? `#${rank} in the current view` : ""} · ${DOMAIN_BY_ID[s.domain].name}</p>
      <h2 class="dl-name" id="dialog-name">${escapeHtml(s.name)}</h2>
      <p class="dl-desc">${escapeHtml(s.desc)}</p>
      <dl class="dl-facts">
        <div class="fact"><dt>Era</dt><dd><span class="era-dot" style="background:var(--era${s.era})"></span>${ERAS[s.era].name}</dd></div>
        <div class="fact"><dt>Origin</dt><dd>${ERAS[s.era].range}</dd></div>
        <div class="fact"><dt>Practitioners</dt><dd>≈ ${fmtCount(s.p)}</dd></div>
        <div class="fact"><dt>Effort to master</dt><dd class="pips" style="color:var(--era${s.era})">
          ${[1, 2, 3, 4, 5].map(n => `<span class="pip ${n <= s.diff ? "on" : ""}"></span>`).join("")}
        </dd></div>
      </dl>
      <div class="dl-related">
        <h3>Nearby in ${DOMAIN_BY_ID[s.domain].name}</h3>
        <ul>${related.map(r => `<li><button data-open="${r.id}">${escapeHtml(r.name)}</button></li>`).join("")}</ul>
      </div>
      <div class="dl-command-wrap">Install into a human:
        <div class="dl-command">
          <span class="prompt" aria-hidden="true">$</span>
          <code>${escapeHtml(command)}</code>
          <button class="copy-btn" data-copy="${escapeHtml(command)}">copy</button>
        </div>
      </div>
      <p class="dl-note">${AGE_NOTES[s.era]} Estimated ${fmtCount(s.p)} living humans practice it.</p>`;

    dialog.showModal();
  };

  document.addEventListener("click", (e) => {
    const row = e.target.closest(".skill-row");
    if (row) { openSkill(row.dataset.id); return; }
    const rel = e.target.closest("[data-open]");
    if (rel) { openSkill(rel.dataset.open); return; }
  });

  leaderboardEl.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("skill-row")) {
      e.preventDefault();
      openSkill(e.target.dataset.id);
    }
  });

  $("#dialog-close").addEventListener("click", () => dialog.close());

  /* ── copy + toast ────────────────────────────────────────────── */

  const toast = $("#toast");
  let toastTimer = null;
  const showToast = (msg) => {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    showToast("Copied. Now practice for 10,000 hours.");
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-copy]");
    if (btn) copyText(btn.dataset.copy);
  });

  /* ── search + tabs + keyboard ────────────────────────────────── */

  const searchEl = $("#search");
  searchEl.addEventListener("input", () => {
    state.query = searchEl.value;
    renderRows();
  });
  searchEl.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { searchEl.value = ""; state.query = ""; renderRows(); searchEl.blur(); }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchEl &&
        !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      e.preventDefault();
      searchEl.focus();
      searchEl.select();
    }
  });

  document.querySelectorAll(".sort-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".sort-tab").forEach(t => {
        t.classList.toggle("is-active", t === tab);
        t.setAttribute("aria-selected", t === tab);
      });
      state.sort = tab.dataset.sort;
      renderRows();
    });
  });

  $("#clear-filters").addEventListener("click", () => {
    state.query = ""; state.era = null; state.domain = null;
    searchEl.value = "";
    renderChips(); renderRows();
  });

  /* ── hero stats + command rotation ───────────────────────────── */

  $("#stat-skills").textContent = ALL.length.toLocaleString();
  $("#stat-domains").textContent = DOMAINS.length;

  const heroCode = $("#hero-command");
  const heroCmdBtn = document.querySelector(".hero-command .copy-btn");
  const HERO_ROTATION = ["pottery", "blacksmithing", "sushi", "machine learning", "whistling", "diplomacy", "fire-making", "parkour"];
  let heroIdx = 0;
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(() => {
      heroIdx = (heroIdx + 1) % HERO_ROTATION.length;
      const cmd = "skills learn " + HERO_ROTATION[heroIdx];
      heroCode.textContent = cmd;
      heroCmdBtn.dataset.copy = cmd;
    }, 3600);
  }

  /* ── footer ──────────────────────────────────────────────────── */

  $("#footer-domains").innerHTML = DOMAINS.map(d =>
    `<li><button data-domain-jump="${d.id}">${d.name}</button></li>`).join("");
  $("#footer-eras").innerHTML = ERAS.map((e, i) =>
    `<li><button data-era-jump="${i}"><span class="era-dot" style="background:var(--era${i})"></span>${e.name}
     <span class="chip-count">${e.range}</span></button></li>`).join("");

  document.addEventListener("click", (e) => {
    const d = e.target.closest("[data-domain-jump]");
    if (d) {
      state.domain = d.dataset.domainJump;
      state.era = null;
      renderChips(); renderRows();
      $("#registry").scrollIntoView({ behavior: "smooth" });
      return;
    }
    const er = e.target.closest("[data-era-jump]");
    if (er) {
      state.era = Number(er.dataset.eraJump);
      state.domain = null;
      renderChips(); renderRows();
      $("#registry").scrollIntoView({ behavior: "smooth" });
    }
  });

  /* ── boot ────────────────────────────────────────────────────── */

  renderChips();
  renderRows();
})();
