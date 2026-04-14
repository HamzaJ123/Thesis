import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (user) => {
    return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
};

export const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, phone, gender, email, password } = req.body;

        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({
            firstName,
            lastName,
            phone,
            gender,
            email,
            password,
        });

        res.status(201).json({
            message: "Registration successful",
            token: generateToken(user),
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                gender: user.gender,
                email: user.email,
                plan: user.plan,
                subscriptionType: user.subscriptionType,
            },
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({
            message: "Login successful",
            token: generateToken(user),
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                gender: user.gender,
                email: user.email,
                plan: user.plan,
                subscriptionType: user.subscriptionType,
            },
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

export const upgradePlan = async (req, res) => {
    try {
        const { subscriptionType } = req.body;

        if (!["monthly", "annual"].includes(subscriptionType)) {
            return res.status(400).json({ message: "Invalid subscription type" });
        }

        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.plan = "premium";
        user.subscriptionType = subscriptionType;

        await user.save();

        res.status(200).json({
            message: "Plan upgraded successfully",
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                gender: user.gender,
                email: user.email,
                plan: user.plan,
                subscriptionType: user.subscriptionType,
            },
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};