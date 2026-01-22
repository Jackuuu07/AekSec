import React from 'react';
import { Cloud, Shield, Lock, Users, Zap, Globe } from 'lucide-react';

export default function SaaS() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 text-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Cloud className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">SaaS Security</h1>
              <p className="text-xl opacity-90">Protecting cloud applications</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90 mb-8">
            KulpTech provides comprehensive security for SaaS applications with 
            API protection, data encryption, and compliance management.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">SOC 2</div>
              <div className="text-blue-200 text-sm">Type II</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">99.99%</div>
              <div className="text-blue-200 text-sm">Uptime SLA</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">5000+</div>
              <div className="text-blue-200 text-sm">Applications</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">GDPR</div>
              <div className="text-blue-200 text-sm">Compliant</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Security</h3>
              <p className="text-gray-600 mb-4">
                WAF protection, DDoS mitigation, and application layer security 
                for SaaS platforms and web applications.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <Shield className="w-5 h-5 mr-2" />
                Zero Trust Architecture
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-cyan-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-400 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-tenancy Security</h3>
              <p className="text-gray-600 mb-4">
                Data isolation, tenant separation, and shared infrastructure 
                security for multi-tenant SaaS environments.
              </p>
              <div className="flex items-center text-cyan-600 font-semibold">
                <Globe className="w-5 h-5 mr-2" />
                Global Compliance
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl p-10 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">SaaS Security Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-yellow-400 mr-3" />
                    <span>API rate limiting & throttling</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-yellow-400 mr-3" />
                    <span>Real-time threat detection</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-yellow-400 mr-3" />
                    <span>Automated compliance reporting</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/20 rounded-xl p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">85%</div>
                  <div className="text-blue-200">Reduction in</div>
                  <div className="text-sm text-blue-300">Security incidents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}