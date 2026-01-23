import React from 'react';
import { ShoppingCart, Shield, CreditCard, Package, Store, TrendingUp } from 'lucide-react';

export default function Retail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-opacity-20 bg-white"></div>
        <div className="relative py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Retail Security</h1>
              <p className="text-xl opacity-90">Securing commerce and customer trust</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl opacity-90">
            KalpTech protects retail businesses with comprehensive payment security, 
            e-commerce protection, and supply chain security solutions.
          </p>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center mb-6">
                <CreditCard className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Security</h3>
              <p className="text-gray-600 mb-4">PCI DSS compliant payment processing with real-time fraud detection.</p>
              <div className="text-sm text-amber-600 font-semibold">99.9% Fraud Prevention</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-400 flex items-center justify-center mb-6">
                <Store className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce Protection</h3>
              <p className="text-gray-600 mb-4">Secure online shopping experiences with bot management and DDoS protection.</p>
              <div className="text-sm text-orange-600 font-semibold">Zero Cart Abandonment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}