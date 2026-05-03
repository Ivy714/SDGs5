// ===== UTILS =====
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ===== NAVBAR =====
(function () {
    const nav = document.getElementById('navbar');
    setTimeout(() => nav.classList.add('visible'), 100);
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) nav.classList.add('glass');
        else nav.classList.remove('glass');
    });
})();

// ===== HERO LINE =====
(function () {
    const line = document.getElementById('hero-line');
    window.addEventListener('mousemove', (e) => {
        const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
        const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * 180 / Math.PI;
        const tilt = Math.max(-15, Math.min(15, angle * 0.08));
        line.style.transform = `rotate(${tilt}deg)`;
    });
})();

// ===== SECTION FADE =====
(function () {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.section-fade').forEach(el => obs.observe(el));
})();

// ===== FLIP CARDS =====
(function () {
  const grid = document.getElementById('flip-grid');
  // 1. 先定義觀察者（如果原本的 obs 是區域變數，建議這裡重新建立或設為全域）
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });

  if (!grid || typeof FLIP_CARDS === 'undefined') return;

  FLIP_CARDS.forEach((c, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'flip-card-wrap section-fade'; // 這裡有 section-fade
    wrap.style.transitionDelay = `${i * 0.08}s`;
    wrap.innerHTML = `
            <div class="flip-card-inner-el">
                <div class="flip-card-front">
                    <span class="flip-card-tag" style="color:${c.color}">${c.tag}</span>
                    <div>
                        <h3 class="flip-card-title">${c.title}</h3>
                        <div class="flip-hint">
                            <div class="flip-hint-line" style="background:${c.color}"></div>
                            <span class="flip-hint-text">點擊翻面</span>
                        </div>
                    </div>
                </div>
                <div class="flip-card-back" style="background:${c.color}">
                    <p class="flip-card-text">${c.back}</p>
                    <div style="margin-top:16px"><div style="width:24px;height:1px;background:rgba(255,255,255,0.5)"></div></div>
                </div>
            </div>`;

    wrap.addEventListener('click', () => wrap.classList.toggle('flipped'));
    grid.appendChild(wrap);

    // 【關鍵修正】：卡片加入 DOM 後，立刻叫觀察者開始看它
    obs.observe(wrap);
  });
})();