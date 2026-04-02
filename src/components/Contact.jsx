import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace '1234567890' with your actual WhatsApp number including country code (e.g., 923001234567)
    // Note: Do NOT include the '+' sign, just the digits.
    const whatsappNumber = "923134898856";

    // Formatting the message using URL encoding %0A for newlines
    const text = `Hello Tanzeela, you have a new message from your portfolio!%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <section id="contact" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Have a project in mind, need testing support, or just want to say hi? Feel free to drop a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Let's Connect</h3>
              <p className="text-text-secondary mb-8">
                I'm currently available for freelance work and full-time opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:tanzeelahameed114@gmail.com" className="flex items-center space-x-4 text-text-secondary hover:text-accent transition-colors group">
                <div className="w-12 h-12 bg-bg-secondary flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-bg-primary transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg">gmail.com</span>
              </a>

              <a href="https://www.linkedin.com/in/tanzeela-hameed-090b7134a" className="flex items-center space-x-4 text-text-secondary hover:text-accent transition-colors group">
                <div className="w-12 h-12 bg-bg-secondary flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-bg-primary transition-colors">
                  <Linkedin size={20} />
                </div>
                <span className="text-lg">LinkedIn Profile</span>
              </a>

              <a href="https://github.com/tanzeela970" className="flex items-center space-x-4 text-text-secondary hover:text-accent transition-colors group">
                <div className="w-12 h-12 bg-bg-secondary flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-bg-primary transition-colors">
                  <Github size={20} />
                </div>
                <span className="text-lg">GitHub Repository</span>
              </a>

              <a href="#" className="flex items-center space-x-4 text-text-secondary hover:text-accent transition-colors group">
                <div className="w-12 h-12 bg-bg-secondary flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-bg-primary transition-colors">
                  <MessageSquare size={20} />
                </div>
                <span className="text-lg">Fiverr Services</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-bg-secondary p-8 rounded-3xl border border-border shadow-sm"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-text-primary transition-shadow"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-text-primary transition-shadow"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-primary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-text-primary transition-shadow resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-bg-primary bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
