// src/components/Navbar/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/experience", label: "Experience" },
    { path: "/work", label: "Projects" },
    { path: "/education", label: "Education" },
    { path: "/contact", label: "Contact" }, 
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#0a192f] bg-opacity-80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#2563eb]">&lt;</span>
          <span className="text-white">Kannan</span>
          <span className="text-[#2563eb]">/</span>
          <span className="text-white">S</span>
          <span className="text-[#2563eb]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-[#cbd5e1] font-medium">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={`cursor-pointer transition duration-300 ${
                location.pathname === item.path
                  ? "text-[#2563eb]"
                  : "hover:text-[#2563eb]"
              }`}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="https://github.com/kannansk0512"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cbd5e1] hover:text-[#2563eb] transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/kannan-s22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cbd5e1] hover:text-[#2563eb] transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#2563eb] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#2563eb] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#1e40af] backdrop-blur-md z-50 rounded-lg shadow-xl lg:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-[#cbd5e1] font-medium">
            {menuItems.map((item) => (
              <li
                key={item.path}
                className={`cursor-pointer transition duration-300 ${
                  location.pathname === item.path
                    ? "text-[#2563eb]"
                    : "hover:text-[#2563eb]"
                }`}
              >
                <Link to={item.path} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <div className="flex space-x-4 mt-2">
              <a
                href="https://github.com/kannansk0512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#2563eb] transition duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kannan-s22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#2563eb] transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
