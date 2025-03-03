import React from 'react';
import { Link } from 'react-router-dom';
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  Mail,
  MapPin,
  Phone,
  Zap,
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-10 relative bg-black/60 backdrop-blur-md border-t border-neon-pink/30">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {' '}
          {/* Added text-center on mobile */}
          {/* About Section */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 justify-center md:justify-start"
            >
              {' '}
              {/* Centered on mobile */}
              <span className="font-orbitron font-bold text-xl text-gradient">
                Aavishkaar-2025
              </span>
            </Link>
            <p className="text-gray-300">
              Experience the future of technology at the most immersive tech
              festival of the year.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-orbitron text-lg font-bold mb-4 text-gradient">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-neon-pink transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/schedule"
                  className="text-gray-300 hover:text-neon-pink transition-colors"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  to="/sponsors"
                  className="text-gray-300 hover:text-neon-pink transition-colors"
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-300 hover:text-neon-pink transition-colors"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="font-orbitron text-lg font-bold mb-4 text-gradient">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 justify-center md:justify-start">
                {' '}
                {/* Centered on mobile */}
                <Mail className="w-4 h-4 text-neon-pink" />
                <span className="text-gray-300">info@techfest2025.com</span>
              </li>
              <li className="flex items-center space-x-2 justify-center md:justify-start">
                {' '}
                {/* Centered on mobile */}
                <Phone className="w-4 h-4 text-electric-blue" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 justify-center md:justify-start">
                {' '}
                {/* Centered on mobile */}
                <MapPin className="w-4 h-4 text-hacker-green" />
                <span className="text-gray-300">Tech District, Cyber City</span>
              </li>
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h3 className="font-orbitron text-lg font-bold mb-4 text-gradient">
              Follow Us
            </h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {' '}
              {/* Centered on mobile */}
              <a
                href="#"
                className="text-gray-300 hover:text-neon-pink transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-neon-pink transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-neon-pink transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-neon-pink transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neon-pink/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm text-center md:text-left">
            {' '}
            {/* Centered on mobile */}© 2025 TechFest. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center space-x-2 text-neon-pink hover:text-electric-blue transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
