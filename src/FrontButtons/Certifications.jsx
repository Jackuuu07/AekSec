import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiBookOpen,
  FiAward,
  FiUsers,
  FiBriefcase,
  FiTarget,
  FiClock,
  FiCheckCircle,
  FiStar,
  FiShield,
  FiLock,
  FiCloud,
  FiCpu,
} from "react-icons/fi";

export default function Certifications() {
  const navigate = useNavigate();

  const stories = [
    {
      name: "Rahul Mehta",
      role: "Security Analyst",
      company: "FinTech Company",
      quote:
        "KalpTech certification helped me transition into a cybersecurity role within 6 months.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      certification: "Certified SOC Analyst",
      salaryIncrease: "45%",
    },
    {
      name: "Ananya Patel",
      role: "Cloud Security Engineer",
      company: "SaaS Startup",
      quote:
        "The hands-on labs and real-world scenarios made KalpTech Academy stand out.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      certification: "Certified Cloud Security Professional",
      salaryIncrease: "60%",
    },
    {
      name: "Vikram Singh",
      role: "SOC Engineer",
      company: "Enterprise MSSP",
      quote:
        "Industry-aligned curriculum and expert instructors helped me crack interviews confidently.",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      certification: "Certified Network Security Associate",
      salaryIncrease: "55%",
    },
  ];

  const [activeStory, setActiveStory] = useState(0);

  // Certification Tracks
  const certificationTracks = [
    {
      level: "Foundation",
      title: "Entry-Level Security",
      color: "blue",
      certifications: [
        {
          name: "Security Fundamentals",
          duration: "2 months",
          jobs: ["Security Analyst", "IT Support"],
        },
        {
          name: "Network Security Basics",
          duration: "3 months",
          jobs: ["Network Admin", "SOC L1"],
        },
      ],
    },
    {
      level: "Professional",
      title: "Specialized Security Roles",
      color: "green",
      certifications: [
        {
          name: "Certified SOC Analyst",
          duration: "4 months",
          jobs: ["SOC Analyst", "Threat Hunter"],
        },
        {
          name: "Certified Ethical Hacker",
          duration: "5 months",
          jobs: ["Penetration Tester", "Red Team"],
        },
      ],
    },
    {
      level: "Expert",
      title: "Advanced Security Leadership",
      color: "purple",
      certifications: [
        {
          name: "Security Architect",
          duration: "6 months",
          jobs: ["Security Architect", "CISO"],
        },
        {
          name: "Zero Trust Architect",
          duration: "5 months",
          jobs: ["Security Consultant", "Principal Engineer"],
        },
      ],
    },
  ];

  // Technology Stack
  const technologies = [
    {
      name: "SIEM Solutions",
      icon: <FiShield />,
      tools: ["Splunk", "QRadar", "ArcSight"],
    },
    {
      name: "Cloud Security",
      icon: <FiCloud />,
      tools: ["AWS Security", "Azure Security", "GCP Security"],
    },
    {
      name: "Network Security",
      icon: <FiCpu />,
      tools: ["Firewalls", "IDS/IPS", "VPNs"],
    },
    {
      name: "Identity Security",
      icon: <FiLock />,
      tools: ["Okta", "Azure AD", "Ping Identity"],
    },
  ];

  // Certification Benefits
  const benefits = [
    {
      icon: <FiBriefcase />,
      title: "Career Advancement",
      description:
        "94% of certified professionals report faster career progression",
    },
    {
      icon: <FiTarget />,
      title: "Higher Salaries",
      description: "Average salary increase of 40% post-certification",
    },
    {
      icon: <FiUsers />,
      title: "Industry Recognition",
      description: "Globally recognized by 500+ enterprise security teams",
    },
    {
      icon: <FiAward />,
      title: "Skill Validation",
      description: "Hands-on practical assessments validate real-world skills",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* ================= HERO ================= */}
      <section className="bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Content (same as before) */}
      <div>
        <h1 className="text-3xl md:text-4xl font-light text-white mb-6">
          Industry-Ready Cybersecurity Skills
        </h1>
        <p className="text-gray-300 text-base max-w-lg">
          Globally recognized certifications designed for real-world
          security challenges and enterprise requirements.
        </p>

        {/* Stats */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-2xl font-medium text-white">25K+</p>
              <p className="text-gray-400 text-xs mt-1">
                Certified Professionals
              </p>
            </div>
            <div>
              <p className="text-2xl font-medium text-white">94%</p>
              <p className="text-gray-400 text-xs mt-1">Success Rate</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-white">500+</p>
              <p className="text-gray-400 text-xs mt-1">
                Enterprise Partners
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Minimal Certification Cards */}
      <div>
        <h3 className="text-lg font-medium text-white mb-6">Certification Paths</h3>
        
        <div className="space-y-4">
          {/* SOC Analyst Path */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-5">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-white text-sm">SOC Analyst</h4>
              <span className="text-gray-400 text-xs">Entry-Level</span>
            </div>
            <p className="text-gray-400 text-xs">
              Security operations and incident response
            </p>
          </div>

          {/* Cloud Security Path */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-5">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-white text-sm">Cloud Security</h4>
              <span className="text-gray-400 text-xs">Intermediate</span>
            </div>
            <p className="text-gray-400 text-xs">
              Multi-cloud security architecture and operations
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-5">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-white text-sm">Security Architecture</h4>
              <span className="text-gray-400 text-xs">Advanced</span>
            </div>
            <p className="text-gray-400 text-xs">
              Enterprise security design and strategy
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>0-3 months</span>
            <span>3-6 months</span>
            <span>6-12 months</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="w-1/3 h-1 bg-blue-600 rounded-l-full"></div>
            <div className="w-1/3 h-1 bg-blue-600"></div>
            <div className="w-1/3 h-1 bg-blue-600 rounded-r-full"></div>
          </div>
          <p className="text-gray-400 text-xs mt-2 text-center">Typical certification timeline</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ================= BENEFITS ================= */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light mb-12 text-center">
            Why Choose KalpTech Certifications?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-8 hover:shadow-lg transition hover:border-blue-200"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-blue-600 text-2xl">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATION TRACKS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">
              Structured Certification Paths
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Progress from foundational knowledge to expert-level mastery with
              our clearly defined certification tracks
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {certificationTracks.map((track, index) => (
              <div
                key={index}
                className={`border-2 rounded-2xl p-8 ${
                  track.color === "blue"
                    ? "border-blue-200 bg-blue-50"
                    : track.color === "green"
                      ? "border-green-200 bg-green-50"
                      : "border-purple-200 bg-purple-50"
                }`}
              >
                <div
                  className={`inline-flex px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                    track.color === "blue"
                      ? "bg-blue-100 text-blue-800"
                      : track.color === "green"
                        ? "bg-green-100 text-green-800"
                        : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {track.level} Level
                </div>

                <h3 className="text-2xl font-medium mb-6">{track.title}</h3>

                <div className="space-y-6">
                  {track.certifications.map((cert, certIndex) => (
                    <div
                      key={certIndex}
                      className="bg-white rounded-xl p-6 border"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-medium text-lg">{cert.name}</h4>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <FiClock />
                          {cert.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        Career Opportunities:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cert.jobs.map((job, jobIndex) => (
                          <span
                            key={jobIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {job}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES YOU'LL LEARN ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light mb-12 text-center">
            Industry-Standard Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-8 hover:shadow-lg transition"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-blue-600 text-2xl">{tech.icon}</div>
                </div>
                <h3 className="text-xl font-medium mb-4">{tech.name}</h3>
                <div className="space-y-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <FiCheckCircle className="text-green-500" />
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-12 bg-white border rounded-2xl p-8">
            <h3 className="text-xl font-medium mb-6">
              Additional Skills Covered
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Incident Response",
                "Threat Hunting",
                "Vulnerability Assessment",
                "Security Compliance",
                "Risk Management",
                "Security Automation",
                "Forensic Analysis",
                "Security Awareness",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 border rounded-lg hover:bg-blue-50 transition"
                >
                  <FiStar className="text-yellow-500" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEARNING PLATFORM ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">
                KalpTech Academy Learning Platform
              </h2>
              <p className="text-lg mb-6">
                Experience our cutting-edge learning platform with hands-on
                labs, real-world simulations, and expert-led training.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiBookOpen className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Interactive Labs</h4>
                    <p className="text-gray-600">
                      Access 200+ hands-on labs in real security environments
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiTarget className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Real-World Scenarios</h4>
                    <p className="text-gray-600">
                      Practice on simulated enterprise networks and cloud
                      environments
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiUsers className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Expert Mentorship</h4>
                    <p className="text-gray-600">
                      Learn from industry practitioners with 10+ years of
                      experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Learning Platform"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <FiAward className="text-yellow-500 text-2xl" />
                  <h4 className="font-medium">Certification Prep</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Practice exams with detailed explanations and performance
                  analytics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUCCESS STORIES ================= */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light mb-12 text-center">
            Success Stories
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all ${
                  activeStory === index ? "ring-2 ring-white" : ""
                }`}
                onClick={() => setActiveStory(index)}
              >
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={story.img}
                    alt={story.name}
                    className="w-16 h-16 rounded-full border-2 border-white"
                  />
                  <div>
                    <p className="font-medium text-lg">{story.name}</p>
                    <p className="text-white/70 text-sm">{story.role}</p>
                    <p className="text-white/60 text-xs">{story.company}</p>
                  </div>
                </div>

                <p className="italic mb-6 text-white/90">"{story.quote}"</p>

                <div className="flex items-center justify-between pt-6 border-t border-white/20">
                  <div>
                    <p className="text-sm text-white/70">Certification</p>
                    <p className="font-medium">{story.certification}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-white/70">Salary Increase</p>
                    <p className="text-2xl font-bold text-green-400">
                      {story.salaryIncrease}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="flex justify-center gap-3 mt-12">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`w-3 h-3 rounded-full transition ${
                  activeStory === index
                    ? "bg-white w-10"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div>
            <h2 className="text-4xl font-light mb-6">
              Start Your Security Certification Journey Today
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Join 25,000+ security professionals who have advanced their
              careers with KalpTech certifications
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/Training")}
                className="px-10 py-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2"
              >
                <FiBookOpen />
                Browse All Courses
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-10 py-4 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition"
              >
                Request Information
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
