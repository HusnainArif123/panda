import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
});

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    categories: { type: [String], required: true },
    image: { type: String },
    rating: { type: Number, default: 0 },
    ratingUsers: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    minOrder: { type: Number, required: true },
    closingTime: { type: String },
    openingTime: { type: String },

    menuItems: { type: [String], required: true },

    menu: {
        oneDeal: [MenuItemSchema],
        pizza: [MenuItemSchema],
        burger: [MenuItemSchema]
    }
});

export default mongoose.models.Restaurant ||
    mongoose.model("Restaurant", RestaurantSchema);
