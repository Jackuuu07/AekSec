import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
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
    setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      city: "Ahmedabad HQ",
      address: "KalpTech IT Solutions, Corporate Tower, 5th Floor, SG Highway",
      phone: "+91 79 1234 5678",
      email: "info@kalptechitsolutions.com",
      hours: "Mon-Fri, 9AM-6PM IST"
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Connect with our cybersecurity experts. We're here to help secure your digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-700">
                    Thank you for contacting KalpTech. Our security experts will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+91 12345 67890"
                      />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="career">Careers</option>
                      <option value="other">Other</option>
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
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales Inquiries</h3>
                    <p className="text-gray-600 mb-1">For product information and pricing</p>
                    <a href="mailto:sales@kalptechitsolutions.com" className="text-blue-600 font-medium hover:text-blue-700">
                      sales@kalptechitsolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">General Inquiries</h3>
                    <p className="text-gray-600 mb-1">For non-urgent matters</p>
                    <a href="mailto:info@kalptechitsolutions.com" className="text-blue-600 font-medium hover:text-blue-700">
                      info@kalptechitsolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
                    <p className="text-gray-600 mb-1">Technical assistance and troubleshooting</p>
                    <a href="mailto:support@kalptechitsolutions.com" className="text-blue-600 font-medium hover:text-blue-700">
                      support@kalptechitsolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM (IST)</p>
                  </div>
                </div>
              </div>

              {/* Global Offices */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {offices.map((office, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{office.city}</h4>
                          <p className="text-sm text-gray-600 mt-1">{office.address}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <a href={`mailto:${office.email}`} className="block text-sm text-gray-600 hover:text-blue-600">
                          {office.email}
                        </a>
                        <p className="text-sm text-gray-600">{office.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Quick Links</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Support",
                description: "Get help with your existing KalpTech products",
                buttonText: "Get Support",
                onClick: () => navigate("/Support")
              },
              {
                title: "Partner Program",
                description: "Become a KalpTech partner and grow your business",
                buttonText: "Learn More",
                onClick: () => navigate("/values/partners")
              },
              {
                title: "Training & Certification",
                description: "Enhance your skills with our security training programs",
                buttonText: "Browse Courses",
                onClick: () => navigate("/Training")
              }
            ].map((link, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{link.title}</h3>
                <p className="text-gray-600 mb-6">{link.description}</p>
                <button
                  onClick={link.onClick}
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  {link.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Schedule a Security Consultation</h2>
          <p className="text-xl opacity-90 mb-8">
            Speak directly with our security experts about your organization's unique challenges.
          </p>
          <button 
            onClick={() => {
              // In a real app, this would open a calendar booking system
              window.location.href = `mailto:sales@kalptechitsolutions.com?subject=Schedule%20a%20Security%20Consultation&body=Hello%20KalpTech%20Team,%0A%0AI%20would%20like%20to%20schedule%20a%20security%20consultation.%0A%0ABest%20regards,`;
            }}
            className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Book a Demo
          </button>
        </div>
      </section>
    </div>
  );
}