import React, { useState } from 'react';
import { Search, HelpCircle, BookOpen, Video, MessageSquare, Phone, FileText, Download, ChevronRight } from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Topics', icon: '📚' },
    { id: 'getting-started', label: 'Getting Started', icon: '🚀' },
    { id: 'account', label: 'Account & Billing', icon: '👤' },
    { id: 'security', label: 'Security Features', icon: '🔒' },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: '🔧' },
    { id: 'integrations', label: 'Integrations', icon: '🔗' },
    { id: 'api', label: 'API & Developers', icon: '💻' }
  ];

  const popularArticles = [
    { title: 'How to Set Up Multi-Factor Authentication', category: 'security', reads: '1.2k' },
    { title: 'Understanding Threat Detection Alerts', category: 'security', reads: '890' },
    { title: 'Migrating from Legacy Security Systems', category: 'getting-started', reads: '756' },
    { title: 'API Rate Limits and Best Practices', category: 'api', reads: '543' },
    { title: 'Configuring SIEM Integration', category: 'integrations', reads: '432' }
  ];

  const quickLinks = [
    { icon: <Download className="w-5 h-5" />, text: 'Download Documentation', link: '/docs' },
    { icon: <Video className="w-5 h-5" />, text: 'Video Tutorials', link: '/tutorials' },
    { icon: <FileText className="w-5 h-5" />, text: 'Security Whitepapers', link: '/whitepapers' },
    { icon: <MessageSquare className="w-5 h-5" />, text: 'Community Forum', link: '/community' }
  ];

  const contactOptions = [
    { icon: '💬', title: 'Live Chat', desc: '24/7 with security experts', available: true },
    { icon: '📧', title: 'Email Support', desc: 'Response within 2 hours', available: true },
    { icon: '📞', title: 'Phone Support', desc: 'Enterprise customers only', available: true },
    { icon: '🎥', title: 'Screen Share', desc: 'Guided troubleshooting', available: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-6">
            <HelpCircle className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            KulpTech Security Help Center
          </h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Find answers, guides, and resources to secure your organization.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for security guides, troubleshooting, or documentation..."
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Categories & Quick Links */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left ${
                      activeCategory === cat.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3">{cat.icon}</span>
                      <span className="font-medium">{cat.label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                      {link.icon}
                    </div>
                    <span className="font-medium text-gray-900">{link.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            {/* Popular Articles */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Popular Articles</h2>
              </div>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">
                          {article.title}
                        </h3>
                        <div className="flex items-center">
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded mr-3">
                            {article.category}
                          </span>
                          <span className="text-sm text-gray-500">📖 {article.reads} reads</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Phone className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Contact Support</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {contactOptions.map((option, index) => (
                  <div key={index} className={`border rounded-xl p-5 ${option.available ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}>
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{option.icon}</span>
                      <h3 className="font-semibold text-gray-900">{option.title}</h3>
                      {!option.available && (
                        <span className="ml-auto px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{option.desc}</p>
                    {option.available && (
                      <button className="text-blue-600 font-semibold hover:text-blue-700">
                        Start Now →
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="border border-red-200 bg-red-50 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="p-2 bg-red-100 rounded-lg text-red-600 mr-4">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-800 text-lg mb-2">
                      Security Emergency?
                    </h3>
                    <p className="text-red-700 mb-3">
                      For immediate security incidents or critical vulnerabilities:
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-red-900">📞 Emergency Hotline: +1-800-KULP-911</p>
                      <p className="font-semibold text-red-900">✉️ Emergency Email: soc@kulptech.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">System Status</p>
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-green-700 font-medium">All Systems Operational</span>
                  </div>
                </div>
                <a href="/status" className="text-blue-600 font-semibold hover:text-blue-700">
                  View Status Page →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;