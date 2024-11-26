'use client';
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-6 px-4">
      <div className="container max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Side2Side Motorsport</h2>
          <p className="text-sm text-gray-400 mt-1">
            Profesjonalny serwis samochodowy | Tuning | Motorsport
          </p>
        </div>
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <ScrollLink
            to={"/about"}
            smooth={true}
            duration={500}
            className="text-gray-400 hover:text-white text-sm cursor-pointer"
          >
            O Nas
          </ScrollLink>
          <ScrollLink
            to={"/offer-service"}
            smooth={true}
            duration={500}
            className="text-gray-400 hover:text-white text-sm cursor-pointer"
          >
            Oferta
          </ScrollLink>
          <ScrollLink
            to={"/contact"}
            smooth={true}
            duration={500}
            className="text-gray-400 hover:text-white text-sm cursor-pointer"
          >
            Kontakt
          </ScrollLink>
        </nav>
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Side2Side Motorsport. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Developed by{" "}
            <a
              href="https://github.com/satorki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Sebastian
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
