import React from 'react';
import { Mail, MapPin, Users, MessageSquare, Briefcase, FileText, Award } from 'lucide-react';

const ConnectWithKulpTech = () => {
  const contactOptions = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "General Inquiries",
      description: "For general questions about our cybersecurity services",
      content: "Get information about our cybersecurity solutions, company overview, and service offerings"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Sales & Business",
      description: "For pricing, demos, and enterprise security solutions",
      content: "Request pricing information, schedule product demonstrations, and discuss enterprise security requirements"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Technical Support",
      description: "Technical assistance for existing customers",
      content: "Receive technical support for implemented solutions, troubleshooting, and maintenance services"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnerships",
      description: "Become a KalpTech certified security partner",
      content: "Learn about our partner programs, certification requirements, and collaboration opportunities"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Careers & HR",
      description: "Job opportunities at our Ahmedabad office",
      content: "Explore career opportunities, internship programs, and join our cybersecurity team"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Training & Certification",
      description: "Security training programs and certifications",
      content: "Access our cybersecurity training programs, workshops, and professional certification courses"
    }
  ];

  const regionalOffices = [
    {
      city: "Ahmedabad (HQ)",
      address: "Corporate Tower, 5th Floor, SG Highway",
      hours: "Mon-Fri: 9:30 AM - 6:30 PM",
      focus: "Headquarters & Security Operations Center",
      facilities: [
        "State-of-the-art Security Operations Center",
        "Cybersecurity Research Lab",
        "Training Facilities",
        "Client Meeting Rooms",
        "Technical Support Center"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section - White Background */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact KalpTech IT Solutions
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based in Ahmedabad, India - Protecting businesses worldwide with advanced cybersecurity solutions
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Corporate Tower, SG Highway, Ahmedabad</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options Section - Gray Background */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{option.title}</h3>
                </div>
                <p className="text-gray-600 mb-3 text-sm">{option.description}</p>
                <p className="text-gray-700 text-sm">{option.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations Section - White Background */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Headquarters</h2>
          <div className="max-w-7xl mx-auto">
            {regionalOffices.map((office, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-xl p-8 shadow-sm">
                <div className="flex items-start mb-6">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <div className="flex items-center mb-2">
                      <p className="text-xl font-semibold text-gray-800">
                        {office.city}
                      </p>
                      <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        Headquarters
                      </span>
                    </div>
                    <p className="text-gray-700">{office.address}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Facilities Available</h4>
                    <ul className="space-y-2">
                      {office.facilities.map((facility, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <span className="text-gray-600">{facility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Office Information</h4>
                    <div className="space-y-3 text-gray-600">
                      <div>
                        <p className="font-medium">Focus Area</p>
                        <p>{office.focus}</p>
                      </div>
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p>{office.hours} IST</p>
                      </div>
                      <div>
                        <p className="font-medium">Visiting Hours</p>
                        <p>By appointment only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Protocol Section - Slate Background */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Communication Process</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">General Inquiries</h4>
                  <p className="text-gray-600">
                    For general questions, please contact our main office through standard business communication channels.
                    Our team reviews all inquiries and directs them to the appropriate department for response.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Urgent Security Matters</h4>
                  <p className="text-gray-600">
                    For critical security incidents, we have dedicated emergency response procedures in place.
                    Please follow established emergency protocols for time-sensitive security concerns.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Client Communication</h4>
                  <p className="text-gray-600">
                    Existing clients have access to our client portal for secure communication,
                    support tickets, and project management. Direct client contacts are provided
                    during service onboarding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach Us Section - Gray Background */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication Channels</h3>
              <div className="space-y-2 text-gray-600 bg-white p-4 rounded-lg">
                <p>• Standard business correspondence</p>
                <p>• Client portal access</p>
                <p>• Direct department contacts</p>
                <p>• Secure messaging systems</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Visits</h3>
              <div className="space-y-2 text-gray-600 bg-white p-4 rounded-lg">
                <p>Corporate Tower, SG Highway</p>
                <p>Ahmedabad, Gujarat</p>
                <p className="text-sm text-gray-500">By prior appointment only</p>
                <p className="text-sm text-gray-500">Meeting requests scheduled in advance</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Timeline</h3>
              <div className="space-y-2 text-gray-600 bg-white p-4 rounded-lg">
                <p>• General inquiries: 24-48 hours</p>
                <p>• Sales inquiries: 24 hours</p>
                <p>• Technical support: Based on SLA</p>
                <p>• Urgent matters: Immediate attention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section - White Background */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">About Our Communication Policy</h3>
              <p className="text-gray-600 mb-6">
                As a cybersecurity company, we prioritize secure and structured communication channels.
                All official communications are handled through established business protocols to ensure
                confidentiality and proper documentation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Secure Communication</h4>
                  <p className="text-gray-600 text-sm">
                    We maintain encrypted communication channels for all client-related discussions
                    and sensitive information exchanges.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Documentation</h4>
                  <p className="text-gray-600 text-sm">
                    All official communications are properly documented and archived as per
                    cybersecurity compliance requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ConnectWithKulpTech;