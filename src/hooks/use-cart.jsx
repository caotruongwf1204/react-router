import { useContext } from "react";
import { CartContext } from "../providers/cart-provider";
import { CART } from "../reducers/cart-reducer";

export const useCart = () => {
  const [state, dispatch] = useContext(CartContext);

  const addToCart = ({ id, title, thumbnail, price, quantity = 1 }) => {
    dispatch({
      type: CART.ADD,
      payload: { id, title, thumbnail, price, quantity },
    });
  };
  const removeFromCart = (itemId) => {
    dispatch({
      type: CART.REMOVE,
      payload: { itemId },
    });
  };

  const totalItem = state.items.length;

  // map id => product

  return {
    ...state,
    totalItem,
    onAdd: addToCart,
    onRemove: removeFromCart,
  };
};
