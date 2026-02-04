import React from 'react';
import { Users, Shield, Globe, Award, Target, Lock, CheckCircle } from 'lucide-react';

export default function InclusionBelonging() {
  const diversityMetrics = [
    {
      value: "45%",
      label: "Women in Security Roles",
      description: "Exceeds industry average by 20%"
    },
    {
      value: "30+",
      label: "Employee Resource Groups",
      description: "Cybersecurity-focused communities"
    },
    {
      value: "85%",
      label: "Inclusion Training",
      description: "Annual security diversity certification"
    },
    {
      value: "200+",
      label: "Underrepresented Hires",
      description: "Through security apprenticeship program"
    }
  ];

  const securityPrograms = [
    {
      title: "Cybersecurity Apprenticeship Program",
      description: "Providing hands-on security training to underrepresented groups, creating a pipeline of diverse cybersecurity talent.",
      highlights: [
        "120 Graduates",
        "95% Retention rate"
      ],
      icon: Shield,
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Neurodiverse Threat Analysis Team",
      description: "Specialized teams leveraging unique cognitive patterns to identify sophisticated cyber attack patterns.",
      highlights: [
        "40% improved pattern detection",
        "Zero-day attack discovery"
      ],
      icon: Target,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Global Security Culture Initiative",
      description: "Cross-cultural security awareness training ensuring our solutions respect local privacy norms and regulations.",
      highlights: [
        "12 Global regions covered",
        "GDPR compliant"
      ],
      icon: Globe,
      color: "from-green-600 to-emerald-600"
    }
  ];

  const corePrinciples = [
    {
      icon: Target,
      title: "Diverse Threat Perspectives",
      description: "Multiple cultural and cognitive perspectives enhance our threat detection capabilities by 40%.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Lock,
      title: "Inclusive Security Design",
      description: "Products designed by diverse teams prevent 30% more edge-case vulnerabilities.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Globe,
      title: "Global Security Mindset",
      description: "25 nationalities provide localized threat intelligence for global protection strategies.",
      color: "from-green-600 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-100 text-black">
        <div className="max-w-7xl mx-auto flex items-start gap-8">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
            <Users className="w-10 h-10 text-black" />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Inclusion & Belonging
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              At KalpTech, we believe diverse perspectives strengthen our defense capabilities. 
              Our inclusive culture drives innovation in cybersecurity solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Core Principles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security Through Diversity
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our diverse workforce strengthens our security posture and innovation capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {corePrinciples.map((principle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${principle.color} flex items-center justify-center mb-6 shadow-md`}>
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Metrics Section */}
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-blue-100 mb-16">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
                Our Diversity & Inclusion Metrics
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {diversityMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-3">
                      {metric.value}
                    </div>
                    <div className="text-lg font-medium text-gray-900 mb-2">
                      {metric.label}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Programs Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Inclusive Security Programs
            </h3>
            <div className="space-y-8">
              {securityPrograms.map((program, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-1/4">
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${program.color} flex items-center justify-center mb-4 shadow-md`}>
                        <program.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        {program.title}
                      </h4>
                    </div>
                    <div className="md:w-3/4">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {program.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Building a Diverse Security Culture
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Our commitment to inclusion extends beyond hiring to create an environment where 
                all voices are heard and valued. We actively foster belonging through mentorship 
                programs, bias training, and creating spaces for diverse perspectives to shape 
                our security strategies and product development.
              </p>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Stronger Security Through Diversity
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              By embracing diverse perspectives and experiences, we build more robust security 
              solutions that protect against a wider range of threats and serve our global 
              customer base more effectively.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}