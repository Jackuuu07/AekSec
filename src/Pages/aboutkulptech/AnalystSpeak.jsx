import React from "react";
import {
  BarChart,
  TrendingUp,
  Shield,
  Award,
  Target,
  Users,
  CheckCircle,
  TrendingUp as Growth,
  Target as Bullseye,
  Award as Trophy,
  Zap,
  Star,
} from "lucide-react";

export default function AnalystSpeak() {
  const analystReports = [
    {
      icon: Shield,
      title: "Gartner Magic Quadrant",
      description:
        "Positioned as a Leader in the 2024 Gartner Magic Quadrant for Endpoint Protection Platforms. Recognized for our complete vision and execution capabilities.",
      metrics: "Score: 4.8/5",
      date: "March 2024",
      color: "from-purple-600 to-pink-600",
      details: [
        "Leader in execution capabilities",
        "Highest completeness of vision",
        "24/7 enterprise support",
      ],
    },
    {
      icon: BarChart,
      title: "Forrester Wave Report",
      description:
        "Ranked as a Strong Performer in The Forrester Wave™: Extended Detection and Response (XDR) Providers, Q4 2023. Praised for our threat intelligence capabilities.",
      metrics: "Market Presence: Strong",
      date: "December 2023",
      color: "from-blue-600 to-cyan-600",
      details: [
        "Top-rated threat intelligence",
        "Advanced analytics platform",
        "Seamless integration",
      ],
    },
    {
      icon: TrendingUp,
      title: "IDC MarketScape",
      description:
        "Named a Leader in the IDC MarketScape: Worldwide Managed Security Services 2023. Highlighted for our 24/7 SOC operations and AI-driven threat hunting.",
      metrics: "Growth: 45% YoY",
      date: "November 2023",
      color: "from-emerald-600 to-teal-600",
      details: [
        "AI-powered threat detection",
        "24/7 SOC monitoring",
        "Rapid incident response",
      ],
    },
    {
      icon: Target,
      title: "NSS Labs Results",
      description:
        "Achieved 99.8% protection rate in NSS Labs Breach Detection Systems test. Blocked 100% of evasive malware and advanced attacks in controlled tests.",
      metrics: "Protection: 99.8%",
      date: "January 2024",
      color: "from-red-600 to-rose-600",
      details: [
        "99.8% protection rate",
        "Zero false positives",
        "Sub-5ms response time",
      ],
    },
    {
      icon: Award,
      title: "AV-TEST Awards",
      description:
        "Awarded Top Product for Enterprise Endpoint Security, achieving perfect scores in protection, performance, and usability categories.",
      metrics: "Score: 18/18",
      date: "February 2024",
      color: "from-amber-600 to-yellow-600",
      details: [
        "Perfect protection score",
        "Top performance rating",
        "Enterprise usability",
      ],
    },
    {
      icon: Users,
      title: "Customer Reviews",
      description:
        "Rated 4.9/5 on Gartner Peer Insights with 500+ verified reviews. Customers highlight our rapid response times and expert security consultants.",
      metrics: "CSAT: 98%",
      date: "Ongoing",
      color: "from-indigo-600 to-violet-600",
      details: [
        "500+ verified reviews",
        "98% customer satisfaction",
        "Expert security team",
      ],
    },
  ];

  const marketData = [
    {
      icon: Trophy,
      title: "Gartner Recognition",
      description: "Leader in 3 consecutive Magic Quadrant reports since 2022",
      value: "3 Years",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Detection Rate",
      description: "Industry-leading threat detection accuracy",
      value: "99.9%",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Growth,
      title: "Market Growth",
      description: "Year-over-year enterprise adoption increase",
      value: "45%",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Star,
      title: "Customer Rating",
      description: "Average rating across analyst platforms",
      value: "4.9/5",
      color: "from-amber-500 to-yellow-500",
    },
  ];

  const analystFirms = [
    { name: "Gartner", logo: "G", color: "bg-purple-100 text-purple-700" },
    { name: "Forrester", logo: "F", color: "bg-blue-100 text-blue-700" },
    { name: "IDC", logo: "I", color: "bg-emerald-100 text-emerald-700" },
    { name: "NSS Labs", logo: "N", color: "bg-red-100 text-red-700" },
    { name: "AV-TEST", logo: "A", color: "bg-amber-100 text-amber-700" },
    {
      name: "Peer Insights",
      logo: "P",
      color: "bg-indigo-100 text-indigo-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start gap-8">
            <div className="w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center flex-shrink-0">
              <BarChart className="w-10 h-10 text-blue-600" />
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight ">
                Analyst Recognition
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl">
                Industry-leading recognition from top cybersecurity analysts and
                independent testing organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Grid Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Analyst Reports & Recognition
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our security excellence is consistently validated by leading
              industry analysts through comprehensive evaluations and real-world
              testing scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analystReports.map((report, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-r ${report.color} flex items-center justify-center mb-6 shadow-md`}
                >
                  <report.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 pr-4">
                    {report.title}
                  </h3>
                  <span className="text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">
                    {report.date}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {report.description}
                </p>
                <div className="space-y-3 mb-6">
                  {report.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-lg font-bold text-gray-900">
                    {report.metrics}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solutions Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-blue-100">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mr-4 shadow-md">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  Evaluation Criteria
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Comprehensive testing of threat detection and prevention
                      capabilities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Evaluation of product vision and market strategy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Assessment of enterprise deployment and management
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-600 to-slate-700 flex items-center justify-center mr-4 shadow-md">
                    <Bullseye className="w-6 h-6 text-white" />
                  </div>
                  Key Strengths Highlighted
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      AI-powered advanced threat detection and response
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Superior protection rates in independent testing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Exceptional customer support and satisfaction ratings
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Data Grid Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-12">
            Performance Metrics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketData.map((item, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-slate-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <item.icon className="w-9 h-9 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-3">
                  {item.value}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analyst Firms Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-cyan-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-12">
            Recognized by Industry Leaders
          </h3>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-cyan-100">
            <p className="text-gray-700 text-lg leading-relaxed mb-12 text-center max-w-4xl mx-auto">
              Our solutions are consistently evaluated and recognized by the
              world's most respected cybersecurity analyst firms and independent
              testing organizations, providing objective validation of our
              security effectiveness and market leadership.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {analystFirms.map((firm, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div
                    className={`w-20 h-20 rounded-2xl ${firm.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <span className="text-3xl font-bold">{firm.logo}</span>
                  </div>
                  <span className="text-base font-semibold text-gray-800 text-center">
                    {firm.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-12 border border-blue-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Continuous Validation
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our commitment to security excellence is continuously validated
              through rigorous independent testing and analyst evaluation. These
              recognitions demonstrate our ongoing dedication to providing
              enterprise-grade protection that meets the highest standards of
              the cybersecurity industry.
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
}