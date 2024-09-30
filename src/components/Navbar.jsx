import React from 'react';
import { Link } from 'react-scroll';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Shield } from 'lucide-react';

const Navbar = () => {
  const { language } = useLanguage();
  const t = translations[language]?.navbar || translations['en'].navbar;

  return (
    <nav className="bg-blue-800 text-white py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <Shield className="w-8 h-8 mr-2">
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
              B
            </text>
          </Shield>
          Bastor
        </div>
        <ul className="flex space-x-6">
          <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-200">{t.about}</Link></li>
          <li><Link to="process" smooth={true} duration={500} className="cursor-pointer hover:text-blue-200">{t.process}</Link></li>
          <li><Link to="pricing" smooth={true} duration={500} className="cursor-pointer hover:text-blue-200">{t.pricing}</Link></li>
          <li><Link to="qa" smooth={true} duration={500} className="cursor-pointer hover:text-blue-200">{t.qa}</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-200">{t.contact}</Link></li>
        </ul>
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default Navbar;