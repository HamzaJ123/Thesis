import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import mealRoutes from "./routes/meals.js";

//environment setup
dotenv.config();

//express app
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Connecting to mongoDB
connectDB();

//API routes
app.use("/api/auth", authRoutes);
app.use("/api/meals", mealRoutes);



//Resolving paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//serve static files from frontend folder
app.use(express.static(path.join(__dirname, "../frontend")));

//when visiting any unknown route, serve index.html
app.use(express.static(path.join(__dirname, "../frontend/html")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
