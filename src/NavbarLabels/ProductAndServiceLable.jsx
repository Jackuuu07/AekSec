import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const DATA = {
  Networking: {
    title: "Networking",
    intro:
      "Build a future-ready network with an industry leader in networking, whether you're with a Global 2000 enterprise or a local organization.",
    cta: "Explore all networking",
    sections: [
      {
        title: "Access networking",
        desc: "Simplify, automate, and secure your network experience with software-enabled switching and wireless solutions.",
      },
      {
        title: "Data center and cloud networking",
        desc: "Gain centralized visibility and control across on-prem, cloud, and hybrid environments.",
      },
      {
        title: "Silicon",
        desc: "Deploy a unifying silicon architecture delivering performance, flexibility, and sustainability.",
      },
      {
        title: "Industrial IoT",
        desc: "Enable secure, automated industrial networking for mission-critical environments.",
      },
      {
        title: "WAN and SD-WAN",
        desc: "Deliver resilient, application-aware connectivity across branch and cloud locations.",
      },
      {
        title: "Wireless",
        desc: "Provide secure, high-performance Wi-Fi experiences powered by AI insights.",
      },
    ],
  },

  Security: {
    title: "Security",
    intro:
      "Protect users, devices, applications, and data with an integrated security platform built for today’s hybrid world.",
    cta: "Explore all security",
    sections: [
      {
        title: "Zero Trust",
        desc: "Verify every user and device before granting access—no matter where they are.",
      },
      {
        title: "Cloud security",
        desc: "Secure applications and workloads across multi-cloud environments.",
      },
      {
        title: "Threat detection and response",
        desc: "Detect and respond to threats faster using AI-powered analytics.",
      },
      {
        title: "Secure access",
        desc: "Deliver secure connectivity for remote and hybrid workers.",
      },
      {
        title: "Identity security",
        desc: "Protect identities with continuous authentication and visibility.",
      },
      {
        title: "Email and endpoint protection",
        desc: "Stop phishing, malware, and ransomware before impact.",
      },
    ],
  },

  Collaboration: {
    title: "Collaboration",
    intro:
      "Enable seamless collaboration experiences that connect teams, customers, and partners anywhere.",
    cta: "Explore collaboration",
    sections: [
      {
        title: "Meetings",
        desc: "Deliver inclusive, AI-powered meeting experiences.",
      },
      {
        title: "Calling",
        desc: "Modernize enterprise calling with cloud-based voice solutions.",
      },
      {
        title: "Contact center",
        desc: "Transform customer experiences with AI-driven contact centers.",
      },
      {
        title: "Devices",
        desc: "Purpose-built devices for hybrid work and collaboration.",
      },
      {
        title: "Messaging",
        desc: "Enable persistent team messaging and real-time collaboration.",
      },
      {
        title: "Customer engagement",
        desc: "Deliver connected, personalized customer journeys.",
      },
    ],
  },

  Computing: {
    title: "Computing",
    intro:
      "Power modern workloads with intelligent computing infrastructure built for performance and scale.",
    cta: "Explore computing",
    sections: [
      {
        title: "Servers",
        desc: "Run mission-critical workloads with enterprise-grade servers.",
      },
      {
        title: "Hyperconverged infrastructure",
        desc: "Simplify IT operations with integrated compute, storage, and networking.",
      },
      {
        title: "Edge computing",
        desc: "Process data closer to where it’s generated for faster insights.",
      },
      {
        title: "AI workloads",
        desc: "Support GPU-accelerated AI and ML workloads efficiently.",
      },
      {
        title: "Virtualization",
        desc: "Modernize virtual infrastructure with flexible deployment models.",
      },
      {
        title: "High-performance computing",
        desc: "Accelerate compute-intensive workloads with optimized platforms.",
      },
    ],
  },

  Observability: {
    title: "Observability",
    intro:
      "Gain deep visibility into your applications, networks, and infrastructure to ensure performance and reliability.",
    cta: "Explore observability",
    sections: [
      {
        title: "Application monitoring",
        desc: "Understand application performance across environments.",
      },
      {
        title: "Network insights",
        desc: "Visualize traffic flows and detect anomalies in real time.",
      },
      {
        title: "Full-stack observability",
        desc: "Correlate data across domains for faster troubleshooting.",
      },
      {
        title: "AI-powered analytics",
        desc: "Use AI to predict issues before they impact users.",
      },
      {
        title: "Digital experience monitoring",
        desc: "Measure and improve end-user experience across devices.",
      },
      {
        title: "Business insights",
        desc: "Translate technical telemetry into business-level insights.",
      },
    ],
  },
};

export default function ProductAndServiceLable() {
  const [active, setActive] = useState("Networking");
  const content = DATA[active];

  return (
    <main className="w-full">
      {/* =====================================================
         HERO – Cisco products
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-r from-[#07182d] to-[#0b2447] text-white py-28">
        {/* RIGHT SIDE DECORATION */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2">
          {/* Glow circles */}
          <div className="absolute top-20 right-24 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-24 right-40 w-48 h-48 rounded-full bg-cyan-400/20 blur-2xl" />

          {/* Thin abstract lines */}
          <div className="absolute top-1/3 right-0 w-64 h-px bg-gradient-to-l from-cyan-400/60 to-transparent" />
          <div className="absolute top-1/2 right-0 w-80 h-px bg-gradient-to-l from-blue-500/50 to-transparent" />

          {/* Floating dots */}
          <div className="absolute top-24 right-16 w-2 h-2 rounded-full bg-cyan-400" />
          <div className="absolute top-40 right-32 w-1.5 h-1.5 rounded-full bg-blue-400" />
          <div className="absolute bottom-32 right-20 w-2 h-2 rounded-full bg-indigo-400" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-light mb-4">AekSec products</h1>
          <p className="text-lg text-white/80 max-w-xl">
            Find the AekSec products that fit your needs.
          </p>
        </div>
      </section>

      {/* =====================================================
         BROWSE BY FEATURED PRODUCTS
      ====================================================== */}
      <section className="bg-white py-25">
        <h1 className="text-5xl  text-slate-900 text-start px-10 py-16">
          {" "}
          Browse by featured products{" "}
        </h1>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-20">
          {/* LEFT NAV */}
          <ul className="space-y-6 text-lg">
            {Object.keys(DATA).map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={`
                cursor-pointer pl-4 border-l-2 transition
                ${
                  active === item
                    ? "text-blue-600 font-medium border-blue-600"
                    : "text-slate-600 border-transparent hover:text-slate-900"
                }
              `}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-light mb-6">{content.title}</h2>

            <p className="text-slate-600 max-w-3xl">{content.intro}</p>

            <button className="mt-8 rounded-full bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 transition">
              {content.cta}
            </button>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              {content.sections.map((sec, i) => (
                <div key={i}>
                  <h3 className="text-xl font-medium">{sec.title}</h3>

                  <p className="mt-2 text-slate-600">{sec.desc}</p>

                  <button className="mt-3 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
                    Explore
                    <FiArrowRight className="mt-[1px]" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
         TRIALS AND DEMOS
      ====================================================== */}
      <section className="bg-slate-100 py-20 mt-9">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl font-light mb-4 text-slate-900">
              Trials and demos
            </h1>

            <p className="text-slate-600 max-w-xl">
              Check out our trials and demos to learn how our products and
              technologies can support your business.
            </p>

            <button className="mt-8 rounded-full bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 transition">
              View trials and demos
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src="https://www.cisco.com/content/dam/cisco-cdc/site/images/icons-and-shapes/products/prodindex-trials-demos-spotlight-1316x606.jpg"
            alt="Trials and demos"
            className="
        w-full
        h-[220px]
        object-cover
        rounded-xl
      "
          />
        </div>
      </section>

      {/* =====================================================
         EXPLORE MORE CISCO OFFERINGS
      ====================================================== */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr_1fr_1fr] gap-16">
          {/* HEADING */}
          <h2 className="text-4xl text-black font-light/10">
            Explore more Cisco offerings
          </h2>

          {/* VERTICAL LINE */}
          <div className="hidden lg:block bg-slate-300 w-px" />

          {/* SOFTWARE */}
          <div>
            <h3 className="text-xl font-medium">Software</h3>
            <p className="mt-2 text-slate-600">
              Explore software for security, networking, and computing.
            </p>
            <button className="mt-3 inline-flex items-center gap-1 text-blue-600 font-medium hover:underline">
              Explore software
              <FiChevronRight />
            </button>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h3 className="text-xl font-medium">Solutions</h3>
            <p className="mt-2 text-slate-600">
              Solutions that tackle issues unique to your industry.
            </p>
            <button className="mt-3 inline-flex items-center gap-1 text-blue-600 font-medium hover:underline">
              Explore solutions
              <FiChevronRight />
            </button>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-medium">Services</h3>
            <p className="mt-2 text-slate-600">
              Transform your IT environment and deliver business value.
            </p>
            <button className="mt-3 inline-flex items-center gap-1 text-blue-600 font-medium hover:underline">
              Explore Cisco Services
              <FiChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================================  
      Validation
       ========================================================== */}
      <section className="bg-white py-2">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-light text-slate-900 leading-snug">
              Cisco Validated Design
              <br />
              zone
            </h2>

            <p className="mt-6 text-slate-800 max-w-xl">
              Design, deploy, and extend new technologies with tested and
              documented approaches, including possible network configurations.
            </p>

            <button
              className="
          mt-8
          inline-flex items-center
          rounded-full
          border border-blue-600
          px-8 py-3
          text-blue-600
          font-medium
          hover:bg-blue-50
          transition
        "
            >
              Browse design zone
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Cisco Validated Design Zone"
            className="w-full h-[340px] object-cover"
          />
        </div>
      </section>

      {/* =====================================================
         RESOURCES
      ====================================================== */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16">Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-xl font-medium mb-4">
                End-of-sale and end-of-life
              </h3>
              <ul className="space-y-3 text-blue-600">
                <li>End-of-life policy</li>
                <li>End-of-sale products</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Tools</h3>
              <ul className="space-y-3 text-blue-600">
                <li>Cisco DNA</li>
                <li>Cisco Feature Navigator</li>
                <li>Cisco Software Central</li>
                <li>Cisco Software Central</li>
                <li>Visio stencils</li>
                <li>All product tools</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">
                Product documentation
              </h3>
              <ul className="space-y-3 text-blue-600">
                <li>Cisco DevNet</li>
                <li>Product approvals</li>
                <li>Security vulnerability policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
         START YOUR TRANSFORMATION JOURNEY
      ====================================================== */}
      <section className="bg-gradient-to-r from-[#07182d] to-[#0b2447] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <h2 className="text-4xl font-light">
            Start your transformation journey
          </h2>

          <div>
            <h3 className="text-xl font-medium">Connect with Cisco</h3>
            <p className="mt-2 text-white/80">
              We're here to help you make informed decisions every step of the
              way.
            </p>
            <a className="mt-4 inline-block text-blue-400 hover:underline">
              Contact Cisco →
            </a>
          </div>

          <div>
            <h3 className="text-xl font-medium">Contact a Cisco partner</h3>
            <p className="mt-2 text-white/80">
              Find a partner with the expertise and commitment to help you
              succeed.
            </p>
            <a className="mt-4 inline-block text-blue-400 hover:underline">
              Find a partner →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
