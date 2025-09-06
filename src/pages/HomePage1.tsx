import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Clock, CheckCircle, Bell, Droplets, FileCheck, Star } from 'lucide-react';
import { Phone } from 'lucide-react'; 


const HomePage1: React.FC = () => {
  const keyServices = [
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Fire NOC Support",
      description: "Complete Fire NOC consultancy and documentation support for all types of buildings in Kerala."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Fire Alarm Systems",
      description: "Advanced addressable and conventional fire alarm systems for early fire detection."
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Sprinkler Systems",
      description: "Water-based automatic sprinkler systems for comprehensive fire suppression."
    }
  ];

  const featuredProjects = [
    {
      title: "Skyview Tech Park",
      location: "Kozhikode, Kerala",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Malabar Medical College",
      location: "Calicut, Kerala",
      image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-12 min-h-screen flex items-center overflow-hidden mt-10 
                    bg-gradient-to-l from-black via-red-900 to-red-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div className="animate-slideInLeft font-light text-center lg:text-left">
        
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-yellow-400 rounded-full 
                        text-red-800 text-xs sm:text-sm  mt-4 animate-pulse mb-6">
          <Shield className="w-4 h-4 mr-2" />
          Kerala's Trusted Fire Protection Experts
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-white mb-4 leading-snug">
          Safety. Service.
          <span className="block">
            Support. Strength.
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-100 font-light mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0 mt-4">
          Leading fire safety solutions provider offering comprehensive fire protection services. 
          Protecting lives and property with advanced technology and expert consultation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start font-light">
  {/* Our Services Button */}
  <Link
    to="/services"
    className="bg-white text-red-900 px-4 py-2 rounded-lg text-sm sm:text-base font-light 
               transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-md"
  >
    Our Services
    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
  </Link>

  {/* Contact Us Button */}
  <Link
    to="/contact"
    className="text-white border border-white px-4 py-2 rounded-lg 
               text-sm sm:text-base font-light hover:opacity-90 hover:scale-105 transition-all duration-300 
               flex items-center justify-center gap-2 shadow-md"
  >
    <Phone className="w-5 h-5" />
    Contact Us
  </Link>
</div>

      </div>

      {/* Right Content - Hero Image */}
      <div className="relative animate-slideInRight delay-300 mt-8 lg:mt-0">
        <img
          src="/safety-tagline-zeroflames.jpg"
          alt="Zero Flames Fire Systems - Safety, Service, Support, Strength in Kozhikode Kerala"
          className="w-full h-72 sm:h-[28rem] object-cover rounded-2xl shadow-xl"
        />
      </div>
    </div>
  </div>
</section>




      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Award className="w-8 h-8" />, value: "500+", label: "Projects Completed" },
              { icon: <Users className="w-8 h-8" />, value: "200+", label: "Happy Clients" },
              { icon: <Shield className="w-8 h-8" />, value: "100%", label: "NOC Success" },
              { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 
                group-hover:scale-110 transition-all duration-300">
  <div className="text-white">{stat.icon}</div>
</div>

                <div className="text-3xl font-light text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center font-light">
            <div data-aos="fade-right">
              <h2 className="text-3xl text-gray-900 mb-4">About Zero Flames</h2>
              <div className="text-xl text-red-600 font-medium mb-4">"Zero Risk, Zero Flames"</div>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                Zero Flames is Kerala's premier fire protection and consultancy company, based in 
                Kozhikode. We specialize in providing comprehensive fire safety solutions with 
                over 15 years of experience.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-light">Government registered contractor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-light">100% Fire NOC approval success rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-light">24/7 emergency support</span>
                </div>
              </div>
              <Link 
                to="/about"
                className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div data-aos="fade-left" data-aos-delay="300">
              <img 
                src="https://images.pexels.com/photos/280076/pexels-photo-280076.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Zero Flames fire protection team"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Services List */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Services</h2>
              <p className="text-gray-600 font-light mb-8">
                We provide complete fire protection and safety solutions to keep your premises secure
                and compliant with Kerala Fire & Rescue standards.
              </p>

              <ul className="space-y-4">
                {[
                  "Fire NOC Approvals & Renewals",
                  "Fire Protection System Installation",
                  "Design & Planning",
                  "Maintenance Services",
                  "Training Programs",
                  "Fire Consultation Services",
                  "Fire Extinguisher Sales",
                  "Refilling & Alarm System Services"
                ].map((service, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-light">{service}</span>
                  </li>
                ))}
              </ul>

              {/* <div className="mt-8">
                <Link 
                  to="/services"
                  className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-medium 
                            hover:bg-red-700 transition-colors shadow-md"
                >
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div> */}
            </div>

            {/* Right: Services Image */}
            <div data-aos="fade-left">
              <img 
                src="/services-overview-zero_flames.jpg"  
                alt="Zero Flames Fire Safety Services Overview" 
                className="w-full h-[28rem] object-cover rounded-2xl shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage1;