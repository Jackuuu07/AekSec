import React from 'react';
import { Cloud, Server, Shield, Database, Globe, Zap } from 'lucide-react';

export default function CloudServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 text-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Cloud className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Cloud Services Security</h1>
              <p className="text-xl opacity-90">Multi-cloud security solutions</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90 mb-8">
            KulpTech provides enterprise-grade security for AWS, Azure, Google Cloud, 
            and hybrid cloud environments with unified protection.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">CSPM</div>
              <div className="text-purple-200 text-sm">Automated</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">99.95%</div>
              <div className="text-purple-200 text-sm">Availability</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">Multi-cloud</div>
              <div className="text-purple-200 text-sm">Supported</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">FedRAMP</div>
              <div className="text-purple-200 text-sm">Ready</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center mb-6">
                <Server className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600">
                Security for virtual machines, containers, serverless functions, 
                and cloud storage with automated compliance.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-pink-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Data Protection</h3>
              <p className="text-gray-600">
                Encryption, key management, and data loss prevention for 
                cloud databases and storage services.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-400 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hybrid Cloud Security</h3>
              <p className="text-gray-600">
                Unified security management for on-premises and cloud environments 
                with consistent policies.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Cloud Security Solutions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Shield className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <div className="font-bold text-gray-800">CSPM</div>
                <div className="text-sm text-gray-600">Cloud security posture</div>
              </div>
              <div className="text-center p-6 bg-pink-50 rounded-xl">
                <Zap className="w-10 h-10 text-pink-600 mx-auto mb-4" />
                <div className="font-bold text-gray-800">CWPP</div>
                <div className="text-sm text-gray-600">Workload protection</div>
              </div>
              <div className="text-center p-6 bg-rose-50 rounded-xl">
                <Cloud className="w-10 h-10 text-rose-600 mx-auto mb-4" />
                <div className="font-bold text-gray-800">CASB</div>
                <div className="text-sm text-gray-600">Cloud access security</div>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-xl">
                <Database className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Data Security</div>
                <div className="text-sm text-gray-600">Encryption & DLP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}