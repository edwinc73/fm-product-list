import PropTypes from "prop-types";
import { useReducer } from "react";
import { createContext } from "react";
import ShortUniqueId from "short-unique-id";

export const CartContext = createContext(null);
const uid = new ShortUniqueId();

const reducer = (state, action) => {
  switch (action.type) {
    case "addItem": {
      const result = state.slice(0);
      result.push({
        id: uid.rnd(10),
        name: action.payload.name,
        quantity: 1,
        price: action.payload.price,
      });
      return result;
    }
    case "removeItem": {
      return state.filter((item) => item.name != action.payload.name);
    }
    case "incrementItem": {
      const result = state.slice(0);
      return result.map((item) => {
        if (item.name == action.payload.name) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    }
    case "decrementItem": {
      const result = state.slice(0);
      return result.map((item) => {
        if (item.name == action.payload.name) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
    }
    case "clear": {
      return [];
    }
    default:
      break;
  }
  throw Error("Unknown action: " + action.type);
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, [
    { id: 0, name: "Waffle with Berries", quantity: 3, price: 5.5 },
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
