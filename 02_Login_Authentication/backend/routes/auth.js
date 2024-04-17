import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../models/User.js";
import nodemailer from "nodemailer";

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

router.post("/forgotpassword", async (req, res) => {
    try {
        const { email } = req.body;
        const user = await userModel.findOne({email});

        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        // Send email with password reset link using nodemailer
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "5m" });

        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "adityasonudz@gmail.com",
                pass: process.env.PASSWORD,
            },
        });

        var mailOptions = {
            from: "adityasonudz@gmail.com",
            to: email,
            subject: "Password Reset",
            text: `http://localhost:5173/resetpassword/${token}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });

        return res.status(200).json({ status: true, message: "Email sent" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

});

router.post("/resetpassword/:token", async (req, res) => {
    const token = req.params.token;
    const { password } = req.body;

    if (!token) {
        return res.status(400).json({ message: "Invalid token" });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const id = decoded.id;

        const hashedPassword = await bcrypt.hash(password, 10);
        await userModel.findByIdAndUpdate({_id: id}, { password: hashedPassword });
        return res.status(200).json({ status: true, message: "Password reset successful" });
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

export { router as userRoutes };