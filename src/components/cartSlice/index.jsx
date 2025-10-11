import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const price = parseFloat(newItem.price);
      if (isNaN(price)) return; // agar price valid nahi hai to skip karo

      // ✅ Check if item already in cart
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Quantity increase karo
        existingItem.quantity += 1;
      } else {
        // Naya item add karo with quantity = 1
        state.items.push({ ...newItem, quantity: 1 });
      }

      // ✅ Total price update
      state.totalPrice = state.items.reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);

      // ✅ Total price recalculate
      state.totalPrice = state.items.reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
      );
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
      }

      // total update
      state.totalPrice = state.items.reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
      );
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        // Agar quantity 1 se kam ho jaye to item remove kar do
        state.items = state.items.filter((i) => i.id !== id);
      }

      // total update
      state.totalPrice = state.items.reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
      );
    },
  },
});

// 🧾 Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalPrice = (state) =>
  isNaN(state.cart.totalPrice) ? 0 : state.cart.totalPrice.toFixed(2);

// 🧭 Actions
export const {
  addToCart,
  clearCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
