import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Explore() {

  return (

    <>
      {/* ============ HeroExplore Section ============ */}
      <HeroExplore />

      {/* ============ ConnectProtectAI Section ============ */}
      <ConnectProtectAI />

      {/* ============ AlternatingMediaSections Section ============ */}
      <AlternatingMediaSections />

      {/* ============ AekSecNewsSlider Section ============ */}
      <AekSecNewsSlider />

      {/* ============ AILeadershipExperience Section ============ */}
      <AILeadershipExperience />

      {/* ============ ResponsibleAISection Section ============ */}
      <ResponsibleAISection />

      {/* ============ CiscoAIBlogsCTA Section ============ */}
      <CiscoAIBlogsCTA />
    </>
  );
}

// ================= COMPONENTS =================

function HeroExplore() {
  const [open, setOpen] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#07182d] text-white">
      {/* Decorative wave background */}
      <div
        className="absolute inset-0 bg-cover bg-top opacity-90"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/010/568/318/original/ai-artificial-intelligence-wave-lines-neural-network-in-concept-of-technology-fiber-optics-lights-abstract-background-vector.jpg')",
        }}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07182d]/95 via-[#07182d]/90 to-[#07182d]/80" />

      {/* Content */}
      <div className="relative min-h-screen z-10 max-w-7xl mx-auto px-8 lg:px-16 h-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-xl">
              There's no secure AI
              <br />
              without <span className="font-normal">AekSec</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/80 max-w-xl">
              Only AekSec can deliver robust infrastructure, security fused into
              the network, and unparalleled insights to power enterprise AI at
              scale.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                onClick={() => setOpen(true)}
                className="
                  bg-white text-black
                  px-7 py-3
                  rounded-full
                  font-medium
                  transition
                  hover:bg-gray-200
                "
              >
                Watch video (0:59)
              </button>

              {/* VIDEO MODAL */}
              {open && (
                <div
                  className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center"
                  onClick={() => setOpen(false)}
                >
                  {/* Prevent close on video click */}
                  <div
                    className="relative w-full max-w-4xl mx-4 aspect-video"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute -top-12 right-0 text-white text-3xl font-light hover:opacity-70"
                    >
                      ×
                    </button>

                    {/* Video */}
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/2ePf9rue1Ao?autoplay=1"
                      title="AI Video"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              <button
                className="
                  group
                  text-white font-medium
                  inline-flex items-center gap-2
                  hover:opacity-90
                "
              >
                Assess your AI readiness
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT LOGO / VISUAL */}
          <div className="hidden lg:flex justify-center">
            <div className="text-center">
              <div className="text-6xl font-semibold tracking-widest">
                AEKSEC
              </div>
              <div className="mt-4 h-1 w-24 bg-white mx-auto opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectProtectAI() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900">
            Connect and protect AI
          </h2>

          <p className="mt-6 text-base md:text-lg text-slate-600">
            AekSec provides the core building blocks, AI-native capabilities,
            and services to accelerate AI adoption and success.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-medium text-slate-900">
              AI Infrastructure
            </h3>
            <p className="mt-4 text-slate-600">
              Power AI at scale with robust, flexible, and secure infrastructure
              from the data center to the campus and branch.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-medium text-slate-900">
              Security for AI
            </h3>
            <p className="mt-4 text-slate-600">
              Secure the AI stack end-to-end, with unmatched visibility to
              protect AI infrastructure, workloads, and the safe use of AI.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-medium text-slate-900">
              Observability for AI
            </h3>
            <p className="mt-4 text-slate-600">
              Real-time visibility across the AI stack to maintain uptime and
              ensure reliable and optimized operations.
            </p>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 4 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-medium text-slate-900">
              AI-native Capabilities
            </h3>
            <p className="mt-4 text-slate-600">
              Drive operational simplicity and unlock deep insights with AI
              natively built into our products.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-medium text-slate-900">Services</h3>
            <p className="mt-4 text-slate-600">
              Accelerate time to value with trusted expertise, AI-driven
              support, and proactive, personalized services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AlternatingMediaSections() {
  return (
    <section className="bg-slate-100 py-24 space-y-32">
      {/* SECTION 1 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <img
          src="https://www.cisco.com/content/dam/cisco-cdc/site/images/poster-image/solutions/Artificial-Intelligence/ai-jeetu-ai4-2025-video-656x369.jpg"
          alt="AI Event"
          className="w-full h-[360px] object-cover rounded-xl block"
        />

        <div className="max-w-xl">
          <h2 className="text-4xl font-light text-slate-900">
            Explore the vision for the agentic AI era
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            Learn how autonomous AI agents are reshaping the future of business
            and the leadership mindset required to succeed in this new era.
          </p>

          <button className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-7 py-3 text-white font-medium hover:bg-blue-700 transition">
            Watch fireside chat
          </button>
        </div>
      </div>

      {/* SECTION 2 (REVERSED) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="max-w-xl">
          <h2 className="text-4xl font-light text-slate-900">
            Unified AI data center networks
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            Experience fast, secure, end-to-end connectivity built to power
            next-generation AI workloads at massive scale.
          </p>

          <button className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-7 py-3 text-white font-medium hover:bg-blue-700 transition">
            Learn more
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Data Center"
          className="w-full h-[360px] object-cover rounded-xl block"
        />
      </div>

      {/* SECTION 3 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240912175245/What-Is-Edge-AI.webp"
          alt="AI Security"
          className="w-full h-[360px] object-cover rounded-xl block"
        />

        <div className="max-w-xl">
          <h2 className="text-4xl font-light text-slate-900">
            Secure AI from core to edge
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            Protect AI workloads, infrastructure, and data with end-to-end
            visibility and built-in security.
          </p>

          <button className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-7 py-3 text-white font-medium hover:bg-blue-700 transition">
            Explore security
          </button>
        </div>
      </div>

      {/* SECTION 4 (REVERSED) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="max-w-xl">
          <h2 className="text-4xl font-light text-slate-900">
            AI-powered observability
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            Gain real-time insights across your AI stack to ensure reliability,
            performance, and operational excellence.
          </p>

          <button className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-7 py-3 text-white font-medium hover:bg-blue-700 transition">
            View capabilities
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Observability"
          className="w-full h-[360px] object-cover rounded-xl block"
        />
      </div>
    </section>
  );
}

const slides = [
  {
    title: "How's your network doing?",
    desc: "Cloud LLMs and edge SLMs are happening now. Find out how they impact enterprise networks.",
    link: "Read blog",
  },
  {
    title:
      "AekSec Continues to Drive Innovation to Reimagine Security for the AI Era",
    desc: "RSA Conference Press Release",
    link: "Read press release",
  },
  {
    title:
      "AekSec and ServiceNow Partner to Simplify and Secure AI Adoption for Businesses at Scale",
    desc: "AekSec and ServiceNow Partner to Simplify and Secure AI Adoption for Businesses at Scale",
    link: "Read press release",
  },
  {
    title: "AekSec, NVIDIA accelerate AI infrastructure",
    desc: "Secure AI Factory with enterprise AI-ready networking.",
    link: "Read press release",
  },
  {
    title: "AI-ready networking platforms",
    desc: "Built to scale AI workloads securely and efficiently.",
    link: "Read blog",
  },
  {
    title: "Driving enterprise AI transformation",
    desc: "New innovations that power AI adoption across industries.",
    link: "Read press release",
  },
  {
    title: "Observability for AI workloads",
    desc: "Gain real-time insights across AI environments.",
    link: "Read blog",
  },
  {
    title: "Security built for AI era",
    desc: "Protect AI infrastructure end-to-end.",
    link: "Read press release",
  },
  {
    title: "AI-native operations",
    desc: "Unlock operational simplicity with AI-native tools.",
    link: "Read blog",
  },
  {
    title: "Future of AI networking",
    desc: "Preparing enterprises for next-gen AI workloads.",
    link: "Read press release",
  },
  {
    title: "AI-powered enterprise networks",
    desc: "Deliver performance, security, and scale.",
    link: "Read blog",
  },
  {
    title: "End-to-end AI security",
    desc: "From data center to edge.",
    link: "Read press release",
  },
];

const ITEMS_PER_SLIDE = 3;
const TOTAL_SLIDES = Math.ceil(slides.length / ITEMS_PER_SLIDE);

function AekSecNewsSlider() {
  const [active, setActive] = useState(0);

  const next = () => {
    if (active < TOTAL_SLIDES - 1) setActive(active + 1);
  };

  const prev = () => {
    if (active > 0) setActive(active - 1);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-light text-slate-900 max-w-3xl">
          Learn about the latest AekSec AI innovations and news
        </h2>

        {/* Slider */}
        <div className="relative mt-16 overflow-hidden">
          {/* LEFT ARROW */}
          <button
            onClick={prev}
            disabled={active === 0}
            className={`
              absolute left-0 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full
              flex items-center justify-center
              transition
              ${
                active === 0
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-black text-white hover:bg-slate-800"
              }
            `}
          >
            <FiChevronLeft size={22} />
          </button>

          {/* SLIDES */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >
            {Array.from({ length: TOTAL_SLIDES }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-12"
              >
                {slides
                  .slice(
                    slideIndex * ITEMS_PER_SLIDE,
                    slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
                  )
                  .map((item, idx) => (
                    <div key={idx} className="border-l border-slate-300 pl-8">
                      <h3 className="text-xl font-medium text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-slate-600">{item.desc}</p>

                      <button className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
                        {item.link}
                        <span>→</span>
                      </button>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            disabled={active === TOTAL_SLIDES - 1}
            className={`
              absolute right-0 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full
              flex items-center justify-center
              transition
              ${
                active === TOTAL_SLIDES - 1
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-black text-white hover:bg-slate-800"
              }
            `}
          >
            <FiChevronRight size={22} />
          </button>
        </div>

        {/* DOTS */}
        <div className="mt-10 flex justify-center gap-4">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === active ? "bg-blue-600" : "bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AILeadershipExperience() {
  return (
    <section className="bg-slate-200 py-24">
      <div className="max-w-7xl mx-auto px-1">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 text-center mb-16">
          Our leadership in AI comes with experience
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/solutions/artificial-intelligence/artifical-intelligence-hub-ai-ready-infrastructure-544x307.jpg"
              alt="AI Infrastructure"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h3 className="text-xl font-medium text-slate-900">
                AI-ready infrastructure
              </h3>

              <p className="mt-4 text-slate-600">
                Scale, simplify, and support sustainability with fully
                integrated systems to bring your network into the future.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                Explore AI-ready infrastructure
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/solutions/artificial-intelligence/artifical-intelligence-hub-ai-enabled-it-operations-544x307.jpg"
              alt="AI Operations"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h3 className="text-xl font-medium text-slate-900">
                AI-enabled network operations
              </h3>

              <p className="mt-4 text-slate-600">
                Simplify processes and optimize your IT resource use with AI
                technologies across your network operations.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                Explore AI-enabled network operations
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/solutions/artificial-intelligence/artifical-intelligence-hub-mosaic-assistant-544x307.jpg"
              alt="AI Security"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h3 className="text-xl font-medium text-slate-900">
                Secure AI at scale
              </h3>

              <p className="mt-4 text-slate-600">
                Protect AI workloads and infrastructure with built-in security
                and end-to-end visibility.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                Explore AI security
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
              alt="AI Observability"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h3 className="text-xl font-medium text-slate-900">
                AI-powered observability
              </h3>

              <p className="mt-4 text-slate-600">
                Gain real-time insights to ensure performance, reliability, and
                operational excellence across AI environments.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                Explore observability
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResponsibleAISection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT – Illustration */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://applicat.com/assets/img/dynamic-routing-ro.png"
              alt="Responsible AI illustration"
              className="max-w-lg w-full"
            />
          </div>

          {/* RIGHT – Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
              AI that's as responsible as it is revolutionary
            </h2>

            <p className="mt-6 text-base md:text-lg text-slate-600">
              Responsible AI means getting one of the biggest advancements in
              technology right for our customers, our society, and our
              commitment to creating an inclusive future for all.
            </p>

            <button
              className="
                mt-10
                inline-flex items-center
                rounded-full
                bg-blue-600
                px-8 py-3
                text-white
                font-medium
                hover:bg-blue-700
                transition
              "
            >
              Explore AekSec's responsible AI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CiscoAIBlogsCTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-[#07182d] via-[#07182d] to-[#0b2447] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <h2 className="text-4xl md:text-5xl font-light text-white">
            AekSec AI blogs
          </h2>

          {/* RIGHT */}
          <div className="max-w-xl">
            <p className="text-base md:text-lg text-white/85 leading-relaxed">
              Learn how AekSec harnesses AI-powered capabilities across our
              entire product and customer service portfolio. And find out why
              AekSec is leading the industry with innovation that enables AI
              infrastructure.
            </p>

            <button
              onClick={() => navigate("/blog")}
              className="
                mt-8
                inline-flex items-center
                rounded-full
                bg-blue-600
                px-8 py-3
                text-white
                font-medium
                hover:bg-blue-700
                transition
              "
            >
              Read AI blogs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}