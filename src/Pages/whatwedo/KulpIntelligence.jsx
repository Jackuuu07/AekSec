import React from 'react';
import { Brain, Target, BarChart3, Zap, Eye, Cpu, TrendingUp, Shield } from 'lucide-react';

export default function KulpIntelligence() {
  const capabilities = [
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "AI models that forecast threats and business outcomes with high accuracy.",
      color: "from-blue-600 to-cyan-600",
      metrics: "95% Prediction Accuracy"
    },
    {
      icon: Target,
      title: "Pattern Recognition",
      description: "Identify complex patterns and anomalies in massive datasets.",
      color: "from-purple-600 to-pink-600",
      metrics: "Real-time Processing"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Transform raw data into actionable business insights.",
      color: "from-emerald-600 to-teal-600",
      metrics: "50+ Data Sources"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Process streaming data for immediate insights and responses.",
      color: "from-amber-600 to-orange-600",
      metrics: "<100ms Latency"
    },
    {
      icon: Eye,
      title: "Anomaly Detection",
      description: "Automatically detect unusual patterns and potential threats.",
      color: "from-rose-600 to-red-600",
      metrics: "99.9% Detection Rate"
    },
    {
      icon: Cpu,
      title: "Machine Learning Ops",
      description: "End-to-end platform for building, deploying, and managing ML models.",
      color: "from-indigo-600 to-blue-600",
      metrics: "AutoML Integration"
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      challenge: "Fraud detection and risk management",
      solution: "Real-time transaction monitoring with AI-powered fraud scoring",
      results: "Reduced fraud losses by 65%"
    },
    {
      industry: "Healthcare",
      challenge: "Patient outcome prediction",
      solution: "Predictive models for patient risk stratification and treatment optimization",
      results: "Improved patient outcomes by 40%"
    },
    {
      industry: "Retail",
      challenge: "Demand forecasting and inventory optimization",
      solution: "AI-powered sales forecasting and supply chain optimization",
      results: "Reduced inventory costs by 30%"
    },
    {
      industry: "Manufacturing",
      challenge: "Predictive maintenance",
      solution: "IoT sensor analysis for equipment failure prediction",
      results: "Decreased downtime by 75%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <Brain className="w-12 h-12" />
              <h1 className="text-5xl md:text-6xl font-bold">Kulp Intelligence</h1>
            </div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Advanced AI and machine learning platform that transforms data into actionable intelligence 
              for smarter decision-making and predictive insights.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">AI Capabilities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${capability.color} w-fit mb-6`}>
                  <capability.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                
                <div className="border-t border-gray-100 pt-6">
                  <div className="text-sm text-gray-500 mb-2">Key Metric</div>
                  <div className="text-lg font-bold text-gray-900">{capability.metrics}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gradient-to-b from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Industry Use Cases</h2>
          
          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="lg:w-1/4">
                    <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full font-semibold mb-4">
                      {useCase.industry}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Challenge</h3>
                    <p className="text-gray-700">{useCase.challenge}</p>
                  </div>
                  
                  <div className="lg:w-2/4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Kulp Intelligence Solution</h3>
                    <p className="text-gray-700 mb-4">{useCase.solution}</p>
                    <div className="flex items-center gap-2 text-indigo-600">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-semibold">{useCase.results}</span>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/4">
                    <div className="text-center p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white">
                      <Shield className="w-8 h-8 mx-auto mb-3" />
                      <div className="text-sm opacity-90">Impact</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Technology Stack</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Technologies</h3>
              
              <div className="space-y-6">
                {[
                  { name: "TensorFlow/PyTorch", desc: "Deep learning frameworks" },
                  { name: "Apache Spark", desc: "Distributed processing" },
                  { name: "Kubernetes", desc: "Container orchestration" },
                  { name: "Elasticsearch", desc: "Real-time search & analytics" },
                  { name: "PostgreSQL/Redis", desc: "Data storage & caching" }
                ].map((tech, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900">{tech.name}</div>
                      <div className="text-sm text-gray-600">{tech.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Platform Features</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "AutoML", value: "Yes" },
                  { label: "Model Versioning", value: "Yes" },
                  { label: "Explainable AI", value: "Yes" },
                  { label: "Data Pipeline", value: "Visual Builder" },
                  { label: "Real-time Inference", value: "<50ms" },
                  { label: "Multi-cloud Support", value: "AWS/Azure/GCP" },
                  { label: "Security", value: "Enterprise-grade" },
                  { label: "Compliance", value: "GDPR/SOC2/HIPAA" }
                ].map((feature, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <div className="text-sm text-gray-500 mb-1">{feature.label}</div>
                    <div className="font-semibold text-gray-900">{feature.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Brain className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Unlock the Power of AI</h2>
          <p className="text-xl opacity-90 mb-8">
            Start your journey with Kulp Intelligence. Request a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Request Demo
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}