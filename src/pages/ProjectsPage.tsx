import React, { useState } from 'react';
import { MapPin, Building, CheckCircle, Star, Filter, Calendar, Award } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: "Skyview Tech Park",
      location: "Kozhikode, Kerala",
      industry: "Commercial Complex",
      services: ["Fire Pump System", "Alarm System", "AMC"],
      status: "Completed",
      year: "2024",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Zero Flames delivered a flawless system upgrade with fast NOC clearance. Their team was professional and completed the project ahead of schedule.",
      client: "Tech Park Management",
      projectValue: "₹15 Lakhs",
      duration: "3 months"
    },
    {
      title: "Malabar Medical College",
      location: "Calicut, Kerala",
      industry: "Healthcare",
      services: ["Sprinkler System", "Fire Hydrant", "Emergency Lighting"],
      status: "Completed",
      year: "2024",
      image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Professional service and excellent post-installation support. The system works flawlessly and gives us complete peace of mind.",
      client: "Hospital Administration",
      projectValue: "₹25 Lakhs",
      duration: "4 months"
    },
    {
      title: "Green Valley Apartments",
      location: "Kozhikode, Kerala",
      industry: "Residential",
      services: ["Fire Alarm", "Extinguisher Supply", "NOC Support"],
      status: "Completed",
      year: "2023",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Quick NOC approval and hassle-free installation process. Zero Flames made the entire experience smooth for our residents.",
      client: "Residents Association",
      projectValue: "₹8 Lakhs",
      duration: "2 months"
    },
    {
      title: "Spice Manufacturing Unit",
      location: "Wayanad, Kerala",
      industry: "Industrial",
      services: ["FM-200 System", "Fire Pump", "AMC"],
      status: "Ongoing",
      year: "2024",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Impressed with their industrial expertise and safety standards. The team understands our unique requirements perfectly.",
      client: "Manufacturing Head",
      projectValue: "₹30 Lakhs",
      duration: "5 months"
    },
    {
      title: "City Mall Complex",
      location: "Malappuram, Kerala",
      industry: "Retail",
      services: ["Complete Fire Safety", "NOC Consultancy", "Maintenance"],
      status: "Completed",
      year: "2023",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Comprehensive solution that exceeded our expectations. The system integration was seamless and professional.",
      client: "Mall Management",
      projectValue: "₹40 Lakhs",
      duration: "6 months"
    },
    {
      title: "Heritage Hotel",
      location: "Kannur, Kerala",
      industry: "Hospitality",
      services: ["Fire Alarm", "Sprinkler", "Emergency Systems"],
      status: "Completed",
      year: "2023",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
      testimonial: "Perfect blend of safety and aesthetics for our heritage property. Zero Flames understood our unique architectural constraints.",
      client: "Hotel Owner",
      projectValue: "₹18 Lakhs",
      duration: "3 months"
    }
  ];

  const filters = ['All', 'Commercial Complex', 'Healthcare', 'Residential', 'Industrial', 'Retail', 'Hospitality', 'Educational'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.industry === selectedFilter);

  const stats = [
    { label: "Total Projects", value: "500+", icon: <Award className="w-6 h-6" /> },
    { label: "Happy Clients", value: "200+", icon: <Star className="w-6 h-6" /> },
    { label: "Success Rate", value: "100%", icon: <CheckCircle className="w-6 h-6" /> },
    { label: "Years Experience", value: "15+", icon: <Calendar className="w-6 h-6" /> }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 bg-gradient-to-r from-[#b91c1c] via-[#7f1d1d] to-black py-20 text-white rounded-2xl shadow-xl">
  <h1 className="text-4xl md:text-5xl font-bold mb-6">
    Our Projects Portfolio
  </h1>
  <p className="text-xl max-w-3xl mx-auto text-red-100 leading-relaxed">
    Showcasing our expertise through successful fire protection installations 
    across various industries in Kerala. Each project reflects our commitment to excellence.
  </p>
</div>


          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {stats.map((stat, index) => (
    <div
      key={index}
      className="text-center"
      data-aos="fade-up"
      data-aos-delay={index * 150} // staggered delay
    >
      <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="text-red-600">{stat.icon}</div>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
      <div className="text-gray-600">{stat.label}</div>
    </div>
  ))}
</div>


        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Project Gallery</h2>
            {/* <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-gray-500">Filter</span>
            </div> */}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedFilter === filter
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* grid with equal-height cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
      {filteredProjects.map((project, index) => (
        <div 
          key={index} 
          className="flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden 
                     hover:shadow-xl transition-all duration-300 group"
        >
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
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-black/70 text-white rounded-full text-sm">
                {project.year}
              </span>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-col flex-grow p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{project.location}</span>
            </div>
            
            <div className="flex items-center text-gray-600 mb-4">
              <Building className="w-4 h-4 mr-1" />
              <span className="text-sm">{project.industry}</span>
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <span className="text-gray-500">Value:</span>
                <div className="font-semibold text-gray-900">{project.projectValue}</div>
              </div>
              <div>
                <span className="text-gray-500">Duration:</span>
                <div className="font-semibold text-gray-900">{project.duration}</div>
              </div>
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
            {/* <div className="bg-gray-50 p-4 rounded-lg mb-4 flex-grow">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-700 italic mb-2">"{project.testimonial}"</p>
              <p className="text-xs text-gray-600">- {project.client}</p>
            </div> */}

            {/* Stick button to bottom */}
            <div className="mt-auto">
              <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                View Project Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Fire Protection Project?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Join our growing list of satisfied clients across Kerala. Get a free consultation 
              and quote for your fire protection needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Schedule Site Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;