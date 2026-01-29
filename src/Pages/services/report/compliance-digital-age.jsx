import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Scale, Globe, CheckCircle, AlertCircle, ChevronLeft, Building } from 'lucide-react';

export default function ComplianceDigitalAge() {
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
      <section className="py-16 px-6 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Scale className="w-8 h-8" />
            <Globe className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Compliance in the Digital Age
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Navigating complex regulatory requirements and implementing effective 
            compliance frameworks for modern digital enterprises.
          </p>
          <div className="flex items-center justify-center gap-6 text-lg">
            <span className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              28 Pages
            </span>
            <span>•</span>
            <span>Published: March 20, 2024</span>
            <span>•</span>
            <span>Regulatory Guide</span>
          </div>
        </div>
      </section>

      {/* Report Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Evolving Compliance Landscape</h2>
            <div className="bg-emerald-50 border-l-4 border-emerald-600 pl-6 py-6 mb-8">
              <p className="text-lg text-gray-700">
                In 2024, organizations must navigate over 50 major regulatory frameworks globally, 
                with compliance requirements becoming increasingly complex due to digital transformation, 
                remote work, and cross-border data flows.
              </p>
            </div>
          </div>

          {/* Regulatory Frameworks */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Regulatory Frameworks</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-emerald-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">GDPR (EU)</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    Global Impact
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Data protection and privacy regulation affecting any organization 
                  processing EU citizen data, with fines up to 4% of global revenue.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-emerald-600 font-medium">Active Since: 2018</span>
                  <span className="text-gray-500">•</span>
                  <span>Updated: 2023</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-emerald-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">CCPA/CPRA (California)</h3>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
                    US Focus
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive consumer privacy act granting California residents 
                  rights over their personal information and establishing new business obligations.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-emerald-600 font-medium">Active Since: 2020</span>
                  <span className="text-gray-500">•</span>
                  <span>Enhanced: 2023</span>
                </div>
              </div>
            </div>

            {/* Emerging Regulations */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Emerging Regulations for 2024-2025</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span><strong>EU AI Act:</strong> First comprehensive AI regulation (expected 2024)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span><strong>Digital Operational Resilience Act (DORA):</strong> EU financial sector cybersecurity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span><strong>SEC Cybersecurity Rules:</strong> US public company disclosures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Challenges */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Compliance Challenges</h2>
            
            <div className="space-y-6">
              {[
                {
                  challenge: "Regulatory Fragmentation",
                  description: "Managing multiple, often conflicting regulations across different jurisdictions",
                  impact: "High",
                  icon: Globe
                },
                {
                  challenge: "Third-Party Risk",
                  description: "Ensuring compliance across complex supply chains and vendor ecosystems",
                  impact: "Critical",
                  icon: Building
                },
                {
                  challenge: "Data Sovereignty",
                  description: "Navigating data localization requirements and cross-border transfer restrictions",
                  impact: "High",
                  icon: Scale
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <item.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{item.challenge}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.impact === 'Critical' 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          Impact: {item.impact}
                        </span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practice Framework</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Recommended Approach</h3>
                <div className="space-y-6">
                  {[
                    "Implement unified compliance management platform",
                    "Automate compliance monitoring and reporting",
                    "Establish cross-functional compliance committee",
                    "Regular third-party risk assessments",
                    "Continuous employee training programs",
                    "Proactive regulatory change monitoring"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h3>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-700">GRC Platforms</span>
                    <span className="text-emerald-600 font-medium">Essential</span>
                  </li>
                  <li className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-700">Automated Compliance Scanners</span>
                    <span className="text-emerald-600 font-medium">High Priority</span>
                  </li>
                  <li className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-700">Data Mapping Tools</span>
                    <span className="text-emerald-600 font-medium">Required</span>
                  </li>
                  <li className="flex items-center justify-between py-3">
                    <span className="text-gray-700">AI-Powered Risk Assessment</span>
                    <span className="text-blue-600 font-medium">Emerging</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Download Compliance Guide</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Includes detailed regulatory analysis, compliance checklists, 
                implementation roadmaps, and template policies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors">
                <Download className="w-6 h-6" />
                Download Full Report (1.2 MB)
              </button>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-600 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-colors">
                <FileText className="w-6 h-6" />
                Compliance Checklist Only
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}