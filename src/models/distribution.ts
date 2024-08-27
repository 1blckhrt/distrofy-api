import mongoose from "mongoose";

const distributionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  basedOn: {
    type: String,
    required: true
  },
  latestVersion: {
    type: String,
    required: true
  },
  latestVersionReleaseDate: {
    type: Date,
    required: true
  },
  packageManagementSystem: {
    type: String,
    required: true
  },
  releaseModel: {
    type: String,
    required: true
  },
  defaultDesktopType: {
    type: String,
    required: true
  },
  installMethod: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  submitter: {
    type: String,
    required: true
  }
});

export default mongoose.model("Distribution", distributionSchema);
