import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AekSecInfrastructre() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = {
    overview: {
      title: "Scale with confidence to drive AI success",
      desc: "Achieve maximum performance, efficiency, and resilience with an advanced AI infrastructure portfolio that supports the full AI lifecycle.",
      points: [
        {
          title: "Networking built for scale",
          text: "Optimize AI fabrics with ultra-high-speed switching and optics designed for massive AI workloads.",
        },
        {
          title: "AI security everywhere",
          text: "Continuous AI-native protection seamlessly integrated into your expanding network fabric.",
        },
        {
          title: "Compute optimized for AI",
          text: "Dense GPU servers delivering the raw power required for the most demanding AI workloads.",
        },
        {
          title: "Data Center Interconnect",
          text: "Securely connect AI clusters from cloud to edge with optical and WAN connectivity.",
        },
      ],
    },
    portfolio: {
      title: "Cisco portfolio for Mass-Scale AI Infrastructure",
      desc: "Explore a complete portfolio purpose-built to power, connect, and secure AI data centers.",
      products: [
        {
          name: "Cisco Nexus 9000 Series Switches",
          text: "High-performance, power-efficient switches optimized for scalable AI Ethernet fabrics.",
        },
        {
          name: "Cisco 8000 Series Switches with SONiC",
          text: "Open, flexible networking powered by Silicon One for hyperscale AI environments.",
        },
        {
          name: "Cisco Smart Switches with DPUs",
          text: "Reimagine AI data center designs with intelligent DPU-based switching.",
        },
        {
          name: "Cisco Nexus Dashboard",
          text: "Centralized visibility and control across AI network fabrics and data centers.",
        },
      ],
    },
    workloads: {
      title: "AI Infrastructure for the Agentic Era",
      desc: "Whether building pre-training clusters, inference farms, or distributed edge AI—Cisco has you covered.",
      cta: "Read the white paper",
    },
    resources: {
      title: "Featured Resources",
      resources: [
        {
          name: "Cisco AI Summit",
          text: "Hear from AI visionaries and leaders shaping the future of AI innovation.",
        },
        {
          name: "Cisco Secure AI Factory with NVIDIA",
          text: "Learn how scalable, secure AI infrastructure is delivered at every layer.",
        },
        {
          name: "Cisco AI Defense",
          text: "Protect AI applications with end-to-end security across development and deployment.",
        },
      ],
    },
  };

  return (
    <>
      <Navbar />

      <div className="w-full text-black">
        {/* ================= HERO ================= */}
        <section className="relative bg-[#071b33] text-white">
          <div className="max-w-7xl mx-auto px-8 py-28">
            <p className="text-sm mb-4">Mass-Scale AI Infrastructure</p>
            <h1 className="text-5xl font-light leading-tight mb-6">
              Build your AI infrastructure—fast
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mb-8">
              Unlock scalable, high-performance AI with advanced infrastructure
              products that power, connect, and secure AI workloads.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium">
              Read the white paper
            </button>
          </div>
        </section>

        {/* ================= TABS ================= */}
        <section className="border-b">
          <div className="max-w-7xl mx-auto px-8 flex gap-10 py-6">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </section>

        {/* ================= TAB CONTENT ================= */}
        <section className="max-w-7xl mx-auto px-8 py-20">
          <h2 className="text-4xl font-light mb-6">{tabs[activeTab].title}</h2>

          {tabs[activeTab].desc && (
            <p className="text-gray-700 text-lg max-w-3xl mb-12">
              {tabs[activeTab].desc}
            </p>
          )}

          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {tabs.overview.points.map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* PORTFOLIO */}
          {activeTab === "portfolio" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {tabs.portfolio.products.map((product) => (
                <div key={product.name}>
                  <h3 className="font-semibold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-3">{product.text}</p>
                  <a className="text-blue-600 text-sm cursor-pointer">
                    Explore →
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* WORKLOADS */}
          {activeTab === "workloads" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-gray-700 text-lg mb-8">
                  {tabs.workloads.desc}
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full">
                  {tabs.workloads.cta}
                </button>
              </div>
              <div className="bg-gray-200 h-80 rounded-xl" />
            </div>
          )}

          {/* RESOURCES */}
          {activeTab === "resources" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tabs.resources.resources.map((res) => (
                <div key={res.name} className="bg-white shadow rounded-xl p-6">
                  <h3 className="font-semibold mb-3">{res.name}</h3>
                  <p className="text-gray-600 mb-4">{res.text}</p>
                  <a className="text-blue-600 text-sm cursor-pointer">
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="bg-[#071B33] py-28">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-4xl font-light text-white mb-6">
                AI Infrastructure for the Agentic Era
              </h2>

              <p className="text-gray-300 leading-relaxed mb-10 max-w-xl">
                Whether you are building a mass-scale AI data center for
                pre-training, a large inferencing cluster, or smaller
                distributed edge clusters—or interconnecting them all—AekSec has
                you covered.
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-full font-medium">
                Read the white paper
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img
                src="https://www.cisco.com/content/dam/cisco-cdc/site/images/illustrations/scale-ai-success-486x232.jpg"
                alt="AI Infrastructure"
                className=" w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= PREPARE INFRA ================= */}
        <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-200 h-80 rounded-xl">
            <img src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/cisco-ai-summit-775x436.jpg" />
          </div>
          <div>
            <h2 className="text-4xl font-light mb-6">
              Prepare your infrastructure for demanding AI workloads
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Accelerate AI deployments and simplify operations with modern,
              secure full-stack infrastructure and Cisco Validated Designs.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full">
              Learn more
            </button>
          </div>
        </section>

        <section className="mb-10 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl font-light text-center mb-20">
              Featured Resources
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* CARD 1 */}
              <div className="bg-white border shadow-sm overflow-hidden">
                <img
                  src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/cisco-ai-summit-775x436.jpg"
                  alt="Cisco AI Summit"
                  className="w-full h-52 object-cover"
                />

                <div className="p-8">
                  <h3 className="font-semibold text-lg mb-4">
                    Cisco AI Summit
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Listen to AI visionaries and top business leaders discuss
                    the present challenges and transformative future of today’s
                    most groundbreaking technology.
                  </p>

                  <a className="text-blue-600 font-medium hover:underline cursor-pointer">
                    Get the details →
                  </a>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="bg-white border shadow-sm overflow-hidden">
                <img
                  src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/cisco-nvidia-775x436.jpg"
                  alt="Secure AI Factory"
                  className="w-full h-52 object-cover"
                />

                <div className="p-8">
                  <h3 className="font-semibold text-lg mb-4">
                    Cisco Secure AI Factory with NVIDIA
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Learn how Secure AI Factory with NVIDIA delivers scalable,
                    high-performance full stack AI infrastructure with security
                    at every layer.
                  </p>

                  <a className="text-blue-600 font-medium hover:underline cursor-pointer">
                    Explore Secure AI Factory →
                  </a>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="bg-white border shadow-sm overflow-hidden">
                <img
                  src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/cisco-ai-defense-775x436.jpg"
                  alt="Cisco AI Defense"
                  className="w-full h-52 object-cover"
                />

                <div className="p-8">
                  <h3 className="font-semibold text-lg mb-4">
                    Cisco AI Defense
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Discover how AI Defense end-to-end security helps
                    enterprises develop, deploy, and secure AI applications with
                    confidence.
                  </p>

                  <a className="text-blue-600 font-medium hover:underline cursor-pointer">
                    Read the announcement →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BLOG CTA ================= */}
        <section className="bg-[#071b33] text-white py-20">
          <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row justify-between items-center gap-10">
            <div>
              <p className="text-sm mb-2">Go even further</p>
              <h2 className="text-4xl font-light">Cisco AI blogs</h2>
            </div>
            <button className="bg-blue-600 px-8 py-3 rounded-full">
              Read the AI blogs
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
