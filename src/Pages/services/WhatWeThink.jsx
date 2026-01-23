import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Users, TrendingUp, Globe, Shield } from 'lucide-react';

export default function WhatWeThink() {
  const thoughtLeadership = [
    {
      icon: Shield,
      title: "The Future of AI in Cybersecurity",
      description: "How artificial intelligence is transforming threat detection and response in enterprise security.",
      category: "AI & Security",
      date: "Mar 15, 2024",
      readTime: "8 min read"
    },
    {
      icon: Globe,
      title: "Zero Trust in a Hybrid World",
      description: "Implementing Zero Trust architecture across cloud, on-premise, and remote work environments.",
      category: "Architecture",
      date: "Feb 28, 2024",
      readTime: "10 min read"
    },
    {
      icon: TrendingUp,
      title: "2024 Cybersecurity Trends Report",
      description: "Our annual analysis of emerging threats, technologies, and strategies shaping the security landscape.",
      category: "Research",
      date: "Jan 15, 2024",
      readTime: "15 min read"
    },
    {
      icon: Users,
      title: "Building Security-First Cultures",
      description: "Strategies for fostering security awareness and responsibility across organizations.",
      category: "Culture",
      date: "Dec 20, 2023",
      readTime: "6 min read"
    }
  ];

  const featuredReports = [
    {
      title: "State of Cloud Security 2024",
      description: "Comprehensive analysis of cloud security challenges and best practices.",
      downloadLink: "/reports/cloud-security-2024",
      pages: 42
    },
    {
      title: "AI-Powered Threat Intelligence",
      description: "How machine learning is revolutionizing threat detection and analysis.",
      downloadLink: "/reports/ai-threat-intelligence",
      pages: 36
    },
    {
      title: "Compliance in the Digital Age",
      description: "Navigating regulatory requirements for modern enterprises.",
      downloadLink: "/reports/compliance-digital-age",
      pages: 28
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              What We Think
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Insights, research, and perspectives from KalpTech's security experts. 
              Explore our thought leadership on emerging threats, innovative solutions, 
              and the future of cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Latest Insights</h2>
            <Link to="/insights" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
              View All Insights
              <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {thoughtLeadership.map((article, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <article.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{article.title}</h3>
                <p className="text-gray-600 mb-6">{article.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Link to={`/insights/${article.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 font-medium hover:text-blue-700">
                    Read Article →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Reports */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Reports</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              In-depth analysis and comprehensive studies on critical cybersecurity topics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredReports.map((report, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <span className="text-sm text-gray-500">{report.pages} pages</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{report.title}</h3>
                <p className="text-gray-600 mb-8">{report.description}</p>

                <Link 
                  to={report.downloadLink}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  Download Report
                  <span>↓</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Perspectives */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Expert Perspectives</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                SJ
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 mb-4">Chief Security Officer</p>
              <p className="text-gray-700">
                "The convergence of AI and security represents the most significant shift in cybersecurity since the advent of the internet."
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                MR
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Rodriguez</h3>
              <p className="text-gray-600 mb-4">Head of Threat Intelligence</p>
              <p className="text-gray-700">
                "Threat actors are increasingly sophisticated. Staying ahead requires continuous innovation and collaboration."
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                EP
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Elena Petrova</h3>
              <p className="text-gray-600 mb-4">VP of Cloud Security</p>
              <p className="text-gray-700">
                "Cloud security isn't just about technology—it's about processes, people, and proactive governance."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
          <p className="text-xl opacity-90 mb-8">
            Subscribe to our security insights newsletter and receive the latest research directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900"
            />
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}