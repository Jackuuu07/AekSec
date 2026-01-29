import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Brain, Cpu, Zap, Target, ChevronLeft, TrendingUp } from 'lucide-react';

export default function AIPoweredThreatIntelligence() {
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
      <section className="py-16 px-6 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="w-8 h-8" />
            <Target className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI-Powered Threat Intelligence
          </h1>
          <p className="text-xl opacity-90 mb-8">
            How machine learning and artificial intelligence are revolutionizing threat detection, 
            analysis, and response capabilities.
          </p>
          <div className="flex items-center justify-center gap-6 text-lg">
            <span className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              36 Pages
            </span>
            <span>•</span>
            <span>Published: February 28, 2024</span>
            <span>•</span>
            <span>Technical Report</span>
          </div>
        </div>
      </section>

      {/* Report Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The AI Revolution in Cybersecurity</h2>
            <div className="bg-purple-50 border-l-4 border-purple-600 pl-6 py-6 mb-8">
              <p className="text-lg text-gray-700">
                Artificial Intelligence is fundamentally transforming how organizations detect, 
                analyze, and respond to cyber threats. From predictive analytics to automated 
                response systems, AI-powered solutions are reducing detection times from days to seconds.
              </p>
            </div>
          </div>

          {/* AI Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key AI Capabilities</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Predictive Threat Hunting</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Machine learning models that analyze patterns across billions of data points 
                  to predict emerging threats before they manifest.
                </p>
                <div className="text-sm text-purple-600 font-medium">
                  Accuracy: 94.7%
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-pink-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Automated Response</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  AI systems that autonomously contain threats and initiate remediation 
                  procedures without human intervention.
                </p>
                <div className="text-sm text-pink-600 font-medium">
                  Response Time: within 1 second
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Performance Improvements with AI
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">87%</div>
                  <div className="text-gray-600">Reduction in false positives</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">92%</div>
                  <div className="text-gray-600">Faster threat detection</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">78%</div>
                  <div className="text-gray-600">Cost reduction in SOC operations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">3.2x</div>
                  <div className="text-gray-600">More threats identified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Case Study: Financial Institution</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenge</h3>
                <p className="text-gray-600">
                  A global bank was experiencing 15,000+ security alerts daily, overwhelming their 
                  security team and causing critical threats to be missed.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Solution</h3>
                <p className="text-gray-600">
                  Implemented an AI-powered threat intelligence platform that uses deep learning 
                  to correlate alerts, identify patterns, and prioritize genuine threats.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 bg-gradient-to-r from-green-50 to-teal-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Results</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span>Daily alerts reduced from 15,000 to 150 actionable incidents</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span>Threat detection time reduced from 4 hours to 2 minutes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span>Annual cost savings: $2.3 million</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Implementation Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started with AI Security</h2>
            
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Assessment & Planning",
                  description: "Evaluate current capabilities and define AI implementation objectives"
                },
                {
                  step: "2",
                  title: "Data Foundation",
                  description: "Ensure quality, structured data for AI model training"
                },
                {
                  step: "3",
                  title: "Pilot Implementation",
                  description: "Start with specific use cases like phishing detection"
                },
                {
                  step: "4",
                  title: "Scale & Integrate",
                  description: "Expand AI capabilities across security operations"
                }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Section */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Complete Technical Report</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Access detailed technical specifications, implementation frameworks, 
              and vendor evaluation criteria for AI security solutions.
            </p>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold text-lg hover:bg-purple-700 transition-colors">
              <Download className="w-6 h-6" />
              Download PDF Report (1.8 MB)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}