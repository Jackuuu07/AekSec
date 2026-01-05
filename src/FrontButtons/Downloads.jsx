import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Downloads() {
    const navigate = useNavigate();
  const categories = [
    "Analytics and Automation Software",
    "Cisco Interfaces and Modules",
    "Cloud and Systems Management",
    "Collaboration Endpoints",
    "Conferencing",
    "Connected Safety and Security",
    "Contact Center",
    "Data Center Networking",
    "Hyperconverged Infrastructure",
    "IOS and NX-OS Software",
    "Optical Networking",
  ];

  const [activeCategory, setActiveCategory] = useState(
    "Analytics and Automation Software"
  );

  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">
        {/* ================= SECTION 1 (FIRST SCREENSHOT) ================= */}
       <section className="max-w-7xl mx-auto px-8 py-16 border-b">

  {/* PAGE HEADING */}
  <h1 className="text-4xl font-light mb-12">
    Software <span className="font-normal">Download</span>
  </h1>

  {/* MAIN CONTENT */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

    {/* LEFT (WIDE) */}
    <div className="lg:col-span-2">
      <div className="border rounded-lg p-16 text-center">
        <h2 className="text-2xl font-light mb-6">
          Login to view your download history
        </h2>

        <button onClick={() => navigate("/login")} className="px-10 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
          LOG IN NOW
        </button>
      </div>
    </div>

    {/* RIGHT (NARROW) */}
    <aside className="bg-gray-100 p-10 rounded">
      <h3 className="text-2xl font-light mb-4">Most Popular</h3>
      <p className="text-sm font-medium mb-3">
        Most Popular for Analytics and Automation Software
      </p>
      <ul className="text-blue-600 space-y-2 text-sm">
        <li className="cursor-pointer hover:underline">
          Tidal Agent for Unix 🔒
        </li>
        <li className="cursor-pointer hover:underline">
          Data Predict 🔒
        </li>
      </ul>
    </aside>

  </div>
</section>


        {/* ================= SECTION 2 (SECOND SCREENSHOT) ================= */}
        <section className="bg-gray-50">
          {/* TOP BAR */}
          <div className="bg-[#0076a8] py-4">
            <div className="max-w-7xl mx-auto px-8 flex items-center gap-6">
              <h2 className="text-white text-2xl font-light">
                Select a Product
              </h2>

              <input
                type="text"
                placeholder="🔍  Product Name e.g. 2911"
                className="flex-1 px-5 py-2 rounded-full outline-none"
              />

              <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#0076a8] transition">
                Browse all
              </button>
            </div>
          </div>

          {/* BREADCRUMB */}
          <div className="max-w-7xl mx-auto px-8 py-4 text-sm text-gray-600">
            Downloads Home / Analytics and Automation Software
          </div>

          {/* MAIN CONTENT */}
          <div className="max-w-7xl mx-auto px-8 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT LIST */}
            <div className="border rounded bg-white max-h-[420px] overflow-y-auto">
              {categories.map((item) => (
                <div
                  key={item}
                  onClick={() => setActiveCategory(item)}
                  className={`px-6 py-3 cursor-pointer text-sm border-b
                  ${
                    activeCategory === item
                      ? "bg-[#0076a8] text-white"
                      : "hover:bg-gray-100"
                  }
                `}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* MIDDLE PANEL (DYNAMIC) */}
            <div className="border-2 border-dashed border-blue-400 rounded bg-white flex items-center justify-center">
              <span className="text-lg text-gray-700">{activeCategory}</span>
            </div>

            {/* RIGHT EMPTY PANEL */}
            <div className="bg-gray-100 rounded" />
          </div>
        </section>

        {/* ================= SECTION 3 (FOOTER FROM SECOND SCREENSHOT) ================= */}
        <footer className="bg-[#003b5c] text-white text-sm">
          <div className="max-w-7xl mx-auto px-8 py-6 flex flex-wrap gap-6 justify-center">
            <span className="cursor-pointer hover:underline">Contacts</span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">Feedback</span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">Help</span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">Site Map</span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">
              Terms & Conditions
            </span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">
              Privacy Statement
            </span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">
              Cookie Policy
            </span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">Trademarks</span>
          </div>
        </footer>
      </div>

      <Footer />
    </>
  );
}
