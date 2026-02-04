import React from 'react';
import { Heart, Users, Globe, Recycle, TreePine, Award, CheckCircle } from 'lucide-react';

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

  const impactMetrics = [
    {
      value: "45%",
      label: "Carbon Reduction",
      description: "Since 2020 baseline"
    },
    {
      value: "10K+",
      label: "Volunteer Hours",
      description: "Annual community service"
    },
    {
      value: "100%",
      label: "Renewable Energy Goal",
      description: "For all data centers"
    },
    {
      value: "$5M",
      label: "Community Investment",
      description: "Annual contributions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-100 text-black">
        <div className="max-w-7xl mx-auto flex items-start gap-8">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
            <Heart className="w-10 h-10 text-black" />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Corporate Sustainability
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Building a secure digital future while protecting our planet and empowering our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Mission Statement */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Sustainability Mission
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              At KalpTech, we believe that cybersecurity and sustainability go hand in hand. 
              We're committed to protecting digital assets while minimizing our environmental 
              impact and maximizing our positive social contribution.
            </p>
          </div>

          {/* Initiatives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {sustainabilityInitiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${initiative.color} flex items-center justify-center mb-6 shadow-md`}>
                  <initiative.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {initiative.title}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Pillars</h4>
                  <ul className="space-y-3">
                    {initiative.pillars.map((pillar, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-sm">{pillar}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-lg font-bold text-gray-900">
                    {initiative.achievements}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Upcoming Sustainability Events
            </h3>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
              {events.map((event, index) => (
                <div key={index} className="mb-8 last:mb-0 pb-8 last:pb-0 border-b last:border-0 border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-48">
                      <p className="text-lg font-medium text-blue-600">{event.date}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Participants: {event.participants}
                      </p>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-blue-100 mb-16">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
                Our Sustainability Impact
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {impactMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-3">
                      {metric.value}
                    </div>
                    <div className="text-lg font-medium text-gray-900 mb-2">
                      {metric.label}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Commitment to Sustainability
            </h3>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Our sustainability initiatives are integrated into every aspect of our business, 
                from product development and operations to employee engagement and community 
                partnerships. We continuously measure and improve our environmental and social 
                impact while maintaining our commitment to delivering world-class cybersecurity 
                solutions.
              </p>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Sustainable Security for the Future
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              By combining technological innovation with sustainable practices, we aim to create 
              a secure digital future that benefits businesses, communities, and the planet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}