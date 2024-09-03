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
    <section className="p-6 md:w-1/3" id="cart-section">
      <div className="p-6 min-h-72 bg-white rounded-lg flex flex-col">
        <div className="text-3xl font-bold text-red ">
          Your Cart({cart.length})
          <span className="float-end">
            {/* no clear icon if no cart items */}
            {cart.length !== 0 && (
              <button
                className="text-Rose-300"
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
