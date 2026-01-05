import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AiPlatform() {
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
              title="AekSec Video"
            />
          </div>
        </div>
      )}

      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-8 py-32">
          <h1 className="text-5xl font-light max-w-3xl leading-tight">
            AekSec Hypershield.
            <br /> AI-native. Ever aware.
            <br /> Everywhere.
          </h1>
          <p className="mt-6 max-w-2xl text-gray-300">
            AekSec Hypershield is a next-generation security architecture built
            to defend AI-scale, cloud-first, and modern enterprise environments.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-full">
              Stay informed
            </button>
            <button className="border border-white px-8 py-3 rounded-full">
              Read solution overview
            </button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: OUTCOMES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-center mb-16">
            Making previously unimaginable outcomes a reality
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Close the exploit gap",
                text:
                  "AI-native rule engine prioritizes vulnerabilities and deploys controls in minutes.",
                img:
                  "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/lifestyle-photography/segmentation-544x306.jpg",
              },
              {
                title: "Segmentation that works",
                text:
                  "Self-adapting segmentation informed by live behaviors and policy intelligence.",
                img:
                  "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/lifestyle-photography/ai-native-544x306.jpg",
              },
              {
                title: "Self-qualifying updates",
                text:
                  "Validate upgrades and policy changes against live production traffic.",
                img:
                  "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/lifestyle-photography/dual-data-plane-544x306.jpg",
              },
            ].map((item, i) => (
              <div key={i}>
                <img src={item.img} className="rounded-xl mb-6" />
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: CORE PRINCIPLES ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-center mb-16">
            A fundamentally new approach to address today’s realities
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "AI-native",
                text:
                  "Designed from the ground up with AI for faster response and continuous protection.",
                img:"https://www.cisco.com/content/dam/cisco-cdc/site/images/icons-and-shapes/products/security/ai-native-80x80.svg"
              },
              {
                title: "Protects everywhere",
                text:
                  "Unified security across network, workloads, and cloud environments.",
                img:"https://www.cisco.com/content/dam/cisco-cdc/site/images/icons-and-shapes/products/security/end-to-end-security-80x80.svg"

              },
              {
                title: "Fabric that grows",
                text:
                  "Seamlessly adds new enforcement points without policy redesign.",
                img:"https://www.cisco.com/content/dam/cisco-cdc/site/images/icons-and-shapes/products/security/fabric-grows-80x80.svg"

              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-2xl shadow-sm"
              >
                <img src={item.img} className="rounded-xl w-14 mb-1" />
                <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: EVENT VIDEO ================= */}
      <section className="relative bg-black text-white py-32">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative max-w-4xl mx-auto px-8 bg-white text-black p-12 rounded-xl">
          <h3 className="font-medium mb-2">Event replay</h3>
          <h2 className="text-2xl font-light mb-6">
            Unveiling a new era of AI-native security
          </h2>

          <p className="text-gray-600 mb-6">
            Discover how AekSec Hypershield is redefining enterprise security
            with AI-native protection and autonomous enforcement.
          </p>

          <button
            onClick={() =>
              setOpenVideo("https://www.youtube.com/embed/dQw4w9WgXcQ")
            }
            className="text-blue-600 font-medium"
          >
            ▶ Watch launch event (1:08:49)
          </button>
        </div>
      </section>

      {/* ================= SECTION 5: PERSPECTIVES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">
          <h2 className="text-4xl font-light md:col-span-1">
            Powerful perspectives
          </h2>

          {[
            "A new era of distributed, AI-native security",
            "Reimagining security architecture",
            "Our vision to combat unknown vulnerabilities",
          ].map((title, i) => (
            <div key={i}>
              <h3 className="font-medium mb-4">{title}</h3>
              <p className="text-gray-600 mb-4">
                Insight into how AekSec Hypershield addresses modern attack
                surfaces and unknown threats.
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
              An AI-native security architecture rewriting the rules
            </h2>
            <p className="text-gray-600 mb-6">
              Industry leaders discuss how AekSec Hypershield enables protection
              against AI-scale attacks and autonomous threats.
            </p>

            <button
              onClick={() =>
                setOpenVideo("https://www.youtube.com/embed/dQw4w9WgXcQ")
              }
              className="text-blue-600 font-medium"
            >
              ▶ Watch video (03:44)
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
