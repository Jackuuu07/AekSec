import React from 'react';
import { Cloud, Shield, Lock, Users, Zap, Globe, Database, Cpu, FileCheck, Network } from 'lucide-react';

export default function SaaS() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-200 text-gray-900">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
                  <Cloud className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">SaaS Security</h1>
                  <p className="text-xl text-gray-700">Protecting cloud applications and software-as-a-service platforms</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech provides comprehensive security solutions for Software-as-a-Service applications, 
                delivering API protection, data encryption, compliance management, and multi-tenancy 
                security for cloud-native software platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SaaS Application Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our SaaS security solutions address the unique challenges of cloud-native applications, 
              protecting software platforms, customer data, and multi-tenant environments while 
              ensuring regulatory compliance and service reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Web application firewall protection, DDoS mitigation, and application layer 
                security for SaaS platforms and cloud-native software applications.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Zero trust architecture
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-tenancy Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Data isolation, tenant separation, and shared infrastructure security 
                for multi-tenant SaaS environments and customer data protection.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Database className="w-4 h-4 mr-2" />
                Data isolation
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">API Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive API protection, rate limiting, authentication, and 
                authorization security for SaaS platform integrations and services.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <Cpu className="w-4 h-4 mr-2" />
                Integration security
              </div>
            </div>
          </div>

          {/* Detailed Capabilities */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-gray-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mr-4">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  Platform Security Framework
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Continuous security monitoring and threat detection for SaaS platforms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Vulnerability management and security patch deployment automation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Incident response and security event management for cloud applications</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <FileCheck className="w-6 h-6 text-white" />
                  </div>
                  Compliance & Governance
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Regulatory compliance management for data protection and privacy regulations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Security certification preparation and compliance reporting automation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Audit trail management and security governance framework implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SaaS Categories */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">SaaS Platform Specialization</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our SaaS security solutions are tailored to meet the specific requirements 
                of different software categories and business applications, ensuring appropriate 
                protection for various cloud-based services and customer needs.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Business SaaS</div>
                  <div className="text-sm text-gray-500">Enterprise applications</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Data SaaS</div>
                  <div className="text-sm text-gray-500">Analytics & storage</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Collaboration SaaS</div>
                  <div className="text-sm text-gray-500">Communication tools</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Developer SaaS</div>
                  <div className="text-sm text-gray-500">Development tools</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Features Overview */}
          <div className="bg-gradient-to-r from-gray-700 to-slate-600 rounded-2xl p-10 text-white mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">SaaS Security Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-gray-300 mr-3" />
                    <span>API rate limiting and request throttling management</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Real-time threat detection and security monitoring systems</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Automated compliance reporting and audit documentation</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Data encryption and privacy protection controls</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-3">Platform Security Management</h4>
                  <p className="text-gray-300">
                    Comprehensive security controls and protection mechanisms for 
                    cloud-native software applications and service delivery platforms
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Solutions */}
          <div className="bg-white rounded-xl shadow-lg p-10 border border-gray-200 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">SaaS Security Solutions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Shield className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Application Security</div>
                <div className="text-sm text-gray-600">Platform protection</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Database className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Data Security</div>
                <div className="text-sm text-gray-600">Multi-tenancy</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Network className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">API Security</div>
                <div className="text-sm text-gray-600">Integration protection</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Globe className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Compliance</div>
                <div className="text-sm text-gray-600">Regulatory management</div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">SaaS Technology Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's SaaS security platform integrates seamlessly with cloud infrastructure, 
              application development frameworks, identity management systems, and data storage 
              platforms. Our solutions are designed to work within existing software development 
              and cloud operations ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}