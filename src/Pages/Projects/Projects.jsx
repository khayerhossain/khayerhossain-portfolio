import React, { useEffect, useState } from 'react';
import Container from '../../Container/Container';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  left: {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  },
  center: {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  },
  right: {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  },
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/Api/ProjectData.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Failed to load projects:', err));
  }, []);

  return (
    <section className='bg-white py-20'>
      <Container>
        <h1 className='text-4xl font-bold text-gray-800 text-center mb-2'>My recent projects</h1>
        <p className='text-center text-gray-600 mb-12'>These projects highlight my ability to solve real-world problems through innovative coding and design.</p>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={containerVariants}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {projects.map((project, index) => {
            let variantKey;
            if (index === 0) variantKey = 'left';
            else if (index === 1) variantKey = 'center';
            else if (index === 2) variantKey = 'right';
            else variantKey = 'center';

            return (
              <motion.div
                key={project.id}
                className='bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col'
                variants={cardVariants[variantKey]}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <h2 className='text-lg font-semibold mb-2 text-gray-800'>{project.title}</h2>
                <p className='text-gray-600 text-sm mb-3 flex-1'>{project.description}</p>

                <div className='mb-4'>
                  <img
                    src={project.laptopImage}
                    alt={`${project.title} Laptop view`}
                    className='w-full object-cover rounded-lg h-52'
                    style={{ maxWidth: '100%', width: '100%' }}
                  />
                </div>

                <div className='flex justify-between items-center mt-auto gap-4'>
                  <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm hover:bg-black transition'
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm hover:bg-black transition'
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;