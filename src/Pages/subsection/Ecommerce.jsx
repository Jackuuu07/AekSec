import React from 'react';
import { ShoppingCart, Shield, CreditCard, Package, Truck, TrendingUp, Users, Globe } from 'lucide-react';

export default function Ecommerce() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-500 text-white">
        <div className="absolute inset-0 bg-opacity-20 bg-white"></div>
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-3">E-commerce Security</h1>
              <p className="text-xl opacity-90">Protecting online stores and digital marketplaces</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90 mb-12">
            KalpTech delivers comprehensive security solutions for e-commerce platforms, 
            protecting transactions, customer data, and digital storefronts from evolving cyber threats.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">$50B+</div>
              <div className="text-amber-200">Transactions Protected</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-amber-200">Fraud Prevention</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">10M+</div>
              <div className="text-amber-200">Daily Sessions</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">PCI DSS</div>
              <div className="text-amber-200">Level 1 Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-red-400 flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Security</h3>
              <p className="text-gray-600 mb-6">
                PCI DSS compliant payment processing with tokenization, encryption, and real-time fraud detection.
              </p>
              <div className="text-sm text-orange-600 font-semibold">Zero Chargeback Fraud</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Account Protection</h3>
              <p className="text-gray-600 mb-6">
                Multi-factor authentication, credential monitoring, and account takeover prevention.
              </p>
              <div className="text-sm text-amber-600 font-semibold">95% Reduction in ATO</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-400 flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inventory Security</h3>
              <p className="text-gray-600 mb-6">
                Supply chain monitoring, inventory fraud detection, and vendor security management.
              </p>
              <div className="text-sm text-yellow-600 font-semibold">Real-time Tracking</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-red-500 to-pink-400 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Compliance</h3>
              <p className="text-gray-600 mb-6">
                GDPR, CCPA, and regional data protection compliance for international e-commerce.
              </p>
              <div className="text-sm text-red-600 font-semibold">50+ Countries</div>
            </div>
          </div>

          {/* E-commerce Threats */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-400 rounded-3xl p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Critical E-commerce Threats</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Payment Fraud</h4>
                    <p className="text-amber-200">Card-not-present fraud, chargebacks, and stolen payment information attacks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Credential Stuffing</h4>
                    <p className="text-amber-200">Automated attacks using stolen credentials from other breaches.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Inventory Scams</h4>
                    <p className="text-amber-200">Fake listings, price manipulation, and inventory fraud schemes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Supply Chain Attacks</h4>
                    <p className="text-amber-200">Third-party vendor compromises affecting e-commerce operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Security Features</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="font-bold text-gray-800">Real-time Fraud Detection</div>
                    <div className="text-sm text-gray-600">AI-powered analysis of transaction patterns</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                  <Users className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="font-bold text-gray-800">Customer Behavior Analytics</div>
                    <div className="text-sm text-gray-600">Pattern recognition for suspicious activities</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                  <Truck className="w-6 h-6 text-orange-500" />
                  <div>
                    <div className="font-bold text-gray-800">Supply Chain Monitoring</div>
                    <div className="text-sm text-gray-600">End-to-end security for logistics partners</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Performance Impact</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Checkout Conversion</span>
                    <span className="text-green-600 font-bold">+15%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Cart Abandonment</span>
                    <span className="text-blue-600 font-bold">-40%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-2/3"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Customer Trust Score</span>
                    <span className="text-purple-600 font-bold">+35%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-400 w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-400 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Secure Your E-commerce Platform</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Protect your online business with enterprise-grade security that builds customer trust 
                and drives revenue growth.
              </p>
              <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-colors">
                Get Security Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}