import React from 'react';
import { Shield, FileText, Heart, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

export default function Insurance() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-500 text-white">
        <div className="absolute inset-0 bg-opacity-20 bg-white"></div>
        <div className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Insurance Security</h1>
              <p className="text-xl opacity-90">Protecting sensitive data and preventing fraud</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90">
            KalpTech secures insurance providers with advanced fraud detection, data protection, 
            and compliance solutions for life, health, property, and casualty insurance.
          </p>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-400 flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Claims Fraud Prevention</h3>
              <p className="text-gray-600">AI-powered detection of fraudulent claims patterns with 95% accuracy rate.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Data Protection</h3>
              <p className="text-gray-600">HIPAA-compliant security for sensitive health information and medical records.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-pink-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Underwriting Security</h3>
              <p className="text-gray-600">Secure risk assessment and policy management with data integrity assurance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}