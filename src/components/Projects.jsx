import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import academyImg from '../assets/24academy.png';
import evercarto from '../assets/evercartoo.png';

const Projects = () => {
  const projects = [
    {
      title: 'Aesthetic E-Commerce',
      description: 'A modern website for an online fashion store focusing on fluid typography and all the modern features and admin dashboard.',
      tech: ['Vanilla JavaScript', 'HTML', 'CSS'],
      image: evercarto,
      live: 'https://ever-carto-store-ecommerce-website.vercel.app/',
      github: 'https://github.com/tanzeela970/EverCarto-Store-Ecommerce-website'
    },
    {
      title: 'QA Dashboard UI',
      description: 'A minimal dashboard interface for tracking test cases, bug reports, and project health over time.',
      tech: ['React', 'Vite', 'CSS Modules', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      live: '#',
      github: '#'
    },
    {
      title: 'Task Tracking Tool',
      description: 'An interactive kanban board application with a strong emphasis on keyboard accessibility and dark mode.',
      tech: ['JavaScript', 'HTML5', 'Sass', 'Local Storage'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop',
      live: '#',
      github: '#'
    },
    {
  title: 'Educational Website',
  description: 'Industry-led digital courses and apprenticeship training designed to empower the next generation of marketing and tech professionals.',
  tech: ['Javascript', 'Html', 'css3','php'],
  image: academyImg,
  live: 'https://24hour.academy/',
  github: 'https://github.com/tanzeela970/24HoursAcademy-educational-website/tree/main/24hoursacademy'
},
{
  title: 'Your 5th Project Name',
  description: 'Short description here...',
  tech: ['Tech1', 'Tech2'],
  image: 'image-url',
  live: 'live-link',
  github: 'github-link'
}
    
  ];

  return (
    <section id="projects" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A selection of my recent frontend development and QA work, demonstrating a focus on clean code and beautiful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-bg-secondary rounded-3xl overflow-hidden border border-border group flex flex-col hover:shadow-lg transition-all"
            >
              <div className="relative overflow-hidden h-60">
                <div className="absolute inset-0 bg-text-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-bg-primary border border-border rounded-md text-text-secondary">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  <a href={project.live} className="flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center text-sm font-medium text-text-primary hover:text-accent transition-colors">
                    <Github size={16} className="mr-1" /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
