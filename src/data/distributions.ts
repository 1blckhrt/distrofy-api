import type { Distribution } from "src/utils/types";

export const distributions: Distribution[] = [
  {
    name: "Ubuntu",
    basedOn: "Debian",
    latestVersion: "24.04",
    latestVersionReleaseDate: new Date("2024-08-20"),
    packageManagementSystem: "apt",
    releaseModel: "Fixed",
    defaultDesktopType: "Desktop Environment",
    installMethod: "GUI",
    verified: true,
    submitter: "1blckhrt"
  },
  {
    name: "Arch",
    basedOn: "Arch",
    latestVersion: "2024-08-21",
    latestVersionReleaseDate: new Date("2024-08-21"),
    packageManagementSystem: "pacman",
    releaseModel: "rolling",
    defaultDesktopType: "terminal",
    installMethod: "terminal",
    verified: true,
    submitter: "1blckhrt"
  },
  {
    name: "Fedora",
    basedOn: "independent",
    latestVersion: "40",
    latestVersionReleaseDate: new Date("2024-04-23"),
    packageManagementSystem: "dnf",
    releaseModel: "fixed",
    defaultDesktopType: "Desktop Environment",
    installMethod: "GUI",
    verified: true,
    submitter: "1blckhrt"
  },
  {
    name: "Linux Mint",
    basedOn: "Ubuntu",
    latestVersion: "22",
    latestVersionReleaseDate: new Date("2024-07-24"),
    packageManagementSystem: "apt",
    releaseModel: "fixed",
    defaultDesktopType: "Desktop Environment",
    installMethod: "GUI",
    verified: true,
    submitter: "1blckhrt"
  }
];
