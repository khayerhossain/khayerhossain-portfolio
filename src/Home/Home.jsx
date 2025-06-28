import React, { useEffect } from "react";
import { useLocation } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "../Pages/Banner/Banner";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    const path = location.pathname;

    if (path === "/about") scrollToSection("about");
    else if (path === "/skills") scrollToSection("skills");
    else if (path === "/projects") scrollToSection("projects");
    else if (path === "/contact") scrollToSection("contact");
    else scrollToSection("home");
  }, [location]);

  return (
    <div>
      <Navbar />

      <div id="home">
        <Banner />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
