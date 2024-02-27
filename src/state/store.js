import { configureStore } from "@reduxjs/toolkit";
import { getProductData } from "./productSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    [getProductData.reducerPath]: getProductData.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProductData.middleware),
});

export default store;
