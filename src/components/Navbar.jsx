import Logo from "../assets/Logo.svg";
import SunIcon from "../assets/icons/icons-sun.svg";
import MoonIcon from "../assets/icons/icons-moon.svg";

import { navLinks } from "../utils/constants";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.div
      variants={navVariants(1)}
      initial="hidden"
      whileInView="show"
      className="flex justify-center mt-5"
    >
      <nav className="w-[70%] bg-[rgba(227,227,227,0.25)] h-[85px] py-[5px] rounded-full flex items-center justify-between z-10 shadow-[0_0_30px_0px_rgba(0,0,0,0.085)]">
        <img src={Logo} className="h-[75px] w-[75px] ml-1 " />
        <ul className="flex gap-6 max-md:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="cursor-pointer">
              <a
                href={item.href}
                className="font-gruppo max-lg:text-[20px] font-bold text-[25px] text-[rgba(0,0,0,0.9)] hover:border-b-[3px] hover:border-[#00FFF2] dark:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="m-1 p-[3px] bg-gradient-to-r from-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0.1)] rounded-full flex items-center justify-center dark:bg-gradient-to-r dark:from-[rgba(255,255,255,0.25)] dark:to-[rgba(255,255,255,0.1)]">
          <div className="bg-[rgba(255,255,255,0.95)] w-[70px] h-[70px] flex justify-center items-center rounded-full drop-shadow-2xl cursor-pointer">
            <img
              src={
                document.body.classList.contains("dark") ? SunIcon : MoonIcon
              }
              className="h-[50px] w-[50px]"
              onClick={handleTheme}
            />
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
