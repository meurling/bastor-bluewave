import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const benefits = [
    "Get matched with the best brokers",
    "Let brokers negotiate for you",
    "Competitive premium and terms",
    "Assistance in the whole process",
    "Global network of brokers and providers",
    "Save an average of 20-25% on your premium"
  ];

  return (
    <section id="pricing" className="py-16 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">Simple pricing, You only pay your insurance premium!</h2>
        <p className="text-xl text-center mb-12 text-gray-600">Your broker charges the insurance provider, we charge the broker. In other words, our services are free for you!</p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-blue-800">Benefits of Choosing Bastor</h3>
          <ul className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Contact Us for a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;