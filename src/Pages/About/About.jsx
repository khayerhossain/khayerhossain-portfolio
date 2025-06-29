import React from "react";
import Container from "../../Container/Container";
import AboutImage from "../../assets/about-image.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left side image */}
          <div className="w-full h md:w-1/2">
            <img
              src={AboutImage}
              alt="Khayer Hossain"
              className="rounded-lg shadow-xl w-full max-w-sm mx-auto md:mx-0 lg:max-h-[420px] object-cover"
            />
          </div>

          {/* Right side content */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="border-l-4 border-red-500 pl-4 mb-5">
              <h2 className="text-5xl md:text-5xl font-bold text-gray-900 uppercase">
                About.
              </h2>
            </div>

            <p className="text-lg font-semibold text-gray-800 mb-3">
              I’m a driven developer passionate about turning ideas into
              real-world products.
            </p>

            <p className="text-gray-600 leading-relaxed mb-3">
              My journey started with the basics of HTML and CSS and soon
              evolved into building full‑stack applications with the MERN stack
              (MongoDB, Express.js, React, and Node.js). Along the way, I’ve
              built several MERN projects that showcase my skills and
              dedication. Beyond coding, I’m deeply interested in cinematic
              videography and photography — capturing stories through visuals.
              When I’m not coding or editing, you might find me exploring nature
              or learning something new to spark creativity.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I’m eager to collaborate, learn, and use technology to build a
              better future. Let’s create something meaningful together.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
