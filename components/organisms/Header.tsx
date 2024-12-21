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
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  const y = useTransform(scrollY, [0, 200], [-100, 0]);

  const menuItems = [
    {
      id: 1,
      name: "O NAS",
      link: "/#about",
    },
    {
      id: 2,
      name: "OFERTA",
      link: "/#offer-service",
    },
    {
      id: 3,
      name: "PROJEKTY",
      link: "/#projects",
    },
    {
      id: 4,
      name: "OPINIE",
      link: "/#rewievs",
    },
    {
      id: 5,
      name: "KONTAKT",
      link: "/#contact",
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
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-black"
      >
        <NavbarContent>
          <li>
            <NavbarBrand>
              <Link href="/" aria-label="Strona główna">
                {isMenuOpen || isLargeScreen ? (
                  <>
                    <LogoSmall />
                    <motion.div
                      initial={{ opacity: 0, x: -110 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring" }}
                    >
                      <LogoBig />
                    </motion.div>
                  </>
                ) : (
                  <>
                    <LogoSmall />
                    <motion.div
                      initial={{ opacity: 1, x: 0 }}
                      animate={{ opacity: 0, x: -110 }}
                      transition={{ type: "spring" }}
                    >
                      <LogoBig />
                    </motion.div>
                  </>
                )}
              </Link>
            </NavbarBrand>
          </li>
        </NavbarContent>
        <NavbarContent className="hidden md:flex gap-4" justify="end">
          {menuItems.map((item) => (
            <NavbarItem key={item.id} className="cursor-pointer">
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
                    <DropdownItem key="SERWIS">
                      <ScrollLink
                        to="offer-service"
                        smooth={true}
                        duration={500}
                        offset={-79}
                        className="text-white text-[1.1rem] w-10 hover:text-black"
                      >
                        SERWIS
                      </ScrollLink>
                    </DropdownItem>
                    <DropdownItem key="TUNING">
                      <ScrollLink
                        to="offer-tuning"
                        smooth={true}
                        duration={500}
                        className="text-white text-[1.1rem] hover:text-black"
                      >
                        TUNING
                      </ScrollLink>
                    </DropdownItem>
                    <DropdownItem key="MOTORSPORT">
                      <ScrollLink
                        to="offer-motorsport"
                        smooth={true}
                        duration={500}
                        className="text-white text-[1.1rem] hover:text-black"
                      >
                        MOTORSPORT
                      </ScrollLink>
                    </DropdownItem>
                    <DropdownItem key="SPECJALNA">
                      <ScrollLink
                        to="offer-special"
                        smooth={true}
                        duration={500}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white text-[1.1rem] hover:text-black"
                      >
                        SPECJALNA
                      </ScrollLink>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <ScrollLink
                  to={item.link.replace("/#", "")}
                  smooth={true}
                  duration={500}
                  className="text-white text-[1.3rem] hover:text-gray-300"
                  href={item.link}
                >
                  {item.name}
                </ScrollLink>
              )}
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarMenu className="bg-black gap-6 bg-opacity-85 -mt-1 flex pt-20">
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.id}>
              {item.id === 2 ? (
                <div className="flex items-center justify-center">
                  <div className="flex flex-col gap-5">
                    <ScrollLink
                      to="offer-service"
                      offset={-60}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white text-[1.5rem] underline underline-offset-8 flex justify-center font-jura font-thin tracking-wider"
                    >
                      SERWIS
                    </ScrollLink>

                    <ScrollLink
                      to="offer-tuning"
                      offset={-45}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white text-[1.5rem] underline underline-offset-8 flex justify-center font-jura font-thin tracking-wider"
                    >
                      TUNING
                    </ScrollLink>

                    <ScrollLink
                      to="offer-motorsport"
                      offset={-45}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white text-[1.5rem] underline underline-offset-8 flex justify-center font-jura font-thin tracking-wider"
                    >
                      MOTORSPORT
                    </ScrollLink>

                    <ScrollLink
                      to="offer-special"
                      offset={-45}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white text-[1.5rem] underline underline-offset-8 flex justify-center font-jura font-thin tracking-wider"
                    >
                      SPECJALNA
                    </ScrollLink>
                  </div>
                  <p className="transfom translate-x-10 text-white rotate-90 text-[1rem] mx-[-3.5rem] tracking-[0.5rem] opacity-50">
                    OFERTA
                  </p>
                </div>
              ) : (
                <ScrollLink
                  to={item.link.replace("/#", "")}
                  smooth={true}
                  offset={-10}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-[1.5rem]  flex justify-center font-jura font-thin tracking-wider"
                  href={item.link}
                >
                  {item.name}
                </ScrollLink>
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
