import { useNavigate } from "react-router-dom";

export default function CiscoAIBlogsCTA() {
    const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-[#07182d] via-[#07182d] to-[#0b2447] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <h2 className="text-4xl md:text-5xl font-light text-white">
            AekSec AI blogs
          </h2>

          {/* RIGHT */}
          <div className="max-w-xl">
            <p className="text-base md:text-lg text-white/85 leading-relaxed">
              Learn how AekSec harnesses AI-powered capabilities across our
              entire product and customer service portfolio. And find out why
              AekSec is leading the industry with innovation that enables AI
              infrastructure.
            </p>

            <button
              onClick={() => navigate("/blog")}
              className="
                mt-8
                inline-flex items-center
                rounded-full
                bg-blue-600
                px-8 py-3
                text-white
                font-medium
                hover:bg-blue-700
                transition
              "
            >
              Read AI blogs
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
