import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Building, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Sales Inquiries",
      email: "sales@kalptechsolution.com",
      description: "For product information, pricing, and commercial discussions"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Human Resources",
      email: "hr@kalptechsolution.com",
      description: "For career opportunities, recruitment, and employment matters"
    }
  ];

  const officeInfo = {
    city: "Ahmedabad HQ",
    address: "KalpTech IT Solutions, Corporate Tower, 5th Floor, SG Highway",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM (IST)"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              Contact KalpTech Solutions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with our enterprise solutions team for business inquiries and professional discussions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-light text-gray-900">Send a Message</h2>
              </div>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="flex flex-col items-center">
                    <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Message Received</h3>
                    <p className="text-gray-600">
                      Thank you for contacting KalpTech Solutions. Our team will respond to your inquiry within 24-48 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <User className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <Mail className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <Building className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="sales">Sales and Product Information</option>
                      <option value="business">Business Partnership</option>
                      <option value="technical">Technical Inquiry</option>
                      <option value="general">General Information</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-6">
                <h2 className="text-2xl font-light text-gray-900 mb-4">Contact Methods</h2>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="text-blue-600">
                            {method.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900 mb-1">
                            {method.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {method.description}
                          </p>
                          <div className="text-blue-600 font-medium">
                            {method.email}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Information */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-light text-gray-900">Office Location</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{officeInfo.city}</h3>
                    <p className="text-gray-600">{officeInfo.address}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span>{officeInfo.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Information */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                <h3 className="font-medium text-gray-900 mb-3">Response Time</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-sm">
                      Sales inquiries typically receive a response within 24 hours
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-sm">
                      HR inquiries are processed within 2-3 business days
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-700 text-sm">
                      Technical inquiries may require additional time for detailed responses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-6 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Business Inquiries</h3>
              <p className="text-gray-600">
                For partnership opportunities, enterprise solutions, and business development discussions, 
                please contact our sales team. We work with organizations across various industries to 
                provide customized IT solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Career Opportunities</h3>
              <p className="text-gray-600">
                For employment inquiries, recruitment processes, and career-related questions, 
                please direct all communications to our HR department. We welcome talented professionals 
                to join our growing team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}