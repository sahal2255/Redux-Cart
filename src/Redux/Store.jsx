import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
const Store=configureStore({
    reducer:{
        cart:cartSlice
    }
})
export default Store