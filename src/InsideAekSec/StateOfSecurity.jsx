import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function StateofSecurity() {
  return (
    <>
      <Navbar />
<section className="relative">
  {/* RIGHT SIDE BACKGROUND */}
  <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 bg-[#0b2a4a]" />

  <div className="relative max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16">
    {/* ================= LEFT CONTENT ================= */}
    <div className="mr-10">
      <p className="text-sm text-gray-500 mb-3">2025 Annual Report</p>

      <h1 className="text-5xl font-light mb-8 leading-tight">
        The State of AI <br /> Security
      </h1>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Artificial intelligence has emerged as one of the defining technologies
        of the 21st century, yet the AI threat landscape is novel, complex, and
        not effectively addressed by traditional cybersecurity solutions.
      </p>

      <p className="text-gray-700 mb-8 leading-relaxed">
        AekSec’s inaugural State of AI Security report provides a comprehensive
        overview of critical developments in AI security across threat
        intelligence, policy, and research—empowering organizations to manage
        risk while unlocking AI’s full potential.
      </p>

      <p className="font-medium mb-4">
        The State of AI Security report will cover:
      </p>

      <ul className="list-disc pl-6 space-y-4 text-gray-700">
        <li>
          Key developments in U.S. and global AI policy, including legislation,
          executive orders, partnership agreements, and emerging security
          frameworks.
        </li>
        <li>
          In-depth analysis of threats to AI infrastructure, supply chains, and
          applications—covering vectors such as model backdoors, prompt
          injection, and data leakage.
        </li>
      </ul>
    </div>

    {/* ================= RIGHT FORM ================= */}
    <div className="relative">
      <div className="bg-white border rounded-xl p-10 shadow-xl 
                      lg:-ml-24">
        <form className="space-y-6">
          {/* form fields unchanged */}

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email address *
                </label>
                <input
                  type="email"
                  className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    First name *
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Last name *
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Company *
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Country / Region *
                </label>
                <select className="w-full border rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Please Select</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Business phone *
                </label>
                <input
                  type="tel"
                  className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                AekSec may use your information to provide updates, offers, and
                product news. You may unsubscribe at any time. See our Privacy
                Statement for more information.
              </p>

              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <p className="text-sm">
                  Yes, I would like to be contacted by email.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition"
              >
                Download report
              </button>
            </form>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
