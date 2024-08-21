import mongoose from "mongoose";

const distributionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    basedOn: {
        type: String,
        enum: ["Debian", "Arch", "Independent/Other"]
    },
    latestVersion: {
        type: String,
        required: true
    },
    latestVersionReleaseDate: {
        type: Date,
    },
    packageManagementSystem: {
        type: String,
        required: true,
        enum: ["apt", "pacman", "dnf", "other"]
    },
    releaseModel: {
        type: String,
        required: true,
        enum: ["Fixed", "Rolling"]
    },
    defaultDesktopType: {
        type: String,
        enum: ["Desktop Environment", "Window Manager", "Terminal"]
    },
    installMethod: {
        type: String,
        enum: ["Terminal based", "GUI based"]
    }
})

export default mongoose.model("distribution", distributionSchema)