import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaBriefcase,
  FaUserAlt,
  FaEnvelope,
  FaTools,
} from "react-icons/fa";
import Logo from "../../assets/name-logo-white.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 80; // Account for fixed navbar
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome />, color: "#3B82F6" },
    { id: "about", label: "About", icon: <FaUserAlt />, color: "#8B5CF6" },
    { id: "skills", label: "Skills", icon: <FaTools />, color: "#10B981" },
    { id: "projects", label: "Projects", icon: <FaBriefcase />, color: "#F59E0B" },
    { id: "contact", label: "Contact", icon: <FaEnvelope />, color: "#EF4444" },
  ];

  return (
    <div className="fixed top-0 w-full z-50 bg-[#0a0a0f]/95 backdrop-blur-md">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-32 flex items-center justify-between py-4 relative">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform"
            src={Logo}
            alt="Logo"
            onClick={() => scrollToSection("home")}
          />
        </div>

        {/* Center - Links */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 font-medium transition-all duration-300 cursor-pointer group ${activeSection === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  <span
                    className="text-lg transition-all duration-300 group-hover:scale-110"
                    style={{ color: activeSection === item.id ? item.color : undefined }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - CTA */}
        <div className="hidden md:block">
          <a
            href="https://drive.google.com/file/d/1CD9vE_EOekZiTieur2Lb6voIrTNf7dsX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-xl transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#1A1A1F] border border-gray-800 text-white shadow-xl rounded-xl w-52 mt-3 z-50 p-2"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${activeSection === item.id
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                    }`}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
