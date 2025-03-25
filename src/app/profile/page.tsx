"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import HeaderItem from "../components/header";
import RestaurantGrid from "../components/hero";
import ImageSlider from "../components/imageSlider";
import Footer from "../components/footer";

const Profile = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState<any>({});

  const handleUserDetails = async () => {
    try {
      setLoading(true);
      const respData = await axios.get("/api/userData");
      setUserData(respData?.data.data.email);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  console.log(userData, "userData");
  return (
    <div>
      <HeaderItem />
      <ImageSlider />
      <RestaurantGrid />
      <Footer />
    </div>
  );
};
export default Profile;
