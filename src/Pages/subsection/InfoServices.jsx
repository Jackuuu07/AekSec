import React from 'react';
import { Database, Shield, Network, BarChart, Lock, Cpu, Users, Key, Globe, FileCheck } from 'lucide-react';

export default function InfoServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-200 text-gray-900">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
                  <Database className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Information Services Security</h1>
                  <p className="text-xl text-gray-700">Protecting data intelligence, research, and information assets</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech provides comprehensive security solutions for information services providers, 
                research organizations, and data analytics platforms, ensuring the confidentiality, 
                integrity, and availability of critical information assets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Information Services Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our security solutions are designed to address the unique challenges of information 
              services providers, protecting sensitive data, research information, and analytical 
              assets across diverse platforms and delivery channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Classification & Protection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Automated data classification systems with tiered protection levels for sensitive 
                information, proprietary research data, and business intelligence assets.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <Lock className="w-4 h-4 mr-2" />
                Tiered protection
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">API Security & Integration</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive API security for data exchange platforms with advanced authentication, 
                rate limiting, and real-time threat detection for information services.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Cpu className="w-4 h-4 mr-2" />
                Secure integration
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics Platform Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Secure business intelligence and analytics environments with data masking, 
                anonymization, and role-based access controls for sensitive data analysis.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <Key className="w-4 h-4 mr-2" />
                Access controls
              </div>
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
                  Data Protection Framework
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Automated data classification and sensitivity labeling systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Information lifecycle management and retention policy enforcement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Data loss prevention for sensitive research and proprietary information</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  Access & Governance
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Fine-grained access controls for information services and data repositories</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">User behavior analytics for detecting anomalous data access patterns</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Audit trail management and compliance reporting capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Information Service Types */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Information Service Specialization</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our security solutions are tailored to meet the specific requirements of different 
                information service providers, ensuring appropriate protection for various data 
                types and delivery models.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BarChart className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Market Research</div>
                  <div className="text-sm text-gray-500">Analytics & insights</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">News Services</div>
                  <div className="text-sm text-gray-500">Content & media</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Financial Data</div>
                  <div className="text-sm text-gray-500">Market intelligence</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Research Databases</div>
                  <div className="text-sm text-gray-500">Academic & scientific</div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Information Technology Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's information services security platform integrates seamlessly with content 
              management systems, data warehouses, research platforms, and information delivery 
              systems. Our solutions are designed to work within existing information technology 
              infrastructure and service delivery models.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}