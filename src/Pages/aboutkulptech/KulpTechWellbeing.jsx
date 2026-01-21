import React from 'react';
import { Heart, Users, Brain, Shield, Coffee, Activity, Moon, Sun } from 'lucide-react';

export default function KulpTechWellbeing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-rose-900/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-500 rounded-lg flex items-center justify-center">
              <Heart className="w-7 h-7" />
            </div>
            <div className="border-l-2 border-pink-500 pl-4">
              <span className="text-pink-400 text-sm font-mono tracking-wider">SECURITY MINDSET</span>
              <h1 className="text-5xl font-bold mt-1">Security Wellbeing</h1>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
            Protecting our security professionals' mental and physical wellbeing is essential 
            for maintaining optimal threat detection and response capabilities.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">94%</div>
              <div className="text-gray-300">Employee Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">+25%</div>
              <div className="text-gray-300">Productivity Gain</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">0</div>
              <div className="text-gray-300">Burnout Cases</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Mental Health Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wellbeing Programs */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Holistic Security Professional Support</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Comprehensive programs designed to sustain peak performance in high-stress security operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-transparent p-8 hover:border-pink-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-pink-900 to-pink-700 flex items-center justify-center mb-6">
                  <Brain className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mental Resilience Training</h3>
                <p className="text-gray-400 mb-6">
                  Specialized programs for security analysts to maintain cognitive performance during 
                  extended threat monitoring and incident response scenarios.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Mindfulness & Meditation Programs
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Cognitive Load Management
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Stress Inoculation Training
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-transparent p-8 hover:border-blue-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Operational Wellness</h3>
                <p className="text-gray-400 mb-6">
                  Optimized shift patterns, ergonomic work environments, and fatigue management 
                  systems for 24/7 security operations center staff.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Circadian Rhythm Optimization
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Ergonomic Threat Analysis Stations
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Fatigue Risk Management
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-transparent p-8 hover:border-green-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-900 to-emerald-700 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Peer Support Networks</h3>
                <p className="text-gray-400 mb-6">
                  Structured support systems where security professionals can share experiences, 
                  debrief critical incidents, and maintain psychological safety.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Critical Incident Debriefing
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Security Professional Communities
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Mentorship Programs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wellness Metrics */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-1 h-12 bg-gradient-to-b from-pink-500 to-rose-400"></div>
            <h2 className="text-3xl font-bold">Wellbeing Impact Metrics</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-8">Performance Improvements</h3>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Threat Detection Accuracy</span>
                      <span className="text-green-400 font-bold">+18%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-600 to-emerald-400 w-2/5"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Incident Response Time</span>
                      <span className="text-blue-400 font-bold">-32%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 w-3/5"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Analyst Retention Rate</span>
                      <span className="text-purple-400 font-bold">+25%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-600 to-pink-400 w-3/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-rose-900 to-pink-700 flex items-center justify-center">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Wellness Program Participation</h3>
                    <p className="text-gray-400">Monthly engagement metrics</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Coffee className="w-5 h-5 text-amber-400" />
                      <span>Mental Health Sessions</span>
                    </div>
                    <span className="text-green-400 text-sm font-semibold">85% Participation</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Sun className="w-5 h-5 text-yellow-400" />
                      <span>Wellness Workshops</span>
                    </div>
                    <span className="text-blue-400 text-sm font-semibold">75% Attendance</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Moon className="w-5 h-5 text-indigo-400" />
                      <span>Sleep Optimization</span>
                    </div>
                    <span className="text-purple-400 text-sm font-semibold">90% Engagement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research & Development */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Wellbeing Research Initiative</h3>
                <p className="text-gray-300 mb-8">
                  Our dedicated research team studies the intersection of cybersecurity operations 
                  and human performance, developing evidence-based practices for sustaining security 
                  professional effectiveness.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-900 to-pink-700 flex items-center justify-center">
                      <Brain className="w-4 h-4" />
                    </div>
                    <span>Cognitive Performance Studies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
                      <Heart className="w-4 h-4" />
                    </div>
                    <span>Stress Management Protocols</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-900 to-emerald-700 flex items-center justify-center">
                      <Shield className="w-4 h-4" />
                    </div>
                    <span>Resilience Training Development</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-pink-400 mb-2">40%</div>
                  <div className="text-gray-400">Reduction in Alert Fatigue</div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">3.5x</div>
                    <div className="text-gray-400">Increased Job Satisfaction</div>
                    <div className="text-sm text-green-400">Post-program implementation</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">100%</div>
                    <div className="text-gray-400">Management Participation</div>
                    <div className="text-sm text-blue-400">Wellness Leadership Training</div>
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