    import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
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
      city: "San Francisco",
      address: "123 Security Way, Suite 500",
      phone: "+1 (415) 555-0199",
      email: "sf@kulptech.com",
      hours: "Mon-Fri, 9AM-6PM PST"
    },
    {
      city: "New York",
      address: "456 Cyber Street, Floor 22",
      phone: "+1 (212) 555-0199",
      email: "ny@kulptech.com",
      hours: "Mon-Fri, 9AM-6PM EST"
    },
    {
      city: "London",
      address: "789 Protection Square",
      phone: "+44 20 5555 0199",
      email: "london@kulptech.com",
      hours: "Mon-Fri, 9AM-6PM GMT"
    },
    {
      city: "Singapore",
      address: "101 Security Tower",
      phone: "+65 6555 0199",
      email: "singapore@kulptech.com",
      hours: "Mon-Fri, 9AM-6PM SGT"
    }
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
              Get in touch with our security experts. We're here to help you protect what matters most.
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
                    Thank you for contacting KulpTech. Our security experts will get back to you within 24 hours.
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
                        placeholder="+1 (555) 000-0000"
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
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Support</h3>
                    <p className="text-gray-600 mb-1">24/7 Security Operations Center</p>
                    <a href="tel:+1-800-SECURITY" className="text-blue-600 font-medium hover:text-blue-700">
                      +1 (800) 732-8743
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
                    <a href="mailto:info@kulptech.com" className="text-blue-600 font-medium hover:text-blue-700">
                      info@kulptech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (Local Time)</p>
                    <p className="text-gray-600">Emergency Support: 24/7</p>
                  </div>
                </div>
              </div>

              {/* Global Offices */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Offices</h3>
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
                        <a href={`tel:${office.phone}`} className="block text-sm text-gray-600 hover:text-blue-600">
                          {office.phone}
                        </a>
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
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Sales Inquiry",
                description: "Speak with our sales team about our security solutions",
                link: "/sales",
                buttonText: "Contact Sales"
              },
              {
                title: "Technical Support",
                description: "Get help with your existing KulpTech products",
                link: "/support",
                buttonText: "Get Support"
              },
              {
                title: "Partner Program",
                description: "Become a KulpTech partner and grow your business",
                link: "/partners",
                buttonText: "Join Program"
              },
              {
                title: "Media Relations",
                description: "For press and media inquiries",
                link: "/media",
                buttonText: "Media Kit"
              }
            ].map((link, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{link.title}</h3>
                <p className="text-gray-600 mb-6">{link.description}</p>
                <a 
                  href={link.link}
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  {link.buttonText}
                </a>
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
          <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Book a Demo
          </button>
        </div>
      </section>
    </div>
  );
}