import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Award, Users, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  // const heroRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

    if (leftContentRef.current) observer.observe(leftContentRef.current);
    if (rightContentRef.current) observer.observe(rightContentRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-red-50 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div 
            ref={leftContentRef}
            className="opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-800 text-sm font-medium mb-6 animate-pulse">
              <Shield className="w-4 h-4 mr-2" />
              Kerala's Trusted Fire Protection Experts
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Kozhikode's Trusted
              <span className="text-red-600 block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Fire Protection
              </span>
              <span className="text-gray-700">& NOC Experts</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Zero Flames provides certified fire safety system installations, Fire NOC consultancy, 
              and Annual Maintenance Contracts (AMC) to commercial, residential, and industrial clients 
              across Kerala.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button className="bg-red-600 text-white px-2 py-2 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-lg">
                Get Free Fire Safety Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-red-600 hover:text-red-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div 
            ref={rightContentRef}
            className="relative opacity-0 translate-x-[50px] transition-all duration-1000 ease-out delay-300"
          >
            <div className="relative">
              <img 
                src="/safety-tagline-zeroflames" 
                alt="Zero Flames Fire Systems - Safety, Service, Support, Strength in Kozhikode Kerala"
                className="w-full h-20 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">ISO</div>
                <div className="text-xs text-gray-600">Certified</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 animate-float" style={{animationDelay: '1s'}}>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">15+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 opacity-0 translate-y-[30px] transition-all duration-1000 ease-out delay-600"
        >
          <div className="text-center group">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
              <Award className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center group">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
              <Users className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center group">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
              <Shield className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">NOC Success</div>
          </div>
          <div className="text-center group">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
              <Clock className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;