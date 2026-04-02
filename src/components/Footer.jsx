import { Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-bg-secondary py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 flex flex-col items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-bold cursor-pointer text-text-primary mb-6 hover:text-accent transition-colors"
        >
          Portfolio.
        </Link>

        <div className="flex space-x-6 mb-8">
          <a href="https://www.linkedin.com/in/tanzeela-hameed-090b7134a" className="text-text-secondary hover:text-accent transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/tanzeela970" className="text-text-secondary hover:text-accent transition-colors">
            <span className="sr-only">GitHub</span>
            <Github size={24} />
          </a>
          <a href="mailto:tanzeelahameed114@gmail.com" className="text-text-secondary hover:text-accent transition-colors">
            <span className="sr-only">Email</span>
            <Mail size={24} />
          </a>
        </div>

        <p className="text-center text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} Manual QA & Frontend Developer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
