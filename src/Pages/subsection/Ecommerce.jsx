import React from 'react';
import { ShoppingCart, Shield, CreditCard, Package, Truck, TrendingUp, Users, Globe, Lock, Cpu, Database, FileCheck } from 'lucide-react';

export default function Ecommerce() {
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
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">E-commerce Security</h1>
                  <p className="text-xl text-gray-700">Protecting online stores, marketplaces, and digital transactions</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech provides comprehensive security solutions for e-commerce platforms and 
                online retailers, protecting transactions, customer data, and digital storefronts 
                from evolving cyber threats while ensuring regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">E-commerce Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our security solutions address the unique challenges of online retail and e-commerce 
              platforms, protecting payment systems, customer accounts, and supply chain operations 
              across digital marketplaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <CreditCard className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Security</h3>
              <p className="text-gray-600 leading-relaxed">
                PCI DSS compliant payment processing with advanced tokenization, encryption, 
                and real-time fraud detection for secure transactions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Account Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Multi-factor authentication, credential monitoring, and account takeover 
                prevention for customer account security.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <Package className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inventory Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Supply chain monitoring, inventory fraud detection, and vendor security 
                management for e-commerce operations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-slate-800 to-gray-900 flex items-center justify-center mb-6 shadow-md">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                International data protection compliance including GDPR, CCPA, and regional 
                regulations for global e-commerce operations.
              </p>
            </div>
          </div>

          {/* Detailed Capabilities */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-gray-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mr-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  Transaction & Payment Security
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Real-time fraud detection and transaction monitoring systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Secure payment gateway integration and payment card data protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Chargeback prevention and dispute management security</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  Customer & Platform Security
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Customer data protection and privacy management compliance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">E-commerce platform security and content management system protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Shopping cart and checkout process security optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* E-commerce Segments */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">E-commerce Platform Specialization</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our security solutions are tailored to meet the specific requirements of different 
                e-commerce models and platform types, ensuring appropriate protection for various 
                online retail operations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Online Retailers</div>
                  <div className="text-sm text-gray-500">Direct-to-consumer</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Marketplaces</div>
                  <div className="text-sm text-gray-500">Multi-vendor platforms</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Subscription Services</div>
                  <div className="text-sm text-gray-500">Recurring revenue models</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Dropshipping</div>
                  <div className="text-sm text-gray-500">Third-party fulfillment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Features Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Security Framework Features</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-gray-700" />
                  <div>
                    <div className="font-bold text-gray-800">Real-time Fraud Detection</div>
                    <div className="text-sm text-gray-600">AI-powered analysis of transaction patterns and behaviors</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Lock className="w-6 h-6 text-gray-700" />
                  <div>
                    <div className="font-bold text-gray-800">Customer Privacy Management</div>
                    <div className="text-sm text-gray-600">Comprehensive data protection and privacy controls</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <FileCheck className="w-6 h-6 text-gray-700" />
                  <div>
                    <div className="font-bold text-gray-800">Regulatory Compliance</div>
                    <div className="text-sm text-gray-600">Automated compliance monitoring and reporting</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Platform Protection</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Cpu className="w-6 h-6 text-gray-700" />
                  <div>
                    <div className="font-bold text-gray-800">Website Security</div>
                    <div className="text-sm text-gray-600">Web application firewall and DDoS protection</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-6 h-6 text-gray-700" />
                  <div>
                    <div className="font-bold text-gray-800">Mobile Commerce Security</div>
                    <div className="text-sm text-gray-600">Protection for mobile apps and responsive platforms</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Database className="w-6 h-6 text-gray-700" />
                  <div>
                    <div className="font-bold text-gray-800">Data Security</div>
                    <div className="text-sm text-gray-600">Customer information and transaction data protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">E-commerce Technology Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's e-commerce security platform integrates seamlessly with shopping cart 
              systems, payment gateways, inventory management platforms, and customer relationship 
              management tools. Our solutions are designed to work within existing e-commerce 
              technology ecosystems and retail operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}