import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const AnimatedLink = ({ text, href }) => (
  <a href={href} className="group relative overflow-hidden h-6 block">
    <span className="block text-white transition-transform duration-300 group-hover:-translate-y-full">
      {text}
    </span>
    <span className="block text-lime-400 absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
      {text}
    </span>
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png" // Make sure this image is in your public folder
              alt="Aquafix Logo"
              className="w-full h-20 object-cover "
            />
          
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <AnimatedLink text="Home" href="/" />
            <AnimatedLink text="About" href="/about" />
            <AnimatedLink text="Service" href="/service" />

            <button className="flex items-center space-x-1 text-white hover:text-lime-400">
              <span>Pages</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+01578365379"
              className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition"
            >
              Call +(0)578-365-379
            </a>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-4">
            <Link to="/" className="block text-white">Home</Link>
            <Link to="/about" className="block text-white">About</Link>
            <Link to="/service" className="block text-white">Service</Link>
            <Link to="/pages" className="block text-white">Pages</Link>
            <a
              href="tel:+01578365379"
              className="block px-6 py-3 border-2 border-white text-white rounded-full text-center"
            >
              Call +(0)578-365-379
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
