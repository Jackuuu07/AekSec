
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const TABS = {
  "AI-ready data centers": {
    title: "AI workloads that help drive performance",
    desc: `At the McLaren Technology Centre, the team uses AI to analyze massive
    streams of telemetry data from their Formula 1 cars in real time,
    uncovering patterns that drive split-second decisions. From the track
    to the cloud, when speed and precision matter most, Cisco provides the
    network foundation that connects it all seamlessly.`,
    video: "https://www.w3schools.com/html/mov_bbb.mp4", // replace with your real video
  },

  "Future-proofed workplaces": {
    title: "Workplaces built for speed and collaboration",
    desc: `McLaren engineers and strategists collaborate across continents.
    Cisco collaboration solutions enable real-time communication,
    secure access, and seamless teamwork—whether at the track or the factory.`,
    video: "https://www.w3schools.com/html/movie.mp4",
  },

  "Digital resilience": {
    title: "Always-on performance under pressure",
    desc: `From race weekends to development cycles, digital resilience is
    critical. Cisco security and observability solutions help McLaren
    stay protected, resilient, and operational—even under extreme demands.`,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
};

export function McLarenTabsSection() {
  const [activeTab, setActiveTab] = useState("AI-ready data centers");
  const data = TABS[activeTab];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-6">
            Helping to fuel the McLaren Formula 1 Team&apos;s success
          </h2>

          <p className="text-slate-600">
            In Formula 1, milliseconds matter. The McLaren F1 Team trusts
            advanced networking, security, observability, and collaboration
            solutions from Cisco to support real-time data analysis and gain a
            critical competitive edge.
          </p>
        </div>

        {/* ================= TABS ================= */}
        <div className="mt-16 border-b">
          <div className="flex justify-center gap-10">
            {Object.keys(TABS).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-lg transition relative
                  ${
                    activeTab === tab
                      ? "text-blue-600 font-medium"
                      : "text-slate-500 hover:text-slate-900"
                  }
                `}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT TEXT */}
          <div>
            <h3 className="text-3xl font-light mb-6">{data.title}</h3>

            <p className="text-slate-600 leading-relaxed">{data.desc}</p>
          </div>

          {/* RIGHT VIDEO */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <video
              src={data.video}
              controls
              className="w-full h-[320px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WhyAekadsLable() {
  return (
    <main className="w-full">
      {/* ------------- hero section ------- */}

      <section className="relative h-[60vh] w-full overflow-hidden">
        {/* Background image */}
        <img
          src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Desktop-HD-Nature-Pictures.jpg"
          alt="AI infrastructure"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-xl text-white">
            <span className="text-sm uppercase tracking-wide text-white/80">
              Why AekSec
            </span>

            <h1 className="mt-4 text-5xl font-light leading-tight">
              The critical <br />
              infrastructure for the AI era
            </h1>
          </div>
        </div>
      </section>

      {/* ----------- text and image section ------- */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT VIDEO */}
          <div className="relative overflow-hidden">
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4" // replace with your video URL
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[340px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-light text-slate-900 mb-6">
              Cisco makes the AI era work
            </h2>

            <p className="text-slate-600 max-w-xl">
              We have powered every major technology transformation over the
              past four decades. Now, we help organizations connect, protect,
              and thrive in an AI-driven world.
            </p>
          </div>
        </div>
      </section>

      {/* --------------- delivering outcomes section ------- */}

      <section className="bg-white py-2">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl font-light text-center mb-16">
            Delivering outcomes that matter
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-10 shadow-sm border">
              <div className="mb-6 text-blue-600 text-3xl">
                <img
                  src="https://www.cisco.com/content/dam/cisco-cdc/site/images/icons-and-shapes/about/why-cisco/why-cisco-ai-data-center.svg"
                  alt="AI infrastructure"
                />
              </div>
              <h3 className="text-xl font-medium mb-4">
                AI-ready data centers
              </h3>
              <p className="text-slate-600 mb-8">
                Modernize and transform your data centers to power traditional
                and AI workloads anywhere—with speed, scale, and flexibility.
              </p>
              <button className="rounded-full bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">
                Transform data centers
              </button>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-10 shadow-sm border">
              <div className="mb-6 text-blue-600 text-3xl">
                <img
                  src="https://www.cisco.com/content/dam/cisco-cdc/site/images/icons-and-shapes/about/why-cisco/why-cisco-future-proofed-workplace.svg"
                  alt="AI infrastructure"
                />
              </div>
              <h3 className="text-xl font-medium mb-4">
                Future-proofed workplaces
              </h3>
              <p className="text-slate-600 mb-8">
                Create agile, resilient workplaces that evolve with employee
                needs and deliver incredible customer experiences everywhere.
              </p>
              <button className="rounded-full bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">
                Reimagine workplaces
              </button>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white p-10 shadow-sm border">
              <div className="mb-6 text-blue-600 text-3xl">
                <img
                  src="https://www.cisco.com/content/dam/cisco-cdc/site/images/icons-and-shapes/about/why-cisco/why-cisco-digital-resilience.svg"
                  alt="AI infrastructure"
                />
              </div>
              <h3 className="text-xl font-medium mb-4">Digital resilience</h3>
              <p className="text-slate-600 mb-8">
                Keep your organization securely up and running in the face of
                any disruption—from cyberattacks to outages and failures.
              </p>
              <button className="rounded-full bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">
                Build digital resilience
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- AekSec Difference section ------- */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">
          {/* LEFT TITLE */}
          <div className="flex items-center">
            <h2 className="text-4xl font-light">The AekSec difference</h2>
          </div>

          {/* RIGHT CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-l pl-16">
            <div>
              <h3 className="text-xl font-medium mb-4">
                Market-defining technology
              </h3>
              <p className="text-slate-600">
                Cisco solutions set the bar for scale, reliability, and
                innovation, empowering organizations of all sizes to confidently
                lead in the AI era.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Platform advantage</h3>
              <p className="text-slate-600">
                Cisco’s platform approach unifies products into powerful systems
                that deliver greater value with less effort for your IT team.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Global scale</h3>
              <p className="text-slate-600">
                Extensive global presence, trusted partners, and tailored
                solutions enable seamless integration and efficient scaling
                worldwide.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">
                AI plus human expertise
              </h3>
              <p className="text-slate-600">
                Built on years of experience and data, Cisco blends AI with
                human insight to deliver proactive, personalized, and predictive
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <McLarenTabsSection />

      {/* -------- --- Recognitions section ------- */}

      <section className="bg-white">
        {/* TITLE ABOVE IMAGE */}
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
          <h2 className="text-4xl font-light">
            Recognized by industry experts
          </h2>
        </div>

        {/* IMAGE AREA */}
        <div className="relative w-full h-[560px]">
          {/* FULL WIDTH IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="AI work"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* SUBTLE IMAGE EFFECT (like Cisco glow) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />

          {/* FLOATING CARD */}
          <div className="absolute bottom-20 left-0 w-full">
            <div className="max-w-7xl mx-auto px-6">
              <div className="bg-slate-100 shadow-3xl rounded-xl p-10 max-w-xl">
                {/* GARTNER */}
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Gartner
                </h3>

                <p className="font-medium mb-4">
                  A Leader, Gartner® Magic Quadrant™
                </p>

                <ul className="space-y-2 text-slate-600 text-sm mb-8">
                  <li>• Data Center Switching, 2025</li>
                  <li>• SD-WAN, 2024 (five years in a row)</li>
                  <li>
                    • Security Incident and Event Management, 2024 (ten years in
                    a row)
                  </li>
                  <li>• Observability Platform, 2024</li>
                  <li>
                    • Unified Communications as a Service, 2024 (six years in a
                    row)
                  </li>
                </ul>

                <hr className="my-8" />

                {/* FORRESTER */}
                <h3 className="text-2xl font-semibold mb-4">Forrester</h3>

                <p className="font-medium mb-4">A Leader, Forrester Wave™</p>

                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Enterprise Firewall Solutions, Q4 2024</li>
                  <li>• Microsegmentation Solutions, Q3 2024</li>
                  <li>• IoT-Ready Wireless Solutions, Q2 2024</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM DARK BAND ================= */}
        <div className="bg-gradient-to-r from-[#07182d] to-[#0b2447] text-white">
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* LEFT */}
            <h3 className="text-3xl font-light">Resources for AI readiness</h3>

            {/* CENTER */}
            <div>
              <h4 className="text-lg font-medium mb-3">
                Cisco AI Readiness Assessment
              </h4>
              <p className="text-white/80 mb-4 text-sm">
                AI readiness comprises six pillars: Strategy, Infrastructure,
                Data, Governance, Talent, and Culture. Is your organization AI
                ready?
              </p>
              <a className="inline-flex items-center gap-2 text-blue-400 hover:underline">
                Take the assessment →
              </a>
            </div>

            {/* RIGHT */}
            <div>
              <h4 className="text-lg font-medium mb-3">
                Cisco AI Readiness Index 2025
              </h4>
              <p className="text-white/80 mb-4 text-sm">
                A small group of “Pacesetters” — about 13% of organizations
                worldwide — outperform across every measure of AI value.
              </p>
              <a className="inline-flex items-center gap-2 text-blue-400 hover:underline">
                Read AI Readiness insights →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- deisclaimer section ---------------------- */}

      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-10 px-6 text-gray-400 text-sm leading-relaxed space-y-10">
          {/* ================= GARTNER DISCLAIMER ================= */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-500">
              Gartner disclaimer
            </h3>

            <p className="mb-4">
              GARTNER is a registered trademark and service mark of Gartner,
              Inc. and/or its affiliates in the U.S. and internationally and is
              used herein with permission. All rights reserved. Magic Quadrant
              is a registered trademark of Gartner, Inc. and/or its affiliates
              and is used herein with permission. All rights reserved.
            </p>

            <p>
              Gartner does not endorse any vendor, product or service depicted
              in its research publications, and does not advise technology users
              to select only those vendors with the highest ratings or other
              designation. Gartner research publications consist of the opinions
              of Gartner's research organization and should not be construed as
              statements of fact. Gartner disclaims all warranties, expressed or
              implied, with respect to this research, including any warranties
              of merchantability or fitness for a particular purpose.
            </p>
          </div>

          {/* ================= FORRESTER DISCLAIMER ================= */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-500">
              Forrester disclaimer
            </h3>

            <p>
              Forrester does not endorse any company, product, brand, or service
              included in its research publications and does not advise any
              person to select the products or services of any company or brand
              based on the ratings included in such publications. Information is
              based on the best available resources. Opinions reflect judgment
              at the time and are subject to change. For more information, read
              about Forrester’s objectivity{" "}
              <a href="#" className="text-blue-600 hover:underline font-medium">
                here
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
