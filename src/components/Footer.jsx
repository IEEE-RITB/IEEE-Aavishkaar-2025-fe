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
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.799 19.8-1.414 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.344 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.799 19.8 1.414 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413L30 11.97l7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%23FF00FF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
        }}
      />

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
