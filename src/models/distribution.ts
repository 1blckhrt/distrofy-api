import mongoose from "mongoose";
import {
  BasedOn,
  DefaultDesktopType,
  InstallMethod,
  PackageManagementSystem,
  ReleaseModel
} from "../utils/enums";

const distributionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  basedOn: {
    type: String,
    enum: [BasedOn.Debian, BasedOn.Arch, BasedOn.Independent]
  },
  latestVersion: {
    type: String,
    required: true
  },
  latestVersionReleaseDate: {
    type: Date
  },
  packageManagementSystem: {
    type: String,
    required: true,
    enum: [
      PackageManagementSystem.Apt,
      PackageManagementSystem.Dnf,
      PackageManagementSystem.Pacman,
      PackageManagementSystem.Other
    ]
  },
  releaseModel: {
    type: String,
    required: true,
    enum: [ReleaseModel.Fixed, ReleaseModel.Rolling]
  },
  defaultDesktopType: {
    type: String,
    enum: [
      DefaultDesktopType.DesktopEnvironment,
      DefaultDesktopType.WindowManager,
      DefaultDesktopType.Terminal
    ]
  },
  installMethod: {
    type: String,
    enum: [InstallMethod.CLI, InstallMethod.GUI]
  }
});

export default mongoose.model("Distribution", distributionSchema);
