import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import successIcon from "/assets/images/icon-order-confirmed.svg";
import { CartList } from "../Cart/CartList";
import { CtaButton } from "../CtaButton";
import { BgScreen } from "../BgScreen";

const ConfirmOrder = () => {
  const { confirmOrder, setConfirmOrder } = useContext(CartContext);
  return (
    <BgScreen setShow={setConfirmOrder}>
      <dialog
        open={confirmOrder}
        className="fixed right-1/2 bottom-0 translate-x-1/2 md:bottom-1/2 md:translate-y-1/2 w-full md:max-w-xl bg-white px-6 py-10 rounded-t-2xl  md:rounded-b-2xl font-red-hat"
      >
        <div className="flex flex-col gap-6">
          <img src={successIcon} className="w-[3.2rem]" alt="order success" />
          <div className="confirmOrder__title">
            <div className="menu__header text-[2.75rem] font-red-hat font-bold leading-[1.15]">
              Order Confirmed
            </div>
            <div className="text-lg text-Rose-400 font-normal tracking-[-0.015rem] mt-1">
              We hope you enjoy your food!
            </div>
          </div>
          <div className="confirmOrder_items p-6  bg-Rose-50 rounded-lg flex flex-col">
            <CartList type="confirm" />
          </div>
          <CtaButton setConfirmOrder={setConfirmOrder} type="confirm">
            Start New Order
          </CtaButton>
        </div>
      </dialog>
    </BgScreen>
  );
};

export default ConfirmOrder;
