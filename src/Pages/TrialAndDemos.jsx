import { FiSearch, FiChevronDown, FiArrowRight,  FiPlayCircle,
  FiCpu,
  FiShield,
  FiActivity,
  FiLayers, } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TrialsAndDemos() {
  return (
    <>
      <Navbar />
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
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full font-medium flex items-center gap-2">
              Explore demos <FiPlayCircle size={20} />
            </button>

            <span className="text-gray-400 text-sm">
              No installation required
            </span>
          </div>
        </div>

        {/* RIGHT ICON SYSTEM */}
        <div className="hidden lg:grid grid-cols-2 gap-10 justify-items-center">

          <div className="bg-[#0E2A47] w-36 h-36 rounded-2xl flex flex-col items-center justify-center text-blue-400">
            <FiCpu size={34} />
            <span className="text-sm text-gray-300 mt-3">
              AI Platforms
            </span>
          </div>

          <div className="bg-[#0E2A47] w-36 h-36 rounded-2xl flex flex-col items-center justify-center text-blue-400">
            <FiShield size={34} />
            <span className="text-sm text-gray-300 mt-3">
              Security
            </span>
          </div>

          <div className="bg-[#0E2A47] w-36 h-36 rounded-2xl flex flex-col items-center justify-center text-blue-400">
            <FiActivity size={34} />
            <span className="text-sm text-gray-300 mt-3">
              Observability
            </span>
          </div>

          <div className="bg-[#0E2A47] w-36 h-36 rounded-2xl flex flex-col items-center justify-center text-blue-400">
            <FiLayers size={34} />
            <span className="text-sm text-gray-300 mt-3">
              Infrastructure
            </span>
          </div>

        </div>
      </div>
    </section>

        {/* ================= FEATURED PRODUCTS ================= */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl font-light mb-16">Featured products</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {/* Card 1 */}
              <div>
                <span className="text-sm font-semibold text-gray-500">
                  Smart buildings
                </span>

                <h3 className="text-xl font-medium mt-4 mb-4">Cisco Spaces</h3>

                <p className="text-gray-600 mb-8">
                  Empower workers with safer, smarter, and more sustainable
                  workspaces with a single cloud platform that brings
                  applications and data together.
                </p>

                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium mb-4">
                  Sign-up for free trial
                </button>

                <div>
                  <a className="text-blue-600 font-medium flex items-center gap-1 hover:underline">
                    Launch interactive demo <FiArrowRight />
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div>
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

                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium">
                  Sign-up for free trial
                </button>
              </div>

              {/* Card 3 */}
              <div>
                <span className="text-sm font-semibold text-gray-500">
                  Security
                </span>

                <h3 className="text-xl font-medium mt-4 mb-4">
                  Cisco Secure Firewall
                </h3>

                <p className="text-gray-600 mb-8">
                  Firewalls designed to protect your security foundation with
                  benefits spanning network security, visibility, control,
                  scalability, and regulatory compliance.
                </p>

                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium mb-4">
                  Contact sales
                </button>

                <div>
                  <a className="text-blue-600 font-medium flex items-center gap-1 hover:underline">
                    Launch interactive demo <FiArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ALL PRODUCTS ================= */}
        <section className="py-28 bg-white border-t">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* FILTERS */}
            <div>
              <h3 className="font-medium mb-6">Filter by:</h3>

              <div className="space-y-8 text-sm">
                <div>
                  <div className="flex justify-between items-center font-medium mb-3">
                    Tags <FiChevronDown />
                  </div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Featured
                  </label>
                </div>

                <div>
                  <div className="flex justify-between items-center font-medium mb-3">
                    Type <FiChevronDown />
                  </div>
                  <label className="flex items-center gap-2 mb-2">
                    <input type="checkbox" /> Free trials
                  </label>
                  <label className="flex items-center gap-2 mb-2">
                    <input type="checkbox" /> Hands-on Live Demos
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Personalized Demos
                  </label>
                </div>

                <div className="font-medium">
                  Portfolio <FiChevronDown className="inline ml-2" />
                </div>

                <div className="font-medium">
                  Outcomes we deliver <FiChevronDown className="inline ml-2" />
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
                    className="w-full border rounded-full pl-10 pr-4 py-2"
                  />
                </div>

                <select className="border rounded-full px-6 py-2">
                  <option>Title A–Z</option>
                  <option>Newest</option>
                </select>
              </div>

              <p className="mb-8 text-sm text-gray-500">66 Results</p>

              {/* ITEMS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-lg font-medium mb-3">AI Canvas</h3>
                  <p className="text-gray-600 mb-4">
                    AI Canvas is Cisco’s first Generative UI for cross-domain
                    IT— a shared, intelligent workspace that brings real-time
                    telemetry, AI insights, and collaboration into one view.
                  </p>
                  <a className="text-blue-600 font-medium hover:underline">
                    Launch interactive demo →
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">AI Defense</h3>
                  <p className="text-gray-600 mb-4">
                    AI Defense demonstrates AI-native threat detection,
                    automated response, and telemetry correlation to protect
                    modern AI environments.
                  </p>
                  <a className="text-blue-600 font-medium hover:underline">
                    Request personalized demo →
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">
                    AI-ready infrastructure
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to modernize network and compute infrastructure
                    with AI-ready designs built for scale and resilience.
                  </p>
                  <a className="text-blue-600 font-medium hover:underline">
                    Request personalized demo →
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Catalyst Center</h3>
                  <p className="text-gray-600 mb-4">
                    Experience intent-based networking, AI-driven assurance, and
                    automation for future-ready workplaces.
                  </p>
                  <a className="text-blue-600 font-medium hover:underline">
                    Request personalized demo →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE DEMOS ================= */}
        <section className="bg-gray-100 py-28">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">
                Explore our interactive demos
              </h2>
              <p className="text-gray-600 mb-10 max-w-xl">
                An extensive catalog of demos, training, and sandboxes for every
                Cisco architecture. A free Cisco ID account is required.
              </p>

              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium">
                Discover dCloud
              </button>
            </div>

            <div>
              <img
                src="https://www.cisco.com/content/dam/cisco-cdc/site/images/icons-and-shapes/products/prodindex-trials-demos-spotlight-1316x606.jpg"
                alt="dCloud demos"
                className="w-full"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
