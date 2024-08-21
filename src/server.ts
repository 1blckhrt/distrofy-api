import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./utils/connectDB";
import { logger } from "@1blckhrt_/tslogger";
import router from "./routes";

dotenv.config();

const PORT = Number.parseInt(process.env.PORT ?? "3000");

const app = express();
connectDB();
app.set("trust proxy", 1);
app.use(cors());
app.use(express.json());
app.use("/distributions", router);

app.listen(PORT, () => {
  logger.success(`Server has started on port ${PORT}`);
});
