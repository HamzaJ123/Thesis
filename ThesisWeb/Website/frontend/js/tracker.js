// Simulated food database for autocomplete/auto-fill
const mealDatabase = [
    { name: "Grilled Chicken Breast", calories: 220 },
    { name: "Rice (100g)", calories: 130 },
    { name: "Boiled Egg", calories: 80 },
    { name: "Salad Bowl", calories: 60 },
    { name: "Oatmeal", calories: 150 },
    { name: "Pizza Slice", calories: 285 },
    { name: "Apple", calories: 95 },
    { name: "Banana", calories: 105 },
    { name: "White Bread", calories: 265 },
    { name: "Whole Wheat Bread", calories: 247 },
    { name: "Butter", calories: 717 },
    { name: "Cheddar Cheese", calories: 402 },
    { name: "Milk", calories: 42 },
    { name: "Yogurt", calories: 59 },
    { name: "Greek Yogurt", calories: 97 },
    { name: "Ice Cream", calories: 207 },
    { name: "Chocolate", calories: 546 },
    { name: "Dark Chocolate", calories: 598 },

    { name: "French Fries", calories: 312 },
    { name: "Hamburger", calories: 295 },
    { name: "Cheeseburger", calories: 303 },
    { name: "Hot Dog", calories: 290 },
    { name: "Fried Chicken", calories: 239 },
    { name: "Chicken Nuggets", calories: 296 },
    { name: "Spaghetti", calories: 158 },
    { name: "Mac and Cheese", calories: 164 },
    { name: "Lasagna", calories: 135 },
    { name: "Tacos", calories: 226 },

    { name: "Brown Rice", calories: 111 },
    { name: "Quinoa", calories: 120 },
    { name: "Pasta", calories: 131 },
    { name: "Noodles", calories: 138 },
    { name: "Oats", calories: 389 },
    { name: "Cornflakes", calories: 357 },
    { name: "Granola", calories: 471 },

    { name: "Egg Fried Rice", calories: 163 },
    { name: "Chicken Curry", calories: 240 },
    { name: "Beef Steak", calories: 271 },
    { name: "Pork Chop", calories: 231 },
    { name: "Grilled Fish", calories: 206 },
    { name: "Salmon", calories: 208 },
    { name: "Tuna", calories: 132 },
    { name: "Shrimp", calories: 99 },

    { name: "Mashed Potatoes", calories: 88 },
    { name: "Baked Potato", calories: 93 },
    { name: "Sweet Potato", calories: 86 },
    { name: "Carrots", calories: 41 },
    { name: "Broccoli", calories: 55 },
    { name: "Spinach", calories: 23 },
    { name: "Cucumber", calories: 16 },
    { name: "Tomato", calories: 18 },

    { name: "Avocado", calories: 160 },
    { name: "Peanut Butter", calories: 588 },
    { name: "Almonds", calories: 579 },
    { name: "Cashews", calories: 553 },
    { name: "Walnuts", calories: 654 },
    { name: "Sunflower Seeds", calories: 584 },

    { name: "Apple Juice", calories: 46 },
    { name: "Orange Juice", calories: 45 },
    { name: "Coca Cola", calories: 42 },
    { name: "Pepsi", calories: 41 },
    { name: "Energy Drink", calories: 45 },

    { name: "Banana Bread", calories: 326 },
    { name: "Pancakes", calories: 227 },
    { name: "Waffles", calories: 291 },
    { name: "Donuts", calories: 452 },
    { name: "Muffin", calories: 377 },

    { name: "Chicken Sandwich", calories: 239 },
    { name: "Turkey Sandwich", calories: 250 },
    { name: "Ham Sandwich", calories: 245 },
    { name: "Club Sandwich", calories: 300 },

    { name: "Vegetable Soup", calories: 50 },
    { name: "Chicken Soup", calories: 75 },
    { name: "Tomato Soup", calories: 74 },

    { name: "Fried Egg", calories: 196 },
    { name: "Scrambled Eggs", calories: 148 },
    { name: "Omelette", calories: 154 },

    { name: "Protein Shake", calories: 120 },
    { name: "Smoothie", calories: 150 },

    { name: "Watermelon", calories: 30 },
    { name: "Strawberries", calories: 32 },
    { name: "Blueberries", calories: 57 },
    { name: "Pineapple", calories: 50 },
    { name: "Mango", calories: 60 },
    { name: "Grapes", calories: 69 },
    { name: "Orange", calories: 47 },
    { name: "Pear", calories: 57 },

    { name: "Pizza Margherita", calories: 266 },
    { name: "Pepperoni Pizza", calories: 298 },
    { name: "BBQ Chicken Pizza", calories: 275 },

    { name: "Fried Rice", calories: 163 },
    { name: "Chicken Biryani", calories: 222 },
    { name: "Beef Biryani", calories: 250 },

    { name: "Falafel", calories: 333 },
    { name: "Hummus", calories: 166 },
    { name: "Pita Bread", calories: 275 },

    { name: "Sushi", calories: 130 },
    { name: "Ramen", calories: 436 },
    { name: "Dumplings", calories: 250 },

    { name: "Cheese Pizza Slice", calories: 285 },
    { name: "Garlic Bread", calories: 350 },
    { name: "Onion Rings", calories: 411 },

    { name: "Cereal", calories: 379 },
    { name: "Milkshake", calories: 112 },
    { name: "Coffee (Black)", calories: 2 },
    { name: "Coffee with Milk", calories: 30 },
    { name: "Tea", calories: 2 },

    { name: "Butter Chicken", calories: 490 },
    { name: "Paneer Curry", calories: 265 },
    { name: "Lentils", calories: 116 },

    { name: "Granola Bar", calories: 471 },
    { name: "Energy Bar", calories: 250 },

    { name: "Boiled Corn", calories: 96 },
    { name: "Popcorn", calories: 375 },
    { name: "Chips", calories: 536 },
    { name: "Nachos", calories: 346 }
];

const mealSearch = document.getElementById("mealSearch");
const caloriesInput = document.getElementById("calories");
const trackerForm = document.getElementById("trackerForm");
const mealList = document.getElementById("mealItems");
const totalCalories = document.getElementById("totalCalories");
const premiumModal = document.getElementById("premiumModal");
const continueBtn = document.getElementById("continueBtn");
const closeModal = document.getElementById("closeModal");
const goPremiumBtn = document.getElementById("goPremium");
const trackerTitle = document.getElementById("trackerTitle");
const trackerInfo = document.getElementById("trackerInfo");
const guestLimitText = document.getElementById("guestLimitText");
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
const token = localStorage.getItem("token");

const registerNavItem = document.getElementById("registerNavItem");
const loginNavItem = document.getElementById("loginNavItem");
const profileNavItem = document.getElementById("profileNavItem");

const ageInput = document.getElementById("age");
const userHeightInput = document.getElementById("userHeight");
const userWeightInput = document.getElementById("userWeight");
const activityLevelInput = document.getElementById("activityLevel");
const goalInput = document.getElementById("goal");
const calculateCaloriesBtn = document.getElementById("calculateCaloriesBtn");
const calorieResult = document.getElementById("calorieResult");
const bmrResult = document.getElementById("bmrResult");
const gramsInput = document.getElementById("grams");
const mealSuggestions = document.getElementById("mealSuggestions");

let total = 0;

// Fill dropdown suggestions from meal database
if (mealSuggestions) {
    mealSuggestions.innerHTML = "";

    mealDatabase.forEach((meal) => {
        const option = document.createElement("option");
        option.value = meal.name;
        mealSuggestions.appendChild(option);
    });
}

// Navbar state fallback
if (isLoggedIn) {
    if (registerNavItem) registerNavItem.style.display = "none";
    if (loginNavItem) loginNavItem.style.display = "none";
    if (profileNavItem) profileNavItem.style.display = "list-item";
} else {
    if (registerNavItem) registerNavItem.style.display = "list-item";
    if (loginNavItem) loginNavItem.style.display = "list-item";
    if (profileNavItem) profileNavItem.style.display = "none";
}

// Logged-in users should not see guest-only content
if (isLoggedIn) {
    if (trackerTitle) trackerTitle.textContent = "Calorie Tracker";
    if (trackerInfo) {
        trackerInfo.textContent = "Search meals to get calories automatically and track your meals.";
    }
    if (guestLimitText) guestLimitText.style.display = "none";
    if (goPremiumBtn) goPremiumBtn.style.display = "none";
}

// Guest meal count
let mealCount = parseInt(localStorage.getItem("guestMealCount")) || 0;

// Search for meal and auto-fill calories
mealSearch.addEventListener("input", () => {
    const query = mealSearch.value.trim().toLowerCase();
    const foundMeal = mealDatabase.find((meal) =>
        meal.name.toLowerCase().includes(query)
    );

    const grams = parseFloat(gramsInput.value) || 100;

    if (foundMeal) {
        const calculatedCalories = Math.round((foundMeal.calories * grams) / 100);
        caloriesInput.value = `${calculatedCalories}`;
    } else {
        caloriesInput.value = "";
    }
});

// Load real meals for logged-in user
async function loadMeals() {
    if (!isLoggedIn || !token) return;

    try {
        const response = await fetch("/api/meals", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (!response.ok) {
            console.error(data.message || "Failed to load meals.");
            return;
        }

        mealList.innerHTML = "";
        total = 0;

        data.forEach((meal) => {
            const li = document.createElement("li");
            li.textContent = `${meal.name} — ${meal.calories} kcal`;
            mealList.appendChild(li);
            total += meal.calories;
        });

        totalCalories.textContent = `Total Calories: ${total} kcal`;
    } catch (error) {
        console.error("Load meals error:", error);
    }
}

// Add meal
trackerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const meal = mealSearch.value.trim();
    const calories = parseInt(caloriesInput.value.trim());
    const grams = parseFloat(gramsInput.value);

    if (!meal || !calories || !grams) return;

    // Guest mode
    if (!isLoggedIn) {
        if (mealCount >= 3) {
            localStorage.setItem("redirectAfterRegister", "premium");
            premiumModal.style.display = "flex";
            return;
        }

        const li = document.createElement("li");
        li.textContent = `${meal} — ${grams}g — ${calories} kcal`;
        mealList.appendChild(li);

        mealCount++;
        localStorage.setItem("guestMealCount", mealCount);

        total += calories;
        totalCalories.textContent = `Total Calories: ${total} kcal`;

        trackerForm.reset();
        gramsInput.value = 100;
        return;
    }

    // Logged-in mode: save to backend
    try {
        const response = await fetch("/api/meals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: meal,
                calories,
                grams,
                category: "General",
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Failed to save meal.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = `${meal} — ${grams}g — ${calories} kcal`;
        mealList.appendChild(li);

        total += data.calories;
        totalCalories.textContent = `Total Calories: ${total} kcal`;

        trackerForm.reset();
        gramsInput.value = 100;

    } catch (error) {
        console.error("Save meal error:", error);
        alert("Server error. Please try again later.");
    }
});

// Premium modal actions
if (continueBtn) {
    continueBtn.onclick = () => {
        localStorage.setItem("redirectAfterRegister", "premium");
        window.location.href = "register.html";
    };
}

if (closeModal) {
    closeModal.onclick = () => {
        premiumModal.style.display = "none";
    };
}

window.onclick = (event) => {
    if (event.target === premiumModal) {
        premiumModal.style.display = "none";
    }
};

// Manual Go Premium button
if (goPremiumBtn) {
    goPremiumBtn.onclick = () => {
        localStorage.setItem("redirectAfterRegister", "premium");
        window.location.href = "register.html";
    };
}

// Personalized calorie recommendation
if (calculateCaloriesBtn) {
    calculateCaloriesBtn.addEventListener("click", () => {
        const age = parseInt(ageInput.value);
        const height = parseFloat(userHeightInput.value);
        const weight = parseFloat(userWeightInput.value);
        const activityMultiplier = parseFloat(activityLevelInput.value);
        const goal = goalInput.value;

        const gender = (localStorage.getItem("userGender") || "male").toLowerCase();

        if (!age || !height || !weight || !activityMultiplier || !goal) {
            calorieResult.textContent = "Recommended Calories: Please fill all fields.";
            bmrResult.textContent = "BMR: -";
            return;
        }

        let bmr;

        if (gender === "female") {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        }

        let dailyCalories = bmr * activityMultiplier;

        if (goal === "lose") {
            dailyCalories -= 500;
        } else if (goal === "gain") {
            dailyCalories += 300;
        }

        calorieResult.textContent = `Recommended Calories: ${Math.round(dailyCalories)} kcal/day`;
        bmrResult.textContent = `BMR: ${Math.round(bmr)} kcal/day`;
    });
}

// Initial load for logged-in users
loadMeals();