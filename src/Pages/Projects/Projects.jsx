import React, { useEffect, useState } from "react";
import Container from "../../Container/Container";
import { FaExternalLinkAlt, FaTools, FaLayerGroup } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { MdTouchApp } from "react-icons/md";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const cardVariants = {
  left: {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  },
  center: {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  },
  right: {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  },
};

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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {projects.map((project, index) => {
            let variantKey =
              index === 0
                ? "left"
                : index === 1
                ? "center"
                : index === 2
                ? "right"
                : "center";

            return (
              <motion.div
                key={project.id}
                className="bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
                variants={cardVariants[variantKey]}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <h2 className="text-lg font-semibold mb-2 text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm mb-3 flex-1">
                  {project.description}
                </p>

                {/* Image in card */}
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
            );
          })}
        </motion.div>

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
                className="bg-white rounded-lg shadow-lg max-w-xl w-full p-5 relative mx-4"
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

                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaLayerGroup /> {selectedProject.title}
                </h2>

                <p className="text-gray-700 mb-4">
                  {selectedProject.description}
                </p>

                {/* Features */}
                {selectedProject.details?.features && (
                  <>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      Features
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 max-h-36 overflow-auto">
                      {selectedProject.details.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Tech Stack */}
                {selectedProject.details?.techStack && (
                  <>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <FaTools /> Tech Stack
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4 text-gray-700">
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Frontend
                        </h4>
                        <p>
                          {selectedProject.details.techStack.frontend
                            .map((tech) => tech.split(" ")[0])
                            .join(", ")}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">
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

                {/* Live Demo Link */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm hover:bg-black transition w-full justify-center"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
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
