import React from 'react';
import { FileText, Building, Globe, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      icon: Building,
      title: "Fortune 500 Financial Institution",
      industry: "Banking & Finance",
      challenge: "Legacy security systems failing to detect advanced persistent threats targeting transaction systems.",
      solution: "Implemented KalpTech's AI-powered threat detection platform with real-time transaction monitoring.",
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

  const statistics = [
    {
      value: "500+",
      label: "Enterprises Protected",
      description: "Securing businesses across industries"
    },
    {
      value: "$2.3B",
      label: "Fraud Prevented",
      description: "Collective financial protection"
    },
    {
      value: "99.9%",
      label: "Detection Accuracy",
      description: "Industry-leading threat detection"
    },
    {
      value: "24/7",
      label: "Security Operations",
      description: "Continuous protection coverage"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-100 text-black">
        <div className="max-w-7xl mx-auto flex items-start gap-8">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
            <FileText className="w-10 h-10 text-black" />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Success Stories
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Real-world examples of how KalpTech protects organizations across industries from advanced cyber threats.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Discover how leading organizations trust KalpTech to secure their digital assets and maintain business continuity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${study.color} flex items-center justify-center shadow-md`}>
                    <study.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${study.logoColor}`}>
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {study.title}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">The Challenge</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {study.challenge}
                  </p>
                  
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Solution</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Results</h4>
                  <ul className="space-y-3">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-lg font-bold text-gray-900">
                    {study.metrics}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-blue-100 mb-16">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
                Our Impact in Numbers
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {statistics.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-3">
                      {stat.value}
                    </div>
                    <div className="text-lg font-medium text-gray-900 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Industry Coverage
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Our security solutions protect organizations across diverse sectors including finance, healthcare, 
                government, technology, retail, and critical infrastructure. Each industry presents unique challenges 
                that require specialized security approaches, and our case studies demonstrate our ability to deliver 
                effective protection tailored to specific business needs.
              </p>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Measurable Results
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Each case study represents real-world implementations where KalpTech's security solutions 
              have delivered measurable business value, reduced risk, and enhanced operational resilience 
              for our clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}