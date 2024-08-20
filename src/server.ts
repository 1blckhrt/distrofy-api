import dotenv from 'dotenv'; 
import { logger } from "@1blckhrt_/tslogger";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();

if (process.env.DB_URL) {
  mongoose.connect(process.env.DB_URL);
} else {
  logger.error("DB_URL environment variable is not defined. The program will likely crash.");
}
const db = mongoose.connection;
db.on("error", (error) => logger.error(`${error}`))
db.once("open", () => logger.success("Connected to MongoDB!"))

app.use(express.json());

import distributionsRouter from "./routes/distributions";
app.use("/distributions", distributionsRouter)

app.listen(3000, () => {
  logger.success("Server has started on port 3000");
});

