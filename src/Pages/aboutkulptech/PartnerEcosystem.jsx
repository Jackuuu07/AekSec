import React from 'react';
import { Network, Shield, Handshake, Cpu, Cloud, Server, Link, Users, Target, Lock, CheckCircle } from 'lucide-react';

export default function PartnerEcosystem() {
  const partnerStats = [
    {
      value: "150+",
      label: "Technology Partners",
      description: "Integration partners"
    },
    {
      value: "500+",
      label: "MSSP Partners",
      description: "Managed service providers"
    },
    {
      value: "75+",
      label: "Countries",
      description: "Global coverage"
    },
    {
      value: "$2.5B",
      label: "Partner Revenue",
      description: "Annual partner sales"
    }
  ];

  const partnerPrograms = [
    {
      icon: Shield,
      title: "Technology Alliance",
      description: "Deep integration partnerships with leading security technology providers for unified threat detection.",
      features: [
        "API Integration & SDK Access",
        "Joint Threat Intelligence",
        "Co-Marketing Initiatives"
      ],
      category: "TECHNOLOGY",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Handshake,
      title: "Solution Provider",
      description: "Certified partners delivering complete security solutions with managed services and implementation.",
      features: [
        "Certified Implementation Teams",
        "Managed Security Services",
        "24/7 SOC Support"
      ],
      category: "SOLUTION",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Target,
      title: "Strategic Global",
      description: "Elite partnerships with global system integrators and managed security service providers.",
      features: [
        "Executive Advisory Council",
        "Co-Innovation Labs",
        "Global Revenue Sharing"
      ],
      category: "STRATEGIC",
      color: "from-green-600 to-emerald-600"
    }
  ];

  const integrationPlatforms = [
    {
      icon: Cloud,
      platform: "Cloud Security Integrations",
      providers: "25+ Providers",
      description: "Cloud platform security integrations"
    },
    {
      icon: Server,
      platform: "SIEM Platform Connectors",
      providers: "15+ Platforms",
      description: "Security information and event management"
    },
    {
      icon: Cpu,
      platform: "EDR/XDR Integration",
      providers: "40+ Solutions",
      description: "Endpoint detection and response"
    }
  ];

  const partnerMetrics = [
    {
      label: "Average Deal Size Growth",
      value: "+45%",
      description: "Year-over-year growth"
    },
    {
      label: "Partner Certification Rate",
      value: "92%",
      description: "Successful certification rate"
    },
    {
      label: "Joint Customer Satisfaction",
      value: "4.8/5",
      description: "Average customer rating"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-100 text-black">
        <div className="max-w-7xl mx-auto flex items-start gap-8">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
            <Network className="w-10 h-10 text-black" />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Partner Ecosystem
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Unifying security capabilities through strategic partnerships. Our ecosystem delivers 
              comprehensive protection through integrated technologies and shared threat intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Partner Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {partnerStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-3">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Partner Programs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Strategic Partner Programs
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Multi-tiered partnership structure designed for maximum security integration and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {partnerPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${program.color} flex items-center justify-center shadow-md`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {program.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Integration Platforms */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Integration Platforms
            </h3>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Security Integration Hub */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Link className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      Security Integration Hub
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Unified API platform for seamless security orchestration
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  {integrationPlatforms.map((platform, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <platform.icon className="w-5 h-5 text-gray-600" />
                        <div>
                          <div className="font-medium text-gray-900">{platform.platform}</div>
                          <div className="text-gray-600 text-sm">{platform.description}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{platform.providers}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partner Success Metrics */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Users className="w-7 h-7 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      Partner Success Metrics
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Performance indicators from our global partner network
                    </p>
                  </div>
                </div>
                <div className="space-y-8">
                  {partnerMetrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-lg font-medium text-gray-900">
                          {metric.label}
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {metric.value}
                        </div>
                      </div>
                      <div className="text-gray-600 text-sm">
                        {metric.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Partner Benefits
            </h3>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our partner ecosystem provides comprehensive support including technical enablement, 
                marketing resources, and go-to-market strategies to help partners succeed in delivering 
                advanced security solutions to their customers.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Technical training and certification programs</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Joint marketing and lead generation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated partner support teams</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Access to threat intelligence feeds</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-8">
              <Lock className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Comprehensive Security Alliance
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Through strategic partnerships and integrated technologies, we build comprehensive 
              security solutions that provide organizations with unified protection against 
              evolving cyber threats.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}