import { configureStore } from "@reduxjs/toolkit";

import uiSLice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiSLice.reducer, cart: cartSlice.reducer },
});

export default store;
