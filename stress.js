// Breathing Exercise
const breathingExercise = {
    circle: document.querySelector('.breathing-circle'),
    text: document.querySelector('.breathing-text'),
    isActive: false,
    cycle: 0,
    totalCycles: 3,
    inhaleTime: 4000,
    holdTime: 7000,
    exhaleTime: 8000,
    timer: null,

    start() {
        if (this.isActive) return;
        this.isActive = true;
        this.cycle = 0;
        this.runCycle();
    },

    stop() {
        this.isActive = false;
        clearTimeout(this.timer);
        this.circle.classList.remove('active');
        this.text.textContent = 'Click to start breathing exercise';
    },

    runCycle() {
        if (!this.isActive || this.cycle >= this.totalCycles) {
            this.stop();
            return;
        }

        // Inhale
        this.text.textContent = 'Inhale...';
        this.circle.classList.add('active');
        this.timer = setTimeout(() => {
            // Hold
            this.text.textContent = 'Hold...';
            this.timer = setTimeout(() => {
                // Exhale
                this.text.textContent = 'Exhale...';
                this.circle.classList.remove('active');
                this.timer = setTimeout(() => {
                    this.cycle++;
                    this.runCycle();
                }, this.exhaleTime);
            }, this.holdTime);
        }, this.inhaleTime);
    }
};

// Meditation Timer
const meditationTimer = {
    display: document.querySelector('.meditation-timer'),
    timeLeft: 300, // 5 minutes in seconds
    isRunning: false,
    timer: null,

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.updateDisplay();
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateDisplay();
            if (this.timeLeft <= 0) {
                this.stop();
            }
        }, 1000);
    },

    stop() {
        this.isRunning = false;
        clearInterval(this.timer);
        this.timeLeft = 300;
        this.updateDisplay();
    },

    updateDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        this.display.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
};

// Quick Tips
const quickTips = {
    tips: [
        'Take a short walk',
        'Practice deep breathing',
        'Listen to calming music',
        'Do some stretching',
        'Take a break from screens',
        'Drink some water',
        'Practice mindfulness',
        'Talk to a friend'
    ],
    currentTip: 0,
    tipElement: document.querySelector('.tip-card'),
    interval: null,

    startRotation() {
        this.showTip();
        this.interval = setInterval(() => {
            this.currentTip = (this.currentTip + 1) % this.tips.length;
            this.showTip();
        }, 5000);
    },

    stopRotation() {
        clearInterval(this.interval);
    },

    showTip() {
        if (this.tipElement) {
            this.tipElement.innerHTML = `
                <h3>Quick Tip</h3>
                <p>${this.tips[this.currentTip]}</p>
            `;
        }
    }
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Breathing Exercise
    const startBreathingBtn = document.getElementById('startBreathing');
    if (startBreathingBtn) {
        startBreathingBtn.addEventListener('click', () => {
            if (breathingExercise.isActive) {
                breathingExercise.stop();
                startBreathingBtn.textContent = 'Start Exercise';
            } else {
                breathingExercise.start();
                startBreathingBtn.textContent = 'Stop Exercise';
            }
        });
    }

    // Meditation Timer
    const startMeditationBtn = document.getElementById('startMeditation');
    if (startMeditationBtn) {
        startMeditationBtn.addEventListener('click', () => {
            if (meditationTimer.isRunning) {
                meditationTimer.stop();
                startMeditationBtn.textContent = 'Start Meditation';
            } else {
                meditationTimer.start();
                startMeditationBtn.textContent = 'Stop Meditation';
            }
        });
    }

    // Start Quick Tips Rotation
    quickTips.startRotation();

    // Add hover effects to activity and wellness items
    const listItems = document.querySelectorAll('.activity-list li, .wellness-list li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            item.style.background = 'var(--accent-color)';
            item.style.color = 'white';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
            item.style.background = 'var(--glass-bg)';
            item.style.color = 'var(--text-color)';
        });
    });

    // Add click effect to emergency contacts
    const emergencyItems = document.querySelectorAll('.emergency-list li');
    emergencyItems.forEach(item => {
        item.addEventListener('click', () => {
            item.style.transform = 'scale(1.05)';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Back to Main button
    const backToMainBtn = document.getElementById('backToMain');
    if (backToMainBtn) {
        backToMainBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
}); 