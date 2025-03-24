"use client";

import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const HeaderItem = () => {
  return (
    <div className="bg-green-600 text-white ">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex items-center space-x-2">
          <FiMapPin className="text-lg" />
          <span className="text-sm">Deliver to</span>
          <span className="font-semibold">Johar Town, Lahore</span>
        </div>
        <div className="flex space-x-4">
          <button className="bg-green-300 px-4 py-1 rounded-md text-black">
            Categories
          </button>
          <div className="flex items-center space-x-2">
            <FiPhone />
            <span className="text-sm">+923403115555</span>
          </div>
          <div className="flex  items-center space-x-2">
            <FiSearch className="text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 text-black px-2 py-1 rounded-md"
            />
          </div>
          <FiUser className="text-lg mt-2" />
          <div className="relative mt-2">
            <FiShoppingCart className="text-lg" />
            <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs px-1 rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderItem;
