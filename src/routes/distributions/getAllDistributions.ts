import type { Request, Response } from "express";
import Distribution from "../../models/distribution";

export default async function getDistributions(_req: Request, res: Response) {
  try {
    const distributions = await Distribution.find();
    return res.json(distributions);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
