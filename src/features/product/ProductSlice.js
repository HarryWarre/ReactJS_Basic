import { createSlice } from "@reduxjs/toolkit";
import product from "../../data/products.json";

const initialState = {
  products: [],
  selectedProduct: null,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.error = null;
    },

    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

// Thêm action fetchProducts vào slice
export const fetchProducts = () => {
  return (dispatch) => {
    // Giả lập việc lấy sản phẩm từ API hoặc từ tệp JSON
    const fetchedProducts = product.products;
    dispatch(setProducts(fetchedProducts));
  };
};

export const { setProducts, setError, setSelectedProduct } =
  productSlice.actions;
export default productSlice.reducer;
