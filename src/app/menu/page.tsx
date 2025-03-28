"use client";

import HeaderItem from "@/app/components/header";
import RestaurantCard from "@/app/components/MenuItem";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Menu = () => {
  const searchParams = useSearchParams();
  const websiteDetails = useSelector((state: RootState) => state.restaurant);
  console.log(websiteDetails.address, websiteDetails.phoneNo, "Phone No");
  const restaurant = {
    id: searchParams.get("id") || "",
    name: searchParams.get("name") || "",
    category: searchParams.get("category") || "",
    location: searchParams.get("location") || "",
    image: searchParams.get("image") || "",
    discount: searchParams.get("discount") || "0",
    rating: searchParams.get("rating") || "0",
    closingTime: searchParams.get("closingTime") || "N/A",
    openingTime: searchParams.get("openingTime") || "N/A",
    ratingUser: searchParams.get("ratingUser") || "0",
  };
  const storedData = localStorage.getItem("websiteData");
  const websiteData = storedData ? JSON.parse(storedData) : null;

  return (
    <div>
      <HeaderItem phoneNo={websiteData?.phoneNo} />
      <RestaurantCard
        name={decodeURIComponent(restaurant.name)}
        discount={decodeURIComponent(restaurant.discount)}
        rating={decodeURIComponent(restaurant.rating)}
        ratingUser={decodeURIComponent(restaurant.ratingUser)}
        image={decodeURIComponent(restaurant.image)}
      />
    </div>
  );
};
export default Menu;
