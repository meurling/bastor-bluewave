import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-6">Have questions about trade credit insurance? Our experts are here to help.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-blue-600" />
                <span>info@bastor.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-blue-600" />
                <span>123 Insurance St, New York, NY 10001</span>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
              <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
              <textarea placeholder="Your Message" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;