import React from 'react';
import { Building, Globe, Handshake, Target, Users, Shield, CheckCircle, TrendingUp, Award, Network } from 'lucide-react';

export default function SupplierDiversity() {
  const supplierCategories = [
    {
      icon: Shield,
      title: "Security Technology Providers",
      description: "Diverse vendors providing encryption, authentication, and threat detection technologies.",
      metrics: "45% Diverse Suppliers",
      benefits: ["Enhanced innovation", "Reduced supply chain risk", "Competitive pricing"],
      color: "blue"
    },
    {
      icon: Building,
      title: "Infrastructure Partners",
      description: "Data center operators, cloud providers, and network infrastructure specialists.",
      metrics: "$75M Annual Spend",
      benefits: ["Geographic diversity", "Redundancy planning", "Compliance expertise"],
      color: "green"
    },
    {
      icon: Users,
      title: "Professional Services",
      description: "Security consultants, implementation specialists, and managed service providers.",
      metrics: "60% Minority-Owned",
      benefits: ["Local market knowledge", "Cultural competence", "Community investment"],
      color: "purple"
    },
    {
      icon: Globe,
      title: "Global Supply Chain",
      description: "International partners ensuring security hardware and software availability worldwide.",
      metrics: "25 Countries",
      benefits: ["Supply chain resilience", "Regional expertise", "Market access"],
      color: "orange"
    }
  ];

  const colorClasses = {
    blue: "border-blue-500/30 hover:border-blue-500/50",
    green: "border-green-500/30 hover:border-green-500/50",
    purple: "border-purple-500/30 hover:border-purple-500/50",
    orange: "border-orange-500/30 hover:border-orange-500/50"
  };

  const iconColors = {
    blue: "from-blue-600 to-cyan-500",
    green: "from-green-600 to-emerald-500",
    purple: "from-purple-600 to-pink-500",
    orange: "from-orange-600 to-amber-500"
  };

  const certificationLevels = [
    { level: "Tier 1", description: "Direct suppliers providing critical security technologies", suppliers: "150+" },
    { level: "Tier 2", description: "Component manufacturers and software developers", suppliers: "300+" },
    { level: "Tier 3", description: "Raw material suppliers and service providers", suppliers: "500+" },
    { level: "Certified", description: "Diverse-owned business enterprises", suppliers: "200+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-amber-900/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-500 rounded-lg flex items-center justify-center">
              <Handshake className="w-7 h-7" />
            </div>
            <div className="border-l-2 border-amber-500 pl-4">
              <span className="text-amber-400 text-sm font-mono tracking-wider">SUPPLY CHAIN SECURITY</span>
              <h1 className="text-5xl font-bold mt-1">Supplier Diversity</h1>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
            Strengthening our security posture through diverse supplier partnerships. 
            Our diverse supply chain enhances resilience, innovation, and reduces risk 
            in our security solutions ecosystem.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">35%</div>
              <div className="text-gray-300">Diverse Suppliers</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$150M</div>
              <div className="text-gray-300">Annual Spend</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Certified Partners</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
              <div className="text-gray-300">Supply Chain Breaches</div>
            </div>
          </div>
        </div>
      </div>

      {/* Supplier Categories */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Diverse Supplier Categories</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Strategic partnerships across multiple supplier categories to enhance supply chain security and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {supplierCategories.map((category, index) => (
              <div key={index} className={`group border ${colorClasses[category.color]} rounded-2xl p-8 bg-gradient-to-b from-gray-900/50 to-transparent transition-all duration-500`}>
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${iconColors[category.color]} flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                      <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-semibold">
                        {category.metrics}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-6">
                      {category.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                      <div className="space-y-2">
                        {category.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supply Chain Security */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-1 h-12 bg-gradient-to-b from-amber-500 to-orange-400"></div>
                <h2 className="text-3xl font-bold">Supply Chain Security</h2>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Vendor Security Assessment</h3>
                    <p className="text-gray-400">Rigorous security screening for all suppliers</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-red-400" />
                      <span>Security Audits</span>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">100% Compliance</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Continuous Monitoring</span>
                    </div>
                    <span className="text-blue-400 text-sm font-semibold">24/7 Oversight</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span>Certification Requirements</span>
                    </div>
                    <span className="text-purple-400 text-sm font-semibold">ISO 27001 Required</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-emerald-400"></div>
                <h2 className="text-3xl font-bold">Supplier Network</h2>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-900 to-emerald-700 flex items-center justify-center">
                    <Network className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Supplier Tiers</h3>
                    <p className="text-gray-400">Multi-tier supplier classification system</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {certificationLevels.map((level, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                      <div>
                        <div className="text-lg font-semibold">{level.level}</div>
                        <div className="text-sm text-gray-400">{level.description}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-white">{level.suppliers}</div>
                        <div className="text-sm text-gray-500">Suppliers</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Supplier Diversity Impact</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Measurable benefits from our diverse supplier initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8">Performance Improvements</h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Supply Chain Innovation</span>
                    <span className="text-green-400 font-bold">+40%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-600 to-emerald-400 w-2/5"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Cost Reduction</span>
                    <span className="text-blue-400 font-bold">-25%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 w-1/4"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Supplier Reliability</span>
                    <span className="text-purple-400 font-bold">+35%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-600 to-pink-400 w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-900 to-orange-700 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Diversity Goals</h3>
                  <p className="text-gray-400">Annual targets and achievements</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>2024 Target: Diverse Spend</span>
                  </div>
                  <span className="text-green-400 text-sm font-semibold">40% Achieved</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Supplier Development</span>
                  </div>
                  <span className="text-blue-400 text-sm font-semibold">50+ Companies</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Global Expansion</span>
                  </div>
                  <span className="text-purple-400 text-sm font-semibold">15 New Regions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-12 text-center">
            <Handshake className="w-16 h-16 mx-auto mb-8 text-amber-400" />
            <h3 className="text-3xl font-bold mb-6">Become a KalpTech Supplier</h3>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Join our diverse network of security technology partners and contribute to 
              building more resilient and innovative cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-500 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Register as Supplier
              </button>
              <button className="px-8 py-4 border border-gray-700 text-gray-300 rounded-lg font-semibold hover:bg-gray-800/50 transition-colors">
                View Requirements
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}