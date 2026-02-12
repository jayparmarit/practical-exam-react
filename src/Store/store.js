import { configureStore } from "@reduxjs/toolkit";

import productSlice from "../features/product/productSlice";

const store = configureStore({
  reducer: {
    Product: productSlice,
  },
});

export default store;
