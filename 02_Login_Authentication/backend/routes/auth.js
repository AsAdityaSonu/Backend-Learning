import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../models/User.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await userModel.findOne({ email }); // Added await 

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            name: username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        return res.status(201).json({ status:true, message: "User created successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({email});

        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ email: user.email}, process.env.JWT_SECRET, { expiresIn: "1h" });
        return res.cookie("token", token, { httpOnly: true }).json({status: true, message: "Login successful" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

export { router as userRoutes };