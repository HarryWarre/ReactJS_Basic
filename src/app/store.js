import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReducer from "../features/product/ProductSlice";
import itemReducer from "../features/product/Item/ItemSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    item: itemReducer,
  },
});
