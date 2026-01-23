import React from 'react';
import { TrendingUp, BarChart, Shield, DollarSign, Users, Target } from 'lucide-react';

export default function Investors() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-950">
        
        <div className="relative py-24 px-6 max-w-7xl">
          <div className="flex items-start justify-between mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div className="border-l-2 border-emerald-500 pl-4">
                  <span className="text-emerald-400 text-sm font-mono tracking-wider">INVESTOR RELATIONS</span>
                  <h1 className="text-5xl font-bold mt-1">Security Investment</h1>
                </div>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl">
                Investing in the future of cybersecurity. KalpTech Security delivers superior returns through 
                market-leading protection technology and sustained revenue growth.
              </p>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm">
                <div className="text-4xl font-bold text-green-400 mb-2">$4.2B</div>
                <div className="text-gray-400">Market Valuation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Highlights */}
      <div className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-400"></div>
                <h2 className="text-3xl font-bold">Financial Performance</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-b border-gray-800 pb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Annual Revenue Growth</span>
                    <span className="text-green-400 font-bold">+42%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-600 to-emerald-400 w-3/4"></div>
                  </div>
                </div>
                
                <div className="border-b border-gray-800 pb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Enterprise Customer Growth</span>
                    <span className="text-blue-400 font-bold">+65%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 w-4/5"></div>
                  </div>
                </div>
                
                <div className="border-b border-gray-800 pb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Recurring Revenue</span>
                    <span className="text-purple-400 font-bold">92%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-600 to-pink-400 w-[92%]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-400"></div>
                <h2 className="text-3xl font-bold">Market Position</h2>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">#2</div>
                    <div className="text-gray-400">XDR Market Share</div>
                    <div className="text-sm text-blue-400 mt-1">Gartner 2024</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">99.8%</div>
                    <div className="text-gray-400">Customer Retention</div>
                    <div className="text-sm text-green-400 mt-1">Enterprise Tier</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">+500</div>
                    <div className="text-gray-400">Fortune 500 Clients</div>
                    <div className="text-sm text-purple-400 mt-1">Global Coverage</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">$2.3B</div>
                    <div className="text-gray-400">ARR Projection</div>
                    <div className="text-sm text-emerald-400 mt-1">2025 Target</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Strategy */}
      <div className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Strategic Security Investment</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our capital allocation focuses on market-leading security technology and sustainable growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl border border-gray-800 p-8 bg-gradient-to-b from-gray-900/50 to-transparent hover:border-blue-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">R&D Investment</h3>
                <p className="text-gray-400 mb-6">
                  25% of revenue reinvested in security research, AI threat detection, and zero-day protection.
                </p>
                <div className="text-3xl font-bold text-blue-400">$450M</div>
                <div className="text-sm text-gray-500">Annual R&D Budget</div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl border border-gray-800 p-8 bg-gradient-to-b from-gray-900/50 to-transparent hover:border-green-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-green-900 to-emerald-700 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Strategic Acquisitions</h3>
                <p className="text-gray-400 mb-6">
                  Targeted investments in complementary security technologies and threat intelligence platforms.
                </p>
                <div className="text-3xl font-bold text-green-400">$1.2B</div>
                <div className="text-sm text-gray-500">Acquisition Capital</div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl border border-gray-800 p-8 bg-gradient-to-b from-gray-900/50 to-transparent hover:border-purple-500/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-purple-900 to-purple-700 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Global Expansion</h3>
                <p className="text-gray-400 mb-6">
                  Investment in international SOCs, regional compliance centers, and local threat research.
                </p>
                <div className="text-3xl font-bold text-purple-400">$300M</div>
                <div className="text-sm text-gray-500">Expansion Funding</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}