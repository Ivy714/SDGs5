// ===== UTILS =====
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ===== HAMBURGER MENU =====
function toggleMobileNav() {
    const nav = document.getElementById('mobile-nav');
    const btn = document.getElementById('hamburger');
    if (!nav || !btn) return;
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-label', isOpen ? '關閉選單' : '開啟選單');
    document.body.style.overflow = isOpen ? 'hidden' : '';
}
function mobileNavGo(section) {
    toggleMobileNav();
    setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 350);
}
document.addEventListener('DOMContentLoaded', function () {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
        mobileNav.addEventListener('click', function (e) {
            if (e.target === this) toggleMobileNav();
        });
    }
});

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
            <div class="flip-card-back" style="background-color: ${c.color}">
            <p>${c.back}</p>
    
            <!-- 加上分隔線與超連結結構 -->
            <div style="width: 20px; height: 1px; min-height: 1px; flex-shrink: 0; background-color: rgba(255,255,255,0.5); margin: 10px 0;"></div>        <p class="source-text" style="font-size: 0.8rem; margin: 0; opacity: 0.9;">
            來源：<a href="${c.sourceUrl}" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: underline; text-underline-offset: 3px;">
            ${c.sourceName}
        </a>
    </p>
</div>
            </div>`;

        wrap.addEventListener('click', () => wrap.classList.toggle('flipped'));
        grid.appendChild(wrap);

        // 【關鍵修正】：卡片加入 DOM 後，立刻叫觀察者開始看它
        obs.observe(wrap);
    });
})();