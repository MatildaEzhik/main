import { createSlice } from "@reduxjs/toolkit";

export const cartsSlice = createSlice({
    name: 'carts',
    initialState: {
        carts: []

    },
    reducers: {
        addInCart: (state, { payload }) => {
            const indexCart = state.carts.findIndex(item => item.id === payload.id);
            if (indexCart === -1) {
                state.carts.push({ count: 1, ...payload });
            }
            else {
                state.carts[indexCart].count += 1;
            }
        }
    },
})

export const { addInCart } = cartsSlice.actions
