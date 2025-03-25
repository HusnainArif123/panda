import mongoose from "mongoose";

const websiteInfoSchema = new mongoose.Schema(
    {
        address: { type: String, required: true },
        phoneNo: { type: String, required: true },
        email: { type: String, required: true },
    },
    { timestamps: true }
);

const websiteInfo = mongoose.models.websiteInfo || mongoose.model("websiteInfo", websiteInfoSchema);

export default websiteInfo;
