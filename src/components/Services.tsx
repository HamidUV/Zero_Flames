import React, { useEffect, useRef } from 'react';
import { 
  Shield, 
  Droplets, 
  Bell, 
  Wrench, 
  Zap, 
  Eye,
  FileCheck,
  Settings
} from 'lucide-react';

const Services: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Fire NOC Support",
      description: "Complete Fire NOC consultancy and documentation support for all types of buildings in Kerala.",
      features: ["Documentation Support", "Government Liaison", "Fast Approval", "Compliance Assurance"]
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Fire Alarm Systems",
      description: "Advanced addressable and conventional fire alarm systems for early fire detection.",
      features: ["Addressable Systems", "Conventional Systems", "Smoke Detectors", "Heat Detectors"]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Sprinkler Systems",
      description: "Water-based automatic sprinkler systems for comprehensive fire suppression.",
      features: ["Wet Pipe Systems", "Dry Pipe Systems", "Deluge Systems", "Pre-action Systems"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fire Hydrant System",
      description: "Complete fire hydrant installation and maintenance for industrial and commercial buildings.",
      features: ["Internal Hydrants", "External Hydrants", "Hose Reels", "Landing Valves"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Fire Pump Systems",
      description: "High-performance fire pump systems ensuring adequate water pressure for fire fighting.",
      features: ["Electric Pumps", "Diesel Pumps", "Jockey Pumps", "Control Panels"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "FM-200 System",
      description: "Clean agent fire suppression systems for sensitive equipment and data centers.",
      features: ["Clean Agent", "No Residue", "Safe for Electronics", "Quick Suppression"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Emergency Lighting",
      description: "Emergency and exit lighting systems for safe evacuation during emergencies.",
      features: ["Exit Signs", "Emergency Lights", "Battery Backup", "LED Technology"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "AMC & Maintenance",
      description: "Annual Maintenance Contracts ensuring your fire systems are always ready.",
      features: ["Regular Inspections", "Preventive Maintenance", "24/7 Support", "Compliance Reports"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className="text-center mb-16 opacity-0 translate-y-[30px] transition-all duration-1000 ease-out"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Fire Protection Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Fire NOC consultancy to complete system installation and maintenance, 
            we provide end-to-end fire protection solutions across Kerala.
          </p>
        </div>

        <div 
          ref={servicesRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0 translate-y-[50px] transition-all duration-1000 ease-out delay-300"
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-gray-100"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                <div className="text-red-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-red-600 font-semibold hover:text-red-700 transition-colors group-hover:translate-x-1">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className="mt-16 text-center opacity-0 translate-y-[30px] transition-all duration-1000 ease-out delay-600"
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Fire Protection Solution?</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Our experts will assess your requirements and design the perfect fire safety system for your property.
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;