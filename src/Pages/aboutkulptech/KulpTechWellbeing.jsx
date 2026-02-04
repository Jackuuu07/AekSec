import React from 'react';
import { Heart, Users, Brain, Shield, Coffee, Activity, Moon, Sun, CheckCircle } from 'lucide-react';

export default function KulpTechWellbeing() {
  const wellbeingStats = [
    {
      value: "94%",
      label: "Employee Satisfaction",
      description: "Overall job satisfaction rate"
    },
    {
      value: "+25%",
      label: "Productivity Gain",
      description: "Since program implementation"
    },
    {
      value: "0",
      label: "Burnout Cases",
      description: "Last 12 months"
    },
    {
      value: "24/7",
      label: "Mental Health Support",
      description: "Round-the-clock availability"
    }
  ];

  const wellbeingPrograms = [
    {
      icon: Brain,
      title: "Mental Resilience Training",
      description: "Specialized programs for security analysts to maintain cognitive performance during extended threat monitoring and incident response scenarios.",
      features: [
        "Mindfulness & Meditation Programs",
        "Cognitive Load Management",
        "Stress Inoculation Training"
      ],
      color: "from-pink-600 to-rose-600"
    },
    {
      icon: Shield,
      title: "Operational Wellness",
      description: "Optimized shift patterns, ergonomic work environments, and fatigue management systems for 24/7 security operations center staff.",
      features: [
        "Circadian Rhythm Optimization",
        "Ergonomic Threat Analysis Stations",
        "Fatigue Risk Management"
      ],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Users,
      title: "Peer Support Networks",
      description: "Structured support systems where security professionals can share experiences, debrief critical incidents, and maintain psychological safety.",
      features: [
        "Critical Incident Debriefing",
        "Security Professional Communities",
        "Mentorship Programs"
      ],
      color: "from-green-600 to-emerald-600"
    }
  ];

  const performanceMetrics = [
    {
      label: "Threat Detection Accuracy",
      value: "+18%",
      description: "Improvement since program start"
    },
    {
      label: "Incident Response Time",
      value: "-32%",
      description: "Reduction in response time"
    },
    {
      label: "Analyst Retention Rate",
      value: "+25%",
      description: "Increase in retention"
    }
  ];

  const programParticipation = [
    {
      icon: Coffee,
      program: "Mental Health Sessions",
      participation: "85%",
      description: "Monthly participation rate"
    },
    {
      icon: Sun,
      program: "Wellness Workshops",
      participation: "75%",
      description: "Average attendance"
    },
    {
      icon: Moon,
      program: "Sleep Optimization",
      participation: "90%",
      description: "Employee engagement"
    }
  ];

  const researchInitiatives = [
    "Cognitive Performance Studies",
    "Stress Management Protocols",
    "Resilience Training Development"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-100 text-black">
        <div className="max-w-7xl mx-auto flex items-start gap-8">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
            <Heart className="w-10 h-10 text-black" />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Security Wellbeing
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Protecting our security professionals' mental and physical wellbeing is essential 
              for maintaining optimal threat detection and response capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Wellbeing Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {wellbeingStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 text-center">
                <div className="text-4xl font-bold text-pink-600 mb-3">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Wellbeing Programs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Holistic Security Professional Support
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Comprehensive programs designed to sustain peak performance in high-stress security operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {wellbeingPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${program.color} flex items-center justify-center mb-6 shadow-md`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Wellbeing Impact */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Wellbeing Impact Metrics
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Performance Improvements */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                <h4 className="text-xl font-bold text-gray-900 mb-8">
                  Performance Improvements
                </h4>
                <div className="space-y-8">
                  {performanceMetrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-lg font-medium text-gray-900">
                          {metric.label}
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                          {metric.value}
                        </div>
                      </div>
                      <div className="text-gray-600 text-sm">
                        {metric.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Program Participation */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Activity className="w-7 h-7 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      Wellness Program Participation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Monthly engagement metrics
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  {programParticipation.map((program, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <program.icon className="w-5 h-5 text-gray-600" />
                        <span className="font-medium text-gray-900">{program.program}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">
                          {program.participation}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {program.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Research Initiative */}
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-blue-100 mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Wellbeing Research Initiative
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Our dedicated research team studies the intersection of cybersecurity operations 
                    and human performance, developing evidence-based practices for sustaining security 
                    professional effectiveness.
                  </p>
                  <ul className="space-y-4">
                    {researchInitiatives.map((initiative, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span>{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="text-4xl font-bold text-gray-900 mb-3">
                      40%
                    </div>
                    <div className="text-lg font-medium text-gray-900 mb-2">
                      Reduction in Alert Fatigue
                    </div>
                    <div className="text-gray-600 mb-8">
                      Since program implementation
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-3">
                      3.5x
                    </div>
                    <div className="text-gray-700">
                      Increased Job Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Sustainable Security Operations
            </h3>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-8 border border-pink-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Our wellbeing initiatives are designed to prevent burnout and maintain high performance 
                levels among security professionals. By prioritizing mental health and work-life balance, 
                we ensure our team can effectively protect our clients while maintaining their own wellbeing.
              </p>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Protecting Those Who Protect
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              The effectiveness of our security operations depends on the wellbeing of our team. 
              Through comprehensive support systems and evidence-based practices, we ensure our 
              security professionals can perform at their best while maintaining their health and wellbeing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}