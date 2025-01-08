"use client";
import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./ProductListSlice";

export const store = configureStore({
  reducer: {
    products: productListReducer,
  },
});
