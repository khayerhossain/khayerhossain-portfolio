import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import {
  FaHome,
  FaProjectDiagram,
  FaUserAlt,
  FaEnvelope,
  FaTools,
} from "react-icons/fa";
import Logo from "../../assets/name-logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection("home"), 100);
    } else {
      scrollToSection("home");
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-black underline underline-offset-4 decoration-black font-semibold flex items-center gap-2"
      : "text-black hover:text-black transition flex items-center gap-2";

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-32 flex items-center justify-between py-3 relative">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <img className="w-12" src={Logo} alt="Logo" />
          <span className="text-xl font-semibold text-gray-800 hidden lg:block">
            {/* Optional: Your Name */}
          </span>
        </div>

        {/* Center - Links */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
          <ul className="menu menu-horizontal space-x-6">
            <li>
              <button onClick={handleHomeClick} className="flex items-center gap-2 text-black font-semibold">
                <FaHome /> Home
              </button>
            </li>
            <li>
              <NavLink to="/about" className={linkStyle}>
                <FaUserAlt /> About
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className={linkStyle}>
                <FaTools /> Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={linkStyle}>
                <FaProjectDiagram /> Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkStyle}>
                <FaEnvelope /> Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right - CTA */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="btn btn-sm bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
          >
            Download CV
          </NavLink>
        </div>

        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost text-black">
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
            className="menu menu-sm dropdown-content bg-white text-black shadow-md rounded-box w-52 mt-3 z-50"
          >
            <li>
              <button onClick={handleHomeClick} className="flex items-center gap-2">
                <FaHome /> Home
              </button>
            </li>
            <li>
              <NavLink to="/about" className={linkStyle}>
                <FaUserAlt /> About
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className={linkStyle}>
                <FaTools /> Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={linkStyle}>
                <FaProjectDiagram /> Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkStyle}>
                <FaEnvelope /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
