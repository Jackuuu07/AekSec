import React from 'react';
import { Heart, Users, Globe, Recycle, TreePine, Award } from 'lucide-react';

export default function CorporateSustainability() {
  const sustainabilityInitiatives = [
    {
      icon: Globe,
      title: "Environmental Stewardship",
      pillars: [
        "Carbon-neutral operations by 2025",
        "100% renewable energy for data centers",
        "E-waste recycling program",
        "Green office initiatives"
      ],
      achievements: "Reduced carbon footprint by 45% since 2020",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Users,
      title: "Social Responsibility",
      pillars: [
        "Cybersecurity education for underserved communities",
        "Digital literacy programs",
        "Employee volunteer time off",
        "Diversity scholarship programs"
      ],
      achievements: "10,000+ hours of community service annually",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Heart,
      title: "Employee Wellbeing",
      pillars: [
        "Comprehensive health benefits",
        "Mental health support programs",
        "Flexible work arrangements",
        "Professional development funding"
      ],
      achievements: "95% employee satisfaction rate",
      color: "from-pink-600 to-rose-600"
    },
    {
      icon: Recycle,
      title: "Sustainable Operations",
      pillars: [
        "Paperless office initiatives",
        "Energy-efficient infrastructure",
        "Sustainable supply chain",
        "Water conservation measures"
      ],
      achievements: "80% waste reduction in operations",
      color: "from-teal-600 to-green-600"
    },
    {
      icon: TreePine,
      title: "Green Innovation",
      pillars: [
        "Energy-efficient security solutions",
        "Cloud optimization for reduced footprint",
        "Sustainable product design",
        "Circular economy principles"
      ],
      achievements: "Developed 5 patent-pending green technologies",
      color: "from-lime-600 to-green-600"
    },
    {
      icon: Award,
      title: "Ethical Governance",
      pillars: [
        "Transparent reporting",
        "Ethical AI development",
        "Strict data privacy standards",
        "Anti-corruption policies"
      ],
      achievements: "ISO 26000 certified for social responsibility",
      color: "from-purple-600 to-violet-600"
    }
  ];

  const events = [
    {
      date: "June 5, 2024",
      title: "World Environment Day Cleanup",
      description: "Global employee participation in local environmental cleanup initiatives across 25 countries.",
      participants: "2,500+ employees"
    },
    {
      date: "October 2024",
      title: "Cybersecurity Awareness Month",
      description: "Free cybersecurity training and workshops for small businesses and educational institutions.",
      participants: "15,000+ beneficiaries"
    },
    {
      date: "December 2024",
      title: "Holiday Giving Campaign",
      description: "Annual charity drive supporting technology access for underprivileged students worldwide.",
      participants: "100+ partner organizations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Corporate Sustainability</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Building a secure digital future while protecting our planet and empowering our communities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Sustainability Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At KulpTech, we believe that cybersecurity and sustainability go hand in hand. We're committed to protecting 
              digital assets while minimizing our environmental impact and maximizing our positive social contribution.
            </p>
          </div>

          {/* Initiatives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {sustainabilityInitiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${initiative.color} w-fit mb-6`}>
                  <initiative.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{initiative.title}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Pillars</h4>
                  <ul className="space-y-2">
                    {initiative.pillars.map((pillar, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {pillar}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">Recent Achievement</p>
                  <p className="text-lg font-semibold text-gray-900">{initiative.achievements}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Events */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Upcoming Sustainability Events</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12">
              <div className="max-w-4xl mx-auto">
                {events.map((event, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 last:mb-0 p-6 bg-white rounded-xl shadow-sm">
                    <div className="min-w-48">
                      <p className="text-lg font-bold text-blue-600">{event.date}</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                      <p className="text-gray-700 font-semibold">Participants: {event.participants}</p>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                      Register
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="bg-gradient-to-r from-gray-900 to-slate-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">Our Sustainability Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">45%</div>
                <div className="text-gray-300">Carbon Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">10K+</div>
                <div className="text-gray-300">Volunteer Hours</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">100%</div>
                <div className="text-gray-300">Renewable Energy Goal</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">$5M</div>
                <div className="text-gray-300">Community Investment</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}