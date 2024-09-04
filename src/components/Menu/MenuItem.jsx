import { useContext, useEffect, useState } from "react";
import { formatPrice, getCartItem, isInCart } from "../../utils";
import { MenuImage } from "./MenuImage";
import { CartContext } from "../../context/CartContext";
import PropTypes from "prop-types";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="group text-left" onClick={!select ? handleClick : null}>
      <MenuImage
        image={image}
        name={name}
        select={select}
        handleDecrement={handleDecrement}
        handleIncrement={handleIcrement}
      />
      <div className="menuItem__description font-red-hat mt-7 text-Rose-900">
        <div className="text-Rose-500 text-sm font-medium">{category}</div>
        <div className="font-med text-Rose-900 font-semibold">{name}</div>
        <div className="text-red font-bold"> ${formatPrice(price)}</div>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    category: PropTypes.string,
    image: PropTypes.object,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }),
};
