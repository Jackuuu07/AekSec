import React from 'react';
import { Grid, Cpu, Shield, Cloud, Database, Code, Globe, Users } from 'lucide-react';

export default function Applications() {
  const applications = [
    {
      icon: Grid,
      title: "Enterprise Security Platform",
      description: "Comprehensive security suite for protecting critical enterprise applications.",
      color: "from-blue-600 to-indigo-600",
      features: ["Application Security", "API Protection", "Runtime Defense"],
      category: "Security"
    },
    {
      icon: Cpu,
      title: "AI-Powered Analytics",
      description: "Advanced analytics platform leveraging machine learning for business insights.",
      color: "from-purple-600 to-pink-600",
      features: ["Predictive Analytics", "Real-time Processing", "Custom Dashboards"],
      category: "Analytics"
    },
    {
      icon: Cloud,
      title: "Cloud Migration Suite",
      description: "Tools and services for seamless cloud migration and optimization.",
      color: "from-teal-600 to-emerald-600",
      features: ["Migration Planning", "Cost Optimization", "Performance Monitoring"],
      category: "Cloud"
    },
    {
      icon: Database,
      title: "Data Management System",
      description: "Enterprise-grade data management with governance and compliance.",
      color: "from-amber-600 to-orange-600",
      features: ["Data Governance", "Quality Management", "Compliance Tracking"],
      category: "Data"
    },
    {
      icon: Code,
      title: "Low-Code Development",
      description: "Visual development platform for rapid application creation.",
      color: "from-green-600 to-lime-600",
      features: ["Drag & Drop Builder", "API Integration", "Workflow Automation"],
      category: "Development"
    },
    {
      icon: Users,
      title: "Collaboration Suite",
      description: "Integrated tools for team collaboration and project management.",
      color: "from-rose-600 to-red-600",
      features: ["Team Workspaces", "Task Management", "Document Collaboration"],
      category: "Collaboration"
    }
  ];

  const industries = [
    { name: "Financial Services", color: "bg-blue-100 text-blue-800" },
    { name: "Healthcare", color: "bg-green-100 text-green-800" },
    { name: "Retail", color: "bg-purple-100 text-purple-800" },
    { name: "Manufacturing", color: "bg-amber-100 text-amber-800" },
    { name: "Government", color: "bg-gray-100 text-gray-800" },
    { name: "Technology", color: "bg-indigo-100 text-indigo-800" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Enterprise Applications</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Scalable, secure, and intelligent applications designed to transform your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Application Portfolio</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className={`h-2 bg-gradient-to-r ${app.color}`}></div>
                <div className="p-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${app.color} w-fit mb-6`}>
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{app.title}</h3>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                      {app.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{app.description}</p>
                  
                  <div className="space-y-2 mb-8">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Industry Solutions</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tailored for Your Industry</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Our applications are customized to meet the unique challenges and regulatory requirements 
                of various industries. We understand that each sector has specific needs, and we build 
                solutions that address those directly.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {industries.map((industry, index) => (
                  <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${industry.color}`}>
                    {industry.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Compliance Ready",
                  description: "Built-in compliance frameworks for regulations like GDPR, HIPAA, SOC2"
                },
                {
                  title: "Scalable Architecture",
                  description: "Designed to grow with your business from startup to enterprise"
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock technical support and maintenance"
                },
                {
                  title: "API-First Design",
                  description: "Easy integration with your existing systems and tools"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8">
            Schedule a personalized demo to see how our applications can drive your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Schedule Demo
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}