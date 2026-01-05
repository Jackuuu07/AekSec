import { useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function ImageTextSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* ===== Heading ===== */}
        <h2 className="text-4xl font-light/200 mb-16 text-black">
          Driving AI innovation
        </h2>

        {/* ===== Cards Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/homepage/ai-canvas-demo-800x450.jpg"
              alt="AI Canvas"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Announcing AekSec AI Canvas
              </h3>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Watch how AI Canvas brings real-time telemetry, AI insights, and
                team collaboration into a single shared workspace.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => navigate("/AekSec-canvas")}
                  className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline cursor-pointer"
                >
                  Watch AI Canvas demo <FiChevronRight />
                </button>

                <button
                  onClick={() => navigate("/AiCanvaslearning-inside")}
                  className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline cursor-pointer"
                >
                  Learn about our AI approach <FiChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/homepage/ai-defense-ui-800x450.jpg"
              alt="AI Defense"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">AekSec AI Defense</h3>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Secure your organization’s AI development and usage with
                visibility, guardrails, and live threat intelligence.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => navigate("/products/ai-defense")}
                  className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline cursor-pointer"
                >
                  Learn about AI Defense <FiChevronRight />
                </button>

                <button onClick={() => navigate('report/StateofSecurity-report')}className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline cursor-pointer">
                  Request a demo <FiChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/homepage/cisco-nvidia-800x450.jpg"
              alt="Secure AI Factory"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Secure AI Factory with NVIDIA
              </h3>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                From AI PODs to fully managed AI stacks, see how AekSec
                accelerates enterprise AI adoption.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => navigate("/AekSec-SecureAiFactory")}
                  className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline cursor-pointer"
                >
                  Explore Secure AI Factory <FiChevronRight />
                </button>

                <button
                  onClick={() => navigate("/SecureAi-inside")}
                  className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline cursor-pointer"
                >
                  Learn about AI infrastructure <FiChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/homepage/mass-scale-ai-800x450.jpg"
              alt="AI Infrastructure"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Mass-scale AI infrastructure
              </h3>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Unlock scalable, high-performance AI with our portfolio of
                advanced AI infrastructure solutions.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => navigate("/AekSec-infrastructure")}
                  className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline cursor-pointer"
                >
                  Explore advanced AI portfolio <FiChevronRight />
                </button>

                <button
                  onClick={() => navigate("/AekSec-infrastructure")}
                  className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline cursor-pointer"
                >
                  Learn about AekSec Silicon One <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Bottom CTAs ===== */}
        <div className="mt-16 flex items-center justify-center gap-8">
          <button
            onClick={() => navigate("/Exploremoreai-news")}
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Explore more AI news
          </button>

          <button
            onClick={() => navigate("/why/whyAekSec")}
            className="flex items-center gap-1 text-blue-600 font-medium hover:underline"
          >
            Why AekSec for the AI era <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
