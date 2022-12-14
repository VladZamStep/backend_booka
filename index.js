import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import subEmailsRoute from "./routes/subEmails.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
})

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!");
})

//Middlewares
app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001", "https://admin-booka.herokuapp.com", "https://booka-main.herokuapp.com"],
    credentials: true,
    optionSuccessStatus: 200
})
);


app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/subscribedEmails", subEmailsRoute);

app.use("err,res,req,next", () => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus.json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    }))
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    connect();
    console.log("Connected to backend!")
})

app.get("/", (req, res) => {
    res.send("API is Running")
})