import React from 'react';
import { MapPin, Globe, Building, Users, Shield, Clock } from 'lucide-react';

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
    { icon: Building, label: "Global Offices", value: "12", description: "Across 4 continents" },
    { icon: Users, label: "Global Team", value: "3,000+", description: "Security professionals" },
    { icon: Shield, label: "Security Operations", value: "24/7", description: "Follow-the-sun coverage" },
    { icon: Clock, label: "Response Time", value: "<15min", description: "Average incident response" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Globe className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Global Presence</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Strategically located worldwide to provide 24/7 security coverage and local expertise across all regions.
          </p>
        </div>
      </section>

      {/* Global Statistics */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {globalStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Global Network</h2>
          
          {regions.map((region, regionIndex) => (
            <div key={regionIndex} className="mb-16">
              <div className="flex items-center mb-10">
                <div className={`w-4 h-12 rounded-r-lg bg-gradient-to-b ${region.color}`}></div>
                <h3 className="text-3xl font-bold text-gray-900 ml-6">{region.region}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-6"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {region.offices.map((office, officeIndex) => (
                  <div key={officeIndex} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${region.color}`}>
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        Est. {office.established}
                      </span>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{office.city}</h4>
                    <p className="text-lg font-semibold text-gray-700 mb-4">{office.role}</p>
                    <p className="text-gray-600 mb-6">{office.size}</p>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">Specialties</h5>
                      <div className="flex flex-wrap gap-2">
                        {office.specialties.map((specialty, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full mt-8 py-3 bg-gradient-to-r from-gray-900 to-slate-900 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                      Contact This Office
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Global Coverage Map */}
          <div className="bg-gradient-to-r from-gray-900 to-slate-900 rounded-3xl p-12 text-white mb-16">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold text-center mb-8">24/7 Security Operations Coverage</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-xl mb-6">
                    Our global network of Security Operations Centers (SOCs) provides follow-the-sun coverage, 
                    ensuring continuous protection for your organization regardless of time zone.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span>Real-time threat intelligence sharing across all locations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span>Local compliance expertise in each region</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span>Multilingual support teams available 24/7</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-xl p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold mb-2">99.99%</div>
                    <div className="text-gray-300">Global Network Uptime</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-gray-300">Primary SOCs</div>
                    </div>
                    <div className="text-center p-4 bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold">6</div>
                      <div className="text-gray-300">Secondary SOCs</div>
                    </div>
                    <div className="text-center p-4 bg-gray-700 rounded-lg">
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-gray-300">Local Support Centers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}