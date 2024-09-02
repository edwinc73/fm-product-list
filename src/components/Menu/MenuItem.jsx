import { useContext, useEffect, useState } from "react";
import { formatPrice, getCartItem, isInCart } from "../../utils";
import { MenuImage } from "./MenuImage";
import { CartContext } from "../../context/CartContext";

export const MenuItem = ({ item }) => {
  const { cart, dispatch } = useContext(CartContext);
  const { name, image, category, price } = item;

  const alreadyInCart = isInCart(cart, name);
  const [select, setSelect] = useState(alreadyInCart);

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  useEffect(() => {
    setSelect(alreadyInCart);
  }, [cart]);

  const handleClick = () => {
    setSelect((prev) => !prev);
    dispatch({ type: "addItem", payload: { name, price } });
  };

  const handleIcrement = () => {
    dispatch({ type: "incrementItem", payload: { name } });
  };

  const handleDecrement = () => {
    const cartItem = getCartItem(cart, name);
    console.log(cart);
    if (cartItem.quantity == 1) {
      dispatch({ type: "removeItem", payload: { name } });
    }
    dispatch({ type: "decrementItem", payload: { name } });
  };

  return (
    <div className="" onClick={!select ? handleClick : null}>
      <MenuImage
        image={image}
        name={name}
        select={select}
        handleDecrement={handleDecrement}
        handleIncrement={handleIcrement}
      />
      <div className="menuItem__description font-red-hat mt-7">
        <div className="">{category}</div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-red font-bold"> ${formatPrice(price)}</div>
      </div>
    </div>
  );
};
