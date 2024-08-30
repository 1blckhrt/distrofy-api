import process from "node:process";
import { logger } from "@1blckhrt_/tslogger";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import router from "./routes";
import connectDB from "./utils/connectDB";

dotenv.config();

const PORT = process.env.PORT;

const app = express();
void connectDB();
app.set("trust proxy", 1);
app.use(cors());
app.use(express.json());
app.use("/distributions", router);

app.listen(PORT, () => {
  logger.success(`Server has started on port ${PORT}`);
});
