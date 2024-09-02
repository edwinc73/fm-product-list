import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { EmptyCart } from "./EmptyCart";
import removeIcon from "/assets/images/icon-remove-item.svg";
import treeIcon from "/assets/images/icon-carbon-neutral.svg";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);
  console.log(cart);
  return (
    <section className="p-6" id="car-section">
      <div className="p-6 min-h-72 bg-white rounded-lg flex flex-col">
        <div className="text-3xl font-bold text-red ">
          Your Cart({cart.length})
        </div>
        {/* empty cart state */}
        {cart.length == 0 && <EmptyCart />}
        {/* cartList */}
        {cart.length !== 0 && <CartList />}
      </div>
    </section>
  );
}

export default Cart;

const CartList = () => {
  const { cart, dispatch } = useContext(CartContext);
  const totalCost = cart.reduce((total = 0, item) => {
    return (total += item.price * item.quantity);
  }, 0);

  return (
    <div className="cartList flex flex-col gap-5">
      <div className="flex mt-6 flex-col gap-2">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="flex w-full justify-between items-center">
        <span className="text-rose-950">Order Total</span>
        <span className="text-rose-950 text-2xl font-bold">${totalCost}</span>
      </div>
      <div className="flex justify-center items-center w-full gap-1 p-3 bg-rose-50 rounded-md">
        <img src={treeIcon} alt="carbon neutral tree" />
        <span className="font-red-hat text-sm">
          This is a <span className="font-medium">carbon-neutral</span> delivery
        </span>
      </div>

      <button className="w-full bg-red text-white font-medium flex justify-center items-center px-6 py-3 rounded-full border border-rose-950 border-opacity-50">
        Confirm Order
      </button>
    </div>
  );
};

const CartItem = ({ item }) => {
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
        <button className="border border-rose-950 border-opacity-35 flex justify-center items-center w-5 h-5 rounded-full">
          <img src={removeIcon} className="w-3 h-3" alt="Remove Item" />
        </button>
      </div>
      <hr className="mt-2" />
    </>
  );
};
