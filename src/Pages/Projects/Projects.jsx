import React, { useEffect, useState } from "react";
import Container from "../../Container/Container";
import {
  FaExternalLinkAlt,
  FaTools,
  FaLayerGroup,
  FaGithub,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { MdTouchApp } from "react-icons/md";

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

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/Api/ProjectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <section className="bg-white py-20">
      <Container>
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
          My recent projects
        </h1>
        <p className="text-center text-gray-600 mb-12">
          These projects highlight my ability to solve real-world problems
          through innovative coding and design.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <h2 className="text-lg font-semibold mb-2 text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3 flex-1">
                {project.description}
              </p>

              <div className="mb-4">
                <img
                  src={project.laptopImage}
                  alt={`${project.title} Laptop view`}
                  className="w-full object-cover rounded-lg h-52"
                />
              </div>

              <div className="flex justify-between items-center mt-auto gap-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm hover:bg-black transition cursor-pointer"
                >
                  <MdTouchApp /> View Details
                </button>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm hover:bg-black transition cursor-pointer"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 px-4 pt-10 overflow-y-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 relative mx-4 max-h-[85vh] overflow-y-auto"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-3xl font-bold"
                  aria-label="Close modal"
                >
                  &times;
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaLayerGroup /> {selectedProject.title}
                </h2>

                {/* Brief Description */}
                <p className="text-gray-700 mb-4">
                  {selectedProject.description}
                </p>

                {/* Tech Stack */}
                {selectedProject.details?.techStack && (
                  <>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <FaTools /> Main Tech Stack
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4 text-gray-700">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Frontend
                        </h4>
                        <p>
                          {selectedProject.details.techStack.frontend
                            .map((tech) => tech.split(" ")[0])
                            .join(", ")}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">
                          Backend
                        </h4>
                        <p>
                          {selectedProject.details.techStack.backend
                            .map((tech) => tech.split(" ")[0])
                            .join(", ")}
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {/* Challenges */}
                {selectedProject.details?.challenges && (
                  <>
                    <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                    <p className="text-gray-700 mb-4 max-h-32 overflow-auto">
                      {selectedProject.details.challenges}
                    </p>
                  </>
                )}

                {/* Future Plans */}
                {selectedProject.details?.futurePlans && (
                  <>
                    <h3 className="text-lg font-semibold mb-2">Future Plans</h3>
                    <p className="text-gray-700 mb-4 max-h-32 overflow-auto">
                      {selectedProject.details.futurePlans}
                    </p>
                  </>
                )}

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm hover:bg-black transition justify-center"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>

                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm hover:bg-black transition justify-center"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default Projects;
