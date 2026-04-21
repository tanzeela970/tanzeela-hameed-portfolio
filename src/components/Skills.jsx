import { motion } from 'framer-motion';

const Skills = () => {
  const frontendSkills = [
    { name: 'Jira', level: 90 },
    { name: 'Postman', level: 85 },
    { name: 'Excel', level: 95 },
    { name: 'Googlesheet', level: 90 },
    { name: 'Git/Github', level: 90 },
    { name: 'VS code', level: 95 },
    { name: 'Google Antigravity', level: 75 },
  ];

  const qaSkills = [
    { name: 'UI/UX Testing', level: 95 },
    { name: 'Bug Reporting', level: 100 },
    { name: 'Test Cases', level: 90 },
    { name: 'Agile & SDLC/STLC', level: 85 },
    { name: 'Functionl testing', level: 100 },
    { name: 'Regression testing', level: 90 },
  ];

  const webSkills = [
    { name: 'React', level: 70 },
    { name: 'JavaScript', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'HTML', level: 95 },
    { name: 'Custom CSS', level: 90 },
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
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 xl:px-32">

        {/* Heading */}
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

        {/* 3 Columns */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 bg-bg-primary border border-border rounded-3xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-8 text-text-primary">
              Tools
            </h3>
            {frontendSkills.map((skill, idx) => (
              <SkillBar key={skill.name} skill={skill} index={idx} />
            ))}
          </motion.div>

          {/* QA */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 bg-bg-primary border border-border rounded-3xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-8 text-text-primary">
              QA Engineering
            </h3>
            {qaSkills.map((skill, idx) => (
              <SkillBar key={skill.name} skill={skill} index={idx} />
            ))}
          </motion.div>

          {/* Web Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 bg-bg-primary border border-border rounded-3xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-8 text-text-primary">
              Web Technologies
            </h3>
            {webSkills.map((skill, idx) => (
              <SkillBar key={skill.name} skill={skill} index={idx} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;