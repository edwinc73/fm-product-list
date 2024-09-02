export const formatPrice = (price) => {
  const arr = String(price).split(".");
  if (arr[1] && arr[1].length == 2) return;
  if (arr.length === 1) {
    arr.push(".00");
    return `${arr[0]}.00`;
  } else {
    return `${arr[0]}.${arr[1]}0`;
  }
};
export const getCartItem = (arr, name) => {
  return arr.filter((item) => item.name == name)[0];
};
export const isInCart = (arr, name) => {
  return arr.some((item) => item.name == name);
};
