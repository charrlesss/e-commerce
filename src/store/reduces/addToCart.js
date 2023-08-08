import { createSlice, current } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload.data);
    },
    removeItemCart: (state, action) => {
      state.cart = current(state).cart.filter(
        (data) => data.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, removeItemCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
