import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const DATA = {
  Technologies: {
    title: "Technologies",
    sections: [
      {
        title: "Artificial intelligence",
        desc: "Use artificial intelligence and machine learning to enable flexibility and secure, intelligent experiences.",
        link: "Explore Cisco AI",
      },
      {
        title: "Collaboration",
        desc: "Connect, communicate, and collaborate securely across distributed teams with reliable business solutions.",
        link: "Explore collaboration",
      },
      {
        title: "Computing",
        desc: "Deploy, manage, and optimize your computing resources across hybrid cloud environments.",
        link: "Explore computing",
      },
      {
        title: "Networking",
        desc: "Build a unified network for secure access from anywhere.",
        link: "Explore networking",
      },
      {
        title: "Observability",
        desc: "Deliver digital excellence across applications with observability and cloud application security.",
        link: "Explore observability",
      },
      {
        title: "Security",
        desc: "Defend against threats and make your network secure and resilient.",
        link: "Explore security",
      },
    ],
  },

  Industries: {
    title: "Industries",
    sections: [
      {
        title: "Financial services",
        desc: "Secure, compliant infrastructure for banking and financial institutions.",
        link: "Explore financial services",
      },
      {
        title: "Healthcare",
        desc: "Enable connected care and protect patient data across digital health environments.",
        link: "Explore healthcare",
      },
      {
        title: "Public sector",
        desc: "Support government and education with secure, scalable digital platforms.",
        link: "Explore public sector",
      },
      {
        title: "Retail",
        desc: "Create connected, data-driven retail experiences.",
        link: "Explore retail",
      },
    ],
  },

  "Service providers": {
    title: "Service providers",
    sections: [
      {
        title: "5G and mobility",
        desc: "Accelerate 5G deployment with cloud-native networking.",
        link: "Explore 5G",
      },
      {
        title: "Cloud networking",
        desc: "Deliver scalable, secure cloud connectivity for customers.",
        link: "Explore cloud networking",
      },
      {
        title: "Automation",
        desc: "Automate network operations and service delivery.",
        link: "Explore automation",
      },
    ],
  },

  "Small and medium business": {
    title: "Small and medium business",
    sections: [
      {
        title: "Secure networking",
        desc: "Simple, secure networking built for growing businesses.",
        link: "Explore SMB networking",
      },
      {
        title: "Collaboration tools",
        desc: "Easy-to-use collaboration solutions for hybrid teams.",
        link: "Explore SMB collaboration",
      },
      {
        title: "Security",
        desc: "Enterprise-grade security made simple for SMBs.",
        link: "Explore SMB security",
      },
    ],
  },
};

export default function SolutionLable() {
  const [active, setActive] = useState("Technologies");
  const content = DATA[active];

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
              AekSec Solutions
            </h1>

            <p className="text-lg text-white/80 leading-relaxed">
              Unlock innovation with tailored combinations of products and
              services designed to solve your most complex industry, business,
              and technology challenges.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
         BROWSE BY FEATURED PRODUCTS
      ====================================================== */}
      <section className="bg-white py-25">
        <h1 className="text-5xl  text-slate-900 text-start px-10 py-16">
          {" "}
          Find Solution{" "}
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
