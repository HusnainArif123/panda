"use client"; // Ensures it runs on the client side

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WebsiteDataState {
  address: string;
  phoneNo: string;
  email: string;
}

const initialState: WebsiteDataState = {
  address: "",
  phoneNo: "",
  email: "",
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurants: (state, action: PayloadAction<any[]>) => {
      const websiteData = action.payload[0];
      if (websiteData) {
        state.address = websiteData.address;
        state.phoneNo = websiteData.phoneNo;
        state.email = websiteData.email;
      }
    },
  },
});

export const { setRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;
