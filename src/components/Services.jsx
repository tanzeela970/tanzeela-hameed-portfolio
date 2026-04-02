import { motion } from 'framer-motion';
import { LayoutTemplate, ShieldAlert, MonitorCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, accessible, and fast web applications using modern frameworks like React, Vite, and Tailwind CSS. Focus on aesthetic design matched with solid architecture.',
      icon: <LayoutTemplate size={40} className="text-accent mb-6" />
    },
    {
      title: 'Bug Testing & QA',
      description: 'Comprehensive manual testing including regression, and functional testing. Detailed reporting in Jira/Google Sheets or Excel to help engineering teams resolve issues efficiently.',
      icon: <ShieldAlert size={40} className="text-accent mb-6" />
    },
    {
      title: 'UI Debugging & Refinement',
      description: 'Bridging the gap between design and code. Identifying visual inconsistencies across different browsers and devices, and implementing Pixel-Perfect fixes.',
      icon: <MonitorCheck size={40} className="text-accent mb-6" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            My <span className="text-accent">Services</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Delivering end-to-end solutions from beautiful UI creation to comprehensive quality assurance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-bg-primary rounded-3xl p-8 border border-border hover:shadow-lg transition-all group"
            >
              <div className="group-hover:-translate-y-2 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">{service.title}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
