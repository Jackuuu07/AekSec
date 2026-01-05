import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Support() {
  const [openSupport, setOpenSupport] = useState(null);

  const toggle = (key) => {
    setOpenSupport(openSupport === key ? null : key);
  };

  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">
        {/* ================= HEADER ================= */}
        <section className="max-w-7xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-light mb-10">Support & Downloads</h1>

          <div className="text-center">
            <h2 className="text-2xl font-light mb-6">
              Find Products and Downloads
            </h2>
            <input
              type="text"
              placeholder="Enter a product name"
              className="w-full max-w-2xl mx-auto px-6 py-3 rounded-full border outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>

        {/* ================= MAIN GRID ================= */}
        <section className="max-w-7xl mx-auto px-8 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* ================= LEFT: PRODUCTS ================= */}
          <div>
            <h3 className="text-xl font-medium mb-4 border-b pb-2">
              Products by Category
            </h3>

            <div className="space-y-2">
              {[
                "Switches",
                "Security",
                "Routers",
                "Wireless",
                "Unified Communications",
                "Networking Software (OS & NX-OS)",
                "Collaboration Endpoints and Phones",
              ].map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 border rounded hover:bg-gray-50 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-block mt-4 text-blue-600 hover:underline text-sm"
            >
              All Supported Products
            </a>
          </div>

          {/* ================= MIDDLE: COMMUNITY & LICENSES ================= */}
          <div>
            <h3 className="text-xl font-medium mb-4 border-b pb-2">
              AekSec Communities
            </h3>

            <ul className="space-y-3 text-blue-600 text-sm mb-10">
              <li className="hover:underline cursor-pointer">
                AekSec Community Home
              </li>
              <li className="hover:underline cursor-pointer">
                Partner Community
              </li>
              <li className="hover:underline cursor-pointer">
                Small Business Support Community
              </li>
              <li className="hover:underline cursor-pointer">
                Collaboration Community
              </li>
              <li className="hover:underline cursor-pointer">
                Insider User Group
              </li>
            </ul>

            <h3 className="text-xl font-medium mb-4 border-b pb-2">Licenses</h3>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium">Traditional Licensing 🔒</p>
                <p className="text-gray-600">
                  Generate and manage device-based licenses, including demo
                  licenses.
                </p>
              </div>

              <div>
                <p className="font-medium">Smart Software Licensing</p>
                <p className="text-gray-600">
                  Track and manage Smart Software Licenses.
                </p>
              </div>

              <div>
                <p className="font-medium">Enterprise Agreements 🔒</p>
                <p className="text-gray-600">
                  Generate and manage licenses through enterprise agreements.
                </p>
              </div>

              <a href="#" className="text-blue-600 hover:underline">
                Licensing Support
              </a>
            </div>
          </div>

          {/* ================= RIGHT: MY SUPPORT ================= */}
          <div>
            <h3 className="text-xl font-medium mb-4 border-b pb-2">
              My Support
            </h3>

            {[
              "View Open Cases",
              "Software Downloads",
              "Recently Viewed Products",
              "My Saved Content",
            ].map((item) => (
              <div key={item} className="border-b">
                <button
                  onClick={() => toggle(item)}
                  className="w-full flex justify-between items-center py-3 text-sm"
                >
                  {item}
                  <span>{openSupport === item ? "−" : "+"}</span>
                </button>
              </div>
            ))}

            <button className="mt-4 text-blue-600 text-sm hover:underline">
              Feedback
            </button>

            {/* ================= MY DEVICES ================= */}
            <h3 className="text-xl font-medium mt-10 mb-4 border-b pb-2">
              My Devices
            </h3>

            <p className="text-sm mb-4">
              <a href="#" className="text-blue-600 hover:underline">
                Log in
              </a>{" "}
              to view or manage your device inventory
            </p>

            {/* ================= CONTACT ================= */}
            <h3 className="text-xl font-medium mt-10 mb-4 border-b pb-2">
              Contact Support
            </h3>

            <div className="text-sm space-y-4">
              <div>
                <p className="font-medium">Enterprise & Service Providers</p>
                <p className="text-gray-600">India: 000 800 100 1364</p>
                <p className="text-blue-600 hover:underline cursor-pointer">
                  Worldwide Phone Numbers
                </p>
              </div>

              <div>
                <p className="font-medium">Small Business Products</p>
                <p className="text-gray-600">India: 000 800 040 1521</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
