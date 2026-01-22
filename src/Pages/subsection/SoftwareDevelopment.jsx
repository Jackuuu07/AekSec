import React from 'react';
import { Code, Shield, Cpu, Lock, GitBranch, Zap } from 'lucide-react';

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 text-gray-800">
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-500 text-white">
        <div className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Code className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Software Development Security</h1>
              <p className="text-xl opacity-90">Securing code from development to deployment</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90 mb-8">
            KulpTech integrates security throughout the SDLC with DevSecOps solutions, 
            code scanning, and application security testing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">SAST/DAST</div>
              <div className="text-indigo-200 text-sm">Integrated</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">100K+</div>
              <div className="text-indigo-200 text-sm">Scans/Day</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">99.9%</div>
              <div className="text-indigo-200 text-sm">Accuracy</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold mb-1">OWASP</div>
              <div className="text-indigo-200 text-sm">Top 10 Coverage</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-indigo-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-400 flex items-center justify-center mb-6">
                <GitBranch className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DevSecOps Integration</h3>
              <p className="text-gray-600 mb-4">
                Security automation in CI/CD pipelines with real-time vulnerability 
                scanning and compliance checks.
              </p>
              <div className="flex items-center text-indigo-600 font-semibold">
                <Zap className="w-5 h-5 mr-2" />
                Automated Security Gates
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Code Security</h3>
              <p className="text-gray-600 mb-4">
                Static and dynamic application security testing with AI-powered 
                vulnerability detection and remediation.
              </p>
              <div className="flex items-center text-purple-600 font-semibold">
                <Shield className="w-5 h-5 mr-2" />
                Zero-Day Protection
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Security Tools Integration</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-indigo-50 rounded-xl">
                <Cpu className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                <div className="font-bold text-gray-800">IDE Plugins</div>
                <div className="text-sm text-gray-600">Real-time scanning</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Code className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Git Integration</div>
                <div className="text-sm text-gray-600">Pre-commit checks</div>
              </div>
              <div className="text-center p-6 bg-pink-50 rounded-xl">
                <Shield className="w-10 h-10 text-pink-600 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Container Security</div>
                <div className="text-sm text-gray-600">Docker/K8s</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Lock className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <div className="font-bold text-gray-800">API Security</div>
                <div className="text-sm text-gray-600">REST/GraphQL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}