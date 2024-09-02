import removeIcon from "/assets/images/icon-remove-item.svg";

export const CartItem = ({ item, dispatch }) => {
  const handleRemove = () => {
    dispatch({ type: "removeItem", payload: { name: item.name } });
  };
  return (
    <>
      <div className="flex justify-between w-full items-center">
        <div className="cartItem__description font-red-hat">
          <div className="font-bold text-rose-950">{item.name}</div>
          <div className="flex gap-4 mt-1">
            <span className="text-red font-bold">{item.quantity}x</span>
            <span className=" text-rose-950 opacity-75">@ ${item.price}x</span>
            <span className="font-medium text-rose-950">
              ${item.quantity * item.price}
            </span>
          </div>
        </div>
        <button
          className="border border-rose-950 border-opacity-35 flex justify-center items-center w-5 h-5 rounded-full"
          onClick={handleRemove}
        >
          <img src={removeIcon} className="w-3 h-3" alt="Remove Item" />
        </button>
      </div>
      <hr className="mt-2" />
    </>
  );
};
