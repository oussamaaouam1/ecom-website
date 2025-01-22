"use client";
import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./ProductListSlice";
import productIdReducer from "./productIdSlice";
import productCategoryReducer from "./ProductCategorySlice";

export const store = configureStore({
  reducer: {
    products: productListReducer,
    productId: productIdReducer,
    productsCategory: productCategoryReducer,
  },
});
