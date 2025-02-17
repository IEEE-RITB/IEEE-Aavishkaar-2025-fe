import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import reactLogo from "../assets/react.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <img src={reactLogo} alt="Logo" className="h-10" />

      {/* Desktop Navigation */}
      <div className="hidden lg:flex space-x-6">
        <Link to="/#">HOME</Link>
        <Link to="/#">EVENTS</Link>
        <Link to="/#">SCHEDULE</Link>
        <Link to="/#">SPONSORS</Link>
        <Link to="/#">TEAM</Link>
        <Link to="/#">CONTACT</Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 p-4 lg:hidden">
          <Link to="/#" onClick={() => setIsOpen(false)}>
            HOME
          </Link>
          <Link to="/#" onClick={() => setIsOpen(false)}>
            EVENTS
          </Link>
          <Link to="/#" onClick={() => setIsOpen(false)}>
            SCHEDULE
          </Link>
          <Link to="/#" onClick={() => setIsOpen(false)}>
            SPONSORS
          </Link>
          <Link to="/#" onClick={() => setIsOpen(false)}>
            TEAM
          </Link>
          <Link to="/#" onClick={() => setIsOpen(false)}>
            CONTACT
          </Link>
        </div>
      )}

      <img src={reactLogo} alt="Logo" className="h-10 hidden lg:block" />
    </div>
  );
};
