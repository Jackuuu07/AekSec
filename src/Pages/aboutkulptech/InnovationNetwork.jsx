import React from 'react';
import { Cpu, Brain, Network, Rocket, Shield, Target, Zap, Code, CheckCircle } from 'lucide-react';

export default function InnovationNetwork() {
  const researchFocus = [
    {
      icon: Brain,
      title: "AI-Powered Threat Hunting",
      description: "Autonomous AI systems that proactively identify and neutralize advanced persistent threats before they impact networks.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Shield,
      title: "Quantum-Resistant Cryptography",
      description: "Developing encryption standards that will remain secure against attacks from future quantum computers.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Cpu,
      title: "Zero-Trust Architecture",
      description: "Research into next-generation zero-trust frameworks that dynamically adapt to evolving threat landscapes.",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Zap,
      title: "Real-time Threat Intelligence",
      description: "Global threat intelligence networks that share and analyze attack patterns in real-time across industries.",
      color: "from-cyan-600 to-blue-600"
    }
  ];

  const innovationLabs = [
    {
      name: "Advanced Threat Research Lab",
      location: "San Francisco, California",
      icon: Rocket,
      achievements: [
        "12 zero-day discoveries per month",
        "24/7 threat hunting operations",
        "50+ dedicated researchers"
      ],
      color: "from-blue-600 to-cyan-600"
    },
    {
      name: "Quantum Security Institute",
      location: "Zurich, Switzerland",
      icon: Code,
      achievements: [
        "8 post-quantum algorithms developed",
        "Active quantum key distribution research",
        "15 university partnerships"
      ],
      color: "from-purple-600 to-pink-600"
    }
  ];

  const networkStats = [
    {
      value: "50+",
      label: "Research Partners",
      description: "Global research collaborations"
    },
    {
      value: "200+",
      label: "Security Patents",
      description: "Innovation and intellectual property"
    },
    {
      value: "$150M",
      label: "R&D Investment",
      description: "Annual research funding"
    },
    {
      value: "15",
      label: "Innovation Labs",
      description: "Global research facilities"
    }
  ];

  const networkBenefits = [
    "Access to proprietary threat research",
    "Collaborative research opportunities",
    "Early access to security innovations",
    "Participation in global security initiatives"
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
              Innovation Network
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              A global consortium of security researchers, universities, and government agencies 
              collaborating on next-generation cybersecurity defense technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {networkStats.map((stat, index) => (
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

          {/* Research Focus Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Security Research
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Cutting-edge research initiatives focused on anticipating and neutralizing future cyber threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {researchFocus.map((research, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${research.color} flex items-center justify-center mb-6 shadow-md`}>
                  <research.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {research.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {research.description}
                </p>
              </div>
            ))}
          </div>

          {/* Innovation Labs */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Global Innovation Labs
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {innovationLabs.map((lab, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${lab.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                      <lab.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        {lab.name}
                      </h4>
                      <p className="text-gray-600">
                        {lab.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {lab.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Network Benefits */}
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-blue-100 mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Join the Innovation Network
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Collaborate with leading security researchers, access cutting-edge threat intelligence, 
                    and contribute to shaping the future of cybersecurity defense.
                  </p>
                  <ul className="space-y-4">
                    {networkBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-4xl font-bold text-gray-900 mb-3">
                      500+
                    </div>
                    <div className="text-lg font-medium text-gray-900 mb-2">
                      Network Members
                    </div>
                    <div className="text-gray-600 mb-8">
                      Including 40% of Fortune 500 companies
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-3">
                      $25M
                    </div>
                    <div className="text-gray-700">
                      Annual Research Grants Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Collaborative Research Framework
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Our innovation network operates on an open collaboration framework that brings together 
                academic institutions, government agencies, and industry partners. This multi-disciplinary 
                approach accelerates breakthrough discoveries and ensures research translates into practical 
                security solutions that address real-world threats.
              </p>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Shaping the Future of Cybersecurity
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Through our global innovation network, we're building the security technologies of tomorrow 
              while addressing today's most pressing cybersecurity challenges through collaborative research 
              and shared knowledge.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}