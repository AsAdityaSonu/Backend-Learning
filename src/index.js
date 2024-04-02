import express from "express";

const app = express();


// ----- Connect to MongoDB -----
import connectDB from "./db/index.js";
connectDB();



// ------ dotenv ------
// require("dotenv").config({path: "./env"});

import dotenv from "dotenv";
dotenv.config({
    path: "./env"
});


// ----- Approach 01 -----
/*
import mongoose from "mongoose";
import {DB_NAME} from "./constants";

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_HOST}/${DB_NAME}`);
        
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

*/
