"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const Profile = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
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
      await axios.get("/api/userData");
      router.push("/");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex-col flex items-center justify-center h-screen  bg-blue-100">
      <h1 className="text-black-900 text-3xl font-bold">Profile Page</h1>
      <button
        className="p-2 mt-5 items-center justify-center border-2 h-10 w-30 border-blue-900 rounded-lg bg-blue-900 text-white font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-blue-700 hover:border-blue-700 focus:ring-2 focus:ring-blue-500"
        onClick={handleLogout}
      >
        Logout
      </button>
      <button
        className="p-2 mt-5 items-center justify-center border-2 h-10 w-30 border-black-900 rounded-lg bg-blue-900 text-white font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-blue-700 hover:border-blue-700 focus:ring-2 focus:ring-blue-500"
        onClick={handleUserDetails}
      >
        User Details
      </button>
    </div>
  );
};
export default Profile;
