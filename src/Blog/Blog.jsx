import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <>
      <Navbar />

      <div className="bg-white text-gray-800">
        {/* ================= HERO ================= */}
        <section className="relative">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
            alt="Cyber Security"
            className="w-full h-[520px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-8">
              <span className="text-blue-400 font-semibold tracking-widest">
                AEKSEC BLOG
              </span>

              <h1 className="text-4xl md:text-5xl font-light text-white mt-4 leading-tight max-w-3xl">
                Redefining Enterprise Cybersecurity in a Hyper-Connected World
              </h1>

              <p className="text-gray-200 mt-6 max-w-2xl">
                Insights, strategies, and innovations inspired by global
                security leaders — tailored for modern enterprises by AekSec.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* LEFT CONTENT */}
          <article className="lg:col-span-2 space-y-10 text-[17px] leading-relaxed">
            <h2 className="text-3xl font-light">
              The Evolution of Cyber Threats
            </h2>

            <p>
              Modern enterprises face an ever-expanding attack surface — cloud,
              endpoints, IoT, and hybrid work environments. Traditional
              perimeter- based security models are no longer sufficient.
            </p>

            <p>
              At <strong>AekSec</strong>, we align with Zero Trust principles
              and AI-driven threat intelligence, inspired by global security
              leaders, to proactively defend organizations against ransomware,
              phishing, supply-chain attacks, and advanced persistent threats
              (APTs).
            </p>

            <img
              src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87"
              alt="Security Operations Center"
              className="rounded-xl shadow-lg"
            />

            <h2 className="text-3xl font-light">
              AI-Powered Security Operations
            </h2>

            <p>
              Security Operations Centers (SOCs) today must process billions of
              events daily. Manual analysis is no longer viable. AekSec
              integrates machine learning to:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>Detect anomalies in real time</li>
              <li>Automate threat correlation</li>
              <li>Reduce false positives dramatically</li>
              <li>Accelerate incident response</li>
            </ul>

            <p>
              This approach mirrors best practices adopted by enterprise
              security vendors while remaining flexible and scalable for
              businesses of all sizes.
            </p>

            {/* VIDEO */}
            <div className="mt-12">
              <h3 className="text-2xl font-light mb-4">
                How Modern Cyber Defense Works
              </h3>

              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/2LaAJq1lB1Q"
                  title="Cyber Security Explained"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <h2 className="text-3xl font-light">
              Why Enterprises Choose AekSec
            </h2>

            <p>
              Inspired by industry leaders yet built for agility, AekSec
              delivers enterprise-grade security without enterprise complexity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                "Zero Trust Architecture",
                "24×7 Threat Monitoring",
                "Cloud & On-Prem Security",
                "Compliance-Ready Solutions",
              ].map((item) => (
                <div
                  key={item}
                  className="border rounded-xl p-6 hover:shadow-md transition"
                >
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-10">
            <div className="border rounded-xl p-6">
              <h4 className="font-semibold mb-4">Latest Insights</h4>
              <ul className="space-y-3 text-sm">
                <li>→ Zero Trust for Hybrid Work</li>
                <li>→ AI vs Ransomware</li>
                <li>→ Cloud Security Best Practices</li>
                <li>→ SOC Automation Trends</li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
                alt="Network Security"
              />
            </div>

            <div className="bg-gray-900 text-white rounded-xl p-8">
              <h4 className="text-xl font-light mb-4">
                Secure Your Enterprise
              </h4>
              <p className="text-gray-300 text-sm mb-6">
                Discover how AekSec protects modern digital infrastructures.
              </p>
              <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Contact AekSec
              </button>
            </div>
          </aside>
        </section>

        {/* ================= FOOT CTA ================= */}
        <section className="bg-gray-300 py-20">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-light">
              Security Inspired by Global Leaders. Delivered by AekSec.
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Stay ahead of evolving cyber threats with insights, technology,
              and expertise trusted across industries.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
