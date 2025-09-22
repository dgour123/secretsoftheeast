import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const price = parseFloat(newItem.price);

            // check if valid number
            if (!isNaN(price)) {
                state.items.push(newItem);
                state.totalPrice += price;
            } else {
                state.items.push(newItem);
                // price invalid ho to ignore kar
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
        removeFromCart: (state, action) => {
            const id = action.payload; // product id
            const itemToRemove = state.items.find(item => item.id === id);
            if (itemToRemove) {
                const price = parseFloat(itemToRemove.price);
                state.totalPrice -= isNaN(price) ? 0 : price;
                state.items = state.items.filter(item => item.id !== id);
            }
        }

    }
});

export const selectCartItems = (state) => state.cart.items;

// export const selectCartTotalPrice = (state) => state.cart.totalPrice;
export const selectCartTotalPrice = (state) => {
    return isNaN(state.cart.totalPrice) ? 0 : state.cart.totalPrice;
};


export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;


export default cartSlice.reducer;
