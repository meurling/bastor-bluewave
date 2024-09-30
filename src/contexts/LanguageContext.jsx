import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const { country } = useParams();
  const navigate = useNavigate();
  const [language, setLanguage] = useState(country || 'en');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    navigate(`/${newLanguage}`);
  };

  useEffect(() => {
    if (!country) {
      navigate('/en');
    }
  }, [country, navigate]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};