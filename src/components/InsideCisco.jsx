import  {useNavigate}  from "react-router-dom";

export default function InsideAekSec() {
  const navigate = useNavigate();

  return (
    <section className="px-10 py-20 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-light mb-12 text-gray-900">
          Inside AekSec
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Column 1 */}
          <div>
            <span className="text-xs font-semibold uppercase text-gray-500">
              Report
            </span>

            <h4 className="font-semibold text-lg mt-3 mb-3 text-gray-900">
              AekSec AI Readiness Report
            </h4>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Discover how enterprises are preparing for AI-driven security,
              and why proactive risk management is now a strategic priority.
            </p>

            <button className="text-blue-600 text-sm font-medium hover:underline cursor-pointer" onClick={() => navigate('/report/AiReadiness-report')}>
              Get the report →
            </button>
          </div>

          {/* Column 2 */}
          <div>
            <span className="text-xs font-semibold uppercase text-gray-500">
              Annual report
            </span>

            <h4 className="font-semibold text-lg mt-3 mb-3 text-gray-900">
              State of AI Security 2025
            </h4>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Key developments, trends, and predictions shaping AI security
              across global enterprises.
            </p>

            <button className="text-blue-600 text-sm font-medium hover:underline cursor-pointer" onClick={() => navigate('/report/StateofSecurity-report')}>
              Read the report →
            </button>
          </div>

          {/* Column 3 */}
          <div>
            <span className="text-xs font-semibold uppercase text-gray-500">
              Research study
            </span>

            <h4 className="font-semibold text-lg mt-3 mb-3 text-gray-900">
              Securing AI-powered infrastructure
            </h4>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Learn how modern security architectures protect critical
              infrastructure while enabling innovation at scale.
            </p>

            <button className="text-blue-600 text-sm font-medium hover:underline cursor-pointer" onClick={() => navigate('/report/SecuringAi-report')}>
              Get the AekSec InfoBrief →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
