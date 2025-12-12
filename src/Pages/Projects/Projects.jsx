import React, { useEffect, useState } from "react";
import Container from "../../Container/Container";
import { FaGithub, FaExternalLinkAlt, FaLayerGroup } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  useEffect(() => {
    fetch("/Api/ProjectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <section className="bg-[#050505] py-10 relative overflow-hidden" id="projects">
      <Container>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#1A1A1F] px-4 py-1.5 rounded-full mb-3">
            <FaLayerGroup className="text-white text-sm" />
            <span className="text-xs font-medium text-red-500">My Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm">
            Swipe through some of my recent work. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Swiper Slider */}

        <div className="relative group">
          {projects.length > 0 && (
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              pagination={{
                clickable: true,
                el: '.custom-pagination',
                renderBullet: function (index, className) {
                  return '<span class="' + className + ' custom-bullet"></span>';
                },
              }}
              navigation={{
                prevEl,
                nextEl,
              }}
              className="w-full rounded-2xl overflow-hidden shadow-2xl bg-[#0a0a0f] border border-gray-800"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[450px]">
                    {/* Image Side */}
                    <div className="relative h-[250px] lg:h-full w-full bg-[#1A1A1F] flex items-center justify-center p-4 group overflow-hidden">
                      <img
                        src={project.laptopImage}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Content Side */}
                    <div className="p-6 lg:p-8 flex flex-col justify-center bg-[#111115] w-full lg:h-full">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="max-w-xl">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="mb-6">
                            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                              Built With
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {(project.details?.techStack?.main || project.details?.techStack?.frontend || []).map((tech, i) => {
                                const getTechStyle = (name) => {
                                  // Normalize name for matching (optional, but good for case insensitivity if needed, 
                                  // but here we'll map specific strings found in JSON)
                                  const styles = {
                                    // React Ecosystem
                                    "React": "bg-blue-500/10 text-blue-400 border-blue-500/20",
                                    "React JS": "bg-blue-500/10 text-blue-400 border-blue-500/20",
                                    "Next.js": "bg-slate-500/10 text-slate-300 border-slate-500/20", // Subtle white/slate glass
                                    "Router": "bg-red-500/10 text-red-400 border-red-500/20",
                                    "react-router-dom": "bg-red-500/10 text-red-400 border-red-500/20",

                                    // Backend / Database
                                    "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
                                    "Express.js": "bg-gray-700/50 text-gray-300 border-gray-600/30",
                                    "MongoDB": "bg-green-600/10 text-green-500 border-green-600/20",
                                    "Firebase": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
                                    "Firebase Auth": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
                                    "firebase": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
                                    "Socket.io": "bg-zinc-500/10 text-zinc-300 border-zinc-500/20", // Zinc/Dark Grey glass

                                    // CSS / UI
                                    "Tailwind CSS": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
                                    "TailwindCSS": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
                                    "tailwindcss": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
                                    "Tailwind": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
                                    "Bootstrap": "bg-purple-600/10 text-purple-400 border-purple-600/20",
                                    "DaisyUI": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                                    "daisyui": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",

                                    // Languages
                                    "JavaScript": "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",
                                    "TypeScript": "bg-blue-600/10 text-blue-400 border-blue-600/20",

                                    // State / Utils / Auth
                                    "Redux": "bg-purple-500/10 text-purple-400 border-purple-500/20",
                                    "Stripe": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
                                    "Stripe Integration": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
                                    "NextAuth": "bg-purple-500/10 text-purple-400 border-purple-500/20",
                                    "JWT": "bg-pink-500/10 text-pink-400 border-pink-500/20",
                                    "JWT Middleware": "bg-pink-500/10 text-pink-400 border-pink-500/20",
                                    "jsonwebtoken": "bg-pink-500/10 text-pink-400 border-pink-500/20",
                                    "Axios": "bg-purple-400/10 text-purple-300 border-purple-400/20",

                                    // Libraries / Animations
                                    "Framer Motion": "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20",
                                    "framer-motion": "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20",
                                    "Recharts": "bg-orange-500/10 text-orange-400 border-orange-500/20",
                                    "SweetAlert2": "bg-rose-500/10 text-rose-400 border-rose-500/20",
                                    "react-hot-toast": "bg-orange-400/10 text-orange-300 border-orange-400/20",
                                    "react-icons": "bg-pink-500/10 text-pink-400 border-pink-500/20",
                                    "lottie-react": "bg-teal-500/10 text-teal-400 border-teal-500/20",
                                    "dotenv": "bg-lime-500/10 text-lime-400 border-lime-500/20"
                                  };
                                  return styles[name] || "bg-[#1A1A1F] text-gray-300 border-gray-800";
                                };

                                return (
                                  <span
                                    key={i}
                                    className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${getTechStyle(tech)} transition-colors`}
                                  >
                                    {tech}
                                  </span>
                                );
                              })}
                            </div>
                          </div>

                          {/* Links */}
                          <div className="flex items-center gap-4">
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-gray-200 transition-colors cursor-pointer"
                            >
                              <FaExternalLinkAlt /> Live Demo
                            </a>
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white border border-gray-700 hover:border-white hover:bg-white/5 transition-all cursor-pointer"
                            >
                              <FaGithub className="text-lg" /> Source Code
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Custom Navigation Buttons */}
          <div ref={(node) => setPrevEl(node)} className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-4 z-20 custom-prev w-12 h-12 bg-white/10 backdrop-blur-md rounded-full items-center justify-center text-white cursor-pointer hover:bg-white/20 transition-all border border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div ref={(node) => setNextEl(node)} className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-4 z-20 custom-next w-12 h-12 bg-white/10 backdrop-blur-md rounded-full items-center justify-center text-white cursor-pointer hover:bg-white/20 transition-all border border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>

          {/* Custom Pagination Container */}
          <div className="custom-pagination flex justify-center gap-2 mt-6 z-10 relative"></div>

          <style>{`
            .custom-bullet {
              display: block;
              width: 10px;
              height: 10px;
              background-color: #4b5563;
              border-radius: 50%;
              cursor: pointer;
              transition: all 0.3s ease;
            }
            .swiper-pagination-bullet-active.custom-bullet {
              background-color: #ffffff;
              width: 30px;
              border-radius: 5px;
            }
            .custom-prev.swiper-button-disabled,
            .custom-next.swiper-button-disabled {
              opacity: 0.5;
              cursor: not-allowed;
            }
          `}</style>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
