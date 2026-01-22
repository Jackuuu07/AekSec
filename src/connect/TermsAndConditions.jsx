import React, { useState } from 'react';
import { FileText, Scale, AlertCircle, Check, Download, ChevronDown, ChevronUp } from 'lucide-react';

const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      content: `By accessing or using KulpTech Security services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you are entering into these terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity.`
    },
    {
      id: 'services',
      title: '2. Description of Services',
      content: `KulpTech Security provides cloud-based and on-premises cybersecurity solutions including but not limited to threat detection, vulnerability management, security monitoring, and incident response services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.`
    },
    {
      id: 'security',
      title: '3. Security Responsibilities',
      content: `While KulpTech implements industry-standard security measures, customers are responsible for maintaining the security of their credentials, implementing recommended security practices, and promptly reporting any suspected security breaches. We conduct regular security audits but do not guarantee absolute protection against all threats.`
    },
    {
      id: 'data',
      title: '4. Data Processing and Privacy',
      content: `Customer data is processed in accordance with our Privacy Policy and Data Processing Agreement. As a security company, we implement additional safeguards including encryption, access controls, and audit logging. We do not claim ownership of customer data but require necessary rights to provide security services.`
    },
    {
      id: 'liability',
      title: '5. Limitation of Liability',
      content: `KulpTech's liability for any claim arising from these terms shall not exceed the fees paid by the customer during the six months preceding the claim. We shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, data, or business opportunities.`
    },
    {
      id: 'indemnification',
      title: '6. Indemnification',
      content: `You agree to indemnify and hold harmless KulpTech Security from any claims, damages, or expenses arising from your misuse of our services, violation of these terms, or infringement of third-party rights.`
    },
    {
      id: 'termination',
      title: '7. Termination',
      content: `Either party may terminate these terms with 30 days written notice. Upon termination, you must cease using our services and we will delete your data in accordance with our data retention policies, unless required to retain by law.`
    },
    {
      id: 'compliance',
      title: '8. Regulatory Compliance',
      content: `Our services are designed to help customers meet compliance requirements including GDPR, HIPAA, PCI DSS, and SOC 2. However, ultimate compliance responsibility rests with the customer. We provide necessary documentation and support for compliance efforts.`
    }
  ];

  const keyPoints = [
    'Monthly security reporting required for enterprise plans',
    '90-day notice for significant service changes',
    'Mandatory security incident reporting within 24 hours',
    'Data export available upon request within 30 days',
    'SLA guarantees 99.9% uptime for critical services'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-gray-100 rounded-2xl mb-6">
            <Scale className="w-12 h-12 text-gray-700" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            KulpTech Security Terms and Conditions
          </h1>
          <p className="text-xl text-gray-600">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-800 text-lg mb-2">Important Legal Notice</h3>
              <p className="text-yellow-700">
                These Terms and Conditions constitute a legally binding agreement. By using 
                KulpTech Security services, you agree to these terms. Please read them carefully 
                and consult with legal counsel if you have any questions.
              </p>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Terms at a Glance</h2>
          <div className="space-y-3">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-blue-50 rounded-2xl p-6 mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <FileText className="w-8 h-8 text-blue-600 mr-4" />
            <div>
              <p className="font-semibold text-gray-900">Full Legal Document</p>
              <p className="text-gray-600">Download for your records</p>
            </div>
          </div>
          <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Download PDF Version
          </button>
        </div>

        {/* Terms Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                {expandedSections[section.id] ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedSections[section.id] && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Agreement Section */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Agreement</h2>
          <p className="text-gray-700 mb-6">
            By proceeding to use KulpTech Security services, you acknowledge that you have 
            read and understood these Terms and Conditions, and agree to be bound by them. 
            If you do not agree with any part of these terms, you must discontinue use of 
            our services immediately.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-xl border">
              <p className="font-semibold text-gray-900 mb-2">For Questions</p>
              <p className="text-gray-600">legal@kulptech.com</p>
            </div>
            <div className="p-5 bg-white rounded-xl border">
              <p className="font-semibold text-gray-900 mb-2">For Enterprise Contracts</p>
              <p className="text-gray-600">sales@kulptech.com</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-xl border border-blue-200">
            <div className="flex items-start">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-4">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Updates to Terms</p>
                <p className="text-gray-700">
                  We may update these Terms and Conditions periodically. Continued use of our 
                  services after changes constitutes acceptance of the new terms. We will 
                  notify customers of significant changes via email and dashboard notifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;