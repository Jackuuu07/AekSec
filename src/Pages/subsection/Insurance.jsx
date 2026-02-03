import React from 'react';
import { Shield, FileText, Heart, TrendingUp, AlertCircle, CheckCircle, Users, Database, Lock, BarChart } from 'lucide-react';

export default function Insurance() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-200 text-gray-900">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
                  <Shield className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Insurance Security</h1>
                  <p className="text-xl text-gray-700">Comprehensive protection for insurance providers and policyholder data</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech delivers specialized security solutions designed for the insurance industry, 
                protecting sensitive data, preventing fraud, and ensuring regulatory compliance across 
                all lines of insurance business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance Industry Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our security platform addresses the unique challenges faced by insurance providers, 
              combining advanced technology with deep industry expertise to protect sensitive 
              information and prevent financial losses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Claims Fraud Prevention</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced fraud detection systems utilizing machine learning to identify suspicious 
                claims patterns and prevent fraudulent insurance activities across all product lines.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <AlertCircle className="w-4 h-4 mr-2" />
                Pattern recognition
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Data Protection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive security for sensitive health information with HIPAA-compliant 
                controls and specialized protection for medical records and health insurance data.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Lock className="w-4 h-4 mr-2" />
                Regulatory compliance
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Underwriting Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Secure risk assessment platforms with data integrity controls for accurate 
                policy pricing and comprehensive underwriting decision support systems.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <BarChart className="w-4 h-4 mr-2" />
                Risk assessment
              </div>
            </div>
          </div>

          {/* Detailed Capabilities */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-gray-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mr-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  Data Protection Framework
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Personal information protection for policyholder data and applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Secure document management for policy contracts and claims documentation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Encrypted data storage and transmission for sensitive insurance information</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  Regulatory Compliance
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">HIPAA compliance for health insurance providers and medical data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Insurance industry regulations and data protection requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Audit and reporting capabilities for regulatory examinations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Insurance Lines Coverage */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Insurance Line Specialization</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our security solutions are tailored to meet the specific requirements of different insurance 
                lines, providing specialized protection for each type of insurance product and associated risks.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Health Insurance</div>
                  <div className="text-sm text-gray-500">Medical & Dental</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Property & Casualty</div>
                  <div className="text-sm text-gray-500">Home & Auto</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Life Insurance</div>
                  <div className="text-sm text-gray-500">Individual & Group</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Specialty Lines</div>
                  <div className="text-sm text-gray-500">Professional Liability</div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Insurance Technology Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's insurance security platform integrates seamlessly with core insurance systems, 
              policy administration platforms, claims management software, and underwriting tools. 
              Our solutions are designed to work within existing insurance technology ecosystems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}