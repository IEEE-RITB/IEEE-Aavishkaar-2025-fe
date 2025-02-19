import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Calendar,
  Clock,
  Users,
  Phone,
  Star,
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'Events', path: '/events', icon: <Calendar className="h-5 w-5" /> },
    {
      name: 'Schedule',
      path: '/schedule',
      icon: <Clock className="h-5 w-5" />,
    },
    { name: 'Sponsors', path: '/sponsors', icon: <Star className="h-5 w-5" /> },
    { name: 'Team', path: '/team', icon: <Users className="h-5 w-5" /> },
    { name: 'Contact', path: '/contact', icon: <Phone className="h-5 w-5" /> },
  ];

  const handleNavigation = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <img
              src="/asssets/navbar.jpg"
              alt="Description"
              className="w-10 h-auto"
            />
            <span className="font-orbitron font-bold text-xl text-gradient">
              Aavishkaar-2025
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className="font-rajdhani text-gray-300 hover:text-neon-pink transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-neon-pink"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden glassmorphism">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="flex items-center space-x-2 w-full px-3 py-2 text-base font-rajdhani text-gray-300 hover:text-neon-pink transition-colors duration-300"
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
