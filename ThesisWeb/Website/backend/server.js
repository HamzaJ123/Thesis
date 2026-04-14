import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import mealRoutes from "./routes/meals.js";

// Environment setup
dotenv.config();

// Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/meals", mealRoutes);

// ==============================
// ✅ Serve Frontend Files
// ==============================

// Resolve paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from frontend folder
app.use(express.static(path.join(__dirname, "../frontend")));

// When visiting any unknown route, serve index.html
app.use(express.static(path.join(__dirname, "../frontend/html")));


// ==============================
// ✅ Start Server
// ==============================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
