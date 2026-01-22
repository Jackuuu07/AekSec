import React from 'react';
import { Cpu, Shield, Server, Lock, Zap } from 'lucide-react';

export default function Hardware() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 text-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-500 text-white">
        <div className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Cpu className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Hardware Security</h1>
              <p className="text-xl opacity-90">Protecting physical devices and components</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90 mb-8">
            KulpTech provides hardware security solutions for embedded systems, 
            IoT devices, and enterprise hardware with root-of-trust protection.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">TPM 2.0</div>
              <div className="text-amber-200 text-sm">Compliant</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">100M+</div>
              <div className="text-amber-200 text-sm">Devices</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">0</div>
              <div className="text-amber-200 text-sm">Hardware Breaches</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">NIST</div>
              <div className="text-amber-200 text-sm">SP 800-193</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Embedded Security</h3>
              <p className="text-gray-600 mb-4">
                Hardware security modules, secure boot, and firmware protection 
                for embedded systems and IoT devices.
              </p>
              <div className="flex items-center text-amber-600 font-semibold">
                <Lock className="w-5 h-5 mr-2" />
                Hardware Root of Trust
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-400 flex items-center justify-center mb-6">
                <Server className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Server Security</h3>
              <p className="text-gray-600 mb-4">
                Physical server protection, hardware-based encryption, 
                and secure data center infrastructure.
              </p>
              <div className="flex items-center text-orange-600 font-semibold">
                <Shield className="w-5 h-5 mr-2" />
                Tamper Detection
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Hardware Security Solutions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-amber-50 rounded-xl">
                <Cpu className="w-10 h-10 text-amber-600 mx-auto mb-4" />
                <div className="font-bold text-gray-800">HSM Integration</div>
                <div className="text-sm text-gray-600">Crypto acceleration</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <Lock className="w-10 h-10 text-orange-600 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Secure Boot</div>
                <div className="text-sm text-gray-600">Firmware validation</div>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <Shield className="w-10 h-10 text-red-600 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Supply Chain</div>
                <div className="text-sm text-gray-600">Component verification</div>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-xl">
                <Zap className="w-10 h-10 text-yellow-600 mx-auto mb-4" />
                <div className="font-bold text-gray-800">IoT Security</div>
                <div className="text-sm text-gray-600">Device authentication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}