// Recipe data based on moods
const moodRecipes = {
    happy: {
        recipes: [
            {
                title: "Colorful Buddha Bowl",
                description: "A vibrant, nutritious bowl packed with mood-boosting ingredients",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
                prepTime: "20 mins",
                cookTime: "15 mins",
                ingredients: ["Quinoa", "Avocado", "Cherry tomatoes", "Cucumber", "Chickpeas", "Kale", "Tahini dressing"],
                instructions: [
                    "Cook quinoa according to package instructions",
                    "Chop vegetables into bite-sized pieces",
                    "Arrange ingredients in a bowl",
                    "Drizzle with tahini dressing"
                ],
                tags: ["Healthy", "Vegetarian", "High-protein"]
            },
            {
                title: "Berry Smoothie Bowl",
                description: "A refreshing smoothie bowl packed with antioxidants",
                image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea",
                prepTime: "10 mins",
                cookTime: "5 mins",
                ingredients: ["Mixed berries", "Banana", "Greek yogurt", "Honey", "Granola", "Chia seeds"],
                instructions: [
                    "Blend berries, banana, and yogurt until smooth",
                    "Pour into a bowl",
                    "Top with granola and chia seeds",
                    "Drizzle with honey"
                ],
                tags: ["Quick", "Healthy", "Breakfast"]
            }
        ]
    },
    sad: {
        recipes: [
            {
                title: "Comforting Mac and Cheese",
                description: "A warm, creamy comfort food to lift your spirits",
                image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686",
                prepTime: "15 mins",
                cookTime: "20 mins",
                ingredients: ["Macaroni", "Cheddar cheese", "Milk", "Butter", "Flour", "Breadcrumbs"],
                instructions: [
                    "Cook pasta until al dente",
                    "Make cheese sauce with butter, flour, milk, and cheese",
                    "Combine pasta and sauce",
                    "Top with breadcrumbs and bake"
                ],
                tags: ["Comfort food", "Vegetarian", "Baked"]
            },
            {
                title: "Chocolate Lava Cake",
                description: "A rich, decadent chocolate cake with a gooey center",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
                prepTime: "10 mins",
                cookTime: "12 mins",
                ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour", "Vanilla extract"],
                instructions: [
                    "Melt chocolate and butter together",
                    "Mix in eggs and sugar",
                    "Fold in flour",
                    "Bake until edges are set but center is gooey"
                ],
                tags: ["Dessert", "Chocolate", "Quick"]
            }
        ]
    },
    anxious: {
        recipes: [
            {
                title: "Calming Chamomile Cookies",
                description: "Soothing cookies with stress-reducing ingredients",
                image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
                prepTime: "15 mins",
                cookTime: "12 mins",
                ingredients: ["Flour", "Butter", "Honey", "Chamomile tea", "Lavender", "Vanilla"],
                instructions: [
                    "Mix butter and honey",
                    "Add flour and chamomile tea",
                    "Shape into cookies",
                    "Bake until golden"
                ],
                tags: ["Baking", "Healthy", "Low-sugar"]
            },
            {
                title: "Anti-Anxiety Green Smoothie",
                description: "A nutrient-rich smoothie with calming ingredients",
                image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82",
                prepTime: "5 mins",
                cookTime: "5 mins",
                ingredients: ["Spinach", "Banana", "Almond milk", "Chia seeds", "Honey", "Vanilla"],
                instructions: [
                    "Blend spinach and banana",
                    "Add almond milk and chia seeds",
                    "Sweeten with honey",
                    "Add vanilla and blend"
                ],
                tags: ["Healthy", "Quick", "Vegan"]
            }
        ]
    },
    angry: {
        recipes: [
            {
                title: "Spicy Thai Curry",
                description: "A fiery curry to channel your energy",
                image: "https://images.unsplash.com/photo-1559314809-0d155014e29e",
                prepTime: "20 mins",
                cookTime: "25 mins",
                ingredients: ["Coconut milk", "Curry paste", "Vegetables", "Rice", "Thai basil", "Lime"],
                instructions: [
                    "Cook curry paste in oil",
                    "Add coconut milk and vegetables",
                    "Simmer until vegetables are tender",
                    "Serve with rice"
                ],
                tags: ["Spicy", "Vegan", "Thai"]
            },
            {
                title: "Hot Sauce Chicken Wings",
                description: "Spicy wings to match your mood",
                image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
                prepTime: "15 mins",
                cookTime: "30 mins",
                ingredients: ["Chicken wings", "Hot sauce", "Butter", "Garlic", "Spices", "Blue cheese dip"],
                instructions: [
                    "Season wings with spices",
                    "Bake until crispy",
                    "Toss in hot sauce mixture",
                    "Serve with blue cheese dip"
                ],
                tags: ["Spicy", "Protein", "Game day"]
            }
        ]
    },
    stressed: {
        recipes: [
            {
                title: "Anti-Stress Green Tea Smoothie",
                description: "A calming smoothie with stress-reducing ingredients",
                image: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
                prepTime: "5 mins",
                cookTime: "5 mins",
                ingredients: ["Green tea", "Banana", "Spinach", "Ginger", "Honey", "Almond milk"],
                instructions: [
                    "Brew green tea and let cool",
                    "Blend with banana and spinach",
                    "Add ginger and honey",
                    "Blend until smooth"
                ],
                tags: ["Healthy", "Quick", "Vegan"]
            },
            {
                title: "Lavender Lemon Cookies",
                description: "Calming cookies with stress-reducing lavender",
                image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
                prepTime: "15 mins",
                cookTime: "12 mins",
                ingredients: ["Flour", "Butter", "Lemon", "Lavender", "Vanilla", "Sugar"],
                instructions: [
                    "Mix butter and sugar",
                    "Add flour and lavender",
                    "Shape into cookies",
                    "Bake until golden"
                ],
                tags: ["Baking", "Healthy", "Low-sugar"]
            }
        ]
    },
    energetic: {
        recipes: [
            {
                title: "Energy Boost Acai Bowl",
                description: "A power-packed bowl for sustained energy",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
                prepTime: "10 mins",
                cookTime: "5 mins",
                ingredients: ["Acai powder", "Banana", "Berries", "Granola", "Chia seeds", "Honey"],
                instructions: [
                    "Blend acai with banana",
                    "Pour into a bowl",
                    "Top with berries and granola",
                    "Add chia seeds and honey"
                ],
                tags: ["Healthy", "Quick", "High-energy"]
            },
            {
                title: "Protein Power Bowl",
                description: "A protein-rich bowl for sustained energy",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
                prepTime: "15 mins",
                cookTime: "20 mins",
                ingredients: ["Quinoa", "Grilled chicken", "Sweet potato", "Kale", "Almonds", "Balsamic dressing"],
                instructions: [
                    "Cook quinoa and sweet potato",
                    "Grill chicken",
                    "Massage kale with dressing",
                    "Assemble bowl"
                ],
                tags: ["High-protein", "Healthy", "Balanced"]
            }
        ]
    },
    tired: {
        recipes: [
            {
                title: "Energy-Boosting Overnight Oats",
                description: "A make-ahead breakfast for sustained energy",
                image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc",
                prepTime: "5 mins",
                cookTime: "Overnight",
                ingredients: ["Oats", "Almond milk", "Chia seeds", "Honey", "Banana", "Cinnamon"],
                instructions: [
                    "Mix oats and almond milk",
                    "Add chia seeds and honey",
                    "Refrigerate overnight",
                    "Top with banana and cinnamon"
                ],
                tags: ["Breakfast", "Make-ahead", "Healthy"]
            },
            {
                title: "Iron-Rich Spinach Pasta",
                description: "A nutrient-rich pasta to combat fatigue",
                image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856",
                prepTime: "10 mins",
                cookTime: "15 mins",
                ingredients: ["Whole wheat pasta", "Spinach", "Garlic", "Olive oil", "Parmesan", "Red pepper flakes"],
                instructions: [
                    "Cook pasta",
                    "Sauté spinach and garlic",
                    "Combine with pasta",
                    "Top with cheese"
                ],
                tags: ["Healthy", "Quick", "Vegetarian"]
            }
        ]
    },
    calm: {
        recipes: [
            {
                title: "Peaceful Green Tea Cookies",
                description: "Calming cookies with green tea and lavender",
                image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
                prepTime: "15 mins",
                cookTime: "12 mins",
                ingredients: ["Flour", "Green tea powder", "Butter", "Honey", "Lavender", "Vanilla"],
                instructions: [
                    "Mix butter and honey",
                    "Add flour and green tea",
                    "Shape into cookies",
                    "Bake until golden"
                ],
                tags: ["Baking", "Healthy", "Low-sugar"]
            },
            {
                title: "Tranquil Chamomile Cake",
                description: "A soothing cake with calming ingredients",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
                prepTime: "20 mins",
                cookTime: "30 mins",
                ingredients: ["Flour", "Chamomile tea", "Honey", "Eggs", "Vanilla", "Lavender"],
                instructions: [
                    "Infuse milk with chamomile",
                    "Mix ingredients",
                    "Bake in a pan",
                    "Top with lavender"
                ],
                tags: ["Baking", "Healthy", "Low-sugar"]
            }
        ]
    }
};

// DOM Elements
const moodButtons = document.querySelectorAll('.mood-btn');
const recipeContainer = document.getElementById('recipeContainer');

// Function to create recipe cards
function createRecipeCard(recipe, mood) {
    const card = document.createElement('div');
    card.className = `recipe-card ${mood}`;
    
    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
        <div class="recipe-content">
            <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-details">
                <span>Prep: ${recipe.prepTime}</span>
                <span>Cook: ${recipe.cookTime}</span>
            </div>
            <div class="recipe-ingredients">
                <h4>Ingredients</h4>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ingredient => `
                        <li class="ingredient-tag">${ingredient}</li>
                    `).join('')}
                </ul>
            </div>
            <div class="recipe-instructions">
                <h4>Instructions</h4>
                <ol class="instructions-list">
                    ${recipe.instructions.map(instruction => `
                        <li>${instruction}</li>
                    `).join('')}
                </ol>
            </div>
            <div class="recipe-tags">
                ${recipe.tags.map(tag => `
                    <span class="recipe-tag">${tag}</span>
                `).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Function to display recipes for a mood
function displayRecipes(mood) {
    // Clear previous recipes
    recipeContainer.innerHTML = '';
    
    // Show loading state
    recipeContainer.innerHTML = `
        <div class="recipe-loading">
            <div class="loading-spinner"></div>
        </div>
    `;
    
    // Simulate loading delay
    setTimeout(() => {
        // Clear loading state
        recipeContainer.innerHTML = '';
        
        // Get recipes for the mood
        const recipes = moodRecipes[mood]?.recipes || [];
        
        // Create and append recipe cards
        recipes.forEach(recipe => {
            const card = createRecipeCard(recipe, mood);
            recipeContainer.appendChild(card);
        });
    }, 500);
}

// Add click event listeners to mood buttons
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.dataset.mood;
        displayRecipes(mood);
    });
});

// Initialize with happy recipes
document.addEventListener('DOMContentLoaded', () => {
    displayRecipes('happy');
}); 