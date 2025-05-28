import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    materialInterest: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      materialInterest: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact <span className="text-emerald-600">Us</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Interested in our recycled materials or have questions about our services?
            Get in touch with our team and we'll respond promptly.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-emerald-700 text-white p-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="mb-8">
                Whether you're looking to purchase recycled materials, become a supplier,
                or learn more about our sustainability initiatives, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-4 mt-1 text-emerald-300" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:info@infiniteitalia.com" className="text-emerald-200 hover:text-white transition-colors">
                      info@infiniteitalia.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 mt-1 text-emerald-300" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+390123456789" className="text-emerald-200 hover:text-white transition-colors">
                      +39 0123 456 789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1 text-emerald-300" />
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <address className="not-italic text-emerald-200">
                      Via Roma 123<br />
                      20121 Milan<br />
                      Italy
                    </address>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-medium mb-4">Business Hours</h4>
                <ul className="space-y-2 text-emerald-200">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM CET</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM CET</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-3 p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="materialInterest" className="block text-sm font-medium text-gray-700 mb-1">
                      Material of Interest
                    </label>
                    <select
                      id="materialInterest"
                      name="materialInterest"
                      value={formData.materialInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Select a material</option>
                      <option value="paper">Paper</option>
                      <option value="rubber">Rubber</option>
                      <option value="metals">Metals</option>
                      <option value="organic">Organic Waste</option>
                      <option value="multiple">Multiple Materials</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  ></textarea>
                </div>
                
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    I agree to the <a href="#" className="text-emerald-600 hover:text-emerald-700">privacy policy</a> and consent to the processing of my data.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition-colors font-medium flex items-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;