import React from 'react';
import { TrendingUp, Shield, Activity, BarChart, Target, Clock } from 'lucide-react';

export default function CapitalMarkets() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-green-500 text-white">
        <div className="absolute inset-0 bg-opacity-20 bg-white"></div>
        <div className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <BarChart className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Capital Markets Security</h1>
              <p className="text-xl opacity-90">Securing high-frequency trading and financial markets</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90">
            KalpTech delivers ultra-low latency security solutions for capital markets, protecting 
            trading platforms, market data, and financial operations from cyber threats.
          </p>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-green-400 flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Low-Latency Protection</h3>
              <p className="text-gray-600 mb-4">Sub-millisecond security processing for high-frequency trading systems without performance impact.</p>
              <div className="text-sm text-emerald-600 font-semibold">&lt;1ms Response Time</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Manipulation Detection</h3>
              <p className="text-gray-600 mb-4">AI-powered algorithms detecting spoofing, layering, and other market abuse patterns.</p>
              <div className="text-sm text-green-600 font-semibold">Real-time Analysis</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 to-green-400 rounded-2xl p-12 text-white mb-16">
            <h3 className="text-2xl font-bold mb-8">Trading Platform Security</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.999%</div>
                <div className="text-emerald-100">Platform Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">&lt;50μs</div>
                <div className="text-emerald-100">Security Overhead</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-emerald-100">Regulatory Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}