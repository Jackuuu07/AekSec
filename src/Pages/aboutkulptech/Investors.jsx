import React from 'react';
import { TrendingUp, BarChart, Shield, DollarSign, Users, Target, CheckCircle } from 'lucide-react';

export default function Investors() {
  const financialMetrics = [
    {
      label: "Annual Revenue Growth",
      value: "+42%",
      description: "Year-over-year growth",
      color: "text-green-600"
    },
    {
      label: "Enterprise Customer Growth",
      value: "+65%",
      description: "New enterprise clients",
      color: "text-blue-600"
    },
    {
      label: "Recurring Revenue",
      value: "92%",
      description: "Subscription-based revenue",
      color: "text-purple-600"
    }
  ];

  const marketPosition = [
    {
      value: "#2",
      label: "XDR Market Share",
      description: "Gartner 2024",
      icon: BarChart
    },
    {
      value: "99.8%",
      label: "Customer Retention",
      description: "Enterprise Tier",
      icon: Users
    },
    {
      value: "+500",
      label: "Fortune 500 Clients",
      description: "Global Coverage",
      icon: Target
    },
    {
      value: "$2.3B",
      label: "ARR Projection",
      description: "2025 Target",
      icon: DollarSign
    }
  ];

  const investmentStrategy = [
    {
      icon: Shield,
      title: "R&D Investment",
      description: "25% of revenue reinvested in security research, AI threat detection, and zero-day protection.",
      amount: "$450M",
      period: "Annual R&D Budget",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Target,
      title: "Strategic Acquisitions",
      description: "Targeted investments in complementary security technologies and threat intelligence platforms.",
      amount: "$1.2B",
      period: "Acquisition Capital",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Users,
      title: "Global Expansion",
      description: "Investment in international SOCs, regional compliance centers, and local threat research.",
      amount: "$300M",
      period: "Expansion Funding",
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-100 text-black">
        <div className="max-w-7xl mx-auto flex items-start gap-8">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-10 h-10 text-black" />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Investor Relations
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Investing in the future of cybersecurity. KalpTech delivers superior returns through 
              market-leading protection technology and sustained revenue growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Market Valuation */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 mb-16 text-center">
            <div className="text-5xl font-bold text-green-600 mb-3">
              $4.2B
            </div>
            <div className="text-lg font-medium text-gray-900">
              Market Valuation
            </div>
          </div>

          {/* Financial Performance */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Financial Performance
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {financialMetrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                  <div className={`text-3xl font-bold ${metric.color} mb-3`}>
                    {metric.value}
                  </div>
                  <div className="text-lg font-medium text-gray-900 mb-2">
                    {metric.label}
                  </div>
                  <div className="text-gray-600">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Position */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Market Position
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketPosition.map((position, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 text-center">
                  <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center mx-auto mb-6">
                    <position.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-3">
                    {position.value}
                  </div>
                  <div className="text-lg font-medium text-gray-900 mb-2">
                    {position.label}
                  </div>
                  <div className="text-gray-600">
                    {position.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Strategy */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Strategic Security Investment
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {investmentStrategy.map((strategy, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${strategy.color} flex items-center justify-center mb-6 shadow-md`}>
                    <strategy.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {strategy.title}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {strategy.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {strategy.amount}
                    </div>
                    <div className="text-gray-600">
                      {strategy.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Growth Strategy
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our growth is driven by the increasing global demand for advanced cybersecurity solutions, 
                digital transformation across industries, and the rising sophistication of cyber threats. 
                We maintain a disciplined approach to capital allocation while investing aggressively in 
                areas with the highest potential for market leadership and shareholder value creation.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Expanding enterprise customer base</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Product innovation and R&D investment</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Strategic partnerships and acquisitions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Building Shareholder Value
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are committed to creating long-term shareholder value through disciplined financial 
              management, strategic investments in market-leading technology, and delivering consistent 
              growth in an expanding cybersecurity market.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}