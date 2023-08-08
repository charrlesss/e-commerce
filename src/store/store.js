import { configureStore } from "@reduxjs/toolkit";
import app from "./reduces/appconfig";
import products from "./reduces/products";
import productById from "./reduces/productsById";
import addToCart from "./reduces/addToCart";
import modal from "./reduces/modal";

export const store = configureStore({
  reducer: {
    app,
    products,
    productById,
    addToCart,
    modal,
  },
});
