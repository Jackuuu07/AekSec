import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function AekSecValidate() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="AekSec Validate"
            className="w-full h-[520px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

          {/* Decorative Lines */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-[radial-gradient(circle_at_left,_rgba(59,130,246,0.25),transparent_70%)]" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-8">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
                AekSec Validate
              </h1>

              <p className="text-gray-200 max-w-2xl text-lg">
                Simplifying cybersecurity by ensuring organizations have
                validated, secure, and scalable architectures to design, deploy,
                and operate trusted digital platforms.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 1.5: VALIDATE DETAILS ================= */}
        <section className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* LEFT: ACCORDION CONTENT */}
          <div className="lg:col-span-2 space-y-6 text-gray-700">
            <p>
              AekSec Validate is built for security architects, engineers, and
              teams responsible for designing, deploying, and securing critical
              platforms. Our validated solutions help organizations reduce risk
              and accelerate outcomes.
            </p>

            {[
              {
                title: "Who is AekSec Validate for?",
                content:
                  "IT architects, security engineers, deployment teams, and organizations responsible for operating and securing enterprise platforms.",
              },
              {
                title: "What does AekSec Validate provide?",
                content:
                  "Design guides, deployment frameworks, validated architectures, and best practices aligned with real-world cybersecurity challenges.",
              },
              {
                title: "Why choose validated designs?",
                content:
                  "Validated designs reduce implementation risk, speed up deployments, and ensure consistent, secure outcomes across environments.",
              },
            ].map((item, index) => (
              <div key={index} className="border-t pt-4">
                <button
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                  className="w-full flex justify-between items-center text-left font-medium text-lg"
                >
                  {item.title}
                  <span className="text-2xl">
                    {openItem === index ? "−" : "+"}
                  </span>
                </button>

                {openItem === index && (
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT: CONTACT CARD */}
          <aside className="bg-white border rounded-2xl shadow-lg p-6 h-fit sticky top-24">
            <button className="w-full bg-blue-600 text-white py-3 rounded-full mb-4 hover:bg-blue-700 transition">
              Chat with Sales
            </button>

            <ul className="space-y-3 text-blue-600 text-sm">
              <li className="cursor-pointer hover:underline">
                Get a call from Sales
              </li>
              <li className="cursor-pointer hover:underline">
                Contact Sales via Email
              </li>
            </ul>

            <div className="mt-6 text-sm text-gray-700">
              <p className="font-medium">Call Sales:</p>
              <p className="text-blue-600">1-800-121-3117</p>
              <p className="text-gray-500">9:00am – 6:00pm</p>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="text-purple-600 font-medium hover:underline"
              >
                Product / Technical Support →
              </a>
            </div>
          </aside>
        </section>

        {/* ================= SECTION 2: AEKSEC VALIDATE PORTFOLIO ================= */}
        <section className="max-w-7xl mx-auto px-8 py-20">
          <h2 className="text-3xl font-light mb-16 text-center">
            AekSec Validate Portfolio
          </h2>

          {/* ITEM 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Validated Design Zone"
              className="rounded-xl shadow-md w-full max-w-md mx-auto"
            />

            <div>
              <h3 className="text-2xl font-light text-blue-700 mb-4">
                AekSec Validated Design Zone
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tested and documented approaches to securely design, deploy,
                operate, and scale cybersecurity solutions. AekSec Validated
                Designs provide best practices and proven architectures for
                enterprise-grade implementations.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <img
              src="https://images.unsplash.com/photo-1600267165477-6d4cc741b379"
              alt="Validated Framework"
              className="rounded-xl shadow-md w-full max-w-md mx-auto"
            />

            <div>
              <h3 className="text-2xl font-light text-blue-700 mb-4">
                AekSec Validated Framework
              </h3>
              <p className="text-gray-700 leading-relaxed">
                An agile validation framework that delivers deep technical
                insights, just-in-time design documentation, and deployment
                guidance. Built around customer-centric criteria and modern
                security challenges.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
              alt="Validated Profiles"
              className="rounded-xl shadow-md w-full max-w-md mx-auto"
            />

            <div>
              <h3 className="text-2xl font-light text-blue-700 mb-4">
                AekSec Validated Profiles
              </h3>
              <p className="text-gray-700 leading-relaxed">
                AekSec Validated Profiles define tested configurations,
                topologies, and deployment models for hardware, software, and
                cloud-based security environments—ensuring reliability,
                compliance, and performance.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
