import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState } from "react";
import {
  FiUsers,
  FiBriefcase,
  FiVideo,
  FiShield,
  FiTrendingUp,
  FiCalendar,
  FiBookOpen,
  FiGlobe,
} from "react-icons/fi";

export default function BusinessCollaboration() {
  const [activeTab, setActiveTab] = useState("Remote work");

  const tabs = {
    "Remote work": {
      icon: <FiGlobe />,
      desc: "Enable remote working built to scale quickly and securely across your organization. Distributed teams require reliable communication tools, secure access to resources, and seamless collaboration workflows that maintain productivity regardless of location.",
      details: "Key features include secure VPN connectivity, cloud-based collaboration platforms, virtual meeting rooms with enterprise-grade security, and mobile workforce management tools that ensure team connectivity and project continuity."
    },
    "Return to office": {
      icon: <FiBriefcase />,
      desc: "Support a safe return to the office with intelligent hybrid workspaces. Modern office environments require flexible collaboration spaces that accommodate both in-person and remote participants equally.",
      details: "Solutions include smart meeting room technology, occupancy management systems, touchless meeting controls, hybrid meeting experiences, and workplace analytics that optimize office space utilization while maintaining health and safety standards."
    },
    "Remote agents": {
      icon: <FiUsers />,
      desc: "Rapidly deploy cloud contact center solutions for remote agents. Customer service operations require resilient, scalable platforms that support distributed teams while maintaining service quality and security.",
      details: "Cloud contact center platforms provide omnichannel customer engagement, AI-powered agent assistance, real-time analytics, workforce optimization tools, and secure remote access for customer service professionals working from any location."
    },
    "Remote IT administration": {
      icon: <FiShield />,
      desc: "Manage, analyze, troubleshoot, and secure collaboration devices at scale. IT teams need centralized management tools for distributed collaboration infrastructure with comprehensive visibility and control.",
      details: "Remote administration platforms offer device inventory management, configuration templates, security policy enforcement, performance monitoring, automated updates, and troubleshooting tools for collaboration endpoints across multiple locations."
    },
  };

  return (
    <>
      <div className="w-full">
        {/* ================= HERO ================= */}
        <section
          className="relative h-[70vh] bg-cover bg-center flex items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1603791440384-56cd371ee9a7)",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative max-w-7xl mx-auto px-8 text-white">
            <h1 className="text-5xl font-light mb-4">
              Business Collaboration Solutions
            </h1>
            <p className="max-w-2xl text-lg text-gray-200 mb-6">
              Connect, communicate, and collaborate securely and reliably across
              teams, locations, and devices. Modern collaboration requires integrated
              solutions that support flexible work models while maintaining security,
              productivity, and user experience standards.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Enterprise-grade security and compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Seamless hybrid meeting experiences</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Scalable cloud collaboration platforms</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FUTURE OF WORK ================= */}
        <section className="bg-sky-50 py-20">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="rounded-xl"
              alt="Hybrid work collaboration"
            />

            <div>
              <h2 className="text-3xl font-light mb-4">
                The Future of Work is Hybrid
              </h2>
              <p className="text-gray-600 mb-6">
                Inclusive collaboration experiences are redefining how teams
                connect and perform in a hybrid world. Organizations need flexible
                solutions that support seamless transitions between office, remote,
                and mobile work environments.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-1">Equal Meeting Experience</h4>
                  <p className="text-sm text-gray-600">All participants have equal access and engagement regardless of location</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-1">Flexible Workspace Design</h4>
                  <p className="text-sm text-gray-600">Intelligent office spaces that adapt to changing work patterns</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-1">Digital Collaboration Culture</h4>
                  <p className="text-sm text-gray-600">Tools and processes that foster inclusive team interactions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TABBED WORK MODES ================= */}
        <section className="bg-[#0c2a4d] py-24 text-white">
          <div className="max-w-7xl mx-auto px-8 text-center mb-12">
            <h2 className="text-4xl font-light mb-4">
              Work the way you want from anywhere
            </h2>
            <p className="text-gray-300 max-w-4xl mx-auto mb-8">
              Seamless collaboration across distributed teams drives
              productivity, engagement, and agility. Modern work requires
              flexible solutions that adapt to various working styles and
              business requirements.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="text-center p-3">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-gray-300">Remote team productivity increase</div>
              </div>
              <div className="text-center p-3">
                <div className="text-2xl font-bold">40%</div>
                <div className="text-sm text-gray-300">Reduction in meeting setup time</div>
              </div>
              <div className="text-center p-3">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-gray-300">Platform availability</div>
              </div>
              <div className="text-center p-3">
                <div className="text-2xl font-bold">70%</div>
                <div className="text-sm text-gray-300">User satisfaction improvement</div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {Object.keys(tabs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`p-6 rounded-xl text-left border transition ${
                    activeTab === tab
                      ? "bg-blue-600 border-blue-500"
                      : "border-white/20 hover:bg-white/10"
                  }`}
                >
                  <div className="text-2xl mb-3">{tabs[tab].icon}</div>
                  <h4 className="font-medium">{tab}</h4>
                </button>
              ))}
            </div>

            <div className="bg-white/10 p-8 rounded-xl">
              <div className="text-gray-200 mb-4">
                {tabs[activeTab].desc}
              </div>
              <div className="text-gray-300 text-sm">
                {tabs[activeTab].details}
              </div>
            </div>
          </div>
        </section>

        {/* ================= TECHNOLOGY CATEGORIES ================= */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl font-light text-center mb-16">
              Technology that puts people and teams first
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                {
                  title: "Unified Communications",
                  icon: <FiUsers />,
                  items: ["Webex", "Cloud Calling", "Business Edition"],
                  description: "Integrated communication platforms that combine voice, video, messaging, and meetings into a single, secure experience.",
                },
                {
                  title: "Contact Center",
                  icon: <FiTrendingUp />,
                  items: ["Webex Contact Center", "Enterprise", "Express"],
                  description: "Cloud contact center solutions with AI-powered features for superior customer and agent experiences.",
                },
                {
                  title: "Conferencing",
                  icon: <FiVideo />,
                  items: ["Meetings", "Events", "Support"],
                  description: "Scalable meeting solutions for small teams to large events with enterprise-grade security and reliability.",
                },
                {
                  title: "Endpoints",
                  icon: <FiShield />,
                  items: ["Room Devices", "Headsets", "Cameras"],
                  description: "Hardware solutions designed for optimal collaboration experiences in any environment.",
                },
              ].map((card) => (
                <div key={card.title} className="bg-sky-50 p-6 rounded-xl">
                  <div className="text-4xl text-blue-600 mb-4">
                    {card.icon}
                  </div>
                  <h4 className="font-semibold mb-3">{card.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                  <div className="text-sm text-gray-700">
                    <div className="font-medium mb-1">Solutions include:</div>
                    <div>{card.items.join(", ")}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= LATEST NEWS ================= */}
        <section className="bg-sky-50 py-24">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl font-light text-center mb-16">
              Latest news and innovations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: "Global pulse on hybrid work",
                  description: "Annual research report on hybrid work trends, challenges, and best practices across industries.",
                  stat: "72% of organizations report improved collaboration"
                },
                {
                  title: "Introducing the Webex Suite",
                  description: "New integrated collaboration platform combining meetings, calling, messaging, and events.",
                  stat: "30% faster meeting setup times"
                },
                {
                  title: "People Insights",
                  description: "AI-powered analytics providing insights into meeting effectiveness and team collaboration patterns.",
                  stat: "45% improvement in meeting productivity"
                },
                {
                  title: "Customer experience as a service",
                  description: "Managed services for contact center operations with guaranteed performance metrics.",
                  stat: "99.5% customer satisfaction rates"
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                >
                  <img
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                    alt=""
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h4 className="font-medium mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      {item.description}
                    </p>
                    <div className="text-xs text-blue-600 font-medium">
                      {item.stat}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center text-gray-600">
              <p>Stay informed about the latest developments in business collaboration technology</p>
            </div>
          </div>
        </section>

        {/* ================= EVENTS & WEBINARS ================= */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-3xl font-light text-center mb-12">
              Collaboration events and webinars
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-xl">
                <FiCalendar className="text-5xl text-blue-600 mb-4" />
                <h4 className="font-semibold mb-2">Collaboration Events</h4>
                <p className="text-gray-600 mb-4">
                  Experience the latest collaboration innovations live. Industry
                  events provide opportunities to see new technologies, network
                  with peers, and learn best practices.
                </p>
                <div className="text-sm text-gray-500">
                  Upcoming events include quarterly innovation showcases and annual user conferences
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <FiBookOpen className="text-5xl text-blue-600 mb-4" />
                <h4 className="font-semibold mb-2">Educational Webinars</h4>
                <p className="text-gray-600 mb-4">
                  Join live or watch on-demand collaboration sessions. Technical
                  deep dives, customer success stories, and product demonstrations
                  available through our webinar library.
                </p>
                <div className="text-sm text-gray-500">
                  Topics range from technical implementation to business value realization
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SMALL BUSINESS ================= */}
        <section className="py-24 bg-sky-50">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light mb-4">
                Small business collaboration tools
              </h2>
              <p className="text-gray-600 mb-6">
                Keep teams productive and connected with tools designed for
                small businesses. Affordable, scalable solutions that grow with
                your business while maintaining enterprise-grade features.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Scalable Solutions</h4>
                  <p className="text-sm text-gray-600">Start with essential features and expand as your business grows</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Easy Management</h4>
                  <p className="text-sm text-gray-600">Intuitive administration tools requiring minimal technical expertise</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Cost-Effective</h4>
                  <p className="text-sm text-gray-600">Predictable subscription pricing with no hidden costs</p>
                </div>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
              className="rounded-xl"
              alt="Small business collaboration"
            />
          </div>
        </section>
      </div>
    </>
  );
}