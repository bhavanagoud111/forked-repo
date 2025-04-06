// Get your Unsplash API key from: https://unsplash.com/developers
const UNSPLASH_API_KEY = '5Mz3B3aHHefToYyJfBr55lE_sKA9TrNOeX9qHyttIAI'; // Replace with your Unsplash Access Key

// DOM Elements
const moodInput = document.getElementById('moodInput');
const submitBtn = document.getElementById('submitBtn');
const summaryText = document.getElementById('summaryText');
const quoteText = document.getElementById('quoteText');
const moodImage = document.getElementById('moodImage');

// Mood-related data
const moodData = {
    happy: {
        summary: "Your happiness is contagious! Keep spreading those positive vibes and making the world a better place.",
        quotes: [
            "Happiness is not something ready made. It comes from your own actions.",
            "The only way to do great work is to love what you do.",
            "Happiness is a warm puppy.",
            "The happiest people don't have the best of everything, they make the best of everything.",
            "Happiness is not in the mere possession of money; it lies in the joy of achievement."
        ],
        imageKeywords: "happy, joyful, celebration, smiling, sunshine"
    },
    excited: {
        summary: "Your energy is infectious! Channel this excitement into something amazing.",
        quotes: [
            "The future belongs to those who believe in the beauty of their dreams.",
            "Life is either a daring adventure or nothing at all.",
            "The best way to predict the future is to create it.",
            "Excitement is the electricity of life. Are you plugged in?",
            "The only way to do great work is to love what you do."
        ],
        imageKeywords: "excited, energetic, celebration, fireworks, adventure"
    },
    enthusiastic: {
        summary: "Your enthusiasm is inspiring! Keep that positive energy flowing.",
        quotes: [
            "Nothing great was ever achieved without enthusiasm.",
            "The only way to do great work is to love what you do.",
            "Enthusiasm is the mother of effort, and without it nothing great was ever achieved.",
            "Enthusiasm is the sparkle in your eyes, the swing in your gait.",
            "The world belongs to the energetic."
        ],
        imageKeywords: "enthusiastic, optimistic, success, motivation, energy"
    },
    calm: {
        summary: "Your inner peace is beautiful. Stay centered and mindful.",
        quotes: [
            "Peace comes from within. Do not seek it without.",
            "The quieter you become, the more you can hear.",
            "Calmness is the cradle of power.",
            "In the midst of movement and chaos, keep stillness inside of you.",
            "Peace is not the absence of conflict, but the presence of creative alternatives."
        ],
        imageKeywords: "calm, peaceful, meditation, nature, serenity"
    },
    content: {
        summary: "Your contentment is a gift. Embrace the present moment.",
        quotes: [
            "Happiness is not having what you want. It is wanting what you have.",
            "The secret of contentment is knowing how to enjoy what you have.",
            "Contentment is the greatest wealth.",
            "The greatest wealth is to live content with little.",
            "True contentment is not having everything, but being satisfied with everything you have."
        ],
        imageKeywords: "content, satisfied, peaceful, gratitude, mindfulness"
    },
    sad: {
        summary: "It's okay to feel sad sometimes. Remember that difficult times are temporary.",
        quotes: [
            "The only way to get through life is to laugh your way through it.",
            "Every storm runs out of rain.",
            "The sun will rise and we will try again.",
            "Sadness is but a wall between two gardens.",
            "The pain you feel today is the strength you feel tomorrow."
        ],
        imageKeywords: "hope, sunrise, comfort, healing, support"
    },
    anxious: {
        summary: "You're stronger than you think. Focus on the present moment.",
        quotes: [
            "Worrying won't stop the bad stuff from happening, it just stops you from enjoying the good.",
            "The only way to do great work is to love what you do.",
            "This too shall pass.",
            "Anxiety is like a rocking chair. It gives you something to do, but it doesn't get you very far.",
            "The best way to predict the future is to create it."
        ],
        imageKeywords: "peaceful, nature, calm, mindfulness, breathing"
    },
    angry: {
        summary: "Take a deep breath. Channel your energy into something positive.",
        quotes: [
            "Anger is one letter short of danger.",
            "The best revenge is massive success.",
            "Calmness is the cradle of power.",
            "For every minute you remain angry, you give up sixty seconds of peace of mind.",
            "Anger is like a flame that burns the vessel that contains it."
        ],
        imageKeywords: "calm, peaceful, meditation, nature, serenity"
    },
    fearful: {
        summary: "Courage is not the absence of fear, but the triumph over it.",
        quotes: [
            "Fear is the mind-killer.",
            "The only thing we have to fear is fear itself.",
            "Courage is resistance to fear, mastery of fear, not absence of fear.",
            "Everything you've ever wanted is on the other side of fear.",
            "Fear is temporary, regret is forever."
        ],
        imageKeywords: "courage, strength, bravery, overcoming, empowerment"
    },
    lonely: {
        summary: "You are not alone. Reach out to others and share your feelings.",
        quotes: [
            "The best way to cheer yourself up is to try to cheer somebody else up.",
            "You are never alone. You are eternally connected with everyone.",
            "Loneliness is not about being alone, it's about feeling alone.",
            "The most beautiful people we have known are those who have known defeat.",
            "Sometimes the loneliest place to be is in a crowd."
        ],
        imageKeywords: "connection, community, support, togetherness, friendship"
    },
    bored: {
        summary: "Boredom can be a gateway to creativity. Try something new!",
        quotes: [
            "Boredom is the root of all evil.",
            "The cure for boredom is curiosity.",
            "Life is either a daring adventure or nothing at all.",
            "Boredom is the feeling that everything is a waste of time.",
            "The only cure for boredom is curiosity."
        ],
        imageKeywords: "creativity, adventure, inspiration, discovery, learning"
    },
    frustrated: {
        summary: "Every obstacle is an opportunity to grow stronger.",
        quotes: [
            "The only way to do great work is to love what you do.",
            "Success is not final, failure is not fatal.",
            "The best way to predict the future is to create it.",
            "Frustration is the first step towards improvement.",
            "Every problem is a gift - without problems we would not grow."
        ],
        imageKeywords: "determination, perseverance, success, growth, resilience"
    },
    melancholy: {
        summary: "It's okay to feel melancholy. These feelings will pass.",
        quotes: [
            "The only way to get through life is to laugh your way through it.",
            "Every storm runs out of rain.",
            "The sun will rise and we will try again.",
            "Melancholy is the pleasure of being sad.",
            "The deeper the sorrow, the greater the joy."
        ],
        imageKeywords: "hope, sunrise, comfort, healing, reflection"
    },
    stressed: {
        summary: "Take a moment to breathe. You've got this.",
        quotes: [
            "Stress is not what happens to you. It's how you react to what happens.",
            "The greatest weapon against stress is our ability to choose one thought over another.",
            "Life is 10% what happens to you and 90% how you react to it.",
            "Stress is the trash of modern life - we all generate it but if you don't dispose of it properly, it will pile up and overtake your life.",
            "The time to relax is when you don't have time for it."
        ],
        imageKeywords: "relaxation, meditation, peace, mindfulness, breathing"
    }
};

// Mood-based game suggestions
const moodGames = {
    happy: {
        suggestion: "Feeling happy? Keep the good vibes going with a fun game of Tic-Tac-Toe!",
        recommended: "tictactoe"
    },
    sad: {
        suggestion: "Feeling down? Try Memory Match to boost your spirits and exercise your mind!",
        recommended: "memory"
    },
    stressed: {
        suggestion: "Stressed out? Play Snake to focus your mind and unwind!",
        recommended: "snake"
    },
    calm: {
        suggestion: "Feeling calm? Challenge yourself with a strategic game of Chess!",
        recommended: "chess"
    }
};

// Mood-based YouTube videos
const moodPlaylists = {
    happy: {
        videoId: "60ItHLz5WEA", // "Happy" by Pharrell Williams (Official Music Video)
        title: "Happy Vibes"
    },
    excited: {
        videoId: "lTRiuFIWV54", // "Can't Stop the Feeling!" by Justin Timberlake
        title: "Energy Boost"
    },
    enthusiastic: {
        videoId: "IcrbM1l_BoI", // "Good Feeling" by Flo Rida
        title: "Motivation Mix"
    },
    calm: {
        videoId: "UfcAVejslrU", // "Weightless" by Marconi Union
        title: "Peaceful Sounds"
    },
    content: {
        videoId: "A3yCcXgbKrE", // "What a Wonderful World" by Louis Armstrong
        title: "Relaxation Mix"
    },
    sad: {
        videoId: "k4V3MoLFf-0", // "Fix You" by Coldplay
        title: "Healing Sounds"
    },
    anxious: {
        videoId: "YwZXpCU5Xrc", // "Breathe" by Télépopmusik
        title: "Calm Your Mind"
    },
    angry: {
        videoId: "Xn676-fLq7I", // "Stronger" by Kelly Clarkson
        title: "Release Tension"
    },
    fearful: {
        videoId: "QUQsqBqxoR4", // "Brave" by Sara Bareilles
        title: "Find Your Courage"
    },
    lonely: {
        videoId: "fO_0U6gQHqE", // "Lean On Me" by Bill Withers
        title: "Feel Connected"
    },
    bored: {
        videoId: "1y6smkh6c-0", // "Don't Stop Believin'" by Journey
        title: "Beat Boredom"
    },
    frustrated: {
        videoId: "xc1YyqcQoXw", // "Fight Song" by Rachel Platten
        title: "Release Frustration"
    },
    melancholy: {
        videoId: "4zLfCnGVeL4", // "The Sound of Silence" by Simon & Garfunkel
        title: "Emotional Healing"
    },
    stressed: {
        videoId: "QDYfEBY9WV4", // "Let It Be" by The Beatles
        title: "Stress Relief"
    }
};

// DOM Elements
const moodButtons = document.querySelectorAll('.mood-btn');
const moodResult = document.getElementById('mood-result');
const gameCards = document.querySelectorAll('.game-card');
const modal = document.getElementById('game-modal');
const closeBtn = document.querySelector('.close-btn');
const gameBoards = document.querySelectorAll('.game-board');

// Virtual Pet functionality
const pet = {
    avatar: document.querySelector('.pet-avatar'),
    status: document.querySelector('.pet-status'),
    moods: {
        happy: {
            class: 'happy',
            text: 'Your pet is happy and excited!'
        },
        excited: {
            class: 'excited',
            text: 'Your pet is jumping with excitement!'
        },
        enthusiastic: {
            class: 'enthusiastic',
            text: 'Your pet is full of energy!'
        },
        calm: {
            class: 'calm',
            text: 'Your pet is feeling peaceful.'
        },
        content: {
            class: 'content',
            text: 'Your pet is feeling satisfied and relaxed.'
        },
        sad: {
            class: 'sad',
            text: 'Your pet is feeling down...'
        },
        anxious: {
            class: 'anxious',
            text: 'Your pet is feeling anxious...'
        },
        angry: {
            class: 'angry',
            text: 'Your pet is feeling angry!'
        },
        fearful: {
            class: 'fearful',
            text: 'Your pet is feeling scared...'
        },
        lonely: {
            class: 'lonely',
            text: 'Your pet is feeling lonely...'
        },
        bored: {
            class: 'bored',
            text: 'Your pet is feeling bored...'
        },
        frustrated: {
            class: 'frustrated',
            text: 'Your pet is feeling frustrated!'
        },
        melancholy: {
            class: 'melancholy',
            text: 'Your pet is feeling melancholy...'
        },
        stressed: {
            class: 'stressed',
            text: 'Your pet is feeling stressed...'
        }
    }
};

// Update pet's mood
function updatePetMood(mood) {
    // Remove all mood classes
    Object.values(pet.moods).forEach(moodData => {
        pet.avatar.classList.remove(moodData.class);
    });
    
    // Add new mood class if it exists
    if (pet.moods[mood]) {
        pet.avatar.classList.add(pet.moods[mood].class);
        pet.status.textContent = pet.moods[mood].text;
    } else {
        pet.status.textContent = 'Your Mood Pet';
    }
}

// Mood Button Click Handler
moodButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const mood = button.dataset.mood;
        
        // Handle stressed mood separately
        if (mood === 'stressed') {
            window.location.href = 'stress.html';
            return;
        }

        // Update pet's mood
        updatePetMood(mood);

        // Get mood data
        const data = moodData[mood];
        if (!data) {
            console.error('No data found for mood:', mood);
            return;
        }

        // Update UI with mood data
        document.getElementById('summaryText').textContent = data.summary;
        
        // Update quote
        const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
        document.getElementById('quoteText').textContent = `"${randomQuote}"`;
        
        // Update image
        try {
            const response = await fetch(
                `https://api.unsplash.com/photos/random?query=${data.imageKeywords}&orientation=landscape`,
                {
                    headers: {
                        'Authorization': `Client-ID ${UNSPLASH_API_KEY}`
                    }
                }
            );
            const imageData = await response.json();
            moodImage.src = imageData.urls.regular;
            moodImage.alt = `Image representing ${mood} mood`;
        } catch (error) {
            console.error('Error fetching image:', error);
            document.getElementById('moodImage').src = 'https://via.placeholder.com/400x300?text=Error+Loading+Image';
        }

        // Update game suggestions if available
        if (moodGames[mood]) {
            const suggestion = moodGames[mood].suggestion;
            moodResult.textContent = suggestion;
            
            // Highlight recommended game
            gameCards.forEach(card => {
                card.classList.remove('recommended');
                if (card.dataset.game === moodGames[mood].recommended) {
                    card.classList.add('recommended');
                }
            });
        } else {
            moodResult.textContent = `Here are some suggestions for when you're feeling ${mood}...`;
        }

        // Update YouTube video
        const video = moodPlaylists[mood];
        if (video) {
            const videoLink = document.getElementById('moodVideo');
            const videoThumbnail = document.getElementById('videoThumbnail');
            videoLink.href = `https://www.youtube.com/watch?v=${video.videoId}`;
            videoThumbnail.src = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;
            videoThumbnail.alt = video.title;
        }
    });
});

// Game Modal Handlers
gameCards.forEach(card => {
    card.querySelector('.play-btn').addEventListener('click', () => {
        const game = card.dataset.game;
        openGameModal(game);
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    hideAllGames();
});

// Game Display Functions
function showGame(gameId) {
    hideAllGames();
    const gameBoard = document.getElementById(gameId);
    if (gameBoard) {
        gameBoard.style.display = 'block';
        // Initialize the game if it's Rock Paper Scissors
        if (gameId === 'rps') {
            initializeRPS();
        }
    }
}

function hideAllGames() {
    gameBoards.forEach(board => {
        board.style.display = 'none';
    });
}

// Rock Paper Scissors Game
const rps = {
    playerScore: 0,
    computerScore: 0,
    choices: ['rock', 'paper', 'scissors'],
    emojis: {
        rock: '🪨',
        paper: '📄',
        scissors: '✂️'
    },
    init() {
        // Get DOM elements
        this.playerScoreElement = document.getElementById('player-score');
        this.computerScoreElement = document.getElementById('computer-score');
        this.statusElement = document.getElementById('rps-status');
        this.historyElement = document.getElementById('rps-history');
        this.buttons = document.querySelectorAll('.rps-btn');
        this.resetButton = document.getElementById('reset-rps');

        // Reset scores and UI
        this.resetGame();

        // Remove existing event listeners
        this.buttons.forEach(button => {
            button.replaceWith(button.cloneNode(true));
        });

        // Get fresh references to buttons after cloning
        this.buttons = document.querySelectorAll('.rps-btn');

        // Add event listeners
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const playerChoice = e.target.dataset.choice;
                this.playRound(playerChoice);
            });
        });

        if (this.resetButton) {
            // Remove existing event listeners from reset button
            this.resetButton.replaceWith(this.resetButton.cloneNode(true));
            // Get fresh reference to reset button
            this.resetButton = document.getElementById('reset-rps');
            // Add new event listener
            this.resetButton.addEventListener('click', () => this.resetGame());
        }
    },

    playRound(playerChoice) {
        if (!playerChoice) return;

        // Disable buttons during animation
        this.buttons.forEach(btn => btn.disabled = true);

        // Computer makes a choice
        const computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];

        // Determine winner
        let result;
        if (playerChoice === computerChoice) {
            result = 'tie';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'win';
            this.playerScore++;
            if (this.playerScoreElement) {
                this.playerScoreElement.textContent = this.playerScore;
            }
        } else {
            result = 'lose';
            this.computerScore++;
            if (this.computerScoreElement) {
                this.computerScoreElement.textContent = this.computerScore;
            }
        }

        // Update UI
        this.updateUI(playerChoice, computerChoice, result);

        // Re-enable buttons after animation
        setTimeout(() => {
            this.buttons.forEach(btn => btn.disabled = false);
        }, 1000);
    },

    updateUI(playerChoice, computerChoice, result) {
        // Update status message
        let message;
        switch (result) {
            case 'win':
                message = `You win! ${this.emojis[playerChoice]} beats ${this.emojis[computerChoice]}`;
                break;
            case 'lose':
                message = `Computer wins! ${this.emojis[computerChoice]} beats ${this.emojis[playerChoice]}`;
                break;
            case 'tie':
                message = `It's a tie! ${this.emojis[playerChoice]} vs ${this.emojis[computerChoice]}`;
                break;
        }
        if (this.statusElement) {
            this.statusElement.textContent = message;
        }

        // Update history
        if (this.historyElement) {
            this.historyElement.textContent = `You: ${this.emojis[playerChoice]} | Computer: ${this.emojis[computerChoice]}`;
        }

        // Add animation classes
        this.buttons.forEach(btn => {
            btn.classList.remove('winner', 'loser');
            if (btn.dataset.choice === playerChoice) {
                btn.classList.add(result === 'win' ? 'winner' : result === 'lose' ? 'loser' : '');
            }
        });
    },

    resetGame() {
        this.playerScore = 0;
        this.computerScore = 0;
        if (this.playerScoreElement) {
            this.playerScoreElement.textContent = '0';
        }
        if (this.computerScoreElement) {
            this.computerScoreElement.textContent = '0';
        }
        if (this.statusElement) {
            this.statusElement.textContent = 'Choose your move!';
        }
        if (this.historyElement) {
            this.historyElement.textContent = '';
        }
        this.buttons.forEach(btn => {
            btn.classList.remove('winner', 'loser');
            btn.disabled = false;
        });
    }
};

// Initialize Rock Paper Scissors game
function initializeRPS() {
    rps.init();
}

// Update the game initialization in the modal open handler
function openGameModal(gameId) {
    modal.style.display = 'block';
    showGame(gameId);
    
    // Initialize the appropriate game
    if (gameId === 'memory') {
        memoryGame.init();
    } else if (gameId === 'snake') {
        snakeGame.init();
    } else if (gameId === 'tictactoe') {
        ticTacToe.init();
    } else if (gameId === 'rps') {
        initializeRPS();
    }
}

// Create floating bubbles
function createBubbles() {
    const container = document.body;
    for (let i = 0; i < 10; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.width = Math.random() * 100 + 50 + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.animationDelay = Math.random() * 20 + 's';
        container.appendChild(bubble);
    }
}

// Create bubbles when the page loads
document.addEventListener('DOMContentLoaded', createBubbles);

// Journal functionality
const journal = {
    textarea: document.getElementById('moodJournal'),
    saveBtn: document.getElementById('saveJournal'),
    clearBtn: document.getElementById('clearJournal'),
    history: document.getElementById('journalHistory'),
    entries: JSON.parse(localStorage.getItem('moodJournalEntries')) || []
};

// Save journal entry
journal.saveBtn.addEventListener('click', () => {
    const text = journal.textarea.value.trim();
    if (!text) return;

    const entry = {
        text,
        date: new Date().toLocaleString(),
        mood: moodInput.value || 'unspecified'
    };

    journal.entries.unshift(entry);
    localStorage.setItem('moodJournalEntries', JSON.stringify(journal.entries));
    
    // Clear textarea
    journal.textarea.value = '';
    
    // Update history display
    displayJournalHistory();
});

// Clear all entries
journal.clearBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all journal entries?')) {
        journal.entries = [];
        localStorage.removeItem('moodJournalEntries');
        displayJournalHistory();
    }
});

// Display journal history
function displayJournalHistory() {
    journal.history.innerHTML = '';
    
    journal.entries.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.className = 'journal-entry';
        entryElement.innerHTML = `
            <div class="entry-date">${entry.date}</div>
            <div class="entry-mood">Mood: ${entry.mood}</div>
            <div class="entry-text">${entry.text}</div>
        `;
        journal.history.appendChild(entryElement);
    });
}

// Auto-save draft
let autoSaveTimeout;
journal.textarea.addEventListener('input', () => {
    clearTimeout(autoSaveTimeout);
    autoSaveTimeout = setTimeout(() => {
        localStorage.setItem('moodJournalDraft', journal.textarea.value);
    }, 1000);
});

// Load draft on page load
document.addEventListener('DOMContentLoaded', () => {
    const draft = localStorage.getItem('moodJournalDraft');
    if (draft) {
        journal.textarea.value = draft;
    }
    displayJournalHistory();
});

// Calendar functionality
const calendar = {
    currentDate: new Date(),
    moodEntries: JSON.parse(localStorage.getItem('moodCalendarEntries')) || {},
    elements: {
        prevBtn: document.getElementById('prevMonth'),
        nextBtn: document.getElementById('nextMonth'),
        currentMonth: document.getElementById('currentMonth'),
        daysContainer: document.getElementById('calendarDays')
    }
};

// Initialize calendar
function initCalendar() {
    calendar.elements.prevBtn.addEventListener('click', () => {
        calendar.currentDate.setMonth(calendar.currentDate.getMonth() - 1);
        renderCalendar();
    });

    calendar.elements.nextBtn.addEventListener('click', () => {
        calendar.currentDate.setMonth(calendar.currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
}

// Render calendar
function renderCalendar() {
    const year = calendar.currentDate.getFullYear();
    const month = calendar.currentDate.getMonth();
    
    // Update month display
    calendar.elements.currentMonth.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });
    
    // Get first day of month and total days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    // Clear previous calendar
    calendar.elements.daysContainer.innerHTML = '';
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day empty';
        calendar.elements.daysContainer.appendChild(emptyDay);
    }
    
    // Add days of the month
    for (let day = 1; day <= totalDays; day++) {
        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const moodEntry = calendar.moodEntries[dateKey];
        
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        if (moodEntry) {
            dayElement.classList.add(moodEntry.mood);
        }
        
        const dayNumber = document.createElement('span');
        dayNumber.className = 'day-number';
        dayNumber.textContent = day;
        dayElement.appendChild(dayNumber);
        
        if (moodEntry) {
            const moodEmoji = document.createElement('span');
            moodEmoji.textContent = getMoodEmoji(moodEntry.mood);
            dayElement.appendChild(moodEmoji);
        }
        
        dayElement.addEventListener('click', () => {
            const mood = prompt('Enter your mood for this day (happy, sad, anxious, angry, calm):');
            if (mood && ['happy', 'sad', 'anxious', 'angry', 'calm'].includes(mood.toLowerCase())) {
                calendar.moodEntries[dateKey] = {
                    mood: mood.toLowerCase(),
                    date: dateKey
                };
                localStorage.setItem('moodCalendarEntries', JSON.stringify(calendar.moodEntries));
                renderCalendar();
            }
        });
        
        calendar.elements.daysContainer.appendChild(dayElement);
    }
}

// Get emoji for mood
function getMoodEmoji(mood) {
    const emojis = {
        happy: '😊',
        sad: '😢',
        anxious: '😰',
        angry: '😠',
        calm: '😌'
    };
    return emojis[mood] || '';
}

// Initialize calendar when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initCalendar();
});

// Chatbot functionality
const chatbot = {
    messages: document.getElementById('chat-messages'),
    input: document.getElementById('chat-input'),
    sendButton: document.getElementById('send-message'),
    suggestionButtons: document.querySelectorAll('.suggestion-btn'),

    // Response templates based on categories
    responses: {
        greetings: [
            "Hello! How are you feeling today?",
            "Hi there! What's on your mind?",
            "Welcome! How can I help you today?"
        ],
        activities: [
            "Here are some activities you might enjoy:\n• Take a relaxing walk in nature\n• Try a new hobby or craft\n• Call a friend or family member\n• Practice mindfulness meditation\n• Start a gratitude journal",
            "Why not try one of these activities:\n• Do some gentle stretching\n• Listen to your favorite music\n• Cook a healthy meal\n• Read a good book\n• Try some creative writing",
            "Consider these mood-boosting activities:\n• Dance to upbeat music\n• Plant some flowers or herbs\n• Take a relaxing bath\n• Try a new exercise routine\n• Practice deep breathing"
        ],
        relaxation: [
            "Here are some relaxation techniques:\n• Deep breathing: Inhale for 4 counts, hold for 4, exhale for 4\n• Progressive muscle relaxation\n• Guided imagery meditation\n• Gentle yoga stretches\n• Mindful walking",
            "Try these calming activities:\n• Listen to nature sounds\n• Practice mindfulness meditation\n• Do gentle neck and shoulder rolls\n• Write in your journal\n• Take a warm bath with essential oils",
            "Relaxation tips for you:\n• Find a quiet space for 5-10 minutes\n• Focus on your breath\n• Try the 5-4-3-2-1 grounding technique\n• Listen to calming music\n• Practice gentle stretching"
        ],
        mood_improvement: [
            "Here are some mood-boosting tips:\n• Get some sunlight\n• Exercise for 15-30 minutes\n• Connect with a friend\n• Practice gratitude\n• Do something creative",
            "Try these mood-lifting activities:\n• Listen to upbeat music\n• Take a short walk\n• Write down three good things\n• Help someone else\n• Organize your space",
            "Mood improvement suggestions:\n• Eat a healthy snack\n• Watch funny videos\n• Practice positive affirmations\n• Set a small, achievable goal\n• Spend time in nature"
        ],
        default: [
            "I'm here to help! Would you like some specific advice about activities, relaxation, or mood improvement?",
            "I can suggest activities, relaxation techniques, or mood improvement tips. What would you like to know more about?",
            "I'd be happy to help! Would you like suggestions for activities, relaxation techniques, or ways to improve your mood?"
        ]
    },

    init() {
        this.sendButton.addEventListener('click', () => this.handleUserInput());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleUserInput();
            }
        });

        this.suggestionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const query = button.dataset.query;
                this.input.value = query;
                this.handleUserInput();
            });
        });
    },

    handleUserInput() {
        const userInput = this.input.value.trim();
        if (!userInput) return;

        // Add user message to chat
        this.addMessage(userInput, 'user');
        this.input.value = '';

        // Generate and add bot response
        const response = this.generateResponse(userInput.toLowerCase());
        setTimeout(() => {
            this.addMessage(response, 'bot');
        }, 500);
    },

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = text.replace(/\n/g, '<br>');
        
        messageDiv.appendChild(contentDiv);
        this.messages.appendChild(messageDiv);
        this.messages.scrollTop = this.messages.scrollHeight;
    },

    generateResponse(input) {
        // Check for greetings
        if (input.match(/\b(hi|hello|hey|greetings)\b/)) {
            return this.getRandomResponse('greetings');
        }

        // Check for activity-related queries
        if (input.match(/\b(what|suggest|recommend).*do|activity|activities\b/)) {
            return this.getRandomResponse('activities');
        }

        // Check for relaxation-related queries
        if (input.match(/\b(relax|calm|peace|stress|anxiety)\b/)) {
            return this.getRandomResponse('relaxation');
        }

        // Check for mood improvement queries
        if (input.match(/\b(mood|improve|better|happy|feel|sad)\b/)) {
            return this.getRandomResponse('mood_improvement');
        }

        // Default response
        return this.getRandomResponse('default');
    },

    getRandomResponse(category) {
        const responses = this.responses[category];
        return responses[Math.floor(Math.random() * responses.length)];
    }
};

// Initialize chatbot
document.addEventListener('DOMContentLoaded', () => {
    chatbot.init();
});

// Memory Match Game
const memoryGame = {
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    isLocked: false,
    emojis: ['🎮', '🎲', '🎯', '🎪', '🎨', '🎭', '🎪', '🎯'],
    
    init() {
        this.matchedPairs = 0;
        this.flippedCards = [];
        this.isLocked = false;
        
        // Get DOM elements
        this.grid = document.querySelector('.memory-grid');
        this.statusElement = document.getElementById('memory-status');
        this.resetButton = document.getElementById('reset-memory');
        
        // Initialize the game
        this.createCards();
        this.addEventListeners();
    },
    
    createCards() {
        // Clear the grid
        this.grid.innerHTML = '';
        
        // Create shuffled pairs of cards
        const cardPairs = [...this.emojis, ...this.emojis];
        this.cards = this.shuffle(cardPairs);
        
        // Create and append card elements
        this.cards.forEach((emoji, index) => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.dataset.index = index;
            card.dataset.emoji = emoji;
            card.innerHTML = '<span class="card-back">?</span>';
            this.grid.appendChild(card);
        });
    },
    
    shuffle(array) {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;
        
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        return array;
    },
    
    addEventListeners() {
        // Add click listeners to cards
        const cardElements = document.querySelectorAll('.memory-card');
        cardElements.forEach(card => {
            card.addEventListener('click', () => this.flipCard(card));
        });
        
        // Add reset button listener
        if (this.resetButton) {
            this.resetButton.addEventListener('click', () => this.resetGame());
        }
    },
    
    flipCard(card) {
        if (this.isLocked) return;
        if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
        
        card.innerHTML = `<span>${card.dataset.emoji}</span>`;
        card.classList.add('flipped');
        
        this.flippedCards.push(card);
        
        if (this.flippedCards.length === 2) {
            this.isLocked = true;
            this.checkMatch();
        }
    },
    
    checkMatch() {
        const [card1, card2] = this.flippedCards;
        const match = card1.dataset.emoji === card2.dataset.emoji;
        
        if (match) {
            this.handleMatch(card1, card2);
        } else {
            this.handleMismatch(card1, card2);
        }
    },
    
    handleMatch(card1, card2) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.matchedPairs++;
        
        if (this.matchedPairs === this.emojis.length) {
            this.statusElement.textContent = 'Congratulations! You won! 🎉';
        }
        
        this.resetTurn();
    },
    
    handleMismatch(card1, card2) {
        setTimeout(() => {
            card1.innerHTML = '<span class="card-back">?</span>';
            card2.innerHTML = '<span class="card-back">?</span>';
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            this.resetTurn();
        }, 1000);
    },
    
    resetTurn() {
        this.flippedCards = [];
        this.isLocked = false;
    },
    
    resetGame() {
        this.init();
        this.statusElement.textContent = 'Find matching pairs!';
    }
};

// Snake Game
const snakeGame = {
    canvas: null,
    ctx: null,
    snake: [],
    food: null,
    direction: 'right',
    nextDirection: 'right',
    gameLoop: null,
    score: 0,
    gridSize: 20,
    gameSpeed: 100,
    
    init() {
        // Get canvas and context
        this.canvas = document.getElementById('snake-canvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Set canvas size
        this.canvas.width = 400;
        this.canvas.height = 400;
        
        // Get DOM elements
        this.statusElement = document.getElementById('snake-status');
        this.resetButton = document.getElementById('reset-snake');
        
        // Initialize game
        this.setupGame();
        this.addEventListeners();
    },
    
    setupGame() {
        // Reset game state
        this.snake = [
            {x: 6, y: 10},
            {x: 5, y: 10},
            {x: 4, y: 10}
        ];
        this.direction = 'right';
        this.nextDirection = 'right';
        this.score = 0;
        this.generateFood();
        
        // Clear previous game loop
        if (this.gameLoop) clearInterval(this.gameLoop);
        
        // Start game loop
        this.gameLoop = setInterval(() => this.update(), this.gameSpeed);
        
        // Update status
        this.updateStatus();
    },
    
    addEventListeners() {
        // Add keyboard controls
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowUp':
                    if (this.direction !== 'down') this.nextDirection = 'up';
                    break;
                case 'ArrowDown':
                    if (this.direction !== 'up') this.nextDirection = 'down';
                    break;
                case 'ArrowLeft':
                    if (this.direction !== 'right') this.nextDirection = 'left';
                    break;
                case 'ArrowRight':
                    if (this.direction !== 'left') this.nextDirection = 'right';
                    break;
            }
        });
        
        // Add reset button listener
        if (this.resetButton) {
            this.resetButton.addEventListener('click', () => this.resetGame());
        }
    },
    
    generateFood() {
        const x = Math.floor(Math.random() * (this.canvas.width / this.gridSize));
        const y = Math.floor(Math.random() * (this.canvas.height / this.gridSize));
        this.food = {x, y};
        
        // Make sure food doesn't appear on snake
        const isOnSnake = this.snake.some(segment => 
            segment.x === this.food.x && segment.y === this.food.y
        );
        if (isOnSnake) this.generateFood();
    },
    
    update() {
        this.direction = this.nextDirection;
        
        // Move snake
        const head = {x: this.snake[0].x, y: this.snake[0].y};
        switch(this.direction) {
            case 'up': head.y--; break;
            case 'down': head.y++; break;
            case 'left': head.x--; break;
            case 'right': head.x++; break;
        }
        
        // Check for collisions
        if (this.checkCollision(head)) {
            this.gameOver();
            return;
        }
        
        // Add new head
        this.snake.unshift(head);
        
        // Check if food is eaten
        if (head.x === this.food.x && head.y === this.food.y) {
            this.score += 10;
            this.generateFood();
            this.updateStatus();
        } else {
            this.snake.pop();
        }
        
        this.draw();
    },
    
    checkCollision(head) {
        // Wall collision
        if (head.x < 0 || head.x >= this.canvas.width / this.gridSize ||
            head.y < 0 || head.y >= this.canvas.height / this.gridSize) {
            return true;
        }
        
        // Self collision
        return this.snake.some(segment => 
            segment.x === head.x && segment.y === head.y
        );
    },
    
    draw() {
        // Clear canvas
        this.ctx.fillStyle = '#f0f0f0';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw snake
        this.snake.forEach((segment, index) => {
            this.ctx.fillStyle = index === 0 ? '#4CAF50' : '#81C784';
            this.ctx.fillRect(
                segment.x * this.gridSize,
                segment.y * this.gridSize,
                this.gridSize - 2,
                this.gridSize - 2
            );
        });
        
        // Draw food
        this.ctx.fillStyle = '#FF5252';
        this.ctx.fillRect(
            this.food.x * this.gridSize,
            this.food.y * this.gridSize,
            this.gridSize - 2,
            this.gridSize - 2
        );
    },
    
    updateStatus() {
        if (this.statusElement) {
            this.statusElement.textContent = `Score: ${this.score}`;
        }
    },
    
    gameOver() {
        clearInterval(this.gameLoop);
        this.statusElement.textContent = `Game Over! Final Score: ${this.score}`;
    },
    
    resetGame() {
        this.setupGame();
    }
};

// Tic Tac Toe Game
const ticTacToe = {
    currentPlayer: 'X',
    board: ['', '', '', '', '', '', '', '', ''],
    gameActive: true,
    winningCombos: [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ],
    
    init() {
        this.currentPlayer = 'X';
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.gameActive = true;
        
        // Get DOM elements
        this.cells = document.querySelectorAll('.cell');
        this.statusElement = document.getElementById('game-status');
        this.resetButton = document.getElementById('reset-game');
        
        // Clear the board
        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o');
        });
        
        // Add event listeners
        this.addEventListeners();
        
        // Update status
        this.updateStatus();
    },
    
    addEventListeners() {
        // Add click listeners to cells
        this.cells.forEach(cell => {
            cell.addEventListener('click', () => this.handleCellClick(cell));
        });
        
        // Add reset button listener
        if (this.resetButton) {
            this.resetButton.addEventListener('click', () => this.resetGame());
        }
    },
    
    handleCellClick(cell) {
        const index = cell.dataset.index;
        
        // Check if cell is empty and game is active
        if (this.board[index] === '' && this.gameActive) {
            // Update board array
            this.board[index] = this.currentPlayer;
            
            // Update cell display
            cell.textContent = this.currentPlayer;
            cell.classList.add(this.currentPlayer.toLowerCase());
            
            // Check for win or draw
            if (this.checkWin()) {
                this.gameActive = false;
                this.statusElement.textContent = `Player ${this.currentPlayer} wins! 🎉`;
                return;
            }
            
            if (this.checkDraw()) {
                this.gameActive = false;
                this.statusElement.textContent = "It's a draw! 🤝";
                return;
            }
            
            // Switch player
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.updateStatus();
        }
    },
    
    checkWin() {
        return this.winningCombos.some(combo => {
            return combo.every(index => {
                return this.board[index] === this.currentPlayer;
            });
        });
    },
    
    checkDraw() {
        return this.board.every(cell => cell !== '');
    },
    
    updateStatus() {
        if (this.gameActive) {
            this.statusElement.textContent = `Player ${this.currentPlayer}'s turn`;
        }
    },
    
    resetGame() {
        this.init();
    }
}; 

