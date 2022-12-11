import { createSlice } from "@reduxjs/toolkit";

const uiSLice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSLice.actions;

export default uiSLice;
