import express from "express";
import { getMeals, addMeal } from "../controllers/mealController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getMeals);
router.post("/", protect, addMeal);

export default router;