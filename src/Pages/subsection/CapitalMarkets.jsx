import React from 'react';
import { TrendingUp, Shield, Activity, BarChart, Target, Clock, Cpu, Zap, Globe, Database, Lock, AlertCircle } from 'lucide-react';

export default function CapitalMarkets() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-200 text-gray-900">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-slate-800 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
                  <TrendingUp className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Capital Markets Security</h1>
                  <p className="text-xl text-gray-700">Advanced protection for high-frequency trading and financial market infrastructure</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech provides enterprise-grade security solutions engineered for the unique demands 
                of capital markets. Our platform safeguards trading systems, market data integrity, and 
                financial operations against sophisticated cyber threats while maintaining optimal performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Market Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our capital markets security solutions are designed to address the complex challenges of 
              modern financial trading environments, combining ultra-low latency with enterprise-grade protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Low-Latency Security Infrastructure</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                High-performance security processing engineered for high-frequency trading environments, 
                ensuring protection without compromising execution speed or market access.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <Clock className="w-4 h-4 mr-2" />
                Microsecond-level processing
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Surveillance & Integrity</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced algorithms detecting market manipulation, spoofing, and abusive trading patterns 
                across multiple asset classes and global exchanges.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Target className="w-4 h-4 mr-2" />
                Pattern recognition
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Exchange Connectivity</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Secure connectivity solutions for global market access, protecting data in transit 
                and ensuring reliable execution across diverse trading venues.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <Database className="w-4 h-4 mr-2" />
                Multi-exchange support
              </div>
            </div>
          </div>

          {/* Detailed Capabilities */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-gray-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mr-4">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  Trading Infrastructure Security
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Low-latency threat detection for algorithmic trading systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Secure order management and execution platforms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Real-time market data protection and validation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  Risk & Compliance Management
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Pre-trade risk controls and position monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Regulatory compliance automation (MiFID II, FINRA, SEC)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Audit trail preservation and transaction reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Market Coverage */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Multi-Asset Class Protection</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our security solutions are optimized for diverse trading environments including equities, 
                fixed income, derivatives, foreign exchange, and cryptocurrency markets. Each asset class 
                receives specialized protection tailored to its unique risk profile and operational requirements.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-4 text-center border border-gray-100">
                  <div className="text-gray-800 font-semibold">Equities</div>
                  <div className="text-sm text-gray-500">NYSE, NASDAQ, LSE</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-gray-100">
                  <div className="text-gray-800 font-semibold">Fixed Income</div>
                  <div className="text-sm text-gray-500">Bonds, Repos, ABS</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-gray-100">
                  <div className="text-gray-800 font-semibold">Derivatives</div>
                  <div className="text-sm text-gray-500">Futures, Options, Swaps</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-gray-100">
                  <div className="text-gray-800 font-semibold">Foreign Exchange</div>
                  <div className="text-sm text-gray-500">Spot, Forwards, NDFs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Enterprise Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's capital markets security platform integrates seamlessly with existing trading 
              infrastructure, including execution management systems, market data feeds, and order routing 
              networks. Our solutions are compatible with major trading platforms and proprietary systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}