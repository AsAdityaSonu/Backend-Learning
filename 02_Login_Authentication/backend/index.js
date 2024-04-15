import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});