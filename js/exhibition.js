// ===== EXHIBITION =====
(function () {
    const categories = ['全部', '職場', '教育', '社會文化'];
    let activeCategory = '全部';
    
    // 🌟 記錄當前顯示的展覽陣列與索引，供左右切換使用
    let currentExhibits = [];
    let currentIndex = 0;

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
        
        // 篩選結果存進 currentExhibits，讓燈箱切換時不會跑去別的分類
        currentExhibits = activeCategory === '全部' ? EXHIBITS : EXHIBITS.filter(e => e.category === activeCategory);
        
        currentExhibits.forEach(item => {
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

    // 🌟 獨立出更新燈箱內容的函數
    function updateLightboxContent() {
        const item = currentExhibits[currentIndex];
        if (!item) return;
        document.getElementById('lb-img').src = item.img;
        document.getElementById('lb-img').alt = item.title;
        document.getElementById('lb-cat').textContent = item.category;
        document.getElementById('lb-title').textContent = item.title;
        document.getElementById('lb-sub').textContent = item.subtitle;
        document.getElementById('lb-desc').textContent = item.desc;
        
        const lbSource = document.getElementById('lb-source');
        if (lbSource) {
            lbSource.href = item.sourceUrl;
            lbSource.textContent = item.sourceName;
        }
    }

    window.openLightbox = function (id) {
        currentIndex = currentExhibits.findIndex(e => e.id === id);
        if (currentIndex === -1) return;
        
        updateLightboxContent();
        document.getElementById('lightbox').classList.add('open');
        document.body.style.overflow = 'hidden';

        // 🌟 隱藏右側的 5 個首頁章節指示點，避免與燈箱導航重疊
        const sectionDots = document.getElementById('section-dots');
        if (sectionDots) {
            sectionDots.style.opacity = '0';
            sectionDots.style.pointerEvents = 'none';
        }
    };

    // 🌟 左右切換邏輯
    window.navigateLightbox = function (direction) {
        currentIndex += direction;
        
        // 循環播放：超過最後一張就回第一張，小於第一張就去最後一張
        if (currentIndex >= currentExhibits.length) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = currentExhibits.length - 1;
        }
        
        updateLightboxContent();
    };

    window.closeLightbox = function (e) {
        if (e && e.target !== document.getElementById('lightbox') && !e.target.classList.contains('lightbox-close')) return;
        document.getElementById('lightbox').classList.remove('open');
        document.body.style.overflow = '';

        // 🌟 關閉燈箱時，恢復右側的首頁章節指示點
        const sectionDots = document.getElementById('section-dots');
        if (sectionDots) {
            sectionDots.style.opacity = '';
            sectionDots.style.pointerEvents = '';
        }
    };

    document.getElementById('lightbox').addEventListener('click', function (e) {
        if (e.target === this) {
            window.closeLightbox();
        }
    });

    // 🌟 綁定鍵盤左右鍵與 ESC 鍵
    document.addEventListener('keydown', function (e) {
        const lightbox = document.getElementById('lightbox');
        // 只有燈箱開啟時才攔截這些按鍵
        if (lightbox && lightbox.classList.contains('open')) {
            if (e.key === 'ArrowLeft') {
                window.navigateLightbox(-1);
            } else if (e.key === 'ArrowRight') {
                window.navigateLightbox(1);
            } else if (e.key === 'Escape') {
                window.closeLightbox();
            }
        }
    });
})();