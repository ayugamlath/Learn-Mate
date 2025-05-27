import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.png"; // Adjust the path to your logo image
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShow(true);
      } else if (window.scrollY > lastScrollY) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-gray-900 text-gray-100 shadow-lg px-8 py-4 flex items-center justify-between font-sans fixed w-full top-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center gap-4">
        <img src={logo} alt="my_app_logo" width={70} className="mr-10" />
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#document"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Document
          </a>
          <a
            href="#milestones"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Milestones
          </a>
          <a
            href="#domain"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Domain
          </a>
          <a
            href="#achievements"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Achievements
          </a>
          <a
            href="#team"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Team
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://github.com/sachintha-heshan/Research-project"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400"
        >
          <FaInstagram size={22} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
