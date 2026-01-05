import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Community() {
  /* ================= FEATURED CONTENT SLIDER ================= */
  const featured = [
    {
      title: "Community Manager reflections on a celebratory year!",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      views: 4576,
      comments: 18,
      likes: 15,
      date: "11-25-2025",
    },
    {
      title: "Meet Hideyuki Osaki – AekSec Expert Spotlight",
      img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
      views: 24552,
      comments: 2,
      likes: 6,
      date: "11-17-2025",
    },
    {
      title: "Celebrating 5 years of AekSec Community",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
      views: 64334,
      comments: 58,
      likes: 80,
      date: "01-24-2025",
    },
    {
      title: "Welcome to the AekSec Community – Getting Started",
      img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0",
      views: 3368,
      comments: 0,
      likes: 4,
      date: "08-28-2025",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const visibleSlides = featured.slice(slideIndex, slideIndex + 4);

  /* ================= COMMUNITY ACTIVITY ================= */
  const activities = [
    {
      title: "VTP Pruning",
      author: "parthrawat979",
      views: 499,
      replies: 21,
      likes: 0,
      category: "Switching",
      desc: "Can someone help me understand the concept of VTP pruning? In my topology SW1 is the server...",
    },
    {
      title: "FMC Summary Dashboard Network Widget Buffering",
      author: "farih-kurniawan",
      views: 20,
      replies: 0,
      likes: 0,
      category: "Security",
      desc: "Greetings everyone, I'm new with AekSec Firewall Management Center...",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Community"
            className="w-full h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
              Welcome to the Community!
            </h1>
            <p className="text-gray-200 max-w-3xl mb-8">
              A hub to connect with peers and AekSec specialists, ask questions,
              share expertise, and grow professionally.
            </p>

            <div className="w-full max-w-2xl bg-white rounded-full flex items-center px-6 py-3 shadow-lg">
              <input
                type="text"
                placeholder="Search AekSec Community – What are you looking for?"
                className="flex-1 outline-none"
              />
              <span className="text-gray-500">🔍</span>
            </div>

            <p className="text-white text-sm mt-4">16297 Online</p>
          </div>
        </section>

        {/* ================= SECTION 2: FEATURED CONTENT ================= */}
        <section className="max-w-7xl mx-auto px-8 py-24">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-light">Featured Content</h2>

            <div className="flex gap-3">
              <button
                onClick={() => setSlideIndex(Math.max(slideIndex - 1, 0))}
                className="w-10 h-10 border rounded-full hover:bg-gray-100"
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setSlideIndex(
                    slideIndex + 1 < featured.length - 3
                      ? slideIndex + 1
                      : slideIndex
                  )
                }
                className="w-10 h-10 border rounded-full hover:bg-gray-100"
              >
                ›
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {visibleSlides.map((item, i) => (
              <div
                key={i}
                className="border rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-blue-600 font-medium mb-4">
                    {item.title}
                  </h3>
                  <div className="text-sm text-gray-500 flex gap-4 mb-2">
                    <span>👁 {item.views}</span>
                    <span>💬 {item.comments}</span>
                    <span>👍 {item.likes}</span>
                  </div>
                  <p className="text-xs text-gray-400">on {item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 3: TRENDING TOPICS ================= */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-6">Trending Topics</h2>
              <p className="text-gray-600">
                AekSec Community is an active place to learn, collaborate, and
                discuss real-world cybersecurity challenges.
              </p>
            </div>

            <div className="space-y-6">
              {[
                "IP retrieval – SG350 28P",
                "Third-party SIP endpoint and abbreviated dialing",
                "Flexible NetFlow (FNF) with monitoring tools",
              ].map((topic, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-6 flex items-center gap-4 bg-white"
                >
                  <div className="w-10 h-10 bg-gray-200 rounded-full" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: COMMUNITY ACTIVITY ================= */}
        <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-light">Community Activity</h2>

              <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                Start a conversation
              </button>
            </div>

            {activities.map((item, i) => (
              <div key={i} className="border-b pb-10 mb-10">
                <h3 className="text-blue-600 text-lg font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4">{item.desc}</p>
                <div className="text-sm text-gray-500 flex gap-6">
                  <span>👁 {item.views}</span>
                  <span>💬 {item.replies}</span>
                  <span>👍 {item.likes}</span>
                  <span>Posted in {item.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-8">
            <div className="border rounded-xl p-6">
              <h4 className="font-medium mb-4">Learn, share, save</h4>
              <p className="text-sm text-gray-600 mb-4">
                Discover and save ideas. Come back to expert answers,
                step-by-step guides, and recent topics.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                Log in to Community →
              </a>
            </div>

            <div className="border rounded-xl p-6">
              <h4 className="font-medium mb-4">Top Solution Authors</h4>
              <p className="text-sm">balaji.bandi</p>
            </div>
          </aside>
        </section>
      </div>
      <Footer />
    </>
  );
}
