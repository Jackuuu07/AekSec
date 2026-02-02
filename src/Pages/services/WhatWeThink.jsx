import React from 'react';
import { BookOpen, FileText, Users, TrendingUp, Globe, Shield, Clock, Calendar, FileBarChart, Award, Target, Lightbulb, Zap, Cpu } from 'lucide-react';

export default function WhatWeThink() {
  const thoughtLeadership = [
    {
      icon: Shield,
      title: "The Future of AI in Cybersecurity",
      description: "How artificial intelligence is transforming threat detection and response in enterprise security. Advanced machine learning algorithms are enabling real-time threat analysis, automated response mechanisms, and predictive security intelligence that anticipates attacks before they occur.",
      category: "AI & Security",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      keyInsights: [
        "AI reduces detection time from hours to milliseconds",
        "Predictive analytics prevent 85% of potential breaches",
        "Automated response systems improve incident resolution by 60%"
      ]
    },
    {
      icon: Globe,
      title: "Zero Trust in a Hybrid World",
      description: "Implementing Zero Trust architecture across cloud, on-premise, and remote work environments. Modern enterprises require continuous verification, least-privilege access, and micro-segmentation to protect distributed digital assets across increasingly complex technology ecosystems.",
      category: "Architecture",
      date: "Feb 28, 2024",
      readTime: "10 min read",
      keyInsights: [
        "Zero Trust reduces attack surface by 70%",
        "Identity-based access control is essential for hybrid environments",
        "Continuous authentication prevents lateral movement in networks"
      ]
    },
    {
      icon: TrendingUp,
      title: "2024 Cybersecurity Trends Report",
      description: "Our annual analysis of emerging threats, technologies, and strategies shaping the security landscape. Based on data from over 10,000 enterprise environments and threat intelligence from global security operations centers.",
      category: "Research",
      date: "Jan 15, 2024",
      readTime: "15 min read",
      keyInsights: [
        "AI-powered attacks increased 300% year-over-year",
        "Supply chain security breaches cost enterprises $2.3B annually",
        "Cloud security misconfigurations remain the top vulnerability"
      ]
    },
    {
      icon: Users,
      title: "Building Security-First Cultures",
      description: "Strategies for fostering security awareness and responsibility across organizations. Human factors remain the most significant security variable, requiring continuous education, behavioral reinforcement, and organizational alignment around security principles.",
      category: "Culture",
      date: "Dec 20, 2023",
      readTime: "6 min read",
      keyInsights: [
        "Security-aware organizations experience 75% fewer incidents",
        "Regular training reduces phishing susceptibility by 90%",
        "Clear security policies improve compliance by 60%"
      ]
    }
  ];

  const featuredReports = [
    {
      title: "State of Cloud Security 2024",
      description: "Comprehensive analysis of cloud security challenges and best practices across major cloud platforms. Research covers 500+ enterprise cloud deployments with detailed metrics on security posture, compliance gaps, and optimization opportunities.",
      pages: 42,
      researchPeriod: "Q4 2023 - Q1 2024",
      methodology: "Analysis of production cloud environments across financial, healthcare, and technology sectors",
      keyFindings: "67% of organizations have critical cloud security gaps despite high confidence in their security posture"
    },
    {
      title: "AI-Powered Threat Intelligence",
      description: "How machine learning is revolutionizing threat detection and analysis. Detailed examination of AI applications in security operations, including natural language processing for threat research, behavioral analytics for anomaly detection, and automated threat hunting.",
      pages: 36,
      researchPeriod: "Full Year 2023",
      methodology: "Case studies from 50 enterprise security operations centers",
      keyFindings: "AI-enhanced threat intelligence reduces mean time to detection by 85% compared to traditional methods"
    },
    {
      title: "Compliance in the Digital Age",
      description: "Navigating regulatory requirements for modern enterprises across multiple jurisdictions. Analysis of evolving compliance frameworks including GDPR, CCPA, HIPAA, and emerging AI governance regulations with practical implementation guidance.",
      pages: 28,
      researchPeriod: "Q3 2023 - Q1 2024",
      methodology: "Regulatory analysis and enterprise compliance program assessments",
      keyFindings: "Automated compliance monitoring reduces audit preparation time by 70% while improving accuracy"
    }
  ];

  const expertPerspectives = [
    {
      name: "Sarah Johnson",
      title: "Chief Security Officer",
      initials: "SJ",
      color: "from-blue-500 to-purple-500",
      quote: "The convergence of AI and security represents the most significant shift in cybersecurity since the advent of the internet. Organizations must embrace intelligent security platforms that learn, adapt, and autonomously respond to emerging threats.",
      expertise: ["AI Security", "Enterprise Architecture", "Risk Management"],
      experience: "15+ years in enterprise security leadership"
    },
    {
      name: "Michael Rodriguez",
      title: "Head of Threat Intelligence",
      initials: "MR",
      color: "from-green-500 to-teal-500",
      quote: "Threat actors are increasingly sophisticated, leveraging AI and automation for attacks. Staying ahead requires continuous innovation, global threat intelligence sharing, and proactive defense mechanisms that anticipate attack vectors.",
      expertise: ["Threat Intelligence", "Incident Response", "Digital Forensics"],
      experience: "12+ years in threat analysis and response"
    },
    {
      name: "Elena Petrova",
      title: "VP of Cloud Security",
      initials: "EP",
      color: "from-orange-500 to-red-500",
      quote: "Cloud security isn't just about technology—it's about processes, people, and proactive governance. Successful cloud security requires a holistic approach combining technical controls, organizational policies, and continuous monitoring.",
      expertise: ["Cloud Security", "DevSecOps", "Compliance"],
      experience: "10+ years in cloud architecture and security"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              KalpTech Insights & Research
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
              Expert analysis, comprehensive research, and strategic perspectives on cybersecurity, 
              artificial intelligence, and digital transformation. Our thought leadership provides 
              actionable insights for enterprise security and technology leaders.
            </p>
            
            
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Thought Leadership</h2>
            <p className="text-gray-600 max-w-3xl">
              In-depth analysis and expert perspectives on critical cybersecurity topics, 
              emerging technologies, and strategic approaches to digital risk management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {thoughtLeadership.map((article, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <article.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{article.title}</h3>
                <p className="text-gray-600 mb-6">{article.description}</p>
                
                <div className="pt-6 border-t border-gray-200">
                  <div className="text-sm font-medium text-gray-700 mb-3">Key Insights:</div>
                  <ul className="space-y-2">
                    {article.keyInsights.map((insight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Reports */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Research Publications</h2>
            <p className="text-gray-600 max-w-3xl">
              Comprehensive studies and detailed analysis based on extensive research 
              across enterprise environments, security operations, and emerging threats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredReports.map((report, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg">
                    <FileBarChart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">{report.pages} pages</div>
                    <div className="text-gray-500">{report.researchPeriod}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{report.title}</h3>
                <p className="text-gray-600 mb-6">{report.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">Research Methodology:</div>
                    <div className="text-sm text-gray-600">{report.methodology}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">Primary Finding:</div>
                    <div className="text-sm text-blue-600">{report.keyFindings}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Perspectives */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Expert Perspectives</h2>
            <p className="text-gray-600 max-w-3xl">
              Insights and analysis from KalpTech's security leadership team, 
              drawing on decades of experience across enterprise security domains.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {expertPerspectives.map((expert, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${expert.color} rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}>
                    {expert.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{expert.name}</h3>
                    <p className="text-gray-600">{expert.title}</p>
                    <div className="text-sm text-gray-500 mt-1">{expert.experience}</div>
                  </div>
                </div>
                
                <div className="relative mb-6">
                  <div className="text-4xl text-gray-300 absolute -top-2 -left-2">"</div>
                  <p className="text-gray-700 italic pl-4">
                    {expert.quote}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <div className="text-sm font-medium text-gray-700 mb-3">Areas of Expertise:</div>
                  <div className="flex flex-wrap gap-2">
                    {expert.expertise.map((area, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-200">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-light mb-6">
                Research Methodology & Standards
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                KalpTech research follows rigorous methodology ensuring accuracy, 
                relevance, and practical applicability for enterprise security leaders.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                  <Lightbulb className="text-blue-600 text-xl mt-1" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900 mb-1">Primary Research</div>
                    <div className="text-sm text-gray-600">Direct analysis of enterprise security environments and operational data</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                  <Users className="text-blue-600 text-xl mt-1" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900 mb-1">Expert Interviews</div>
                    <div className="text-sm text-gray-600">In-depth discussions with security practitioners and industry leaders</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                  <TrendingUp className="text-blue-600 text-xl mt-1" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900 mb-1">Trend Analysis</div>
                    <div className="text-sm text-gray-600">Longitudinal study of security patterns and emerging threats</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                  <Shield className="text-blue-600 text-xl mt-1" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900 mb-1">Case Studies</div>
                    <div className="text-sm text-gray-600">Detailed examination of security implementations and outcomes</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                  <Globe className="text-blue-600 text-xl mt-1" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900 mb-1">Global Intelligence</div>
                    <div className="text-sm text-gray-600">Integration of threat intelligence from global security operations</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                  <FileText className="text-blue-600 text-xl mt-1" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900 mb-1">Peer Review</div>
                    <div className="text-sm text-gray-600">Validation by independent security experts and academic review</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <div className="text-gray-700 mb-4">
                Research publications undergo comprehensive review processes ensuring 
                accuracy, objectivity, and practical value for enterprise security teams.
              </div>
              <div className="text-sm text-gray-500">
                All research data is anonymized and aggregated to protect enterprise confidentiality
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}