import { useState, useEffect } from "react";
import { Link } from "react-router";
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
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      // Change state when scrolled more than 100 pixels
      setIsScrolled(window.scrollY > 100);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
      w-full z-50 transition-all duration-300 bg-transparent
      ${
        isScrolled
          ? "fixed bg-opacity-30 backdrop-blur-lg backdrop-filter firefox:bg-opacity-30"
          : "absolute"
      }
    `}
    >
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-12">
        {/* Logo Section */}
        <Link to={"/"} className="flex items-center cursor-pointer">
          {/* <img src="/logo.png" alt="Description" className="w-10 h-auto" /> */}
          <span className="font-orbitron font-bold text-xl ml-2">
            RIT TechFest
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center">
          <div className="flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover-button font-prime text-gray-300 transition-all duration-300 px-4"
              >
                {item.name}
              </Link>
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
        <div
          className={`
          md:hidden 
          ${
            isScrolled
              ? "bg-white/30 backdrop-blur-lg shadow-lg"
              : "bg-transparent"
          } 
          border-t border-[#2E1E8A]
        `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 w-full px-3 py-2 text-base font-prime text-gray-300 hover:text-neon-pink transition-all duration-300"
              >
                {getIcon(item.icon)}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
