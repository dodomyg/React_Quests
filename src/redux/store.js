import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
// import apiReducer from "./slice/apiCallSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // api:apiReducer
  },
});
