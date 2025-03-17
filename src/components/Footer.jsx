import React from "react";
import { Link } from "react-router";
import { Linkedin, Instagram, ArrowUp, Mail, MapPin } from "lucide-react";
import ieeeData from "../configs/ieee-data.config.json";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-10 relative bg-black/60 backdrop-blur-md border-t border-neon-pink/30">
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center md:text-left justify-between ">
          {/* About Section */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 justify-center md:justify-start"
            >
              <span className="font-orbitron font-bold text-lg sm:text-xl text-gradient">
                Aavishkaar-2025
              </span>
            </Link>
            <p className="text-sm sm:text-base text-gray-300">
              Experience the future of technology at the most immersive tech
              festival of the year.
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col w-full lg:pl-12">
            <h3 className="font-orbitron text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gradient whitespace-nowrap">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/events"
                  className="text-sm sm:text-base text-gray-300 hover:text-neon-pink transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/schedule"
                  className="text-sm sm:text-base text-gray-300 hover:text-neon-pink transition-colors"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  to="/sponsors"
                  className="text-sm sm:text-base text-gray-300 hover:text-neon-pink transition-colors"
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-sm sm:text-base text-gray-300 hover:text-neon-pink transition-colors"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Links */}
          <div className="flex flex-col w-full lg:pl-4">
            <h3 className="font-orbitron text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gradient whitespace-nowrap">
              Follow Us
            </h3>
            <div className="flex space-x-4 justify-center md:justify-start lg:mx-4">
              <a
                href={ieeeData.socials.linkedin}
                className="text-gray-300 hover:text-neon-pink transition-colors"
                target="_blank"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href={ieeeData.socials.instagram}
                className="text-gray-300 hover:text-neon-pink transition-colors"
                target="_blank"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col w-full lg:-pl-8">
            <h3 className="font-orbitron text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gradient whitespace-nowrap">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-neon-pink flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300 break-words">
                  {ieeeData.email}
                </span>
              </li>
              <li className="flex items-start space-x-3 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-hacker-green flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base text-gray-300 break-words">
                  {ieeeData.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-neon-pink/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-gray-300 text-center md:text-left">
            © 2025 TechFest. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 cursor-pointer flex items-center space-x-2 text-sm sm:text-base text-neon-pink hover:text-electric-blue transition-colors"
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
