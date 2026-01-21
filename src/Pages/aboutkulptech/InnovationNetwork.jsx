import React from 'react';
import { Cpu, Brain, Network, Rocket, Shield, Target, Zap, Code } from 'lucide-react';

export default function InnovationNetwork() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
              <Network className="w-7 h-7" />
            </div>
            <div className="border-l-2 border-purple-500 pl-4">
              <span className="text-purple-400 text-sm font-mono tracking-wider">ADVANCED RESEARCH</span>
              <h1 className="text-5xl font-bold mt-1">Innovation Network</h1>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
            A global consortium of security researchers, universities, and government agencies 
            collaborating on next-generation cybersecurity defense technologies.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Research Partners</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-gray-300">Security Patents</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">$150M</div>
              <div className="text-gray-300">R&D Investment</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">15</div>
              <div className="text-gray-300">Innovation Labs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Focus Areas */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Advanced Security Research</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Cutting-edge research initiatives focused on anticipating and neutralizing future cyber threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-transparent p-8 hover:border-purple-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-900 to-purple-700 flex items-center justify-center mb-6">
                  <Brain className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI-Powered Threat Hunting</h3>
                <p className="text-gray-400">
                  Autonomous AI systems that proactively identify and neutralize advanced persistent threats before they impact networks.
                </p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-transparent p-8 hover:border-blue-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Quantum-Resistant Cryptography</h3>
                <p className="text-gray-400">
                  Developing encryption standards that will remain secure against attacks from future quantum computers.
                </p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-transparent p-8 hover:border-green-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-900 to-emerald-700 flex items-center justify-center mb-6">
                  <Cpu className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Zero-Trust Architecture</h3>
                <p className="text-gray-400">
                  Research into next-generation zero-trust frameworks that dynamically adapt to evolving threat landscapes.
                </p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-transparent p-8 hover:border-cyan-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-cyan-900 to-cyan-700 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Real-time Threat Intelligence</h3>
                <p className="text-gray-400">
                  Global threat intelligence networks that share and analyze attack patterns in real-time across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Labs */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-cyan-400"></div>
            <h2 className="text-3xl font-bold">Global Innovation Labs</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Advanced Threat Research Lab</h3>
                    <p className="text-gray-400">San Francisco, California</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-red-400" />
                      <span>Zero-Day Discovery</span>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">12/month avg</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-blue-400" />
                      <span>Threat Hunting</span>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">24/7 Operations</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Brain className="w-5 h-5 text-purple-400" />
                      <span>AI Research Team</span>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">50+ Researchers</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-900 to-purple-700 flex items-center justify-center">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Quantum Security Institute</h3>
                    <p className="text-gray-400">Zurich, Switzerland</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Post-Quantum Algorithms</span>
                      <span className="text-blue-400 font-bold">8 Developed</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 w-3/4"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Quantum Key Distribution</span>
                      <span className="text-purple-400 font-bold">Research Phase</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-600 to-pink-400 w-2/3"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Academic Partnerships</span>
                      <span className="text-green-400 font-bold">15 Universities</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-600 to-emerald-400 w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Partnerships */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Join the Innovation Network</h3>
                <p className="text-gray-300 mb-8">
                  Collaborate with leading security researchers, access cutting-edge threat intelligence, 
                  and contribute to shaping the future of cybersecurity defense.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
                      <Brain className="w-4 h-4" />
                    </div>
                    <span>Access to proprietary threat research</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-900 to-purple-700 flex items-center justify-center">
                      <Network className="w-4 h-4" />
                    </div>
                    <span>Collaborative research opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-900 to-emerald-700 flex items-center justify-center">
                      <Shield className="w-4 h-4" />
                    </div>
                    <span>Early access to security innovations</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-gray-400">Network Members</div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">40%</div>
                    <div className="text-gray-400">Fortune 500 Participation</div>
                    <div className="text-sm text-blue-400">Enterprise Research</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">$25M</div>
                    <div className="text-gray-400">Annual Research Grants</div>
                    <div className="text-sm text-green-400">Available Funding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}