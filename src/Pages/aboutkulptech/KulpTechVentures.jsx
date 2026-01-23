import React from 'react';
import { TrendingUp, DollarSign, Target, Rocket, Building, Users, PieChart, BarChart } from 'lucide-react';

export default function KulpTechVentures() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-emerald-900/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-green-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <span className="text-emerald-400 text-sm font-mono tracking-wider">STRATEGIC INVESTMENT</span>
              <h1 className="text-5xl font-bold mt-1">KalpTech Ventures</h1>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
            Investing in the future of cybersecurity. Our venture arm identifies and accelerates 
            breakthrough security technologies that complement our mission of enterprise protection.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">$500M</div>
              <div className="text-gray-300">Fund Size</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">35+</div>
              <div className="text-gray-300">Portfolio Companies</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
              <div className="text-gray-300">Strategic Acquisitions</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4.2x</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Strategy */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Investment Focus Areas</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Strategic investments in technologies that address critical security gaps and emerging threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-8 bg-gradient-to-br from-gray-900/50 to-transparent border border-gray-800 rounded-2xl hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
                  <p className="text-gray-400 mb-6">
                    Solutions addressing sophisticated enterprise threats including advanced persistent threats, 
                    insider risks, and supply chain vulnerabilities.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">Portfolio: 15 companies</span>
                    <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">Average Check: $8M</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-8 bg-gradient-to-br from-gray-900/50 to-transparent border border-gray-800 rounded-2xl hover:border-purple-500/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-900 to-purple-700 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Emerging Technologies</h3>
                  <p className="text-gray-400 mb-6">
                    Investing in quantum security, AI-powered defense, blockchain security, and other 
                    next-generation security paradigms.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm">Portfolio: 12 companies</span>
                    <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm">Early Stage Focus</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-8 bg-gradient-to-br from-gray-900/50 to-transparent border border-gray-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-900 to-cyan-700 flex items-center justify-center flex-shrink-0">
                  <Building className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Critical Infrastructure</h3>
                  <p className="text-gray-400 mb-6">
                    Protection solutions for energy grids, transportation systems, healthcare networks, 
                    and other essential national infrastructure.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm">Portfolio: 8 companies</span>
                    <span className="px-3 py-1 bg-red-900/30 text-red-400 rounded-full text-sm">Government Focus</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-8 bg-gradient-to-br from-gray-900/50 to-transparent border border-gray-800 rounded-2xl hover:border-orange-500/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-orange-900 to-orange-700 flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Human-Centric Security</h3>
                  <p className="text-gray-400 mb-6">
                    Technologies addressing human factors in security including training platforms, 
                    behavioral analytics, and insider threat detection.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-orange-900/30 text-orange-400 rounded-full text-sm">Portfolio: 10 companies</span>
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">Series A-B Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Performance */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-1 h-12 bg-gradient-to-b from-emerald-500 to-green-400"></div>
            <h2 className="text-3xl font-bold">Portfolio Performance</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-8">Investment Returns</h3>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Overall Portfolio IRR</span>
                      <span className="text-emerald-400 font-bold">42%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-600 to-green-400 w-3/5"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Strategic Acquisition Rate</span>
                      <span className="text-blue-400 font-bold">35%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 w-1/3"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Follow-on Investment Rate</span>
                      <span className="text-purple-400 font-bold">60%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-600 to-pink-400 w-3/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-900 to-emerald-700 flex items-center justify-center">
                    <PieChart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Stage Distribution</h3>
                    <p className="text-gray-400">Current portfolio composition</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span>Seed Stage</span>
                    </div>
                    <span className="text-emerald-400 text-sm font-semibold">25%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Series A</span>
                    </div>
                    <span className="text-blue-400 text-sm font-semibold">40%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Series B+</span>
                    </div>
                    <span className="text-purple-400 text-sm font-semibold">35%</span>
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
            <DollarSign className="w-16 h-16 mx-auto mb-8 text-emerald-400" />
            <h3 className="text-3xl font-bold mb-6">Partner with KalpTech Ventures</h3>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Access strategic capital, enterprise partnerships, and security expertise to accelerate 
              your security technology company's growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-500 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Submit for Investment
              </button>
              <button className="px-8 py-4 border border-gray-700 text-gray-300 rounded-lg font-semibold hover:bg-gray-800/50 transition-colors">
                View Portfolio Companies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}