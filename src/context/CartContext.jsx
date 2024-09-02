import PropTypes from "prop-types";
import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "addItem":
      return state;
    case "removeItem":
      return state;
    case "updateItem":
      return state;
    case "clear":
      return state;
    default:
      break;
  }
  throw Error("Unknown action: " + action.type);
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, [
    { id: 0, name: "test 1", quantity: 2, price: 5.5 },
    { id: 1, name: "test 1", quantity: 2, price: 5.5 },
    { id: 2, name: "test 1", quantity: 2, price: 5.5 },
  ]);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
