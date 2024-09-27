import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Bastor</div>
        <ul className="flex space-x-6">
          <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-200">About</Link></li>
          <li><Link to="process" smooth={true} duration={500} className="cursor-pointer hover:text-blue-200">Process</Link></li>
          <li><Link to="qa" smooth={true} duration={500} className="cursor-pointer hover:text-blue-200">Q&A</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-200">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;