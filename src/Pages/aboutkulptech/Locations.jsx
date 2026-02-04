import React from 'react';
import { MapPin, Globe, Building, Users, Shield, Clock, CheckCircle } from 'lucide-react';

export default function Locations() {
  const regions = [
    {
      region: "North America",
      color: "from-blue-600 to-indigo-600",
      offices: [
        {
          city: "San Francisco, CA",
          role: "Global Headquarters & R&D Center",
          size: "500+ Employees",
          specialties: ["AI Research", "Product Development", "Executive Leadership"],
          established: "2010"
        },
        {
          city: "New York, NY",
          role: "Financial Security Center",
          size: "300+ Employees",
          specialties: ["Banking Security", "Threat Intelligence", "Compliance"],
          established: "2012"
        },
        {
          city: "Washington, DC",
          role: "Government & Defense",
          size: "200+ Employees",
          specialties: ["Federal Security", "Critical Infrastructure", "Classified Operations"],
          established: "2014"
        }
      ]
    },
    {
      region: "Europe",
      color: "from-green-600 to-emerald-600",
      offices: [
        {
          city: "London, UK",
          role: "European Headquarters",
          size: "400+ Employees",
          specialties: ["GDPR Compliance", "Threat Hunting", "Managed Services"],
          established: "2013"
        },
        {
          city: "Berlin, Germany",
          role: "Industrial Security Center",
          size: "250+ Employees",
          specialties: ["OT Security", "Manufacturing Protection", "IoT Security"],
          established: "2015"
        },
        {
          city: "Zurich, Switzerland",
          role: "Privacy & Data Protection",
          size: "150+ Employees",
          specialties: ["Data Privacy", "Banking Security", "Cryptography Research"],
          established: "2016"
        }
      ]
    },
    {
      region: "Asia Pacific",
      color: "from-red-600 to-rose-600",
      offices: [
        {
          city: "Singapore",
          role: "APAC Headquarters",
          size: "350+ Employees",
          specialties: ["Cloud Security", "Financial Hub", "Regional SOC"],
          established: "2014"
        },
        {
          city: "Tokyo, Japan",
          role: "Technology Innovation Center",
          size: "200+ Employees",
          specialties: ["Mobile Security", "IoT Protection", "Automotive Security"],
          established: "2015"
        },
        {
          city: "Sydney, Australia",
          role: "Oceanic Security Operations",
          size: "180+ Employees",
          specialties: ["Government Security", "Critical Infrastructure", "Education Sector"],
          established: "2017"
        }
      ]
    },
    {
      region: "Middle East & Africa",
      color: "from-amber-600 to-orange-600",
      offices: [
        {
          city: "Dubai, UAE",
          role: "MENA Regional Center",
          size: "150+ Employees",
          specialties: ["Oil & Gas Security", "Smart City Protection", "Banking Compliance"],
          established: "2018"
        },
        {
          city: "Johannesburg, South Africa",
          role: "African Security Hub",
          size: "120+ Employees",
          specialties: ["Mining Security", "Telecom Protection", "Regional Threat Intel"],
          established: "2019"
        }
      ]
    }
  ];

  const globalStats = [
    { 
      icon: Building, 
      label: "Global Offices", 
      value: "12", 
      description: "Across 4 continents" 
    },
    { 
      icon: Users, 
      label: "Global Team", 
      value: "3,000+", 
      description: "Security professionals" 
    },
    { 
      icon: Shield, 
      label: "Security Operations", 
      value: "24/7", 
      description: "Follow-the-sun coverage" 
    },
    { 
      icon: Clock, 
      label: "Response Time", 
      value: "<15min", 
      description: "Average incident response" 
    }
  ];

  const coverageMetrics = [
    { value: "99.99%", label: "Global Network Uptime", description: "Service availability" },
    { value: "3", label: "Primary SOCs", description: "Core security operations centers" },
    { value: "6", label: "Secondary SOCs", description: "Regional support centers" },
    { value: "15+", label: "Local Support Centers", description: "Worldwide locations" }
  ];

  const coverageBenefits = [
    "Real-time threat intelligence sharing across all locations",
    "Local compliance expertise in each region",
    "Multilingual support teams available 24/7",
    "Follow-the-sun security operations coverage"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-slate-100 text-black">
        <div className="max-w-7xl mx-auto flex items-start gap-8">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
            <Globe className="w-10 h-10 text-black" />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Global Presence
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Strategically located worldwide to provide 24/7 security coverage and local expertise across all regions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Global Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {globalStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 text-center">
                <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-3">
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

          {/* Regional Offices */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Global Network
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Strategic locations worldwide providing specialized security expertise for regional needs.
            </p>
          </div>

          {regions.map((region, regionIndex) => (
            <div key={regionIndex} className="mb-20">
              <div className="flex items-center mb-12">
                <div className={`w-3 h-12 rounded-r-lg bg-gradient-to-b ${region.color}`}></div>
                <h3 className="text-2xl font-bold text-gray-900 ml-6">
                  {region.region}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {region.offices.map((office, officeIndex) => (
                  <div key={officeIndex} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${region.color} flex items-center justify-center shadow-md`}>
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        Est. {office.established}
                      </span>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {office.city}
                    </h4>
                    <p className="text-lg font-semibold text-gray-700 mb-4">
                      {office.role}
                    </p>
                    <p className="text-gray-600 mb-6">
                      {office.size}
                    </p>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">Specialties</h5>
                      <div className="flex flex-wrap gap-2">
                        {office.specialties.map((specialty, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Global Coverage */}
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-blue-100 mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  24/7 Security Operations Coverage
                </h3>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Our global network of Security Operations Centers (SOCs) provides follow-the-sun coverage, 
                  ensuring continuous protection for your organization regardless of time zone.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Global Coverage Benefits</h4>
                  <ul className="space-y-4">
                    {coverageBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Operational Metrics</h4>
                  <div className="grid grid-cols-2 gap-6">
                    {coverageMetrics.map((metric, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          {metric.value}
                        </div>
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {metric.label}
                        </div>
                        <div className="text-gray-600 text-xs">
                          {metric.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Local Expertise, Global Protection
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                Each KalpTech location combines deep local knowledge with our global security 
                platform, ensuring that clients receive protection that is both globally 
                coordinated and locally relevant. Our distributed teams collaborate seamlessly 
                to provide consistent security postures while adapting to regional requirements, 
                regulations, and threat landscapes.
              </p>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Worldwide Security Coverage
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              With strategically located offices across four continents, we provide 
              comprehensive security coverage that follows the sun, ensuring 24/7 
              protection and support for organizations operating in today's global 
              digital economy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}