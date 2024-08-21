import express from "express";
const router = express.Router();
import distribution from "../models/distribution"

// get all distributions
router.get("/", async (_req, res) => {
    try {
        const distributions = await distribution.find();
        res.json(distributions)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// getting 1
router.get("/:id", (req, res) => {
    res.send(req.params.id)
})

// creating 1
router.post("/:id", async (req, res) => {
    const distributionEntry = new distribution({
        name: req.body.name,
        latestVersion: req.body.latestVersion,
        packageManagementSystem: req.body.packageManagementSystem,
        releaseModel: req.body.releaseModel
    })

    try {
        const newDistributionEntry = await distributionEntry.save()
        res.status(201).json(newDistributionEntry);

    } catch (error) {
        
    }
})

// updating one
// router.patch("/:id", (req, res) => {

// })

// deleting one
// router.delete("/:id", (req, res) => {

// })

export default router;