import { formatPrice } from "../../utils";
import removeIcon from "/assets/images/icon-remove-item.svg";
import PropTypes from "prop-types";

export const CartItem = ({ item, dispatch, type }) => {
  const handleRemove = () => {
    dispatch({ type: "removeItem", payload: { name: item.name } });
  };

  return (
    <>
      <div className="flex justify-between w-full items-center ">
        <div className="flex gap-1 items-center">
          {type !== "cart" ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-14 h-14 rounded-lg mr-3"
            />
          ) : null}
          <div className="cartItem__description font-red-hat">
            <div className="font-bold text-Rose-900 text-sm truncate max-w-[150px] ">
              {item.name}
            </div>
            <div className="flex gap-4 mt-2">
              <span className="text-red font-semibold">{item.quantity}x</span>
              <span className=" text-Rose-500 opacity-75">
                @ ${formatPrice(item.price)}
                {type == "cart" ? "x" : ""}
              </span>
              {type == "cart" ? (
                <span className="font-medium text-Rose-500 tracking-tight">
                  ${formatPrice(item.quantity * item.price)}
                </span>
              ) : null}
            </div>
          </div>
        </div>
        {type == "cart" ? (
          <button
            className="border border-Rose-900 border-opacity-35 flex justify-center items-center w-5 h-5 rounded-full hover:brightness-50 hover:rotate-90 hover:border-2 transition-all duration-100 ease-in-out"
            onClick={handleRemove}
          >
            <img src={removeIcon} className="w-3 h-3" alt="Remove Item" />
          </button>
        ) : (
          <span className="font-medium text-[1.15rem] text-Rose-500">
            ${formatPrice(item.quantity * item.price)}
          </span>
        )}
      </div>
      <hr className="my-2" />
    </>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }),
  dispatch: PropTypes.func,
  type: PropTypes.string,
};
