import React from 'react';
import { Users, Shield, Globe, Award, Target, Lock } from 'lucide-react';

export default function InclusionBelonging() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section - Security Dark Theme */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/10"></div>
        <div className="absolute inset-0 bg-white"></div>
        
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <Shield className="w-7 h-7" />
            </div>
            <div className="border-l-2 border-cyan-500 pl-4">
              <span className="text-cyan-400 text-sm font-mono tracking-wider">SECURE DIVERSITY</span>
              <h1 className="text-5xl font-bold mt-1">Inclusion & Belonging</h1>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
            At KalpTech Security, we believe diverse perspectives strengthen our defense capabilities. 
            Our inclusive culture drives innovation in cybersecurity solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="border border-gray-800 rounded-xl p-8 bg-gradient-to-b from-gray-900/50 to-transparent hover:border-cyan-500/30 transition-all duration-300">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-900 to-blue-700 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Diverse Threat Perspectives</h3>
              <p className="text-gray-400">Multiple cultural and cognitive perspectives enhance our threat detection capabilities by 40%.</p>
            </div>
            
            <div className="border border-gray-800 rounded-xl p-8 bg-gradient-to-b from-gray-900/50 to-transparent hover:border-cyan-500/30 transition-all duration-300">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-900 to-purple-700 mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Inclusive Security Design</h3>
              <p className="text-gray-400">Products designed by diverse teams prevent 30% more edge-case vulnerabilities.</p>
            </div>
            
            <div className="border border-gray-800 rounded-xl p-8 bg-gradient-to-b from-gray-900/50 to-transparent hover:border-cyan-500/30 transition-all duration-300">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-cyan-900 to-cyan-700 mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Security Mindset</h3>
              <p className="text-gray-400">25 nationalities provide localized threat intelligence for global protection strategies.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Security Through Diversity</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our diverse workforce strengthens our security posture and innovation capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-3">45%</div>
              <div className="text-gray-300">Women in Security Roles</div>
              <div className="text-sm text-gray-500 mt-2">Exceeds industry average by 20%</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-3">30+</div>
              <div className="text-gray-300">Employee Resource Groups</div>
              <div className="text-sm text-gray-500 mt-2">Cybersecurity-focused communities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-3">85%</div>
              <div className="text-gray-300">Inclusion Training</div>
              <div className="text-sm text-gray-500 mt-2">Annual security diversity certification</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-3">200+</div>
              <div className="text-gray-300">Underrepresented Hires</div>
              <div className="text-sm text-gray-500 mt-2">Through security apprenticeship program</div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-cyan-400"></div>
            <h2 className="text-3xl font-bold">Inclusive Security Programs</h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-l-4 border-cyan-500 pl-8 py-6 hover:bg-gray-900/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3">Cybersecurity Apprenticeship Program</h3>
              <p className="text-gray-400 mb-4">Providing hands-on security training to underrepresented groups, creating a pipeline of diverse cybersecurity talent.</p>
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm">120 Graduates</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">95% Retention</span>
              </div>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-8 py-6 hover:bg-gray-900/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3">Neurodiverse Threat Analysis Team</h3>
              <p className="text-gray-400 mb-4">Specialized teams leveraging unique cognitive patterns to identify sophisticated cyber attack patterns.</p>
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">Pattern Detection +40%</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm">Zero-Day Discovery</span>
              </div>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-8 py-6 hover:bg-gray-900/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3">Global Security Culture Initiative</h3>
              <p className="text-gray-400 mb-4">Cross-cultural security awareness training ensuring our solutions respect local privacy norms and regulations.</p>
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm">12 Regions</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}