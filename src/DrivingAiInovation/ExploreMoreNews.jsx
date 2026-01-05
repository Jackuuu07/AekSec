import {
  FiArrowRight,
  FiPlayCircle,
  FiTrendingUp,
  FiCalendar,
  FiCpu,
  FiShield,
} from "react-icons/fi";
import Navbar  from "../components/Navbar";
import Footer from "../components/Footer";
export default function ExploreMoreAINews() {
  return (
    <>
        <Navbar/>

      
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="bg-[#071B33] py-28">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h1 className="text-5xl font-light text-white mb-6">
              Explore more AI news
            </h1>
            <p className="text-gray-300 max-w-xl leading-relaxed mb-10">
              Discover the latest insights, innovations, and expert perspectives
              shaping the future of enterprise AI, infrastructure, and security.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full font-medium flex items-center gap-2">
              Browse latest stories <FiArrowRight />
            </button>
          </div>

          <div>
            <img
              src="https://www.cisco.com/content/dam/cisco-cdc/site/images/poster-image/solutions/Artificial-Intelligence/ai-jeetu-ai4-2025-video-656x369.jpg"
              alt="AI News"
              className="rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ================= FEATURED NEWS ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-light mb-16">
            Featured AI stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {[
              {
                title: "AI Infrastructure at Enterprise Scale",
                desc: "How modern AI data centers are being designed for performance, security, and sustainability.",
                img: "https://www.cisco.com/c/dam/assets/swa/img/anchor-info/ai-infrastructure.jpg",
                tag: "Infrastructure",
              },
              {
                title: "Securing the AI Lifecycle",
                desc: "Why AI-native security is essential for protecting models, data, and pipelines.",
                img: "https://www.cisco.com/c/dam/assets/swa/img/anchor-info/ai-security.jpg",
                tag: "Security",
              },
              {
                title: "From AI Strategy to Execution",
                desc: "Lessons learned from enterprises deploying AI across industries.",
                img: "https://www.cisco.com/c/dam/assets/swa/img/anchor-info/ai-strategy.jpg",
                tag: "Leadership",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-8">
                  <span className="text-blue-600 text-sm font-medium">
                    {item.tag}
                  </span>

                  <h3 className="font-semibold text-lg mt-3 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6">
                    {item.desc}
                  </p>

                  <a className="text-blue-600 font-medium flex items-center gap-1 hover:underline cursor-pointer">
                    Read more <FiArrowRight />
                  </a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= VIDEO FEATURE ================= */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-light mb-6">
              Watch: AI insights from industry leaders
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Hear from experts as they discuss how AI is transforming
              industries, redefining infrastructure, and accelerating innovation.
            </p>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2">
              Watch now <FiPlayCircle size={20} />
            </button>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-72 object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= TRENDING TOPICS ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-light mb-16">
            Trending AI topics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {[
              { icon: <FiTrendingUp />, title: "Agentic AI" },
              { icon: <FiCpu />, title: "AI Infrastructure" },
              { icon: <FiShield />, title: "AI Security" },
              { icon: <FiCalendar />, title: "AI Events & Summits" },
            ].map((topic, idx) => (
              <div
                key={idx}
                className="border rounded-xl p-8 hover:border-blue-600 transition cursor-pointer"
              >
                <div className="text-blue-600 mb-4 text-2xl">
                  {topic.icon}
                </div>
                <h3 className="font-semibold">
                  {topic.title}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#071B33] py-24">
        <div className="text-center px-8">
          <h2 className="text-4xl font-light text-white mb-6">
            Stay ahead in the AI era
          </h2>
          <p className="text-gray-300 mb-10">
            Subscribe for the latest AI insights, research, and announcements.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-4 rounded-full font-medium">
            Subscribe to AI updates
          </button>
        </div>
      </section>

    </div>

      <Footer/>
    </>
  );
}
