import { createSelector } from "reselect";

const selectorCart = state => state.cart;

export const selectCartItems = createSelector(
  // It is an array of input selector
  [selectorCart],
  // It is result of the output that we want from it
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumulatedPrice, cartItem) => accumulatedPrice + cartItem.quantity * cartItem.price,
    0
  )
);
