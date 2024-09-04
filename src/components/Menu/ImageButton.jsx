import { cx } from "../../utils/cs";
import incrementIcon from "/assets/images/icon-increment-quantity.svg";
import decrementIcon from "/assets/images/icon-decrement-quantity.svg";
import cartIcon from "/assets/images/icon-add-to-cart.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { getCartItem } from "../../utils";

export const ImageButton = ({
  select,
  increment,
  decrement,
  name,
  handleClick,
}) => {
  const { cart } = useContext(CartContext);
  const item = getCartItem(cart, name);
  return (
    <>
      {!select ? (
        <button
          aria-label={`add 1 ${name} to cart`}
          className={cx(
            "absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 px-6 py-3 md:py-[0.6rem] rounded-full border border-Rose-900 gap-2 w-40 transition-all duration-100 ease-in-out group-hover:border-red group-hover:text-red group-hover:border-opacity-75 bg-white border-opacity-50 flex justify-center items-center "
          )}
        >
          {/* closed */}
          <img
            src={cartIcon}
            className="w-[1.4rem] h-[1.4rem] md:w-[1.3rem] md:h-[1.3rem]"
            alt="cart"
          />
          <p className="font-red-hat font-medium min-w-fit">Add to Cart</p>
        </button>
      ) : (
        <div className="absolute bottom-0 flex justify-between items-center right-1/2 translate-x-1/2 translate-y-1/2 px-6 py-3 md:py-[0.6rem] rounded-full border border-Rose-900 gap-2 w-40 transition-all duration-100 ease-in-out group-hover:border-red group-hover:text-red group-hover:border-opacity-75 bg-red text-white border-opacity-0 ">
          {/* open */}
          <button
            className="imageButton__button border-2 rounded-full h-5 w-5 flex justify-center items-center hover:bg-white hover:border-white cursor-pointer transition-all duration-100 ease-in-out"
            onClick={decrement}
            aria-label={`remove 1 ${name} from cart`}
          >
            <img
              src={decrementIcon}
              className="w-3 red-filter "
              alt="increment button"
            />
          </button>
          <span className="font-red-hat font-medium min-w-fit text-center w-4 text-white">
            {item ? item.quantity : 1}
          </span>
          <button
            className="imageButton__button border-2 rounded-full h-5 w-5 flex justify-center items-center hover:bg-white hover:border-white cursor-pointer transition-all duration-100 ease-in-out"
            onClick={increment}
            aria-label={`add 1 more ${name} to cart`}
          >
            <img
              src={incrementIcon}
              className="w-3 red-filter"
              alt="increment button"
            />
          </button>
        </div>
      )}
    </>
  );
};
