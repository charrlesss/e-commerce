import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "addToCart",
  initialState: {
    modalShow: false,
  },
  reducers: {
    openModal: (state) => {
      state.modalShow = true;
    },
    closeModal: (state) => {
      state.modalShow = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
