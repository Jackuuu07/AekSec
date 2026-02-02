import React from 'react';
import { Cookie, Shield, Lock, Eye, Database, Clock, Globe, FileText, AlertCircle, CheckCircle } from 'lucide-react';

const CookiePolicy = () => {
  const cookieCategories = [
    {
      id: 'essential',
      name: 'Essential Security Cookies',
      icon: <Shield className="w-6 h-6" />,
      description: 'Required for secure site operation and protection against attacks',
      purpose: 'Session security, authentication, and system integrity',
      examples: [
        'Session management tokens',
        'Cross-site request forgery (CSRF) protection',
        'Load balancing and DDoS mitigation',
        'Security preference storage'
      ],
      duration: 'Session or up to 24 hours'
    },
    {
      id: 'analytics',
      name: 'Security Analytics Cookies',
      icon: <Database className="w-6 h-6" />,
      description: 'Collect anonymous security metrics and performance data',
      purpose: 'Threat analysis, system performance, and security improvements',
      examples: [
        'Security dashboard usage patterns',
        'Threat detection performance metrics',
        'System response time tracking',
        'Feature adoption rates'
      ],
      duration: '30 to 90 days'
    },
    {
      id: 'preference',
      name: 'Security Preference Cookies',
      icon: <Lock className="w-6 h-6" />,
      description: 'Store your security settings and preferences',
      purpose: 'Personalized security configurations and user preferences',
      examples: [
        'Two-factor authentication settings',
        'Notification preferences',
        'Dashboard layout configurations',
        'Regional security settings'
      ],
      duration: '90 days to 1 year'
    },
    {
      id: 'functional',
      name: 'Functional Security Cookies',
      icon: <Eye className="w-6 h-6" />,
      description: 'Enable additional security features and functionality',
      purpose: 'Enhanced security controls and user experience',
      examples: [
        'Geolocation for threat intelligence',
        'Security alert settings',
        'Report generation preferences',
        'Integration configurations'
      ],
      duration: '30 to 365 days'
    }
  ];

  const cookieDetails = [
    {
      name: 'kt_session_secure',
      purpose: 'Maintains encrypted session for authenticated users',
      provider: 'KalpTech Security Platform',
      duration: 'Session',
      category: 'essential'
    },
    {
      name: 'kt_csrf_token',
      purpose: 'Prevents Cross-Site Request Forgery attacks',
      provider: 'KalpTech Security Platform',
      duration: '24 hours',
      category: 'essential'
    },
    {
      name: 'kt_threat_analytics',
      purpose: 'Tracks security event patterns for threat intelligence',
      provider: 'KalpTech Analytics',
      duration: '30 days',
      category: 'analytics'
    },
    {
      name: 'kt_security_prefs',
      purpose: 'Stores user security preferences and configurations',
      provider: 'KalpTech Security Platform',
      duration: '90 days',
      category: 'preference'
    },
    {
      name: 'kt_geo_security',
      purpose: 'Enables location-based threat detection',
      provider: 'KalpTech Security Platform',
      duration: '30 days',
      category: 'functional'
    }
  ];

  const securityPrinciples = [
    {
      title: 'Transparent Data Collection',
      description: 'We clearly document all cookie usage and data collection practices',
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: 'Minimum Data Principle',
      description: 'We collect only essential data required for security operations',
      icon: <Database className="w-5 h-5" />
    },
    {
      title: 'Secure Data Handling',
      description: 'All collected data is encrypted and stored in secure environments',
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: 'Regular Audits',
      description: 'Cookie usage is regularly audited for compliance and security',
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              KalpTech Security Cookie Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Our commitment to transparency in data collection for security operations
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {/* Introduction */}
          <section>
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-blue-50 rounded-lg mr-4">
                  <AlertCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Security-Focused Cookie Usage</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 mb-4">
                      As a cybersecurity company, we approach data collection with the highest security standards. 
                      Cookies on our platform are designed primarily to enhance security, protect user sessions, 
                      and improve threat detection capabilities.
                    </p>
                    <p className="text-gray-700">
                      We never use cookies to collect sensitive personal information, authentication credentials, 
                      or financial data. All cookie data is encrypted and handled according to strict security protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cookie Categories */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Categories</h2>
              <p className="text-gray-600">
                Understanding the different types of cookies used in our security platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cookieCategories.map((category) => (
                <div key={category.id} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg mr-4 text-blue-600">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-700 text-sm mb-2">Primary Purpose:</p>
                      <p className="text-gray-600 text-sm">{category.purpose}</p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-gray-700 text-sm mb-2">Examples:</p>
                      <div className="space-y-2">
                        {category.examples.map((example, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                            <span className="text-gray-600 text-sm">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Duration: {category.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Security Principles */}
          <section>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Security Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {securityPrinciples.map((principle, index) => (
                  <div key={index} className="bg-white rounded-lg p-5">
                    <div className="p-3 bg-blue-50 rounded-lg inline-block mb-4">
                      <div className="text-blue-600">{principle.icon}</div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{principle.title}</h3>
                    <p className="text-gray-600 text-sm">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cookie Details Table */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Cookie Information</h2>
              <p className="text-gray-600">
                Specific cookies used in the KalpTech Security Platform
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Cookie Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Purpose
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Provider
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Duration
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Category
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cookieDetails.map((cookie, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{cookie.name}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-700">{cookie.purpose}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700">{cookie.provider}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700">{cookie.duration}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            cookie.category === 'essential' 
                              ? 'bg-red-100 text-red-800'
                              : cookie.category === 'analytics'
                              ? 'bg-blue-100 text-blue-800'
                              : cookie.category === 'preference'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {cookie.category}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Browser Management */}
          <section>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  <Globe className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Managing Cookies in Your Browser</h2>
                  <p className="text-gray-600 mb-6">
                    You have control over cookie settings through your web browser. 
                    Below are general guidelines for popular browsers:
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Google Chrome</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Settings → Privacy and Security → Cookies and other site data</p>
                    <p>Customize cookie behavior for individual sites</p>
                    <p>Clear cookies and site data</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Mozilla Firefox</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Options → Privacy & Security → Cookies and Site Data</p>
                    <p>Manage exceptions and site permissions</p>
                    <p>Enhanced Tracking Protection settings</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Microsoft Edge</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Settings → Privacy, Search, and Services → Cookies</p>
                    <p>Block or allow cookies selectively</p>
                    <p>Clear browsing data on exit</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Information */}
          <section>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-blue-50 rounded-lg mr-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Compliance & Regulations</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 mb-4">
                      Our cookie usage complies with global data protection regulations including 
                      GDPR, CCPA, and other applicable privacy laws. We regularly review and 
                      update our practices to ensure ongoing compliance.
                    </p>
                    <p className="text-gray-700">
                      For more detailed information about our data protection practices, 
                      please refer to our comprehensive Privacy Policy and Data Processing Agreement.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-5 border border-gray-200 rounded-lg">
                  <div className="text-lg font-bold text-gray-900 mb-2">GDPR Compliant</div>
                  <p className="text-sm text-gray-600">EU General Data Protection Regulation</p>
                </div>
                <div className="text-center p-5 border border-gray-200 rounded-lg">
                  <div className="text-lg font-bold text-gray-900 mb-2">CCPA Ready</div>
                  <p className="text-sm text-gray-600">California Consumer Privacy Act</p>
                </div>
                <div className="text-center p-5 border border-gray-200 rounded-lg">
                  <div className="text-lg font-bold text-gray-900 mb-2">ISO 27001</div>
                  <p className="text-sm text-gray-600">Information Security Management</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      
    </div>
  );
};

export default CookiePolicy;