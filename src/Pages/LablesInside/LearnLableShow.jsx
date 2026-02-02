import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function LearnLableshow() {

  const [expandedTopics, setExpandedTopics] = useState([]);
  
  const topics = [
    {
      title: "What is an AI data center?",
      content: "AI data centers are specialized facilities designed to handle the immense computational demands of artificial intelligence workloads. Unlike traditional data centers, they feature high-density GPU clusters, advanced cooling systems, and optimized network architectures to support parallel processing of machine learning algorithms at scale."
    },
    {
      title: "What is agentic operations?",
      content: "Agentic operations refer to autonomous systems where AI agents can independently execute complex workflows, make decisions, and adapt to changing environments. These systems leverage reinforcement learning and multi-agent coordination to optimize processes in real-time, reducing human intervention while maintaining operational efficiency and safety protocols."
    },
    {
      title: "What is Wi-Fi 7?",
      content: "Wi-Fi 7 (802.11be) is the latest wireless networking standard offering speeds up to 40 Gbps, reduced latency, and improved reliability. Key features include 320 MHz channel bandwidth, 4K QAM modulation, Multi-Link Operation (MLO), and enhanced MU-MIMO. It's designed for high-density environments, 8K streaming, AR/VR applications, and industrial IoT deployments."
    },
    {
      title: "How to set up a router",
      content: "Setting up a router involves several key steps: 1) Choose optimal placement away from interference, 2) Connect to modem via Ethernet, 3) Access admin panel (typically 192.168.1.1), 4) Configure SSID and strong WPA3 encryption, 5) Set up guest network, 6) Enable automatic firmware updates, 7) Configure QoS for priority traffic, and 8) Test connection speeds and coverage."
    }
  ];

  const toggleTopic = (index) => {
    if (expandedTopics.includes(index)) {
      setExpandedTopics(expandedTopics.filter(i => i !== index));
    } else {
      setExpandedTopics([...expandedTopics, index]);
    }
  };
  
  return (
    <main className="w-full">
      {/* =====================================================
         HERO – KalpTech products
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-r from-[#07182d] to-[#0b2447] text-white py-28">
        {/* BACKGROUND ACCENTS */}
        <div className="pointer-events-none absolute inset-0">
          {/* Angled gradient overlay */}
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-600/10 to-transparent skew-x-[-12deg] origin-top-right" />

          {/* Soft grid pattern */}
          <div className="absolute right-24 top-24 grid grid-cols-6 gap-6 opacity-30">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            ))}
          </div>

          {/* Glow orbs */}
          <div className="absolute top-16 right-32 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-cyan-400/20 blur-2xl" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-start gap-6">
            {/* Accent line */}
            <div className="w-1 h-24 bg-blue-500 mt-2" />

            <div>
              <h1 className="text-5xl font-light mb-4">Learn</h1>

              <p className="text-lg text-white/80 max-w-xl">
                Skill up with training and career certifications, catch up on
                the latest perspectives through events and webinars, and find
                helpful tools and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================== Learning Cards ===================== */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="h-52 w-full object-cover"
              alt=""
            />
            <div className="p-6">
              <h3 className="text-xl font-medium">Learn with KalpTech</h3>
              <p className="mt-3 text-slate-600">
                Advance your career, upskill your work, or achieve your learning
                goals.
              </p>
              <Link
                to="/explore"
                className="cursor-pointer mt-4 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                Explore Learn with KalpTech <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              className="h-52 w-full object-cover"
              alt=""
            />
            <div className="p-6">
              <h3 className="text-xl font-medium">Events</h3>
              <p className="mt-3 text-slate-600">
                Network with customers, partners, and KalpTech experts.
              </p>
              <Link
                to="/explore"
                className="cursor-pointer mt-4 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                explore events calendar <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              className="h-52 w-full object-cover"
              alt=""
            />
            <div className="p-6">
              <h3 className="text-xl font-medium">Webinars and videos</h3>
              <p className="mt-3 text-slate-600">
                Join live webinars or watch on-demand sessions.
              </p>
              <Link
                to="/explore"
                className="cursor-pointer mt-4 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                explore webinars <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================== certification ================== */}

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-light text-slate-900 leading-snug">
              KalpTech certifications: Your gateway <br />
              to IT excellence
            </h2>

            <p className="mt-6 text-slate-600 max-w-xl">
              Align yourself with the best of the best. KalpTech certifications
              are the recognized gold standard with more than four million
              certifications issued to date. They bring significant value to
              individuals and the organizations that employ them—and employers
              know it. Grow your skill set and career with KalpTech.
            </p>

            <Link
              to="/certifications"
              className="mt-10 inline-flex items-center rounded-full border border-blue-600 px-8 py-3 text-blue-600 font-medium hover:bg-blue-50 transition"
            >
              Explore KalpTech certifications
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="KalpTech certifications"
              className="w-full h-[360px] object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* =================Popular Ways to Learn========= */}

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16">
            Popular ways to learn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Networking Academy */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl border border-slate-200">
              <span className="text-sm uppercase text-slate-500 font-semibold tracking-wide">
                Learning Platform
              </span>
              <h3 className="text-2xl font-medium mt-3 text-slate-900">
                KalpTech Networking Academy
              </h3>
              <p className="mt-4 text-slate-700 text-lg leading-relaxed">
                Build foundational networking skills with our comprehensive,
                career-focused curriculum. Access free courses, hands-on labs,
                and certification pathways designed by industry experts.
              </p>
              <div className="mt-6 bg-white p-5 rounded-xl border border-slate-100">
                <h4 className="font-medium text-slate-800 mb-2">
                  Featured Content:
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Network Fundamentals Certification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Cybersecurity Essentials Course</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Packet Tracer Simulation Labs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Instructor-Led Training Sessions</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 text-slate-500 text-sm">
                <span className="font-medium">Available to:</span> Students, IT
                Professionals, Career Changers
              </div>
            </div>

            {/* KalpTech U */}
            <div className="bg-gradient-to-br from-cyan-50 to-slate-50 p-8 rounded-2xl border border-slate-200">
              <span className="text-sm uppercase text-slate-500 font-semibold tracking-wide">
                Personalized Learning
              </span>
              <h3 className="text-2xl font-medium mt-3 text-slate-900">
                KalpTech U.
              </h3>
              <p className="mt-4 text-slate-700 text-lg leading-relaxed">
                Your personalized learning journey starts here. Get AI-powered
                recommendations, track your progress with analytics, and achieve
                your professional development goals.
              </p>
              <div className="mt-6 flex gap-4">
                <div className="bg-white p-4 rounded-lg border border-slate-100 flex-1">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-slate-600">
                    Courses Available
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-100 flex-1">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-slate-600">
                    Access to Resources
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-100 flex-1">
                  <div className="text-2xl font-bold text-blue-600">50K+</div>
                  <div className="text-sm text-slate-600">Active Learners</div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-medium text-slate-800 mb-3">
                  Learning Paths Include:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    Cloud Architecture
                  </span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">
                    AI & Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    Network Security
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    DevOps
                  </span>
                </div>
              </div>
            </div>

            {/* KalpTech Live */}
            <div className="bg-gradient-to-br from-purple-50 to-slate-50 p-8 rounded-2xl border border-slate-200">
              <span className="text-sm uppercase text-slate-500 font-semibold tracking-wide">
                Immersive Events
              </span>
              <h3 className="text-2xl font-medium mt-3 text-slate-900">
                KalpTech Live
              </h3>
              <p className="mt-4 text-slate-700 text-lg leading-relaxed">
                Experience cutting-edge technology through live events, hands-on
                workshops, and interactive sessions with industry leaders and
                innovators.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">Q1</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-800">
                      Annual Tech Summit
                    </h5>
                    <p className="text-sm text-slate-600">
                      March 15-17 | Virtual & In-Person
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">Q2</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-800">
                      Security Conference
                    </h5>
                    <p className="text-sm text-slate-600">
                      June 5-7 | Las Vegas, NV
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">Q3</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-800">
                      Developer Workshops
                    </h5>
                    <p className="text-sm text-slate-600">
                      September 10-12 | Multiple Locations
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-500 italic">
                  "Connecting innovators with the future of technology through
                  immersive learning experiences."
                </p>
              </div>
            </div>

            {/* AI Webinar */}
            <div className="bg-gradient-to-br from-indigo-50 to-slate-50 p-8 rounded-2xl border border-slate-200">
              <span className="text-sm uppercase text-slate-500 font-semibold tracking-wide">
                Expert Webinar
              </span>
              <h3 className="text-2xl font-medium mt-3 text-slate-900">
                AI-Ready Blueprint Webinar Series
              </h3>
              <p className="mt-4 text-slate-700 text-lg leading-relaxed">
                Master the implementation of AI in enterprise environments with
                our comprehensive webinar series featuring real-world case
                studies and practical implementation strategies.
              </p>
              <div className="mt-6 bg-white p-5 rounded-xl border border-slate-100">
                <h4 className="font-medium text-slate-800 mb-3">
                  Series Highlights:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">
                      AI Infrastructure Design
                    </span>
                    <span className="text-sm text-slate-500">90 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">
                      Model Deployment Best Practices
                    </span>
                    <span className="text-sm text-slate-500">75 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">
                      Security for AI Systems
                    </span>
                    <span className="text-sm text-slate-500">60 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">
                      Cost Optimization Strategies
                    </span>
                    <span className="text-sm text-slate-500">45 min</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 text-sm font-bold">
                      4.9
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">
                      Featured Speakers
                    </div>
                    <div className="text-sm text-slate-600">
                      Industry leaders from Google AI, NVIDIA, and Stanford
                      University
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========  Technology Learning Topics ================ */}
          <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-light mb-4">
          Technology learning topics
        </h2>

        <p className="text-slate-600 mb-10">
          Learn about the topics that interest you most. Click on any topic to expand and learn more.
        </p>

        <div className="border-t">
          {topics.map((topic, idx) => (
            <div key={idx}>
              <div
                onClick={() => toggleTopic(idx)}
                className="flex items-center justify-between py-6 border-b cursor-pointer hover:bg-slate-50 px-4 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    expandedTopics.includes(idx) 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {expandedTopics.includes(idx) ? '-' : '+'}
                  </div>
                  <span className="text-lg font-medium">{topic.title}</span>
                </div>
                <FiChevronDown className={`text-slate-500 transition-transform duration-300 ${
                  expandedTopics.includes(idx) ? 'rotate-180' : ''
                }`} />
              </div>
              
              {expandedTopics.includes(idx) && (
                <div className="px-14 py-6 bg-gradient-to-r from-blue-50 to-white border-b">
                  <div className="prose max-w-none">
                    <p className="text-slate-700 text-lg leading-relaxed mb-6">
                      {topic.content}
                    </p>
                    
                    {/* Additional related information */}
                    {idx === 0 && (
                      <div className="mt-4 p-4 bg-white rounded-lg border border-slate-200">
                        <h4 className="font-medium text-slate-800 mb-2">Key Components:</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="font-medium text-blue-700">GPU Clusters</div>
                            <div className="text-sm text-slate-600">NVIDIA H100/A100</div>
                          </div>
                          <div className="p-3 bg-cyan-50 rounded-lg">
                            <div className="font-medium text-cyan-700">Liquid Cooling</div>
                            <div className="text-sm text-slate-600">Direct-to-chip</div>
                          </div>
                          <div className="p-3 bg-purple-50 rounded-lg">
                            <div className="font-medium text-purple-700">Network Fabric</div>
                            <div className="text-sm text-slate-600">400G InfiniBand</div>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="font-medium text-green-700">Power Density</div>
                            <div className="text-sm text-slate-600">40-80 kW/rack</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {idx === 1 && (
                      <div className="mt-4 p-4 bg-white rounded-lg border border-slate-200">
                        <h4 className="font-medium text-slate-800 mb-2">Use Cases:</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            Autonomous network management and optimization
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            Predictive maintenance in manufacturing
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            Smart grid energy distribution
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            Robotic process automation
                          </li>
                        </ul>
                      </div>
                    )}
                    
                    {idx === 2 && (
                      <div className="mt-4 p-4 bg-white rounded-lg border border-slate-200">
                        <h4 className="font-medium text-slate-800 mb-2">Performance Comparison:</h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">Standard</th>
                                <th className="text-left py-2">Max Speed</th>
                                <th className="text-left py-2">Frequency</th>
                                <th className="text-left py-2">MIMO</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2">Wi-Fi 5 (802.11ac)</td>
                                <td className="py-2">3.5 Gbps</td>
                                <td className="py-2">5 GHz</td>
                                <td className="py-2">8×8</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">Wi-Fi 6 (802.11ax)</td>
                                <td className="py-2">9.6 Gbps</td>
                                <td className="py-2">2.4/5 GHz</td>
                                <td className="py-2">8×8</td>
                              </tr>
                              <tr>
                                <td className="py-2 font-medium">Wi-Fi 7 (802.11be)</td>
                                <td className="py-2 font-medium">40 Gbps</td>
                                <td className="py-2 font-medium">2.4/5/6 GHz</td>
                                <td className="py-2 font-medium">16×16</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                    
                    {idx === 3 && (
                      <div className="mt-4 p-4 bg-white rounded-lg border border-slate-200">
                        <h4 className="font-medium text-slate-800 mb-2">Pro Tips:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-3 bg-yellow-50 rounded-lg">
                            <div className="font-medium text-amber-700">Security</div>
                            <ul className="text-sm text-slate-600 mt-1 space-y-1">
                              <li>• Use WPA3 encryption</li>
                              <li>• Change default credentials</li>
                              <li>• Disable WPS</li>
                              <li>• Enable firewall</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="font-medium text-green-700">Optimization</div>
                            <ul className="text-sm text-slate-600 mt-1 space-y-1">
                              <li>• Update firmware regularly</li>
                              <li>• Use 5GHz for speed</li>
                              <li>• Set up QoS rules</li>
                              <li>• Monitor connected devices</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* =====================================================
         RESOURCES
      ====================================================== */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16">
            Additional learning resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-xl font-medium mb-4">
                Learning with KalpTech{" "}
              </h3>

              <ul className="space-y-3 text-blue-600">
                <li>KalpTech certifications</li>
                <li>KalpTech exams</li>
                <li>KalpTech training</li>
                <li>KalpTech learning subscriptions</li>
                <li>Learning support</li>
                <li>KalpTech learning resources</li>
                <li>All training and certification</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Events</h3>
              <ul className="space-y-3 text-blue-600">
                <li>Events calander</li>
                <li>Partners events</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Webinar and Videos</h3>
              <ul className="space-y-3 text-blue-600">
                <li>KalpTech Video portal</li>
                <li>Global Webinar</li>
                <li>Influencer & Support Events</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">News and insights</h3>
              <ul className="space-y-3 text-blue-600">
                <li>KalpTech Blogs</li>
                <li>KalpTech Newsroom</li>
                <li>KalpTech Research</li>
                <li>KalpTech Talos Blogs</li>
                <li>Outshift by KalpTech Research</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">
                Architecture, design, and developer resources
              </h3>
              <ul className="space-y-3 text-blue-600">
                <li>KalpTech Insider</li>
                <li>KalpTech Validated</li>
                <li>Devnet</li>
                <li>Packet Tracer</li>
                <li>Visio stencile</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
         START YOUR TRANSFORMATION JOURNEY
      ====================================================== */}
      <section className="bg-gradient-to-r from-[#07182d] to-[#0b2447] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <h2 className="text-4xl font-light">Ask the community</h2>

          <div>
            <h3 className="text-xl font-medium">Connect with KalpTech</h3>
            <p className="mt-2 text-white/80">
              We're here to help you make informed decisions every step of the
              way.
            </p>
            <Link to="/community" className="mt-4 inline-block text-blue-400 hover:underline">
              Join the conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
