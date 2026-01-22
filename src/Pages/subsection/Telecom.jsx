import React from 'react';
import { Wifi, Shield, Satellite, Cpu, Network, Signal } from 'lucide-react';

export default function Telecom() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-500 text-white">
        <div className="absolute inset-0 bg-opacity-20 bg-white"></div>
        <div className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Satellite className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Telecommunications Security</h1>
              <p className="text-xl opacity-90">Securing network infrastructure and communications</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90">
            KulpTech protects telecom networks with comprehensive security for 5G, IoT, 
            and critical communication infrastructure against sophisticated cyber threats.
          </p>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-cyan-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-400 flex items-center justify-center mb-6">
                <Network className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5G Network Security</h3>
              <p className="text-gray-600 mb-4">End-to-end protection for 5G core networks, edge computing, and network slicing.</p>
              <div className="text-sm text-cyan-600 font-semibold">Zero Trust Architecture</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-400 flex items-center justify-center mb-6">
                <Wifi className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IoT Device Security</h3>
              <p className="text-gray-600 mb-4">Device authentication, secure onboarding, and continuous monitoring for connected devices.</p>
              <div className="text-sm text-blue-600 font-semibold">Millions of Devices</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}