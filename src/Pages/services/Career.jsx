import React from 'react';
import { Briefcase, MapPin, DollarSign, Clock, Users, Trophy, Award, Heart, BookOpen, Coffee, Globe, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Career() {
  const navigate = useNavigate();
  
  const openPositions = [
    {
      title: "Senior Security Engineer",
      department: "Security Engineering",
      location: "Ahmedabad",
      type: "Full-time",
      experience: "5+ years",
      description: "Design and implement enterprise security solutions for Indian and global clients",
      tags: ["Firewall", "IDS/IPS", "Network Security"]
    },
    {
      title: "SOC Analyst (L2/L3)",
      department: "Security Operations Center",
      location: "Ahmedabad",
      type: "Full-time",
      experience: "3+ years",
      description: "Monitor, analyze, and respond to security incidents in our 24/7 SOC",
      tags: ["SIEM", "Incident Response", "Threat Hunting"]
    },
    {
      title: "Cloud Security Architect",
      department: "Cloud Security",
      location: "Ahmedabad",
      type: "Full-time",
      experience: "7+ years",
      description: "Design secure cloud infrastructure for AWS, Azure, and GCP environments",
      tags: ["AWS", "Azure", "Cloud Security"]
    },
    {
      title: "Security Product Manager",
      department: "Product Management",
      location: "Ahmedabad",
      type: "Full-time",
      experience: "6+ years",
      description: "Lead product strategy for our security platforms targeting Indian enterprises",
      tags: ["Product Strategy", "Roadmap", "Market Research"]
    },
    {
      title: "DevSecOps Engineer",
      department: "Engineering",
      location: "Ahmedabad",
      type: "Full-time",
      experience: "4+ years",
      description: "Integrate security into CI/CD pipelines and automate security processes",
      tags: ["Docker", "Kubernetes", "Jenkins", "Security Automation"]
    },
    {
      title: "Cyber Security Consultant",
      department: "Professional Services",
      location: "Ahmedabad",
      type: "Full-time",
      experience: "5+ years",
      description: "Guide enterprise clients on security best practices and compliance",
      tags: ["NIST", "ISO 27001", "GDPR", "Risk Assessment"]
    },
    {
      title: "Penetration Tester",
      department: "Security Testing",
      location: "Ahmedabad",
      type: "Full-time",
      experience: "4+ years",
      description: "Conduct security assessments and penetration testing for clients",
      tags: ["Web App Security", "Network Pentesting", "VAPT"]
    },
    {
      title: "Security GRC Analyst",
      department: "Governance, Risk & Compliance",
      location: "Ahmedabad",
      type: "Full-time",
      experience: "3+ years",
      description: "Manage compliance programs and security policies for clients",
      tags: ["Compliance", "Policy Development", "Audit"]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Industry-standard salary with performance bonuses and ESOPs"
    },
    {
      icon: Trophy,
      title: "Career Growth",
      description: "Clear career paths with promotions every 18-24 months"
    },
    {
      icon: Users,
      title: "Hybrid Work Model",
      description: "3 days office, 2 days remote with flexible timings"
    },
    {
      icon: Award,
      title: "Learning & Certifications",
      description: "Paid certifications (CISSP, CISM, CEH, CCSP) and training programs"
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive health insurance for you and your family"
    },
    {
      icon: Shield,
      title: "Security Lab Access",
      description: "Access to our state-of-the-art security lab for research"
    }
  ];

  const additionalPerks = [
    {
      icon: Coffee,
      title: "Free Meals & Snacks",
      description: "Daily breakfast, lunch, and evening snacks at office"
    },
    {
      icon: BookOpen,
      title: "Learning Budget",
      description: "₹50,000 annual budget for books, courses, and conferences"
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Opportunity to work with international clients and teams"
    },
    {
      icon: Briefcase,
      title: "Modern Infrastructure",
      description: "Latest hardware, dual monitors, and ergonomic workstations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build Your Cybersecurity Career in Ahmedabad
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Join KalpTech IT Solutions - India's fastest growing cybersecurity company based in Ahmedabad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Corporate Tower, SG Highway, Ahmedabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-lg">Monday to Friday, 9:30 AM - 6:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location & Facilities */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Ahmedabad Office</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Located in the heart of Ahmedabad's business district on SG Highway, our modern office 
                  provides the perfect environment for cybersecurity professionals to thrive.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>State-of-the-art security operations center (SOC)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Dedicated cybersecurity lab for research and testing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Collaborative workspaces and meeting rooms</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>On-site cafeteria with healthy meal options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Easy access to public transport and ample parking</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Office Workspace"
                className="rounded-xl h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Team Collaboration"
                className="rounded-xl h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Cafeteria"
                className="rounded-xl h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Meeting Room"
                className="rounded-xl h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Join KalpTech Ahmedabad?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="p-3 bg-blue-100 rounded-xl w-fit mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Additional Perks</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalPerks.map((perk, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 transition-all duration-300">
                <div className="p-3 bg-blue-50 rounded-xl w-fit mb-4">
                  <perk.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{perk.title}</h4>
                <p className="text-gray-600 text-sm">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Open Positions in Ahmedabad</h2>
              <p className="text-gray-600 mt-2">Join our growing team of cybersecurity experts</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {openPositions.length} positions available
              </span>
              <span className="text-sm text-gray-500">All positions based in Ahmedabad</span>
            </div>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1 text-gray-600 text-sm">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="flex items-center gap-1 text-gray-600">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="text-gray-600">{position.experience} experience</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{position.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {position.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:w-48">
                    <button 
                      onClick={() => window.location.href = `mailto:careers@kalptechitsolutions.com?subject=Application%20for%20${position.title}&body=Dear%20Hiring%20Manager,%0A%0AI%20am%20interested%20in%20applying%20for%20the%20${position.title}%20position%20at%20KalpTech%20Ahmedabad.%0A%0AThanks%20and%20regards,`}
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                    >
                      Apply Now
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Email resume to careers@kalptechitsolutions.com
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Team */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Life at KalpTech Ahmedabad</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Ahmedabad Team Culture</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                At KalpTech Ahmedabad, we blend the professionalism of a global cybersecurity 
                company with the warmth of Gujarati hospitality. Our team enjoys a collaborative 
                environment where knowledge sharing and innovation are celebrated.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Weekly security tech talks and training sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Quarterly team outings and celebrations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Mentorship program for career growth</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Regular knowledge sharing sessions on emerging threats</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Celebration of festivals and cultural events</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Team Meeting"
                className="rounded-xl h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Team Collaboration"
                className="rounded-xl h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Team Celebration"
                className="rounded-xl h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Team Training"
                className="rounded-xl h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Hiring Process in Ahmedabad</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Application Submission",
                description: "Send your resume to careers@kalptechitsolutions.com"
              },
              {
                step: "02",
                title: "Initial Screening",
                description: "HR call to discuss role fit and expectations (15-30 mins)"
              },
              {
                step: "03",
                title: "Technical Interview",
                description: "Technical assessment and problem-solving discussion"
              },
              {
                step: "04",
                title: "Final Interview",
                description: "Meet with team leads and HR at our Ahmedabad office"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Cybersecurity Career in Ahmedabad?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join India's premier cybersecurity company based in Ahmedabad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = "mailto:careers@kalptechitsolutions.com?subject=Career%20Inquiry%20at%20KalpTech%20Ahmedabad&body=Dear%20Hiring%20Team,%0A%0AI%20am%20interested%20in%20career%20opportunities%20at%20KalpTech%20Ahmedabad.%20Please%20let%20me%20know%20about%20suitable%20openings.%0A%0AThanks%20and%20regards,"}
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Submit Your Resume
            </button>
            <button 
              onClick={() => navigate("/contact")}
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Visit Our Ahmedabad Office
            </button>
          </div>
          <p className="text-white/80 text-sm mt-6">
            📍 Corporate Tower, SG Highway, Ahmedabad | 📧 careers@kalptechitsolutions.com
          </p>
        </div>
      </section>
    </div>
  );
}