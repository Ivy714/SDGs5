// ===== BALANCE SCALE =====
(function () {
    function getColor(ggi) {
        if (ggi >= 0.85) return '#8B9A82';
        if (ggi >= 0.75) return '#A4B39B';
        if (ggi >= 0.65) return '#B8A99A';
        if (ggi >= 0.55) return '#948B9E';
        return '#C4937A';
    }
    function getLabel(ggi) {
        if (ggi >= 0.85) return '高度平等';
        if (ggi >= 0.75) return '相對平等';
        if (ggi >= 0.65) return '仍有差距';
        if (ggi >= 0.55) return '差距明顯';
        return '嚴重不平等';
    }
    function getTilt(ggi) { return (1 - ggi) * 55; }

    let currentAngle = getTilt(COUNTRIES[0].ggi);
    let targetAngle = currentAngle;
    let animId = null;
    let vel = 0;

    function spring(current, target, velocity) {
        const stiffness = 0.06, damping = 0.75;
        const force = (target - current) * stiffness;
        velocity = (velocity + force) * damping;
        return { value: current + velocity, velocity };
    }

    function animate() {
        const result = spring(currentAngle, targetAngle, vel);
        currentAngle = result.value;
        vel = result.velocity;
        document.getElementById('scale-beam').setAttribute('transform', `rotate(${currentAngle}, 280, 60)`);
        if (Math.abs(targetAngle - currentAngle) > 0.01 || Math.abs(vel) > 0.01) {
            animId = requestAnimationFrame(animate);
        } else {
            currentAngle = targetAngle;
            document.getElementById('scale-beam').setAttribute('transform', `rotate(${currentAngle}, 280, 60)`);
        }
    }

    function updateScale(c) {
        const color = getColor(c.ggi);
        targetAngle = getTilt(c.ggi);
        vel = 0;
        cancelAnimationFrame(animId);
        animId = requestAnimationFrame(animate);

        document.getElementById('scale-pivot').style.fill = color;
        document.getElementById('scale-glow').style.fill = color;
        document.getElementById('pan-l-fill').setAttribute('fill', color);
        document.getElementById('pan-l-border').setAttribute('stroke', color);
        document.getElementById('pan-l-text').setAttribute('fill', color);
        document.getElementById('pan-l-text').textContent = c.ggi;
        document.getElementById('scale-country-label').textContent = c.name;

        document.getElementById('balance').style.backgroundColor =
            `color-mix(in srgb, ${color}18, var(--alabaster))`;

        document.getElementById('ggi-val').textContent = c.ggi;
        document.getElementById('ggi-val').style.color = color;
        document.getElementById('ggi-badge').textContent = getLabel(c.ggi);
        document.getElementById('ggi-badge').style.background = color + '33';
        document.getElementById('ggi-badge').style.color = color;
        document.getElementById('ggi-note').textContent = c.note;
        document.getElementById('ggi-bar').style.width = `${c.ggi * 100}%`;
        document.getElementById('ggi-bar').style.background = color;
        document.getElementById('ggi-gap').textContent = `距離完全平等（1.000）還有 ${(1 - c.ggi).toFixed(3)}`;
        document.getElementById('balance-title-em').style.color = color;

        document.querySelectorAll('.country-btn').forEach(btn => {
            if (btn.dataset.en === c.nameEn) {
                btn.classList.add('active');
                btn.style.background = color;
            } else {
                btn.classList.remove('active');
                btn.style.background = '';
            }
        });
    }

    // Build country grid
    const grid = document.getElementById('country-grid');
    COUNTRIES.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'country-btn';
        btn.dataset.en = c.nameEn;
        btn.textContent = c.name;
        btn.addEventListener('click', () => updateScale(c));
        grid.appendChild(btn);
    });

    updateScale(COUNTRIES[0]);
})();
