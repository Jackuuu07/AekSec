import React from 'react';
import { Cloud, Server, Database, Lock, Zap, Globe, BarChart, Users } from 'lucide-react';

export default function Cloud1() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration to AWS, Azure, or Google Cloud Platform.",
      color: "from-blue-600 to-cyan-600",
      features: ["Assessment", "Planning", "Execution", "Optimization"]
    },
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure design and management.",
      color: "from-purple-600 to-pink-600",
      features: ["Compute", "Storage", "Networking", "Monitoring"]
    },
    {
      icon: Database,
      title: "Cloud Data Services",
      description: "Managed database and data services in the cloud.",
      color: "from-emerald-600 to-teal-600",
      features: ["SQL/NoSQL", "Data Lakes", "Data Warehousing", "Analytics"]
    },
    {
      icon: Lock,
      title: "Cloud Security",
      description: "Comprehensive security for cloud environments.",
      color: "from-amber-600 to-orange-600",
      features: ["CSPM", "Identity Management", "Data Protection", "Compliance"]
    },
    {
      icon: Zap,
      title: "Cloud DevOps",
      description: "CI/CD pipelines and infrastructure as code.",
      color: "from-rose-600 to-red-600",
      features: ["Kubernetes", "Terraform", "GitOps", "Monitoring"]
    },
    {
      icon: Globe,
      title: "Multi-Cloud Strategy",
      description: "Unified management across multiple cloud providers.",
      color: "from-indigo-600 to-blue-600",
      features: ["Cost Optimization", "Governance", "Portability", "Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Cloud className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Cloud Solutions</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Accelerate your digital transformation with secure, scalable, and innovative cloud solutions.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Cloud Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} w-fit mb-6`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}