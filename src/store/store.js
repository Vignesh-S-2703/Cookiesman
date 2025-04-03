import { createStore } from 'redux';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        const updatedCart = [...state.cart];
        if (action.payload.decrement) {
          updatedCart[existingItemIndex].quantity -= 1;
          if (updatedCart[existingItemIndex].quantity === 0) {
            updatedCart.splice(existingItemIndex, 1);
          }
        } else {
          updatedCart[existingItemIndex].quantity += 1;
        }
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }
    default:
      return state;
  }
};

export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item,
});

const store = createStore(cartReducer);

export default store;