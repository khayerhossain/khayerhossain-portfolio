import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaTools,
  FaKey,
  FaLock,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiAxios,
  SiFramer,
  SiReactrouter,
  SiNextdotjs,
  SiTypescript,
  SiMongoose,
  SiVite,
} from "react-icons/si";
import { motion } from "framer-motion";
import Container from "../../Container/Container";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const iconColors = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  JS: "#F7DF1E",
  REACT: "#61DAFB",
  NEXT: "#000000",
  TAILWIND: "#38BDF8",
  TS: "#3178C6",
  FIREBASE: "#FFCA28",
  EXPRESS: "#303030",
  NODE: "#3C873A",
  MONGO: "#4DB33D",
  MONGOOSE: "#880000",
  JWT: "#E91E63",
  NEXTAUTH: "#4C51BF",
  ROUTER: "#CA4245",
  DAISY: "#EAB308",
  FRAMER: "#0055FF",
  AXIOS: "#5A29E4",
  GITHUB: "#181717",
  FIGMA: "#F24E1E",
  VITE: "#646CFF",
};

const Skills = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <Container>
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-black bg-clip-text">
            My Skills
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm mt-3">
            I build high-quality, responsive, and full-stack web applications
            using the latest modern tech stack.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* FRONTEND */}
          <motion.div
            className="rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1 duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-5 text-gray-800 border-b border-gray-200 pb-2">
              Frontend
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FaHtml5 color={iconColors.HTML} />, name: "HTML5" },
                { icon: <FaCss3Alt color={iconColors.CSS} />, name: "CSS3" },
                {
                  icon: <FaJsSquare color={iconColors.JS} />,
                  name: "JavaScript",
                },
                {
                  icon: <FaReact color={iconColors.REACT} />,
                  name: "React.js",
                },
                {
                  icon: <SiNextdotjs color={iconColors.NEXT} />,
                  name: "Next.js",
                },
                {
                  icon: <SiTailwindcss color={iconColors.TAILWIND} />,
                  name: "Tailwind CSS",
                },
                {
                  icon: <SiTypescript color={iconColors.TS} />,
                  name: "TypeScript",
                },
                { icon: <SiVite color={iconColors.VITE} />, name: "Vite" },
              ].map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium text-gray-700">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BACKEND */}
          <motion.div
            className="rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1 duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-5 text-gray-800 border-b border-gray-200 pb-2">
              Backend
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <SiFirebase color={iconColors.FIREBASE} />,
                  name: "Firebase",
                },
                {
                  icon: <SiExpress color={iconColors.EXPRESS} />,
                  name: "Express.js",
                },
                { icon: <FaNodeJs color={iconColors.NODE} />, name: "Node.js" },
                {
                  icon: <SiMongodb color={iconColors.MONGO} />,
                  name: "MongoDB",
                },
                {
                  icon: <SiMongoose color={iconColors.MONGOOSE} />,
                  name: "Mongoose",
                },
                { icon: <FaKey color={iconColors.JWT} />, name: "JWT" },
                {
                  icon: <FaLock color={iconColors.NEXTAUTH} />,
                  name: "NextAuth.js",
                },
              ].map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium text-gray-700">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* TOOLS */}
          <motion.div
            className="rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1 duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-5 text-gray-800 border-b border-gray-200 pb-2">
              Tools & Libraries
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <SiReactrouter color={iconColors.ROUTER} />,
                  name: "React Router",
                },
                { icon: <FaTools color={iconColors.DAISY} />, name: "DaisyUI" },
                {
                  icon: <SiFramer color={iconColors.FRAMER} />,
                  name: "Framer Motion",
                },
                { icon: <SiAxios color={iconColors.AXIOS} />, name: "Axios" },
                {
                  icon: <FaGithub color={iconColors.GITHUB} />,
                  name: "GitHub",
                },
                { icon: <FaFigma color={iconColors.FIGMA} />, name: "Figma" },
              ].map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium text-gray-700">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
