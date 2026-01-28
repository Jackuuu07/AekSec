import { FiSearch, FiChevronDown, FiArrowRight, FiPlayCircle,
  FiCpu, FiShield, FiActivity, FiLayers, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function TrialsAndDemos() {
  return (
    <>
      <div className="w-full">
        {/* ================= HERO ================= */}
        <section className="bg-[#071B33] py-28 relative overflow-hidden">
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-blue-400 rounded-full" />
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-blue-400 rounded-lg rotate-12" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-blue-400 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl font-light text-white mb-6">
            Trials and Demos
          </h1>

          <p className="text-gray-300 max-w-xl leading-relaxed mb-10">
            Explore hands-on trials, interactive demos, and personalized
            experiences to understand how AekSec technologies power
            secure, scalable, and intelligent enterprises.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/explore" className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full font-medium flex items-center gap-2">
              Explore demos <FiPlayCircle size={20} />
            </Link>

            <span className="text-gray-400 text-sm">
              No installation required
            </span>
          </div>
        </div>

        {/* RIGHT ICON SYSTEM */}
        <div className="hidden lg:grid grid-cols-2 gap-10 justify-items-center">

          <Link to="/products/ai-platform" className="bg-[#0E2A47] w-36 h-36 rounded-2xl flex flex-col items-center justify-center text-blue-400 hover:bg-[#1A3759] transition cursor-pointer">
            <FiCpu size={34} />
            <span className="text-sm text-gray-300 mt-3">
              AI Platforms
            </span>
          </Link>

          <Link to="/services/cybersecurity" className="bg-[#0E2A47] w-36 h-36 rounded-2xl flex flex-col items-center justify-center text-blue-400 hover:bg-[#1A3759] transition cursor-pointer">
            <FiShield size={34} />
            <span className="text-sm text-gray-300 mt-3">
              Security
            </span>
          </Link>

          <Link to="/services/data-analytics" className="bg-[#0E2A47] w-36 h-36 rounded-2xl flex flex-col items-center justify-center text-blue-400 hover:bg-[#1A3759] transition cursor-pointer">
            <FiActivity size={34} />
            <span className="text-sm text-gray-300 mt-3">
              Observability
            </span>
          </Link>

          <Link to="/AekSec-infrastructure" className="bg-[#0E2A47] w-36 h-36 rounded-2xl flex flex-col items-center justify-center text-blue-400 hover:bg-[#1A3759] transition cursor-pointer">
            <FiLayers size={34} />
            <span className="text-sm text-gray-300 mt-3">
              Infrastructure
            </span>
          </Link>

        </div>
      </div>
    </section>

        {/* ================= FEATURED PRODUCTS ================= */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl font-light mb-16">Featured products</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {/* Card 1 */}
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition">
                <span className="text-sm font-semibold text-gray-500">
                  Smart buildings
                </span>

                <h3 className="text-xl font-medium mt-4 mb-4">KalpTech Spaces</h3>

                <p className="text-gray-600 mb-8">
                  Empower workers with safer, smarter, and more sustainable
                  workspaces with a single cloud platform that brings
                  applications and data together.
                </p>

                <Link to="/register" className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition px-6 py-3 rounded-full font-medium mb-4">
                  Sign-up for free trial
                </Link>

                <div>
                  <Link to="/AiCanvaslearning-inside" className="text-blue-600 font-medium flex items-center gap-1 hover:underline">
                    Launch interactive demo <FiArrowRight />
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition">
                <span className="text-sm font-semibold text-gray-500">
                  Observability
                </span>

                <h3 className="text-xl font-medium mt-4 mb-4">
                  Splunk AppDynamics
                </h3>

                <p className="text-gray-600 mb-8">
                  Designed for production and pre-production environments,
                  AppDynamics gives you visibility into your entire application
                  topology.
                </p>

                <Link to="/register" className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition px-6 py-3 rounded-full font-medium">
                  Sign-up for free trial
                </Link>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition">
                <span className="text-sm font-semibold text-gray-500">
                  Security
                </span>

                <h3 className="text-xl font-medium mt-4 mb-4">
                  KalpTech Secure Firewall
                </h3>

                <p className="text-gray-600 mb-8">
                  Firewalls designed to protect your security foundation with
                  benefits spanning network security, visibility, control,
                  scalability, and regulatory compliance.
                </p>

                <Link to="/contact" className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition px-6 py-3 rounded-full font-medium mb-4">
                  Contact sales
                </Link>

                <div>
                  <Link to="/SecureAi-inside" className="text-blue-600 font-medium flex items-center gap-1 hover:underline">
                    Launch interactive demo <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= NEW SECTION: DEMO CATEGORIES ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl font-light mb-12 text-center">Demo Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Link to="/products/ai-platform" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCpu className="text-blue-600 text-2xl" />
                </div>
                <h3 className="font-medium mb-2">AI & Machine Learning</h3>
                <p className="text-sm text-gray-600">Explore AI-powered solutions</p>
              </Link>

              <Link to="/networking" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-medium mb-2">Networking</h3>
                <p className="text-sm text-gray-600">Network infrastructure demos</p>
              </Link>

              <Link to="/services/cloud" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                  </svg>
                </div>
                <h3 className="font-medium mb-2">Cloud Services</h3>
                <p className="text-sm text-gray-600">Cloud platform demonstrations</p>
              </Link>

              <Link to="/computing" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="font-medium mb-2">Computing</h3>
                <p className="text-sm text-gray-600">Compute infrastructure demos</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= ALL PRODUCTS ================= */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* FILTERS */}
            <div>
              <h3 className="font-medium mb-6 text-xl">Filter by:</h3>

              <div className="space-y-8 text-sm">
                <div className="border-b pb-6">
                  <div className="flex justify-between items-center font-medium mb-3">
                    Tags <FiChevronDown />
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer mb-2">
                    <input type="checkbox" className="rounded" /> Featured
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer mb-2">
                    <input type="checkbox" className="rounded" /> Popular
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" /> New
                  </label>
                </div>

                <div className="border-b pb-6">
                  <div className="flex justify-between items-center font-medium mb-3">
                    Type <FiChevronDown />
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer mb-2">
                    <input type="checkbox" className="rounded" /> Free trials
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer mb-2">
                    <input type="checkbox" className="rounded" /> Hands-on Live Demos
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" /> Personalized Demos
                  </label>
                </div>

                <div className="border-b pb-6">
                  <div className="flex justify-between items-center font-medium mb-3">
                    Industry <FiChevronDown />
                  </div>
                  <Link to="/industries/banking/banking" className="block text-gray-600 hover:text-blue-600 mb-2">Banking</Link>
                  <Link to="/industries/consumer/retail" className="block text-gray-600 hover:text-blue-600 mb-2">Retail</Link>
                  <Link to="/industries/technology/software" className="block text-gray-600 hover:text-blue-600">Technology</Link>
                </div>
              </div>
            </div>

            {/* RESULTS */}
            <div className="lg:col-span-3">
              {/* SEARCH & SORT */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="relative w-full md:w-96">
                  <FiSearch className="absolute left-4 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Find a trial or a demo"
                    className="w-full border rounded-full pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <select className="border rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Title A–Z</option>
                  <option>Newest</option>
                  <option>Most Popular</option>
                </select>
              </div>

              <div className="flex justify-between items-center mb-8">
                <p className="text-gray-500">66 Results</p>
                <Link to="/Training" className="text-blue-600 hover:underline text-sm font-medium">
                  View all training courses →
                </Link>
              </div>

              {/* ITEMS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border rounded-xl p-6 hover:shadow-lg transition">
                  <h3 className="text-xl font-medium mb-3">AI Canvas</h3>
                  <p className="text-gray-600 mb-4">
                    AI Canvas is KalpTech's first Generative UI for cross-domain
                    IT— a shared, intelligent workspace that brings real-time
                    telemetry, AI insights, and collaboration into one view.
                  </p>
                  <Link to="/AiCanvaslearning-inside" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                    Launch interactive demo <FiArrowRight />
                  </Link>
                </div>

                <div className="border rounded-xl p-6 hover:shadow-lg transition">
                  <h3 className="text-xl font-medium mb-3">AI Defense</h3>
                  <p className="text-gray-600 mb-4">
                    AI Defense demonstrates AI-native threat detection,
                    automated response, and telemetry correlation to protect
                    modern AI environments.
                  </p>
                  <Link to="/SecureAi-inside" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                    Request personalized demo <FiArrowRight />
                  </Link>
                </div>

                <div className="border rounded-xl p-6 hover:shadow-lg transition">
                  <h3 className="text-xl font-medium mb-3">
                    AI-ready infrastructure
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to modernize network and compute infrastructure
                    with AI-ready designs built for scale and resilience.
                  </p>
                  <Link to="/AekSec-infrastructure" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                    Request personalized demo <FiArrowRight />
                  </Link>
                </div>

                <div className="border rounded-xl p-6 hover:shadow-lg transition">
                  <h3 className="text-xl font-medium mb-3">Catalyst Center</h3>
                  <p className="text-gray-600 mb-4">
                    Experience intent-based networking, AI-driven assurance, and
                    automation for future-ready workplaces.
                  </p>
                  <Link to="/networking" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                    Request personalized demo <FiArrowRight />
                  </Link>
                </div>

                <div className="border rounded-xl p-6 hover:shadow-lg transition">
                  <h3 className="text-xl font-medium mb-3">Secure Access</h3>
                  <p className="text-gray-600 mb-4">
                    Zero-trust security demo showcasing secure access to applications
                    from any device, anywhere.
                  </p>
                  <Link to="/services/cybersecurity" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                    Try free trial <FiArrowRight />
                  </Link>
                </div>

                <div className="border rounded-xl p-6 hover:shadow-lg transition">
                  <h3 className="text-xl font-medium mb-3">Cloud Observability</h3>
                  <p className="text-gray-600 mb-4">
                    Full-stack observability platform demo for cloud-native
                    applications and infrastructure.
                  </p>
                  <Link to="/services/data-analytics" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                    Launch demo <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE DEMOS ================= */}
        <section className="bg-gradient-to-r from-gray-50 to-white py-28">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">
                Explore our interactive demos
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl">
                An extensive catalog of demos, training, and sandboxes for every
                KalpTech architecture. A free KalpTech ID account is required.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>400+ hands-on demos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Live sandbox environments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Guided learning paths</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/explore" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition">
                  Discover dCloud
                </Link>
                <Link to="/register" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-medium transition">
                  Create Free Account
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://www.KalpTech.com/content/dam/KalpTech-cdc/site/images/icons-and-shapes/products/prodindex-trials-demos-spotlight-1316x606.jpg"
                alt="dCloud demos"
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <h4 className="font-medium mb-2">Need help getting started?</h4>
                <p className="text-sm text-gray-600 mb-3">Our experts are here to guide you</p>
                <Link to="/contact" className="text-blue-600 font-medium text-sm hover:underline flex items-center gap-1">
                  Schedule a demo <FiExternalLink />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="bg-[#071B33] py-20">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-light text-white mb-6">
              Ready to experience AekSec solutions?
            </h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of enterprises that have transformed their operations
              with our cutting-edge technology platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white hover:bg-gray-100 text-[#071B33] px-8 py-4 rounded-full font-medium transition">
                Contact Sales
              </Link>
              <Link to="/Training" className="border border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium transition">
                View Training
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}