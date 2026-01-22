import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, AlertCircle, CheckCircle } from 'lucide-react';

const Feedback = () => {
  const [feedbackType, setFeedbackType] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const feedbackCategories = [
    { id: 'product', label: 'Product Feedback', icon: '💡' },
    { id: 'support', label: 'Support Experience', icon: '🤝' },
    { id: 'website', label: 'Website Experience', icon: '🌐' },
    { id: 'security', label: 'Security Concern', icon: '🔒' },
    { id: 'suggestion', label: 'Feature Suggestion', icon: '🚀' },
    { id: 'bug', label: 'Bug Report', icon: '🐛' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Share Your Feedback
          </h1>
          <p className="text-xl text-gray-600">
            Help us improve KulpTech Security. Your input shapes our future.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h2>
            <p className="text-green-700">
              Your feedback has been received. Our team will review it shortly.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Quick Feedback */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quick Feedback
              </h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => setFeedbackType('positive')}
                  className={`flex-1 flex items-center justify-center p-6 rounded-xl border-2 ${
                    feedbackType === 'positive'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <ThumbsUp className="w-8 h-8 text-green-600 mr-3" />
                  <span className="text-lg font-medium">Satisfied</span>
                </button>
                <button
                  onClick={() => setFeedbackType('negative')}
                  className={`flex-1 flex items-center justify-center p-6 rounded-xl border-2 ${
                    feedbackType === 'negative'
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                >
                  <ThumbsDown className="w-8 h-8 text-red-600 mr-3" />
                  <span className="text-lg font-medium">Needs Improvement</span>
                </button>
              </div>
            </div>

            {/* Detailed Feedback Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Category Selection */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  What would you like to provide feedback on?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {feedbackCategories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setFeedbackType(category.id)}
                      className={`p-4 rounded-xl border-2 text-center ${
                        feedbackType === category.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">{category.icon}</div>
                      <span className="font-medium text-gray-900">
                        {category.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  How would you rate your overall experience?
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-3xl hover:scale-110 transition-transform"
                    >
                      {star <= 3 ? '⭐' : '🌟'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Detailed Feedback */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-4">
                  Tell us more about your experience
                </label>
                <textarea
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide specific details about your feedback..."
                ></textarea>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Feedback
                </button>
              </div>
            </form>

            {/* Note */}
            <div className="mt-10 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-yellow-800">Security Feedback</p>
                  <p className="text-yellow-700 mt-1">
                    For urgent security concerns or vulnerability reports, please use our
                    dedicated{' '}
                    <a href="/security-report" className="font-semibold underline">
                      Security Reporting Portal
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;