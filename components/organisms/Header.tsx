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
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "@nextui-org/react";
import LogoBig from "../atoms/LogoBig";
import LogoSmall from "../atoms/LogoSmall";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
      className="h-[60px] sm:h-[75px] font-jura bg-black sticky top-0 text-white z-30 flex "
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
          {menuItems.map((item) => (
            <NavbarItem key={item.id}>
              {item.id === 2 ? (
                <Dropdown>
                  <DropdownTrigger>
                    <Link className="text-white text-[1.3rem] cursor-pointer">
                      {item.name} <ChevronDown />
                    </Link>
                  </DropdownTrigger>
                  <DropdownMenu
                    className="text-white bg-black rounded-xl"
                    itemClasses={{
                      base: "gap-4",
                    }}
                  >
                    <DropdownItem key="SERWIS">SERWIS</DropdownItem>
                    <DropdownItem key="TUNING">TUNING</DropdownItem>
                    <DropdownItem key="MOTORSPORT">MOTORSPORT</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <Link href={item.link} className="text-white text-[1.3rem]">
                  {item.name}
                </Link>
              )}
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarMenu className="bg-black gap-8 bg-opacity-85 -mt-1 flex justify-center">
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.id}>
              {item.id === 2 ? (
                <div className="flex items-center justify-center">
                  <p className="transfom -translate-x-8 text-white -rotate-90 text-[1rem] mx-[-5rem] tracking-[1rem]">
                    OFERTA
                  </p>
                  <div className="flex flex-col gap-5">
                    <Link className="text-white text-[1.5rem] underline underline-offset-8 flex justify-center font-jura font-thin tracking-wider">
                      SERWIS
                    </Link>
                    <Link className="text-white text-[1.5rem] underline underline-offset-8 flex justify-center font-jura font-thin tracking-wider">
                      TUNNING
                    </Link>
                    <Link className="text-white text-[1.5rem] underline underline-offset-8 flex justify-center font-jura font-thin tracking-wider">
                      MOTORSPORT
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.link}
                  className="text-white text-[1.5rem]  flex justify-center font-jura font-thin tracking-wider"
                >
                  {item.name}
                </Link>
              )}
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
