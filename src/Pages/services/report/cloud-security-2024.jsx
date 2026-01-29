import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Shield, Cloud, Lock, BarChart, ChevronLeft } from 'lucide-react';

export default function CloudSecurity2024() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <div className="py-6 px-6 border-b">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/what-we-think" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Insights
          </Link>
        </div>
      </div>

      {/* Report Header */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-8 h-8" />
            <Cloud className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            State of Cloud Security 2024
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Comprehensive analysis of cloud security challenges, trends, and best practices for modern enterprises.
          </p>
          <div className="flex items-center justify-center gap-6 text-lg">
            <span className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              42 Pages
            </span>
            <span>•</span>
            <span>Published: January 15, 2024</span>
            <span>•</span>
            <span>Research Report</span>
          </div>
        </div>
      </section>

      {/* Report Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Executive Summary */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 py-6 mb-8">
              <p className="text-lg text-gray-700">
                The 2024 State of Cloud Security Report reveals a rapidly evolving landscape where 
                traditional perimeter-based security models are giving way to identity-centric approaches. 
                With 87% of organizations now operating in multi-cloud environments, security teams face 
                unprecedented complexity in managing identities, data governance, and compliance.
              </p>
            </div>
            
            <p className="text-gray-600 mb-6">
              This comprehensive report analyzes data from over 1,200 organizations worldwide, 
              providing actionable insights into emerging threats, successful defense strategies, 
              and the technologies shaping the future of cloud security.
            </p>
          </div>

          {/* Key Findings */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Findings</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Identity Threats Soar</h3>
                </div>
                <p className="text-gray-600">
                  68% increase in identity-based attacks targeting cloud environments, 
                  making identity the new perimeter.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Zero Trust Adoption</h3>
                </div>
                <p className="text-gray-600">
                  45% of enterprises have fully implemented Zero Trust architecture, 
                  up from just 18% in 2022.
                </p>
              </div>
            </div>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span><strong>92% of breaches</strong> involve cloud misconfigurations or inadequate access controls</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span><strong>Average detection time</strong> for cloud breaches decreased to 42 days (from 197 days in 2022)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span><strong>AI-driven security</strong> tools reduced false positives by 73% in organizations that adopted them</span>
              </li>
            </ul>
          </div>

          {/* Recommendations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Recommendations</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Implement Identity-First Security</h3>
                <p className="text-gray-600 mb-4">
                  Shift from network-centric to identity-centric security models. 
                  Implement privileged access management (PAM) and just-in-time (JIT) access controls.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Priority: High</span>
                  <span>Expected ROI: 230%</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Automate Security Posture Management</h3>
                <p className="text-gray-600 mb-4">
                  Deploy cloud security posture management (CSPM) tools to continuously 
                  monitor configurations and compliance across multi-cloud environments.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Priority: Medium</span>
                  <span>Implementation Time: 3-6 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Full Report</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the complete 42-page report with detailed analysis, case studies, 
              and implementation frameworks for your organization.
            </p>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors">
              <Download className="w-6 h-6" />
              Download PDF Report (2.4 MB)
            </button>
            <p className="text-sm text-gray-500 mt-4">
              By downloading, you agree to receive occasional insights from KalpTech Security
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}