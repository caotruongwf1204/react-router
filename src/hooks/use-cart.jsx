import { useContext } from "react";
import { CartContext } from "../providers/cart-provider";
import { CART } from "../reducers/cart-reducer";

export const useCart = () => {
  const [state, dispatch] = useContext(CartContext);

  const addToCart = ({ id, quantity = 1 }) => {
    dispatch({ type: CART.ADD, payload: { id, quantity } });
  };

  const totalItem = state.items.length;

  const getItem = (id) => {
    const cartItem = state.items.find((item) => item.id === id);
    return cartItem ? cartItem.product : null;
  };

  // map id => product

  return {
    ...state,
    totalItem,
    onAdd: addToCart,
    getItem,
  };
};
