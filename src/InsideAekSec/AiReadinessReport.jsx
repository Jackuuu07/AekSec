import { useState } from "react";
import {
  Play,
  BarChart3,
  Brain,
  ShieldCheck,
  Network,
  Globe,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AiReadinessReport() {
  const [activeTab, setActiveTab] = useState("overview");
  const aiResources = [
    {
      title: "AI-Ready Data Centers",
      desc: "Experts discuss why modern infrastructure is the foundation for scalable, secure AI workloads.",
      video:
        "https://cdn.pixabay.com/video/2020/04/23/36455-410030238_large.mp4",
    },
    {
      title: "AI as a Team Sport",
      desc: "Learn how cross-functional teams, skills, and culture drive successful AI adoption.",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-business-team-working-with-technology-42941-720.mp4",
    },
    {
      title: "Agentic AI & CX",
      desc: "Discover how autonomous AI agents are transforming customer experience and engagement.",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-digital-global-network-36820-720.mp4",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full bg-white text-gray-900">
        {/* ================= HERO ================= */}
        <section className="relative bg-[#020b1c] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 py-28 text-center">
            <h1 className="text-5xl font-light mb-6">
              AekSec AI Readiness Index
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
              Where organizations stand today—and what it takes to compete in an
              AI era defined by speed, scale, and security.
            </p>

            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-sm font-medium transition">
              Download the latest report
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* ================= TABS ================= */}
        <section className="border-b">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex gap-10 text-sm font-medium">
              {[
                { id: "overview", label: "Overview" },
                { id: "leaders", label: "AI Leaders" },
                { id: "tools", label: "Tools & Index" },
                { id: "resources", label: "Resources" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-5 border-b-2 transition ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        {activeTab === "overview" && (
          <>
            <section className="max-w-7xl mx-auto px-8 py-20">
              <h2 className="text-4xl font-light mb-6">
                Readiness isn’t the destination, it’s the journey
              </h2>
              <p className="text-gray-600 max-w-3xl">
                Each year, AekSec benchmarks how enterprises prepare, deploy,
                govern, and secure AI—revealing who leads, who follows, and
                where risks remain.
              </p>

              {/* Progress Bars */}
              <div className="mt-14 space-y-8">
                {[
                  { year: "2025", p: 13, c: 36, f: 48, l: 3 },
                  { year: "2024", p: 13, c: 33, f: 51, l: 3 },
                  { year: "2023", p: 14, c: 34, f: 48, l: 4 },
                ].map((row) => (
                  <div key={row.year}>
                    <p className="font-medium mb-2">
                      {row.year} Global Readiness
                    </p>
                    <div className="flex h-2 rounded overflow-hidden">
                      <div
                        style={{ width: `${row.p}%` }}
                        className="bg-blue-400"
                      />
                      <div
                        style={{ width: `${row.c}%` }}
                        className="bg-blue-600"
                      />
                      <div
                        style={{ width: `${row.f}%` }}
                        className="bg-pink-500"
                      />
                      <div
                        style={{ width: `${row.l}%` }}
                        className="bg-orange-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ================= AI LEADERS ================= */}
        {activeTab === "leaders" && (
          <section className="max-w-7xl mx-auto px-8 py-20">
            <h2 className="text-4xl font-light mb-12">
              What AI leaders do differently
            </h2>

            <div className="bg-[#020b1c] text-white rounded-3xl p-12 grid md:grid-cols-2 gap-12">
              <div className="flex gap-10">
                <div className="text-center">
                  <div className="text-4xl font-semibold">71%</div>
                  <p className="text-sm text-gray-400">Pacesetters</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-semibold">15%</div>
                  <p className="text-sm text-gray-400">Global Average</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-4">
                  Not all networks were built for AI
                </h3>
                <p className="text-gray-300">
                  AI leaders invest early in secure, high-performance
                  infrastructure. When workloads surge, unprepared networks
                  become the bottleneck.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ================= TOOLS ================= */}
        {activeTab === "tools" && (
          <section className="max-w-7xl mx-auto px-8 py-20">
            <h2 className="text-4xl font-light mb-12">AI Readiness tools</h2>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  icon: BarChart3,
                  title: "Realizing the value of AI",
                  desc: "See how AI-ready enterprises outperform across revenue, efficiency, and innovation.",
                  cta: "Get the results",
                },
                {
                  icon: Brain,
                  title: "AI Readiness Look-up Tool",
                  desc: "Compare regions, industries, and markets across six readiness pillars.",
                  cta: "Browse the Index",
                },
                {
                  icon: ShieldCheck,
                  title: "Proven AI Advantage",
                  desc: "Learn how organizations with strong AI foundations achieve higher resilience, faster decision-making, and sustainable competitive advantage at scale.",
                  cta: "View insights",
                },
                {
                  icon: Globe,
                  title: "Global AI Readiness Explorer",
                  desc: "Interactively assess and benchmark AI maturity across geographies and industries to understand where you stand—and where to go next.",
                  cta: "Explore benchmarks",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="border rounded-2xl p-10 hover:shadow-lg transition"
                >
                  <card.icon className="w-10 h-10 text-blue-600 mb-6" />
                  <h3 className="text-xl font-medium mb-3">{card.title}</h3>
                  <p className="text-gray-600 mb-6">{card.desc}</p>
                  <button className="text-blue-600 font-medium hover:underline">
                    {card.cta} →
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= RESOURCES ================= */}
        {activeTab === "resources" && (
          <section className="max-w-7xl mx-auto px-8 py-20">
            <h2 className="text-4xl font-light mb-12">Additional resources</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {aiResources.map((item, i) => (
                <div key={i}>
                  <div className="relative rounded-xl overflow-hidden mb-5">
                    <video
                      src={item.video}
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-48 object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4">
                        <Play className="w-6 h-6 text-black" />
                      </div>
                    </div>
                  </div>

                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= CTA ================= */}
        <section className="bg-[#020b1c] text-white">
          <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row justify-between items-center gap-10">
            <h2 className="text-3xl font-light">
              Design your AI future with confidence
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-medium transition">
              Get started with AekSec
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
