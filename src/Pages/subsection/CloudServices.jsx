import React from 'react';
import { Cloud, Server, Shield, Database, Globe, Zap, Lock, Users, Cpu, AlertTriangle } from 'lucide-react';

export default function CloudServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-200 text-gray-900">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
                  <Cloud className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Cloud Services Security</h1>
                  <p className="text-xl text-gray-700">Comprehensive protection for multi-cloud and hybrid environments</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech provides enterprise-grade security solutions designed specifically for cloud-native 
                and hybrid infrastructures. Our platform delivers unified protection across AWS, Azure, 
                Google Cloud, and private cloud environments with consistent security policies and controls.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Cloud Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our cloud security solutions address the unique challenges of modern cloud environments, 
              providing comprehensive protection while maintaining operational flexibility and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Infrastructure Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive protection for cloud-native infrastructure including containers, 
                serverless functions, and virtual machines with automated compliance monitoring.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Runtime protection
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Data Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced data protection for cloud databases and storage services with 
                encryption, key management, and comprehensive data loss prevention.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Lock className="w-4 h-4 mr-2" />
                Encryption management
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hybrid Cloud Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Unified security management across on-premises and multi-cloud environments 
                with consistent policies and centralized visibility.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <Users className="w-4 h-4 mr-2" />
                Centralized management
              </div>
            </div>
          </div>

          {/* Detailed Capabilities */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-gray-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mr-4">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  Cloud Security Framework
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Cloud Security Posture Management across multi-cloud environments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Cloud Workload Protection for containers and serverless architectures</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Infrastructure as Code security scanning and validation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  Compliance & Governance
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Automated compliance monitoring for cloud-specific regulations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Identity and access management for cloud resources and services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Cloud-native threat detection and incident response automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cloud Platform Support */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Multi-Cloud Platform Support</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our security solutions are optimized for all major cloud platforms, providing consistent 
                protection and compliance across diverse cloud environments. Each platform receives 
                specialized security controls tailored to its specific architecture and services.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">AWS</div>
                  <div className="text-sm text-gray-500">Amazon Web Services</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Azure</div>
                  <div className="text-sm text-gray-500">Microsoft Azure</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Google Cloud</div>
                  <div className="text-sm text-gray-500">GCP Platform</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Server className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Private Cloud</div>
                  <div className="text-sm text-gray-500">On-premises & Hybrid</div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Cloud-Native Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's cloud security platform integrates seamlessly with cloud-native tools and 
              services, including infrastructure as code platforms, container orchestration systems, 
              and cloud management consoles. Our solutions are designed to work within your existing 
              cloud operations workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}