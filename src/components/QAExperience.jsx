import { motion } from 'framer-motion';
import { Bug, CheckCircle2, History, Code } from 'lucide-react';

const QAExperience = () => {
  const experiences = [
    {
      role: 'Software Quality Assurance Engineer (Intern)',
      company: 'Salaar Technology Pvt. Ltd.',
      period: 'Oct 2025 - Present',
      description:
        'Worked as a Software Quality Assurance Engineer focused on ensuring high-quality, bug-free web applications through structured manual testing and QA practices in a real development environment.',
      
      responsibilities: [
        'Performed manual testing including functional, UI/UX, and regression testing',
        'Created and executed detailed test cases and test scenarios',
        'Identified, documented, and reported bugs with clear reproduction steps',
        'Collaborated with developers to verify fixes and improve product stability',
        'Conducted cross-browser and responsive testing',
        'Performed basic API testing using Postman',
        'Followed Agile methodology (SDLC/STLC) during testing cycles'
      ],

      icon: <Bug className="hidden sm:block w-6 h-6 text-accent" />
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
            Ensuring bug-free and user-friendly applications through effective quality assurance practices.
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
                viewport={{ once: true, amount: 0.2 }}
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
                  {/* Responsibilities */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-text-primary mb-2">
                      Responsibilities:
                    </h4>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="text-sm text-text-secondary flex gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
