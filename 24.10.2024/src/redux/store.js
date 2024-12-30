import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/product";
import { cartsSlice } from "./slice/cart";

// toolkit
export const store = configureStore({
    reducer: {

        [counterSlice.name]: counterSlice.reducer,
        
        [cartsSlice.name]: cartsSlice.reducer,
    },
})