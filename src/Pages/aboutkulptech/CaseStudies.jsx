import React from 'react';
import { FileText, Building, Globe, Shield, TrendingUp, Users } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      icon: Building,
      title: "Fortune 500 Financial Institution",
      industry: "Banking & Finance",
      challenge: "Legacy security systems failing to detect advanced persistent threats targeting transaction systems.",
      solution: "Implemented KulpTech's AI-powered threat detection platform with real-time transaction monitoring.",
      results: [
        "99.7% reduction in false positives",
        "Detected 3 zero-day attacks in first month",
        "$4.2M saved in potential fraud"
      ],
      metrics: "ROI: 425%",
      color: "from-blue-600 to-indigo-600",
      logoColor: "bg-blue-100 text-blue-800"
    },
    {
      icon: Globe,
      title: "Global Healthcare Provider",
      industry: "Healthcare",
      challenge: "Ransomware attacks disrupting critical patient care systems across 50+ hospitals.",
      solution: "Deployed our Zero Trust architecture with micro-segmentation and behavioral analytics.",
      results: [
        "Zero ransomware incidents post-deployment",
        "50% faster incident response",
        "HIPAA compliance achieved"
      ],
      metrics: "Uptime: 99.99%",
      color: "from-green-600 to-emerald-600",
      logoColor: "bg-green-100 text-green-800"
    },
    {
      icon: Shield,
      title: "Government Defense Contractor",
      industry: "Defense",
      challenge: "Protecting classified research data from nation-state actors and insider threats.",
      solution: "Multi-layered security with air-gapped systems, advanced encryption, and continuous monitoring.",
      results: [
        "100% data breach prevention",
        "Real-time threat intelligence sharing",
        "DFARS/NIST 800-171 compliance"
      ],
      metrics: "Security Score: 100%",
      color: "from-red-600 to-rose-600",
      logoColor: "bg-red-100 text-red-800"
    },
    {
      icon: Users,
      title: "Technology Enterprise",
      industry: "Technology",
      challenge: "Securing remote workforce of 10,000+ employees with inconsistent security practices.",
      solution: "Comprehensive SASE implementation with Zero Trust network access and endpoint protection.",
      results: [
        "95% reduction in phishing success",
        "Unified security policy enforcement",
        "40% lower security operations cost"
      ],
      metrics: "Productivity: +15%",
      color: "from-purple-600 to-pink-600",
      logoColor: "bg-purple-100 text-purple-800"
    },
    {
      icon: TrendingUp,
      title: "E-commerce Giant",
      industry: "Retail",
      challenge: "Seasonal traffic spikes creating security blind spots and DDoS vulnerabilities.",
      solution: "Cloud-native security with auto-scaling WAF and bot management solutions.",
      results: [
        "Handled 10x traffic increase securely",
        "Blocked 2M+ malicious requests daily",
        "PCI DSS Level 1 compliance"
      ],
      metrics: "Revenue Protected: $50M+",
      color: "from-amber-600 to-orange-600",
      logoColor: "bg-amber-100 text-amber-800"
    },
    {
      icon: Building,
      title: "Energy Infrastructure",
      industry: "Energy",
      challenge: "Protecting critical infrastructure from industrial espionage and sabotage.",
      solution: "OT/IoT security platform with anomaly detection and air-gapped backup systems.",
      results: [
        "Zero operational disruptions",
        "Real-time threat detection",
        "NERC CIP compliance maintained"
      ],
      metrics: "Availability: 100%",
      color: "from-cyan-600 to-blue-600",
      logoColor: "bg-cyan-100 text-cyan-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <FileText className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Real-world examples of how KulpTech protects organizations across industries from advanced cyber threats.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how leading organizations trust KulpTech to secure their digital assets and maintain business continuity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 border border-gray-100">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${study.color}`}>
                    <study.icon className="w-10 h-10 text-white" />
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${study.logoColor}`}>
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">The Challenge</h4>
                  <p className="text-gray-600 mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Solution</h4>
                  <p className="text-gray-600 mb-4">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Business Impact</p>
                      <p className="text-xl font-bold text-gray-900">{study.metrics}</p>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-gray-900 to-slate-900 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                      Read Full Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Banner */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-3">500+</div>
                  <div className="text-indigo-200">Enterprises Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-3">$2.3B</div>
                  <div className="text-indigo-200">Fraud Prevented</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-3">99.9%</div>
                  <div className="text-indigo-200">Detection Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-3">24/7</div>
                  <div className="text-indigo-200">Security Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}