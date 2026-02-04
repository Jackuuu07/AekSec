import React from 'react';
import { Building, Globe, Handshake, Target, Users, Shield, CheckCircle, TrendingUp, Award, Network } from 'lucide-react';

export default function SupplierDiversity() {
  const supplierStats = [
    {
      value: "35%",
      label: "Diverse Suppliers",
      description: "Of total supplier base"
    },
    {
      value: "$150M",
      label: "Annual Spend",
      description: "On diverse suppliers"
    },
    {
      value: "500+",
      label: "Certified Partners",
      description: "Verified supplier network"
    },
    {
      value: "0",
      label: "Supply Chain Breaches",
      description: "Last 24 months"
    }
  ];

  const supplierCategories = [
    {
      icon: Shield,
      title: "Security Technology Providers",
      description: "Diverse vendors providing encryption, authentication, and threat detection technologies.",
      metrics: "45% Diverse Suppliers",
      benefits: ["Enhanced innovation", "Reduced supply chain risk", "Competitive pricing"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Building,
      title: "Infrastructure Partners",
      description: "Data center operators, cloud providers, and network infrastructure specialists.",
      metrics: "$75M Annual Spend",
      benefits: ["Geographic diversity", "Redundancy planning", "Compliance expertise"],
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Users,
      title: "Professional Services",
      description: "Security consultants, implementation specialists, and managed service providers.",
      metrics: "60% Minority-Owned",
      benefits: ["Local market knowledge", "Cultural competence", "Community investment"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Globe,
      title: "Global Supply Chain",
      description: "International partners ensuring security hardware and software availability worldwide.",
      metrics: "25 Countries",
      benefits: ["Supply chain resilience", "Regional expertise", "Market access"],
      color: "from-orange-600 to-yellow-600"
    }
  ];

  const securityAssessments = [
    {
      icon: Target,
      assessment: "Security Audits",
      status: "100% Compliance",
      description: "Regular security assessments"
    },
    {
      icon: CheckCircle,
      assessment: "Continuous Monitoring",
      status: "24/7 Oversight",
      description: "Ongoing vendor monitoring"
    },
    {
      icon: Award,
      assessment: "Certification Requirements",
      status: "ISO 27001 Required",
      description: "Minimum security standards"
    }
  ];

  const supplierTiers = [
    { 
      level: "Tier 1", 
      description: "Direct suppliers providing critical security technologies", 
      suppliers: "150+" 
    },
    { 
      level: "Tier 2", 
      description: "Component manufacturers and software developers", 
      suppliers: "300+" 
    },
    { 
      level: "Tier 3", 
      description: "Raw material suppliers and service providers", 
      suppliers: "500+" 
    },
    { 
      level: "Certified", 
      description: "Diverse-owned business enterprises", 
      suppliers: "200+" 
    }
  ];

  const performanceMetrics = [
    {
      label: "Supply Chain Innovation",
      value: "+40%",
      description: "New solutions from diverse suppliers"
    },
    {
      label: "Cost Reduction",
      value: "-25%",
      description: "Average savings from diverse sourcing"
    },
    {
      label: "Supplier Reliability",
      value: "+35%",
      description: "Improvement in delivery performance"
    }
  ];

  const diversityGoals = [
    {
      goal: "2024 Target: Diverse Spend",
      status: "40% Achieved",
      description: "Annual supplier diversity target"
    },
    {
      goal: "Supplier Development",
      status: "50+ Companies",
      description: "Vendors in development programs"
    },
    {
      goal: "Global Expansion",
      status: "15 New Regions",
      description: "Geographic diversity expansion"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-100 text-black">
        <div className="max-w-7xl mx-auto flex items-start gap-8">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
            <Handshake className="w-10 h-10 text-black" />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Supplier Diversity
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Strengthening our security posture through diverse supplier partnerships. 
              Our diverse supply chain enhances resilience, innovation, and reduces risk 
              in our security solutions ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Supplier Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {supplierStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 text-center">
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

          {/* Supplier Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Diverse Supplier Categories
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Strategic partnerships across multiple supplier categories to enhance supply chain security and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {supplierCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap">
                        {category.metrics}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="space-y-2">
                      {category.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start text-gray-700">
                          <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Supply Chain Security & Supplier Network */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Supply Chain Security & Network
            </h3>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Vendor Security Assessment */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Shield className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      Vendor Security Assessment
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Rigorous security screening for all suppliers
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  {securityAssessments.map((assessment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <assessment.icon className="w-5 h-5 text-gray-600" />
                        <div>
                          <div className="font-medium text-gray-900">{assessment.assessment}</div>
                          <div className="text-gray-600 text-sm">{assessment.description}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{assessment.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supplier Network */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Network className="w-7 h-7 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      Supplier Network
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Multi-tier supplier classification system
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  {supplierTiers.map((tier, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{tier.level}</div>
                        <div className="text-gray-600 text-sm">{tier.description}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900 text-xl">{tier.suppliers}</div>
                        <div className="text-gray-600 text-sm">Suppliers</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Supplier Diversity Impact */}
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-blue-100 mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Supplier Diversity Impact
                </h3>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Measurable benefits from our diverse supplier initiatives
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Performance Improvements */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-8">
                    Performance Improvements
                  </h4>
                  <div className="space-y-8">
                    {performanceMetrics.map((metric, index) => (
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

                {/* Diversity Goals */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                      <TrendingUp className="w-7 h-7 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        Diversity Goals
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Annual targets and achievements
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {diversityGoals.map((goal, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div>
                            <div className="font-medium text-gray-900">{goal.goal}</div>
                            <div className="text-gray-600 text-sm">{goal.description}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">{goal.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Benefits of Supplier Diversity
            </h3>
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 border border-orange-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our commitment to supplier diversity strengthens our supply chain resilience, 
                drives innovation through new perspectives, and contributes to economic 
                inclusion while maintaining the highest security standards for our customers.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Enhanced supply chain resilience and redundancy</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Access to innovative solutions and new technologies</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Economic inclusion and community development</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Reduced risk through diversified sourcing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Resilient Supply Chain Strategy
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Through strategic supplier diversity initiatives, we build more resilient and 
              innovative supply chains that enhance our ability to deliver secure, reliable 
              solutions while promoting economic inclusion and business excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}