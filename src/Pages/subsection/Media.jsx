import React from 'react';
import { Film, Shield, Globe, Video, Music, Tv } from 'lucide-react';

export default function Media() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-rose-600 to-pink-500 text-white">
        <div className="absolute inset-0 bg-opacity-20 bg-white"></div>
        <div className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Film className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Media & Entertainment Security</h1>
              <p className="text-xl opacity-90">Protecting content and digital rights</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90">
            KulpTech secures streaming platforms, content delivery networks, and digital rights 
            management systems for media companies and entertainment providers.
          </p>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-rose-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-rose-500 to-pink-400 flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Protection</h3>
              <p className="text-gray-600">Digital rights management and anti-piracy solutions for streaming content.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-pink-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Event Security</h3>
              <p className="text-gray-600">DDoS protection and content security for live streaming and broadcast events.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-400 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">User Data Privacy</h3>
              <p className="text-gray-600">GDPR and CCPA compliance for subscriber data and viewing habits.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}