import data from "/src/data.json";
import { MenuItem } from "./MenuItem";

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
