import React from 'react';
import { Workflow, Settings, Target, TrendingUp, Users, Clock, Shield, BarChart } from 'lucide-react';

export default function BusinessProcessServices() {
  const services = [
    {
      icon: Workflow,
      title: "Process Automation",
      description: "End-to-end automation of business processes using RPA and AI.",
      color: "from-blue-600 to-cyan-600",
      benefits: ["70% Cost Reduction", "Zero Errors", "24/7 Operation"]
    },
    {
      icon: Settings,
      title: "Digital Transformation",
      description: "Comprehensive strategy and implementation for digital business models.",
      color: "from-emerald-600 to-teal-600",
      benefits: ["Faster Time-to-Market", "Improved Customer Experience", "Revenue Growth"]
    },
    {
      icon: Target,
      title: "Process Optimization",
      description: "Analyze and optimize existing processes for maximum efficiency.",
      color: "from-amber-600 to-orange-600",
      benefits: ["40% Efficiency Gain", "Better Resource Utilization", "Higher Quality"]
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: "Real-time monitoring and analytics for business process performance.",
      color: "from-purple-600 to-pink-600",
      benefits: ["Real-time Insights", "Predictive Analytics", "Actionable Reports"]
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Smooth transition and adoption of new processes and technologies.",
      color: "from-rose-600 to-red-600",
      benefits: ["Higher Adoption Rates", "Reduced Resistance", "Better Training"]
    },
    {
      icon: Shield,
      title: "Compliance & Governance",
      description: "Ensure processes meet regulatory requirements and industry standards.",
      color: "from-indigo-600 to-blue-600",
      benefits: ["Audit Ready", "Risk Mitigation", "Regulatory Compliance"]
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      processes: ["Loan Processing", "KYC/AML", "Claims Management"],
      color: "border-blue-200 bg-blue-50"
    },
    {
      name: "Healthcare",
      processes: ["Patient Onboarding", "Claims Processing", "Appointment Scheduling"],
      color: "border-green-200 bg-green-50"
    },
    {
      name: "Manufacturing",
      processes: ["Supply Chain", "Quality Control", "Inventory Management"],
      color: "border-amber-200 bg-amber-50"
    },
    {
      name: "Retail",
      processes: ["Order Processing", "Customer Service", "Returns Management"],
      color: "border-purple-200 bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Business Process Services</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Transform your operations with intelligent process automation, optimization, 
              and digital transformation services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} w-fit mb-6`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8">{service.description}</p>
                
                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Industry Solutions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className={`rounded-2xl border-2 ${industry.color} p-8`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{industry.name}</h3>
                
                <div className="space-y-4">
                  {industry.processes.map((process, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm">
                      <span className="font-medium text-gray-900">{process}</span>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">70% faster</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-teal-600">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">Average efficiency improvement: 65%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Methodology */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Methodology</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Understand current processes and identify improvement opportunities"
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Create optimized process designs and implementation plans"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Deploy solutions with minimal disruption to operations"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring and improvement of implemented processes"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-gradient-to-b from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "Global Bank",
                challenge: "Manual loan processing taking 5-7 days",
                solution: "Automated loan approval workflow",
                results: "Processing time reduced to 2 hours"
              },
              {
                company: "Healthcare Provider",
                challenge: "Patient onboarding delays",
                solution: "Digital patient intake system",
                results: "Onboarding time reduced by 80%"
              },
              {
                company: "Manufacturer",
                challenge: "Supply chain inefficiencies",
                solution: "AI-powered demand forecasting",
                results: "Inventory costs reduced by 35%"
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-lg font-bold text-gray-900 mb-2">{caseStudy.company}</div>
                <div className="text-sm text-gray-500 mb-6">Fortune 500 Company</div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Challenge</div>
                    <div className="text-gray-900">{caseStudy.challenge}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Solution</div>
                    <div className="text-gray-900">{caseStudy.solution}</div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <div className="text-sm text-gray-500 mb-1">Results</div>
                    <div className="text-lg font-bold text-teal-600">{caseStudy.results}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Workflow className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Transform Your Business Processes</h2>
          <p className="text-xl opacity-90 mb-8">
            Let us help you achieve operational excellence through intelligent process automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-teal-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}