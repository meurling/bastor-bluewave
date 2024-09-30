import React from 'react';
import { Shield, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-16 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">{t.protection.title}</h3>
            <p>{t.protection.description}</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">{t.growth.title}</h3>
            <p>{t.growth.description}</p>
          </div>
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">{t.team.title}</h3>
            <p>{t.team.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;