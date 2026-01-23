import React from 'react';
import { Zap, Shield, Droplets, Wind, Cpu, AlertTriangle } from 'lucide-react';

export default function Utilities() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Utilities Security</h1>
              <p className="text-xl opacity-90">Protecting critical public infrastructure</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90 mb-8">
            KalpTech secures electric grids, water systems, and gas utilities with industrial-grade 
            cybersecurity solutions for SCADA systems and critical infrastructure.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">NERC CIP</div>
              <div className="text-blue-200 text-sm">Compliant</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">99.999%</div>
              <div className="text-blue-200 text-sm">Uptime</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-blue-200 text-sm">Utilities</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">0</div>
              <div className="text-blue-200 text-sm">Outages</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Grid Security</h3>
              <p className="text-gray-600 mb-4">
                Advanced protection for smart grids, substations, and distribution networks 
                with real-time threat detection.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <AlertTriangle className="w-5 h-5 mr-2" />
                24/7 SOC Monitoring
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-cyan-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-400 flex items-center justify-center mb-6">
                <Droplets className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Water System Protection</h3>
              <p className="text-gray-600 mb-4">
                SCADA security for water treatment plants, pumping stations, and distribution 
                networks ensuring public health safety.
              </p>
              <div className="flex items-center text-cyan-600 font-semibold">
                <Cpu className="w-5 h-5 mr-2" />
                OT Security
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl p-10 text-white mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Key Security Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Wind className="w-10 h-10 mx-auto mb-4 opacity-90" />
                <div className="font-bold">Renewable Integration</div>
                <div className="text-blue-200 text-sm">Solar/Wind Security</div>
              </div>
              <div className="text-center">
                <Cpu className="w-10 h-10 mx-auto mb-4 opacity-90" />
                <div className="font-bold">IoT Protection</div>
                <div className="text-blue-200 text-sm">Smart Meter Security</div>
              </div>
              <div className="text-center">
                <AlertTriangle className="w-10 h-10 mx-auto mb-4 opacity-90" />
                <div className="font-bold">Threat Detection</div>
                <div className="text-blue-200 text-sm">Anomaly Monitoring</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Compliance & Standards</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="font-bold text-blue-700">NERC CIP</div>
                <div className="text-sm text-gray-600">Standards 1-14</div>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-lg">
                <div className="font-bold text-cyan-700">IEC 62443</div>
                <div className="text-sm text-gray-600">Industrial Security</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="font-bold text-green-700">NIST CSF</div>
                <div className="text-sm text-gray-600">Framework</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="font-bold text-purple-700">ISO 27001</div>
                <div className="text-sm text-gray-600">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}