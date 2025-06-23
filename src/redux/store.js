import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import userReducer from "./slice/userSlice";
// import apiReducer from "./slice/apiCallSlice";

export const store = configureStore({
  reducer: {
    // cart: cartReducer,
    user: userReducer,
    // api:apiReducer
  },
});
