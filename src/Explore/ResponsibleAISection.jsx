export default function ResponsibleAISection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT – Illustration */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://applicat.com/assets/img/dynamic-routing-ro.png"
              alt="Responsible AI illustration"
              className="max-w-lg w-full"
            />
          </div>

          {/* RIGHT – Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
              AI that's as responsible as it is revolutionary
            </h2>

            <p className="mt-6 text-base md:text-lg text-slate-600">
              Responsible AI means getting one of the biggest advancements in
              technology right for our customers, our society, and our
              commitment to creating an inclusive future for all.
            </p>

            <button
              className="
                mt-10
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
              Explore AekSec's responsible AI
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
