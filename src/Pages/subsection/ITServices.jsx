import React from 'react';
import { Server, Shield, Users, Cpu, Network, Zap } from 'lucide-react';

export default function ITServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-slate-50 text-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-700 to-slate-600 text-white">
        <div className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Server className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">IT Services Security</h1>
              <p className="text-xl opacity-90">Managed security for IT operations</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90 mb-8">
            KulpTech provides comprehensive managed security services for IT infrastructure, 
            cloud environments, and enterprise networks.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-gray-300 text-sm">SOC Operations</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">99.99%</div>
              <div className="text-gray-300 text-sm">SLA Compliance</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-gray-300 text-sm">Clients</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">ISO 27001</div>
              <div className="text-gray-300 text-sm">Certified</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-gray-600 to-slate-500 flex items-center justify-center mb-6">
                <Network className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Network Security</h3>
              <p className="text-gray-600">
                Managed firewall, intrusion detection, and network segmentation 
                services with 24/7 monitoring.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-slate-600 to-gray-500 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Endpoint Protection</h3>
              <p className="text-gray-600">
                Comprehensive endpoint security with EDR, antivirus, and device 
                management for all endpoints.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Incident Response</h3>
              <p className="text-gray-600">
                24/7 incident response with guaranteed response times and 
                forensic investigation capabilities.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-700 to-slate-600 rounded-2xl p-10 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Managed Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-green-400 mr-3" />
                    <span>Security Operations Center (SOC)</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-green-400 mr-3" />
                    <span>Vulnerability Management</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-green-400 mr-3" />
                    <span>Compliance Monitoring</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Cpu className="w-5 h-5 text-blue-400 mr-3" />
                    <span>Reduced operational costs</span>
                  </li>
                  <li className="flex items-center">
                    <Cpu className="w-5 h-5 text-blue-400 mr-3" />
                    <span>Expert security staff</span>
                  </li>
                  <li className="flex items-center">
                    <Cpu className="w-5 h-5 text-blue-400 mr-3" />
                    <span>Predictable budgeting</span>
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