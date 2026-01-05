/* eslint-disable no-unused-vars */
import {
  Cpu,
  Server,
  Layers,
  ArrowRight,
  Cloud,
  Shield,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Computing() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* ================= HERO ================= */}
        <section
          className="relative py-28 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.cisco.com/content/dam/cisco-cdc/site/images/header/solutions-campus-branch.jpg)",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0B1F3B]/80" />

          <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <p className="text-blue-400 uppercase tracking-wide text-sm mb-3">
                Enterprise Computing
              </p>

              <h1 className="text-5xl font-light text-white mb-6">
                Compute built for modern AI workloads
              </h1>

              <p className="text-gray-300 max-w-xl leading-relaxed mb-8">
                Accelerate AI training, inference, and mission-critical
                enterprise applications with high-density, GPU-powered computing
                platforms designed for scale.
              </p>

              <button
                onClick={() => navigate("/explore")}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
              >
                Explore compute platforms
                <ArrowRight size={18} />
              </button>
            </div>

            {/* RIGHT SPACER (keeps layout balance like before) */}
            <div className="hidden lg:block" />
          </div>
        </section>

        {/* ================= VALUE PROPS ================= */}
        <section className="py-20 max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <Value icon={Zap} title="High performance" />
            <Value icon={Shield} title="Secure by design" />
            <Value icon={Cloud} title="Hybrid ready" />
          </div>
        </section>

        {/* ================= SOLUTIONS ================= */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-center">
            Enterprise computing solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Solution
              icon={Cpu}
              title="GPU-accelerated AI"
              desc="Power large-scale AI training and inference with NVIDIA-based GPU servers optimized for performance and efficiency."
              image="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1200"
            />

            <Solution
              icon={Server}
              title="Unified Computing System"
              desc="Simplify operations with an integrated system that unifies compute, networking, and management at scale."
              image="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=1200"
            />

            <Solution
              icon={Layers}
              title="Hybrid & edge compute"
              desc="Run workloads consistently across data centers, public cloud, and edge environments with flexible deployment models."
              image="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1200"
            />
          </div>
        </section>

        {/* ================= VIDEO ================= */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-6xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-light mb-6">
              Inside AI-ready compute infrastructure
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mb-10">
              Learn how modern compute platforms are designed to handle massive
              AI workloads, high-performance networking, and secure enterprise
              operations.
            </p>

            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/r9Y7ZQ6t9mY"
                title="AI Compute Infrastructure"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 border-t">
          <div className="max-w-5xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-light mb-6">
              Build compute infrastructure that scales with your business
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              From AI training clusters to hybrid enterprise platforms, our
              compute solutions help you deploy faster, operate smarter, and
              innovate with confidence.
            </p>

            <button
              onClick={() => navigate("/about")}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Talk to an expert
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ---------- Small Components ---------- */

function Solution({ icon: Icon, title, desc, image }) {
  return (
    <div className="border rounded-2xl overflow-hidden hover:shadow-md transition">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="p-8">
        <Icon className="w-10 h-10 text-blue-600 mb-4" />
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Value({ icon: Icon, title }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50">
        <Icon className="w-7 h-7 text-blue-600" />
      </div>
      <p className="text-lg font-medium text-gray-900">{title}</p>
    </div>
  );
}
