import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-blue-700 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Protect Your Business with Trade Credit Insurance</h1>
        <p className="text-xl mb-8">Secure your cash flow and mitigate risks with Bastor's expert solutions</p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold flex items-center mx-auto hover:bg-blue-100 transition-colors">
          Get a Quote <ArrowRight className="ml-2" />
        </button>
      </div>
    </section>
  );
};

export default Hero;