import process from "node:process";
import { logger } from "@1blckhrt_/tslogger";
import mongoose from "mongoose";

export default async function connectDB() {
  if (process.env.DB_URL) {
    void mongoose.connect(process.env.DB_URL);
  } else {
    logger.error(
      "DB_URL environment variable is not defined. Errors might occur."
    );
  }

  const db = mongoose.connection;
  db.on("error", (error) => logger.error(`${error}`));
  db.once("open", () => logger.success("Connected to MongoDB!"));
}
