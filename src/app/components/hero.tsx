"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const RestaurantCard = ({ name, category, location, image }: any) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-70 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
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
        <h2 className="text-xl font-bold mx-4">
          Best and Top Restaurants in Lahore
        </h2>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
