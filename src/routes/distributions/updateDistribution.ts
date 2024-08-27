import { Request, Response } from "express";
import Distribution from "../../models/distribution";

export default async function updateDistribution(req: Request, res: Response) {
  const distributionId = req.params.id;
  const distribution = await Distribution.findById(distributionId);

  if (!distribution) {
    return res.status(404).json({ message: "Distribution not found" });
  }

  res.locals.distribution = distribution;

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
    res.locals.distribution.latestVersionReleaseDate =
      req.body.latestVersionReleaseDate;
  }

  if (req.body.packageManagementSystem != null) {
    res.locals.distribution.packageManagementSystem =
      req.body.packageManagementSystem;
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

  if (req.body.submitter != null) {
    res.locals.distribution.submitter = req.body.distribution.submitter;
  }

  try {
    const updatedDistribution = await res.locals.distribution.save();
    return res.json(updatedDistribution);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}
