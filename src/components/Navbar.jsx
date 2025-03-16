import { useState } from "react";
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
  Info,
} from "lucide-react";
import navItems from "../configs/nav.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      case "Info":
        return <Info className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 bg-transparent bg-opacity-30 backdrop-filter firefox:bg-opacity-30 backdrop-blur-lg`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={"/"} className="flex items-center cursor-pointer ">
            <div className="flex items-center justify-start md:justify-center w-full md:-ml-3">
              <img
                src="/logo.jpg"
                alt="Description"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="font-orbitron font-bold text-lg sm:text-xl text-gradient ml-2">
                Aavishkaar
              </span>
            </div>
          </Link>
          <div className="hidden md:flex md:items-center w-full  pl-83">
            <div className="flex items-center gap-14">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-rajdhani text-gray-300 hover:text-neon-pink transition-colors duration-300 text-sm sm:text-base`}
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
              className="text-gray-300 hover:text-neon-pink p-2"
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
        <div className="md:hidden fixed w-full top-16 left-0 bg-black/95 backdrop-blur-lg backdrop-filter border-t border-neon-pink/30">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-3 w-full px-3 py-2 text-base font-rajdhani text-gray-300 hover:text-neon-pink transition-colors duration-300 hover:bg-black/20 rounded-lg"
                onClick={() => setIsOpen(false)}
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
