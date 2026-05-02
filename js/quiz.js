// ===== QUIZ =====
(function () {
    let selectedGender = null, currentQ = 0, selectedOption = null, questions = [];

    // Build gender buttons
    const gGrid = document.getElementById('gender-grid');
    GENDER_OPTIONS.forEach(g => {
        const btn = document.createElement('button');
        btn.className = 'gender-btn';
        btn.innerHTML = `<span class="gender-emoji">${g.emoji}</span><span class="gender-name">${g.label}</span>`;
        btn.addEventListener('mouseenter', () => btn.style.borderColor = g.color);
        btn.addEventListener('mouseleave', () => btn.style.borderColor = 'transparent');
        btn.addEventListener('click', () => {
            selectedGender = g.id;
            questions = QUIZ_QUESTIONS[g.id];
            currentQ = 0;
            selectedOption = null;
            setTimeout(() => quizGo('quiz'), 300);
        });
        gGrid.appendChild(btn);
    });

    window.quizGo = function (stage) {
        ['intro', 'gender', 'quiz', 'done'].forEach(s => {
            document.getElementById('q-' + s).classList.add('hidden');
        });
        document.getElementById('q-' + stage).classList.remove('hidden');
        if (stage === 'quiz') renderQuestion();
    };

    window.quizReset = function () {
        selectedGender = null;
        currentQ = 0;
        selectedOption = null;
        document.getElementById('q-reflection').classList.remove('show');
        document.getElementById('q-next').style.display = 'none';
        quizGo('intro');
    };

    window.quizNext = function () {
        selectedOption = null;
        document.getElementById('q-reflection').classList.remove('show');
        document.getElementById('q-next').style.display = 'none';
        if (currentQ < questions.length - 1) {
            currentQ++;
            renderQuestion();
        } else {
            quizGo('done');
        }
    };

    function renderQuestion() {
        const q = questions[currentQ];
        document.getElementById('q-num').textContent = `${currentQ + 1} / ${questions.length}`;
        document.getElementById('q-fill').style.width = `${((currentQ + 1) / questions.length) * 100}%`;
        document.getElementById('q-text').textContent = q.q;

        const opts = document.getElementById('q-opts');
        opts.innerHTML = '';
        q.options.forEach((opt) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-opt';
            btn.textContent = opt;
            btn.addEventListener('click', () => {
                if (selectedOption !== null) return;
                selectedOption = opt;
                opts.querySelectorAll('.quiz-opt').forEach(b => {
                    if (b.textContent === opt) b.classList.add('selected');
                    else b.classList.add('dimmed');
                    b.disabled = true;
                });
                document.getElementById('q-reflect-text').textContent = q.reflection;
                document.getElementById('q-reflection').classList.add('show');
                const nextBtn = document.getElementById('q-next');
                nextBtn.textContent = currentQ < questions.length - 1 ? '下一題 ›' : '完成 ›';
                nextBtn.style.display = 'inline-flex';
            });
            opts.appendChild(btn);
        });
    }
})();
