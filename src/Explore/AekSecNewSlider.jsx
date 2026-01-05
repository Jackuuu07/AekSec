import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    title: "How's your network doing?",
    desc: "Cloud LLMs and edge SLMs are happening now. Find out how they impact enterprise networks.",
    link: "Read blog",
  },
  {
    title: "AekSec Continues to Drive Innovation to Reimagine Security for the AI Era",
    desc: "RSA Conference Press Release",
    link: "Read press release",
  },
  {
    title: "AekSec and ServiceNow Partner to Simplify and Secure AI Adoption for Businesses at Scale",
    desc: "AekSec and ServiceNow Partner to Simplify and Secure AI Adoption for Businesses at Scale",
    link: "Read press release",
  },
  {
    title: "AekSec, NVIDIA accelerate AI infrastructure",
    desc: "Secure AI Factory with enterprise AI-ready networking.",
    link: "Read press release",
  },
  {
    title: "AI-ready networking platforms",
    desc: "Built to scale AI workloads securely and efficiently.",
    link: "Read blog",
  },
  {
    title: "Driving enterprise AI transformation",
    desc: "New innovations that power AI adoption across industries.",
    link: "Read press release",
  },
  {
    title: "Observability for AI workloads",
    desc: "Gain real-time insights across AI environments.",
    link: "Read blog",
  },
  {
    title: "Security built for AI era",
    desc: "Protect AI infrastructure end-to-end.",
    link: "Read press release",
  },
  {
    title: "AI-native operations",
    desc: "Unlock operational simplicity with AI-native tools.",
    link: "Read blog",
  },
  {
    title: "Future of AI networking",
    desc: "Preparing enterprises for next-gen AI workloads.",
    link: "Read press release",
  },
  {
    title: "AI-powered enterprise networks",
    desc: "Deliver performance, security, and scale.",
    link: "Read blog",
  },
  {
    title: "End-to-end AI security",
    desc: "From data center to edge.",
    link: "Read press release",
  },
];

const ITEMS_PER_SLIDE = 3;
const TOTAL_SLIDES = Math.ceil(slides.length / ITEMS_PER_SLIDE);

export default function AekSecNewsSlider() {
  const [active, setActive] = useState(0);

  const next = () => {
    if (active < TOTAL_SLIDES - 1) setActive(active + 1);
  };

  const prev = () => {
    if (active > 0) setActive(active - 1);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-light text-slate-900 max-w-3xl">
          Learn about the latest AekSec AI innovations and news
        </h2>

        {/* Slider */}
        <div className="relative mt-16 overflow-hidden">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            disabled={active === 0}
            className={`
              absolute left-0 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full
              flex items-center justify-center
              transition
              ${
                active === 0
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-black text-white hover:bg-slate-800"
              }
            `}
          >
            <FiChevronLeft size={22} />
          </button>

          {/* SLIDES */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >
            {Array.from({ length: TOTAL_SLIDES }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-12"
              >
                {slides
                  .slice(
                    slideIndex * ITEMS_PER_SLIDE,
                    slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
                  )
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="border-l border-slate-300 pl-8"
                    >
                      <h3 className="text-xl font-medium text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-slate-600">
                        {item.desc}
                      </p>

                      <button className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
                        {item.link}
                        <span>→</span>
                      </button>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            disabled={active === TOTAL_SLIDES - 1}
            className={`
              absolute right-0 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full
              flex items-center justify-center
              transition
              ${
                active === TOTAL_SLIDES - 1
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-black text-white hover:bg-slate-800"
              }
            `}
          >
            <FiChevronRight size={22} />
          </button>
        </div>

        {/* DOTS */}
        <div className="mt-10 flex justify-center gap-4">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === active ? "bg-blue-600" : "bg-slate-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
