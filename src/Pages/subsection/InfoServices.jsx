import React from 'react';
import { Database, Shield, Network, BarChart, Lock, Cpu } from 'lucide-react';

export default function InfoServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-700 to-gray-600 text-white">
        <div className="absolute inset-0 bg-opacity-20 bg-white"></div>
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Database className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-3">Information Services Security</h1>
              <p className="text-xl opacity-90">Protecting data intelligence and information assets</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90 mb-12">
            KalpTech secures data analytics platforms, research databases, and information services 
            with advanced encryption, access controls, and threat intelligence.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-slate-200">Data Platforms</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">PB/Day</div>
              <div className="text-slate-200">Data Protected</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">99.99%</div>
              <div className="text-slate-200">Uptime SLA</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">ISO 27001</div>
              <div className="text-slate-200">Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-slate-600 to-gray-500 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Classification & Protection</h3>
              <p className="text-gray-600 mb-6">
                Automated data classification with tiered protection levels for sensitive information, 
                research data, and proprietary intelligence.
              </p>
              <div className="flex items-center text-slate-600 font-semibold">
                <Lock className="w-5 h-5 mr-2" />
                Multi-layer Encryption
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">API Security & Integration</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive API security for data exchange platforms with rate limiting, 
                authentication, and real-time threat detection.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <Cpu className="w-5 h-5 mr-2" />
                10K+ API Endpoints
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mb-6">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics Platform Security</h3>
              <p className="text-gray-600 mb-6">
                Secure business intelligence and analytics environments with data masking, 
                anonymization, and role-based access controls.
              </p>
              <div className="flex items-center text-purple-600 font-semibold">
                <Database className="w-5 h-5 mr-2" />
                GDPR Compliant
              </div>
            </div>
          </div>

          {/* Industry Challenges */}
          <div className="bg-gradient-to-r from-slate-700 to-gray-600 rounded-3xl p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Information Services Challenges</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Data Breach Prevention</h4>
                    <p className="text-slate-300">Protecting sensitive research data and proprietary information from unauthorized access.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Compliance Management</h4>
                    <p className="text-slate-300">Meeting GDPR, CCPA, and industry-specific data protection regulations.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Third-party Risk</h4>
                    <p className="text-slate-300">Managing security risks from data providers, analytics tools, and integration partners.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Data Integrity</h4>
                    <p className="text-slate-300">Ensuring accuracy and reliability of information while preventing tampering.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">KalpTech Solutions</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Security Architecture</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Data Loss Prevention</h4>
                      <p className="text-gray-600">Advanced DLP solutions preventing unauthorized data transfers and leaks.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">Zero Trust Framework</h4>
                      <p className="text-gray-600">Continuous verification and least privilege access for all data interactions.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Implementation Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Data Breach Reduction</span>
                    <span className="text-green-600 font-bold">-85%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Compliance Efficiency</span>
                    <span className="text-blue-600 font-bold">+60%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Incident Response Time</span>
                    <span className="text-purple-600 font-bold">-75%</span>
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