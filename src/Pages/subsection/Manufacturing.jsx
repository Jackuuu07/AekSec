import React from 'react';
import { Factory, Shield, Cpu, Package, TrendingUp, AlertTriangle, Database, Lock, Globe, CircuitBoard } from 'lucide-react';

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-200 text-gray-900">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
                  <Factory className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Manufacturing Security</h1>
                  <p className="text-xl text-gray-700">Protecting Industry 4.0 operations and smart factory infrastructure</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech provides comprehensive industrial cybersecurity solutions for smart factories 
                and manufacturing operations, protecting production lines, robotics systems, and 
                IoT-enabled manufacturing infrastructure from evolving cyber threats.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industrial Cybersecurity</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our manufacturing security solutions address the unique challenges of industrial 
              environments, protecting operational technology, production systems, and supply 
              chain operations while ensuring business continuity and product quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Factory Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive protection for IoT sensors, industrial robotics, and automated 
                production systems with real-time monitoring and anomaly detection capabilities.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Real-time monitoring
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain Protection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                End-to-end security for manufacturing supply chains, including just-in-time 
                production systems, logistics operations, and vendor relationship management.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Globe className="w-4 h-4 mr-2" />
                Logistics security
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Protection for quality control systems and production data integrity, 
                ensuring manufacturing standards compliance and product quality assurance.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <Database className="w-4 h-4 mr-2" />
                Data integrity
              </div>
            </div>
          </div>

          {/* Detailed Capabilities */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-gray-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mr-4">
                    <CircuitBoard className="w-6 h-6 text-white" />
                  </div>
                  Operational Technology Security
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Industrial control system protection and SCADA security management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Programmable logic controller security and manufacturing automation protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Industrial Internet of Things device security and network segmentation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  Intellectual Property Protection
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Product design and manufacturing process intellectual property security</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Proprietary formula and recipe protection for manufacturing processes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Research and development data security for manufacturing innovation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Manufacturing Segments */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Manufacturing Industry Specialization</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our manufacturing security solutions are tailored to meet the specific requirements 
                of different industrial sectors, ensuring appropriate protection for various 
                manufacturing processes and production environments.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Discrete Manufacturing</div>
                  <div className="text-sm text-gray-500">Automotive & electronics</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Package className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Process Manufacturing</div>
                  <div className="text-sm text-gray-500">Chemicals & pharmaceuticals</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">High-Tech Manufacturing</div>
                  <div className="text-sm text-gray-500">Semiconductors & components</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CircuitBoard className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Industrial Equipment</div>
                  <div className="text-sm text-gray-500">Machinery & heavy equipment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Overview */}
          <div className="bg-gradient-to-r from-gray-700 to-slate-600 rounded-2xl p-10 text-white mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Industrial Security Considerations</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Operational technology and production system security requirements</span>
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Intellectual property and manufacturing process protection needs</span>
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Supply chain security and logistics protection considerations</span>
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Regulatory compliance and industry standards requirements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Manufacturing Security Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Operational technology network segmentation and protection</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Industrial firewall and manufacturing system security controls</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Manufacturing security operations and monitoring services</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Supply chain security and vendor risk management solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Manufacturing Technology Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's manufacturing security platform integrates seamlessly with manufacturing 
              execution systems, enterprise resource planning platforms, industrial control 
              systems, and production management software. Our solutions are designed to work 
              within existing manufacturing technology ecosystems and industrial operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}