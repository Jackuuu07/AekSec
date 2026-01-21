import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, Cpu, Network, Users, FileCheck } from 'lucide-react';

export default function Cybersecurity() {
  const services = [
    {
      icon: Shield,
      title: "Threat Protection",
      description: "Advanced threat detection and prevention systems.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "End-to-end data encryption and protection solutions.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 security operations center and monitoring.",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies.",
      color: "from-amber-600 to-orange-600"
    },
    {
      icon: Cpu,
      title: "AI Security",
      description: "Security solutions for AI and machine learning systems.",
      color: "from-rose-600 to-red-600"
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Network protection and segmentation solutions.",
      color: "from-indigo-600 to-blue-600"
    },
    {
      icon: Users,
      title: "Identity Management",
      description: "Zero trust identity and access management.",
      color: "from-cyan-600 to-teal-600"
    },
    {
      icon: FileCheck,
      title: "Compliance",
      description: "Regulatory compliance and audit readiness.",
      color: "from-green-600 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20 px-6 bg-gradient-to-r from-red-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Cybersecurity</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive security solutions to protect your digital assets from evolving threats.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Security Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} w-fit mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}