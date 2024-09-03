import data from "/src/data.json";
import { MenuItem } from "./MenuItem";

function Menu() {
  return (
    <div className="p-6 flex flex-col gap-8 text-Rose-900 md:w-2/3">
      <div className="menu__header text-[2.75rem] font-red-hat font-bold ">
        Desserts
      </div>
      <div className="menu_list flex flex-col md:grid md:grid-cols-3 flex-wrap gap-5 w-full">
        {data.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
