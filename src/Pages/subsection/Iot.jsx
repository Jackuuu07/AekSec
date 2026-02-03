
import React from 'react';
import { Cpu, Shield, CircuitBoard, Microchip, Zap, Database, Globe, Lock, Network, Factory } from 'lucide-react';

export default function Electronics() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-200 text-gray-900">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
                  <Microchip className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Electronics Security</h1>
                  <p className="text-xl text-gray-700">Protecting electronic components and embedded systems</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech provides comprehensive security solutions for electronic systems, 
                protecting semiconductors, embedded devices, and electronic components 
                throughout their lifecycle from design through deployment and operation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Electronic Systems Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our electronics security solutions address the unique challenges of hardware-based 
              systems, providing protection for semiconductor components, embedded processors, 
              and electronic devices across industrial, consumer, and critical applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <Microchip className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Semiconductor Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hardware-level protection for semiconductor components, integrated circuits, 
                and system-on-chip designs with secure manufacturing and supply chain controls.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <Lock className="w-4 h-4 mr-2" />
                Hardware protection
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <CircuitBoard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Embedded Systems Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive protection for embedded processors, microcontroller units, 
                and real-time operating systems with secure boot and firmware validation.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Firmware security
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Electronic Device Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                End-to-end security for electronic devices, consumer electronics, and 
                industrial equipment with hardware-based encryption and tamper detection.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <Database className="w-4 h-4 mr-2" />
                Device integrity
              </div>
            </div>
          </div>

          {/* Detailed Capabilities */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-gray-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  Hardware Security Framework
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Secure element integration and hardware security module implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Trusted platform modules and hardware root of trust establishment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Physical unclonable functions and hardware-based authentication mechanisms</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  Manufacturing & Supply Chain Security
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Secure semiconductor fabrication and manufacturing process protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Supply chain verification and component authenticity validation systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Hardware Trojan detection and countermeasure implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Electronics Segments */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Electronics Industry Specialization</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our electronics security solutions are tailored to meet the specific requirements 
                of different electronics segments, ensuring appropriate protection for various 
                component types and application domains.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Microchip className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Semiconductors</div>
                  <div className="text-sm text-gray-500">Chips & processors</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CircuitBoard className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Consumer Electronics</div>
                  <div className="text-sm text-gray-500">Devices & appliances</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Industrial Electronics</div>
                  <div className="text-sm text-gray-500">Control systems</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Network className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Medical Electronics</div>
                  <div className="text-sm text-gray-500">Healthcare devices</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Architecture */}
          <div className="bg-gradient-to-r from-gray-700 to-slate-600 rounded-2xl p-10 text-white mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Electronics Security Architecture</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Hardware-based security implementation and physical protection mechanisms</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Secure boot processes and firmware integrity verification systems</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Side-channel attack protection and electromagnetic interference shielding</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Hardware-software co-design for comprehensive security integration</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-3">Component-Level Protection</h4>
                  <p className="text-gray-300">
                    Comprehensive security framework addressing electronic components 
                    from semiconductor level through complete system integration
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="bg-white rounded-xl shadow-lg p-10 border border-gray-200 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Electronics Security Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Lock className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Hardware Security</div>
                <div className="text-sm text-gray-600">Component protection</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <CircuitBoard className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Firmware Security</div>
                <div className="text-sm text-gray-600">Embedded protection</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Factory className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Supply Chain</div>
                <div className="text-sm text-gray-600">Manufacturing security</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Globe className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Device Security</div>
                <div className="text-sm text-gray-600">End-to-end protection</div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Electronics Technology Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's electronics security platform integrates seamlessly with electronic design 
              automation tools, manufacturing execution systems, supply chain management platforms, 
              and device management solutions. Our solutions are designed to work within existing 
              electronics development and production ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}