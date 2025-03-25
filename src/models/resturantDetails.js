import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
        location: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true }
);

const Restaurant = mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
