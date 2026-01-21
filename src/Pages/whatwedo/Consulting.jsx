import React from 'react';
import { Briefcase, Target, Users, BarChart, Lightbulb, Shield } from 'lucide-react';

export default function Consulting() {
  const services = [
    {
      icon: Target,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation roadmap development.",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Security Consulting",
      description: "Risk assessment and security framework implementation.",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: BarChart,
      title: "Technology Advisory",
      description: "Technology stack evaluation and optimization recommendations.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation Advisory",
      description: "Identify and implement emerging technology opportunities.",
      color: "from-amber-600 to-orange-600"
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Organizational change and adoption strategies.",
      color: "from-rose-600 to-red-600"
    },
    {
      icon: Briefcase,
      title: "IT Governance",
      description: "IT governance framework design and implementation.",
      color: "from-cyan-600 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Briefcase className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Consulting Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Strategic advisory and expert guidance to transform your business and technology landscape.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Consulting Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} w-fit mb-6`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}