import React from 'react';
import { Newspaper, Shield, AlertTriangle, TrendingUp, Globe, Lock, CheckCircle } from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      category: "THREAT INTELLIGENCE",
      title: "KalpTech Discerts New APT Campaign Targeting Critical Infrastructure",
      date: "March 15, 2024",
      description: "Our threat research team identified and mitigated a sophisticated nation-state attack targeting energy grids across North America.",
      tags: ["APT", "Critical Infrastructure", "Zero-Day"],
      color: "red"
    },
    {
      category: "INDUSTRY AWARD",
      title: "Named Leader in Gartner Magic Quadrant for Security Services",
      date: "March 10, 2024",
      description: "Recognized for complete vision and execution capabilities in enterprise security services for the third consecutive year.",
      tags: ["Gartner", "Market Leader", "Enterprise"],
      color: "blue"
    },
    {
      category: "PRODUCT RELEASE",
      title: "KalpTech Launches Quantum-Resistant Encryption Platform",
      date: "March 5, 2024",
      description: "Next-generation encryption solution protecting against future quantum computing threats for government and enterprise clients.",
      tags: ["Quantum", "Encryption", "Innovation"],
      color: "purple"
    },
    {
      category: "PARTNERSHIP",
      title: "Strategic Alliance with AWS for Cloud Security Integration",
      date: "February 28, 2024",
      description: "Deep integration with AWS Security Hub providing unified threat visibility and automated response capabilities.",
      tags: ["AWS", "Cloud Security", "Integration"],
      color: "orange"
    },
    {
      category: "RESEARCH",
      title: "Global Ransomware Report Shows 200% Increase in Sophisticated Attacks",
      date: "February 20, 2024",
      description: "Our annual threat report reveals alarming trends in ransomware evolution and defense strategies.",
      tags: ["Ransomware", "Research", "Threat Report"],
      color: "cyan"
    },
    {
      category: "INDUSTRY EVENT",
      title: "KalpTech to Host Global Cyber Defense Summit 2024",
      date: "February 15, 2024",
      description: "Annual security conference featuring threat intelligence sharing and defense strategy workshops.",
      tags: ["Summit", "Conference", "Training"],
      color: "green"
    }
  ];

  const colorClasses = {
    red: "bg-red-100 text-red-800",
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    orange: "bg-orange-100 text-orange-800",
    cyan: "bg-cyan-100 text-cyan-800",
    green: "bg-green-100 text-green-800"
  };

  const threatLevels = [
    {
      category: "Nation-State Activity",
      level: "75%",
      description: "Advanced persistent threats"
    },
    {
      category: "Ransomware Attacks",
      level: "65%",
      description: "Current threat volume"
    },
    {
      category: "Supply Chain Threats",
      level: "50%",
      description: "Third-party vulnerabilities"
    }
  ];

  const globalThreatStats = [
    {
      value: "HIGH",
      label: "Global Threat Level",
      description: "Current assessment"
    },
    {
      value: "100+",
      label: "Daily Threat Alerts",
      description: "Average volume"
    },
    {
      value: "24/7",
      label: "Monitoring",
      description: "Continuous protection"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-100 text-black">
        <div className="max-w-7xl mx-auto flex items-start gap-8">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
            <Newspaper className="w-10 h-10 text-black" />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Threat Intelligence & News
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Stay informed about emerging threats, security breakthroughs, and industry developments 
              from KalpTech Security's global research network.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Global Threat Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {globalThreatStats.map((stat, index) => (
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

          {/* Featured News */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Security Intelligence
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-red-200 mb-12">
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  BREAKING THREAT
                </span>
                <span className="text-gray-600 text-sm">March 18, 2024</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Zero-Day Exploit in Enterprise VPNs Actively Exploited in the Wild
              </h3>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Our threat intelligence team has identified a critical vulnerability being exploited 
                across multiple enterprise VPN solutions. Immediate patching recommended.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <span className="font-medium">Severity: Critical</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Status: Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Recent Updates & Reports
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses[item.color]}`}>
                      {item.category}
                    </span>
                    <span className="text-gray-600 text-sm">{item.date}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Threat Level Assessment */}
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-blue-100 mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Global Threat Level Assessment
                </h3>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Real-time threat assessment based on our global security intelligence and monitoring systems.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Current Threat Landscape</h4>
                    <p className="text-gray-600">Updated: Today, 14:30 UTC</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-red-600 mb-2">HIGH</div>
                    <div className="text-gray-600 text-sm">Overall Threat Level</div>
                  </div>
                </div>

                <div className="space-y-6">
                  {threatLevels.map((threat, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-lg font-medium text-gray-900">
                          {threat.category}
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {threat.level}
                        </div>
                      </div>
                      <div className="text-gray-600 text-sm mb-2">
                        {threat.description}
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-600" 
                          style={{ width: threat.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Security Recommendations</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Implement multi-factor authentication</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Regular security patch updates</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Continuous threat monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Security Intelligence Network
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Our global threat intelligence network monitors emerging threats across multiple 
                vectors including nation-state activity, ransomware campaigns, and supply chain 
                vulnerabilities. This real-time intelligence informs our security products and 
                helps protect clients against evolving cyber threats.
              </p>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Staying Ahead of Threats
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Through continuous research, threat intelligence sharing, and global monitoring, 
              we provide timely insights and actionable intelligence to help organizations 
              protect against today's most sophisticated cyber threats.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}