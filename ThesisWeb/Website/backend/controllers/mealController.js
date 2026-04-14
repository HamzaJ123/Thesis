import Meal from "../models/Meal.js";

export const getMeals = async (req, res) => {
    try {
        const meals = await Meal.find({ user: req.user._id }).sort({ loggedAt: -1 });
        res.status(200).json(meals);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

export const addMeal = async (req, res) => {
    try {
        const { name, calories, grams, category } = req.body;

        if (!name || !calories || !grams) {
            return res.status(400).json({ message: "Name, calories and grams are required" });
        }

        const meal = await Meal.create({
            user: req.user._id,
            name,
            calories,
            grams,
            category: category || "General",
        });

        res.status(201).json(meal);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};