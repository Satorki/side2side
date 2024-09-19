"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import LogoBig from "../atoms/LogoBig";

const NavbarSite = () => {
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="min-h-[75px] sm:min-h-[90px] font-jura bg-black text-white"
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <LogoBig />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link href="{item.link}" className="text-white text-3xl">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="bg-black max-h-min font-light">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link className="text-white min-h-[60px] text-[36px] flex justify-center underline underline-offset-8 font-jura">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
    </Navbar>
  );
};

export default NavbarSite;
