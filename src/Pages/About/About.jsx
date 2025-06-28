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
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <h2 className="text-5xl md:text-5xl font-bold text-gray-900 uppercase">
                About.
              </h2>
            </div>

            <p className="text-lg font-semibold text-gray-800 mb-4">
              I'm passionate about innovation and driven by impact.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              I enjoy working on cutting-edge projects and developing new ideas
              that can make a difference. I'm currently growing as a web
              developer, and every challenge I face teaches me something new.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I’m excited about collaboration, always eager to learn from
              others, and I believe technology can truly shape a better future.
              Let's build something meaningful together.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
