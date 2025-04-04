"use client";

import axios from "axios";
import { BadgePercent, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import moment from "moment-timezone";
import { useRouter } from "next/navigation";

const RestaurantCard = ({
  _id,
  name,
  category,
  location,
  image,
  discount,
  rating,
  closingTime,
  openingTime,
  ratingUser,
}: any) => {
  const router = useRouter();

  // Get current time in Pakistan timezone
  const currentTime = moment().tz("Asia/Karachi");

  // Convert times to moment objects
  const closingMoment = closingTime ? moment(closingTime, "hh:mm A") : null;
  const openingMoment = openingTime ? moment(openingTime, "hh:mm A") : null;

  // Determine if the restaurant is closed
  let isClosed = false;

  if (closingMoment && openingMoment) {
    if (closingMoment.isBefore(openingMoment)) {
      // Normal case: e.g. closes at 10 PM, opens at 6 AM
      isClosed =
        currentTime.isSameOrAfter(closingMoment) &&
        currentTime.isBefore(openingMoment);
    } else {
      // Edge case: closes at 2:40 AM, opens at 3:00 AM (past midnight)
      isClosed =
        currentTime.isSameOrAfter(closingMoment) ||
        currentTime.isBefore(openingMoment);
    }
  }
  const handleGoTOMenu = () => {
    const queryParams = new URLSearchParams({
      id: encodeURIComponent(_id),
      name: encodeURIComponent(name),
      category: encodeURIComponent(category),
      location: encodeURIComponent(location),
      image: encodeURIComponent(image || ""),
      discount: discount?.toString() || "0",
      rating: rating?.toString() || "0",
      closingTime: closingTime || "",
      openingTime: openingTime || "",
      ratingUser: ratingUser?.toString() || "0",
    }).toString();

    router.push(`/menu?${queryParams}`);
  };

  return (
    <div
      onClick={handleGoTOMenu}
      className="bg-white rounded-xl shadow-md overflow-hidden relative transition-all duration-300 transform hover:scale-105 hover:border-green-500 hover:border-2"
    >
      {/* Image Wrapper */}
      <div className="relative">
        <img
          src={image || "/fallback.jpg"} // Fallback image if none provided
          alt={name}
          className={`w-full h-70 object-cover transition-all duration-300 ${
            isClosed ? "blur-md brightness-50" : "" // Blur and darken if closed
          }`}
        />

        {/* Discount Banner (Overlay on Image) */}
        {discount && (
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <div className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 text-sm font-semibold rounded-lg shadow-md">
              <BadgePercent size={16} />
              <span>{discount}% off</span>
            </div>
          </div>
        )}

        {/* Closed Overlay */}
        {isClosed && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white font-bold">
            <p className="text-lg">Closed until {openingTime}</p>
            <button className="bg-white text-green-500 font-semibold px-4 py-2 rounded-lg mt-2">
              Order for later
            </button>
          </div>
        )}
      </div>

      {/* Restaurant Info */}
      <div className="p-4">
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-500" />
            <span className="text-gray-600 ml-1">
              {rating || "N/A"} ({ratingUser}+)
            </span>
          </div>
        </div>

        <p className="text-gray-500 text-sm">{category}</p>
        <p className="text-gray-400 text-xs">{location}</p>
      </div>
    </div>
  );
};

const RestaurantGrid = () => {
  const [restaurantData, setRestaurantData] = useState<any>([]);

  const handleGetRestaurant = async () => {
    try {
      const response = await axios.get("/api/resturantDetails");
      console.log("Data:", response.data); // Debugging log
      setRestaurantData(response.data.data); // Extract `data` array
    } catch (err: any) {
      console.error("Error fetching data:", err);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    handleGetRestaurant();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center my-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <h2 className="text-xl font-bold mx-2">
          Best and Top Restaurants in Lahore
        </h2>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1  sm:grid-cols-4  gap-4">
          {restaurantData.length > 0 ? (
            restaurantData.map((restaurant: any, index: number) => (
              <RestaurantCard key={index} {...restaurant} />
            ))
          ) : (
            <p className="text-gray-500">No restaurants found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantGrid;
