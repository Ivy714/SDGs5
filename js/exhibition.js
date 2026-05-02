// ===== EXHIBITION =====
(function () {
    const categories = ['全部', '職場', '教育', '社會文化'];
    let activeCategory = '全部';

    const filterWrap = document.getElementById('cat-filters');
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn' + (cat === '全部' ? ' active' : '');
        btn.textContent = cat;
        btn.addEventListener('click', () => {
            activeCategory = cat;
            filterWrap.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGrid();
        });
        filterWrap.appendChild(btn);
    });

    function renderGrid() {
        const grid = document.getElementById('masonry-grid');
        grid.innerHTML = '';
        const filtered = activeCategory === '全部' ? EXHIBITS : EXHIBITS.filter(e => e.category === activeCategory);
        filtered.forEach(item => {
            const wrap = document.createElement('div');
            wrap.className = 'masonry-item';
            wrap.innerHTML = `
        <div class="exhibit-card" onclick="openLightbox(${item.id})">
          <img class="exhibit-img" src="${item.img}" alt="${item.title}" loading="lazy" style="height:${item.size === 'large' ? '320px' : '220px'}"/>
          <div class="exhibit-overlay"></div>
          <div class="exhibit-caption">
            <span class="exhibit-cat">${item.category}</span>
            <span class="exhibit-title">${item.title}</span>
          </div>
          <div class="zoom-icon">⊕</div>
        </div>`;
            grid.appendChild(wrap);
        });
    }

    renderGrid();

    window.openLightbox = function (id) {
        const item = EXHIBITS.find(e => e.id === id);
        if (!item) return;
        document.getElementById('lb-img').src = item.img;
        document.getElementById('lb-img').alt = item.title;
        document.getElementById('lb-cat').textContent = item.category;
        document.getElementById('lb-title').textContent = item.title;
        document.getElementById('lb-sub').textContent = item.subtitle;
        document.getElementById('lb-desc').textContent = item.desc;
        document.getElementById('lightbox').classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    window.closeLightbox = function (e) {
        if (e && e.target !== document.getElementById('lightbox') && !e.target.classList.contains('lightbox-close')) return;
        document.getElementById('lightbox').classList.remove('open');
        document.body.style.overflow = '';
    };

    document.getElementById('lightbox').addEventListener('click', function (e) {
        if (e.target === this) {
            this.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
})();
