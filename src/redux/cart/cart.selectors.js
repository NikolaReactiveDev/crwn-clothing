import { createSelector } from 'reselect';

// Input selector - takes out piece of state for us
const selectCart =  state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accQuantity, cartItem) => accQuantity + cartItem.quantity,0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((totalPrice, cartItem) => totalPrice + cartItem.quantity*cartItem.price,0)
)
