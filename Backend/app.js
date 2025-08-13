import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';
import contactRouter from './routes/contactRoute.js';


const app = express();
dotenv.config({path:"./config/config.env"})

app.use(
    cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],/* POST FOR SENDING DATA IN BACKEND  */
    credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation" , reservationRouter);
app.use("/api/v1/contact" ,contactRouter);

 
dbConnection();

app.use(errorMiddleware);

app.get("/", (req, res) => {
    res.send("✅ Backend is running successfully!");
});

export default app;
