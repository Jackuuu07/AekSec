import React from 'react';
import { Cpu, Shield, Wifi, Database, Globe, Lock, Zap, Network, Users, AlertTriangle } from 'lucide-react';

export default function IoT() {
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
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">IoT Security</h1>
                  <p className="text-xl text-gray-700">Protecting connected devices and smart ecosystems</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech provides comprehensive security solutions for Internet of Things ecosystems, 
                protecting connected devices, edge computing infrastructure, and IoT data flows 
                across industrial, commercial, and consumer applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IoT Ecosystem Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our IoT security solutions address the unique challenges of connected device environments, 
              providing end-to-end protection for device communication, data integrity, and ecosystem 
              operations across diverse deployment scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Device Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hardware-level security, secure boot processes, and firmware protection for 
                IoT devices across industrial, commercial, and consumer applications.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <Lock className="w-4 h-4 mr-2" />
                Secure provisioning
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Communication Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Encrypted communication protocols, secure wireless transmission, and network 
                protection for IoT device connectivity and data exchange.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Encrypted protocols
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                End-to-end data protection, secure cloud integration, and privacy management 
                for IoT-generated information across processing and storage layers.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <Globe className="w-4 h-4 mr-2" />
                Cloud integration
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
                  IoT Security Framework
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Secure device onboarding and identity management for IoT ecosystems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Edge computing security and local processing protection for IoT networks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Over-the-air update security and firmware management for connected devices</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  Threat Management
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Anomaly detection and behavioral monitoring for IoT device operations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Botnet prevention and distributed denial-of-service attack protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Vulnerability assessment and security testing for IoT device ecosystems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* IoT Application Segments */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">IoT Application Specialization</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our IoT security solutions are tailored to meet the specific requirements 
                of different application domains, ensuring appropriate protection for various 
                connected device implementations and use cases.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Industrial IoT</div>
                  <div className="text-sm text-gray-500">Manufacturing & automation</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Consumer IoT</div>
                  <div className="text-sm text-gray-500">Smart home & wearables</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Smart Cities</div>
                  <div className="text-sm text-gray-500">Infrastructure & utilities</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Healthcare IoT</div>
                  <div className="text-sm text-gray-500">Medical & wellness devices</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Architecture */}
          <div className="bg-gradient-to-r from-gray-700 to-slate-600 rounded-2xl p-10 text-white mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">IoT Security Architecture</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Layered security approach covering device, network, and cloud components</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Hardware-based security modules and trusted execution environments</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Secure lifecycle management from manufacturing through decommissioning</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Privacy by design implementation and data protection controls</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-3">Ecosystem Protection</h4>
                  <p className="text-gray-300">
                    Comprehensive security framework addressing the complete IoT ecosystem, 
                    from individual devices through network infrastructure to cloud services
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="bg-white rounded-xl shadow-lg p-10 border border-gray-200 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">IoT Security Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Lock className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Device Security</div>
                <div className="text-sm text-gray-600">Hardware protection</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Network className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Network Security</div>
                <div className="text-sm text-gray-600">Communication protection</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Database className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Data Security</div>
                <div className="text-sm text-gray-600">Information protection</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Globe className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Cloud Security</div>
                <div className="text-sm text-gray-600">Platform protection</div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">IoT Technology Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's IoT security platform integrates seamlessly with device management systems, 
              cloud IoT platforms, network infrastructure, and application ecosystems. Our solutions 
              are designed to work within existing IoT technology stacks and operational environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
