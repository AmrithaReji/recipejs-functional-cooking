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
    .map(createRecipeCard)
    .join("");
};


/* -------------------------
   Filter + Sort State
-------------------------- */

let activeFilter = "all";
let activeSort = null;


/* -------------------------
   Pure Filter Function
-------------------------- */

const filterRecipes = (recipesArray, filterType) => {
  if (filterType === "all") return recipesArray;

  if (filterType === "quick") {
    return recipesArray.filter((recipe) => recipe.time < 30);
  }

  return recipesArray.filter(
    (recipe) => recipe.difficulty === filterType
  );
};


/* -------------------------
   Pure Sort Function
-------------------------- */

const sortRecipes = (recipesArray, sortType) => {
  const copyArray = [...recipesArray];

  if (sortType === "name") {
    return copyArray.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (sortType === "time") {
    return copyArray.sort((a, b) => a.time - b.time);
  }

  return copyArray;
};


/* -------------------------
   Central Update Display
-------------------------- */

const updateDisplay = () => {
  let updatedRecipes = filterRecipes(recipes, activeFilter);

  updatedRecipes = sortRecipes(updatedRecipes, activeSort);

  renderRecipes(updatedRecipes);
};


/* -------------------------
   Event Listeners
-------------------------- */

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    updateDisplay();
  });
});

document.querySelectorAll("[data-sort]").forEach((button) => {
  button.addEventListener("click", () => {
    activeSort = button.dataset.sort;
    updateDisplay();
  });
});


/* -------------------------
   Initialize App
-------------------------- */

updateDisplay();