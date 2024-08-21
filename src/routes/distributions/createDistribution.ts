import { Request, Response } from "express";
import Distribution from "../../models/distribution";

export async function createDistribution(req: Request, res: Response) {
    const distributionEntry = new Distribution({
        name: req.body.name,
        latestVersion: req.body.latestVersion,
        packageManagementSystem: req.body.packageManagementSystem,
        releaseModel: req.body.releaseModel
    });

    try {
        const newDistributionEntry = await distributionEntry.save();
        res.status(201).json(newDistributionEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
