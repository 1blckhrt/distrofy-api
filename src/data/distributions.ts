import {
  BasedOn,
  DefaultDesktopType,
  InstallMethod,
  PackageManagementSystem,
  ReleaseModel
} from "src/utils/enums";
import { Distribution } from "src/utils/types";

export const distributions: Distribution[] = [
  {
    name: "Ubuntu",
    basedOn: BasedOn.Debian,
    latestVersion: "24.04",
    latestVersionReleaseDate: new Date("2024-08-20"),
    packageManagementSystem: PackageManagementSystem.Apt,
    releaseModel: ReleaseModel.Fixed,
    defaultDesktopType: DefaultDesktopType.DesktopEnvironment,
    installMethod: InstallMethod.GUI
  },
  {
    name: "Arch Linux",
    basedOn: BasedOn.Arch,
    latestVersion: "2024-08-21",
    latestVersionReleaseDate: new Date("2024-08-21"),
    packageManagementSystem: PackageManagementSystem.Pacman,
    releaseModel: ReleaseModel.Rolling,
    defaultDesktopType: DefaultDesktopType.Terminal,
    installMethod: InstallMethod.CLI
  },
  {
    name: "Fedora",
    basedOn: BasedOn.Independent,
    latestVersion: "40",
    latestVersionReleaseDate: new Date("2024-04-23"),
    packageManagementSystem: PackageManagementSystem.Dnf,
    releaseModel: ReleaseModel.Fixed,
    defaultDesktopType: DefaultDesktopType.DesktopEnvironment,
    installMethod: InstallMethod.GUI
  },
  {
    name: "Linux Mint",
    basedOn: BasedOn.Ubuntu,
    latestVersion: "22",
    latestVersionReleaseDate: new Date("2024-07-24"),
    packageManagementSystem: PackageManagementSystem.Apt,
    releaseModel: ReleaseModel.Fixed,
    defaultDesktopType: DefaultDesktopType.DesktopEnvironment,
    installMethod: InstallMethod.GUI
  }
];
