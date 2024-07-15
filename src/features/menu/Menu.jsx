/* eslint-disable react/no-unknown-property */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../service/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  const menuData = useLoaderData();
  return <ul>
    {menuData.map((pizza) => (
      <MenuItem pizza ={pizza} key = {pizza.id} />
    ))}
  </ul>;
}

export async function loader() {
   const menu = await getMenu();
   return menu;
}

export default Menu;
