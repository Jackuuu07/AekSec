import React from 'react';
import { Factory, Shield, Cpu, Package, TrendingUp, AlertTriangle } from 'lucide-react';

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-50 text-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-700 to-gray-600 text-white">
        <div className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Factory className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Manufacturing Security</h1>
              <p className="text-xl opacity-90">Protecting Industry 4.0 operations</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90 mb-8">
            KalpTech provides industrial cybersecurity for smart factories, protecting 
            production lines, robotics, and IoT manufacturing systems.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">1000+</div>
              <div className="text-slate-200 text-sm">Factories</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">99.95%</div>
              <div className="text-slate-200 text-sm">Production Uptime</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">$5B+</div>
              <div className="text-slate-200 text-sm">Revenue Protected</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">IEC 62443</div>
              <div className="text-slate-200 text-sm">Certified</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-slate-600 to-gray-500 flex items-center justify-center mb-6">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Factory Security</h3>
              <p className="text-gray-600">
                Protection for IoT sensors, robotics, and automated production systems 
                with real-time monitoring.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-gray-600 to-slate-500 flex items-center justify-center mb-6">
                <Package className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain Protection</h3>
              <p className="text-gray-600">
                End-to-end security for manufacturing supply chains and just-in-time 
                production systems.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Security for quality control systems and production data integrity 
                ensuring manufacturing standards.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-700 to-gray-600 rounded-2xl p-10 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Industrial Threats</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-400 mr-3" />
                    <span>Ransomware targeting production lines</span>
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3" />
                    <span>Intellectual property theft</span>
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-blue-400 mr-3" />
                    <span>Supply chain compromises</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">KalpTech Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-green-400 mr-3" />
                    <span>OT network segmentation</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-green-400 mr-3" />
                    <span>Industrial firewall protection</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-green-400 mr-3" />
                    <span>24/7 SOC for manufacturing</span>
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