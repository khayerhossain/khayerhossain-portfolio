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
  FaDatabase,
  FaVideo,
  FaCode,
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
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
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
  NEXT: "#ffffff",
  TAILWIND: "#38BDF8",
  TS: "#3178C6",
  FIREBASE: "#FFCA28",
  EXPRESS: "#ffffff",
  NODE: "#3C873A",
  MONGO: "#4DB33D",
  MONGOOSE: "#E33A3A",
  JWT: "#E91E63",
  NEXTAUTH: "#4C51BF",
  ROUTER: "#CA4245",
  DAISY: "#EAB308",
  FRAMER: "#0055FF",
  AXIOS: "#5A29E4",
  GITHUB: "#ffffff",
  FIGMA: "#F24E1E",
  VITE: "#646CFF",
  VSCODE: "#007ACC",
  LOTTIE: "#00DDB3",
};

const Skills = () => {
  return (
    <div className="bg-[#050505] py-20 relative overflow-hidden" id="skills">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <Container>
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#1A1A1F] border border-gray-800 mb-4">
              <span className="text-xs font-medium text-red-500 uppercase tracking-widest">
                Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My Skills
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              I build high quality, responsive, and full Stack web applications
              using the latest modern tech stack and best practices.
            </p>
          </motion.div>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {/* FRONTEND */}
          <motion.div
            className="group relative rounded-3xl bg-[#0a0a0f] border border-gray-800 p-8 hover:border-gray-700 transition-colors duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3 relative z-10">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              Frontend
            </h3>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              {[
                { icon: <FaHtml5 />, color: iconColors.HTML, name: "HTML5" },
                { icon: <FaCss3Alt />, color: iconColors.CSS, name: "CSS3" },
                { icon: <FaJsSquare />, color: iconColors.JS, name: "JavaScript" },
                { icon: <FaReact />, color: iconColors.REACT, name: "React.js" },
                { icon: <SiNextdotjs />, color: iconColors.NEXT, name: "Next.js" },
                { icon: <SiTailwindcss />, color: iconColors.TAILWIND, name: "Tailwind" },
                { icon: <SiTypescript />, color: iconColors.TS, name: "TypeScript" },
                { icon: <SiVite />, color: iconColors.VITE, name: "Vite" },
              ].map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#1A1A1F] border border-gray-800/50 hover:border-gray-700 hover:bg-[#222228] transition-all group/item"
                >
                  <span className="text-2xl transition-transform group-hover/item:scale-110" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span className="font-medium text-gray-300 text-sm group-hover/item:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BACKEND */}
          <motion.div
            className="group relative rounded-3xl bg-[#0a0a0f] border border-gray-800 p-8 hover:border-gray-700 transition-colors duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3 relative z-10">
              <span className="w-2 h-8 bg-green-500 rounded-full"></span>
              Backend
            </h3>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              {[
                { icon: <SiFirebase />, color: iconColors.FIREBASE, name: "Firebase" },
                { icon: <SiExpress />, color: iconColors.EXPRESS, name: "Express" },
                { icon: <FaNodeJs />, color: iconColors.NODE, name: "Node.js" },
                { icon: <SiMongodb />, color: iconColors.MONGO, name: "MongoDB" },
                { icon: <FaDatabase />, color: iconColors.MONGOOSE, name: "Mongoose" },
                { icon: <FaKey />, color: iconColors.JWT, name: "JWT" },
                { icon: <FaLock />, color: iconColors.NEXTAUTH, name: "NextAuth", fullWidth: true },
              ].map((skill, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-xl bg-[#1A1A1F] border border-gray-800/50 hover:border-gray-700 hover:bg-[#222228] transition-all group/item ${skill.fullWidth ? 'col-span-2' : ''}`}
                >
                  <span className="text-2xl transition-transform group-hover/item:scale-110" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span className="font-medium text-gray-300 text-sm group-hover/item:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* TOOLS */}
          <motion.div
            className="group relative rounded-3xl bg-[#0a0a0f] border border-gray-800 p-8 hover:border-gray-700 transition-colors duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3 relative z-10">
              <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
              Tools
            </h3>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              {[
                { icon: <SiReactrouter />, color: iconColors.ROUTER, name: "Router" },
                { icon: <FaTools />, color: iconColors.DAISY, name: "DaisyUI" },
                { icon: <SiFramer />, color: iconColors.FRAMER, name: "Framer" },
                { icon: <SiAxios />, color: iconColors.AXIOS, name: "Axios" },
                { icon: <FaGithub />, color: iconColors.GITHUB, name: "GitHub" },
                { icon: <FaFigma />, color: iconColors.FIGMA, name: "Figma" },
                { icon: <VscVscode />, color: iconColors.VSCODE, name: "VSCode" },
                { icon: <FaVideo />, color: iconColors.LOTTIE, name: "Lottie" },
              ].map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#1A1A1F] border border-gray-800/50 hover:border-gray-700 hover:bg-[#222228] transition-all group/item"
                >
                  <span className="text-2xl transition-transform group-hover/item:scale-110" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span className="font-medium text-gray-300 text-sm group-hover/item:text-white transition-colors">
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
