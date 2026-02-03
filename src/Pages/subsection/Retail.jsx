import React from 'react';
import { ShoppingCart, Shield, CreditCard, Package, Store, TrendingUp, Users, Database, Globe, Lock } from 'lucide-react';

export default function Retail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-200 text-gray-900">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
                  <ShoppingCart className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Retail Security</h1>
                  <p className="text-xl text-gray-700">Securing commerce, customer trust, and retail operations</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech provides comprehensive security solutions for retail businesses, 
                protecting payment systems, e-commerce platforms, supply chain operations, 
                and customer data across physical and digital retail environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Retail Industry Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our retail security solutions address the unique challenges of commerce operations, 
              protecting customer transactions, supply chain integrity, and brand reputation 
              across both physical stores and digital marketplaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                PCI DSS compliant payment processing with real-time fraud detection, 
                tokenization, and secure transaction management for retail operations.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Transaction protection
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Store className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce Protection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Secure online shopping experiences with bot management, DDoS protection, 
                and comprehensive e-commerce platform security solutions.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Globe className="w-4 h-4 mr-2" />
                Online security
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                End-to-end supply chain protection for retail operations, including 
                inventory management, logistics security, and vendor relationship management.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <Database className="w-4 h-4 mr-2" />
                Inventory protection
              </div>
            </div>
          </div>

          {/* Detailed Capabilities */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-gray-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mr-4">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  Customer & Transaction Security
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Point-of-sale system security and payment terminal protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Customer data protection and privacy management compliance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Loyalty program and customer relationship management security</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  Retail Operations Security
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Retail store network security and in-store technology protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Inventory management system security and stock control protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Employee access management and retail staff security training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Retail Segments */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Retail Industry Specialization</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our retail security solutions are tailored to meet the specific requirements 
                of different retail formats and business models, ensuring appropriate protection 
                for various commerce operations and customer engagement strategies.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Store className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Brick & Mortar</div>
                  <div className="text-sm text-gray-500">Physical retail stores</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">E-commerce</div>
                  <div className="text-sm text-gray-500">Online retail platforms</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Omnichannel</div>
                  <div className="text-sm text-gray-500">Integrated retail</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Package className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Marketplaces</div>
                  <div className="text-sm text-gray-500">Multi-vendor platforms</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="bg-white rounded-xl shadow-lg p-10 border border-gray-200 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Retail Security Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <CreditCard className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Payment Security</div>
                <div className="text-sm text-gray-600">Transaction protection</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Lock className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Data Protection</div>
                <div className="text-sm text-gray-600">Customer privacy</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Database className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Inventory Security</div>
                <div className="text-sm text-gray-600">Supply chain protection</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Shield className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Platform Security</div>
                <div className="text-sm text-gray-600">Retail systems</div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Retail Technology Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's retail security platform integrates seamlessly with point-of-sale systems, 
              e-commerce platforms, inventory management software, customer relationship management 
              tools, and supply chain management systems. Our solutions are designed to work within 
              existing retail technology ecosystems and commerce operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}