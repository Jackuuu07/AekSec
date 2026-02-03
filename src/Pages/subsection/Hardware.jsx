import React from 'react';
import { Cpu, Shield, Server, Lock, Zap, Database, Key, Globe, Factory, CircuitBoard } from 'lucide-react';

export default function Hardware() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-200 text-gray-900">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
                  <Cpu className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Hardware Security</h1>
                  <p className="text-xl text-gray-700">Protecting physical devices, embedded systems, and hardware components</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech provides comprehensive hardware security solutions for embedded systems, 
                IoT devices, enterprise hardware, and critical infrastructure with root-of-trust 
                protection and physical security controls.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hardware Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our hardware security solutions address the unique challenges of physical devices 
              and embedded systems, providing foundational security from the silicon level up 
              through complete hardware ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Embedded Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hardware security modules, secure boot processes, and firmware protection 
                for embedded systems and Internet of Things devices across industries.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <Key className="w-4 h-4 mr-2" />
                Hardware root of trust
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Server Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Physical server protection, hardware-based encryption systems, and secure 
                data center infrastructure for enterprise computing environments.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Tamper detection systems
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Component verification, manufacturing security, and supply chain integrity 
                for hardware devices from design through production and distribution.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <Database className="w-4 h-4 mr-2" />
                Supply chain integrity
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
                  Hardware Security Framework
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Hardware security module integration and cryptographic acceleration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Secure boot processes and firmware validation mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Trusted platform module compliance and hardware-based attestation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  Physical Security Controls
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Tamper detection and physical intrusion prevention systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Hardware-based encryption and key management solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Hardware security testing and vulnerability assessment services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hardware Categories */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Hardware Security Specialization</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our hardware security solutions are tailored to meet the specific requirements 
                of different hardware types and application domains, ensuring appropriate 
                protection for various physical computing environments.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Embedded Systems</div>
                  <div className="text-sm text-gray-500">Industrial & automotive</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">IoT Devices</div>
                  <div className="text-sm text-gray-500">Connected hardware</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Server className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Enterprise Hardware</div>
                  <div className="text-sm text-gray-500">Servers & infrastructure</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Network Devices</div>
                  <div className="text-sm text-gray-500">Routers & switches</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Solutions Overview */}
          <div className="bg-white rounded-xl shadow-lg p-10 border border-gray-200 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Hardware Security Solutions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Lock className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">HSM Integration</div>
                <div className="text-sm text-gray-600">Cryptographic acceleration</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Shield className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Secure Boot</div>
                <div className="text-sm text-gray-600">Firmware validation</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Database className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Supply Chain</div>
                <div className="text-sm text-gray-600">Component verification</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <CircuitBoard className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Hardware Testing</div>
                <div className="text-sm text-gray-600">Security assessment</div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Hardware Technology Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's hardware security solutions integrate seamlessly with device manufacturing 
              processes, hardware design platforms, embedded development environments, and enterprise 
              infrastructure management systems. Our solutions are designed to work within existing 
              hardware development and deployment ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}