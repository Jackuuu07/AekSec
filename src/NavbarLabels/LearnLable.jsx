import { FiArrowRight } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

export default function ProductAndServiceLable() {
  const topics = [
    "What is an AI data center?",
    "What is agentic operations?",
    "What is Wi-Fi 7?",
    "How to set up a router",
  ];
  return (
    <main className="w-full">
      {/* =====================================================
         HERO – Cisco products
      ====================================================== */}

     <section className="relative overflow-hidden bg-gradient-to-r from-[#07182d] to-[#0b2447] text-white py-28">
  {/* BACKGROUND ACCENTS */}
  <div className="pointer-events-none absolute inset-0">

    {/* Angled gradient overlay */}
    <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-600/10 to-transparent skew-x-[-12deg] origin-top-right" />

    {/* Soft grid pattern */}
    <div className="absolute right-24 top-24 grid grid-cols-6 gap-6 opacity-30">
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-cyan-400"
        />
      ))}
    </div>

    {/* Glow orbs */}
    <div className="absolute top-16 right-32 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl" />
    <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-cyan-400/20 blur-2xl" />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <div className="flex items-start gap-6">

      {/* Accent line */}
      <div className="w-1 h-24 bg-blue-500 mt-2" />

      <div>
        <h1 className="text-5xl font-light mb-4">Learn</h1>

        <p className="text-lg text-white/80 max-w-xl">
          Skill up with training and career certifications, catch up on the
          latest perspectives through events and webinars, and find helpful
          tools and resources.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* =================== Learning Cards ===================== */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="h-52 w-full object-cover"
              alt=""
            />
            <div className="p-6">
              <h3 className="text-xl font-medium">Learn with Cisco</h3>
              <p className="mt-3 text-slate-600">
                Advance your career, upskill your work, or achieve your learning
                goals.
              </p>
              <a className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
                Explore Learn with Cisco <FiArrowRight />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              className="h-52 w-full object-cover"
              alt=""
            />
            <div className="p-6">
              <h3 className="text-xl font-medium">Events</h3>
              <p className="mt-3 text-slate-600">
                Network with customers, partners, and Cisco experts.
              </p>
              <a className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
                See events calendar <FiArrowRight />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              className="h-52 w-full object-cover"
              alt=""
            />
            <div className="p-6">
              <h3 className="text-xl font-medium">Webinars and videos</h3>
              <p className="mt-3 text-slate-600">
                Join live webinars or watch on-demand sessions.
              </p>
              <a className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
                Browse webinars <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =================== certification ================== */}

<section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-light text-slate-900 leading-snug">
            Cisco certifications: Your gateway <br />
            to IT excellence
          </h2>

          <p className="mt-6 text-slate-600 max-w-xl">
            Align yourself with the best of the best. Cisco certifications are
            the recognized gold standard with more than four million
            certifications issued to date. They bring significant value to
            individuals and the organizations that employ them—and employers
            know it. Grow your skill set and career with Cisco.
          </p>

          <button className="mt-10 inline-flex items-center rounded-full border border-blue-600 px-8 py-3 text-blue-600 font-medium hover:bg-blue-50 transition">
            Explore Cisco certifications
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Cisco certifications"
            className="w-full h-[360px] object-cover rounded-xl"
          />
        </div>

      </div>
    </section>

      {/* =================Popular Ways to Learn========= */}

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light text-center mb-16">
            Popular ways to learn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <span className="text-sm uppercase text-slate-500">Learning</span>
              <h3 className="text-xl font-medium mt-2">
                Cisco Networking Academy
              </h3>
              <p className="mt-3 text-slate-600">
                Build foundational skills with free, career-focused learning.
              </p>
              <a className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:underline">
                Explore Networking Academy <FiArrowRight />
              </a>
            </div>

            <div>
              <span className="text-sm uppercase text-slate-500">Learning</span>
              <h3 className="text-xl font-medium mt-2">Cisco U.</h3>
              <p className="mt-3 text-slate-600">
                Personalized learning experiences aligned to your goals.
              </p>
              <a className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:underline">
                Discover Cisco U. <FiArrowRight />
              </a>
            </div>

            <div>
              <span className="text-sm uppercase text-slate-500">Event</span>
              <h3 className="text-xl font-medium mt-2">Cisco Live</h3>
              <p className="mt-3 text-slate-600">
                Learn and get inspired through live and on-demand experiences.
              </p>
              <a className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:underline">
                Explore Cisco Live <FiArrowRight />
              </a>
            </div>

            <div>
              <span className="text-sm uppercase text-slate-500">Webinar</span>
              <h3 className="text-xl font-medium mt-2">
                AI-Ready Blueprint Webinar
              </h3>
              <p className="mt-3 text-slate-600">
                Learn how AI is reshaping enterprise networks.
              </p>
              <a className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:underline">
                Watch webinar <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========  Technology Learning Topics ================ */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4">
            Technology learning topics
          </h2>

          <p className="text-slate-600 mb-10">
            Learn about the topics that interest you most.
          </p>

          <div className="border-t">
            {topics.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-5 border-b cursor-pointer hover:bg-slate-50 px-2"
              >
                <span className="text-lg">{item}</span>
                <FiChevronDown className="text-slate-500" />
              </div>
            ))}
          </div>

          <button className="mt-10 rounded-full bg-blue-600 px-8 py-3 text-white font-medium hover:bg-blue-700 transition">
            See all technology learning topics
          </button>
        </div>
      </section>
      {/* =====================================================
         RESOURCES
      ====================================================== */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-16">
            Additional learning resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-xl font-medium mb-4">
                Learning with AekSec{" "}
              </h3>

              <ul className="space-y-3 text-blue-600">
                <li>AekSec certifications</li>
                <li>AekSec exams</li>
                <li>AekSec training</li>
                <li>AekSec learning subscriptions</li>
                <li>Learning support</li>
                <li>AekSec learning resources</li>
                <li>All training and certification</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Events</h3>
              <ul className="space-y-3 text-blue-600">
                <li>Events calander</li>
                <li>Partners events</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Webinar and Videos</h3>
              <ul className="space-y-3 text-blue-600">
                <li>AekSec Video portal</li>
                <li>Global Webinar</li>
                <li>Influencer & Support Events</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">News and insights</h3>
              <ul className="space-y-3 text-blue-600">
                <li>AekSec Blogs</li>
                <li>AekSec Newsroom</li>
                <li>AekSec Research</li>
                <li>AekSec Talos Blogs</li>
                <li>Outshift by AekSec Research</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">
                Architecture, design, and developer resources
              </h3>
              <ul className="space-y-3 text-blue-600">
                <li>AekSec Insider</li>
                <li>AekSec Validated</li>
                <li>Devnet</li>
                <li>Packet Tracer</li>
                <li>Visio stencile</li>
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
          <h2 className="text-4xl font-light">Ask the community</h2>

          <div>
            <h3 className="text-xl font-medium">Connect with Cisco</h3>
            <p className="mt-2 text-white/80">
              We're here to help you make informed decisions every step of the
              way.
            </p>
            <a className="mt-4 inline-block text-blue-400 hover:underline">
              Join the conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
