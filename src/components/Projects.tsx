import React from 'react';
import { MapPin, Building, CheckCircle, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Skyview Tech Park",
      location: "Kozhikode, Kerala",
      industry: "Commercial Complex",
      services: ["Fire Pump System", "Alarm System", "AMC"],
      status: "Completed",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Zero Flames delivered a flawless system upgrade with fast NOC clearance.",
      client: "Tech Park Management"
    },
    {
      title: "Malabar Medical College",
      location: "Calicut, Kerala",
      industry: "Healthcare",
      services: ["Sprinkler System", "Fire Hydrant", "Emergency Lighting"],
      status: "Completed",
      image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Professional service and excellent post-installation support.",
      client: "Hospital Administration"
    },
    {
      title: "Green Valley Apartments",
      location: "Kozhikode, Kerala",
      industry: "Residential",
      services: ["Fire Alarm", "Extinguisher Supply", "NOC Support"],
      status: "Completed",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Quick NOC approval and hassle-free installation process.",
      client: "Residents Association"
    },
    {
      title: "Spice Manufacturing Unit",
      location: "Wayanad, Kerala",
      industry: "Industrial",
      services: ["FM-200 System", "Fire Pump", "AMC"],
      status: "Ongoing",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Impressed with their industrial expertise and safety standards.",
      client: "Manufacturing Head"
    },
    {
      title: "City Mall Complex",
      location: "Malappuram, Kerala",
      industry: "Retail",
      services: ["Complete Fire Safety", "NOC Consultancy", "Maintenance"],
      status: "Completed",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Comprehensive solution that exceeded our expectations.",
      client: "Mall Management"
    },
    {
      title: "Heritage Hotel",
      location: "Kannur, Kerala",
      industry: "Hospitality",
      services: ["Fire Alarm", "Sprinkler", "Emergency Systems"],
      status: "Completed",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Perfect blend of safety and aesthetics for our heritage property.",
      client: "Hotel Owner"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our expertise through successful fire protection installations 
            across various industries in Kerala.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} fire protection project in ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{project.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <Building className="w-4 h-4 mr-1" />
                  <span className="text-sm">{project.industry}</span>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Services Provided:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 italic">"{project.testimonial}"</p>
                  <p className="text-xs text-gray-600 mt-2">- {project.client}</p>
                </div>

                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                  View Project Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Fire Protection Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our growing list of satisfied clients across Kerala. Get a free consultation 
              and quote for your fire protection needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;