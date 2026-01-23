import React from 'react';
import { Mail, Phone, MapPin, Users, MessageSquare } from 'lucide-react';

const ConnectWithKulpTech = () => {
  const contactOptions = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "General Inquiries",
      email: "info@kalptech.com",
      description: "For general questions about our services"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Sales Team",
      phone: "+1-800-KULP-TECH",
      email: "sales@kalptech.com",
      description: "For pricing, demos, and enterprise solutions"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Technical Support",
      phone: "+1-800-KULP-SUPPORT",
      email: "support@kalptech.com",
      description: "24/7 technical assistance for existing customers"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnerships",
      email: "partners@kalptech.com",
      description: "Become a KalpTech certified partner"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Connect with KalpTech Security
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your security is our priority. Reach out to our team of cybersecurity experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Options */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactOptions.map((option, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-4">
                        {option.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{option.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <div className="space-y-2">
                      {option.phone && (
                        <p className="text-blue-600 font-medium">📞 {option.phone}</p>
                      )}
                      <p className="text-blue-600 font-medium">✉️ {option.email}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Locations */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Global Headquarters</h3>
                <div className="flex items-start bg-gray-50 rounded-xl p-6">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">KalpTech Security HQ</p>
                    <p className="text-gray-600">123 Cyber Boulevard, Suite 500</p>
                    <p className="text-gray-600">San Francisco, CA 94107, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithKulpTech;