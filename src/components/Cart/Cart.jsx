import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { EmptyCart } from "./EmptyCart";
import { CartList } from "./CartList";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);
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
