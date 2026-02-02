import React from 'react';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  Video, 
  MessageSquare, 
  FileText, 
  Download,
  Shield,
  User,
  Settings,
  Wrench,
  Link,
  Code,
  MessageCircle,
  Mail,
  Phone,
  AlertTriangle,
  CheckCircle,
  Globe,
  Lock,
  Database
} from 'lucide-react';

const HelpCenter = () => {
  const knowledgeSections = [
    {
      title: "Getting Started",
      icon: <HelpCircle className="w-6 h-6" />,
      description: "Begin your security journey with KalpTech",
      articles: [
        "Quick Start Guide for New Customers",
        "Setting Up Your Security Dashboard",
        "Initial Security Configuration"
      ]
    },
    {
      title: "Security Features",
      icon: <Shield className="w-6 h-6" />,
      description: "Advanced security tools and features",
      articles: [
        "Multi-Factor Authentication Setup",
        "Real-time Threat Detection",
        "Vulnerability Management"
      ]
    },
    {
      title: "Troubleshooting",
      icon: <Wrench className="w-6 h-6" />,
      description: "Common issues and solutions",
      articles: [
        "Connection Issues Resolution",
        "Performance Optimization",
        "Error Code Reference"
      ]
    }
  ];

  const resources = [
    {
      title: "Documentation Library",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Comprehensive technical documentation",
      type: "PDF Guides"
    },
    {
      title: "Video Tutorials",
      icon: <Video className="w-5 h-5" />,
      description: "Step-by-step visual guides",
      type: "Video Series"
    },
    {
      title: "Security Whitepapers",
      icon: <FileText className="w-5 h-5" />,
      description: "In-depth security research papers",
      type: "Research Papers"
    },
    {
      title: "API Documentation",
      icon: <Code className="w-5 h-5" />,
      description: "Developer guides and API references",
      type: "Technical Docs"
    }
  ];

  const supportChannels = [
    {
      title: "Email Support",
      icon: <Mail className="w-5 h-5" />,
      description: "Detailed technical inquiries",
      response: "Response within 2-4 hours",
      available: true
    },
    {
      title: "Enterprise Phone",
      icon: <Phone className="w-5 h-5" />,
      description: "Dedicated support for enterprise clients",
      response: "24/7 availability",
      available: true
    },
    {
      title: "Security Alerts",
      icon: <AlertTriangle className="w-5 h-5" />,
      description: "Critical security notifications",
      response: "Immediate attention",
      available: true
    }
  ];

  const systemStatus = {
    overall: "operational",
    services: [
      { name: "Security Dashboard", status: "operational" },
      { name: "Threat Detection", status: "operational" },
      { name: "API Services", status: "operational" },
      { name: "Data Analytics", status: "operational" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
           
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              KalpTech Security Help Center
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive resources and support for your cybersecurity needs
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documentation, guides, or troubleshooting..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {/* Knowledge Base Section */}
          <section>
            <div className="flex items-center mb-8">
              <div className="p-2 bg-blue-50 rounded-lg mr-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Knowledge Base</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {knowledgeSections.map((section, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg mr-4 text-gray-600">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{section.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{section.description}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {section.articles.map((article, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700">{article}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Resources Section */}
          <section>
            <div className="flex items-center mb-8">
              <div className="p-2 bg-blue-50 rounded-lg mr-3">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Resources</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg inline-block mb-3">
                      <div className="text-blue-600">{resource.icon}</div>
                    </div>
                    <div className="mt-2">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Support Section */}
          <section>
            <div className="flex items-center mb-8">
              <div className="p-2 bg-blue-50 rounded-lg mr-3">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Support Channels</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg mr-4 ${channel.available ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                      {channel.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{channel.title}</h3>
                      {channel.available && (
                        <div className="flex items-center mt-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-sm text-green-700">Available</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{channel.description}</p>
                  <p className="text-sm text-gray-500">Response: {channel.response}</p>
                </div>
              ))}
            </div>

            {/* Emergency Notice */}
            <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-start">
                <div className="p-3 bg-orange-100 rounded-lg mr-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-orange-800 text-lg mb-2">Security Emergency Protocol</h3>
                  <p className="text-orange-700 mb-4">
                    For critical security incidents requiring immediate attention
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-orange-900">Emergency Contact:</p>
                      <p className="text-orange-800">hr@kalptech.com</p>
                    </div>
                    <div>
                      <p className="font-medium text-orange-900">Response Time:</p>
                      <p className="text-orange-800">Immediate priority response</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* System Status Section */}
          <section>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-50 rounded-lg mr-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">System Status</h2>
                    <div className="flex items-center mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-green-700 font-medium">All Systems Operational</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  Last updated: 01/01/2026, 10:30 AM IST
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {systemStatus.services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{service.name}</span>
                    </div>
                    <span className="text-sm text-green-700 font-medium">Operational</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      
    </div>
  );
};

export default HelpCenter;