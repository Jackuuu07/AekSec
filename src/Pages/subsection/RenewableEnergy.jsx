import React from 'react';
import { Wind, Sun, Battery, Shield, Zap, TrendingUp } from 'lucide-react';

export default function RenewableEnergy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 text-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Wind className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Renewable Energy Security</h1>
              <p className="text-xl opacity-90">Protecting clean energy infrastructure</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90 mb-8">
            KalpTech secures solar farms, wind turbines, and energy storage systems 
            with specialized cybersecurity for green energy production.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">5GW+</div>
              <div className="text-emerald-200 text-sm">Capacity</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-emerald-200 text-sm">Grid Integration</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">ISO 27001</div>
              <div className="text-emerald-200 text-sm">Certified</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">0</div>
              <div className="text-emerald-200 text-sm">Downtime</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center mb-6">
                <Sun className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Solar Farm Security</h3>
              <p className="text-gray-600">
                Protection for PV systems, inverters, and solar tracking systems 
                with remote monitoring capabilities.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-emerald-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-center mb-6">
                <Wind className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wind Turbine Protection</h3>
              <p className="text-gray-600">
                Security for wind farm SCADA systems, turbine controllers, 
                and predictive maintenance platforms.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-teal-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-400 flex items-center justify-center mb-6">
                <Battery className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Energy Storage Security</h3>
              <p className="text-gray-600">
                Protection for battery storage systems, grid-scale storage, 
                and energy management systems.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-10 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Smart Grid Integration</h3>
                <p className="text-emerald-100 mb-6">
                  Secure integration of renewable energy sources with traditional 
                  power grids using advanced cybersecurity protocols.
                </p>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                  <span className="font-bold">Microgrid Security Solutions</span>
                </div>
              </div>
              <div className="bg-white/20 rounded-xl p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">40%</div>
                  <div className="text-emerald-200">Cost Reduction</div>
                  <div className="text-sm text-emerald-300">Operational efficiency gains</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}