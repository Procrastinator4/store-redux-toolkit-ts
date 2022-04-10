import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = (await response.json()) as ProductListState[];
  console.log(products);
  return products;
});

interface ProductListState {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}
interface ProductState {
  products: ProductListState[];
  cart: ProductListState[];
}
const initialState: ProductState = {
  products: [],
  cart: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeToCart(state, action) {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // for multi state
      return {
        ...state,
        products: action.payload,
      };
      //for single state
      // state.products = action.payload;
    });
  },
});
export const { addToCart, removeToCart } = productSlice.actions;
export default productSlice.reducer;
