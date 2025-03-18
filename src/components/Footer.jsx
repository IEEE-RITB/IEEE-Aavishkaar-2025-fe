import React from 'react';
import { Link } from 'react-router';
import {
  Linkedin,
  Instagram,
  ArrowUp,
  Mail,
  MapPin,
  Github,
} from 'lucide-react';
import ieeeData from "../configs/ieee-data.config.json";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-10 relative bg-[#0c0c18] border-t border-neon-pink/30 transition-footer">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 justify-center md:justify-start"
            >
              <span className="font-orbitron font-bold text-xl text-gradient">
                RIT-B TechFest-2025
              </span>
            </Link>
            <p className="text-gray-300">
              Experience the future of technology at the most immersive tech
              festival of the year.
            </p>
          </div>
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
          <div>
            <h3 className="font-orbitron text-lg font-bold mb-4 text-gradient">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-neon-pink" />
                <span className="text-gray-300"><a href='mailto:ieee-ritb@gmail.com'>{ieeeData.email}</a></span>
              </li>
              <li className="flex items-center space-x-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-hacker-green" />
                {/* <i class='fas fa-location-arrow' style='font-size:24px'></i> */}
                <span className="text-gray-300"><a href='https://maps.app.goo.gl/fkGesiVRNP8qBArJ9'>{ieeeData.address}</a></span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-orbitron text-lg font-bold mb-4 text-gradient">
              Follow Us
            </h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href={ieeeData.socials.linkedin}
                className="text-gray-300 hover:text-neon-pink transition-colors"
                target='_blank'
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={ieeeData.socials.instagram}
                className="text-gray-300 hover:text-neon-pink transition-colors"
                target='_blank'
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={ieeeData.socials.github}
                className="text-gray-300 hover:text-neon-pink transition-colors"
                target='_blank'
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-neon-pink/30 flex flex-col md:flex-row justify-between items-center feature-white">
          <p className="text-gray-300 text-sm text-center md:text-left">
            © 2025 TechFest. All rights reserved.
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