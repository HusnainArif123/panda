"use client";

import { Star, Info } from "lucide-react";

interface IProps {
  name: string;
  discount: string;
  rating: string;
  ratingUser: string;
  image: string;
}
const RestaurantCard = ({
  name,
  discount,
  rating,
  ratingUser,
  image,
}: IProps) => {
  return (
    <div className="flex items-center p-4 bg-white ">
      {/* Image Section */}
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src={image}
          alt="Restaurant"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="ml-4 flex-1">
        {/* Categories */}
        <p className="text-gray-500 text-sm">
          Sandwiches • Pizza • Pakistani • Western • Paratha
        </p>

        {/* Restaurant Name */}
        <h2 className="text-2xl font-bold text-black">{name}</h2>

        {/* Offer + Min Order */}
        <div className="flex items-center mt-1">
          <span className="text-red-400 font-semibold text-sm">
            Discount for order
          </span>
          <span className=" text-green-400 font-semibold text-sm ml-2">
            {discount}%
          </span>
          <span className="text-gray-600 text-sm ml-4">
            📦 Min. order Rs. 199
          </span>
        </div>

        {/* Rating + Reviews */}
        <div className="flex items-center mt-2 text-gray-700">
          <Star className="text-yellow-500" size={18} />
          <span className="font-semibold ml-1">{rating}/5</span>
          <span className="text-sm text-gray-500 ml-1">({ratingUser}+)</span>
          <span className="ml-4 text-blue-600 font-semibold cursor-pointer">
            See reviews
          </span>

          {/* More Info Icon */}
          <Info className="ml-4 text-gray-600 cursor-pointer" size={18} />
          <span className="ml-1 text-gray-600 font-medium cursor-pointer">
            More info
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
