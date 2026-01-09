import React, { useState } from "react";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";

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
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center">
              <div className="w-6 h-6 border-4 border-white rounded-full border-t-transparent rotate-45"></div>
            </div>
            <span className="text-2xl font-bold text-white">Aquafix</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <AnimatedLink text="Home" href="#home" />
            <AnimatedLink text="About" href="#about" />
            <AnimatedLink text="Service" href="#service" />
         

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
            <a href="#home" className="block text-white">Home</a>
            <a href="#about" className="block text-white">About</a>
            <a href="#service" className="block text-white">Service</a>
           
         
            <a href="#pages" className="block text-white">Pages</a>

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
