import React from 'react';
import { Smartphone, Globe, Users, Palette, Zap, Headphones } from 'lucide-react';

export default function DigitalExperiences() {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile app development.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Globe,
      title: "Web Platforms",
      description: "Enterprise-grade web applications and portals.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Users,
      title: "UX/UI Design",
      description: "User-centered design and research.",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: Palette,
      title: "Digital Branding",
      description: "Digital identity and brand experience design.",
      color: "from-amber-600 to-orange-600"
    },
    {
      icon: Zap,
      title: "E-commerce",
      description: "Custom e-commerce platforms and solutions.",
      color: "from-rose-600 to-red-600"
    },
    {
      icon: Headphones,
      title: "Customer Portals",
      description: "Self-service customer portals and dashboards.",
      color: "from-indigo-600 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20 px-6 bg-gradient-to-r from-pink-900 to-rose-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Globe className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Digital Experiences</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Create engaging, intuitive, and memorable digital experiences for your customers.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Experience Solutions</h2>
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