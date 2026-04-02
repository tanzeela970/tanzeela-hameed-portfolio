import { motion } from 'framer-motion';
import { Bug, CheckCircle2, History, Code } from 'lucide-react';

const QAExperience = () => {
  const experiences = [
    {
      role: 'Frontend Developer',
      period: '2024 - 2025',
      description: 'Developing highly responsive and interactive user interfaces using React and Tailwind CSS. Bridging the gap between design concepts and functional code.',
      icon: <Code className="w-6 h-6 text-accent" />
    },
    {
      role: 'Manual QA Engineer',
      period: '2025 - present',
      description: 'Executed functional, regression, and cross-browser testing cycles. Utilized testing tools and reported detailed bugs to ensure pixel-perfect, bug-free applications.',
      icon: <Bug className="w-6 h-6 text-accent" />
    },
    {
      role: 'UI/UX Tester & Web Developer',
      period: '2024 - present',
      description: 'Tested user interfaces for responsiveness and accessibility compliance. Collaborated with teams to implement continuous UI improvements and rapid iterations.',
      icon: <CheckCircle2 className="w-6 h-6 text-accent" />
    }
  ];

  return (
    <section id="qa" className="py-20 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Professional <span className="text-accent">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Combining robust frontend development skills with rigorous quality assurance methodologies.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto p-4 md:p-8">
          <div className="relative border-l border-border pl-8 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true, amount: 0.8 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 mt-1 w-8 h-8 rounded-full bg-bg-primary border-2 border-accent flex items-center justify-center">
                  <div className="w-2 h-2 bg-text-primary rounded-full"></div>
                </div>

                <div className="bg-bg-primary rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {exp.icon}
                      <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                    </div>
                    <span className="text-sm font-medium text-accent mt-2 sm:mt-0 bg-accent/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-text-secondary">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QAExperience;
