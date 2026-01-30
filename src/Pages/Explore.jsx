import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  Shield,
  Network,
  Eye,
  Server,
  Lock,
  Sparkles,
  BookOpen,
  Users,
} from "lucide-react";

export default function Explore() {
  return (
    <>
      {/* ============ HeroExplore Section ============ */}
      <HeroExplore />

      {/* ============ ConnectProtectAI Section ============ */}
      <ConnectProtectAI />

      {/* ============ AlternatingMediaSections Section ============ */}
      <AlternatingMediaSections />

      {/* ============ KalpTechNewsSlider Section ============ */}
      <KalpTechNewsSlider />

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

  const navigate = useNavigate();
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white/5 opacity-20"></div>

      {/* Security pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen z-10 max-w-7xl mx-auto px-8 lg:px-16 h-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* LEFT CONTENT */}
          <div>
           
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-xl">
              There's no secure AI
              <br />
              without <span className="font-bold text-blue-300">KalpTech</span>
            </h2>

            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              Only KalpTech delivers robust infrastructure, security fused into
              the network, and unparalleled insights to power enterprise AI at
              scale.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                onClick={() => setOpen(true)}
                className="
                  group
                  relative
                  bg-gradient-to-r from-blue-600 to-blue-800
                  text-white
                  px-8 py-3
                  rounded-lg
                  font-medium
                  transition-all duration-300 ease-out
                  hover:from-blue-700 hover:to-blue-900
                  hover:shadow-2xl
                  hover:shadow-blue-500/20
                  active:scale-[0.98]
                  overflow-hidden
                  tracking-wide
                  border border-blue-500/20
                "
              >
                <span className="relative z-10">Watch video (0:59)</span>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
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
                onClick={() => navigate("/")}
                className="
                  group
                  text-white font-medium
                  inline-flex items-center gap-2
                  hover:text-blue-300 transition-colors
                "
              >
                Assess your AI readiness
                <span className="transition-transform group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80">
              {/* Security visualization */}
              <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-pulse"></div>
              <div className="absolute inset-8 border-2 border-blue-400/40 rounded-full"></div>
              <div className="absolute inset-16 bg-gradient-to-br from-blue-800/50 to-blue-900/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <Shield className="w-20 h-20 text-blue-300 mx-auto mb-4" />
                  <div className="text-white font-semibold text-lg tracking-wider">
                    SECURE AI
                  </div>
                  <div className="text-blue-300 text-sm">ENABLED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectProtectAI() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-light text-slate-900 mb-4">
            Connect and protect AI
          </h2>

          <p className="text-xl text-slate-600">
            KalpTech provides the core building blocks, AI-native capabilities,
            and services to accelerate AI adoption and success.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-slate-200 hover:border-blue-200">
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-slate-100 group-hover:from-blue-100 group-hover:to-blue-50 transition-colors w-fit mb-6">
              <Server className="w-8 h-8 text-blue-700" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">
              AI Infrastructure
            </h3>
            <p className="mt-4 text-slate-600">
              Power AI at scale with robust, flexible, and secure infrastructure
              from the data center to the campus and branch.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-slate-200 hover:border-blue-200">
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-slate-100 group-hover:from-blue-100 group-hover:to-blue-50 transition-colors w-fit mb-6">
              <Shield className="w-8 h-8 text-blue-700" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">
              Security for AI
            </h3>
            <p className="mt-4 text-slate-600">
              Secure the AI stack end-to-end, with unmatched visibility to
              protect AI infrastructure, workloads, and the safe use of AI.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-slate-200 hover:border-blue-200">
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-slate-100 group-hover:from-blue-100 group-hover:to-blue-50 transition-colors w-fit mb-6">
              <Eye className="w-8 h-8 text-blue-700" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">
              Observability for AI
            </h3>
            <p className="mt-4 text-slate-600">
              Real-time visibility across the AI stack to maintain uptime and
              ensure reliable and optimized operations.
            </p>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 4 */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-slate-200 hover:border-blue-200">
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-slate-100 group-hover:from-blue-100 group-hover:to-blue-50 transition-colors w-fit mb-6">
              <Sparkles className="w-8 h-8 text-blue-700" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">
              AI-native Capabilities
            </h3>
            <p className="mt-4 text-slate-600">
              Drive operational simplicity and unlock deep insights with AI
              natively built into our products.
            </p>
          </div>

          {/* Card 5 */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-slate-200 hover:border-blue-200">
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-slate-100 group-hover:from-blue-100 group-hover:to-blue-50 transition-colors w-fit mb-6">
              <Users className="w-8 h-8 text-blue-700" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">Services</h3>
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
    <section className="bg-gradient-to-b from-slate-50 to-white py-24 space-y-24">
      {/* SECTION 1 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative overflow-hidden rounded-xl group">
          <img
            src="https://www.cisco.com/content/dam/cisco-cdc/site/images/poster-image/solutions/Artificial-Intelligence/ai-jeetu-ai4-2025-video-656x369.jpg"
            alt="AI Event"
            className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        </div>

        <div className="max-w-xl">
          <h2 className="text-4xl font-light text-slate-900">
            Explore the vision for the agentic AI era
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            Learn how autonomous AI agents are reshaping the future of business
            and the leadership mindset required to succeed in this new era.
          </p>

          <button className="mt-8 inline-flex items-center gap-3 group bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg px-8 py-3 font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
            Watch fireside chat
            <span className="transform group-hover:translate-x-2 transition-transform">
              →
            </span>
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

          <button className="mt-8 inline-flex items-center gap-3 group bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg px-8 py-3 font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
            Learn more
            <span className="transform group-hover:translate-x-2 transition-transform">
              →
            </span>
          </button>
        </div>

        <div className="relative overflow-hidden rounded-xl group">
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
            alt="Data Center"
            className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative overflow-hidden rounded-xl group">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240912175245/What-Is-Edge-AI.webp"
            alt="AI Security"
            className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        </div>

        <div className="max-w-xl">
          <h2 className="text-4xl font-light text-slate-900">
            Secure AI from core to edge
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            Protect AI workloads, infrastructure, and data with end-to-end
            visibility and built-in security.
          </p>

          <button className="mt-8 inline-flex items-center gap-3 group bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg px-8 py-3 font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
            Explore security
            <span className="transform group-hover:translate-x-2 transition-transform">
              →
            </span>
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

          <button className="mt-8 inline-flex items-center gap-3 group bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg px-8 py-3 font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
            View capabilities
            <span className="transform group-hover:translate-x-2 transition-transform">
              →
            </span>
          </button>
        </div>

        <div className="relative overflow-hidden rounded-xl group">
          <img
            src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
            alt="Observability"
            className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        </div>
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
      "KalpTech Continues to Drive Innovation to Reimagine Security for the AI Era",
    desc: "RSA Conference Press Release",
    link: "Read press release",
  },
  {
    title:
      "KalpTech and ServiceNow Partner to Simplify and Secure AI Adoption for Businesses at Scale",
    desc: "KalpTech and ServiceNow Partner to Simplify and Secure AI Adoption for Businesses at Scale",
    link: "Read press release",
  },
  {
    title: "KalpTech, NVIDIA accelerate AI infrastructure",
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

function KalpTechNewsSlider() {
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
          Learn about the latest KalpTech AI innovations and news
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
              transition-all duration-300
              ${
                active === 0
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 shadow-lg"
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
                className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {slides
                  .slice(
                    slideIndex * ITEMS_PER_SLIDE,
                    slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE,
                  )
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="group border-l border-slate-300 pl-8 hover:border-blue-400 transition-colors duration-300"
                    >
                      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-slate-600">{item.desc}</p>

                      <button className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 group/link transition-colors">
                        {item.link}
                        <span className="transform group-hover/link:translate-x-2 transition-transform">
                          →
                        </span>
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
              transition-all duration-300
              ${
                active === TOTAL_SLIDES - 1
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 shadow-lg"
              }
            `}
          >
            <FiChevronRight size={22} />
          </button>
        </div>

        {/* DOTS */}
        <div className="mt-10 flex justify-center gap-3">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === active
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 w-8"
                  : "bg-slate-300 hover:bg-slate-400"
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
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 text-center mb-16">
          Our leadership in AI comes with experience
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-200">
            <div className="relative overflow-hidden h-64">
              <img
                src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/solutions/artificial-intelligence/artifical-intelligence-hub-ai-ready-infrastructure-544x307.jpg"
                alt="AI Infrastructure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900">
                AI-ready infrastructure
              </h3>

              <p className="mt-4 text-slate-600">
                Scale, simplify, and support sustainability with fully
                integrated systems to bring your network into the future.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 group/link transition-colors"
              >
                Explore AI-ready infrastructure
                <span className="transform group-hover/link:translate-x-2 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-200">
            <div className="relative overflow-hidden h-64">
              <img
                src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/solutions/artificial-intelligence/artifical-intelligence-hub-ai-enabled-it-operations-544x307.jpg"
                alt="AI Operations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900">
                AI-enabled network operations
              </h3>

              <p className="mt-4 text-slate-600">
                Simplify processes and optimize your IT resource use with AI
                technologies across your network operations.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 group/link transition-colors"
              >
                Explore AI-enabled network operations
                <span className="transform group-hover/link:translate-x-2 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-200">
            <div className="relative overflow-hidden h-64">
              <img
                src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/solutions/artificial-intelligence/artifical-intelligence-hub-mosaic-assistant-544x307.jpg"
                alt="AI Security"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900">
                Secure AI at scale
              </h3>

              <p className="mt-4 text-slate-600">
                Protect AI workloads and infrastructure with built-in security
                and end-to-end visibility.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 group/link transition-colors"
              >
                Explore AI security
                <span className="transform group-hover/link:translate-x-2 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-200">
            <div className="relative overflow-hidden h-64">
              <img
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
                alt="AI Observability"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900">
                AI-powered observability
              </h3>

              <p className="mt-4 text-slate-600">
                Gain real-time insights to ensure performance, reliability, and
                operational excellence across AI environments.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 group/link transition-colors"
              >
                Explore observability
                <span className="transform group-hover/link:translate-x-2 transition-transform">
                  →
                </span>
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
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT – Illustration */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 rounded-xl"></div>
            <div className="relative p-12">
              <div className="text-center">
                <Shield className="w-32 h-32 text-blue-600 mx-auto mb-8" />
                <div className="text-2xl font-bold text-slate-900">
                  Responsible AI
                </div>
                <div className="text-blue-600 mt-2">
                  Secure • Ethical • Trusted
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
              AI that's as responsible as it is revolutionary
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Responsible AI means getting one of the biggest advancements in
              technology right for our customers, our society, and our
              commitment to creating an inclusive future for all.
            </p>

            <button className="mt-10 group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg px-8 py-3 font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
              Explore KalpTech's responsible AI
              <span className="transform group-hover:translate-x-2 transition-transform">
                →
              </span>
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
    <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-800/20">
                <BookOpen className="w-12 h-12 text-blue-300" />
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white">
                KalpTech AI blogs
              </h2>
            </div>
          </div>

          {/* RIGHT */}
          <div className="max-w-xl">
            <p className="text-lg text-slate-300 leading-relaxed">
              Learn how KalpTech harnesses AI-powered capabilities across our
              entire product and customer service portfolio. And find out why
              KalpTech is leading the industry with innovation that enables AI
              infrastructure.
            </p>

            <button
              onClick={() => navigate("/blog")}
              className="mt-8 group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg px-8 py-3 font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
            >
              Read AI blogs
              <span className="transform group-hover:translate-x-2 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
