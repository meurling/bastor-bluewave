import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import QA from '../components/QA';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <Helmet>
        <title>Bastor - Trade Credit Insurance Broker | Protect Your Business</title>
        <meta name="description" content="Bastor offers expert trade credit insurance solutions to protect your business from non-payment risks. Secure your cash flow with our tailored coverage." />
        <meta name="keywords" content="trade credit insurance, credit risk management, accounts receivable protection, Bastor" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <About />
        <QA />
        <Contact />
      </main>
      <footer className="bg-blue-800 text-white py-4 text-center">
        <p>&copy; 2023 Bastor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;