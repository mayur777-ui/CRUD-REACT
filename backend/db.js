import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const main = async () => {
    const MONGO_URL = process.env.MONGO_URL;
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
    }
};

export default main;
