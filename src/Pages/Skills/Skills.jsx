import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaTools,
  FaRegSmile,
  FaKey,
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
import { motion } from "framer-motion";
import Container from "../../Container/Container";

const Skills = () => {
  return (
    <div className="bg-white py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl text-gray-800 font-bold">Skills</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm mt-2">
            I specialize in full-stack development using the MERN stack and modern tools to build clean, responsive, and real-world applications.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mt-8">
          {/* Frontend Card */}
          <motion.div
            className="flex-1 min-w-[250px] bg-gray-100 p-4 rounded-xl shadow-md text-left"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Frontend</h3>
            <ol className="space-y-3 text-gray-800 list-none">
              <li>
                <div className="flex items-center gap-2">
                  <FaHtml5 className="text-lg" />
                  <span className="font-medium">HTML5</span>
                </div>
                <p className="text-xs text-gray-600 ml-6">Markup language for structuring content.</p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <FaCss3Alt className="text-lg" />
                  <span className="font-medium">CSS3</span>
                </div>
                <p className="text-xs text-gray-600 ml-6">Styling and responsive design.</p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <FaJsSquare className="text-lg" />
                  <span className="font-medium">JavaScript</span>
                </div>
                <p className="text-xs text-gray-600 ml-6">Adds interactivity to web pages.</p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <FaReact className="text-lg" />
                  <span className="font-medium">React</span>
                </div>
                <p className="text-xs text-gray-600 ml-6">Build dynamic single-page apps.</p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <SiTailwindcss className="text-lg" />
                  <span className="font-medium">Tailwind CSS</span>
                </div>
                <p className="text-xs text-gray-600 ml-6">Utility-first CSS framework.</p>
              </li>
            </ol>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            className="flex-1 min-w-[250px] bg-gray-100 p-4 rounded-xl shadow-md text-left"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Backend</h3>
            <ol className="space-y-3 text-gray-800 list-none">
              <li>
                <div className="flex items-center gap-2">
                  <SiFirebase className="text-lg" />
                  <span className="font-medium">Firebase</span>
                </div>
                <p className="text-xs text-gray-600 ml-6">Authentication & hosting services.</p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <SiExpress className="text-lg" />
                  <span className="font-medium">Express.js</span>
                </div>
                <p className="text-xs text-gray-600 ml-6">Minimal backend framework for Node.js.</p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <FaNodeJs className="text-lg" />
                  <span className="font-medium">Node.js</span>
                </div>
                <p className="text-xs text-gray-600 ml-6">Server-side JavaScript runtime.</p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <SiMongodb className="text-lg" />
                  <span className="font-medium">MongoDB</span>
                </div>
                <p className="text-xs text-gray-600 ml-6">NoSQL database for storing data.</p>
              </li>
              {/* JWT Added Here */}
              <li>
                <div className="flex items-center gap-2">
                  <FaKey className="text-lg" />
                  <span className="font-medium">JWT (JSON Web Token)</span>
                </div>
                <p className="text-xs text-gray-600 ml-6">Secure user authentication & authorization.</p>
              </li>
            </ol>
          </motion.div>

          {/* Tools & Libraries Card */}
          <motion.div
            className="flex-1 min-w-[250px] bg-gray-100 p-4 rounded-xl shadow-md text-left"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Tools & Libraries</h3>
            <ol className="space-y-3 text-gray-800 list-none">
              <li>
                <div className="flex items-center gap-2">
                  <SiReactrouter className="text-lg" />
                  <span className="font-medium">React Router</span>
                </div>
                <p className="text-xs text-gray-600 ml-6">Navigation in React applications.</p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <FaTools className="text-lg" />
                  <span className="font-medium">DaisyUI</span>
                </div>
                <p className="text-xs text-gray-600 ml-6">Component library for Tailwind CSS.</p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <SiFramer className="text-lg" />
                  <span className="font-medium">Framer Motion</span>
                </div>
                <p className="text-xs text-gray-600 ml-6">Smooth animations for React.</p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <SiAxios className="text-lg" />
                  <span className="font-medium">Axios</span>
                </div>
                <p className="text-xs text-gray-600 ml-6">HTTP client for API requests.</p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <FaRegSmile className="text-lg" />
                  <span className="font-medium">Lottie React</span>
                </div>
                <p className="text-xs text-gray-600 ml-6">Render animated illustrations easily.</p>
              </li>
            </ol>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
