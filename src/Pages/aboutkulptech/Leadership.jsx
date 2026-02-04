import React from 'react';
import { Users, Award, Briefcase, Globe, Shield, Target, CheckCircle } from 'lucide-react';

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

  const leadershipStats = [
    {
      value: "40+",
      label: "Industry Patents",
      description: "Innovation and intellectual property"
    },
    {
      value: "150+",
      label: "Years Experience",
      description: "Collective industry experience"
    },
    {
      value: "50+",
      label: "Countries Served",
      description: "Global leadership experience"
    },
    {
      value: "100%",
      label: "Certified Team",
      description: "Industry certifications held"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-100 text-black">
        <div className="max-w-7xl mx-auto flex items-start gap-8">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
            <Users className="w-10 h-10 text-black" />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Leadership Team
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              World-class cybersecurity expertise and visionary leadership driving innovation in enterprise security.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Executive Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Executive Leadership
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our leadership team combines decades of cybersecurity experience with innovative thinking to protect what matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${leader.color} flex items-center justify-center mb-6 shadow-md`}>
                  <Shield className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-4">{leader.title}</p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {leader.experience}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((exp, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {leader.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <Award className="w-4 h-4 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Board of Directors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Board of Directors
            </h3>
            <div className="bg-white rounded-2xl shadow-xl p-12 border border-blue-100">
              <div className="grid md:grid-cols-3 gap-8">
                {boardMembers.map((member, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-8">
                    <div className="w-14 h-14 rounded-lg bg-gray-200 flex items-center justify-center mb-6">
                      <Briefcase className="w-8 h-8 text-gray-700" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h4>
                    <p className="text-lg font-semibold text-gray-700 mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {member.background}
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-700 font-semibold mb-2">Current Positions:</p>
                      <p className="text-gray-600 text-sm">{member.companies.join(", ")}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leadership Philosophy */}
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-blue-100 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-8">
                <Globe className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Leadership Philosophy
              </h3>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                "We believe that true cybersecurity leadership requires continuous learning, ethical decision-making, 
                and a relentless focus on protecting our clients' digital assets while fostering innovation and growth."
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {leadershipStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-3">
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
            </div>
          </div>

          {/* Additional Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Leadership Values
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our leadership team is guided by core values that shape our approach to cybersecurity 
                and business operations. We prioritize integrity, innovation, collaboration, and 
                customer-centric decision-making in all aspects of our work.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Ethical leadership and transparency</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Continuous learning and development</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Strategic innovation and adaptation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Client-focused security solutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Visionary Security Leadership
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our leadership team brings together diverse expertise and proven experience to 
              navigate the complex cybersecurity landscape and deliver cutting-edge protection 
              for our clients worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}