export const CART = {
  ADD: "cart/add",
  REMOVE: "cart/remove",
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART.ADD: {
      const isExist =
        state.items.findIndex((item) => item.id === action.payload.id) !== -1;

      if (isExist) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    }

    case CART.REMOVE: {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload.itemId
      );

      return {
        ...state,
        items: updatedItems,
      };
    }

    default: {
      return state;
    }
  }
};
