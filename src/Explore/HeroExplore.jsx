import { useState, useEffect } from "react";

export default function HeroExplore() {
  const [open, setOpen] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#07182d] text-white">
      {/* Decorative wave background */}
      <div
        className="absolute inset-0 bg-cover bg-top opacity-90"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/010/568/318/original/ai-artificial-intelligence-wave-lines-neural-network-in-concept-of-technology-fiber-optics-lights-abstract-background-vector.jpg')",
        }}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07182d]/95 via-[#07182d]/90 to-[#07182d]/80" />

      {/* Content */}
      <div className="relative min-h-screen z-10 max-w-7xl mx-auto px-8 lg:px-16 h-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-xl">
              There’s no secure AI
              <br />
              without <span className="font-normal">AekSec</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/80 max-w-xl">
              Only AekSec can deliver robust infrastructure, security fused into
              the network, and unparalleled insights to power enterprise AI at
              scale.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                onClick={() => setOpen(true)}
                className="
                  bg-white text-black
                  px-7 py-3
                  rounded-full
                  font-medium
                  transition
                  hover:bg-gray-200
                "
              >
                Watch video (0:59)
              </button>

              {/* VIDEO MODAL */}
              {open && (
                <div
                  className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center"
                  onClick={() => setOpen(false)}
                >
                  {/* Prevent close on video click */}
                  <div
                    className="relative w-full max-w-4xl mx-4 aspect-video"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute -top-12 right-0 text-white text-3xl font-light hover:opacity-70"
                    >
                      ×
                    </button>

                    {/* Video */}
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/2ePf9rue1Ao?autoplay=1"
                      title="AI Video"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              <button
                className="
                  group
                  text-white font-medium
                  inline-flex items-center gap-2
                  hover:opacity-90
                "
              >
                Assess your AI readiness
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT LOGO / VISUAL */}
          <div className="hidden lg:flex justify-center">
            <div className="text-center">
              <div className="text-6xl font-semibold tracking-widest">
                AEKSEC
              </div>
              <div className="mt-4 h-1 w-24 bg-white mx-auto opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
