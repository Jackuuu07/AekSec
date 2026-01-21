import React from 'react';
import { Users, Award, Briefcase, Globe, Shield, Target } from 'lucide-react';

export default function Leadership() {
  const leadershipTeam = [
    {
      name: "Sarah Chen",
      title: "Chief Executive Officer",
      experience: "25+ years in cybersecurity, former CISO at Global Bank, PhD in Computer Security",
      expertise: ["Enterprise Security", "Risk Management", "Business Strategy"],
      achievements: ["Forbes 50 Over 50", "Cybersecurity Hall of Fame", "3 Security Patents"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Marcus Johnson",
      title: "Chief Technology Officer",
      experience: "20+ years in security engineering, former Lead Architect at Defense Contractor",
      expertise: ["Zero Trust Architecture", "AI/ML Security", "Cloud Security"],
      achievements: ["IEEE Fellow", "RSA Innovation Award", "15+ Published Research Papers"],
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "Elena Rodriguez",
      title: "Chief Security Officer",
      experience: "18 years in threat intelligence, former Director at National Security Agency",
      expertise: ["Threat Hunting", "Incident Response", "Digital Forensics"],
      achievements: ["SANS Institute Fellow", "Black Hat Speaker", "Government Security Clearance"],
      color: "from-red-600 to-rose-600"
    },
    {
      name: "David Kim",
      title: "Chief Product Officer",
      experience: "15+ years in security product development, former VP at Security Startup",
      expertise: ["Product Strategy", "UX Design", "Market Analysis"],
      achievements: ["3 Successful Exits", "Product of the Year Awards", "Patent Portfolio"],
      color: "from-green-600 to-emerald-600"
    },
    {
      name: "Amara Patel",
      title: "Chief Revenue Officer",
      experience: "20 years in enterprise sales, former Global Sales Head at Tech Giant",
      expertise: ["Enterprise Sales", "Partner Ecosystems", "Customer Success"],
      achievements: ["Sales Leadership Awards", "$1B+ Revenue Generated", "Global Team Building"],
      color: "from-amber-600 to-orange-600"
    },
    {
      name: "James Wilson",
      title: "Chief Operations Officer",
      experience: "22 years in operations, former COO at Managed Security Provider",
      expertise: ["Service Delivery", "Process Optimization", "Global Operations"],
      achievements: ["Six Sigma Master", "Operational Excellence Awards", "Scaled to 50+ Countries"],
      color: "from-cyan-600 to-blue-600"
    }
  ];

  const boardMembers = [
    {
      name: "Dr. Robert Miller",
      role: "Chairman",
      background: "Former Deputy Director, Cybersecurity and Infrastructure Security Agency",
      companies: ["Fortune 100 Board Member", "University Professor"]
    },
    {
      name: "Lisa Thompson",
      role: "Independent Director",
      background: "Former CISO of Global Healthcare Network",
      companies: ["Healthcare Security Expert", "Government Advisor"]
    },
    {
      name: "Michael Zhang",
      role: "Venture Partner",
      background: "Founding Partner at Cyber Ventures Fund",
      companies: ["Early Investor in 10 Security Unicorns", "Startup Mentor"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Leadership Team</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            World-class cybersecurity expertise and visionary leadership driving innovation in enterprise security.
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team combines decades of cybersecurity experience with innovative thinking to protect what matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 border border-gray-100">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${leader.color} w-fit mb-6`}>
                  <Shield className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-4">{leader.title}</p>
                
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">{leader.experience}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((exp, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {leader.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <Award className="w-4 h-4 text-yellow-500 mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Board of Directors */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Board of Directors</h2>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-3xl p-12">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                  {boardMembers.map((member, index) => (
                    <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                      <div className="p-4 rounded-lg bg-gradient-to-r from-gray-900 to-slate-900 w-fit mb-6">
                        <Briefcase className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-lg font-semibold text-gray-700 mb-4">{member.role}</p>
                      <p className="text-gray-600 mb-4">{member.background}</p>
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-gray-700 font-semibold">Current Positions:</p>
                        <p className="text-gray-600">{member.companies.join(", ")}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Philosophy */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <Globe className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-6">Our Leadership Philosophy</h3>
              <p className="text-xl mb-8">
                "We believe that true cybersecurity leadership requires continuous learning, ethical decision-making, 
                and a relentless focus on protecting our clients' digital assets while fostering innovation and growth."
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">40+</div>
                  <div className="text-blue-200">Industry Patents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">150+</div>
                  <div className="text-blue-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-blue-200">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-200">Certified Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}