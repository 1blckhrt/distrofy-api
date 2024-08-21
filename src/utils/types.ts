import { BasedOn, DefaultDesktopType, InstallMethod, PackageManagementSystem, ReleaseModel } from "src/enums";

export type Distribution = {
    name: string;
    basedOn: BasedOn;
    latestVersion: string;
    latestVersionReleaseDate?: Date;
    packageManagementSystem: PackageManagementSystem;
    releaseModel: ReleaseModel;
    defaultDesktopType?: DefaultDesktopType;
    installMethod?: InstallMethod;
}