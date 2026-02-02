import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  Cpu,
  Database,
  BarChart,
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
  return (
    <section className="relative py-20 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-white/5 opacity-20"></div>

      {/* Security Pattern */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
              No Secure AI Without
              <span className="block font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                KalpTech
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              KalpTech delivers enterprise-grade security infrastructure,
              network-fused protection, and intelligent insights to power AI at
              scale with confidence.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 p-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50">
                <div className="p-2 bg-blue-900/50 rounded-lg">
                  <Shield className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Infrastructure Security
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    Robust hardware and network protection
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50">
                <div className="p-2 bg-blue-900/50 rounded-lg">
                  <Lock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    AI Model Protection
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    Secure AI training and deployment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-pulse"></div>

              {/* Middle Ring */}
              <div className="absolute inset-8 border border-blue-400/30 rounded-full">
                <div
                  className="absolute inset-0 border border-blue-300/20 rounded-full animate-spin-slow"
                  style={{ animationDuration: "20s" }}
                ></div>
              </div>

              {/* Inner Core */}
              <div className="absolute inset-16 bg-gradient-to-br from-blue-900/40 to-slate-900/40 rounded-full backdrop-blur-sm flex items-center justify-center border border-blue-500/30">
                <div className="text-center p-8">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-lg"></div>
                    <div className="space-y-1">
                      <div className="text-white font-bold text-lg tracking-wide">
                        SECURE
                      </div>
                      <div className="text-blue-300 font-semibold text-sm tracking-wider">
                        AI READY
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500/30 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-blue-400/20 rounded-full"></div>
              <div className="absolute top-1/2 -right-4 w-4 h-4 bg-cyan-400/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
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
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 space-y-20">
      {/* SECTION 1 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative overflow-hidden rounded-xl group">
          <img
            src="https://www.cisco.com/content/dam/cisco-cdc/site/images/poster-image/solutions/Artificial-Intelligence/ai-jeetu-ai4-2025-video-656x369.jpg"
            alt="AI Event"
            className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        </div>

        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <Cpu className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              AI Leadership
            </span>
          </div>

          <h2 className="text-3xl font-semibold text-slate-900">
            The Vision for Agentic AI Era
          </h2>

          <p className="mt-4 text-slate-600">
            Autonomous AI agents are reshaping the future of business
            operations, requiring new leadership mindsets and strategic
            approaches.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-slate-700">
                Strategic insights from industry leaders on AI transformation
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-slate-700">
                Fireside discussions available through enterprise partnerships
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-slate-700">
                Leadership frameworks for implementing agentic AI systems
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Available Content:</span>{" "}
              Executive briefings, leadership workshops, and strategic
              implementation guides
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2 (REVERSED) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <Server className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              Infrastructure
            </span>
          </div>

          <h2 className="text-3xl font-semibold text-slate-900">
            Unified AI Data Center Networks
          </h2>

          <p className="mt-4 text-slate-600">
            Experience fast, secure, end-to-end connectivity engineered to power
            next-generation AI workloads at massive scale with enterprise
            reliability.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-slate-900">
                  High Throughput
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Multi-terabit connectivity for AI clusters
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-slate-900">
                  Secure Fabric
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Zero-trust network architecture
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-slate-900">
                  Data Optimization
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Intelligent data routing and caching
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-slate-900">
                  Compliance Ready
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Industry-standard certifications
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl group">
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
            alt="Data Center"
            className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative overflow-hidden rounded-xl group">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20240912175245/What-Is-Edge-AI.webp"
            alt="AI Security"
            className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        </div>

        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              Security
            </span>
          </div>

          <h2 className="text-3xl font-semibold text-slate-900">
            Secure AI from Core to Edge
          </h2>

          <p className="mt-4 text-slate-600">
            Comprehensive protection for AI workloads, infrastructure, and data
            with end-to-end visibility and built-in security controls.
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-slate-700 font-medium">
                Model Protection
              </span>
              <span className="text-sm text-green-600 font-medium">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-slate-700 font-medium">
                Data Encryption
              </span>
              <span className="text-sm text-green-600 font-medium">
                256-bit AES
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-slate-700 font-medium">
                Access Controls
              </span>
              <span className="text-sm text-green-600 font-medium">
                RBAC Enabled
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-slate-700 font-medium">
                Threat Detection
              </span>
              <span className="text-sm text-green-600 font-medium">
                Real-time
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4 (REVERSED) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <Eye className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              Analytics
            </span>
          </div>

          <h2 className="text-3xl font-semibold text-slate-900">
            AI-Powered Observability
          </h2>

          <p className="mt-4 text-slate-600">
            Gain comprehensive insights across your AI stack to ensure
            reliability, performance optimization, and operational excellence
            with intelligent monitoring.
          </p>

          <div className="mt-6 bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <BarChart className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-slate-900">
                Monitoring Capabilities
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-slate-700">
                  Performance Metrics
                </p>
                <p className="text-xs text-slate-600">
                  Real-time tracking of AI model performance and resource
                  utilization
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700">
                  Anomaly Detection
                </p>
                <p className="text-xs text-slate-600">
                  AI-powered detection of unusual patterns and potential issues
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700">
                  Predictive Analytics
                </p>
                <p className="text-xs text-slate-600">
                  Forecast system requirements and potential bottlenecks
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl group">
          <img
            src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
            alt="Observability"
            className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
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

                      <Link
                        to="/blog"
                        className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 group/link transition-colors"
                      >
                        {item.link}
                        <span className="transform group-hover/link:translate-x-2 transition-transform">
                          →
                        </span>
                      </Link>
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
        <h2 className="text-2xl md:text-5xl font-light text-slate-900 text-center mb-16">
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>

            <div className="p-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                  Infrastructure
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-slate-900">
                AI-ready Infrastructure Solutions
              </h3>

              <p className="mt-4 text-slate-600">
                Scale, simplify, and support sustainability with fully
                integrated systems engineered for enterprise AI workloads.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500">Related Services:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <a
                    href="/services/cloud"
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full hover:bg-blue-100 transition-colors"
                  >
                    Cloud Infrastructure
                  </a>
                  <a
                    href="/AekSec-infrastructure"
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full hover:bg-blue-100 transition-colors"
                  >
                    Data Center
                  </a>
                  <a
                    href="/services/cybersecurity"
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full hover:bg-blue-100 transition-colors"
                  >
                    Network Security
                  </a>
                </div>
              </div>
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>

            <div className="p-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm font-medium text-green-600 uppercase tracking-wide">
                  Operations
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-slate-900">
                AI-Enabled Network Operations
              </h3>

              <p className="mt-4 text-slate-600">
                Simplify processes and optimize IT resource utilization with AI
                technologies across enterprise network operations.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500">Related Solutions:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <a
                    href="/products/hyperfabric"
                    className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full hover:bg-green-100 transition-colors"
                  >
                    Network Automation
                  </a>
                  <a
                    href="/services/engineering"
                    className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full hover:bg-green-100 transition-colors"
                  >
                    IT Operations
                  </a>
                  <a
                    href="/services/data-analytics"
                    className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full hover:bg-green-100 transition-colors"
                  >
                    Performance Monitoring
                  </a>
                </div>
              </div>
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
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-sm font-medium text-red-600 uppercase tracking-wide">
                  Security
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-slate-900">
                Secure AI at Enterprise Scale
              </h3>

              <p className="mt-4 text-slate-600">
                Protect AI workloads and infrastructure with built-in security
                controls, end-to-end visibility, and compliance frameworks.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                  Explore Security Services:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <a
                    href="/services/cybersecurity"
                    className="px-3 py-1 bg-red-50 text-red-700 text-sm rounded-full hover:bg-red-100 transition-colors"
                  >
                    Cybersecurity
                  </a>
                  <a
                    href="/services/cloud"
                    className="px-3 py-1 bg-red-50 text-red-700 text-sm rounded-full hover:bg-red-100 transition-colors"
                  >
                    Cloud Security
                  </a>
                  <a
                    href="/services/applications"
                    className="px-3 py-1 bg-red-50 text-red-700 text-sm rounded-full hover:bg-red-100 transition-colors"
                  >
                    Application Security
                  </a>
                </div>
              </div>
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
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                  Analytics
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-slate-900">
                AI-Powered Observability & Insights
              </h3>

              <p className="mt-4 text-slate-600">
                Gain real-time insights across AI environments to ensure
                performance, reliability, and operational excellence at scale.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                  Related Analytics Services:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <a
                    href="/services/data-analytics"
                    className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full hover:bg-purple-100 transition-colors"
                  >
                    Data Analytics
                  </a>
                  <a
                    href="/services/kulp-intelligence"
                    className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full hover:bg-purple-100 transition-colors"
                  >
                    Kulp Intelligence
                  </a>
                  <a
                    href="/services/digital-experiences"
                    className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full hover:bg-purple-100 transition-colors"
                  >
                    Digital Experiences
                  </a>
                </div>
              </div>
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

            <Link to="/why/whyKalpTech" className="mt-10 group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg px-8 py-3 font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
              Explore KalpTech's responsible AI
              <span className="transform group-hover:translate-x-2 transition-transform">
                →
              </span>
            </Link>
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
