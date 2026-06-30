import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skill", link: "#skill" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const lightColors = {
    navBg: "bg-gradient-to-br from-orange-200 to-white",
    textPrimary: "text-black-900",
    textSecondary: "text-gray-900",
    textHover: "text-orange-500",
    textActive: "text-orange-600",
    inicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-yellow-500",
  };
  const darkColors = {
    navBg: "bg-gradient-to-br from-gray-700 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textHover: "text-orange-400",
    textActive: "text-orange-400",
    inicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
  };

  const color = darkMode ? darkColors : lightColors;

  const handleNewClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling Down
        setShowNavbar(false);
      } else {
        // Scrolling Up
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`flex items-center justify-center ${color.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}
      >
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-20">
          {/* {logo} */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <span className={`text-xl font-bold ${color.textprimary}`}>
              Protfolio
              <span className="text-orange-500">.</span>
            </span>
          </motion.a>
          {/* Navigation bar Items */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNewClick(item.name)}
                className="relative"
              >
                <motion.span
                  className={`font-medium transition-colors duration-300
                        ${
                          activeSection === item.name.toLowerCase()
                            ? color.textActive
                            : `${color.textSecondary} hover:text-orange-500`
                        }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>
                {activeSection === item.name.toLocaleLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full
                            ${color.inicator}`}
                  ></motion.div>
                )}
              </a>
            ))}
          </div>
          {/* darkmode toggle button */}
          <div className="justify-center left-0 right-0 flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } transition-colors`}
              aria-label={
                darkMode ? "Switch to light mode" : "switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-500" />
              )}
            </motion.button>
            {/* Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden lg:block px-5 py-2 font-semibold rounded-full
                bg-linear-to-r ${color.button} text-black-bold shadow-lg transition-shadow`}
            >
              Hire Me
            </motion.a>
          </div>
          {/* mobile menu bar */}

          <div className="flex lg:hidden items-center space-x-4 px-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {isMenuOpen ? (
                <x
                  className={`w-5 h-5 ${
                    darkMode ? "text-white" : "text-gray-700"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-5 h-5 ${
                    darkMode ? "text-white" : "text-gray-700"
                  }`}
                />
              )}
            </motion.button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opecity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-full left-0 right-0 mt-2 lg:hidden 
            ${
              darkMode ? "bggray-900/95" : "bg-white/95"
            } backdrop-blur-lg rounded-xl shadow-lg border ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNewClick(item.name)}
                  className="block"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`py-3 px-4 rounded-lg text-center ${
                      activeSection === item.name.toLowerCase()
                        ? darkMode
                          ? "bg-gray-800"
                          : "bg-orange-50"
                        : ""
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        activeSection === item.name.toLowerCase()
                          ? color.textActive
                          : color.textSecondary
                      }`}
                    >
                      {item.name}
                    </span>
                  </motion.div>
                </a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
                className={`block py-3 px-4 text-center font-semibold rounded-lg bg-linear-to-r ${color.button}
             text-white shadow-md`}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
