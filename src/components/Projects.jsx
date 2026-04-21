import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FileText } from 'lucide-react';
import academyImg from '../assets/24academy.png';
import ipe from '../assets/ipe.jpeg';
import Fotray from '../assets/fotray.png';

const Projects = () => {
  const projects = [
      {
      title: 'IPE Education Website',
      description:
        'Educational platform designed to provide online learning courses and student resources with smooth navigation and responsive UI.',
      
      testingTypes: [
        'Functional Testing',
        'UI/UX Testing',
        'Regression Testing',
        'Cross-Browser Testing'
      ],

      image: ipe ,
      live: 'https://www.ipe-education.com/',
      report: 'https://docs.google.com/spreadsheets/d/1m3uVQA6buiaTD2TwiTBaw7JGxip_FkztaoFkmkYUwH8/edit'
    },
    {
      title: '24HoursAcademy',
      description:
        'Educational platform designed to provide online learning courses and student resources with smooth navigation and responsive UI.',
      testingTypes: [
        'Smoke testing',
        'Functional Testing',
        'UI/UX Testing',
        'Regression Testing',
        'Cross-Browser Testing'
      ],
      image: academyImg,
      live: 'https://24hour.academy/',
      report: 'https://github.com/tanzeela970/24HoursAcademy-educational-website/tree/main/24hoursacademy'
    },
    {
      title: 'Fotray Network',
      description: 'Performed end-to-end manual testing for the Fortay Network web application, ensuring functionality, usability, and performance. Identified and reported bugs, validated fixes, and collaborated with developers to improve overall product quality.',
      tech: ['test cases', 'Bugs report' ,'Google sheet'],
      image: Fotray,
      live: 'https://fortray.org/',
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
            A showcase of my recent projects in quality assurance and web development, emphasizing clean execution and smooth user experience.
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

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.testingTypes?.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 bg-bg-primary border border-border rounded-md text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  <a
                    href={project.live} className="flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                    <ExternalLink size={16} className="mr-1" /> Live Site
                  </a>
                  <a
                    href={project.report} className="flex items-center text-sm font-medium text-text-primary hover:text-accent transition-colors">
                    <FileText size={16} className="mr-1" /> Test Report
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
