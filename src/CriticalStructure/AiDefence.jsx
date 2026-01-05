import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search, AlertTriangle, Bug } from "lucide-react";

export default function AiDefence() {
  const [openVideo, setOpenVideo] = useState(null);

  return (
    <>
      <Navbar />

      {/* ================= VIDEO MODAL ================= */}
      {openVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-video bg-black">
            <button
              onClick={() => setOpenVideo(null)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>
            <iframe
              src={openVideo}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="AekSec AI Defense Video"
            />
          </div>
        </div>
      )}

      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative bg-black text-white">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.r-cewUXOxXXf4HIKPTmNJwHaFC?pid=Api&P=0&h=180"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative max-w-7xl mx-auto px-8 py-32">
          <h1 className="text-5xl md:text-6xl font-light max-w-4xl leading-tight">
            AekSec AI Defense.
            <br />
            AI-native protection.
            <br />
            Built for intelligent systems.
          </h1>

          <p className="mt-8 max-w-3xl text-gray-300 text-lg">
            AekSec AI Defense is an advanced AI-native security solution
            designed to continuously monitor model behavior, data pipelines, and
            inference activity — detecting threats before they can impact
            critical AI-driven operations.
          </p>

          <div className="mt-12 flex gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-full">
              Explore AI Defense
            </button>
            <button className="border border-white px-8 py-3 rounded-full">
              Read solution overview
            </button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 1.5: HERO Under ================= */}

      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-8 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-20 leading-tight">
            Comprehensive AI security to keep your enterprise
            <br />
            safe and secure
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-left">
            {/* Card 1 */}
            <div>
              <Search className="w-12 h-12 text-gray-800 mb-8" />
              <h3 className="text-xl font-medium mb-4">Identify AI assets</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover AI workloads, applications, models, datasets,
                pipelines, and users across hybrid and distributed cloud
                environments—creating a complete inventory of your AI ecosystem.
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <AlertTriangle className="w-12 h-12 text-gray-800 mb-8" />
              <h3 className="text-xl font-medium mb-4">See the risks</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuously detect misconfigurations, security weaknesses,
                exposed interfaces, and adversarial behaviors that put AI
                systems at risk—before they impact production.
              </p>
            </div>

            {/* Card 3 */}
            <div>
              <Bug className="w-12 h-12 text-gray-800 mb-8" />
              <h3 className="text-xl font-medium mb-4">
                Mitigate threats in real time
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Actively protect AI applications against rapidly evolving
                threats including prompt injection, data leakage, model abuse,
                denial-of-service attacks, and unauthorized access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: VALUE OUTCOMES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-center mb-16">
            Securing AI systems before threats become incidents
          </h2>

          <div className="grid md:grid-cols-3 gap-14">
            {[
              {
                title: "Detect model manipulation early",
                text: "Continuously analyze model behavior to identify prompt injection, model poisoning, and abnormal inference patterns in real time.",
                img: "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/product-photography/products/security/ai-model-gui-dark-810x456.jpg",
              },
              {
                title: "Protect data pipelines end-to-end",
                text: "Monitor data ingestion, transformation, and feature pipelines to prevent data drift, contamination, and unauthorized access.",
                img: "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/product-photography/products/security/ai-runtime-gui-dark-810x456.jpg",
              },
              {
                title: "Validate inference activity",
                text: "Inspect live inference traffic to detect misuse, policy violations, and adversarial exploitation before impact.",
                img: "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/product-photography/products/security/ai-cloud-visibility-gui-dark-810x456.jpg",
              },
            ].map((item, i) => (
              <div key={i}>
                <img src={item.img} className="rounded-xl mb-6" />
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CORE ARCHITECTURE ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-center mb-16">
            A fundamentally new security layer for AI
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "AI-native threat detection",
                text: "Designed from the ground up to understand AI models, not just infrastructure — enabling contextual, adaptive defense.",
              },
              {
                title: "Continuous behavioral intelligence",
                text: "Learns normal behavior across models, pipelines, and inference flows, dynamically adapting defenses as systems evolve.",
              },
              {
                title: "Security that scales with intelligence",
                text: "Built to protect AI workloads across cloud, on-prem, and edge environments without performance tradeoffs.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm">
                <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: SOLUTION VIDEO ================= */}
      <section className="relative bg-black text-white py-32">
        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative max-w-4xl mx-auto px-8 bg-white text-black p-12 rounded-xl">
          <h3 className="font-medium mb-2">Solution overview</h3>
          <h2 className="text-2xl font-light mb-6">
            Defending AI systems at machine speed
          </h2>

          <p className="text-gray-600 mb-6">
            Learn how AekSec AI Defense continuously observes, understands, and
            protects AI models and pipelines against evolving threats.
          </p>

          <button
            onClick={() =>
              setOpenVideo("https://www.youtube.com/embed/dQw4w9WgXcQ")
            }
            className="text-blue-600 font-medium"
          >
            ▶ Watch solution walkthrough (12:18)
          </button>
        </div>
      </section>

      {/* ================= SECTION 5: THOUGHT LEADERSHIP ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">
          <h2 className="text-4xl font-light md:col-span-1">
            Expert perspectives on AI security
          </h2>

          {[
            "Why traditional security fails AI systems",
            "Detecting adversarial AI attacks in production",
            "Building trust in enterprise AI deployments",
          ].map((title, i) => (
            <div key={i}>
              <h3 className="font-medium mb-4">{title}</h3>
              <p className="text-gray-600 mb-4">
                Insights from AekSec researchers and security architects on
                protecting AI at scale.
              </p>
              <a className="text-blue-600">Read blog →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 6: PANEL VIDEO ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="rounded-xl"
          />

          <div>
            <h2 className="text-4xl font-light mb-6">
              Securing the future of AI-driven enterprises
            </h2>
            <p className="text-gray-600 mb-6">
              AI and security leaders discuss how organizations can safely adopt
              AI while maintaining visibility, control, and trust.
            </p>

            <button
              onClick={() =>
                setOpenVideo("https://www.youtube.com/embed/dQw4w9WgXcQ")
              }
              className="text-blue-600 font-medium"
            >
              ▶ Watch panel discussion (03:44)
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Title */}
          <h2 className="text-4xl font-light text-gray-900 mb-20">
            Product insights
          </h2>

          {/* Insight Card */}
          <div className="relative border-l border-r border-gray-300 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              {/* LEFT: Quote */}
              <div className="lg:col-span-2 pl-12 border-l border-gray-300">
                <h3 className="text-2xl font-light text-gray-900 mb-6">
                  Purpose-built to secure AI
                </h3>

                <p className="text-gray-600 leading-relaxed mb-10">
                  “The rapid adoption of AI introduces new categories of risk
                  that traditional cybersecurity platforms were never designed
                  to address. AekSec AI Defense represents a fundamental shift
                  in how enterprises secure AI systems — delivering deep
                  visibility into AI assets, continuous risk detection, and
                  real-time protection against evolving threats.”
                </p>

                <div className="text-sm text-gray-700">
                  <p className="font-medium">Head of AI Security Strategy</p>
                  <p className="text-gray-500">
                    AekSec Research & Innovation Group
                  </p>
                </div>
              </div>

              {/* RIGHT: Logo */}
              <div className="flex justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
                  alt="Enterprise Technology Partner"
                  className="max-h-14 object-contain opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
