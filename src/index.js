import express from "express";
import mongoose from "mongoose";
import {DB_NAME} from "./constants";

const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        // Handle connection error
        app.on("error", (error) => {
            console.error(`Error: ${error}`);
            throw error;
        });

        // Handle successful connection
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error(error);
    }
})();
