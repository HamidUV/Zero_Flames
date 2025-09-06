import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    'Fire NOC Support',
    'Fire Alarm Systems',
    'Sprinkler Systems',
    'Fire Hydrant System',
    'AMC & Maintenance'
  ];

  return (
    <footer className="bg-[#000000] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/Zero flames logo - black.jpg"
              alt="Zero Flames Fire Systems Logo"
              className="h-14 w-auto mb-4"
            />
            <p className="text-gray-400 font-light mb-4 leading-relaxed max-w-sm">
              Kerala's premier fire protection and consultancy company, providing 
              comprehensive fire safety solutions across Kozhikode and surrounding districts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services (Centered) */}
          <div className="flex flex-col items-center font-light">
            <h4 className="mb-4 text-lg text-red-500">Our Services</h4>
            <ul className="space-y-2 text-center">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info (Right aligned) */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right font-light">
            <h4 className="mb-4 text-lg text-red-500">Contact Info</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center md:justify-end space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <div>
                  <p>+91 9876543210</p>
                  <p>+91 8765432109</p>
                </div>
              </div>
              
              <div className="flex items-center md:justify-end space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <p>info@zeroflames.com</p>
              </div>
              
              <div className="flex items-center md:justify-end space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <p>
                  Eish, Vallath Road<br />
                  Moozhikal, Kozhikode<br />
                  Kerala, India
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Zero Flames Fire Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
