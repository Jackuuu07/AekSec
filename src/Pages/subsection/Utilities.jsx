import React from 'react';
import { Zap, Shield, Droplets, Wind, Cpu, AlertTriangle, Database, Globe, Lock, Network } from 'lucide-react';

export default function Utilities() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-200 text-gray-900">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
                  <Zap className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Utilities Security</h1>
                  <p className="text-xl text-gray-700">Protecting critical public infrastructure and essential services</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech provides comprehensive industrial cybersecurity solutions for utility 
                providers, protecting electric grids, water systems, gas networks, and other 
                essential public infrastructure with advanced SCADA security and critical 
                infrastructure protection.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Critical Infrastructure Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our utilities security solutions address the unique challenges of public infrastructure, 
              protecting operational technology, distribution networks, and essential services while 
              ensuring regulatory compliance and public safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Grid Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced protection for smart grids, electrical substations, and distribution 
                networks with real-time threat detection and operational security controls.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Threat detection
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Water System Protection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                SCADA security for water treatment facilities, pumping stations, and distribution 
                networks ensuring public health safety and water quality protection.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Cpu className="w-4 h-4 mr-2" />
                Operational security
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gas & Energy Networks</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Security for natural gas distribution, pipeline operations, and energy network 
                management with comprehensive infrastructure protection solutions.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <Database className="w-4 h-4 mr-2" />
                Network security
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
                  Operational Technology Security
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Supervisory control and data acquisition system protection and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Industrial control system security and process control network protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Remote terminal unit and programmable logic controller security management</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  Critical Infrastructure Protection
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Public safety and essential service continuity management and protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Regulatory compliance management for utility sector standards and requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Infrastructure resilience planning and disaster recovery coordination</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Utility Segments */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Utility Sector Specialization</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our utilities security solutions are tailored to meet the specific requirements 
                of different utility sectors, ensuring appropriate protection for various 
                essential services and public infrastructure operations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Electric Utilities</div>
                  <div className="text-sm text-gray-500">Power generation & distribution</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Water Utilities</div>
                  <div className="text-sm text-gray-500">Treatment & distribution</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Wind className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Gas Utilities</div>
                  <div className="text-sm text-gray-500">Natural gas distribution</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Network className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Public Works</div>
                  <div className="text-sm text-gray-500">Municipal services</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Features Overview */}
          <div className="bg-gradient-to-r from-gray-700 to-slate-600 rounded-2xl p-10 text-white mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Utility Security Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Renewable energy integration security and smart grid protection</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Internet of Things device protection for smart meters and sensors</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Advanced threat detection and anomaly monitoring systems</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Physical-cybersecurity convergence for critical infrastructure</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-3">Infrastructure Protection</h4>
                  <p className="text-gray-300">
                    Comprehensive security controls and protection mechanisms for 
                    essential public services and critical utility infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance & Standards */}
          <div className="bg-white rounded-xl shadow-lg p-10 border border-gray-200 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Security Standards & Compliance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="font-bold text-gray-800">Critical Infrastructure</div>
                <div className="text-sm text-gray-600">Protection standards</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="font-bold text-gray-800">Industrial Security</div>
                <div className="text-sm text-gray-600">Operational standards</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="font-bold text-gray-800">Security Framework</div>
                <div className="text-sm text-gray-600">Implementation guidance</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="font-bold text-gray-800">Certification</div>
                <div className="text-sm text-gray-600">Standards compliance</div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Utility Technology Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's utilities security platform integrates seamlessly with energy management 
              systems, water treatment controls, distribution network monitoring, and public works 
              operations technology. Our solutions are designed to work within existing utility 
              infrastructure and operational technology ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}