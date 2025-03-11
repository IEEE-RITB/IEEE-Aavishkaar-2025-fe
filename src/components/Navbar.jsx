import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Calendar,
  Clock,
  Users,
  Phone,
  Star,
} from "lucide-react";
import navItems from "../configs/nav.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Mapping navItem icon from string to corresponding icon component
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Home":
        return <Home className="h-5 w-5" />;
      case "Calendar":
        return <Calendar className="h-5 w-5" />;
      case "Clock":
        return <Clock className="h-5 w-5" />;
      case "Star":
        return <Star className="h-5 w-5" />;
      case "Users":
        return <Users className="h-5 w-5" />;
      case "Phone":
        return <Phone className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const handleNavigation = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 glassmorphism">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-12">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <img
            src="/src/asssets/navbar.jpg"
            alt="Description"
            className="w-10 h-auto"
          />
          <span className="font-orbitron font-bold text-xl text-gradient ml-2">
            Aavishkaar-2025
          </span>
        </div>
        <div className="hidden md:flex md:items-center">
          <div className="flex items-center">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`font-rajdhani text-gray-300 hover:text-neon-pink transition-colors duration-300 px-4`}
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
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
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
                {getIcon(item.icon)}
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
