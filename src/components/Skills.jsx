import { motion } from 'framer-motion';

const Skills = () => {
  const frontendSkills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript / ES6+', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'HTML & CSS', level: 90 },
    { name: 'Framer Motion', level: 75 },
  ];

  const qaSkills = [
    { name: 'Manual Testing', level: 95 },
    { name: 'Bug Reporting (Jira, Google Sheets,Excel)', level: 100 },
    { name: 'Test Cases & Documentation', level: 90 },
    { name: 'Agile & SDLC/STLC', level: 85 },
    { name: 'Functionl testing/Regression testing', level: 100 },
  ];

  const SkillBar = ({ skill, index }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-text-primary">{skill.name}</span>
        <span className="text-sm font-medium text-accent">{skill.level}%</span>
      </div>
      <div className="w-full bg-bg-secondary rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="bg-accent h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.8 }}
        ></motion.div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit that combines creating stunning user experiences with ensuring perfect system quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Frontend Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 bg-bg-primary border border-border rounded-3xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-8 text-text-primary flex items-center">
              Frontend Development
            </h3>
            {frontendSkills.map((skill, idx) => (
              <SkillBar key={skill.name} skill={skill} index={idx} />
            ))}
          </motion.div>

          {/* QA Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 bg-bg-primary border border-border rounded-3xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-8 text-text-primary flex items-center">
              QA Engineering
            </h3>
            {qaSkills.map((skill, idx) => (
              <SkillBar key={skill.name} skill={skill} index={idx} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
