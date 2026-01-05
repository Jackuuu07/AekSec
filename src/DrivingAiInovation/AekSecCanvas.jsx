import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AekSecCanvas() {
  return (
    <>
      <Navbar />

      <div className="w-full bg-white text-black">
        {/* =======================
         SECTION 1 — ARTICLE + VIDEO
      ======================= */}
        <section className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <p className="text-sm text-gray-500 mb-4">Video · Jun 10, 2025</p>

            <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
              Announcing AekSec AI Canvas. <br />
              Revolutionizing IT with AgenticOps
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              AI Canvas is AekSec's first Generative UI for cross-domain IT—a
              shared, intelligent workspace that brings real-time telemetry, AI
              insights, and team collaboration into one view.
            </p>

            <p className="text-gray-700 text-base leading-relaxed">
              Built for AgenticOps, it transforms how NetOps, SecOps, and app
              teams solve problems—fast. Watch AI Canvas troubleshoot a network
              issue in seconds by unifying real-time telemetry, AI insights, and
              collaboration into one intelligent workspace.
            </p>
          </div>

          {/* Right Video */}
          <div className="w-full  overflow-hidden bg-black">
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* =======================
         SECTION 2 — RELATED CONTENT
      ======================= */}
        <section className="max-w-7xl mx-auto px-8 py-16">
          <h2 className="text-3xl font-light mb-12">Related Content</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div>
              <img
                src="https://newsroom.cisco.com/c/dam/r/newsroom/en/us/assets/a/y2025/m11/Cisco-live_1200x675_resize_2.jpg"
                alt="AekSec Live"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium mb-3">
                AekSec Live Melbourne 2025: advanced innovation to capture AI
                value
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                AekSec’s premier APJC event highlights the company’s powerful
                portfolio bridging network, security, compute, observability,
                and more.
              </p>
              <span className="inline-block text-xs text-blue-600 border border-blue-600 px-3 py-1 rounded">
                Innovation · Nov 18, 2025
              </span>
            </div>

            {/* Card 2 */}
            <div>
              <img
                src="https://newsroom.cisco.com/c/dam/r/newsroom/en/us/assets/earnings/cisco-building-front-800x450.jpg"
                alt="Earnings"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium mb-3">
                AekSec Reports First Quarter Earnings
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                AekSec reported first quarter revenue of $14.9 billion and
                non-GAAP net income of $4.0 billion.
              </p>
              <span className="inline-block text-xs text-blue-600 border border-blue-600 px-3 py-1 rounded">
                Earnings · Nov 12, 2025
              </span>
            </div>

            {/* Card 3 */}
            <div>
              <img
                src="https://newsroom.cisco.com/c/dam/r/newsroom/en/us/assets/a/y2025/m11/cisco-and-ibm-quantum-computers-nov20.jpg"
                alt="Quantum"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium mb-3">
                IBM and AekSec Announce Plans to Build a Network of Large-Scale,
                Fault-Tolerant Quantum Computers
              </h3>
              <span className="inline-block text-xs text-blue-600 border border-blue-600 px-3 py-1 rounded">
                Innovation · Nov 20, 2025
              </span>
            </div>
          </div>
        </section>

        {/* =======================
         SECTION 3 — FOOTER
      ======================= */}
        <footer className="bg-[#0b2a4a] text-white">
          <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h4 className="font-semibold mb-4">About AekSec</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Company Overview</li>
                <li>Executive Team</li>
                <li>AekSec.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Press Kit</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Press Releases</li>
                <li>Media Contacts</li>
                <li>Upcoming Events</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">News</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Videos</li>
                <li>Articles</li>
                <li>Blogs</li>
                <li>Podcasts</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Financial Info</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Earnings</li>
                <li>Investor Relations</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 py-6 text-center text-sm text-gray-300">
            ©2025 AekSec Systems Inc.
          </div>
        </footer>
      </div>
      <Footer />
    </>
  );
}
