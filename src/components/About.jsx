import { motion } from 'framer-motion';
import { Target, Zap, GraduationCap, CheckCircle } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 xl:px-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side: Animated Intro Card */}
          <motion.div variants={itemVariants} className="relative w-full max-w-md mx-auto md:mx-0">
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              className="bg-bg-primary border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative z-10"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-accent/10 rounded-full text-accent">
                  <GraduationCap size={44} />
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-text-primary mb-2 leading-snug">
                  BS Computer Science Graduate — 2025
                </h3>
                <p className="text-text-secondary font-medium text-sm">
                  University of the Punjab
                </p>
              </div>

              <p className="text-text-secondary text-center mb-6 text-sm leading-relaxed">
                I combine development and testing to deliver seamless, high-quality user experiences.
              </p>

            </motion.div>

            {/* Decorative dots pattern */}
            <div className="absolute -top-5 -left-5 w-32 h-32 bg-[radial-gradient(var(--border)_2px,transparent_2px)] [background-size:10px_10px] z-0 opacity-70 pointer-events-none text-text-secondary"></div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[radial-gradient(var(--border)_2px,transparent_2px)] [background-size:10px_10px] z-0 opacity-70 pointer-events-none text-text-secondary"></div>
          </motion.div>

          {/* Right Side: Existing Text */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                About <span className="text-accent">Me</span>
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>
              <p className="text-lg text-text-secondary leading-relaxed">
                I am a passionate Manual QA Engineer and Frontend Developer. This unique combination allows me to not only build visually stunning user interfaces but also rigorously test them to ensure they are robust, accessible, and bug-free.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mt-4">
                My dual perspective helps teams ship high-quality products faster, reducing the communication gap between development and testing phases. I look at code with an engineer's logic and a user's empathy.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-bg-primary rounded-xl border border-border shadow-sm flex items-start space-x-4">
                <Target className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-text-primary">Pixel Perfect</h4>
                  <p className="text-sm text-text-secondary mt-1">Design into Code.</p>
                </div>
              </div>
              <div className="p-4 bg-bg-primary rounded-xl border border-border shadow-sm flex items-start space-x-4">
                <Zap className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-text-primary">Bug Free</h4>
                  <p className="text-sm text-text-secondary mt-1">Comprehensive edge-case testing.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
