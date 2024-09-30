import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="bg-blue-700 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 whitespace-pre-line">
          {t.title}
        </h1>
        <p className="text-xl mb-8">{t.subtitle}</p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold flex items-center mx-auto hover:bg-blue-100 transition-colors">
          {t.cta} <ArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default Hero;