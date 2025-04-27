import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // using lucide-react icons (lightweight and sexy)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-6 text-white">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-tight flex items-center">
        <span className="text-purple-400">&lt;</span>
        <span>Pass</span>
        <span className="text-purple-400">Guard/ &gt;</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-lg font-medium">
        <li className="relative group">
          <a href="#" className="hover:text-purple-400 transition-colors duration-300">
            Home
          </a>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#" className="hover:text-purple-400 transition-colors duration-300">
            About
          </a>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a href="#" className="hover:text-purple-400 transition-colors duration-300">
            Contact
          </a>
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md flex flex-col items-center gap-6 py-6 text-lg font-medium md:hidden">
          <a href="#" onClick={toggleMenu} className="hover:text-purple-400 transition-colors duration-300">Home</a>
          <a href="#" onClick={toggleMenu} className="hover:text-purple-400 transition-colors duration-300">About</a>
          <a href="#" onClick={toggleMenu} className="hover:text-purple-400 transition-colors duration-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
