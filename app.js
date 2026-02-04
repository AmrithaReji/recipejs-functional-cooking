/* -------------------------
   Recipe Data (8 Recipes)
-------------------------- */

const recipes = [
  {
    id: 1,
    title: "Creamy Alfredo Pasta",
    time: 25,
    difficulty: "easy",
    description: "A quick creamy pasta dish perfect for busy days.",
    category: "pasta"
  },
  {
    id: 2,
    title: "Veggie Salad Bowl",
    time: 15,
    difficulty: "easy",
    description: "A fresh healthy salad with crunchy vegetables.",
    category: "salad"
  },
  {
    id: 3,
    title: "Chocolate Mug Cake",
    time: 10,
    difficulty: "easy",
    description: "Soft instant chocolate cake made in minutes.",
    category: "dessert"
  },
  {
    id: 4,
    title: "Paneer Butter Masala",
    time: 45,
    difficulty: "medium",
    description: "Paneer cubes cooked in buttery tomato gravy.",
    category: "curry"
  },
  {
    id: 5,
    title: "Vegetable Fried Rice",
    time: 30,
    difficulty: "medium",
    description: "Simple fried rice loaded with vegetables.",
    category: "rice"
  },
  {
    id: 6,
    title: "Masala Dosa",
    time: 40,
    difficulty: "medium",
    description: "Crispy dosa filled with spicy potato stuffing.",
    category: "breakfast"
  },
  {
    id: 7,
    title: "Chicken Biryani",
    time: 75,
    difficulty: "hard",
    description: "A flavorful rice dish cooked with spices and chicken.",
    category: "curry"
  },
  {
    id: 8,
    title: "Slow Cooked Dal Tadka",
    time: 65,
    difficulty: "hard",
    description: "Traditional dal cooked slowly with spices.",
    category: "curry"
  }
];

/* -------------------------
   DOM Selection
-------------------------- */

const recipeContainer = document.querySelector("#recipe-container");

/* -------------------------
   Create Recipe Card
-------------------------- */

const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>

      <div class="recipe-meta">
        <span>⏱ ${recipe.time} min</span>

        <span class="difficulty ${recipe.difficulty}">
          ${recipe.difficulty}
        </span>
      </div>

      <p>${recipe.description}</p>
    </div>
  `;
};

/* -------------------------
   Render Recipes
-------------------------- */

const renderRecipes = (recipesArray) => {
  recipeContainer.innerHTML = recipesArray
    .map((recipe) => createRecipeCard(recipe))
    .join("");
};

/* -------------------------
   Initialize App
-------------------------- */

renderRecipes(recipes);