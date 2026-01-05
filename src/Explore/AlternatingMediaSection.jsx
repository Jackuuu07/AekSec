export default function AlternatingMediaSections() {
  return (
    <section className="bg-slate-100 py-24 space-y-32">

      {/* COMMON IMAGE CLASSES */}
      {/* w-full h-[360px] object-cover rounded-xl block */}

      {/* SECTION 1 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <img
          src="https://www.cisco.com/content/dam/cisco-cdc/site/images/poster-image/solutions/Artificial-Intelligence/ai-jeetu-ai4-2025-video-656x369.jpg"
          alt="AI Event"
          className="w-full h-[360px] object-cover  block"
        />

        <div className="max-w-xl">
          <h2 className="text-4xl font-light text-slate-900">
            Explore the vision for the agentic AI era
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            Learn how autonomous AI agents are reshaping the future of business
            and the leadership mindset required to succeed in this new era.
          </p>

          <button className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-7 py-3 text-white font-medium hover:bg-blue-700 transition">
            Watch fireside chat
          </button>
        </div>
      </div>

      {/* SECTION 2 (REVERSED) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="max-w-xl">
          <h2 className="text-4xl font-light text-slate-900">
            Unified AI data center networks
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            Experience fast, secure, end-to-end connectivity built to power
            next-generation AI workloads at massive scale.
          </p>

          <button className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-7 py-3 text-white font-medium hover:bg-blue-700 transition">
            Learn more
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Data Center"
          className="w-full h-[360px] object-cover  block"
        />
      </div>

      {/* SECTION 3 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240912175245/What-Is-Edge-AI.webp"
          alt="AI Security"
          className="w-full h-[360px] object-cover block"
        />

        <div className="max-w-xl">
          <h2 className="text-4xl font-light text-slate-900">
            Secure AI from core to edge
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            Protect AI workloads, infrastructure, and data with end-to-end
            visibility and built-in security.
          </p>

          <button className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-7 py-3 text-white font-medium hover:bg-blue-700 transition">
            Explore security
          </button>
        </div>
      </div>

      {/* SECTION 4 (REVERSED) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="max-w-xl">
          <h2 className="text-4xl font-light text-slate-900">
            AI-powered observability
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            Gain real-time insights across your AI stack to ensure reliability,
            performance, and operational excellence.
          </p>

          <button className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-7 py-3 text-white font-medium hover:bg-blue-700 transition">
            View capabilities
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Observability"
          className="w-full h-[360px] object-cover  block"
        />
      </div>

    </section>
  );
}
