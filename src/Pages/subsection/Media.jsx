import React from 'react';
import { Film, Shield, Globe, Video, Music, Tv, Users, Lock, Database, Camera } from 'lucide-react';

export default function Media() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-200 text-gray-900">
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-300">
                  <Film className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Media & Entertainment Security</h1>
                  <p className="text-xl text-gray-700">Protecting digital content, streaming platforms, and media assets</p>
                </div>
              </div>
              <p className="text-lg md:text-xl max-w-3xl text-gray-600 leading-relaxed">
                KalpTech provides comprehensive security solutions for the media and entertainment industry, 
                safeguarding content creation, distribution, and consumption across digital platforms while 
                protecting intellectual property and subscriber data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Industry Protection</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our security solutions address the unique challenges of media companies, streaming services, 
              and content providers, ensuring content integrity, subscriber privacy, and platform security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mb-6 shadow-md">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Protection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced digital rights management and anti-piracy solutions for streaming content, 
                protecting intellectual property across distribution channels and viewing platforms.
              </p>
              <div className="flex items-center text-gray-700 font-medium">
                <Lock className="w-4 h-4 mr-2" />
                Digital rights management
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mb-6 shadow-md">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Event Security</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive protection for live streaming and broadcast events including DDoS mitigation, 
                content encryption, and real-time threat monitoring for high-profile productions.
              </p>
              <div className="flex items-center text-slate-700 font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Broadcast protection
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-slate-200 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-gray-900 to-slate-800 flex items-center justify-center mb-6 shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">User Data Privacy</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive subscriber data protection with GDPR and CCPA compliance, 
                safeguarding viewing habits, personal information, and payment details.
              </p>
              <div className="flex items-center text-gray-800 font-medium">
                <Database className="w-4 h-4 mr-2" />
                Privacy compliance
              </div>
            </div>
          </div>

          {/* Detailed Capabilities */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-gray-100 mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-800 to-slate-700 flex items-center justify-center mr-4">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  Content Security Framework
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Digital watermarking and content fingerprinting for media assets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Secure content delivery networks and streaming platform protection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Intellectual property monitoring and piracy detection systems</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-700 to-gray-800 flex items-center justify-center mr-4">
                    <Tv className="w-6 h-6 text-white" />
                  </div>
                  Platform Security
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Multi-platform application security for web, mobile, and connected devices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Subscription management and payment system security</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Content recommendation and personalization data protection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Media Industry Coverage */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Media Industry Segments</h3>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our security solutions are tailored to meet the specific requirements of different 
                media industry segments, providing specialized protection for various content types 
                and distribution models.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Film className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Film & Television</div>
                  <div className="text-sm text-gray-500">Production & distribution</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Music className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Music & Audio</div>
                  <div className="text-sm text-gray-500">Streaming & downloads</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Video className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Streaming Services</div>
                  <div className="text-sm text-gray-500">SVOD & AVOD platforms</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Tv className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-gray-800 font-semibold">Broadcast Media</div>
                  <div className="text-sm text-gray-500">Live & scheduled programming</div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Media Technology Integration</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              KalpTech's media security platform integrates seamlessly with content management systems, 
              digital rights management platforms, media asset management systems, and streaming 
              infrastructure. Our solutions are designed to work within existing media technology 
              ecosystems and production workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}