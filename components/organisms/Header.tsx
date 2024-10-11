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
      name: "PROJEKTY",
      link: "/projekty",
    },
    {
      id: 4,
      name: "OPINIE",
      link: "/OPINIE",
    },
    {
      id: 5,
      name: "KONTAKT",
      link: "/kontakt",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      style={{ y: y, opacity: opacity }}
      className="h-[60px] sm:h-[75px] font-jura bg-black  sticky top-0 text-white z-30 flex "
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
              {isMenuOpen || isLargeScreen ? (
                <div className="flex">
                  <LogoSmall />
                  <motion.div
                    initial={{ opacity: 0, x: -110 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring" }}
                  >
                    <LogoBig />
                  </motion.div>
                </div>
              ) : (
                <div className="flex">
                  <LogoSmall />
                  <motion.div
                    initial={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 0, x: -110 }}
                    transition={{ type: "spring" }}
                  >
                    <LogoBig />
                  </motion.div>
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
        <NavbarMenu className="bg-black gap-10 bg-opacity-85 -mt-1 flex pt-40">
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
