import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import treeIcon from "/assets/images/icon-carbon-neutral.svg";
import { formatPrice } from "../../utils";
import { PropagateLoader } from "react-spinners";

export const CartList = () => {
  const { cart, dispatch } = useContext(CartContext);

  const totalCost = cart.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);

  return (
    <div className="cartList flex flex-col gap-5">
      <div className="flex mt-6 flex-col gap-2">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} dispatch={dispatch} />
        ))}
      </div>
      <div className="flex w-full justify-between items-center">
        <span className="text-rose-950">Order Total</span>
        <span className="text-rose-950 text-2xl font-bold">
          ${formatPrice(totalCost)}
        </span>
      </div>
      <div className="flex justify-center items-center w-full gap-1 p-3 bg-rose-50 rounded-md">
        <img src={treeIcon} alt="carbon neutral tree" />
        <span className="font-red-hat text-sm">
          This is a <span className="font-medium">carbon-neutral</span> delivery
        </span>
      </div>
      <ConfirmButton dispatch={dispatch} />
    </div>
  );
};

const ConfirmButton = ({ dispatch }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    wait(setIsLoading);
  };
  return (
    <button
      className="w-full bg-red text-white font-medium flex justify-center items-center px-6 py-3 rounded-full border border-rose-950 border-opacity-50 h-12"
      onClick={handleClick}
    >
      {isLoading ? <PropagateLoader color="#ffffff" /> : "Confirm Order"}
    </button>
  );
};

const wait = async (func) => {
  const timeout = Math.random() * 1000;
  console.log(func);
  await setTimeout(() => {
    func(false);
    return true;
  }, timeout);
};
