import {
  Shield,
  Lock,
  Network,
  FileText,
  Play,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SecuringAi() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-900">
        {/* ================= HERO ================= */}
        <section className="relative h-[620px] flex items-center">
          <img
            src="https://www.cisco.com/content/dam/cisco-cdc/site/images/heroes/products/security/industrial-security/idc-2400x1028.png"
            alt="Industrial security"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative max-w-7xl  ml-20 px-8 text-white">
            <p className="text-sm uppercase tracking-wider mb-3">
              The future of industrial network security
            </p>

            <h1 className="text-5xl md:text-6xl font-light mb-5 leading-tight">
              Unleash OT security <br /> with the best of IT
            </h1>

            <p className="max-w-xl text-gray-200 mb-8">
              IDC OT security analysts explored how industrial organizations can
              speed digitization without increasing cyber risks.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-black rounded-full font-medium">
                Get IDC InfoBrief
              </button>

              <button className="flex items-center gap-2 text-white hover:underline">
                Watch webinar <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* ================= IDC HIGHLIGHTS ================= */}
        <section className="relative pt-24">
          {/* TOP WHITE AREA */}
          <h2 className="text-4xl font-light text-center mb-24">
            IDC InfoBrief highlights
          </h2>

          {/* DARK BACKGROUND BAND */}
          <div className="bg-[#061a33] pt-32  pb-24">
            <div className="max-w-7xl mx-auto px-8">
              {/* CARDS */}
              <div className="-mt-52 grid md:grid-cols-3 gap-10">
                {[
                  {
                    icon: <Lock size={34} />,
                    title:
                      "Embed OT security for scale, simplicity, and efficiency",
                    desc: "Because OT assets are numerous and communicate mostly within their cells, securing operations requires embedding OT security into industrial networks to reduce costs.",
                  },
                  {
                    icon: <Network size={34} />,
                    title: "Extend IT security to OT, don’t duplicate efforts",
                    desc: "IT and OT teams must work together to secure industrial environments, breaking down silos and applying IT security technologies with the right OT context.",
                  },
                  {
                    icon: <Shield size={34} />,
                    title:
                      "Build an industrial SOC that looks over OT, IT, and cloud",
                    desc: "As industries rely more on IT and cloud resources, SOCs must combine IT and OT telemetry to better protect industrial environments.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-10 rounded-2xl shadow-xl">
                    <div className="mb-6 text-gray-900">{item.icon}</div>
                    <h3 className="text-lg font-medium mb-4 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center mt-16">
                <button className="px-8 py-3 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
                  Get IDC InfoBrief
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPERT QUOTE ================= */}
        <section className="py-24">
          <h2 className="max-w-5xl mx-auto px-8 text-4xl font-light/100 mb-14 item-center">
            See what the experts say
          </h2>

          <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-[1fr_200px] gap-10 items-center">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-medium mb-4">
                Strengthen resilience with unified IT/OT security
              </h3>

              <p className="text-gray-600 mb-6">
                “Adopting scalable, unified solutions is critical for
                organizations looking to strengthen resilience and ensure
                industrial security.”
              </p>

              <p className="text-sm font-medium">
                Romain Fouchereau
                <br />
                <span className="text-gray-500 font-normal">
                  Senior Security Analyst, IDC
                </span>
              </p>
            </div>

            <img
              src="https://www.cisco.com/content/dam/cisco-cdc/site/images/logos/3rd-party/products/security/idc-logo-220x80.png"
              alt="IDC"
              className="w-40 mx-auto"
            />
          </div>
        </section>

        {/* ================= FUTURE SECTION ================= */}
        <section className="py-24 bg-slate-50">
          <h2 className="text-3xl font-light text-center mb-16">
            The future of industrial network security
          </h2>

          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12">
            <div className="bg-white overflow-hidden shadow-sm">
              <img
                src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/products/security/industrial-security/idc-rlobo-blog-544x306.jpg"
                alt="Cisco expert"
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <h3 className="text-lg font-medium mb-3">
                  Learn from AekSec OT security experts
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Learn how AekSec helps secure IT/OT convergence for modern
                  industrial environments.
                </p>
                <button className="text-blue-600 w-full text-ellipsis font-medium hover:underline">
                  Read blog →
                </button>
              </div>
            </div>

            <div className="bg-white  overflow-hidden shadow-sm">
              <img
                src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/products/security/industrial-security/idc-report-get-544x306b.jpg"
                alt="IDC report"
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <h3 className="text-lg font-medium mb-3">
                  Get the full picture
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Learn from IDC analysts about securing IT/OT convergence at
                  scale.
                </p>
                <button className="text-blue-600 font-medium text-center w-full hover:underline">
                  Get IDC InfoBrief →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
            <h2 className="text-4xl font-light">
              Let us help you develop your
              <br />
              industrial security strategy
            </h2>

            <div>
              <p className="text-gray-300 mb-6">
                Schedule a free, no-obligation consultation with one of our
                IT/OT cybersecurity experts.
              </p>
              <button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 font-medium">
                Request consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
