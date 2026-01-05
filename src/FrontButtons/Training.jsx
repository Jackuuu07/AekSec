import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Training() {
  const tabs = {
    "Self-paced training": {
      title: "Self-paced courses with AekSec Academy",
      desc: "Start with free tutorials and expert-led webinars, or subscribe to structured learning paths and certification-focused training designed for flexible schedules.",
      cta: "Start now for free",
    },
    "Guided training": {
      title: "Instructor-led guided training",
      desc: "Engage in guided learning experiences led by industry experts, with structured modules, assessments, and real-world cybersecurity scenarios.",
      cta: "Explore guided training",
    },
    "Hands-on training": {
      title: "Hands-on lab and sandbox environments",
      desc: "Practice in real-world cyber labs and sandbox environments to gain practical experience in threat detection, response, and secure architecture design.",
      cta: "Access hands-on labs",
    },
  };

  const [activeTab, setActiveTab] = useState("Self-paced training");

  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="AekSec Training"
            className="w-full h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-8">
              <h1 className="text-4xl md:text-5xl font-light mb-6">
                AekSec Training
              </h1>
              <p className="max-w-xl text-lg text-gray-700">
                Product, technology, and certification training developed by
                cybersecurity experts for individuals and teams.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: FLEXIBLE TRAINING ================= */}
        <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <h2 className="text-3xl font-light leading-tight">
            We offer flexible training options to fit everyone's needs
          </h2>

          <div className="space-y-6 text-gray-700 text-lg">
            <p>
              Whether you're learning the fundamentals or upskilling your team,
              AekSec helps accelerate careers, sharpen technical skills, and
              give organizations a competitive security edge.
            </p>

            <p>
              With multiple formats available — including self-paced learning,
              instructor-led programs, and digital academy subscriptions — you
              can learn anytime, anywhere, and at your own pace.
            </p>

            <a
              href="#"
              className="inline-flex items-center text-blue-600 font-medium hover:underline"
            >
              Visit the AekSec training catalog →
            </a>
          </div>
        </section>

        {/* ================= SECTION 3: LEARN YOUR WAY (TABS) ================= */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* LEFT IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
              alt="Learning session"
              className="rounded-xl shadow-lg"
            />

            {/* RIGHT CONTENT */}
            <div>
              <h2 className="text-3xl font-light mb-6">Learn your way</h2>

              <p className="text-gray-600 mb-10">
                Choose the training method that fits your learning style — from
                structured courses to hands-on cyber labs.
              </p>

              {/* TABS */}
              <div className="space-y-4 mb-10">
                {Object.keys(tabs).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`block w-full text-left px-4 py-3 border-l-4 transition
                    ${
                      activeTab === tab
                        ? "border-blue-600 text-blue-600 font-medium bg-white"
                        : "border-transparent text-gray-600 hover:text-blue-600"
                    }
                  `}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* DYNAMIC RIGHT PANEL */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-medium mb-4">
                  {tabs[activeTab].title}
                </h3>
                <p className="text-gray-600 mb-6">{tabs[activeTab].desc}</p>

                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  {tabs[activeTab].cta} →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PARTNER ROLES SECTION ================= */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="text-4xl font-light mb-6">
              Partner role levels, specializations, and training
            </h2>

            <p className="max-w-3xl mx-auto text-gray-600 mb-16">
              In addition to certifications for individual employees, AekSec
              partner companies can qualify for role levels and specializations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
              {/* CARD 1 */}
              <div className="bg-white rounded-2xl shadow-sm p-10 hover:shadow-md transition">
                <div className="mb-6 text-gray-700">
                  {/* Icon placeholder */}
                  <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                    <img src="https://www.cisco.com/content/dam/cisco-cdc/site/images/icons-and-shapes/partners/partner-index-icon-customer-64x64.png"/>
                  </div>
                </div>

                <h3 className="text-xl font-medium mb-4">
                  Partner role levels
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Partner role levels reflect the breadth of a partner
                  organization’s skills across multiple technologies and require
                  partner specializations. Find the right role(s) and level(s)
                  for your business.
                </p>

                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn more →
                </a>
              </div>

              {/* CARD 2 */}
              <div className="bg-white rounded-2xl shadow-sm p-10 hover:shadow-md transition">
                <div className="mb-6 text-gray-700">
                  <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                    <img src="https://www.cisco.com/content/dam/cisco-cdc/site/images/icons-and-shapes/partners/icon-acknowledge.png"/>
                  </div>
                </div>

                <h3 className="text-xl font-medium mb-4">
                  Partner specializations
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Partner specializations reflect the depth of a partner
                  organization’s expertise. They include required exams and
                  recommended trainings for employees in various roles.
                </p>

                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn more →
                </a>
              </div>

              {/* CARD 3 */}
              <div className="bg-white rounded-2xl shadow-sm p-10 hover:shadow-md transition">
                <div className="mb-6 text-gray-700">
                  <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                    <img src="https://www.cisco.com/content/dam/cisco-cdc/site/images/icons-and-shapes/partners/icon-enterprise-agreement.png"/>
                  </div>
                </div>

                <h3 className="text-xl font-medium mb-4">Black Belt Academy</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  An education framework for partners to become proficient in
                  selling, deploying, and supporting AekSec’s latest
                  technologies and solutions.
                </p>

                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Become an AekSec partner
              </button>

              <a href="#" className="text-blue-600 font-medium hover:underline">
                Already a partner? Log in →
              </a>
            </div>
          </div>
        </section>

        {/* ================= LEARNING PLAN CTA ================= */}
        <section className="bg-gradient-to-r from-[#020c1b] to-[#031a33] py-24 text-white">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              We’ll create a learning
              <br />
              plan for you
            </h2>

            {/* RIGHT */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                No matter what your team chooses to study, and how they choose
                to do it, training with AekSec means gaining a competitive
                advantage by staying in sync with security and technology
                innovations. Pick your products, certifications, or technologies
                — we’ll create a learning plan to match.
              </p>

              <button className="px-8 py-4 bg-blue-600 rounded-full hover:bg-blue-700 transition">
                Let’s talk
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
