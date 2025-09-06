import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    "Fire NOC Support",
    "Fire Alarm Systems",
    "Sprinkler Systems",
    "Fire Hydrant System",
    "Fire Pump Systems",
    "FM-200 System",
    "Emergency Lighting",
    "AMC & Maintenance",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Zero Flames
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact Zero Flames – Kozhikode's fire protection consultants for NOC, 
            inspections, and safety systems. Get your free consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 9876543210</p>
                  <p className="text-gray-600">+91 8765432109</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@zeroflames.com</p>
                  <p className="text-gray-600">support@zeroflames.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">
                    Eish, Vallath Road<br />
                    Moozhikal, Kozhikode<br />
                    Kerala, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Business Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: Emergency calls only</p>
                  <p className="text-red-600 font-semibold">24/7 Emergency Support</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-8">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: +91 9876543210
              </button>
            </div>

            {/* Service Areas */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Service Areas</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>• Kozhikode</div>
                <div>• Wayanad</div>
                <div>• Malappuram</div>
                <div>• Kannur</div>
                <div>• Calicut</div>
                <div>• Thrissur</div>
                <div>• Palakkad</div>
                <div>• Nearby Districts</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Tell us about your fire protection requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>

            <div className="mt-6 p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>Emergency?</strong> Call us directly at +91 9876543210 for immediate assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps Placeholder */}
        <div className="mt-16">
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p>Google Maps Integration</p>
              <p className="text-sm">Eish, Vallath Road, Moozhikal, Kozhikode</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;