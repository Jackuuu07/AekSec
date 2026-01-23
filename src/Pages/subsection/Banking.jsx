import React from 'react';
import { Shield, Lock, DollarSign, TrendingUp, AlertTriangle, Cpu } from 'lucide-react';

export default function Banking() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="absolute inset-0 bg-opacity-20 bg-white"></div>
        <div className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <DollarSign className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Banking Security</h1>
              <p className="text-xl opacity-90">Protecting financial transactions and customer trust</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90">
            KalpTech provides comprehensive security solutions for banking institutions, safeguarding 
            transactions, customer data, and financial systems from sophisticated cyber threats.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transaction Security</h3>
              <p className="text-gray-600 mb-4">Real-time fraud detection and prevention systems securing billions in daily transactions.</p>
              <div className="text-sm text-blue-600 font-semibold">99.99% Accuracy Rate</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-cyan-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-400 flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance Solutions</h3>
              <p className="text-gray-600 mb-4">Automated compliance monitoring for GDPR, PSD2, SOC 2, and banking regulations.</p>
              <div className="text-sm text-cyan-600 font-semibold">24/7 Compliance</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-400 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Banking Protection</h3>
              <p className="text-gray-600 mb-4">Secure mobile banking, online portals, and API-based financial services.</p>
              <div className="text-sm text-indigo-600 font-semibold">Zero Trust Architecture</div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl p-12 text-white mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Financial Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$2.3T</div>
                <div className="text-blue-100">Assets Protected</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.98%</div>
                <div className="text-blue-100">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">0</div>
                <div className="text-blue-100">Successful Breaches</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Banking Security Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Core Protection</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Real-time transaction monitoring
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    API security for open banking
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Mobile banking threat detection
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Advanced Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    AI-powered fraud prevention
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Quantum-safe encryption
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    24/7 SOC monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}