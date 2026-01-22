import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Personal identification information (name, email, company)",
        "Technical data (IP address, browser type, device information)",
        "Usage data (pages visited, features used)",
        "Security event data (login attempts, access logs)"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "Provide and maintain our security services",
        "Improve product functionality and user experience",
        "Communicate important security updates",
        "Comply with legal obligations",
        "Prevent fraud and enhance security"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Security",
      content: [
        "AES-256 encryption for data at rest",
        "TLS 1.3 encryption for data in transit",
        "Regular security audits and penetration testing",
        "SOC 2 Type II and ISO 27001 certified",
        "Role-based access controls"
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "Right to access your personal data",
        "Right to rectification of inaccurate data",
        "Right to erasure ('right to be forgotten')",
        "Right to restrict processing",
        "Right to data portability",
        "Right to object to processing"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Data Retention",
      content: [
        "Customer data: Retained while account is active, deleted 30 days after termination",
        "Security logs: Retained for 2 years for audit purposes",
        "Backup data: Retained for 90 days",
        "Anonymized data: May be retained indefinitely for analytics"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-2xl mb-6">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            KulpTech Security Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
          <p className="text-gray-700 mb-4">
            At KulpTech Security, we take your privacy and data security seriously. As a 
            cybersecurity company, we understand the importance of protecting personal 
            information. This Privacy Policy explains how we collect, use, disclose, and 
            safeguard your information when you use our services.
          </p>
          <p className="text-gray-700">
            We adhere to global privacy standards including GDPR, CCPA, and other applicable 
            data protection regulations.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600 mr-4">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Our Privacy Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Data Protection Officer</p>
              <p className="text-gray-700">Email: dpo@kulptech.com</p>
              <p className="text-gray-700">Phone: +1-800-KULP-PRIVACY</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Privacy Requests</p>
              <p className="text-gray-700">
                Submit privacy-related requests through our{' '}
                <a href="/privacy-portal" className="text-blue-600 font-semibold underline">
                  Privacy Portal
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Updates */}
        <div className="mt-8 p-6 bg-gray-100 rounded-xl">
          <p className="text-gray-700">
            <strong>Note:</strong> We may update this Privacy Policy periodically. We will 
            notify you of any changes by posting the new Privacy Policy on this page and 
            updating the "Last Updated" date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;