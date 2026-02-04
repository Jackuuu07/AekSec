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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-100 text-black">
        <div className="max-w-7xl mx-auto flex items-start gap-8">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
            <Trophy className="w-10 h-10 text-black" />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Awards & Recognitions
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Celebrating excellence and innovation in cybersecurity recognized by industry leaders and independent organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Recognition Timeline
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Our commitment to innovation and excellence has been consistently recognized by leading industry organizations.
            </p>
          </div>

          {/* Awards by Year */}
          {awards.map((yearGroup, yearIndex) => (
            <div key={yearIndex} className="mb-20 last:mb-0">
              <div className="flex items-center justify-center mb-12">
                <div className="w-20 h-1 bg-gray-300"></div>
                <h3 className="text-4xl font-bold text-gray-900 mx-8">
                  {yearGroup.year}
                </h3>
                <div className="w-20 h-1 bg-gray-300"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {yearGroup.awards.map((award, awardIndex) => (
                  <div key={awardIndex} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${award.color} flex items-center justify-center mb-6 shadow-md`}>
                      <award.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full mb-4">
                        {award.organization}
                      </span>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        {award.title}
                      </h4>
                      <p className="text-lg font-semibold text-gray-700 mb-4">
                        {award.category}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

   
          {/* Additional Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Recognition Categories
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Our awards span across multiple categories including technical innovation, customer success, 
                partner programs, and industry leadership. Each recognition represents our commitment to 
                excellence in cybersecurity and continuous improvement in protecting enterprise environments.
              </p>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Commitment to Excellence
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              These awards and recognitions reflect our ongoing dedication to innovation, 
              security excellence, and delivering exceptional value to our customers worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}