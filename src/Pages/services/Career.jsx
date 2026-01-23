import React from 'react';
import { Briefcase, MapPin, DollarSign, Clock, Users, Trophy, Award, Heart } from 'lucide-react';

export default function Career() {
  const openPositions = [
    {
      title: "Senior Security Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      description: "Design and implement security solutions for enterprise customers"
    },
    {
      title: "Threat Intelligence Analyst",
      department: "Security Operations",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Analyze and respond to emerging cyber threats"
    },
    {
      title: "Cloud Security Architect",
      department: "Architecture",
      location: "New York, NY",
      type: "Full-time",
      experience: "7+ years",
      description: "Design secure cloud infrastructure for Fortune 500 clients"
    },
    {
      title: "Security Product Manager",
      department: "Product",
      location: "Austin, TX",
      type: "Full-time",
      experience: "6+ years",
      description: "Lead product strategy for our security platform"
    },
    {
      title: "DevSecOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Integrate security into CI/CD pipelines"
    },
    {
      title: "Customer Security Advisor",
      department: "Customer Success",
      location: "Boston, MA",
      type: "Full-time",
      experience: "5+ years",
      description: "Guide enterprise customers on security best practices"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Industry-leading salary, equity, and bonus structure"
    },
    {
      icon: Trophy,
      title: "Career Growth",
      description: "Clear progression paths and leadership opportunities"
    },
    {
      icon: Users,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible schedules"
    },
    {
      icon: Award,
      title: "Learning & Development",
      description: "$5,000 annual budget for courses and certifications"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and mental health benefits"
    },
    {
      icon: Briefcase,
      title: "Latest Technology",
      description: "Work with cutting-edge security tools and platforms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build the Future of Security
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join our team of security experts and help protect organizations worldwide from evolving cyber threats.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Join KalpTech?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="p-3 bg-blue-100 rounded-xl w-fit mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Open Positions</h2>
            <div className="text-sm text-gray-500">
              Showing {openPositions.length} positions
            </div>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1 text-gray-600">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="text-gray-600">{position.experience} experience</span>
                    </div>
                    <p className="text-gray-700">{position.description}</p>
                  </div>
                  
                  <div>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Culture</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Innovation & Collaboration</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                At KalpTech, we foster an environment where security experts, engineers, 
                and researchers collaborate to solve complex security challenges. Our 
                culture encourages experimentation, continuous learning, and pushing 
                the boundaries of what's possible in cybersecurity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Weekly tech talks and security briefings</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Hackathons and innovation sprints</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Cross-functional project teams</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Mentorship and career development programs</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w-600&q=80",
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              ].map((image, index) => (
                <div key={index} className="rounded-2xl overflow-hidden h-48">
                  <img 
                    src={image} 
                    alt="Team culture"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Hiring Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Application Review",
                description: "Our team reviews your application within 48 hours"
              },
              {
                step: "02",
                title: "Initial Interview",
                description: "30-minute conversation with a recruiter"
              },
              {
                step: "03",
                title: "Technical Assessment",
                description: "Skills-based challenge relevant to the role"
              },
              {
                step: "04",
                title: "Team Interviews",
                description: "Meet with your future team and manager"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join us in building the future of enterprise security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              View All Positions
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              Submit General Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}