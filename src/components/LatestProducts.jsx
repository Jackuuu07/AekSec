import AiDefence from "../assets/def_1.jpg";
import HyperSonic from "../assets/hyp_1.jpg";
import { Link } from "react-router-dom";

export default function LatestProducts() {
  
  return (
    <section className="px-10 py-16 bg-white">
      <h1 className="text-5xl text-center mb-14 font-light">
        The critical infrastructure for the AI era
      </h1>

      {/* Reduced width + centered */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto cursor-pointer">
        
        {/* ================= Product 1 ================= */}
        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition max-w-sm mx-auto">
          
          {/* Full width + height image (NO padding) */}
          <div className="w-full h-44 overflow-hidden rounded-t-2xl">
            <img
              src="https://tse3.mm.bing.net/th/id/OIF.urIezeV4i8Kvz1mXp6Ovtw?pid=Api&P=0&h=180"
              className="w-full h-full object-cover"
              alt="AekSec AI Platform"
            />
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">
              AekSec AI Platform
            </h3>

            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              A unified platform designed to build, deploy, and secure AI
              workloads at enterprise scale. Enables faster innovation with
              built-in governance, observability, and compliance.
            </p>

            <div className="flex flex-col gap-2 items-start">
              <Link
                to="/products/ai-platform"
                className="text-blue-600 font-medium text-sm hover:underline"
              >
                Explore →
              </Link>

              <Link
                to="/products/ai-platform"
                className="text-gray-500 text-sm hover:text-gray-700 transition"
              >
                View product details
              </Link>
            </div>
          </div>
        </div>

        {/* ================= Product 2 ================= */}
        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition max-w-sm mx-auto">
          <div className="w-full h-44 overflow-hidden rounded-t-2xl">
            <img
              src={AiDefence}
              className="w-full h-full object-cover"
              alt="AekSec AI Defense"
            />
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">
              AekSec AI Defense
            </h3>

            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              Advanced AI-native security solution that continuously monitors
              model behavior, data pipelines, and inference activity to detect
              threats before impact.
            </p>

            <div className="flex flex-col gap-2 items-start">
              <Link
                to="/products/ai-defense"
                className="text-blue-600 font-medium text-sm hover:underline"
              >
                Explore →
              </Link>

              <Link
                to="/products/ai-defense"
                className="text-gray-500 text-sm hover:text-gray-700 transition"
              >
                Read solution overview
              </Link>
            </div>
          </div>
        </div>

        {/* ================= Product 3 ================= */}
        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition max-w-sm mx-auto">
          <div className="w-full h-44 overflow-hidden rounded-t-2xl">
            <img
              src={HyperSonic}
              className="w-full h-full object-cover"
              alt="AekSec Nexus HyperFabric"
            />
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">
              AekSec Nexus HyperFabric
            </h3>

            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              Cloud-like networking fabric that simplifies data center
              operations, enabling high-performance AI traffic with zero
              manual complexity.
            </p>

            <div className="flex flex-col gap-2 items-start">
              <Link
                to="/products/hyperfabric"
                className="text-blue-600 font-medium text-sm hover:underline"
              >
                Explore →
              </Link>

              <Link
                to="/products/hyperfabric"
                className="text-gray-500 text-sm hover:text-gray-700 transition"
              >
                See architecture
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
