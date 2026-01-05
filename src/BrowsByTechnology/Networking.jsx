/* eslint-disable no-unused-vars */
import {
  Network,
  ShieldCheck,
  Wifi,
  Server,
  Cloud,
  BarChart3,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  PlayCircle,
} from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Networking() {
  const outcomes = [
    {
      title: "Routed Optical Networking",
      icon: Network,
      desc: "Converge IP and optical layers to simplify operations, reduce power consumption, and improve end-to-end visibility across high-capacity networks.",
      link: "Explore details",
    },
    {
      title: "Hybrid Work",
      icon: Briefcase,
      desc: "Enable secure access for users working anywhere with intelligent networking, optimized application performance, and built-in security.",
      link: "Explore hybrid work solution",
    },
    {
      title: "Software-defined WAN",
      icon: Cloud,
      desc: "Secure access to any cloud from any location with SASE-enabled SD-WAN, improving performance and reducing operational complexity.",
      link: "Explore SD-WAN and SASE",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((activeIndex - 1 + outcomes.length) % outcomes.length);

  const next = () => setActiveIndex((activeIndex + 1) % outcomes.length);

  const ActiveIcon = outcomes[activeIndex].icon;

  return (
    <>
      <Navbar />

      <div className="w-full bg-white text-gray-900">
        {/* ================= HERO ================= */}
        <section className="relative h-[520px]">
          <img
            src="https://www.cisco.com/content/dam/cisco-cdc/site/images/heroes/products/trials-and-demos/trials-demos-illustration-3200x762.png"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Networking"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 max-w-7xl mx-auto px-10 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <p className="text-sm mb-2">AekSec Networking</p>
              <h1 className="text-5xl font-light mb-6">
                Take your network as seriously as your business
              </h1>
              <p className="text-lg text-gray-200">
                Build a future-ready network with automation, analytics, and
                security at its core.
              </p>
            </div>
          </div>
        </section>

        {/* ================= BUILD NETWORK ================= */}
        <section className="py-24 max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-light mb-6">
              Build a network that gives you peace of mind
            </h2>

            <div className="relative mt-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                alt="Video"
                className="w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          <div className="grid gap-10">
            <Feature
              icon={Network}
              title="Simplify onboarding and provisioning"
              text="Automated workflows quickly configure and provision devices according to policy."
            />
            <Feature
              icon={ShieldCheck}
              title="Control access with ease"
              text="AI/ML identifies endpoints, enforces policies, and highlights critical alerts."
            />
            <Feature
              icon={BarChart3}
              title="Maintain network health"
              text="Telemetry and analytics deliver real-time client, network, and app insights."
            />
            <Feature
              icon={Cloud}
              title="Scale on demand"
              text="Flexible licensing and dynamic port activation support growth."
            />
          </div>
        </section>

        {/* ================= FIND WHAT YOU NEED ================= */}
        <section className="border-t py-24">
          <div className="max-w-7xl mx-auto px-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-12">
              <h2 className="text-5xl font-light/100 text-gray-900">
                Find what you’re looking for
              </h2>

              <img
                src="https://www.cisco.com/content/dam/cisco-cdc/site/us/en/images/networking/networkingportfolio-catalogproducts-607x195.png"
                alt="Networking products"
                className="hidden md:block max-w-[420px]"
              />
            </div>

            <hr className="mb-12" />

            {/* Top Links */}
            <div className="grid md:grid-cols-3 gap-14 text-blue-600 mb-16 text-sm">
              <div className="space-y-4">
                <p className="flex items-center gap-1 cursor-pointer hover:underline">
                  Access networking <ArrowRight className="w-3 h-3" />
                </p>
                <p className="flex items-center gap-1 cursor-pointer hover:underline">
                  Network security <ArrowRight className="w-3 h-3" />
                </p>
                <p className="flex items-center gap-1 cursor-pointer hover:underline">
                  Visibility <ArrowRight className="w-3 h-3" />
                </p>
              </div>

              <div className="space-y-4">
                <p className="flex items-center gap-1 cursor-pointer hover:underline">
                  Data center and cloud networking{" "}
                  <ArrowRight className="w-3 h-3" />
                </p>
                <p className="flex items-center gap-1 cursor-pointer hover:underline">
                  Network software <ArrowRight className="w-3 h-3" />
                </p>
                <p className="flex items-center gap-1 cursor-pointer hover:underline">
                  Wide-area networking (WAN) <ArrowRight className="w-3 h-3" />
                </p>
              </div>

              <div className="space-y-4">
                <p className="flex items-center gap-1 cursor-pointer hover:underline">
                  Industrial IoT networking <ArrowRight className="w-3 h-3" />
                </p>
                <p className="flex items-center gap-1 cursor-pointer hover:underline">
                  Silicon and optics <ArrowRight className="w-3 h-3" />
                </p>
                <p className="flex items-center gap-1 cursor-pointer hover:underline">
                  Service assurance <ArrowRight className="w-3 h-3" />
                </p>
              </div>
            </div>

            <hr className="mb-16" />

            {/* Product Sections */}
            <div className="grid md:grid-cols-3 gap-16">
              <div>
                <h4 className="font-medium mb-2">
                  Access software for switching
                </h4>

                <p className="text-sm text-gray-600 mb-3">
                  Benefit from the latest switching and management innovations
                  as soon as they’re released.
                </p>
                <span className="text-blue-600 text-sm flex items-center gap-1 cursor-pointer hover:underline">
                  Explore switching software <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              <div>
                <h4 className="font-medium mb-2">Switches</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Build a network with multigigabit switches that constantly
                  learn, adapt, and protect.
                </p>
                <span className="text-blue-600 text-sm flex items-center gap-1 cursor-pointer hover:underline">
                  Explore switching <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              <div>
                <h4 className="font-medium mb-2">
                  Access software for wireless
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Get continual feature innovations delivered by subscription.
                </p>
                <span className="text-blue-600 text-sm flex items-center gap-1 cursor-pointer hover:underline">
                  Explore wireless software <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              <div>
                <h4 className="font-medium mb-2">AekSec wireless</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Build future-proof workspaces with intelligent, secure, and
                  assured Wi-Fi 7.
                </p>
                <span className="text-blue-600 text-sm flex items-center gap-1 cursor-pointer hover:underline">
                  Explore wireless <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              <div>
                <h4 className="font-medium mb-2">WAN software</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Take advantage of the latest WAN innovations delivered
                  continually by subscription.
                </p>
                <span className="text-blue-600 text-sm flex items-center gap-1 cursor-pointer hover:underline">
                  Explore WAN software <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              <div>
                <h4 className="font-medium mb-2">Routers</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Simplify your WAN architecture and make it easier to deploy,
                  manage, and operate.
                </p>
                <span className="text-blue-600 text-sm flex items-center gap-1 cursor-pointer hover:underline">
                  Explore routing <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PLATFORMS ================= */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-10">
            <div className="flex items-start justify-between mb-12">
              <h2 className="text-5xl font-light/100 text-gray-900">
                Platforms to control your network
              </h2>
              <img
                className="hidden md:block max-w-[420px]"
                src="https://www.cisco.com/content/dam/cisco-cdc/site/us/en/images/networking/networking-portfolio-dashboard-568x330.png"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <Platform
                title="AekSec Catalyst Center"
                text="Automate, secure, and optimize wireless and switching access networks."
              />
              <Platform
                title="AekSec Meraki platform"
                text="Scale and secure your entire network with cloud management."
              />
              <Platform
                title="AekSec Nexus Dashboard"
                text="Operate and analyze across data center and cloud environments."
              />
            </div>
          </div>
        </section>

        {/* ================= SOLUTIONS CTA ================= */}
        <section className="py-24 max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://www.cisco.com/content/dam/cisco-cdc/site/us/en/images/networking/networking-portfolio-lifestyle-800x450.jpg"
            alt="Solutions"
          />

          <div>
            <h2 className="text-4xl font-light mb-6">
              Robust, scalable networking solutions
            </h2>
            <p className="text-gray-600 mb-8">
              Secure and manage diverse traffic, bandwidth, and latency demands
              with an AI-enabled platform architecture.
            </p>

            <button className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
              Uplevel your network
            </button>
          </div>
        </section>

        {/* ================= BUSINESS OUTCOMES ================= */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-10">
            {/* Heading */}
            <h2 className="text-3xl font-light mb-14 text-gray-900">
              Network-enabled business outcomes
            </h2>

            {/* Slider */}
            <div className="relative bg-white rounded-2xl p-12 shadow-sm overflow-hidden">
              {/* Navigation */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full border hover:bg-gray-100 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full border hover:bg-gray-100 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="max-w-xl mx-auto text-center">
                <ActiveIcon className="w-14 h-14 text-blue-600 mx-auto mb-6" />

                <h3 className="text-xl font-medium mb-4">
                  {outcomes[activeIndex].title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {outcomes[activeIndex].desc}
                </p>

                <span className="inline-flex items-center gap-1 text-blue-600 font-medium cursor-pointer hover:underline">
                  {outcomes[activeIndex].link}
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-3 mt-10">
                {outcomes.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      idx === activeIndex ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-24 border-t bg-white">
          <div className="max-w-7xl mx-auto px-10">
            {/* Heading */}
            <h2 className="text-3xl font-light text-gray-900 mb-16">
              Services & Support
            </h2>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-16">
              {/* Service 1 */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-900">
                  AekSec Professional Services
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-md">
                  Optimize and transform your IT environment with measurable
                  business outcomes. Our experts help design, deploy, and
                  accelerate innovation across your network.
                </p>
                <span className="inline-flex items-center gap-1 text-blue-600 font-medium cursor-pointer hover:underline">
                  View Professional Services
                  <span>›</span>
                </span>
              </div>

              {/* Service 2 */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-900">
                  AekSec Services
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-md">
                  Deploy faster, improve security, and enhance visibility with
                  lifecycle services designed to keep your network resilient and
                  future-ready.
                </p>
                <span className="inline-flex items-center gap-1 text-blue-600 font-medium cursor-pointer hover:underline">
                  Explore all services
                  <span>›</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

/* ================= COMPONENTS ================= */

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-5">
      <Icon className="w-8 h-8 text-blue-600 mt-1" />
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
}

function LinkGroup({ title }) {
  return (
    <div className="space-y-3 text-sm">
      <p className="font-medium text-gray-900">{title}</p>
      {["Network security", "Visibility", "WAN"].map((item) => (
        <p
          key={item}
          className="flex items-center gap-1 hover:underline cursor-pointer"
        >
          {item} <ArrowRight className="w-3 h-3" />
        </p>
      ))}
    </div>
  );
}

function Platform({ title, text }) {
  return (
    <div>
      <h4 className="font-medium mb-2">{title}</h4>
      <p className="text-gray-600 text-sm mb-3">{text}</p>
      <span className="text-blue-600 text-sm flex items-center gap-1 cursor-pointer">
        Explore <ArrowRight className="w-4 h-4" />
      </span>
    </div>
  );
}

function Outcome({ title }) {
  return (
    <div className="border-l pl-6">
      <h4 className="font-medium mb-2">{title}</h4>
      <p className="text-gray-600 text-sm mb-3">
        Secure access, optimize performance, and enable innovation.
      </p>
      <span className="text-blue-600 text-sm flex items-center gap-1 cursor-pointer">
        Explore <ArrowRight className="w-4 h-4" />
      </span>
    </div>
  );
}

function Service({ title, text }) {
  return (
    <div>
      <h4 className="font-medium mb-2">{title}</h4>
      <p className="text-gray-600 mb-3">{text}</p>
      <span className="text-blue-600 flex items-center gap-1 cursor-pointer">
        Learn more <ArrowRight className="w-4 h-4" />
      </span>
    </div>
  );
}
