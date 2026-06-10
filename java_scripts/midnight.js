function isMidnight() {
    return localStorage.getItem('midnightMode') === 'true';
}

function applyMidnight() {
    document.body.classList.toggle('midnight', isMidnight());
}

applyMidnight();

const midnightBtn = document.getElementById('midnight-toggle');
if (midnightBtn) {
    const setLabel = () => {
        midnightBtn.textContent = isMidnight() ? 'Leave Midnight' : 'Midnight Version';
    };
    setLabel();

    midnightBtn.addEventListener('click', () => {
        if (isMidnight()) {
            localStorage.removeItem('midnightMode');
            applyMidnight();
            setLabel();
            return;
        }

        const overlay = document.createElement('div');
        overlay.className = 'game-end-overlay';
        overlay.innerHTML = `
            <div class="game-end-modal">
                <h2 class="game-end-title">Midnight Version</h2>
                <p class="game-end-message">The midnight version contains adult themes and innuendo. Are you 18 or older?</p>
                <div class="rating-buttons">
                    <button class="btn btn-primary" id="age-yes">I am 18+</button>
                    <button class="btn btn-secondary" id="age-no">Take me back</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        requestAnimationFrame(() => overlay.classList.add('visible'));

        overlay.querySelector('#age-yes').addEventListener('click', () => {
            localStorage.setItem('midnightMode', 'true');
            overlay.remove();
            applyMidnight();
            setLabel();
        });
        overlay.querySelector('#age-no').addEventListener('click', () => overlay.remove());
    });
}
