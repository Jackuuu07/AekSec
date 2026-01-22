import React from 'react';
import { Droplets, Shield, Factory, Zap, AlertTriangle, Globe, Cpu, Database } from 'lucide-react';

export default function OilGas() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-slate-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-slate-700 text-white">
        <div className="absolute inset-0 bg-opacity-20 bg-white"></div>
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Droplets className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-3">Oil & Gas Security</h1>
              <p className="text-xl opacity-90">Protecting critical energy infrastructure</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90 mb-12">
            KulpTech provides industrial cybersecurity solutions for upstream, midstream, 
            and downstream operations, protecting SCADA systems, drilling platforms, and refineries.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-gray-300">Refineries Secured</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Drilling Platforms</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">0</div>
              <div className="text-gray-300">Operational Disruptions</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">NERC</div>
              <div className="text-gray-300">CIP Compliant</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-gray-700 to-slate-600 flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Refinery Security</h3>
              <p className="text-gray-600 mb-6">
                Industrial control system protection, process safety security, 
                and refinery operations continuity.
              </p>
              <div className="text-sm text-gray-700 font-semibold">99.99% Uptime</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-slate-700 to-gray-600 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pipeline Security</h3>
              <p className="text-gray-600 mb-6">
                Pipeline monitoring, leak detection security, and SCADA system protection 
                for transmission networks.
              </p>
              <div className="text-sm text-slate-700 font-semibold">Real-time Monitoring</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-amber-700 to-orange-600 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Offshore Platform Security</h3>
              <p className="text-gray-600 mb-6">
                Satellite-connected security for offshore drilling platforms and 
                remote operations centers.
              </p>
              <div className="text-sm text-amber-700 font-semibold">Air-Gapped Solutions</div>
            </div>
          </div>

          {/* Critical Infrastructure Protection */}
          <div className="bg-gradient-to-r from-gray-800 to-slate-700 rounded-3xl p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Critical Infrastructure Protection</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Physical-Security Convergence</h4>
                    <p className="text-gray-300">Integration of cybersecurity with physical security systems for comprehensive protection.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">OT/IT Security Integration</h4>
                    <p className="text-gray-300">Unified security for operational technology and information technology networks.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Compliance Management</h4>
                    <p className="text-gray-300">NERC CIP, API 1164, and industry-specific regulatory compliance automation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Threat Intelligence</h4>
                    <p className="text-gray-300">Specialized threat intelligence for energy sector-specific attack vectors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Solutions */}
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">KulpTech Oil & Gas Security Solutions</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Core Security Features</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-800 mb-2">Industrial Firewall Protection</div>
                    <p className="text-gray-600">Purpose-built firewalls for SCADA and DCS systems with deep packet inspection.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-800 mb-2">Anomaly Detection</div>
                    <p className="text-gray-600">Behavioral analytics detecting abnormal operations in industrial control systems.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="font-bold text-gray-800 mb-2">Air-Gap Bridging</div>
                    <p className="text-gray-600">Secure data diode solutions for air-gapped industrial networks.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Operational Impact</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Safety Incident Reduction</span>
                      <span className="text-green-600 font-bold">-75%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 w-3/4"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Regulatory Compliance Time</span>
                      <span className="text-blue-600 font-bold">-60%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-2/3"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Operational Efficiency</span>
                      <span className="text-purple-600 font-bold">+30%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-400 w-1/3"></div>
                    </div>
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