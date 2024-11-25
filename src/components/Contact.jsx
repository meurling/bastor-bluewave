import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }
    console.log('Form submitted:', {
      ...formData,
      recipientEmail: 'meurling.axel@gmail.com'
    });
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

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
                <span>+46 763362063</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-blue-600" />
                <a 
                  href="mailto:meurling.axel@gmail.com" 
                  className="hover:text-blue-600 transition-colors"
                >
                  meurling.axel@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-blue-600" />
                <span>Sandelsgatan 35, 115 33 Stockholm, Sweden</span>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-200 ease-in-out animate-pulse"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;