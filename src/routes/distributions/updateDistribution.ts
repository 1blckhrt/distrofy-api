import { Request, Response } from "express";

export async function updateDistribution(req: Request, res: Response) {
    if (req.body.name != null) {
        res.locals.distribution.name = req.body.name;
    }

    if (req.body.basedOn != null) {
        res.locals.distribution.basedOn = req.body.basedOn;
    }

    if (req.body.latestVersion != null) {
        res.locals.distribution.latestVersion = req.body.latestVersion;
    }

    if (req.body.latestVersionReleaseDate != null) {
        res.locals.distribution.latestVersionReleaseDate = req.body.latestVersionReleaseDate;
    }

    if (req.body.packageManagementSystem != null) {
        res.locals.distribution.packageManagementSystem = req.body.packageManagementSystem;
    }

    if (req.body.releaseModel != null) {
        res.locals.distribution.releaseModel = req.body.releaseModel;
    }

    if (req.body.defaultDesktopType != null) {
        res.locals.distribution.defaultDesktopType = req.body.defaultDesktopType;
    }
    
    if (req.body.installMethod != null) {
        res.locals.distribution.installMethod = req.body.installMethod;
    }

    try {
        const updatedDistribution = await res.locals.distribution.save();
        res.json(updatedDistribution);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
