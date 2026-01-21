import React from 'react';
import { Lock, Shield, EyeOff, FileText, CheckCircle, Key, Globe, Users } from 'lucide-react';

export default function PrivacyAtKulpTech() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-cyan-900/20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-lg flex items-center justify-center">
              <Lock className="w-7 h-7" />
            </div>
            <div className="border-l-2 border-cyan-500 pl-4">
              <span className="text-cyan-400 text-sm font-mono tracking-wider">PRIVACY BY DESIGN</span>
              <h1 className="text-5xl font-bold mt-1">Privacy at KulpTech</h1>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
            Zero-trust privacy architecture ensuring data protection, transparency, and compliance 
            across all security operations and customer engagements.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">GDPR</div>
              <div className="text-gray-300">Compliant</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">CCPA</div>
              <div className="text-gray-300">Certified</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">ISO 27001</div>
              <div className="text-gray-300">Certified</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">SOC 2</div>
              <div className="text-gray-300">Type II</div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Principles */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Privacy Principles</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Foundational principles guiding our approach to data protection and privacy management
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-6 bg-gradient-to-br from-gray-900/50 to-transparent border border-gray-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Data Minimization</h3>
                  <p className="text-gray-400">
                    Collect only essential data required for security operations. Automatic data retention policies 
                    ensure unnecessary information is regularly purged from our systems.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 bg-gradient-to-br from-gray-900/50 to-transparent border border-gray-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-900 to-purple-700 flex items-center justify-center flex-shrink-0">
                  <EyeOff className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Privacy by Default</h3>
                  <p className="text-gray-400">
                    All security products and services are configured with maximum privacy settings enabled. 
                    Customer data is pseudonymized and encrypted at rest and in transit.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-6 bg-gradient-to-br from-gray-900/50 to-transparent border border-gray-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-900 to-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Key className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">End-to-End Encryption</h3>
                  <p className="text-gray-400">
                    Military-grade encryption protects all customer data. Zero-knowledge architecture ensures 
                    only authorized parties can access decrypted information.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 p-6 bg-gradient-to-br from-gray-900/50 to-transparent border border-gray-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-900 to-cyan-700 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Global Compliance</h3>
                  <p className="text-gray-400">
                    Adherence to international privacy regulations including GDPR, CCPA, PIPEDA, and APEC CBPR. 
                    Regional data sovereignty requirements fully supported.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Framework */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-cyan-400"></div>
            <h2 className="text-3xl font-bold">Compliance Framework</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-8">Certifications & Standards</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>ISO/IEC 27001:2022</span>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">Certified</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>ISO/IEC 27701 (Privacy)</span>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">Certified</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>SOC 2 Type II</span>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">Audited</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>NIST Cybersecurity Framework</span>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">Aligned</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-8">Data Protection Measures</h3>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Data Encryption Coverage</span>
                      <span className="text-blue-400 font-bold">100%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 w-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Privacy Impact Assessments</span>
                      <span className="text-purple-400 font-bold">Quarterly</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-600 to-pink-400 w-3/4"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Employee Privacy Training</span>
                      <span className="text-green-400 font-bold">Annual</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-600 to-emerald-400 w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Operations */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Privacy Operations Center</h3>
                <p className="text-gray-300 mb-8">
                  Our dedicated Privacy Operations Center monitors data protection across all systems, 
                  ensuring continuous compliance and rapid response to privacy incidents.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span>Dedicated Privacy Team: 50+ specialists</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-green-400" />
                    <span>Automated Compliance Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Lock className="w-5 h-5 text-blue-400" />
                    <span>24/7 Privacy Incident Response</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.99%</div>
                  <div className="text-gray-400">Privacy Compliance Uptime</div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">0</div>
                    <div className="text-gray-400">Privacy Breaches</div>
                    <div className="text-sm text-green-400">Since 2020</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">4 hours</div>
                    <div className="text-gray-400">Average Response Time</div>
                    <div className="text-sm text-blue-400">Privacy Requests</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}