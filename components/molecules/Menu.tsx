import React from "react";
import MenuButton from "../atoms/MenuButton";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "O NAS",
      link: "/o-nas",
    },
    {
      id: 2,
      name: "OFERTA",
      link: "/oferta",
    },
    {
      id: 3,
      name: "REALIZACJE",
      link: "/realizacje",
    },
    {
      id: 4,
      name: "KONTAKT",
      link: "/kontakt",
    },
  ];
  return (
    <div>
      <ul className="flex gap-2">
        {menuItems.map((item) => (
          <li key={item.id}>
            <MenuButton name={item.name} link={item.link} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
