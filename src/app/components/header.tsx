"use client";

import React, { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiPhone,
  FiMapPin,
  FiMenu,
} from "react-icons/fi";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import DragonIcon from "../assets/svgs/dragon";
import Loader from "./Loader";

interface IProps {
  phoneNo: string;
}

const HeaderItem = ({ phoneNo }: IProps) => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
  return (
    <>
      {/* Header */}
      <div className="bg-green-400 text-white">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          {/* Sidebar Toggle Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-white text-2xl"
          >
            <FiMenu />
          </button>
          <div className="flex flex-row  gap-2  p-5">
            <h1 className="text-3xl font-bold">FoodDragon</h1>
            <DragonIcon width={50} height={40} />
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2">
            <FiMapPin className="text-lg" />
            <span className="text-sm">Deliver to</span>
            <span className="font-semibold">Johar Town, Lahore</span>
          </div>

          {/* Right Section */}
          <div className="flex space-x-4 items-center">
            <button className="bg-green-300 px-4 py-1 rounded-md text-black">
              Categories
            </button>
            <div className="flex items-center space-x-2">
              <FiPhone />
              <span className="text-sm">{phoneNo}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiSearch className="text-lg" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 text-black px-2 py-1 rounded-md"
              />
            </div>

            <FiUser className="text-lg" onClick={handleLogout} />
            <div className="relative">
              <FiShoppingCart className="text-lg" />
              <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs px-1 rounded-full">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-green-400 text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Sidebar Content */}
        <nav className="mt-16 p-4 text-center font-[Poppins]">
          <h1 className="text-2xl font-bold mb-4 text-white">Menu</h1>
          <ul className="space-y-3 text-lg">
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-green-800 transition font-medium tracking-wide"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-green-800 transition font-medium tracking-wide"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-green-800 transition font-medium tracking-wide"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-green-800 transition font-medium tracking-wide"
              >
                Orders
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {loading && <Loader />}
    </>
  );
};

export default HeaderItem;
