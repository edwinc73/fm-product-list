import { cx } from "../../utils/cs.ts";
import { ImageButton } from "./ImageButton.jsx";

export const MenuImage = ({
  image,
  name,
  select,
  handleIncrement,
  handleDecrement,
}) => {
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
          className={cx(
            select ? "ring-opacity-100" : "ring-opacity-0",
            "rounded-lg w-full h-[13.3rem] ring-2 ring-red object-cover transition-all duration-100 ease-in-out"
          )}
          alt={name}
        />
      </picture>
      <ImageButton
        name={name}
        select={select}
        increment={handleIncrement}
        decrement={handleDecrement}
      />
    </div>
  );
};
