import React from 'react';
import { Newspaper, Shield, AlertTriangle, TrendingUp, Globe, Lock } from 'lucide-react';

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
    red: "bg-red-900/20 text-red-400 border-red-800",
    blue: "bg-blue-900/20 text-blue-400 border-blue-800",
    purple: "bg-purple-900/20 text-purple-400 border-purple-800",
    orange: "bg-orange-900/20 text-orange-400 border-orange-800",
    cyan: "bg-cyan-900/20 text-cyan-400 border-cyan-800",
    green: "bg-green-900/20 text-green-400 border-green-800"
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
        
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-lg flex items-center justify-center">
              <Newspaper className="w-7 h-7" />
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <span className="text-blue-400 text-sm font-mono tracking-wider">SECURITY INTELLIGENCE</span>
              <h1 className="text-5xl font-bold mt-1">Threat Intelligence & News</h1>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
            Stay informed about emerging threats, security breakthroughs, and industry developments 
            from KalpTech Security's global research network.
          </p>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Active Threat</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-400">Industry News</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-400">Research</span>
            </div>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Featured News */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-1 bg-red-900/30 text-red-400 rounded-full text-sm font-mono tracking-wider">BREAKING THREAT</span>
                    <span className="text-gray-500 text-sm">March 18, 2024</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-6">
                    Zero-Day Exploit in Enterprise VPNs Actively Exploited in the Wild
                  </h2>
                  <p className="text-gray-300 text-lg mb-8">
                    Our threat intelligence team has identified a critical vulnerability being exploited 
                    across multiple enterprise VPN solutions. Immediate patching recommended.
                  </p>
                  <div className="flex items-center space-x-6">
                    <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                      Read Threat Advisory
                    </button>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <AlertTriangle className="w-5 h-5" />
                      <span>Severity: Critical</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* News List */}
            {newsItems.map((item, index) => (
              <div key={index} className="group border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${colorClasses[item.color]}`}>
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-gray-900 text-gray-400 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Threat Level Indicator */}
      <div className="py-16 px-6 bg-gradient-to-r from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Global Threat Level</h3>
                <p className="text-gray-400">Real-time assessment based on our global threat intelligence</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-red-400 mb-2">HIGH</div>
                <div className="text-sm text-gray-500">Updated: Today, 14:30 UTC</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Nation-State Activity</span>
                <div className="flex items-center space-x-2">
                  <div className="w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-3/4"></div>
                  </div>
                  <span className="text-red-400 font-bold">75%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Ransomware Attacks</span>
                <div className="flex items-center space-x-2">
                  <div className="w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-2/3"></div>
                  </div>
                  <span className="text-orange-400 font-bold">65%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Supply Chain Threats</span>
                <div className="flex items-center space-x-2">
                  <div className="w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 w-1/2"></div>
                  </div>
                  <span className="text-yellow-400 font-bold">50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}