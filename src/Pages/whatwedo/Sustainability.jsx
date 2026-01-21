import React from 'react';
import { Leaf, Recycle, Sun, Droplets, TreePine, Wind } from 'lucide-react';

export default function Sustainability() {
  const initiatives = [
    {
      icon: Leaf,
      title: "Carbon Reduction",
      description: "Strategies and technologies to reduce carbon footprint.",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Waste reduction and resource optimization programs.",
      color: "from-teal-600 to-cyan-600"
    },
    {
      icon: Sun,
      title: "Renewable Energy",
      description: "Transition to renewable energy sources.",
      color: "from-amber-600 to-yellow-600"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Water management and conservation technologies.",
      color: "from-blue-600 to-sky-600"
    },
    {
      icon: TreePine,
      title: "Biodiversity",
      description: "Ecosystem protection and restoration initiatives.",
      color: "from-lime-600 to-green-600"
    },
    {
      icon: Wind,
      title: "Sustainable Operations",
      description: "Green operations and sustainable practices.",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-20 px-6 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Leaf className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sustainability</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Building a sustainable future through technology innovation and responsible practices.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Sustainability Initiatives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${initiative.color} w-fit mb-6`}>
                  <initiative.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Sustainability Goals</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { goal: "Carbon Neutral", target: "2025", progress: "75%" },
              { goal: "100% Renewable Energy", target: "2026", progress: "60%" },
              { goal: "Zero Waste", target: "2027", progress: "45%" },
              { goal: "Water Positive", target: "2028", progress: "30%" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-lg font-bold text-gray-900 mb-2">{item.goal}</div>
                <div className="text-sm text-gray-500 mb-4">Target: {item.target}</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                    style={{ width: item.progress }}
                  ></div>
                </div>
                <div className="text-sm font-medium text-gray-700 mt-2">{item.progress} Complete</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}