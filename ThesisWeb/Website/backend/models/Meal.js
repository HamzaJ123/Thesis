import mongoose from "mongoose";

const mealSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        calories: {
            type: Number,
            required: true,
        },
        grams: {
            type: Number,
            required: true,
            default: 100,
        },
        category: {
            type: String,
            default: "General",
        },
        loggedAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const Meal = mongoose.model("Meal", mealSchema);
export default Meal;