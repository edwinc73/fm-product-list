import empty from "/public/assets/images/illustration-empty-cart.svg";

export const EmptyCart = () => (
  <div className="cart__empty flex flex-col justify-center items-center font-red-hat gap-3 mt-6">
    <img src={empty} alt="no desserts in cart" />
    <span className="text-Rose-900 font-bold text-sm opacity-60">
      Your added items will appear here
    </span>
  </div>
);
