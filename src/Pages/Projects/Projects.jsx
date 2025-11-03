import React, { useEffect, useState } from "react";
import Container from "../../Container/Container";
import {
  FaExternalLinkAlt,
  FaTools,
  FaLayerGroup,
  FaGithub,
  FaCode,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { MdTouchApp } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    fetch("/Api/ProjectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <Container>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold bg-clip-text text-black mb-4">
            My Recent Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Innovative solutions crafted with modern technologies. Each project
            represents a unique challenge solved through creative coding and
            thoughtful design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(project.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              {/* Card Content */}
              <div className="relative bg-white rounded-2xl p-1">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 h-full flex flex-col">
                  {/* Project Number Badge */}
                  <div className="absolute top-4 right-7 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold mb-3 text-gray-800 pr-12 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Image with Overlay */}
                  <div className="relative mb-5 rounded-xl overflow-hidden group/image">
                    <img
                      src={project.laptopImage}
                      alt={`${project.title} preview`}
                      className="w-full h-48 transition-transform duration-700 group-hover/image:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>

                    {/* Tech Stack Pills on Hover */}
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
                      {project.details?.techStack?.frontend
                        ?.slice(0, 3)
                        .map((tech, i) => (
                          <span
                            key={i}
                            className="bg-white/90 backdrop-blur-sm text-xs px-2 py-1 rounded-full text-gray-800 font-medium"
                          >
                            {tech.split(" ")[0]}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                    >
                      <MdTouchApp className="text-lg" /> Details
                    </motion.button>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2  text-white px-4 py-3 rounded-xl text-sm font-semibold bg-black/90 hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <FaExternalLinkAlt /> Live
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4 py-8 overflow-y-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full relative my-8"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header with Gradient */}
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-8 rounded-t-3xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold transition-all duration-300 z-10"
                    aria-label="Close modal"
                  >
                    &times;
                  </button>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                        <FaLayerGroup className="text-white text-2xl" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">
                        {selectedProject.title}
                      </h2>
                    </div>
                    <p className="text-white/90 text-lg">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8 max-h-[60vh] overflow-y-auto">
                  {/* Tech Stack Section */}
                  {selectedProject.details?.techStack && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-lg">
                          <FaTools className="text-white text-lg" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          Tech Stack
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-2xl border border-purple-100">
                          <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <FaCode className="text-purple-600" />
                            Frontend
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.details.techStack.frontend.map(
                              (tech, i) => (
                                <span
                                  key={i}
                                  className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                                >
                                  {tech.split(" ")[0]}
                                </span>
                              )
                            )}
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-2xl border border-blue-100">
                          <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <FaCode className="text-blue-600" />
                            Backend
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.details.techStack.backend.map(
                              (tech, i) => (
                                <span
                                  key={i}
                                  className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                                >
                                  {tech.split(" ")[0]}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Challenges Section */}
                  {selectedProject.details?.challenges && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-lg">
                          <BiTargetLock className="text-white text-lg" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          Challenges Overcome
                        </h3>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-5 rounded-2xl border border-orange-100">
                        <p className="text-gray-700 leading-relaxed">
                          {selectedProject.details.challenges}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Future Plans Section */}
                  {selectedProject.details?.futurePlans && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-2 rounded-lg">
                          <FaLightbulb className="text-white text-lg" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          Future Roadmap
                        </h3>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-2xl border border-green-100">
                        <p className="text-gray-700 leading-relaxed">
                          {selectedProject.details.futurePlans}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Action Links */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <FaExternalLinkAlt /> Visit Live Site
                    </motion.a>

                    {selectedProject.githubLink && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-4 rounded-xl font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <FaGithub className="text-xl" /> View Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>

      {/* Add custom animations to your CSS */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Projects;
