import React from 'react';
import { Code, Cpu, Server, GitBranch, TestTube, Rocket } from 'lucide-react';

export default function Engineering() {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions across all platforms.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Cpu,
      title: "Systems Architecture",
      description: "Scalable and resilient system design.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Server,
      title: "DevOps Engineering",
      description: "Infrastructure automation and CI/CD pipelines.",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: GitBranch,
      title: "Platform Engineering",
      description: "Internal developer platforms and tooling.",
      color: "from-amber-600 to-orange-600"
    },
    {
      icon: TestTube,
      title: "Quality Engineering",
      description: "Testing automation and quality assurance.",
      color: "from-rose-600 to-red-600"
    },
    {
      icon: Rocket,
      title: "Technical Leadership",
      description: "Engineering management and technical guidance.",
      color: "from-indigo-600 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Code className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Engineering</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            World-class engineering expertise to build robust, scalable, and innovative technology solutions.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Engineering Services</h2>
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