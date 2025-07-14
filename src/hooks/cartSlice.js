import { createSlice } from '@reduxjs/toolkit';

const storedCart = JSON.parse(localStorage.getItem('cart'));

const initialState = storedCart
  ? {
      totalItems: storedCart.totalItems,
      products: storedCart.products,
    }
  : {
      totalItems: 0,
      products: [],
    };

const updateLocalStorage = (state) => {
  localStorage.setItem('cart', JSON.stringify(state));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { name, id, color, price } = action.payload;
      state.products.push({ name: name, id: id, color: color, precio_actual: price });
      state.totalItems += 1;
      updateLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      const { name, color } = action.payload;
      const index = state.products.findIndex(
        (item) => item.name === name && item.color === color
      );
      if (index !== -1) {
        state.products.splice(index, 1);
        state.totalItems -= 1;
        updateLocalStorage(state);
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.totalItems = 0;
      updateLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
