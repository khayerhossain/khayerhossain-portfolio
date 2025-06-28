import React from "react";
import { FaInstagram, FaDribbble, FaGithub, FaPaperPlane, FaMouse } from "react-icons/fa";
import bannerImage from "../../assets/profile-one.jpg";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import Container from "../../Container/Container";

const Banner = () => {
  return (
    <section className="bg-white flex items-center py-16 lg:py-28 relative">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Side */}
          <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
            
            {/* Social Icons */}
            <div className="flex lg:flex-col gap-6 text-black text-xl">
              <a href="https://www.instagram.com/khayerhossain_45?igsh=NXNrOGY3dWwyYzlo&utm_source=qr" target="_blank"><FaInstagram /></a>
              <a href="https://garden-spot-15a69.web.app/" target="_blank"><FaDribbble /></a>
              <a href="https://github.com/khayerhossain" target="_blank"><FaGithub /></a>
            </div>

            {/* Text Content */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                <Typewriter
                  words={['Khayer Hossain']}
                  // loop={Infinity}
                  cursorStyle='|'
                  typeSpeed={120}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
                <span className="inline-block"> 👋</span>
              </h1>
              <p className="text-gray-600 text-lg mb-1 font-medium border-l-4 border-black pl-3 inline-block">
                Web Developer
              </p>
              <p className="text-gray-500 mb-6">
                I’m a passionate developer based in Bangladesh, <br />
                dedicated to building modern and meaningful digital experiences.
              </p>
              <button className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-2xl hover:bg-gray-900 transition">
                Say Hello <FaPaperPlane />
              </button>
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-52 h-52 lg:w-80 lg:h-64 rounded-full overflow-hidden border-4 border-black"
          >
            <img
              src={bannerImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Container>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 flex items-center gap-2">
        <FaMouse />
        <span className="text-sm">Scroll Down ↓</span>
      </div>
    </section>
  );
};

export default Banner;
