/* eslint-disable react-hooks/purity */
import React, { useState } from 'react';
import { 
  ThumbsUp, 
  ThumbsDown, 
  AlertCircle, 
  CheckCircle, 
  Lightbulb,
  Headphones,
  Globe,
  Shield,
  Rocket,
  Bug,
  Mail,
  User,
  Star,
  MessageSquare,
  Send
} from 'lucide-react';

const Feedback = () => {
  const [feedbackType, setFeedbackType] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const feedbackCategories = [
    { 
      id: 'product', 
      label: 'Product Feedback', 
      icon: <Lightbulb className="w-6 h-6" />,
      description: 'Suggestions about our security platform'
    },
    { 
      id: 'support', 
      label: 'Support Experience', 
      icon: <Headphones className="w-6 h-6" />,
      description: 'Feedback on our customer support'
    },
    { 
      id: 'website', 
      label: 'Website Experience', 
      icon: <Globe className="w-6 h-6" />,
      description: 'Website usability and navigation'
    },
    { 
      id: 'security', 
      label: 'Security Concern', 
      icon: <Shield className="w-6 h-6" />,
      description: 'Security-related observations'
    },
    { 
      id: 'suggestion', 
      label: 'Feature Suggestion', 
      icon: <Rocket className="w-6 h-6" />,
      description: 'New feature recommendations'
    },
    { 
      id: 'bug', 
      label: 'Issue Report', 
      icon: <Bug className="w-6 h-6" />,
      description: 'Technical problems encountered'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFeedbackType('');
      setRating(0);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 border border-green-200 rounded-lg p-12 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-3">Feedback Submitted</h2>
            <p className="text-green-700 mb-6">
              Thank you for taking the time to provide valuable feedback. 
              Our team will review your submission.
            </p>
            <div className="text-sm text-green-600">
              <p>Reference ID: KT-FB-{Date.now().toString().slice(-8)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            KalpTech Security Feedback
          </h1>
          <p className="text-gray-600 text-lg">
            Your insights help us enhance our security solutions
          </p>
        </div>
      </div>

      {/* Main Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          {/* Initial Feedback Type */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Overall Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                onClick={() => setFeedbackType('positive')}
                className={`flex items-center p-5 rounded-lg border-2 cursor-pointer transition-all ${
                  feedbackType === 'positive'
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-200 hover:bg-green-50'
                }`}
              >
                <div className={`p-3 rounded-full mr-4 ${
                  feedbackType === 'positive' ? 'bg-green-100' : 'bg-gray-100'
                }`}>
                  <ThumbsUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Positive Experience</p>
                  <p className="text-sm text-gray-600 mt-1">Share what you liked</p>
                </div>
              </div>
              
              <div 
                onClick={() => setFeedbackType('negative')}
                className={`flex items-center p-5 rounded-lg border-2 cursor-pointer transition-all ${
                  feedbackType === 'negative'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-red-200 hover:bg-red-50'
                }`}
              >
                <div className={`p-3 rounded-full mr-4 ${
                  feedbackType === 'negative' ? 'bg-red-100' : 'bg-gray-100'
                }`}>
                  <ThumbsDown className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Needs Improvement</p>
                  <p className="text-sm text-gray-600 mt-1">Help us do better</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Feedback Category */}
            <div>
              <label className="block text-lg font-medium text-gray-900 mb-6">
                Feedback Category
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {feedbackCategories.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => setFeedbackType(category.id)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      feedbackType === category.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <div className={`p-2 rounded mr-3 ${
                        feedbackType === category.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {category.icon}
                      </div>
                      <h3 className="font-medium text-gray-900">{category.label}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-lg font-medium text-gray-900 mb-6">
                Rating
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="hover:scale-110 transition-transform"
                  >
                    <Star className={`w-8 h-8 ${
                      star <= rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                    }`} />
                  </button>
                ))}
                <span className="ml-4 text-gray-600">
                  {rating === 0 ? 'Select rating' : `${rating} out of 5`}
                </span>
              </div>
            </div>

            {/* Detailed Feedback */}
            <div>
              <label className="block text-lg font-medium text-gray-900 mb-4">
                Detailed Feedback
              </label>
              <textarea
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="Please provide specific details about your feedback, including any relevant context or examples..."
              ></textarea>
              <p className="text-sm text-gray-500 mt-2">
                Provide as much detail as possible to help us understand your perspective
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information (Optional)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center mb-2">
                    <User className="w-4 h-4 text-gray-500 mr-2" />
                    <label className="text-sm font-medium text-gray-700">Name</label>
                  </div>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <Mail className="w-4 h-4 text-gray-500 mr-2" />
                    <label className="text-sm font-medium text-gray-700">Email</label>
                  </div>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Feedback
              </button>
            </div>
          </form>

          {/* Security Notice */}
          <div className="mt-10 p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <div className="p-2 bg-gray-100 rounded mr-4">
                <AlertCircle className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-2">Security Vulnerability Reporting</p>
                <p className="text-gray-600 text-sm">
                  For urgent security concerns, potential vulnerabilities, or security incident reports, 
                  please use our dedicated security reporting channels. All security-related feedback 
                  is handled with the highest priority and confidentiality.
                </p>
                <div className="mt-3 text-sm text-gray-500">
                  <p>Security Email: security@kalptech.com</p>
                  <p>Encrypted Portal: security.kalptech.com/report</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Feedback;