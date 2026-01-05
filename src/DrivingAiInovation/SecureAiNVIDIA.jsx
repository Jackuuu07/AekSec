import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SecureAiNVIDIA() {
  const [activeTab, setActiveTab] = useState("finance");

  const tabContent = {
    finance: {
      title: "AI at the Core: Financial Services",
      desc: "Explore how AekSec and NVIDIA help financial institutions modernize infrastructure, detect fraud faster, and deliver secure AI-driven services at scale.",
    },
    public: {
      title: "Modernizing the Public Sector",
      desc: "Enable secure AI workloads for smart cities, defense, and government agencies with scalable and trusted AI infrastructure.",
    },
    healthcare: {
      title: "Transforming Healthcare",
      desc: "Accelerate diagnostics, medical imaging, and patient insights using high-performance AI platforms.",
    },
    security: {
      title: "Empowering Secure Innovation",
      desc: "Protect AI models and applications with end-to-end security, observability, and governance.",
    },
  };

  const [activeTab1, setActiveTab1] = useState("knowledge");

  const tabs = [
    { id: "knowledge", label: "Knowledge base copilots" },
    { id: "content", label: "Content and code generation" },
    { id: "agents", label: "Virtual agents and chatbots" },
    { id: "visual", label: "Visual computing" },
    { id: "language", label: "Language translations" },
    { id: "detection", label: "Detection and prediction" },
  ];

  const content = {
    knowledge: [
      {
        title: "Customer support resolution",
        desc: "Resolve issues faster and improve first-contact resolution. Empower representatives to quickly find accurate answers from internal sources like knowledge bases and past tickets.",
      },
      {
        title: "Employee onboarding and training",
        desc: "Get new employees up and running faster. Let them ask AI agents questions to learn processes, policies, or technical systems.",
      },
      {
        title: "Sales enablement",
        desc: "With AI-based chat, sales teams can get real-time answers on pricing, compliance, or objections and respond to customers faster.",
      },
      {
        title: "Self-service portals",
        desc: "Give customers AI copilots through portals so they can get context-aware answers while reducing load on human agents.",
      },
    ],
    content: [
      {
        title: "Marketing content creation",
        desc: "Generate blogs, emails, and campaign assets faster while maintaining brand consistency.",
      },
      {
        title: "Developer code assistance",
        desc: "Accelerate development with AI-generated code, suggestions, and documentation.",
      },
    ],
    agents: [
      {
        title: "Automated customer engagement",
        desc: "Deploy virtual agents to handle repetitive customer queries across channels.",
      },
      {
        title: "24/7 support availability",
        desc: "Ensure round-the-clock support without increasing operational costs.",
      },
    ],
    visual: [
      {
        title: "Video analytics",
        desc: "Analyze video streams for insights in security, retail, and manufacturing.",
      },
      {
        title: "Computer vision workloads",
        desc: "Enable object detection, facial recognition, and quality inspection.",
      },
    ],
    language: [
      {
        title: "Real-time translation",
        desc: "Break language barriers with instant translation across applications.",
      },
    ],
    detection: [
      {
        title: "Anomaly detection",
        desc: "Detect unusual patterns and threats using AI-driven analytics.",
      },
      {
        title: "Predictive insights",
        desc: "Forecast trends and outcomes using historical and real-time data.",
      },
    ],
  };

  return (
    <>
      <Navbar />

      <div className="w-full text-black">
        {/* ================= HERO SECTION ================= */}
        <section className="relative bg-[#071b33] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm mb-4">AekSec and NVIDIA</p>
              <h1 className="text-5xl font-light leading-tight mb-6">
                Bringing AI to the enterprise
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                We're expanding our partnership to help enterprise companies
                accelerate AI adoption.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-full font-medium">
                Read latest partnership news
              </button>
            </div>

            <div className="flex items-center justify-center gap-8">
              <span className="text-4xl font-semibold">AekSec</span>
              <span className="h-12 w-px bg-white/40"></span>
              <span className="text-4xl font-semibold">NVIDIA</span>
            </div>
          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        <section className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-4xl font-light mb-8">
              AI your way, with AekSec and NVIDIA
            </h2>

            {/* Video under heading */}
            <div className="w-full  overflow-hidden mb-6">
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-10 text-lg text-gray-700">
            <p>
              Get the secure, scalable, and high-performance AI infrastructure
              you need to accelerate trusted AI applications.
            </p>

            <div>
              <h3 className="font-semibold mb-2">
                Security first, with end-to-end observability
              </h3>
              <p>
                Built-in security and real-time observability ensure AI stacks
                run with confidence.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Networking your way</h3>
              <p>
                High-performance networking powered by AekSec and NVIDIA
                Spectrum-X.
              </p>
            </div>
          </div>
        </section>

        {/* ================= USE CASES ================= */}
        <section className="max-w-7xl mx-auto px-8 py-20">
          <h2 className="text-4xl font-light mb-16">
            Achieve business outcomes with key AI use cases
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* LEFT — TABS */}
            <ul className="space-y-6">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  onClick={() => setActiveTab1(tab.id)}
                  className={`cursor-pointer pl-4 border-l-2 ${
                    activeTab === tab.id
                      ? "border-blue-600 text-black font-medium"
                      : "border-transparent text-gray-600"
                  }`}
                >
                  {tab.label}
                </li>
              ))}
            </ul>

            {/* RIGHT — CONTENT GRID */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
              {content[activeTab1].map((item, idx) => (
                <div key={idx}>
                  {/* Icon placeholder (matches screenshot style) */}
                  <div className="w-10 h-10 mb-4  rounded-md flex items-center justify-center">
                    <span className="text-m">▽</span>
                  </div>

                  <h3 className="font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ARCHITECTURE ================= */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-light mb-6">
                AekSec Secure AI Factory with NVIDIA
              </h2>
              <p className="text-gray-700 text-lg">
                A modular reference design combining high-performance AI,
                full-stack security, and observability.
              </p>
              <br />
              <p className="text-gray-700 text-lg">
                A modular reference design that combines high-performance AI
                infrastructure with full-stack security and observability. Cisco
                AI PODs form the AI infrastructure building blocks for the
                Secure AI Factory.{" "}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-10 text-center">
              <img src="https://www.cisco.com/content/dam/cisco-cdc/site/images/icons-and-shapes/ai-pods-secure-ai-factory_white-bg-A.svg" />{" "}
            </div>
          </div>
        </section>

        {/* ================= COMPONENTS ================= */}
        <section className="max-w-7xl mx-auto px-8 py-24">
          <h2 className="text-4xl font-light mb-16 text-center">
            Components of a AekSec Secure AI Factory with NVIDIA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-20 text-sm">
            {/* AI SOFTWARE */}
            <div>
              <h3 className="font-semibold mb-4">AI software</h3>

              <p className="font-medium mb-3">
                NVIDIA AI Enterprise and NVIDIA Run:ai
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Cloud-native software tools, libraries, frameworks, dynamic GPU
                resource allocation, AI workload scheduling, and
                production-ready models for AI deployments.
              </p>

              <a className="text-blue-600 font-medium hover:underline cursor-pointer">
                Explore NVIDIA AI Enterprise →
              </a>
            </div>

            {/* SECURITY */}
            <div>
              <h3 className="font-semibold mb-4">Security</h3>

              <p className="font-medium mb-3">Security</p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Secure AI models, applications, workloads, and infrastructure
                with AekSec AI Defense integrated with NVIDIA AI, AekSec Hybrid
                Mesh Firewall, and Splunk Enterprise Security TDIR Platform.
              </p>

              <a className="text-blue-600 font-medium hover:underline cursor-pointer">
                Explore AekSec Security →
              </a>
            </div>

            {/* OBSERVABILITY */}
            <div>
              <h3 className="font-semibold mb-4">Observability</h3>

              <p className="font-medium mb-3">Splunk Observability</p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Enables visibility into the health, performance, and consumption
                of critical AI infrastructure components, helping to ensure the
                full AI stack operates as intended.
              </p>

              <a className="text-blue-600 font-medium hover:underline cursor-pointer">
                Explore Splunk Observability →
              </a>
            </div>

            {/* COMPUTE */}
            <div>
              <h3 className="font-semibold mb-4">Compute</h3>

              <p className="font-medium mb-3">
                AekSec Servers – Unified Computing System (UCS)
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                AekSec UCS® Servers based on NVIDIA HGX, MGX, and RTX PRO 6000
                Blackwell Server Edition.
              </p>

              <a className="text-blue-600 font-medium hover:underline cursor-pointer">
                Explore AekSec UCS →
              </a>
            </div>

            {/* NETWORKING */}
            <div>
              <h3 className="font-semibold mb-4">Networking</h3>

              <p className="font-medium mb-3">Data center switching</p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Your network, your way: network infrastructure powered by AekSec
                Data Center switching and NVIDIA Spectrum-X.
              </p>

              <a className="text-blue-600 font-medium hover:underline cursor-pointer">
                Explore data center switches →
              </a>
            </div>

            {/* STORAGE */}
            <div>
              <h3 className="font-semibold mb-4">Storage</h3>

              <p className="font-medium mb-3">
                AekSec and NVIDIA-certified storage partners
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Choice of high-performance and scalable storage from partners
                such as Hitachi Vantara, NetApp, Nutanix NUS, Pure Storage, and
                VAST Data.
              </p>
            </div>

            {/* KUBERNETES */}
            <div>
              <h3 className="font-semibold mb-4">Kubernetes Platform</h3>

              <p className="font-medium mb-3">Container management software</p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Choice of Kubernetes platforms such as{" "}
                <span className="text-blue-600 hover:underline cursor-pointer">
                  Red Hat OpenShift
                </span>
                ,{" "}
                <span className="text-blue-600 hover:underline cursor-pointer">
                  Nutanix NKP
                </span>
                , or{" "}
                <span className="text-blue-600 hover:underline cursor-pointer">
                  upstream open-source Kubernetes
                </span>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ================= DEPLOYMENT ================= */}
        <section className="bg-gray-50 py-24">
          <h2 className="text-4xl font-light text-center mb-16">
            Deployment flexibility
          </h2>

          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* CARD 1 */}
            <div className="bg-white p-10 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Build your own</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Buy and deploy individual AekSec and partner products, as
                needed, to build your Secure AI Factory.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white p-10 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-4">
                AI PODs with on-prem network management
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Modular, pre-validated infrastructure with AekSec Nexus
                Dashboard, full-stack buy and deploy, backed by AekSec Validated
                Designs (CVDs).
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white p-10 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-4">
                AI PODs with cloud management
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Turnkey infrastructure with full-stack buy and deploy. AekSec
                Nexus Hyperfabric for cloud-managed networking, and AekSec Nexus
                Hyperfabric AI for cloud-managed infrastructure.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-4 rounded-full font-medium">
              Discover AekSec AI PODs
            </button>
          </div>
        </section>

        {/* ================= AI DEFENSE ================= */}
        <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light mb-6">AekSec AI Defense</h2>
            <p className="text-gray-700 text-lg mb-8">
              Safeguard the development and usage of AI applications across your
              enterprise.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full">
              Explore AekSec AI Defense
            </button>
          </div>

          <div className="bg-gray-200 h-80 ">
            <img
              className="w-full h-full"
              src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/solutions/artificial-intelligence/ai-factory-with-nvidia-blog.png"
            />
          </div>
        </section>

        {/* ================= FIRESIDE CHAT (TABS) ================= */}
        <section className="max-w-7xl mx-auto px-8 py-24">
          <h2 className="text-4xl font-light text-center mb-10">
            AekSec + NVIDIA fireside chats
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-8 mb-16">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-medium transition ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h3 className="text-3xl font-light mb-6">
                {tabContent[activeTab].title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                {tabContent[activeTab].desc}
              </p>

              <p className="text-gray-600 leading-relaxed mb-10">
                Hear directly from AekSec and NVIDIA experts as they share
                real-world insights, architectural best practices, and lessons
                learned while deploying AI at enterprise scale across
                industries.
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-full font-medium">
                Watch fireside chat
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full">
              <img
                src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/solutions/artificial-intelligence/Redefining-enterprise-AI_5110_feature.jpg"
                alt="AekSec and NVIDIA Fireside Chat"
                className="w-full  shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= RESOURCES ================= */}
        <section className="bg-[#071b33] text-white py-24">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <h2 className="text-3xl font-light">Secure AI Factory resources</h2>

            <ul className="space-y-4 text-blue-400">
              <li>FAQ</li>
              <li>Reference Architectures</li>
              <li>State of AI Security report</li>
              <li>AekSec AI PODs overview</li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
