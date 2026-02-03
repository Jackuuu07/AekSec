import React from 'react';
import { Droplets, Shield, Factory, Zap, AlertTriangle, Globe, Cpu, Database, Lock, Network } from 'lucide-react';

export default function OilGas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-200 text-gray-900">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
                  <Droplets className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Oil & Gas Security</h1>
                  <p className="text-xl text-gray-700">Protecting critical energy infrastructure and industrial operations</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech provides comprehensive industrial cybersecurity solutions for upstream, 
                midstream, and downstream operations, protecting SCADA systems, drilling platforms, 
                refineries, and pipeline infrastructure from evolving cyber threats.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Energy Infrastructure Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our oil and gas security solutions address the unique challenges of energy 
              infrastructure, protecting operational technology, production systems, and 
              distribution networks while ensuring safety, compliance, and business continuity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Refinery Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Industrial control system protection, process safety security, and refinery 
                operations continuity management for refining and petrochemical facilities.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Process safety
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pipeline Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pipeline monitoring systems, leak detection security, and SCADA system protection 
                for oil and gas transmission networks and distribution infrastructure.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Transmission security
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Offshore Platform Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Satellite-connected security for offshore drilling platforms, remote operations 
                centers, and maritime energy production facilities.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <Lock className="w-4 h-4 mr-2" />
                Remote operations
              </div>
            </div>
          </div>

          {/* Detailed Capabilities */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-gray-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mr-4">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  Operational Technology Security
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">SCADA and distributed control system protection for energy operations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Industrial network segmentation and operational technology security controls</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Process control system security and manufacturing execution system protection</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  Critical Infrastructure Protection
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Physical-cybersecurity convergence for energy infrastructure protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Regulatory compliance management for energy sector standards and requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Threat intelligence and security monitoring for energy-specific attack vectors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Energy Sector Segments */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Energy Sector Specialization</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our oil and gas security solutions are tailored to meet the specific requirements 
                of different energy sector segments, ensuring appropriate protection for various 
                production, transportation, and distribution operations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Upstream Operations</div>
                  <div className="text-sm text-gray-500">Exploration & production</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Network className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Midstream Operations</div>
                  <div className="text-sm text-gray-500">Transportation & storage</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Downstream Operations</div>
                  <div className="text-sm text-gray-500">Refining & distribution</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Petrochemicals</div>
                  <div className="text-sm text-gray-500">Chemical processing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Overview */}
          <div className="bg-gradient-to-r from-gray-700 to-slate-600 rounded-2xl p-10 text-white mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Energy Security Considerations</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Operational technology and industrial control system security requirements</span>
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Critical infrastructure protection and national security considerations</span>
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Environmental safety and process security integration needs</span>
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Supply chain security and energy distribution protection requirements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Energy Security Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Industrial firewall protection for energy control systems</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Anomaly detection and behavioral analytics for energy operations</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Secure data transfer solutions for isolated industrial networks</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Regulatory compliance and industry standards implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="bg-white rounded-xl shadow-lg p-10 border border-gray-200 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Energy Security Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Lock className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Industrial Firewalls</div>
                <div className="text-sm text-gray-600">Control system protection</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Database className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Anomaly Detection</div>
                <div className="text-sm text-gray-600">Operational monitoring</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Network className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Network Segmentation</div>
                <div className="text-sm text-gray-600">Industrial isolation</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Globe className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Remote Operations</div>
                <div className="text-sm text-gray-600">Secure connectivity</div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Energy Technology Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's oil and gas security platform integrates seamlessly with energy management 
              systems, industrial control platforms, pipeline monitoring software, and refinery 
              operations technology. Our solutions are designed to work within existing energy 
              infrastructure and industrial operations frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}