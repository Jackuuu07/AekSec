import React from 'react';
import { TrendingUp, DollarSign, Target, Rocket, Building, Users, PieChart, BarChart, CheckCircle } from 'lucide-react';

export default function KulpTechVentures() {
  const investmentStats = [
    {
      value: "$500M",
      label: "Fund Size",
      description: "Total investment capital"
    },
    {
      value: "35+",
      label: "Portfolio Companies",
      description: "Strategic investments"
    },
    {
      value: "12",
      label: "Strategic Acquisitions",
      description: "Successful integrations"
    },
    {
      value: "4.2x",
      label: "Average ROI",
      description: "Portfolio performance"
    }
  ];

  const focusAreas = [
    {
      icon: Target,
      title: "Enterprise Security",
      description: "Solutions addressing sophisticated enterprise threats including advanced persistent threats, insider risks, and supply chain vulnerabilities.",
      stats: ["Portfolio: 15 companies", "Average Check: $8M"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Rocket,
      title: "Emerging Technologies",
      description: "Investing in quantum security, AI-powered defense, blockchain security, and other next-generation security paradigms.",
      stats: ["Portfolio: 12 companies", "Early Stage Focus"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Building,
      title: "Critical Infrastructure",
      description: "Protection solutions for energy grids, transportation systems, healthcare networks, and other essential national infrastructure.",
      stats: ["Portfolio: 8 companies", "Government Focus"],
      color: "from-cyan-600 to-blue-600"
    },
    {
      icon: Users,
      title: "Human-Centric Security",
      description: "Technologies addressing human factors in security including training platforms, behavioral analytics, and insider threat detection.",
      stats: ["Portfolio: 10 companies", "Series A-B Focus"],
      color: "from-orange-600 to-yellow-600"
    }
  ];

  const portfolioMetrics = [
    {
      label: "Overall Portfolio IRR",
      value: "42%",
      description: "Internal rate of return"
    },
    {
      label: "Strategic Acquisition Rate",
      value: "35%",
      description: "Portfolio companies acquired"
    },
    {
      label: "Follow-on Investment Rate",
      value: "60%",
      description: "Subsequent funding rounds"
    }
  ];

  const stageDistribution = [
    {
      stage: "Seed Stage",
      percentage: "25%",
      color: "bg-green-500"
    },
    {
      stage: "Series A",
      percentage: "40%",
      color: "bg-blue-500"
    },
    {
      stage: "Series B+",
      percentage: "35%",
      color: "bg-purple-500"
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
              KalpTech Ventures
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Investing in the future of cybersecurity. Our venture arm identifies and accelerates 
              breakthrough security technologies that complement our mission of enterprise protection.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Investment Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {investmentStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 text-center">
                <div className="text-4xl font-bold text-green-600 mb-3">
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

          {/* Investment Focus Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Investment Focus Areas
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Strategic investments in technologies that address critical security gaps and emerging threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center mb-6 shadow-md`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {area.stats.map((stat, idx) => (
                    <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio Performance */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Portfolio Performance
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Investment Returns */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                <h4 className="text-xl font-bold text-gray-900 mb-8">
                  Investment Returns
                </h4>
                <div className="space-y-8">
                  {portfolioMetrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-lg font-medium text-gray-900">
                          {metric.label}
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                          {metric.value}
                        </div>
                      </div>
                      <div className="text-gray-600 text-sm">
                        {metric.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage Distribution */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    <PieChart className="w-7 h-7 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      Stage Distribution
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Current portfolio composition
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  {stageDistribution.map((stage, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                        <span className="font-medium text-gray-900">{stage.stage}</span>
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {stage.percentage}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Value Beyond Capital
            </h3>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                KalpTech Ventures provides more than just funding. Our portfolio companies benefit from 
                deep cybersecurity expertise, enterprise partnerships, go-to-market strategy, and 
                integration opportunities with KalpTech's global security platform.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Access to enterprise customer base</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Technical validation and integration</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Market intelligence and threat data</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Strategic guidance from security experts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Building the Future of Security
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Through strategic investments and partnerships, we're accelerating innovation in 
              cybersecurity and shaping the security landscape of tomorrow while delivering 
              strong returns to our investors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}