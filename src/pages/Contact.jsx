import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import NebulaBackground from '../components/NebulaBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <NebulaBackground />
      <animated.div style={fadeIn} className="relative z-10">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-gradient">Contact Us</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-lg rounded-lg p-6 border border-neon-pink/30">
              <h2 className="font-orbitron text-2xl font-bold mb-6 text-gradient">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-neon-pink" />
                  <span className="text-gray-300">info@techfest2025.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-electric-blue" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-hacker-green" />
                  <span className="text-gray-300">Tech District, Cyber City, 12345</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/40 backdrop-blur-lg rounded-lg p-6 border border-neon-pink/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-neon-pink/30 text-white focus:border-neon-pink focus:ring-1 focus:ring-neon-pink outline-none transition-colors"
                  required
                />
              </div>
              <button type="submit" className="neon-button w-full flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Contact;