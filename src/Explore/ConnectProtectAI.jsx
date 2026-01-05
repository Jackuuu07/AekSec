export default function ConnectProtectAI() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900">
            Connect and protect AI
          </h2>

          <p className="mt-6 text-base md:text-lg text-slate-600">
            AekSec provides the core building blocks, AI-native capabilities,
            and services to accelerate AI adoption and success.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-medium text-slate-900">
              AI Infrastructure
            </h3>
            <p className="mt-4 text-slate-600">
              Power AI at scale with robust, flexible, and secure infrastructure
              from the data center to the campus and branch.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-medium text-slate-900">
              Security for AI
            </h3>
            <p className="mt-4 text-slate-600">
              Secure the AI stack end-to-end, with unmatched visibility to
              protect AI infrastructure, workloads, and the safe use of AI.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-medium text-slate-900">
              Observability for AI
            </h3>
            <p className="mt-4 text-slate-600">
              Real-time visibility across the AI stack to maintain uptime and
              ensure reliable and optimized operations.
            </p>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Card 4 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-medium text-slate-900">
              AI-native Capabilities
            </h3>
            <p className="mt-4 text-slate-600">
              Drive operational simplicity and unlock deep insights with AI
              natively built into our products.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-medium text-slate-900">
              Services
            </h3>
            <p className="mt-4 text-slate-600">
              Accelerate time to value with trusted expertise, AI-driven
              support, and proactive, personalized services.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
    