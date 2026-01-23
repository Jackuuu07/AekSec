import React from 'react';
import { Network, Shield, Handshake, Cpu, Cloud, Server, Link, Users, Target, Lock } from 'lucide-react';

export default function PartnerEcosystem() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-purple-900/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
              <Network className="w-7 h-7" />
            </div>
            <div className="border-l-2 border-purple-500 pl-4">
              <span className="text-purple-400 text-sm font-mono tracking-wider">SECURITY ALLIANCE</span>
              <h1 className="text-5xl font-bold mt-1">Partner Ecosystem</h1>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
            Unifying security capabilities through strategic partnerships. Our ecosystem delivers 
            comprehensive protection through integrated technologies and shared threat intelligence.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">150+</div>
              <div className="text-gray-300">Technology Partners</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">MSSP Partners</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">75+</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$2.5B</div>
              <div className="text-gray-300">Partner Revenue</div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Tiers */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Strategic Partner Programs</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Multi-tiered partnership structure designed for maximum security integration and business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="relative group overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/80 to-gray-950/80 p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-cyan-900/5 group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
                    <Shield className="w-7 h-7" />
                  </div>
                  <span className="px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-semibold">TECHNOLOGY</span>
                </div>
                <h3 className="text-2xl font-bold mb-6">Technology Alliance</h3>
                <p className="text-gray-400 mb-8">
                  Deep integration partnerships with leading security technology providers for unified threat detection.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    API Integration & SDK Access
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Joint Threat Intelligence
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Co-Marketing Initiatives
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/80 to-gray-950/80 p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/5 group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-900 to-purple-700 flex items-center justify-center">
                    <Handshake className="w-7 h-7" />
                  </div>
                  <span className="px-4 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm font-semibold">SOLUTION</span>
                </div>
                <h3 className="text-2xl font-bold mb-6">Solution Provider</h3>
                <p className="text-gray-400 mb-8">
                  Certified partners delivering complete security solutions with managed services and implementation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Certified Implementation Teams
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Managed Security Services
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    24/7 SOC Support
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/80 to-gray-950/80 p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-emerald-900/5 group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-900 to-emerald-700 flex items-center justify-center">
                    <Target className="w-7 h-7" />
                  </div>
                  <span className="px-4 py-1 bg-green-900/30 text-green-400 rounded-full text-sm font-semibold">STRATEGIC</span>
                </div>
                <h3 className="text-2xl font-bold mb-6">Strategic Global</h3>
                <p className="text-gray-400 mb-8">
                  Elite partnerships with global system integrators and managed security service providers.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Executive Advisory Council
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Co-Innovation Labs
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Global Revenue Sharing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Platforms */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-blue-400"></div>
            <h2 className="text-3xl font-bold">Integration Platforms</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
                    <Link className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Security Integration Hub</h3>
                    <p className="text-gray-400">Unified API platform for seamless security orchestration</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Cloud className="w-5 h-5 text-blue-400" />
                      <span>Cloud Security Integrations</span>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">25+ Providers</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Server className="w-5 h-5 text-purple-400" />
                      <span>SIEM Platform Connectors</span>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">15+ Platforms</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Cpu className="w-5 h-5 text-cyan-400" />
                      <span>EDR/XDR Integration</span>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">40+ Solutions</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-900 to-purple-700 flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Partner Success Metrics</h3>
                    <p className="text-gray-400">Performance indicators from our global partner network</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Average Deal Size Growth</span>
                      <span className="text-green-400 font-bold">+45%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-600 to-emerald-400 w-3/4"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Partner Certification Rate</span>
                      <span className="text-blue-400 font-bold">92%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 w-[92%]"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Joint Customer Satisfaction</span>
                      <span className="text-purple-400 font-bold">4.8/5</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-600 to-pink-400 w-4/5"></div>
                    </div>
                  </div>
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
            <Lock className="w-16 h-16 mx-auto mb-8 text-cyan-400" />
            <h3 className="text-3xl font-bold mb-6">Join Our Security Alliance</h3>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Partner with KalpTech Security to deliver comprehensive protection and drive mutual growth in the cybersecurity market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Become a Partner
              </button>
              <button className="px-8 py-4 border border-gray-700 text-gray-300 rounded-lg font-semibold hover:bg-gray-800/50 transition-colors">
                Access Partner Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}