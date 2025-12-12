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
            <span className="text-xs font-medium text-white">My Work</span>
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
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
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
                            {(project.details?.techStack?.main || project.details?.techStack?.frontend || []).slice(0, 6).map((tech, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-medium px-2.5 py-1 bg-[#1A1A1F] text-gray-300 rounded-full border border-gray-800"
                              >
                                {tech}
                              </span>
                            ))}
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

          {/* Custom Navigation Buttons */}
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-4 z-20 custom-prev w-12 h-12 bg-white/10 backdrop-blur-md rounded-full items-center justify-center text-white cursor-pointer hover:bg-white/20 transition-all border border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-4 z-20 custom-next w-12 h-12 bg-white/10 backdrop-blur-md rounded-full items-center justify-center text-white cursor-pointer hover:bg-white/20 transition-all border border-white/10">
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
