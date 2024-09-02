import { formatPrice } from "../../utils";
import data from "/src/data.json";
import cart from "/assets/images/icon-add-to-cart.svg";

function Menu() {
  return (
    <div className="p-6 flex flex-col gap-8">
      <div className="menu__header text-4xl font-red-hat font-bold ">
        Desserts
      </div>
      <div className="menu_list flex flex-col flex-wrap gap-5">
        {data.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;

const MenuItem = ({ item }) => {
  const { name, image, category, price } = item;
  return (
    <div className="">
      <MenuImage image={image} name={name} />
      <div className="menuItem__description font-red-hat mt-7">
        <div className="">{category}</div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-red font-bold"> ${formatPrice(price)}</div>
      </div>
    </div>
  );
};

const MenuImage = ({ image, name }) => {
  return (
    <div className="menu__image relative">
      <picture>
        <source
          sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
          srcSet={`${image.mobile} 654w, ${image.tablet} 768w, ${image.desktop} 1280w`}
          type="image/jpeg"
        />
        <img
          src={image.thumbnail}
          className="rounded-lg w-full h-[13.3rem] object-cover"
          alt={name}
        />
      </picture>
      <button
        className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 bg-white flex justify-center items-center px-6
      w-fit py-3 rounded-full border border-rose-950 border-opacity-50 gap-2"
      >
        <img src={cart} className="w-[1.4rem]" alt="add to cart" />
        <span className="font-red-hat font-medium min-w-fit">Add to Cart</span>
      </button>
    </div>
  );
};
