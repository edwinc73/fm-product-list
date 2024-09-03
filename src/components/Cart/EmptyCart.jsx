import empty from "/assets/images/illustration-empty-cart.svg";

export const EmptyCart = () => (
  <div className="cart__empty flex flex-col justify-center items-center font-red-hat gap-3 mt-6">
    <img src={empty} alt="no desserts in cart" className="w-32 h-32" />
    <span className="text-Rose-900 font-bold text-sm opacity-60">
      Your added items will appear here
    </span>
  </div>
);
