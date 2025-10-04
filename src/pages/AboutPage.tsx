import React, { useEffect, useRef } from 'react';
import { Award, Users, MapPin, Clock, CheckCircle, Target, Eye, Heart } from 'lucide-react';
import IndiaMap from '../components/IndiaMap';

const AboutPage: React.FC = () => {
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
    { icon: <MapPin className="w-6 h-6" />, title: "Standards-Driven", desc: "Compliant with NBC, NFPA & global fire codes" },
    { icon: <Clock className="w-6 h-6" />, title: "15+ Years", desc: "Proven track record" }
  ];

  const whyChooseUs = [
    "15+ Years of Industry Expertise",
    // "100% Fire NOC approval success rate",
    "24/7 emergency support",
    "Competitive pricing with no hidden costs",
    "Comprehensive insurance coverage",
    // "Latest technology and equipment",
    "Experienced team of certified engineers",
    "Regular training and certification updates"
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To provide comprehensive fire protection solutions that safeguard lives and property across Kerala, ensuring zero risk and zero flames through innovative technology and expert service."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description: "To be Kerala's most trusted and technologically advanced fire protection company, setting industry standards for safety, reliability, and customer satisfaction."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Values",
      description: "Safety first, integrity always, innovation continuously, and customer satisfaction at the heart of everything we do. We believe in building long-term relationships based on trust and excellence."
    }
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
        About Zero Flames
      </h1>
      <p className="text-xl max-w-3xl mx-auto text-red-100 leading-relaxed font-light">
        Premier fire protection and consultancy company, dedicated to providing 
        comprehensive fire safety solutions with over 15 years of expertise.
      </p>
    </div>

    {/* Mobile Hero (clean, minimal, no gradient) */}
    <div className="block md:hidden text-center mt-6 py-10 bg-gray-50 rounded-xl shadow-sm">
      <h1 className="text-3xl font-light text-gray-900">
        About Zero Flames
      </h1>
      <p className="text-sm text-gray-600 mt-2 font-light">
        Trusted fire protection experts in Kerala
      </p>
    </div>

  </div>
</section>



      {/* Main About Section */}
      <section className="bg-white overflow-hidden pb-4 mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            
            {/* Left Content */}
            <div 
              ref={leftContentRef}
              className="flex flex-col opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out"
            >
              {/* Main Image */}
              <div className="relative flex-grow">
                <img 
                  src="photo_6141122150707349920_y.jpg" 
                  alt="Zero Flames fire protection team in Kozhikode Kerala"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 p-4 rounded-xl hover:bg-red-50 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-2 rounded-lg group-hover:bg-red-600 transition-colors">
                        <div className="text-red-600 group-hover:text-white transition-colors">
                          {achievement.icon}
                        </div>
                      </div>
                      <div>
                        <div className="font-light text-gray-900 text-sm">{achievement.title}</div>
                        <div className="text-xs text-gray-600 font-light">{achievement.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div 
              ref={rightContentRef}
              className="flex flex-col opacity-0 translate-x-[50px] transition-all duration-1000 ease-out delay-300"
            >
              <h2 className="text-4xl font-light text-gray-900 mb-4">
                Our Story
              </h2>
              {/* <div className="text-lg text-red-600 font-light mb-6">
                "Zero Risk, Zero Flames"
              </div> */}

              {/* Shortened Story */}
              <p className="text-md text-gray-600 mb-4 leading-relaxed font-light">
                 With over 15 years of expertise in the fire and safety industry, Zero Flames 
brings unmatched knowledge, precision, and commitment to every project 
we handle. Our work is deeply rooted in our core values of quality, integrity, 
safety, and sustainability, ensuring that each solution we deliver stands the 
test of time and trust.
              </p>
              <p className="text-md text-gray-600 mb-8 leading-relaxed font-light">
                We are a service-oriented and independent entity, which means we are free 
to select only the most suitable and reliable products that meet your specific 
needs without ever compromising on safety or quality. At Zero Flames, we 
don't just install systems, we build partnerships grounded in reliability, 
personal attention, and a genuine commitment to protecting what matters 
most.
              </p>



              {/* Why Choose */}
              <div className="bg-gray-50 rounded-2xl p-6 mt-auto">
                <h3 className="text-xl font-light text-gray-900 mb-4">Why Choose Zero Flames?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-light">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}



      {/* Service Areas & Stats */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Left: Our Impact */}
            <div className="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Our Impact</h2>
              <p className="text-gray-600 mb-8 font-light">
                Numbers that reflect our commitment to excellence and the trust our clients place in us.
              </p>

              <div className="grid grid-cols-2 gap-6 flex-1">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl flex flex-col items-center justify-center col-span-2">
  <div className="text-4xl font-light text-red-600 mb-2">500+</div>
  <div className="text-gray-700 font-light text-center">Projects & Happy Clients</div>
</div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl flex flex-col items-center justify-center">
                  <div className="text-4xl font-light text-green-600 mb-2">100%</div>
                  <div className="text-gray-700 font-light text-center">NOC Success Rate</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl flex flex-col items-center justify-center">
                  <div className="text-4xl font-light text-purple-600 mb-2">15+</div>
                  <div className="text-gray-700 font-light text-center">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right: Service Areas + Certifications */}
            {/* Right: Service Areas + Certifications */}
<div className="flex flex-col justify-between bg-white p-6 rounded-2xl shadow-sm">
  
  {/* Service Areas with IndiaMap */}
  <div className="mb-6">
    <h2 className="text-3xl font-light text-gray-900 mb-6">Service Areas</h2>
    <p className="text-gray-600 mb-8 font-light text-justify">
      We proudly serve clients across Kerala, with our headquarters in Kozhikode,
      and extend our fire protection services to all major districts — while
      also offering support across India.
    </p>

    {/* Map */}
    <div className="mb-8">
      <IndiaMap />
    </div>

    {/* Highlighted districts */}
    {/* <div className="grid grid-cols-2 gap-4">
      {["Kozhikode", "Wayanad", "Malappuram", "Kannur"].map((area, index) => (
        <div key={index} className="bg-red-50 p-3 rounded-lg text-center">
          <span className="text-red-800 font-light">{area}</span>
        </div>
      ))}
    </div> */}
  </div>

  {/* Certifications */}
  {/* <div className="p-6 bg-gray-50 rounded-xl">
    <h4 className="font-light text-gray-900 mb-4">
      Certifications & Accreditations
    </h4>
    <div className="space-y-2">
      {[
        "ISO 9001:2015 Quality Management",
        "Government Registered Contractor",
        "NFPA Certified Professionals",
        "Kerala Fire Force Approved",
      ].map((cert, idx) => (
        <div key={idx} className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-gray-700 font-light">{cert}</span>
        </div>
      ))}
    </div>
  </div> */}
</div>

  
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
