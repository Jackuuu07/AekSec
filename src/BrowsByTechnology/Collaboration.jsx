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
  FiArrowRight,
} from "react-icons/fi";

export default function BusinessCollaboration() {
  const [activeTab, setActiveTab] = useState("Remote work");

  const tabs = {
    "Remote work": {
      icon: <FiGlobe />,
      desc: "Enable remote working built to scale quickly and securely across your organization.",
    },
    "Return to office": {
      icon: <FiBriefcase />,
      desc: "Support a safe return to the office with intelligent hybrid workspaces.",
    },
    "Remote agents": {
      icon: <FiUsers />,
      desc: "Rapidly deploy cloud contact center solutions for remote agents.",
    },
    "Remote IT administration": {
      icon: <FiShield />,
      desc: "Manage, analyze, troubleshoot, and secure collaboration devices at scale.",
    },
  };

  return (
    <>
      <Navbar />

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
              teams, locations, and devices.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full">
              See what’s possible
            </button>
          </div>

          {/* Right floating actions */}
          <div className="hidden lg:flex flex-col gap-4  absolute right-0 top-1/2 -translate-y-1/2">
            {[
              "Explore partnerships",
              "Collaboration events",
              "View case studies",
              "See real experiences",
            ].map((item) => (
              <button
                key={item}
                className="bg-blue-700/90 text-white px-6 py-3 rounded-full text-sm hover:bg-blue-800"
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* ================= FUTURE OF WORK ================= */}
        <section className="bg-sky-50 py-20">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="rounded-xl"
              alt=""
            />

            <div>
              <h2 className="text-3xl font-light mb-4">
                The Future of Work is Hybrid
              </h2>
              <p className="text-gray-600 mb-4">
                Inclusive collaboration experiences are redefining how teams
                connect and perform in a hybrid world.
              </p>
              <a className="text-blue-600 flex items-center gap-2">
                Learn more <FiArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* ================= TABBED WORK MODES ================= */}
        <section className="bg-[#0c2a4d] py-24 text-white">
          <div className="max-w-7xl mx-auto px-8 text-center mb-12">
            <h2 className="text-4xl font-light mb-4">
              Work the way you want from anywhere
            </h2>
            <p className="text-gray-300 max-w-4xl mx-auto">
              Seamless collaboration across distributed teams drives
              productivity, engagement, and agility.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {Object.keys(tabs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`p-6 rounded-xl text-left border ${
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

            <div className="bg-white/10 p-8 rounded-xl text-gray-200">
              {tabs[activeTab].desc}
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-cyan-500 text-black px-8 py-3 rounded-full">
              More business resiliency ideas
            </button>
          </div>
        </section>

        {/* ================= TECHNOLOGY CATEGORIES ================= */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl font-light text-center mb-16">
              Technology that puts people and teams first
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              {[
                {
                  title: "Unified Communications",
                  icon: <FiUsers />,
                  items: ["Webex", "Cloud Calling", "Business Edition"],
                },
                {
                  title: "Contact Center",
                  icon: <FiTrendingUp />,
                  items: ["Webex Contact Center", "Enterprise", "Express"],
                },
                {
                  title: "Conferencing",
                  icon: <FiVideo />,
                  items: ["Meetings", "Events", "Support"],
                },
                {
                  title: "Endpoints",
                  icon: <FiShield />,
                  items: ["Room Devices", "Headsets", "Cameras"],
                },
              ].map((card) => (
                <div key={card.title}>
                  <div className="text-4xl text-blue-600 mb-4 mx-auto">
                    {card.icon}
                  </div>
                  <h4 className="font-semibold mb-3">{card.title}</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    {card.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
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
                "Global pulse on hybrid work",
                "Introducing the Webex Suite",
                "People Insights",
                "Customer experience as a service",
              ].map((title) => (
                <div
                  key={title}
                  className="bg-white rounded-xl overflow-hidden shadow"
                >
                  <img
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                    alt=""
                  />
                  <div className="p-6">
                    <h4 className="font-medium mb-2">{title}</h4>
                    <p className="text-gray-600 text-sm">
                      Discover how innovation is shaping the future of
                      collaboration.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 flex justify-center gap-6">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full">
                See recent news
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full">
                Read blog
              </button>
            </div>
          </div>
        </section>

        {/* ================= EVENTS & WEBINARS ================= */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-light mb-12">
              Collaboration events and webinars
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <FiCalendar className="text-5xl text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Collaboration Events</h4>
                <p className="text-gray-600 mb-3">
                  Experience the latest collaboration innovations live.
                </p>
                <a className="text-blue-600">Attend an event →</a>
              </div>

              <div>
                <FiBookOpen className="text-5xl text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Webinars</h4>
                <p className="text-gray-600 mb-3">
                  Join live or watch on-demand collaboration sessions.
                </p>
                <a className="text-blue-600">View webinars →</a>
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
                small businesses.
              </p>
              <button className="bg-blue-700 text-white px-8 py-3 rounded-full">
                Explore Cisco Designed
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
              className="rounded-xl"
              alt=""
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
