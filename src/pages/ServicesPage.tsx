import React from 'react';
import { 
  Shield, 
  Droplets, 
  Bell, 
  Wrench, 
  Zap, 
  Eye,
  FileCheck,
  Settings,
  CheckCircle,
  // ArrowRight,
  Phone
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Fire NOC Support",
      description: "Complete Fire NOC consultancy and documentation support for all types of buildings in Kerala.",
      features: ["Documentation Support", "Government Liaison", "Fast Approval", "Compliance Assurance"],
      details: [
        "Complete application preparation and submission",
        "Site inspection coordination with authorities",
        "Compliance gap analysis and recommendations",
        "Follow-up until NOC approval",
        "Renewal and amendment support"
      ]
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Fire Alarm Systems",
      description: "Advanced addressable and conventional fire alarm systems for early fire detection.",
      features: ["Addressable Systems", "Conventional Systems", "Smoke Detectors", "Heat Detectors"],
      details: [
        "Addressable fire alarm panels with zone identification",
        "Conventional fire alarm systems for smaller buildings",
        "Smoke and heat detection devices",
        "Manual call points and sounders",
        "Integration with building management systems"
      ]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Sprinkler Systems",
      description: "Water-based automatic sprinkler systems for comprehensive fire suppression.",
      features: ["Wet Pipe Systems", "Dry Pipe Systems", "Deluge Systems", "Pre-action Systems"],
      details: [
        "Wet pipe sprinkler systems for heated buildings",
        "Dry pipe systems for unheated areas",
        "Deluge systems for high-hazard areas",
        "Pre-action systems for sensitive equipment areas",
        "Water flow alarms and monitoring"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fire Hydrant System",
      description: "Complete fire hydrant installation and maintenance for industrial and commercial buildings.",
      features: ["Internal Hydrants", "External Hydrants", "Hose Reels", "Landing Valves"],
      details: [
        "Internal hydrant systems with hose reels",
        "External hydrant systems for fire department access",
        "Landing valves for multi-story buildings",
        "Pressure testing and commissioning",
        "Regular maintenance and inspection"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Fire Pump Systems",
      description: "High-performance fire pump systems ensuring adequate water pressure for fire fighting.",
      features: ["Electric Pumps", "Diesel Pumps", "Jockey Pumps", "Control Panels"],
      details: [
        "Electric fire pumps with automatic start",
        "Diesel engine driven pumps for backup",
        "Jockey pumps for pressure maintenance",
        "Intelligent pump control panels",
        "Remote monitoring capabilities"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "FM-200 System",
      description: "Clean agent fire suppression systems for sensitive equipment and data centers.",
      features: ["Clean Agent", "No Residue", "Safe for Electronics", "Quick Suppression"],
      details: [
        "FM-200 clean agent suppression systems",
        "Safe for occupied spaces and electronics",
        "No residue or cleanup required",
        "Fast suppression within 10 seconds",
        "Ideal for server rooms and data centers"
      ]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Emergency Lighting",
      description: "Emergency and exit lighting systems for safe evacuation during emergencies.",
      features: ["Exit Signs", "Emergency Lights", "Battery Backup", "LED Technology"],
      details: [
        "LED exit signs with battery backup",
        "Emergency lighting for escape routes",
        "Central battery systems for large buildings",
        "Self-testing emergency lights",
        "Compliance with IS 2189 standards"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "AMC & Maintenance",
      description: "Annual Maintenance Contracts ensuring your fire systems are always ready.",
      features: ["Regular Inspections", "Preventive Maintenance", "24/7 Support", "Compliance Reports"],
      details: [
        "Monthly, quarterly, and annual inspections",
        "Preventive maintenance schedules",
        "Emergency repair services 24/7",
        "Compliance certificates and reports",
        "System performance optimization"
      ]
    }
  ];

  const industries = [
    "Commercial Buildings",
    "Residential Complexes", 
    "Industrial Facilities",
    "Healthcare Facilities",
    "Educational Institutions",
    "Hospitality Sector",
    "IT & Data Centers",
    "Manufacturing Units"
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      {/* Hero Section */}
<section>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Desktop / Tablet Hero (with gradient) */}
    <div className="hidden md:block text-center mb-10 mt-8 bg-gradient-to-r from-[#b91c1c] via-[#7f1d1d] to-black py-20 text-white rounded-2xl shadow-xl">
      <h1 className="text-4xl md:text-5xl font-light mb-6">
        Comprehensive Fire Protection Services
      </h1>
      <p className="text-xl font-light max-w-3xl mx-auto text-red-100 leading-relaxed">
        From Fire NOC consultancy to complete system installation and maintenance, 
        we provide end-to-end fire protection solutions across Kerala.
      </p>
    </div>

    {/* Mobile Hero (clean, short, no gradient) */}
    <div className="block md:hidden text-center mt-6 py-10 bg-gray-50 rounded-xl shadow-sm">
      <h1 className="text-3xl font-light text-gray-900">
        Fire Protection Services
      </h1>
      <p className="text-sm text-gray-600 mt-2 font-light">
        Trusted safety solutions across Kerala
      </p>
    </div>

  </div>
</section>



      {/* Services Grid */}
      {/* Services Grid */}
<section className="py-6 bg-gradient-to-br from-white via-red-50 to-white mt-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid gap-20">
      {services.map((service, index) => {
        const whatsappNumber = "919876543210"; // Replace with your WhatsApp number
        const message = `Hello, I am interested in your ${service.title} service. Can you provide more details?`;
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        return (
          <a
            key={index}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`grid lg:grid-cols-2 gap-12 items-stretch ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {/* Service Content */}
            <div
              className={`flex flex-col justify-between p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow ${
                index % 2 === 1 ? "lg:col-start-2" : ""
              }`}
            >
              {/* Icon + Title Row */}
              <div className="flex items-center space-x-3 mb-4 font-light">
                <div className="bg-gradient-to-tr from-red-600 to-red-400 w-10 h-10 rounded-xl flex items-center justify-center shadow font-light">
                  <span className="text-white text-lg">{service.icon}</span>
                </div>
                <h2 className="text-2xl font-light md:text-3xl text-gray-900">
                  {service.title}
                </h2>
              </div>

              {/* Description */}
              <p className="font-light text-lg text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Features:
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Provide */}
              <div className="mb-6 flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What We Provide:
                </h3>
                <div className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-start space-x-3 transition-transform duration-200 hover:translate-x-1"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Image */}
            <div
              className={`flex items-center justify-center rounded-2xl shadow-md bg-gray-100 p-6 hover:scale-[1.02] transition-transform ${
                index % 2 === 1 ? "lg:col-start-1" : ""
              }`}
              data-aos="zoom-in"
              data-aos-delay={index * 250}
            >
              <div className="text-center text-gray-600">
                <div className="text-red-600 mb-4 text-3xl">{service.icon}</div>
                <p className="font-semibold">{service.title}</p>
                <p className="text-sm text-gray-500">Click to enquire on WhatsApp</p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  </div>
</section>



      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across various industries, providing tailored fire protection solutions 
              for each sector's unique requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-gradient-to-r from-red-800 to-red-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold text-white mb-3">
      Need a Custom Fire Protection Solution?
    </h2>
    <p className="text-red-100 mb-6 max-w-2xl mx-auto text-lg">
      Our experts will assess your requirements and design the perfect fire safety system for your property.
      Get a free consultation and quote today.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
        <Phone className="w-5 h-5 mr-2" />
        Call +91 9876543210
      </button>
      {/* <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-all duration-300">
        Get Free Consultation
      </button> */}
    </div>
  </div>
</section>

    </div>
  );
};

export default ServicesPage;