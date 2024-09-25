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
} from "@nextui-org/react";
import LogoBig from "../atoms/LogoBig";
import LogoSmall from "../atoms/LogoSmall";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const showNavbarContent = useTransform(scrollYProgress, [0, 0.1], [-1500, 0]);

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
      className="min-h-[75px] sm:min-h-[90px] font-jura  text-white"
    >
      <motion.div
        style={{
          x: showNavbarContent,
        }}
        className="flex items-center justify-between w-full"
      >
        <NavbarContent>
          <NavbarBrand>
            <Link href="/">
              <div className="hidden lg:block">
                <LogoBig />
              </div>
              <div className="block lg:hidden">
                <LogoSmall />
              </div>
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
        <NavbarMenu className="bg-black max-h-min py-7 gap-10">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link className="text-white text-[36px] flex justify-center font-jura font-thin tracking-wider">
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
      </motion.div>
    </Navbar>
  );
};

export default Header;
