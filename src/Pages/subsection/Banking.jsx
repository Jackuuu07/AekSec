import React from 'react';
import { Shield, Lock, DollarSign, TrendingUp, AlertTriangle, Cpu, Users, Database, Key, FileCheck } from 'lucide-react';

export default function Banking() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* Hero Section */}    
      <div className="relative overflow-hidden bg-slate-200 text-black">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                  <Shield className="w-9 h-9" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-3">Enterprise Banking Security</h1>
                  <p className="text-xl opacity-90">Advanced protection for modern financial institutions</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl opacity-90 leading-relaxed">
                KalpTech delivers enterprise-grade security solutions designed specifically for the banking sector. 
                Our comprehensive platform protects digital assets, secures transactions, and ensures regulatory 
                compliance across all banking operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Banking Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our security framework addresses the unique challenges faced by financial institutions 
              in today's digital landscape, combining advanced technology with deep industry expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-6 shadow-md">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Transaction Infrastructure</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                End-to-end encryption and real-time monitoring for all banking transactions, ensuring 
                integrity and confidentiality across payment systems and digital channels.
              </p>
              <div className="flex items-center text-blue-700 font-medium">
                <Key className="w-4 h-4 mr-2" />
                Multi-layered authentication
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-500 flex items-center justify-center mb-6 shadow-md">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Data Protection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced data security measures protecting sensitive customer information with 
                tokenization, encryption, and strict access controls throughout the data lifecycle.
              </p>
              <div className="flex items-center text-cyan-700 font-medium">
                <FileCheck className="w-4 h-4 mr-2" />
                GDPR & CCPA compliant
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-500 flex items-center justify-center mb-6 shadow-md">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Driven Threat Intelligence</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Proactive threat detection using machine learning algorithms that identify and 
                neutralize sophisticated attacks before they impact banking operations.
              </p>
              <div className="flex items-center text-indigo-700 font-medium">
                <TrendingUp className="w-4 h-4 mr-2" />
                Behavioral analytics
              </div>
            </div>
          </div>

          {/* Detailed Solutions */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-blue-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  Core Security Framework
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Real-time transaction monitoring with adaptive behavioral analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">API security management for open banking ecosystems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Secure mobile banking platforms with biometric authentication</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-600 to-slate-700 flex items-center justify-center mr-4">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  Advanced Protection Features
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">AI-powered fraud prevention with deep learning algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Quantum-resistant cryptography implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Continuous security monitoring and incident response</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Regulatory Compliance & Standards</h3>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Our solutions are designed to meet and exceed global banking security standards including 
                PCI DSS, ISO 27001, SWIFT CSP, and regional financial regulations. We provide continuous 
                compliance monitoring and automated reporting to ensure your institution remains 
                audit-ready while maintaining operational efficiency.
              </p>
            </div>
          </div>

          {/* Integration Note */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Seamless Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's banking security solutions integrate seamlessly with your existing infrastructure, 
              providing enhanced protection without disrupting customer experience or banking operations. 
              Our platform supports all major core banking systems and digital channels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}