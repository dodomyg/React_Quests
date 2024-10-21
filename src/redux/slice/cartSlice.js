import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    decreamentQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity -= 1;
        if(item.quantity === 0) {
          state.cart = state.cart.filter((i) => i.id !== action.payload.id);
        }
      } else {
        state.cart = state.cart.filter((i) => i.id !== action.payload.id);
      }
    },
  },
});

export const { addToCart, removeFromCart, decreamentQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
