import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-blue-700 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Protect Your Business with<br />Trade Credit Insurance
        </h1>
        <p className="text-xl mb-8">Bastor helps you find the best trade credit insurance for your business by leveraging our global network of brokers and providers</p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold flex items-center mx-auto hover:bg-blue-100 transition-colors">
          Get a Quote <ArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default Hero;