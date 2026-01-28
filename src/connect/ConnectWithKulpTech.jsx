import React from 'react';
import { Mail, MapPin, Users, MessageSquare, Briefcase, FileText, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConnectWithKulpTech = () => {
  const navigate = useNavigate();
  
  const contactOptions = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "General Inquiries",
      email: "info@kalptechitsolutions.com",
      description: "For general questions about our cybersecurity services"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Sales & Business",
      email: "sales@kalptechitsolutions.com",
      description: "For pricing, demos, and enterprise security solutions"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Technical Support",
      email: "support@kalptechitsolutions.com",
      description: "Technical assistance for existing customers"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnerships",
      email: "partners@kalptechitsolutions.com",
      description: "Become a KalpTech certified security partner"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Careers & HR",
      email: "careers@kalptechitsolutions.com",
      description: "Job opportunities at our Ahmedabad office"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Training & Certification",
      email: "training@kalptechitsolutions.com",
      description: "Security training programs and certifications"
    }
  ];

  const regionalOffices = [
    {
      city: "Ahmedabad (HQ)",
      address: "Corporate Tower, 5th Floor, SG Highway",
      email: "ahmedabad@kalptechitsolutions.com",
      hours: "Mon-Fri: 9:30 AM - 6:30 PM",
      focus: "Headquarters & Security Operations Center"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit the form
    alert('Thank you for your message! We will contact you soon.');
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Connect with KalpTech IT Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Based in Ahmedabad, India - Protecting businesses worldwide with advanced cybersecurity solutions
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-gray-700">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="text-sm sm:text-base">Corporate Tower, SG Highway, Ahmedabad</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Contact Options */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Quick Links */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Contact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {contactOptions.map((option, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-blue-50 transition-colors">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                        {option.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">{option.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                    <a 
                      href={`mailto:${option.email}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base break-all"
                    >
                      {option.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Offices in India</h2>
              <div className="w-full sm:grid-cols-2 gap-4 sm:gap-6">
                {regionalOffices.map((office, index) => (
                  <div key={index} className={`bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 ${index === 0 ? 'border-2 border-blue-200' : ''}`}>
                    <div className="flex items-start mb-3">
                      <MapPin className={`w-5 h-5 ${index === 0 ? 'text-blue-600' : 'text-gray-600'} mt-1 mr-3`} />
                      <div>
                        <p className={`font-semibold ${index === 0 ? 'text-blue-700' : 'text-gray-900'} text-base sm:text-lg`}>
                          {office.city}
                          {index === 0 && (
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Headquarters</span>
                          )}
                        </p>
                        <p className="text-gray-600 text-sm mt-1">{office.address}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p className="font-medium text-blue-600">Focus: {office.focus}</p>
                      <a 
                        href={`mailto:${office.email}`}
                        className="block text-blue-600 hover:text-blue-700"
                      >
                        {office.email}
                      </a>
                      <p>{office.hours} IST</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Contact Methods */}
            <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Other Ways to Connect</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">For Urgent Matters</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    For critical security incidents or urgent business matters, email us directly and we'll prioritize your request.
                  </p>
                  <a 
                    href="mailto:urgent@kalptechitsolutions.com"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Urgent Email
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Schedule a Meeting</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Prefer to schedule a call or in-person meeting at our Ahmedabad office?
                  </p>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                  >
                    <Briefcase className="w-4 h-4 mr-2" />
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 sticky top-8">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Send a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Your company/organization"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="training">Training & Certification</option>
                    <option value="career">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="How can we help you with cybersecurity?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm text-center">
                  We typically respond within 24 hours during business days (Monday to Friday)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Visit Our Ahmedabad Headquarters
            </h3>
            <p className="text-white/80 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Schedule a visit to our state-of-the-art Security Operations Center in Ahmedabad
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-blue-900 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                Schedule Office Visit
              </button>
              <a 
                href="mailto:visit@kalptechitsolutions.com"
                className="px-6 py-2 sm:px-8 sm:py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base text-center"
              >
                Email for Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithKulpTech;