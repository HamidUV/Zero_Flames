import React, { useEffect, useRef } from 'react';
import { Award, Users, MapPin, Clock, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
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

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { icon: <Award className="w-6 h-6" />, title: "ISO Certified", desc: "Quality management certified" },
    { icon: <Users className="w-6 h-6" />, title: "Expert Team", desc: "Trained & certified professionals" },
    { icon: <MapPin className="w-6 h-6" />, title: "Local Expertise", desc: "Deep knowledge of Kerala regulations" },
    { icon: <Clock className="w-6 h-6" />, title: "15+ Years", desc: "Proven track record" }
  ];

  const whyChooseUs = [
    "Government registered fire protection contractor",
    "100% Fire NOC approval success rate",
    "24/7 emergency support and maintenance",
    "Competitive pricing with no hidden costs",
    "Latest technology and equipment",
    "Experienced team of certified engineers"
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div 
            ref={leftContentRef}
            className="opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out"
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/280076/pexels-photo-280076.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Zero Flames fire protection team in Kozhikode Kerala"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-1">Professional Excellence</h3>
                <p className="text-white/90 text-sm">Certified fire safety experts</p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl hover:bg-red-50 transition-all duration-300 group">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 p-2 rounded-lg group-hover:bg-red-600 transition-colors">
                      <div className="text-red-600 group-hover:text-white transition-colors">
                        {achievement.icon}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{achievement.title}</div>
                      <div className="text-xs text-gray-600">{achievement.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div 
            ref={rightContentRef}
            className="opacity-0 translate-x-[50px] transition-all duration-1000 ease-out delay-300"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Zero Flames
            </h2>
            <div className="text-2xl text-red-600 font-semibold mb-6">
              "Zero Risk, Zero Flames"
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Zero Flames is Kerala's premier fire protection and consultancy company, based in 
              Kozhikode. We specialize in providing comprehensive fire safety solutions to 
              commercial, residential, and industrial clients across Kerala.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of certified engineers and technicians brings over 15 years of combined 
              experience in fire protection systems. We are committed to ensuring the highest 
              standards of safety and compliance with all local and national fire safety regulations.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Zero Flames?</h3>
              
              <div className="space-y-3">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Service Areas</h4>
              <p className="text-gray-600 text-sm mb-4">
                Kozhikode • Wayanad • Malappuram • Kannur • Calicut • 
                Thrissur • Palakkad • and surrounding districts
              </p>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-gray-600 text-sm">Successful Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;