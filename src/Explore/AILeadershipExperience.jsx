export default function AILeadershipExperience() {
  return (
    <section className="bg-slate-200 py-24">
      <div className="max-w-7xl mx-auto px-1">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 text-center mb-16">
          Our leadership in AI comes with experience
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/solutions/artificial-intelligence/artifical-intelligence-hub-ai-ready-infrastructure-544x307.jpg"
              alt="AI Infrastructure"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h3 className="text-xl font-medium text-slate-900">
                AI-ready infrastructure
              </h3>

              <p className="mt-4 text-slate-600">
                Scale, simplify, and support sustainability with fully
                integrated systems to bring your network into the future.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                Explore AI-ready infrastructure
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/solutions/artificial-intelligence/artifical-intelligence-hub-ai-enabled-it-operations-544x307.jpg"
              alt="AI Operations"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h3 className="text-xl font-medium text-slate-900">
                AI-enabled network operations
              </h3>

              <p className="mt-4 text-slate-600">
                Simplify processes and optimize your IT resource use with AI
                technologies across your network operations.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                Explore AI-enabled network operations
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/solutions/artificial-intelligence/artifical-intelligence-hub-mosaic-assistant-544x307.jpg"
              alt="AI Security"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h3 className="text-xl font-medium text-slate-900">
                Secure AI at scale
              </h3>

              <p className="mt-4 text-slate-600">
                Protect AI workloads and infrastructure with built-in security
                and end-to-end visibility.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                Explore AI security
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
              alt="AI Observability"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h3 className="text-xl font-medium text-slate-900">
                AI-powered observability
              </h3>

              <p className="mt-4 text-slate-600">
                Gain real-time insights to ensure performance, reliability,
                and operational excellence across AI environments.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                Explore observability
                <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
