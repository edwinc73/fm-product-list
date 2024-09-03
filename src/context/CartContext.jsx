import PropTypes from "prop-types";
import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import ShortUniqueId from "short-unique-id";
import data from "/src/data.json";
import { getCartItem } from "../utils";

export const CartContext = createContext(null);
const uid = new ShortUniqueId();

const reducer = (state, action) => {
  switch (action.type) {
    case "addItem": {
      const product = getCartItem(data, action.payload.name);
      const result = state.slice(0);
      result.push({
        id: uid.rnd(10),
        name: action.payload.name,
        image: product.image.thumbnail,
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
  const [cart, dispatch] = useReducer(reducer, []);

  const [confirmOrder, setConfirmOrder] = useState(false);

  useEffect(() => {
    if (!confirmOrder) {
      dispatch({ type: "clear" });
    }
  }, [confirmOrder]);

  return (
    <CartContext.Provider
      value={{ cart, dispatch, confirmOrder, setConfirmOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
