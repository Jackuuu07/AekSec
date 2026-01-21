import React from 'react';
import { BarChart, TrendingUp, Shield, Award, Target, Users } from 'lucide-react';

export default function AnalystSpeak() {
  const analystReports = [
    {
      icon: Shield,
      title: "Gartner Magic Quadrant",
      description: "Positioned as a Leader in the 2024 Gartner Magic Quadrant for Endpoint Protection Platforms. Recognized for our complete vision and execution capabilities.",
      metrics: "Score: 4.8/5",
      date: "March 2024",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: BarChart,
      title: "Forrester Wave Report",
      description: "Ranked as a Strong Performer in The Forrester Wave™: Extended Detection and Response (XDR) Providers, Q4 2023. Praised for our threat intelligence capabilities.",
      metrics: "Market Presence: Strong",
      date: "December 2023",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: TrendingUp,
      title: "IDC MarketScape",
      description: "Named a Leader in the IDC MarketScape: Worldwide Managed Security Services 2023. Highlighted for our 24/7 SOC operations and AI-driven threat hunting.",
      metrics: "Growth: 45% YoY",
      date: "November 2023",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: Target,
      title: "NSS Labs Results",
      description: "Achieved 99.8% protection rate in NSS Labs Breach Detection Systems test. Blocked 100% of evasive malware and advanced attacks in controlled tests.",
      metrics: "Protection: 99.8%",
      date: "January 2024",
      color: "from-red-600 to-rose-600"
    },
    {
      icon: Award,
      title: "AV-TEST Awards",
      description: "Awarded Top Product for Enterprise Endpoint Security, achieving perfect scores in protection, performance, and usability categories.",
      metrics: "Score: 18/18",
      date: "February 2024",
      color: "from-amber-600 to-yellow-600"
    },
    {
      icon: Users,
      title: "Customer Reviews",
      description: "Rated 4.9/5 on Gartner Peer Insights with 500+ verified reviews. Customers highlight our rapid response times and expert security consultants.",
      metrics: "CSAT: 98%",
      date: "Ongoing",
      color: "from-indigo-600 to-violet-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <BarChart className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Analyst Recognition</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Industry-leading recognition from top cybersecurity analysts and independent testing organizations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Analysts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              KulpTech consistently receives top ratings from leading analyst firms for our innovative security solutions and proven protection capabilities.
            </p>
          </div>

          {/* Reports Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {analystReports.map((report, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${report.color} w-fit mb-6`}>
                  <report.icon className="w-10 h-10 text-white" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{report.title}</h3>
                  <span className="text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {report.date}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{report.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-lg font-bold text-gray-900">{report.metrics}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Market Position */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Market Leadership Position</h3>
              <p className="text-xl text-gray-700 mb-8">
                KulpTech is recognized as a leader across multiple security categories, demonstrating our comprehensive approach to enterprise protection.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">#2</div>
                  <div className="text-gray-600">XDR Market</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">#1</div>
                  <div className="text-gray-600">Threat Intelligence</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Top 3</div>
                  <div className="text-gray-600">Enterprise Security</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-gray-600">Customer Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}