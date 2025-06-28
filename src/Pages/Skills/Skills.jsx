import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaTools,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiAxios,
  SiFramer,
  SiReactrouter,
} from "react-icons/si";
import { FaRegSmile } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../../Container/Container";

const Skills = () => {
  return (
    <div className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl text-gray-800 font-bold">Skills</h2>
          <small className="text-gray-800">My Technical Level</small>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mt-8">
          {/* Frontend Card */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 min-w-[250px] bg-gray-100 p-6 rounded-xl shadow-md text-center"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Frontend
            </h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center gap-2 justify-center">
                <FaHtml5 className="text-xl" /> HTML5
              </li>
              <li className="flex items-center gap-2 justify-center">
                <FaCss3Alt className="text-xl" /> CSS3
              </li>
              <li className="flex items-center gap-2 justify-center">
                <FaJsSquare className="text-xl" /> JavaScript
              </li>
              <li className="flex items-center gap-2 justify-center">
                <FaReact className="text-xl" /> React
              </li>
              <li className="flex items-center gap-2 justify-center">
                <SiTailwindcss className="text-xl" /> Tailwind CSS
              </li>
            </ul>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 min-w-[250px] bg-gray-100 p-6 rounded-xl shadow-md text-center"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Backend
            </h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center gap-2 justify-center">
                <SiFirebase className="text-xl" /> Firebase
              </li>
              <li className="flex items-center gap-2 justify-center">
                <SiExpress className="text-xl" /> Express.js
              </li>
              <li className="flex items-center gap-2 justify-center">
                <FaNodeJs className="text-xl" /> Node.js
              </li>
              <li className="flex items-center gap-2 justify-center">
                <SiMongodb className="text-xl" /> MongoDB
              </li>
            </ul>
          </motion.div>

          {/* Tools & Libraries Card */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 min-w-[250px] bg-gray-100 p-6 rounded-xl shadow-md text-center"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Tools & Libraries
            </h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center gap-2 justify-center">
                <SiReactrouter className="text-xl" /> React Router
              </li>
              <li className="flex items-center gap-2 justify-center">
                <FaTools className="text-xl" /> DaisyUI
              </li>
              <li className="flex items-center gap-2 justify-center">
                <SiFramer className="text-xl" /> Framer Motion
              </li>
              <li className="flex items-center gap-2 justify-center">
                <SiAxios className="text-xl" /> Axios
              </li>
              <li className="flex items-center gap-2 justify-center">
                <FaRegSmile className="text-xl" /> Lottie React
              </li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
