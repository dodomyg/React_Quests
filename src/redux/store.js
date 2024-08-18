import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice"
import apiCallReducer from "./slice/apiCallSlice"


export const store  = configureStore({
    reducer: {
        cart:cartReducer,
        api:apiCallReducer
    }
})