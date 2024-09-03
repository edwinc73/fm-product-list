import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import treeIcon from "/assets/images/icon-carbon-neutral.svg";
import { formatPrice } from "../../utils";
import { CtaButton } from "../CtaButton";
import { cx } from "../../utils/cs";
import PropTypes from "prop-types";

export const CartList = ({ type }) => {
  const { cart, dispatch, setConfirmOrder } = useContext(CartContext);

  const totalCost = cart.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);

  return (
    <div className="cartList flex flex-col gap-5">
      <div className={cx("flex flex-col gap-2", type == "cart" ? "mt-6" : "")}>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            dispatch={dispatch}
            type={type == "cart" ? "cart" : "confirm"}
          />
        ))}
      </div>
      <div className="flex w-full justify-between items-center">
        <span className="text-sm font-medium text-Rose-500">Order Total</span>
        <span className="text-Rose-900 text-2xl font-bold">
          ${formatPrice(totalCost)}
        </span>
      </div>
      {type == "cart" ? (
        <div className="flex justify-center items-center w-full gap-1 p-3 bg-Rose-50 rounded-md text-Rose-900">
          <img src={treeIcon} alt="carbon neutral tree" />
          <span className="font-red-hat text-sm">
            This is a <span className="font-medium">carbon-neutral</span>{" "}
            delivery
          </span>
        </div>
      ) : null}
      {type == "cart" ? (
        <CtaButton setConfirmOrder={setConfirmOrder} type="cart">
          Confirm Order
        </CtaButton>
      ) : null}
    </div>
  );
};

CartList.propTypes = {
  type: PropTypes.string,
};
