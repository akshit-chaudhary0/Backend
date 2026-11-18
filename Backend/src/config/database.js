import mongoose from "mongoose";
import { DB_NAME } from "./Constant.js";

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not configured");
        }

        const connInstance = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: DB_NAME
        });
        console.log(`MongoDB Connected: ${connInstance.connection.host}`);
    } catch (error) {
        console.log("mongoose connection error: ", error);
        process.exit(1);
    }
}
export default connectDB;


