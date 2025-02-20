import React, { useState, useEffect } from "react";
// import header
import { headerData } from "../data";
// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
// import icons
import { TiThMenuOutline } from "react-icons/ti";

const Header = () => {
  // destructure headerData
  const { logo } = headerData;
  // header state
  const [isActive, setIsActive] = useState(false);
  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);

  // scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isActive ? "h-[180px] lg:h-[110px] shadow-lg" : "h-[120px] lg:h-[150px]"
      } fixed bg-white left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-full px-6 lg:px-[60px]">
        {/* Logo */}
        <a href="/">
          <img className="w-[90px] h-auto" src={logo} alt="Logo" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex w-full justify-between items-center">
          <div className="flex-grow flex justify-center">
            <Nav />
          </div>
          <div className="hidden xl:flex">
            <Socials />
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <div className="xl:hidden">
          <button
            onClick={() => setNavMobile(!navMobile)}
            className="bg-dark text-white p-2 rounded-md cursor-pointer z-20 relative"
          >
            <TiThMenuOutline className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`xl:hidden fixed top-[100px] w-full bg-white transition-all duration-300 ${
          navMobile ? "h-screen opacity-100 visible" : "h-0 opacity-0 invisible"
        }`}
      >
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
