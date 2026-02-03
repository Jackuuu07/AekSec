import React from 'react';
import { Code, Shield, Cpu, Lock, GitBranch, Zap, Database, Globe, FileCheck, Network } from 'lucide-react';

export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-200 text-gray-900">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
                  <Code className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Software Development Security</h1>
                  <p className="text-xl text-gray-700">Securing code from development through deployment and operations</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech integrates comprehensive security throughout the software development lifecycle 
                with DevSecOps solutions, code scanning, application security testing, and secure 
                development practices for modern software engineering.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Software Development Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our software development security solutions address the entire development lifecycle, 
              protecting source code, development environments, build pipelines, and deployment 
              processes while ensuring secure software delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <GitBranch className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DevSecOps Integration</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Security automation integration in CI/CD pipelines with real-time vulnerability 
                scanning, compliance checks, and security gate implementation.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Automated security
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Code Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Static and dynamic application security testing with comprehensive vulnerability 
                detection, remediation guidance, and code quality assurance.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Vulnerability detection
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Protection for software supply chains including dependency management, 
                open source component security, and third-party library verification.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <Network className="w-4 h-4 mr-2" />
                Component security
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
                  Development Security Framework
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Integrated development environment security plugins and real-time scanning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Version control system integration and pre-commit security validation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Secure coding guidelines and developer security training integration</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <FileCheck className="w-6 h-6 text-white" />
                  </div>
                  Testing & Deployment Security
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Continuous integration security testing and automated vulnerability scanning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Container security scanning and Kubernetes deployment protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Infrastructure as code security and deployment configuration validation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Development Technology Segments */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Development Technology Specialization</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our software development security solutions are tailored to meet the specific requirements 
                of different development methodologies and technology stacks, ensuring appropriate protection 
                for various programming environments and deployment models.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Web Development</div>
                  <div className="text-sm text-gray-500">Frontend & backend</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Mobile Development</div>
                  <div className="text-sm text-gray-500">iOS & Android</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Cloud Native</div>
                  <div className="text-sm text-gray-500">Microservices & containers</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Network className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">API Development</div>
                  <div className="text-sm text-gray-500">REST & GraphQL</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Tools Integration */}
          <div className="bg-white rounded-xl shadow-lg p-10 border border-gray-200 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Security Tools Integration</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Cpu className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">IDE Plugins</div>
                <div className="text-sm text-gray-600">Real-time scanning</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Code className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Git Integration</div>
                <div className="text-sm text-gray-600">Pre-commit checks</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Shield className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">Container Security</div>
                <div className="text-sm text-gray-600">Docker & Kubernetes</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Lock className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <div className="font-bold text-gray-800">API Security</div>
                <div className="text-sm text-gray-600">REST & GraphQL</div>
              </div>
            </div>
          </div>

          {/* Security Framework Overview */}
          <div className="bg-gradient-to-r from-gray-700 to-slate-600 rounded-2xl p-10 text-white mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Security Development Practices</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Secure software development lifecycle implementation and management</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Threat modeling and security architecture design integration</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Security requirement definition and implementation validation</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-gray-300 mr-3" />
                    <span>Security testing automation and quality assurance integration</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-3">Development Security Framework</h4>
                  <p className="text-gray-300">
                    Comprehensive security integration throughout the entire software 
                    development lifecycle, from initial design through deployment and maintenance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Development Technology Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's software development security platform integrates seamlessly with development 
              tools, build systems, deployment platforms, and operations management solutions. Our 
              solutions are designed to work within existing software engineering ecosystems and 
              development workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}