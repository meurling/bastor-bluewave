import React from 'react';
import { Shield, TrendingUp, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">About Bastor</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Comprehensive Protection</h3>
            <p>We offer tailored trade credit insurance solutions to safeguard your business against non-payment risks.</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Growth Enabler</h3>
            <p>Our coverage allows you to confidently expand into new markets and offer competitive payment terms.</p>
          </div>
          <div className="text-center">
            <Users className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p>With years of experience, our specialists provide personalized advice and support for your business needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;