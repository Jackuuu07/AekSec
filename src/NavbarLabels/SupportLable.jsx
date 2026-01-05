import {
  FiSearch,
  FiFileText,
  FiDownload,
  FiShield,
  FiAlertTriangle,
  FiChevronDown,
} from "react-icons/fi";

export default function SolutionLable() {
  return (
    <main className="w-full">
      {/* =====================================================
         HERO – Cisco products
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-r from-[#07182d] to-[#0b2447] text-white py-32">
        {/* BACKGROUND LAYERS */}
        <div className="pointer-events-none absolute inset-0">
          {/* Radial glow mesh */}
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-cyan-400/20 blur-[100px]" />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* FLOATING ACCENTS */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2">
          <div className="absolute top-1/4 right-0 w-72 h-px bg-gradient-to-l from-cyan-400/60 to-transparent" />
          <div className="absolute top-1/2 right-0 w-96 h-px bg-gradient-to-l from-blue-500/50 to-transparent" />

          <div className="absolute top-24 right-20 w-2 h-2 rounded-full bg-cyan-400" />
          <div className="absolute top-44 right-40 w-1.5 h-1.5 rounded-full bg-blue-400" />
          <div className="absolute bottom-32 right-28 w-2 h-2 rounded-full bg-indigo-400" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            {/* Accent line */}
            {/* <div className="w-12 h-1 bg-blue-500 mb-6 rounded-full" /> */}

            <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
              AekSec Support
            </h1>

            <p className="text-lg text-white/80 leading-relaxed">
              Find documentation, software downloads, security notices, 
              IT support for cases, and more for all supported Cisco products.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          {/* ================= LEFT SIDE ================= */}
          <div>
            {/* Heading */}
            <h1 className="text-4xl font-light text-slate-900 mb-2">
              Support for Cisco products
            </h1>
            <p className="text-slate-600 mb-8">Troubleshoot by product</p>

            {/* Search */}
            <div className="relative max-w-xl mb-16">
              <input
                type="text"
                placeholder="Enter a product name"
                className="w-full border border-slate-300 rounded-lg px-5 py-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl" />
            </div>

            {/* Explore by resource */}
            <h2 className="text-2xl font-light text-slate-900 mb-10">
              Explore by resource
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Documentation */}
              <div>
                <FiFileText className="text-3xl text-slate-700 mb-4" />
                <h3 className="text-xl font-medium mb-2">Documentation</h3>
                <p className="text-slate-600 mb-4">
                  Find the self-serve resources you need to adopt, configure,
                  install, and troubleshoot with ease.
                </p>
                <a className="text-blue-600 font-medium hover:underline">
                  Browse product categories →
                </a>
              </div>

              {/* Software downloads */}
              <div>
                <FiDownload className="text-3xl text-slate-700 mb-4" />
                <h3 className="text-xl font-medium mb-2">Software downloads</h3>
                <p className="text-slate-600 mb-4">
                  Download new software or update your current software.
                </p>
                <a className="text-blue-600 font-medium hover:underline">
                  Access downloads →
                </a>
              </div>

              {/* Security advisories */}
              <div>
                <FiShield className="text-3xl text-slate-700 mb-4" />
                <h3 className="text-xl font-medium mb-2">
                  Security advisories
                </h3>
                <p className="text-slate-600 mb-4">
                  Stay up to date with vulnerabilities, impacts, and mitigation
                  recommendations.
                </p>
                <a className="text-blue-600 font-medium hover:underline">
                  Check advisories →
                </a>
              </div>

              {/* Field notices */}
              <div>
                <FiAlertTriangle className="text-3xl text-slate-700 mb-4" />
                <h3 className="text-xl font-medium mb-2">Field notices</h3>
                <p className="text-slate-600 mb-4">
                  Identify product symptoms, workarounds, and solutions for
                  non-security issues.
                </p>
                <a className="text-blue-600 font-medium hover:underline">
                  View notices →
                </a>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <aside className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 h-fit">
            <h2 className="text-2xl font-light mb-6">My support</h2>

            <div className="flex items-center gap-4 mb-6">
              <button className="rounded-full bg-blue-600 px-6 py-2 text-white font-medium hover:bg-blue-700 transition">
                Log in
              </button>
              <span className="text-slate-600 text-sm">
                Unlock support history
              </span>
            </div>

            <hr className="my-6" />

            <ul className="space-y-4 text-slate-500">
              <li>Existing cases</li>
              <li>Previous downloads</li>
              <li>My saved content</li>
            </ul>

            <hr className="my-6" />

            <h3 className="font-medium mb-2">Recently viewed products</h3>
            <p className="text-sm text-slate-600 mb-3">
              You don't have products to display yet.
            </p>
            <a className="text-blue-600 font-medium hover:underline text-sm">
              View all products →
            </a>

            <hr className="my-6" />

            <h3 className="font-medium mb-2">Get technical support</h3>
            <p className="text-sm text-slate-600 mb-4">
              Open and manage requests with Cisco Technical Assistance Center
              (TAC). Service contract required.
            </p>

            <button className="w-full border border-blue-600 text-blue-600 rounded-lg py-3 font-medium hover:bg-blue-50 transition">
              Contact TAC
            </button>
          </aside>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl font-light text-slate-900 mb-16">
            Other support resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Tools and portals */}
            <div>
              <h3 className="text-xl font-medium mb-3">Tools and portals</h3>
              <p className="text-slate-600 max-w-md mb-6">
                Browse all support tools, assisting you with personalization,
                troubleshooting, networking software, and more.
              </p>
              <a className="text-blue-600 font-medium hover:underline">
                View all support tools →
              </a>
            </div>

            {/* Hardware returns */}
            <div>
              <h3 className="text-xl font-medium mb-3">Hardware returns</h3>
              <p className="text-slate-600 max-w-md mb-6">
                Create a Return Material Authorization (RMA) and track the
                status of your hardware shipments.
              </p>
              <a className="text-blue-600 font-medium hover:underline">
                Visit Cisco Returns Portal →
              </a>
            </div>

            {/* General Cisco support */}
            <div>
              <h3 className="text-xl font-medium mb-3">
                General Cisco support
              </h3>
              <p className="text-slate-600 max-w-md mb-6">
                Discover resources to manage your Cisco account, contracts and
                orders, certifications, and more with the Web Help Portal.
              </p>
              <a className="text-blue-600 font-medium hover:underline">
                Find answers →
              </a>
            </div>
          </div>
        </div>
      </section>
    
    </main>
  );
}
