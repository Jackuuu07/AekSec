import React from 'react';
import { Trophy, Award, Star, Medal, ShieldCheck, Target } from 'lucide-react';

export default function AwardsRecognitions() {
  const awards = [
    {
      year: "2024",
      awards: [
        {
          icon: Trophy,
          title: "Cybersecurity Excellence Awards",
          category: "Best Enterprise Security Platform",
          organization: "Cybersecurity Insiders",
          description: "Recognized for our comprehensive enterprise security platform that integrates endpoint, network, and cloud security.",
          color: "from-yellow-500 to-amber-600"
        },
        {
          icon: Medal,
          title: "Global InfoSec Awards",
          category: "Pioneering AI Security Solution",
          organization: "Cyber Defense Magazine",
          description: "Awarded for our innovative use of AI in threat detection and automated response capabilities.",
          color: "from-blue-500 to-cyan-600"
        }
      ]
    },
    {
      year: "2023",
      awards: [
        {
          icon: Award,
          title: "SC Awards Europe",
          category: "Best Security Company",
          organization: "SC Magazine",
          description: "Recognized as the overall best security company for innovation, technology, and customer service.",
          color: "from-purple-500 to-pink-600"
        },
        {
          icon: ShieldCheck,
          title: "Fortress Cybersecurity Awards",
          category: "Best Zero Trust Implementation",
          organization: "Business Intelligence Group",
          description: "Awarded for our comprehensive Zero Trust architecture implementation for enterprise clients.",
          color: "from-green-500 to-emerald-600"
        },
        {
          icon: Target,
          title: "Cloud Security Awards",
          category: "Best Cloud Security Solution",
          organization: "Cloud Security Alliance",
          description: "Recognized for our innovative approach to securing hybrid and multi-cloud environments.",
          color: "from-red-500 to-orange-600"
        }
      ]
    },
    {
      year: "2022",
      awards: [
        {
          icon: Star,
          title: "CRN Partner Program Guide",
          category: "5-Star Partner Program",
          organization: "CRN",
          description: "Top-rated partner program for solution providers, recognized for training, support, and profitability.",
          color: "from-indigo-500 to-violet-600"
        },
        {
          icon: Trophy,
          title: "IT World Awards",
          category: "Security Product of the Year",
          organization: "Network Products Guide",
          description: "Awarded for our next-generation firewall with integrated threat intelligence capabilities.",
          color: "from-teal-500 to-emerald-600"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Trophy className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Awards & Recognitions</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Celebrating excellence and innovation in cybersecurity recognized by industry leaders and independent organizations.
          </p>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Recognition Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to innovation and excellence has been consistently recognized by leading industry organizations.
            </p>
          </div>

          {/* Awards by Year */}
          {awards.map((yearGroup, yearIndex) => (
            <div key={yearIndex} className="mb-20">
              <div className="flex items-center mb-10">
                <div className="w-32 h-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
                <h3 className="text-4xl font-bold text-gray-900 mx-6">{yearGroup.year}</h3>
                <div className="flex-1 h-1 bg-gradient-to-l from-gray-300 to-transparent"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {yearGroup.awards.map((award, awardIndex) => (
                  <div key={awardIndex} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 border border-gray-100">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${award.color} w-fit mb-6`}>
                      <award.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-sm font-semibold bg-gray-100 text-gray-700 rounded-full mb-3">
                        {award.organization}
                      </span>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">{award.title}</h4>
                      <p className="text-lg font-semibold text-gray-700 mb-4">{award.category}</p>
                    </div>
                    
                    <p className="text-gray-600">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Statistics Section */}
          <div className="bg-gradient-to-r from-gray-900 to-slate-900 rounded-3xl p-12 text-white">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold text-center mb-12">Our Recognition in Numbers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-3">25+</div>
                  <div className="text-gray-300">Industry Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-3">15+</div>
                  <div className="text-gray-300">Years of Recognition</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-3">50+</div>
                  <div className="text-gray-300">Independent Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-3">100%</div>
                  <div className="text-gray-300">Positive Analyst Ratings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}