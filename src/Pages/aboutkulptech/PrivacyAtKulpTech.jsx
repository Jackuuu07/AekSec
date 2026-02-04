import React from 'react';
import { Lock, Shield, EyeOff, FileText, CheckCircle, Key, Globe, Users } from 'lucide-react';

export default function PrivacyAtKulpTech() {
  const complianceCertifications = [
    {
      name: "GDPR",
      status: "Compliant",
      description: "General Data Protection Regulation"
    },
    {
      name: "CCPA",
      status: "Certified",
      description: "California Consumer Privacy Act"
    },
    {
      name: "ISO 27001",
      status: "Certified",
      description: "Information security management"
    },
    {
      name: "SOC 2",
      status: "Type II",
      description: "Service organization controls"
    }
  ];

  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Minimization",
      description: "Collect only essential data required for security operations. Automatic data retention policies ensure unnecessary information is regularly purged from our systems.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: EyeOff,
      title: "Privacy by Default",
      description: "All security products and services are configured with maximum privacy settings enabled. Customer data is pseudonymized and encrypted at rest and in transit.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Key,
      title: "End-to-End Encryption",
      description: "Military-grade encryption protects all customer data. Zero-knowledge architecture ensures only authorized parties can access decrypted information.",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description: "Adherence to international privacy regulations including GDPR, CCPA, PIPEDA, and APEC CBPR. Regional data sovereignty requirements fully supported.",
      color: "from-cyan-600 to-blue-600"
    }
  ];

  const complianceStandards = [
    {
      standard: "ISO/IEC 27001:2022",
      status: "Certified",
      description: "Information security management"
    },
    {
      standard: "ISO/IEC 27701 (Privacy)",
      status: "Certified",
      description: "Privacy information management"
    },
    {
      standard: "SOC 2 Type II",
      status: "Audited",
      description: "Trust services criteria"
    },
    {
      standard: "NIST Cybersecurity Framework",
      status: "Aligned",
      description: "Cybersecurity best practices"
    }
  ];

  const dataProtectionMetrics = [
    {
      metric: "Data Encryption Coverage",
      value: "100%",
      description: "Complete data protection"
    },
    {
      metric: "Privacy Impact Assessments",
      value: "Quarterly",
      description: "Regular privacy reviews"
    },
    {
      metric: "Employee Privacy Training",
      value: "Annual",
      description: "Ongoing education"
    }
  ];

  const privacyOperations = [
    {
      icon: Users,
      metric: "Dedicated Privacy Team",
      value: "50+ specialists",
      description: "Privacy experts"
    },
    {
      icon: FileText,
      metric: "Compliance Monitoring",
      value: "Automated",
      description: "Continuous oversight"
    },
    {
      icon: Lock,
      metric: "Privacy Incident Response",
      value: "24/7",
      description: "Rapid response capability"
    }
  ];

  const privacyPerformance = [
    {
      value: "99.99%",
      label: "Privacy Compliance Uptime",
      description: "Continuous compliance"
    },
    {
      value: "0",
      label: "Privacy Breaches",
      description: "Since 2020"
    },
    {
      value: "4 hours",
      label: "Average Response Time",
      description: "Privacy requests"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-100 text-black">
        <div className="max-w-7xl mx-auto flex items-start gap-8">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
            <Lock className="w-10 h-10 text-black" />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Privacy at KalpTech
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Zero-trust privacy architecture ensuring data protection, transparency, and compliance 
              across all security operations and customer engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Compliance Certifications */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {complianceCertifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-3">
                  {cert.name}
                </div>
                <div className="text-lg font-medium text-gray-900 mb-2">
                  {cert.status}
                </div>
                <div className="text-gray-600 text-sm">
                  {cert.description}
                </div>
              </div>
            ))}
          </div>

          {/* Privacy Principles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Privacy Principles
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Foundational principles guiding our approach to data protection and privacy management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {privacyPrinciples.map((principle, index) => (
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

          {/* Compliance Framework */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Compliance Framework
            </h3>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Certifications & Standards */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                <h4 className="text-xl font-bold text-gray-900 mb-8">
                  Certifications & Standards
                </h4>
                <div className="space-y-6">
                  {complianceStandards.map((standard, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <div>
                          <div className="font-medium text-gray-900">{standard.standard}</div>
                          <div className="text-gray-600 text-sm">{standard.description}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{standard.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Protection Measures */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                <h4 className="text-xl font-bold text-gray-900 mb-8">
                  Data Protection Measures
                </h4>
                <div className="space-y-8">
                  {dataProtectionMetrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-lg font-medium text-gray-900">
                          {metric.metric}
                        </div>
                        <div className="text-lg font-bold text-gray-900">
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
            </div>
          </div>

          {/* Privacy Operations Center */}
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-blue-100 mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Privacy Operations Center
                </h3>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Our dedicated Privacy Operations Center monitors data protection across all systems, 
                  ensuring continuous compliance and rapid response to privacy incidents.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    Privacy Operations
                  </h4>
                  <div className="space-y-6">
                    {privacyOperations.map((operation, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <operation.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-900">{operation.metric}</div>
                          <div className="text-gray-600 text-sm">
                            {operation.value} • {operation.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {privacyPerformance.map((performance, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        {performance.value}
                      </div>
                      <div className="text-sm font-medium text-gray-900 mb-1">
                        {performance.label}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {performance.description}
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
              Privacy Commitment
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We are committed to maintaining the highest standards of data protection and privacy 
                across all our operations. Our privacy program is built on transparency, security, 
                and accountability, ensuring that customer data is protected throughout its lifecycle.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Regular privacy impact assessments and audits</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Transparent data processing and sharing practices</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Robust incident response and breach notification</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Continuous improvement of privacy controls</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Trust Through Transparency
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              By implementing rigorous privacy controls and maintaining transparent data practices, 
              we build and maintain trust with our customers while protecting their sensitive 
              information against evolving threats.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}