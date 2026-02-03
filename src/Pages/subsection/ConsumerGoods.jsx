import React from 'react';
import { Package, Shield, Factory, Truck, TrendingUp, Barcode, Users, Globe, Lock, Cpu } from 'lucide-react';

export default function ConsumerGoods() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-200 text-gray-900">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
                  <Package className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Consumer Goods Security</h1>
                  <p className="text-xl text-gray-700">Protecting brands, supply chains, and manufacturing operations</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech provides comprehensive security solutions for consumer goods manufacturers 
                and distributors, protecting intellectual property, securing supply chains, and 
                safeguarding brand reputation across global markets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Consumer Goods Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our security solutions address the unique challenges of consumer goods companies, 
              protecting manufacturing operations, supply chains, and brand integrity across 
              global distribution networks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Converged OT/IT security protecting production lines, industrial control systems, 
                and manufacturing operations from cyber threats and operational disruptions.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Production protection
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain Protection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                End-to-end supply chain security with IoT tracking, vendor risk management, 
                and logistics monitoring for consumer goods distribution networks.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Globe className="w-4 h-4 mr-2" />
                Logistics security
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Anti-Counterfeiting Solutions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced product authentication and anti-counterfeiting solutions with 
                serialization and blockchain-enabled verification for consumer products.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <Lock className="w-4 h-4 mr-2" />
                Product authentication
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
                  Manufacturing & Operations Security
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Industrial control system protection for production facilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Formula and recipe protection for proprietary product formulations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Quality control system security and data integrity protection</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  Brand & Market Protection
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Online brand monitoring and counterfeit product detection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Distributor and retailer relationship security management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Market intelligence and competitive information protection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Consumer Goods Categories */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Consumer Goods Specialization</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our security solutions are tailored to meet the specific requirements of different 
                consumer goods categories, ensuring appropriate protection for various product 
                types and market segments.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Package className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Packaged Goods</div>
                  <div className="text-sm text-gray-500">Food & beverages</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Electronics</div>
                  <div className="text-sm text-gray-500">Consumer technology</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Personal Care</div>
                  <div className="text-sm text-gray-500">Health & beauty</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Household Goods</div>
                  <div className="text-sm text-gray-500">Home & cleaning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Manufacturing Technology Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's consumer goods security platform integrates seamlessly with manufacturing 
              execution systems, supply chain management platforms, enterprise resource planning 
              systems, and retail distribution networks. Our solutions are designed to work within 
              existing manufacturing and distribution technology ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}