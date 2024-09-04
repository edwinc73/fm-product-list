import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { EmptyCart } from "./EmptyCart";
import { CartList } from "./CartList";
import { RiDeleteBinLine } from "react-icons/ri";
import { Modal } from "../modal/Modal";

function Cart() {
  const { dispatch, cart } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);

  return (
    <section
      aria-label="my cart"
      className="p-6 md:w-1/3 md:mt-5"
      id="cart-section"
    >
      <div className="p-6 min-h-72 bg-white rounded-lg flex flex-col">
        <div className="text-3xl font-bold text-red ">
          Your Cart({cart.length})
          <span className="float-end">
            {/* no clear icon if no cart items */}
            {cart.length !== 0 && (
              <button
                aria-label="remove all items"
                className="text-Rose-500 hover:text-red hover:bg-red p-1 rounded-full hover:bg-opacity-25
                transition-all duration-100 ease-in-out"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <RiDeleteBinLine className="w-5 h-5" />
              </button>
            )}
          </span>
        </div>
        {/* empty cart state */}
        {cart.length == 0 && <EmptyCart />}
        {/* cartList */}
        {cart.length !== 0 && <CartList type="cart" />}
        {/* clear cart modal */}
        {openModal && (
          <Modal
            action={() => dispatch({ type: "clear" })}
            show={openModal}
            setShow={setOpenModal}
          />
        )}
      </div>
    </section>
  );
}

export default Cart;
