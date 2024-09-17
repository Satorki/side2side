"use client";
import React, { useState } from "react";
import NavButton from "../atoms/NavButton";
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

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuHandler = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <div>
      <NavButton menuHandler={menuHandler} menuIsOpen={menuIsOpen} />
      <ul className="flex flex-col md:flex-row md:gap-2">
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
