import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaPaperPlane,
  FaMouse,
} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import bannerImage from "../../assets/profile-one.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Container from "../../Container/Container";

const Banner = () => {
  return (
    <section className="bg-[#050505] flex items-center py-[175px] relative overflow-hidden" id="home">

      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          {/* Left Side Container */}
          <div className="flex flex-col lg:flex-row items-center gap-8 w-full lg:w-3/5">

            {/* Social Icons - Restored to original position (beside text on lg) */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex lg:flex-col gap-6 text-xl z-20"
            >
              {[
                { icon: <IoLogoLinkedin />, href: "https://www.linkedin.com/in/khayer-hossain", color: "text-[#0077B5]" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/khayerhossain_45?igsh=NXNrOGY3dWwyYzlo&utm_source=qr", color: "text-[#E4405F]" },
                { icon: <FaGithub />, href: "https://github.com/khayerhossain", color: "text-white" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${item.color} transition-all duration-300 hover:scale-110 hover:brightness-125`}
                >
                  {item.icon}
                </a>
              ))}
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-center lg:text-left pt-6 lg:pt-0"
            >
              {/* <div className="inline-block mb-3">
                <span className="py-1.5 px-3 rounded-full border border-gray-700 bg-[#1A1A1F] text-gray-300 text-xs font-medium tracking-wide">
                  Welcome to my portfolio
                </span>
              </div> */}

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {/* <span className="text-white">Hi, I'm</span> <br className="hidden md:block" /> */}
                <span className="text-white">
                  <Typewriter
                    words={["Khayer Hossain"]}
                    loop={1}
                    cursor
                    cursorStyle=""
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
                <div className="h-1 w-10 bg-red-500 rounded-full"></div>
                <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide">
                  Web Developer
                </p>
              </div>

              <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                I’m a passionate developer based in Bangladesh, dedicated to building
                modern, responsive, and meaningful digital experiences.
              </p>

              <button
                onClick={() => {
                  const section = document.getElementById('contact');
                  if (section) {
                    const navbarHeight = 80;
                    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    window.scrollTo({ top: sectionTop, behavior: "smooth" });
                  }
                }}
                className="group relative px-6 py-3 bg-white text-black font-semibold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Say Hello <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <div className="w-full h-full rounded-full border-2 border-white/10 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <img
                  src={bannerImage}
                  alt="Khayer Hossain"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <FaMouse className="text-lg" />
      </motion.div>
    </section>
  );
};

export default Banner;
