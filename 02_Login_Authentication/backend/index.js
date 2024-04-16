import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import { userRoutes } from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
));
app.use(cookieParser());
app.use(express.json());
app.use("/api", userRoutes);



app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});