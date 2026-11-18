import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: './.env'
});

const PORT = Number(process.env.PORT) || 4000;

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {    // to check if there are any errors 
            console.log("ERROR", error);
            throw error;
        });


        app.listen(PORT, () => {
            console.log(`Server is running at port: ${PORT}`);
        });
    } catch (err) {
        console.log("MONGO db connection failed !!! ", err);

    }
}

startServer();