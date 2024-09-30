"use client";
import React, { useEffect, useState } from "react";
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
import LogoRight from "../atoms/LogoRight";

const Header = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  const y = useTransform(scrollY, [0, 200], [-100, 0]);

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
    <motion.div
      style={{ y: y, opacity: opacity }}
      className="min-h-[60px] sm:min-h-[75px] font-jura bg-black  sticky top-0 text-white z-30 flex "
    >
      <Navbar
        position="static"
        isBlurred={false}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-black"
      >
        <NavbarContent>
          <NavbarBrand>
            <Link href="/">
              {isMenuOpen || window.innerWidth > 768 ? (
                <div className="flex">
                  <LogoSmall />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                  >
                    <LogoBig />
                  </motion.div>
                </div>
              ) : (
                <div>
                  <LogoSmall />
                </div>
              )}
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden md:flex gap-4" justify="end">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item.name}-${index}`}>
              <Link href="{item.link}" className="text-white text-[1.3rem]">
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarMenu className="bg-black py-7 gap-10 bg-opacity-85 flex justify-center">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link className="text-white text-[1.5rem] underline underline-offset-8 flex justify-center font-jura font-thin tracking-wider">
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
    </motion.div>
  );
};

export default Header;
