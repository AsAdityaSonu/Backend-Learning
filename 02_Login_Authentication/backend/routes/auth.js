import express from "express";
import bcrypt from "bcrypt";
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
        return res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

export { router as userRoutes };