import express from "express";
import { createDistribution } from "./distributions/createDistribution.js";
import { updateDistribution } from "./distributions/updateDistribution.js";
import { getDistributions } from "./distributions/getAllDistributions.js";

const router = express.Router();

router.get("/", getDistributions);
router.post("/", createDistribution);
router.patch("/:id", updateDistribution);

export default router;
