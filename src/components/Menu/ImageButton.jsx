import { cx } from "../../utils/cs";
import incrementIcon from "/assets/images/icon-increment-quantity.svg";
import decrementIcon from "/assets/images/icon-decrement-quantity.svg";
import cartIcon from "/assets/images/icon-add-to-cart.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { getCartItem } from "../../utils";

export const ImageButton = ({ select, increment, decrement, name }) => {
  const { cart } = useContext(CartContext);
  const item = getCartItem(cart, name);
  return (
    <div
      tabIndex={0}
      role="button"
      className={cx(
        "absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-6 py-3 rounded-full border border-rose-950 gap-2 w-40 transition-all duration-100 ease-in-out",
        select
          ? "bg-red text-white border-opacity-0"
          : "bg-white border-opacity-50 "
      )}
    >
      {select ? (
        <div className="flex justify-between items-center">
          {/* open */}
          <button
            className="border-2 rounded-full h-5 w-5 flex justify-center items-center"
            onClick={decrement}
          >
            <img src={decrementIcon} className="w-3" alt="increment button" />
          </button>
          <span className="font-red-hat font-medium min-w-fit text-center w-4">
            {item ? item.quantity : 1}
          </span>
          <button
            className="border-2 rounded-full h-5 w-5 flex justify-center items-center"
            onClick={increment}
          >
            <img src={incrementIcon} className="w-3" alt="increment button" />
          </button>
        </div>
      ) : (
        <>
          {/* closed */}
          <div className="flex justify-center items-center">
            <img src={cartIcon} className="w-[1.4rem]" alt="add to cart" />
            <span className="font-red-hat font-medium min-w-fit">
              Add to Cart
            </span>
          </div>
        </>
      )}
    </div>
  );
};
