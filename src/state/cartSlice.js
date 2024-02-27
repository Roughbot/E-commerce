import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const item = state.cartItems.find((item) => item.id === newItem.id);
      if (item) {
        item.amount += 1;
        state.amount += 1;
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...newItem, amount: 1 }],
          amount: state.amount + 1,
        };
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== id;
      });
      state.amount = state.cartItems.length;
    },
    increaseCount: (state, action) => {
      const id = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === id);
      cartItem.amount += 1;
    },
    decreaseCount: (state, action) => {
      const id = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === id);
      if (cartItem.amount > 1) {
        cartItem.amount -= 1;
      } else {
        state.cartItems = state.cartItems.filter((item) => {
          return item.id !== id;
        });
      }
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  addItem,
  clearCart,
  removeItem,
  increaseCount,
  decreaseCount,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
