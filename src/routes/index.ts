import express from "express";
import { createDistribution } from "./distributions/createDistribution";
import { getDistributions } from "./distributions/getAllDistributions";
import { updateDistribution } from "./distributions/updateDistribution";

const router = express.Router();

router.get("/", getDistributions);
router.post("/", createDistribution);
router.patch("/:id", updateDistribution);

export default router;
