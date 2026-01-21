import React from 'react';
import { Database, BarChart, TrendingUp, Cpu, Filter, PieChart, Globe, Zap } from 'lucide-react';

export default function DataAnalytics() {
  const services = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Data pipeline design and implementation.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Interactive dashboards and reporting solutions.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Advanced forecasting and predictive modeling.",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      description: "Custom ML model development and deployment.",
      color: "from-amber-600 to-orange-600"
    },
    {
      icon: Filter,
      title: "Data Governance",
      description: "Data quality and governance frameworks.",
      color: "from-rose-600 to-red-600"
    },
    {
      icon: PieChart,
      title: "Data Visualization",
      description: "Advanced data visualization and storytelling.",
      color: "from-indigo-600 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Database className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Data & Analytics</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Transform raw data into actionable insights and strategic advantage.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Analytics Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} w-fit mb-6`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}