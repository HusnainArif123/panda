"use client"; // Ensures Redux only runs on the client

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import reducer from "./WebSiteData";

export const store = configureStore({
  reducer: {
    restaurant: reducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
