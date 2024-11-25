import React from 'react';
import { CheckCircle, Users, Handshake, FileSignature } from 'lucide-react';
import { Link } from 'react-scroll';

const ProcessStep = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Process = () => {
  const steps = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Introduction",
      description: "We first get in contact and learn about your business and consolidate your information."
    },
    {
      icon: <Handshake className="w-12 h-12 text-blue-600" />,
      title: "Matching",
      description: "We'll then match you with the best credit insurance broker for your business needs, and prepare you with necessary information for the broker."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
      title: "Negotiation",
      description: "Your matched broker will then negotiate with credit insurance providers to get you the best and most competitive deal."
    },
    {
      icon: <FileSignature className="w-12 h-12 text-blue-600" />,
      title: "Done deal!",
      description: "Once the brokers have found the best deal for you, we'll help you sign the deal and get you started with your new credit insurance."
    }
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">Easy and fast process from start to deal.</h2>
        <p className="text-xl text-center mb-12 text-gray-600">Our process ensures competitive and transparent pricing.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-200 cursor-pointer animate-pulse hover:animate-none"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Process;