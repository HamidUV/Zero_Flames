import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Clock, CheckCircle, Bell, Droplets, FileCheck, Star } from 'lucide-react';

const HomePage: React.FC = () => {
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
    <div>
      {/* Hero Section */}
      {/* Hero Section - Dark Red Background */}
<section className="pt-24 pb-16 bg-gradient-to-br from-red-900 via-red-800 to-red-700 min-h-screen flex items-center overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <div className="animate-slideInLeft">
        <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-800 text-sm font-medium mb-6 mt-6 animate-pulse">
          <Shield className="w-4 h-4 mr-2" />
          Kerala's Trusted Fire Protection Experts
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Kerala's Trusted
          <span className="text-yellow-300 block bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            Fire Protection
          </span>
          <span className="text-gray-200">& NOC Experts</span>
        </h1>

        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
          Zero Flames provides certified fire safety system installations, Fire NOC consultancy,
          and Annual Maintenance Contracts (AMC) to commercial, residential, and industrial clients
          across Kerala.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <Link
            to="/contact"
            className="bg-white text-red-900 px-6 py-2 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-lg"
          >
            Get Free Fire Safety Audit
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="border-2 border-gray-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Right Content - Hero Image */}
      <div className="relative animate-slideInRight delay-300">
        <img
          src="/safety-tagline-zeroflames.jpg"
          alt="Zero Flames Fire Systems - Safety, Service, Support, Strength in Kozhikode Kerala"
          className="w-full h-[30rem] object-cover rounded-2xl shadow-2xl"
        />

        {/* Floating Elements */}
        {/* <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 animate-float">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">ISO</div>
            <div className="text-xs text-gray-600">Certified</div>
          </div>
        </div>

        <div
          className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">15+</div>
            <div className="text-xs text-gray-600">Years Experience</div>
          </div>
        </div> */}
        
      </div>
    </div>
  </div>
</section>


{/* Stats Section - Light Gradient Background */}
<section className="py-16 bg-gradient-to-br from-gray-50 via-white to-red-50">
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
          {/* Icon Wrapper */}
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 
                          group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
            <div className="text-red-600 group-hover:text-white transition-colors">
              {stat.icon}
            </div>
          </div>

          {/* Value */}
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {stat.value}
          </div>

          {/* Label */}
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* About Preview */}
      <section className="py-16 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content - Text */}
      <div data-aos="fade-right">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Zero Flames</h2>
        <div className="text-xl text-red-600 font-semibold mb-4">"Zero Risk, Zero Flames"</div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Zero Flames is Kerala's premier fire protection and consultancy company, based in 
          Kozhikode. We specialize in providing comprehensive fire safety solutions with 
          over 15 years of experience.
        </p>
        <div className="space-y-2 mb-6">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">Government registered contractor</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">100% Fire NOC approval success rate</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">24/7 emergency support</span>
          </div>
        </div>
        <Link 
          to="/about"
          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
        >
          Learn More About Us
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      {/* Right Content - Image */}
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


      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Title */}
    <div 
      className="text-center mb-12"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Our Key Services
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Comprehensive fire protection solutions from NOC consultancy to system installation and maintenance.
      </p>
    </div>

    {/* Service Cards */}
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {keyServices.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 
                     transition-all duration-500 group"
          data-aos="fade-up"
          data-aos-delay={index * 150} // staggered animation
        >
          {/* Icon */}
          <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 
                          group-hover:bg-red-600 transition-all duration-300">
            <div className="text-red-600 group-hover:text-white transition-colors">
              {service.icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm">
            {service.description}
          </p>
        </div>
      ))}
    </div>

    {/* CTA Button */}
    <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
      <Link 
        to="/services"
        className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-lg font-semibold 
                   hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
      >
        View All Services
        <ArrowRight className="w-5 h-5 ml-2" />
      </Link>
    </div>
  </div>
</section>


      {/* Projects Preview */}
      {/* <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
    {/* Section Header */}
    {/* <div className="text-center mb-12" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Showcasing our expertise through successful fire protection installations across Kerala.
      </p>
    </div> */}

    {/* Project Grid */}
    {/* <div className="grid md:grid-cols-2 gap-8 mb-12">
      {featuredProjects.map((project, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm 
                     hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
          data-aos="flip-up"
          data-aos-delay={index * 200} // staggered entry
        > */}
          {/* Image with hover zoom */}
          {/* <div className="overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div> */}

          {/* Content */}
          {/* <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{project.location}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-gray-600 ml-2">Completed Successfully</span>
            </div>
          </div>
        </div>
      ))}
    </div> */}

    {/* CTA Button */}
    {/* <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
      <Link 
        to="/projects"
        className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-lg font-semibold 
                   hover:bg-red-700 transition-colors animate-bounce-slow"
      >
        View All Projects
        <ArrowRight className="w-5 h-5 ml-2" />
      </Link>
    </div>
  </div>
</section> */}


    </div>
  );
};

export default HomePage;