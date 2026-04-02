import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Code, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-4 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent opacity-10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-bg-secondary opacity-50 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 w-full z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-bg-secondary border border-border mb-6">
            <span className="flex h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-text-secondary">Available for new opportunities</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-4 text-text-primary w-fit">
            <span className="block">Manual QA Engineer</span>
            <span className="block text-center text-[#8C5A3C] my-2">&</span>
            <span className="block text-accent">Frontend Developer.</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-lg">
            Building beautiful interfaces & ensuring quality experiences. Bridging the gap between creative design and flawless functionality.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-bg-primary bg-accent hover:bg-accent-hover transition-colors shadow-sm"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer inline-flex items-center px-6 py-3 border border-border text-base font-medium rounded-lg text-text-primary bg-transparent hover:bg-bg-secondary transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative hidden md:flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-bg-secondary rounded-[3rem] shadow-xl rotate-6 opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 bg-bg-secondary border border-border rounded-[3rem] shadow-sm transform -rotate-3 overflow-hidden flex flex-col justify-center items-center text-text-primary">
              <div className="flex gap-8">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="p-6 bg-bg-primary rounded-2xl shadow-lg border border-border flex flex-col items-center"
                >
                  <Code size={40} className="text-accent mb-2" />
                  <span className="font-semibold text-sm">Frontend</span>
                </motion.div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [10, -10, 10] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                  className="p-6 bg-bg-primary rounded-2xl shadow-lg border border-border flex flex-col items-center mt-12"
                >
                  <ShieldCheck size={40} className="text-accent mb-2" />
                  <span className="font-semibold text-sm">QA Testing</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
