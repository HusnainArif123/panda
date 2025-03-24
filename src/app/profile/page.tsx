"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import HeaderItem from "../components/header";
import RestaurantGrid from "../components/hero";

const Profile = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState<any>({});
  const handleLogout = async () => {
    try {
      setLoading(true);
      await axios.get("/api/logout");
      toast.success("Logout Successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

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
    <div className=" h-screen bg-green-200">
      <HeaderItem />
      <RestaurantGrid />
    </div>
  );
};
export default Profile;
