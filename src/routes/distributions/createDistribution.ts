import type { Request, Response } from "express";
import Distribution from "../../models/distribution";

export default async function createDistribution(req: Request, res: Response) {
  try {
    const distributionEntry = new Distribution({
      name: req.body.name,
      basedOn: req.body.basedOn,
      latestVersion: req.body.latestVersion,
      latestVersionReleaseDate: req.body.latestVersionReleaseDate,
      packageManagementSystem: req.body.packageManagementSystem,
      releaseModel: req.body.releaseModel,
      defaultDesktopType: req.body.defaultDesktopType,
      installMethod: req.body.installMethod,
      submitter: req.body.submitter
    });

    const distributionExists = await Distribution.findOne({
      name: req.body.name,
      latestVersion: req.body.latestVersion
    });

    if (distributionExists) {
      return res.status(409).json({ message: "Distribution already exists" });
    }

    const newDistributionEntry = await distributionEntry.save();
    return res.status(201).json(newDistributionEntry);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}
