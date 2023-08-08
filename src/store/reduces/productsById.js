import { createSlice } from "@reduxjs/toolkit";

const productByIdSlice = createSlice({
  name: "productById",
  initialState: {
    product: [],
  },
  reducers: {
    fetchProductById: (state, action) => {
      state.product = action.payload.data;
    },
  },
});

export const { fetchProductById } = productByIdSlice.actions;
export default productByIdSlice.reducer;
