import React from 'react';
import { Server, Shield, Users, Cpu, Network, Zap, Database, Globe, FileCheck, Monitor } from 'lucide-react';

export default function ITServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-200 text-gray-900">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
                  <Server className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">IT Services Security</h1>
                  <p className="text-xl text-gray-700">Managed security services for IT infrastructure and enterprise operations</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech provides comprehensive managed security services for IT infrastructure, 
                cloud environments, enterprise networks, and digital operations, delivering 
                expert protection and operational excellence for modern technology environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Managed IT Security Services</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our comprehensive IT security services address the complete spectrum of technology 
              protection needs, from network infrastructure to endpoint security, providing 
              managed solutions that enhance security posture while optimizing operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Network Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Managed firewall services, intrusion detection systems, and network segmentation 
                with continuous monitoring and advanced threat protection for enterprise networks.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Continuous monitoring
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Endpoint Protection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive endpoint security solutions with endpoint detection and response, 
                antivirus protection, and device management for organizational endpoints.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Monitor className="w-4 h-4 mr-2" />
                Device management
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Incident Response</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Managed incident response services with rapid response capabilities, 
                forensic investigation expertise, and comprehensive incident management.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <Cpu className="w-4 h-4 mr-2" />
                Forensic investigation
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
                  Security Operations
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Security Operations Center with continuous monitoring and threat detection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Vulnerability management and security patch administration services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Security information and event management system operations</span>
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
                    <span className="text-gray-700">Regulatory compliance monitoring and reporting for industry standards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Security policy development and governance framework implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Risk assessment and security audit management services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">IT Security Service Areas</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our managed IT security services are designed to address diverse technology 
                environments and organizational requirements, providing specialized protection 
                across different IT service domains.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Server className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Infrastructure</div>
                  <div className="text-sm text-gray-500">Network & systems</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Cloud Services</div>
                  <div className="text-sm text-gray-500">Multi-cloud security</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">User Support</div>
                  <div className="text-sm text-gray-500">Identity & access</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Data Services</div>
                  <div className="text-sm text-gray-500">Protection & backup</div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Overview */}
          <div className="bg-gradient-to-r from-gray-700 to-slate-600 rounded-2xl p-10 text-white mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Managed Service Components</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Security Operations Center management and monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Vulnerability management and remediation services</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Compliance monitoring and regulatory reporting</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Threat intelligence and security analytics</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Service Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Cpu className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Operational efficiency and resource optimization</span>
                  </li>
                  <li className="flex items-center">
                    <Cpu className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Access to specialized security expertise and skills</span>
                  </li>
                  <li className="flex items-center">
                    <Cpu className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Predictable security operations and budgeting</span>
                  </li>
                  <li className="flex items-center">
                    <Cpu className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Continuous security improvement and innovation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">IT Operations Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's managed IT security services integrate seamlessly with existing IT 
              operations, service management platforms, technology infrastructure, and business 
              processes. Our solutions are designed to complement and enhance existing IT 
              service delivery models and operational frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}