import React from 'react';
import { Package, Shield, Factory, Truck, BarCode, TrendingUp, Users, Globe } from 'lucide-react';

export default function ConsumerGoods() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-green-500 text-white">
        <div className="absolute inset-0 bg-opacity-20 bg-white"></div>
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Package className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-3">Consumer Goods Security</h1>
              <p className="text-xl opacity-90">Protecting brands, products, and supply chains</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90 mb-12">
            KulpTech provides comprehensive security solutions for consumer goods manufacturers 
            and distributors, protecting intellectual property, supply chains, and brand reputation.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-emerald-200">Brands Protected</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">$10B+</div>
              <div className="text-emerald-200">Revenue Impact</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">99.7%</div>
              <div className="text-emerald-200">Supply Chain Integrity</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">0</div>
              <div className="text-emerald-200">Counterfeit Breaches</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-emerald-500 to-green-400 flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Security</h3>
              <p className="text-gray-600 mb-6">
                OT/IT security convergence protecting production lines, industrial control systems, 
                and manufacturing operations.
              </p>
              <div className="text-sm text-emerald-600 font-semibold">Zero Production Downtime</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain Protection</h3>
              <p className="text-gray-600 mb-6">
                End-to-end supply chain security with IoT tracking, vendor risk management, 
                and logistics monitoring.
              </p>
              <div className="text-sm text-green-600 font-semibold">Real-time Tracking</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 flex items-center justify-center mb-6">
                <BarCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Anti-Counterfeiting</h3>
              <p className="text-gray-600 mb-6">
                Blockchain-enabled product authentication, serialization, and anti-counterfeiting solutions.
              </p>
              <div className="text-sm text-teal-600 font-semibold">100% Authentication Rate</div>
            </div>
          </div>

          {/* Industry Challenges */}
          <div className="bg-gradient-to-r from-emerald-500 to-green-400 rounded-3xl p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Consumer Goods Security Challenges</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <div className="w-6 h-6 bg-red-400 rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold mb-3">Counterfeiting</h4>
                <p className="text-emerald-200">$500B annual losses from counterfeit consumer goods.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold mb-3">Supply Chain Attacks</h4>
                <p className="text-emerald-200">Third-party vendor compromises affecting product integrity.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold mb-3">Brand Protection</h4>
                <p className="text-emerald-200">Online brand abuse and unauthorized distribution channels.</p>
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">KulpTech Solutions for Consumer Goods</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Product Security Features</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-green-400 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Digital Product Passports</h4>
                      <p className="text-gray-600">Blockchain-based authentication and traceability for every product unit.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-teal-400 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Market Surveillance</h4>
                      <p className="text-gray-600">AI-powered monitoring of online marketplaces for counterfeit products.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Global Distribution Security</h4>
                      <p className="text-gray-600">Secure logistics and distribution network protection worldwide.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Business Impact</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-700 font-semibold">Counterfeit Reduction</span>
                      <span className="text-emerald-600 font-bold">-92%</span>
                    </div>
                    <p className="text-sm text-gray-600">Annual reduction in counterfeit product incidents</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-700 font-semibold">Supply Chain Visibility</span>
                      <span className="text-green-600 font-bold">+85%</span>
                    </div>
                    <p className="text-sm text-gray-600">Improved real-time tracking and monitoring</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-700 font-semibold">Brand Trust Index</span>
                      <span className="text-teal-600 font-bold">+45%</span>
                    </div>
                    <p className="text-sm text-gray-600">Increased consumer confidence and brand loyalty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}