import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiDownload, FiLock, FiShield, FiCpu, FiCloud, FiUsers, FiCode, FiDatabase, FiMonitor, FiMenu, FiX, FiSearch } from "react-icons/fi";

export default function Downloads() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("AI-Powered Security Suite");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Enhanced security-focused categories
  const categories = [
    "AI-Powered Security Suite",
    "Zero Trust Network Access",
    "Cloud Security Platform",
    "SIEM & Threat Intelligence",
    "Endpoint Protection",
    "Network Firewall Solutions",
    "Vulnerability Management",
    "Data Loss Prevention",
    "Identity & Access Management",
    "Security Orchestration",
    "Analytics and Automation Software",
    "Cloud and Systems Management",
    "Connected Safety and Security",
  ];

  // Download data for each category
  const downloadData = {
    "AI-Powered Security Suite": [
      { name: "KalpShield AI v4.2", version: "4.2.1", size: "2.4 GB", type: "Enterprise", icon: <FiShield />, protected: true },
      { name: "ThreatPredict ML Engine", version: "3.1.0", size: "1.8 GB", type: "AI Module", icon: <FiCpu />, protected: true },
      { name: "Behavioral Analytics Suite", version: "2.7.3", size: "1.2 GB", type: "Analytics", icon: <FiDatabase />, protected: false },
    ],
    "Zero Trust Network Access": [
      { name: "ZTNA Gateway v3.5", version: "3.5.2", size: "850 MB", type: "Core", icon: <FiLock />, protected: true },
      { name: "Micro-Segmentation Module", version: "2.1.4", size: "420 MB", type: "Add-on", icon: <FiUsers />, protected: true },
    ],
    "Cloud Security Platform": [
      { name: "CloudGuard CSPM", version: "5.0.1", size: "1.5 GB", type: "Cloud", icon: <FiCloud />, protected: true },
      { name: "Container Security Scanner", version: "2.4.0", size: "780 MB", type: "Container", icon: <FiCode />, protected: false },
    ],
    "SIEM & Threat Intelligence": [
      { name: "Security Analytics Platform", version: "7.2.0", size: "3.2 GB", type: "Enterprise", icon: <FiMonitor />, protected: true },
      { name: "Threat Intelligence Feed", version: "2024.11", size: "650 MB", type: "Data", icon: <FiDatabase />, protected: false },
    ],
    "Endpoint Protection": [
      { name: "Endpoint Sentinel v2.8", version: "2.8.3", size: "1.1 GB", type: "Enterprise", icon: <FiCpu />, protected: true },
    ],
  };

  // Security advisories
  const securityAdvisories = [
    { id: 1, title: "Critical: Log4Shell Patch Update", date: "2024-11-15", severity: "Critical" },
    { id: 2, title: "Zero-Day Vulnerability in Web Interface", date: "2024-11-10", severity: "High" },
    { id: 3, title: "Security Enhancement: TLS 1.3 Support", date: "2024-11-05", severity: "Medium" },
    { id: 4, title: "Quarterly Security Updates", date: "2024-11-01", severity: "Important" },
  ];

  // Popular downloads
  const popularDownloads = [
    { name: "KalpShield AI v4.2", downloads: "45,823", category: "AI Security" },
    { name: "ZTNA Gateway v3.5", downloads: "38,456", category: "Network Security" },
    { name: "CloudGuard CSPM", downloads: "32,189", category: "Cloud Security" },
    { name: "Endpoint Sentinel v2.8", downloads: "29,745", category: "Endpoint Protection" },
    { name: "Threat Intelligence Hub", downloads: "25,632", category: "Threat Intel" },
  ];

  return (
    <>
      <div className="bg-white text-gray-800">
        {/* ================= SECTION 1 ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 border-b">
          {/* PAGE HEADING */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-8 sm:mb-12">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-light">
                Security <span className="font-normal">Software Downloads</span>
              </h1>
              <p className="text-gray-600 mt-2 sm:mt-3 max-w-3xl text-sm sm:text-base">
                Access the latest security software, patches, and updates from KalpTech Security. 
                All downloads are digitally signed and verified for authenticity.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-100 text-green-800 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap">
                🔒 All Downloads Signed
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap">
                SHA-256 Verified
              </span>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
            {/* LEFT (WIDE) */}
            <div className="lg:col-span-2">
              <div className="border rounded-lg p-6 sm:p-8 lg:p-12 text-center bg-gradient-to-br from-gray-50 to-white">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FiShield className="text-blue-600 text-2xl sm:text-3xl" />
                </div>
                <h2 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">
                  Secure Access to Downloads
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base">
                  Login with your KalpTech Security account to access your download history, 
                  licensed software, and security patches.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={() => navigate("/login")}
                    className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition font-medium text-sm sm:text-base"
                  >
                    LOG IN NOW
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition text-sm sm:text-base"
                  >
                    CREATE ACCOUNT
                  </button>
                </div>
              </div>

              {/* Security Advisories */}
              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 flex items-center gap-2">
                  <FiShield className="text-red-500" />
                  Security Advisories
                </h3>
                <div className="border rounded-lg overflow-hidden">
                  {securityAdvisories.map((advisory) => (
                    <div key={advisory.id} className="border-b last:border-b-0">
                      <div className="p-4 hover:bg-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                            <span className={`px-2 py-1 text-xs font-medium rounded
                              ${advisory.severity === 'Critical' ? 'bg-red-100 text-red-800' : ''}
                              ${advisory.severity === 'High' ? 'bg-orange-100 text-orange-800' : ''}
                              ${advisory.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' : ''}
                              ${advisory.severity === 'Important' ? 'bg-blue-100 text-blue-800' : ''}
                            `}>
                              {advisory.severity}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-500">{advisory.date}</span>
                          </div>
                          <p className="font-medium text-sm sm:text-base">{advisory.title}</p>
                        </div>
                        <button className="text-blue-600 hover:underline text-sm sm:text-base whitespace-nowrap mt-2 sm:mt-0">
                          Download Patch
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT (NARROW) */}
            <aside className="space-y-6 sm:space-y-8">
              {/* Most Popular */}
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl border">
                <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6 flex items-center gap-2">
                  <FiDownload />
                  Most Popular Downloads
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {popularDownloads.map((item, index) => (
                    <div key={index} className="pb-3 sm:pb-4 border-b last:border-b-0 last:pb-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-1">
                        <p className="font-medium text-sm sm:text-base truncate">{item.name}</p>
                        <span className="text-xs sm:text-sm text-gray-500">{item.downloads}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">{item.category}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-blue-50 p-6 sm:p-8 rounded-xl border border-blue-100">
                <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Quick Links</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <button 
                      onClick={() => navigate("/certifications")}
                      className="text-blue-600 hover:underline flex items-center gap-2 text-sm sm:text-base"
                    >
                      <FiShield />
                      Security Certifications
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigate("/Training")}
                      className="text-blue-600 hover:underline flex items-center gap-2 text-sm sm:text-base"
                    >
                      <FiUsers />
                      Security Training
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigate("/Support")}
                      className="text-blue-600 hover:underline flex items-center gap-2 text-sm sm:text-base"
                    >
                      <FiMonitor />
                      Technical Support
                    </button>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* ================= SECTION 2 ================= */}
        <section className="bg-gradient-to-b from-gray-50 to-white">
          {/* TOP BAR */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-4 sm:py-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                  <FiShield className="text-white text-xl sm:text-2xl" />
                  <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-light">
                    Security Product Downloads
                  </h2>
                </div>

                <div className="flex-1 w-full sm:max-w-2xl">
                  <div className="relative">
                    <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70" />
                    <input
                      type="text"
                      placeholder="Search security products..."
                      className="w-full pl-10 pr-4 py-2.5 sm:px-5 sm:py-3 rounded-full outline-none bg-white/20 text-white placeholder-white/70 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <button 
                  onClick={() => navigate("/products/product-service")}
                  className="w-full sm:w-auto border border-white text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-white hover:text-blue-700 transition font-medium text-sm sm:text-base whitespace-nowrap"
                >
                  Browse all products
                </button>
              </div>
            </div>
          </div>

          {/* BREADCRUMB */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="text-xs sm:text-sm text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg sm:rounded-b-xl p-3 sm:p-4">
              <span className="text-blue-600 cursor-pointer hover:underline">Downloads Home</span>
              <span className="mx-2">/</span>
              <span className="font-medium truncate">{activeCategory}</span>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20 pt-4 sm:pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Mobile Category Toggle */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="w-full flex items-center justify-between p-4 bg-blue-600 text-white rounded-lg"
                >
                  <span className="font-medium">Browse Categories</span>
                  {mobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
                
                {mobileMenuOpen && (
                  <div className="mt-2 border rounded-xl bg-white shadow-sm max-h-80 overflow-y-auto">
                    <div className="p-4 border-b bg-gray-50">
                      <h3 className="font-medium">Security Categories</h3>
                      <p className="text-sm text-gray-600">Select a category</p>
                    </div>
                    <div>
                      {categories.map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            setActiveCategory(item);
                            setMobileMenuOpen(false);
                          }}
                          className={`px-4 py-3 cursor-pointer border-b last:border-b-0 transition-all
                            ${activeCategory === item
                              ? "bg-blue-50 border-l-4 border-l-blue-600"
                              : "hover:bg-gray-50"
                            }
                          `}
                        >
                          <div className="flex items-center justify-between">
                            <span className={`font-medium text-sm ${activeCategory === item ? 'text-blue-700' : 'text-gray-800'}`}>
                              {item}
                            </span>
                            {downloadData[item] && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {downloadData[item].length} files
                              </span>
                            )}
                          </div>
                          {downloadData[item] && (
                            <p className="text-xs text-gray-500 mt-1 truncate">
                              Latest: {downloadData[item][0].name}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* LEFT LIST - Desktop */}
              <div className="hidden lg:block border rounded-xl bg-white shadow-sm">
                <div className="p-4 border-b bg-gray-50">
                  <h3 className="font-medium text-lg">Security Categories</h3>
                  <p className="text-sm text-gray-600">Select a category to view downloads</p>
                </div>
                <div className="max-h-[500px] overflow-y-auto">
                  {categories.map((item) => (
                    <div
                      key={item}
                      onClick={() => setActiveCategory(item)}
                      className={`px-6 py-4 cursor-pointer border-b last:border-b-0 transition-all
                        ${
                          activeCategory === item
                            ? "bg-blue-50 border-l-4 border-l-blue-600"
                            : "hover:bg-gray-50"
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${activeCategory === item ? 'text-blue-700' : 'text-gray-800'}`}>
                          {item}
                        </span>
                        {downloadData[item] && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {downloadData[item].length} files
                          </span>
                        )}
                      </div>
                      {downloadData[item] && (
                        <p className="text-sm text-gray-500 mt-1">
                          Latest: {downloadData[item][0].name}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* MIDDLE PANEL (DYNAMIC) */}
              <div className="lg:col-span-2 space-y-6">
                {/* Category Header */}
                <div className="bg-white border rounded-xl p-4 sm:p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-medium">{activeCategory}</h3>
                      <p className="text-gray-600 mt-1 text-sm sm:text-base">
                        Download the latest security software, updates, and patches
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 sm:px-3 sm:py-1 bg-green-100 text-green-800 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap">
                        Verified
                      </span>
                      <span className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap">
                        Updated Weekly
                      </span>
                    </div>
                  </div>

                  {/* Download List */}
                  {downloadData[activeCategory] ? (
                    <div className="space-y-4">
                      {downloadData[activeCategory].map((file, index) => (
                        <div key={index} className="border rounded-lg p-4 sm:p-5 hover:shadow-md transition">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-0">
                            <div className="flex items-start gap-3 sm:gap-4">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                <div className="text-blue-600 text-lg sm:text-xl">
                                  {file.icon}
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 sm:gap-3 mb-1">
                                  <h4 className="font-medium text-base sm:text-lg">{file.name}</h4>
                                  {file.protected && (
                                    <FiLock className="text-gray-400 flex-shrink-0" title="License required" />
                                  )}
                                </div>
                                <div className="flex flex-wrap items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-600">
                                  <span>Version: {file.version}</span>
                                  <span>Size: {file.size}</span>
                                  <span className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-100 rounded-full">
                                    {file.type}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button className="mt-3 sm:mt-0 px-4 py-2 sm:px-5 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap">
                              <FiDownload />
                              Download
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-blue-200 rounded-xl p-6 sm:p-8 lg:p-12 text-center bg-blue-50">
                      <FiCloud className="text-4xl sm:text-5xl text-blue-300 mx-auto mb-3 sm:mb-4" />
                      <h4 className="text-lg sm:text-xl font-medium text-gray-700 mb-2">No downloads available</h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Downloads for this category will be available soon. Check back later or contact support.
                      </p>
                    </div>
                  )}
                </div>

                {/* Additional Info */}
                <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl p-4 sm:p-6">
                  <h4 className="font-medium text-lg mb-3">📋 Download Instructions</h4>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      All downloads are digitally signed with SHA-256 encryption
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      Verify checksums before installation for security
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      Contact support if you encounter any verification issues
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      Always download from official KalpTech sources only
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BOTTOM CTA ================= */}
        <section className="bg-gray-900 text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6">
              Need Enterprise Security Solutions?
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
              Contact our security experts for customized solutions, bulk licensing, 
              and enterprise deployment assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button 
                onClick={() => navigate("/contact")}
                className="px-6 py-2.5 sm:px-8 sm:py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-medium transition text-sm sm:text-base"
              >
                Contact Sales
              </button>
              <button 
                onClick={() => navigate("/Support")}
                className="px-6 py-2.5 sm:px-8 sm:py-3 border border-white hover:bg-white/10 rounded-full font-medium transition text-sm sm:text-base"
              >
                Technical Support
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}