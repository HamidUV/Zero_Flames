import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    urgency: 'normal'
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
    "Emergency Repair",
    "Other"
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 9876543210", "+91 8765432109"],
      // description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@zeroflames.com", "support@zeroflames.com"],
      // description: "Send us your requirements"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["Eish, Vallath Road, Moozhikal", "Kozhikode, Kerala, India"],
      // description: "Visit our office"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon-Sat: 9:00 AM - 6:00 PM", "Sunday: Emergency calls only"],
      // description: "24/7 Emergency Support Available"
    }
  ];

  const serviceAreas = [
    'Kozhikode', 'Wayanad', 'Malappuram', 'Kannur', 
    'Calicut', 'Thrissur', 'Palakkad', 'Kottayam',
    'Ernakulam', 'Alappuzha', 'Kollam', 'Thiruvananthapuram'
  ];

  const whyChooseUs = [
    "Free site inspection and consultation",
    "Competitive pricing with transparent quotes",
    "Fast project completion and NOC approval",
    "24/7 emergency support and maintenance",
    "Certified engineers and quality equipment",
    "100% customer satisfaction guarantee"
  ];

  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      {/* Hero Section */}
<section>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Desktop / Tablet Hero (with gradient) */}
    <div className="hidden md:block text-center mb-10 mt-8 bg-gradient-to-r from-[#b91c1c] via-[#7f1d1d] to-black py-20 text-white rounded-2xl shadow-xl">
      <h1 className="text-4xl md:text-5xl font-light mb-6">
        Contact Zero Flames
      </h1>
      <p className="text-xl max-w-3xl font-light mx-auto text-red-100 leading-relaxed">
        Contact Zero Flames – Kozhikode's fire protection consultants for NOC, 
        inspections, and safety systems. Get your free consultation today.
      </p>
    </div>

    {/* Mobile Hero (clean, short, no gradient) */}
    <div className="block md:hidden text-center mt-6 py-10 bg-gray-50 rounded-xl shadow-sm">
      <h1 className="text-3xl font-light text-gray-900">
        Contact Us
      </h1>
      <p className="text-sm text-gray-600 mt-2 font-light">
        Fire safety experts in Kozhikode
      </p>
    </div>

  </div>
</section>



     {/* Contact Methods */}
<section className="bg-white mt-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {contactMethods.map((method, index) => (
        <div
          key={index}
          className="text-center bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-delay={index * 150} // staggered animation
        >
          {/* Icon */}
          <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group hover:bg-red-600 transition-colors duration-300">
            <div className="text-red-600 group-hover:text-white text-xl">{method.icon}</div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-light text-gray-900 mb-2">{method.title}</h3>

          {/* Details */}
          <div className="space-y-1">
            {method.details.map((detail, detailIndex) => (
              <p key={detailIndex} className="font-light text-gray-700 text-sm">{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Main Contact Section */}
    <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-stretch">
      
      {/* Contact Form */}
      <div 
        className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between"
        data-aos="fade-right"
      >
        <h2 className="text-2xl font-light text-gray-900 mb-6">Send us a Message</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 flex-1">
          {/* Name & Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-light text-gray-800 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-light text-gray-800 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-light text-gray-800 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                         focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter your email address"
            />
          </div>

          {/* Service Selection */}
          <div className="relative">
            <label 
              htmlFor="service" 
              className="block text-sm font-light text-gray-800 mb-2"
            >
              Service Needed
            </label>

            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full appearance-none px-4 py-3 pr-10 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 font-light 
                           bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              {/* Custom Arrow */}
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-light text-gray-800 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                         focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Tell us about your fire protection requirements..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-light 
                       hover:bg-red-700 transition-colors flex items-center justify-center"
          >
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </button>
        </form>

        {/* <div className="mt-6 p-4 bg-red-50 rounded-lg text-center">
          <p className="text-sm text-red-800">
            <strong>Emergency?</strong> Call us directly at +91 9876543210 for immediate assistance.
          </p>
        </div> */}
      </div>

      {/* Contact Info + Map */}
      <div 
        className="flex flex-col space-y-8 bg-white rounded-2xl shadow-lg p-8"
        data-aos="fade-left"
      >
        {/* Get in Touch */}
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6 font-light">
            We're here to help with all your fire protection needs. Whether you need a Fire NOC, 
            system installation, or emergency repair, our team is ready to assist you.
          </p>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/919876543210" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-light 
                       hover:bg-green-600 transition-colors flex items-center justify-center shadow-md"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp: +91 9876543210
          </a>
        </div>

        {/* Visit Our Office Map */}
        <div className="flex-1">
  <h3 className="text-lg font-light text-gray-900 mb-4">Visit Our Office</h3>
  <p className="font-light text-gray-600 max-w-2xl mx-auto pb-10">
    Find us at our headquarters in Kozhikode. Conveniently located and always open for our valued clients.
  </p>
  <div className="rounded-xl overflow-hidden shadow-md h-64">
  <iframe
    title="Office Location - Zero Flames Fire Systems"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.8465487475087!2d75.79810007417943!3d11.272688249845832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65f00585348d9%3A0x8445d5e239a95128!2sZero%20Flames%20Fire%20systems!5e0!3m2!1sen!2sin!4v1755534888853!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

</div>

      </div>
    </div>
  </div>
  
</section>


      {/* Google Maps Placeholder */}
      {/* Location / Map Section */}
{/* <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div 
      className="text-center mb-12"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Find us at our headquarters in Kozhikode. Conveniently located and always open for our valued clients.
      </p>
    </div>

    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
      data-aos="zoom-in"
    >
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d125211.09679482762!2d75.7182731145722!3d11.272671640465893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba65f00585348d9%3A0x8445d5e239a95128!2s7RC2%2BX6H%2C%20CWRDM%20Rd%2C%20Thondayad%2C%20Kozhikode%2C%20Kerala%20673016!3m2!1d11.272682999999999!2d75.800675!5e0!3m2!1sen!2sin!4v1755529653684!5m2!1sen!2sin" 
        width="100%" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="p-6 text-center bg-gray-50">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Zero Flames Office</h3>
        <p className="text-gray-700">Eish, Vallath Road, Moozhikal</p>
        <p className="text-gray-700">Kozhikode, Kerala</p>
        <p className="text-sm text-gray-500 mt-2">Open Mon–Sat, 9:00 AM – 6:00 PM</p>
      </div>
    </div>
  </div>
</section> */}

      {/* Emergency Call Section */}
{/* Emergency Call Section */}
<section className="py-10 px-4">
  <div
    className="max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-red-700 
               rounded-2xl shadow-xl text-center md:text-left 
               transform transition duration-300 hover:scale-[1.02] p-6 sm:p-8 md:p-10"
    data-aos="zoom-in"
  >
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Left side text */}
      <div className="text-white">
        <h3 className="text-xl sm:text-2xl font-light mb-2">Emergency Support</h3>
        <p className="text-red-100 text-sm sm:text-base">
          Need urgent assistance? Our team is available 24/7 to respond immediately.
        </p>
      </div>

      {/* Right side call button */}
      <div className="w-full md:w-auto">
        <a
          href="tel:+919876543210"
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 
                     bg-white text-red-700 font-medium px-6 py-3 rounded-lg 
                     shadow-md hover:bg-gray-100 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.518 4.55a1 1 0 01-.502 1.21l-1.292.646a11.042 11.042 0 005.516 5.516l.646-1.292a1 1 0 011.21-.502l4.55 1.518A1 1 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2h2z"
            />
          </svg>
          +91 9876543210
        </a>
      </div>

    </div>
  </div>
</section>


    </div>
  );
};

export default ContactPage;