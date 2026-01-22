import React, { useState } from 'react';
import { Cookie, Settings, AlertTriangle, Check } from 'lucide-react';

const CookiePolicy = () => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    personalization: false
  });

  const cookieTypes = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      required: true,
      description: 'Required for basic site functionality and security. Cannot be disabled.',
      examples: ['Session management', 'CSRF protection', 'Load balancing']
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      required: false,
      description: 'Help us understand how visitors interact with our website.',
      examples: ['Page visits', 'Feature usage', 'Performance metrics']
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      required: false,
      description: 'Used to deliver relevant security content and offers.',
      examples: ['Campaign tracking', 'Lead generation', 'Content recommendations']
    },
    {
      id: 'personalization',
      name: 'Personalization Cookies',
      required: false,
      description: 'Remember your preferences and customize your experience.',
      examples: ['Language settings', 'Theme preferences', 'Region-specific content']
    }
  ];

  const handleToggle = (cookieId) => {
    if (cookieId === 'essential') return; // Cannot disable essential cookies
    setCookieSettings(prev => ({
      ...prev,
      [cookieId]: !prev[cookieId]
    }));
  };

  const savePreferences = () => {
    // Save cookie preferences
    localStorage.setItem('cookiePreferences', JSON.stringify(cookieSettings));
    alert('Cookie preferences saved!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-amber-100 rounded-2xl mb-6">
            <Cookie className="w-12 h-12 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            KulpTech Security Cookie Policy
          </h1>
          <p className="text-xl text-gray-600">
            Transparency in how we use cookies to secure and improve your experience.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Cookies</h2>
          <p className="text-gray-700 mb-4">
            As a cybersecurity company, we believe in transparency about data collection. 
            Cookies are small text files stored on your device that help us provide and 
            secure our services.
          </p>
          <div className="flex items-center p-4 bg-blue-50 rounded-xl">
            <AlertTriangle className="w-6 h-6 text-blue-600 mr-3" />
            <p className="text-blue-800">
              <strong>Security Note:</strong> We never use cookies to collect sensitive 
              personal information or security credentials.
            </p>
          </div>
        </div>

        {/* Cookie Settings */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Cookie Preferences</h2>
            <Settings className="w-6 h-6 text-gray-500" />
          </div>

          <div className="space-y-6">
            {cookieTypes.map((cookie) => (
              <div key={cookie.id} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{cookie.name}</h3>
                    <p className="text-gray-600 mt-1">{cookie.description}</p>
                  </div>
                  <div className="flex items-center">
                    {cookie.required ? (
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                        Always Active
                      </span>
                    ) : (
                      <button
                        onClick={() => handleToggle(cookie.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                          cookieSettings[cookie.id] ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                            cookieSettings[cookie.id] ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Examples:</p>
                  <div className="flex flex-wrap gap-2">
                    {cookie.examples.map((example, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Save Button */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={savePreferences}
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Check className="w-5 h-5 mr-2" />
              Save Cookie Preferences
            </button>
          </div>
        </div>

        {/* Cookie Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Cookie Information</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Cookie Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Purpose
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    kt_session
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Maintains your secure session
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Session
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                      Essential
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    kt_csrf
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Prevents cross-site request forgery attacks
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    24 hours
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                      Essential
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    kt_analytics
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Tracks feature usage for improvements
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    30 days
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      Analytics
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Browser Controls */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Managing Cookies in Your Browser
            </h3>
            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings. Here's how:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border">
                <p className="font-semibold text-gray-900">Chrome</p>
                <p className="text-sm text-gray-600 mt-1">
                  Settings → Privacy and Security → Cookies
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <p className="font-semibold text-gray-900">Firefox</p>
                <p className="text-sm text-gray-600 mt-1">
                  Options → Privacy & Security → Cookies
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border">
                <p className="font-semibold text-gray-900">Safari</p>
                <p className="text-sm text-gray-600 mt-1">
                  Preferences → Privacy → Cookies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;