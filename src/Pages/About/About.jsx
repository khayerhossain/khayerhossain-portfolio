import React from "react";
import Container from "../../Container/Container";
import AboutImage from "../../assets/about-image.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[#050505] py-20 relative overflow-hidden" id="about">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
          {/* Left side image */}
          <motion.div
            className="w-full md:w-1/2 relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/10">
              <img
                src={AboutImage}
                alt="Khayer Hossain"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right side content */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#1A1A1F] border border-gray-800 mb-6">
              <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">
                Introduction
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              About <span className="text-red-500">Me.</span>
            </h2>

            <p className="text-xl font-medium text-gray-200 mb-6">
              I’m a driven developer passionate about turning ideas into
              real world products.
            </p>

            <div className="space-y-4 text-gray-400 leading-relaxed text-base md:text-lg">
              <p>
                My journey started with the basics of HTML and CSS and soon
                evolved into building full‑stack applications with the MERN stack
                MongoDB, Express.js, React, and Node.js.
              </p>
              <p>
                Along the way, I’ve built several MERN projects that showcase my skills and
                dedication. Beyond coding, I’m deeply interested in cinematic
                videography and photography capturing stories through visuals.
              </p>
              <p>
                When I’m not coding or editing, you might find me exploring nature
                or learning something new to spark creativity.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800">
              {/* <p className="text-white font-medium italic">
                “I’m eager to collaborate, learn, and use technology to build a
                better future. Let’s create something meaningful together.”
              </p> */}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
