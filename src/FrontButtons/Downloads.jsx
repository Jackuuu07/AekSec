import { useState } from "react";
import { FiDownload, FiLock, FiShield, FiCpu, FiCloud, FiUsers, FiCode, FiDatabase, FiMonitor, FiMenu, FiX, FiSearch, FiCheckCircle, FiFileText, FiHash } from "react-icons/fi";

export default function Downloads() {
  const [activeCategory, setActiveCategory] = useState("AI-Powered Security Suite");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Security product categories
  const categories = [
    { name: "AI-Powered Security Suite", icon: <FiCpu />, color: "blue" },
    { name: "Zero Trust Network Access", icon: <FiLock />, color: "purple" },
    { name: "Cloud Security Platform", icon: <FiCloud />, color: "cyan" },
    { name: "SIEM & Threat Intelligence", icon: <FiDatabase />, color: "green" },
    { name: "Endpoint Protection", icon: <FiShield />, color: "red" },
    { name: "Network Firewall Solutions", icon: <FiMonitor />, color: "orange" },
    { name: "Vulnerability Management", icon: <FiCode />, color: "yellow" },
    { name: "Data Loss Prevention", icon: <FiFileText />, color: "indigo" },
  ];

  // Download data for each category
  const downloadData = {
    "AI-Powered Security Suite": [
      { 
        name: "KalpShield AI v4.2", 
        version: "4.2.1", 
        size: "2.4 GB", 
        type: "Enterprise Edition",
        releaseDate: "2024-11-28",
        checksum: "a1b2c3d4e5f6...",
        description: "AI-powered threat detection and response platform",
        requirements: "Windows Server 2019+, 16GB RAM, 100GB storage"
      },
      { 
        name: "ThreatPredict ML Engine", 
        version: "3.1.0", 
        size: "1.8 GB", 
        type: "AI Module",
        releaseDate: "2024-11-25",
        checksum: "b2c3d4e5f6g7...",
        description: "Machine learning engine for predictive threat analysis",
        requirements: "Requires KalpShield AI v4.0+"
      },
    ],
    "Zero Trust Network Access": [
      { 
        name: "ZTNA Gateway v3.5", 
        version: "3.5.2", 
        size: "850 MB", 
        type: "Core Platform",
        releaseDate: "2024-11-20",
        checksum: "c3d4e5f6g7h8...",
        description: "Zero Trust network access gateway with micro-segmentation",
        requirements: "Linux Ubuntu 20.04+, 8GB RAM, 50GB storage"
      },
    ],
    "Cloud Security Platform": [
      { 
        name: "CloudGuard CSPM", 
        version: "5.0.1", 
        size: "1.5 GB", 
        type: "Cloud Security",
        releaseDate: "2024-11-18",
        checksum: "d4e5f6g7h8i9...",
        description: "Cloud security posture management for multi-cloud environments",
        requirements: "Supports AWS, Azure, GCP"
      },
    ],
    "SIEM & Threat Intelligence": [
      { 
        name: "Security Analytics Platform", 
        version: "7.2.0", 
        size: "3.2 GB", 
        type: "Enterprise SIEM",
        releaseDate: "2024-11-15",
        checksum: "e5f6g7h8i9j0...",
        description: "Security information and event management with advanced analytics",
        requirements: "Windows/Linux, 32GB RAM, 500GB storage"
      },
    ],
    "Endpoint Protection": [
      { 
        name: "Endpoint Sentinel v2.8", 
        version: "2.8.3", 
        size: "1.1 GB", 
        type: "Enterprise Protection",
        releaseDate: "2024-11-10",
        checksum: "f6g7h8i9j0k1...",
        description: "Advanced endpoint protection with EDR capabilities",
        requirements: "Windows 10/11, macOS 11+, 4GB RAM"
      },
    ],
  };

  // Security patches
  const securityPatches = [
    { id: 1, name: "Log4Shell Security Patch", version: "2.1.3", severity: "Critical", date: "2024-11-28", size: "245 MB" },
    { id: 2, name: "TLS 1.3 Update", version: "1.0.5", severity: "High", date: "2024-11-25", size: "120 MB" },
    { id: 3, name: "Authentication Module Fix", version: "3.2.1", severity: "Medium", date: "2024-11-22", size: "85 MB" },
    { id: 4, name: "Performance Enhancement", version: "4.0.2", severity: "Low", date: "2024-11-20", size: "65 MB" },
  ];

  // Latest releases
  const latestReleases = [
    { name: "CloudGuard CSPM v5.0.1", date: "Today", category: "Cloud Security" },
    { name: "ZTNA Gateway v3.5.2", date: "2 days ago", category: "Network Security" },
    { name: "Endpoint Sentinel v2.8.3", date: "1 week ago", category: "Endpoint Protection" },
    { name: "SIEM Platform v7.2.0", date: "2 weeks ago", category: "Security Analytics" },
  ];

  // Filter downloads based on search
  const filteredDownloads = downloadData[activeCategory]?.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">
              Security Downloads
            </h1>
            <p className="text-gray-600">
              Access verified security software, patches, and updates
            </p>
          </div>

          <div className="relative max-w-2xl">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search downloads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Security Patches Section */}
      <section className="bg-red-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 mb-4">
            <FiShield className="text-red-600" />
            <h2 className="text-lg font-medium text-gray-900">Security Patches</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityPatches.map(patch => (
              <div key={patch.id} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded
                    ${patch.severity === 'Critical' ? 'bg-red-100 text-red-800' : ''}
                    ${patch.severity === 'High' ? 'bg-orange-100 text-orange-800' : ''}
                    ${patch.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${patch.severity === 'Low' ? 'bg-gray-100 text-gray-800' : ''}
                  `}>
                    {patch.severity}
                  </span>
                  <span className="text-xs text-gray-500">{patch.date}</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-1 text-sm">{patch.name}</h3>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>v{patch.version}</span>
                  <span>{patch.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Downloads Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            {/* Mobile Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-full flex items-center justify-between p-3 bg-gray-800 text-white rounded-lg"
              >
                <span className="font-medium">Browse Categories</span>
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>

            {/* Desktop & Mobile Categories */}
            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-4 border-b">
                  <h3 className="font-medium text-gray-900">Product Categories</h3>
                </div>
                <div className="divide-y">
                  {categories.map(category => (
                    <button
                      key={category.name}
                      onClick={() => {
                        setActiveCategory(category.name);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left p-4 flex items-center gap-3 transition-colors
                        ${activeCategory === category.name ? 'bg-blue-50' : 'hover:bg-gray-50'}
                      `}
                    >
                      <div className={`p-2 rounded-lg bg-${category.color}-100 text-${category.color}-600`}>
                        {category.icon}
                      </div>
                      <span className={`font-medium text-sm ${activeCategory === category.name ? 'text-blue-700' : 'text-gray-800'}`}>
                        {category.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Latest Releases */}
              <div className="mt-6 bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-medium text-gray-900 mb-4">Latest Releases</h3>
                <div className="space-y-4">
                  {latestReleases.map((release, index) => (
                    <div key={index} className="pb-3 border-b last:border-b-0 last:pb-0">
                      <p className="font-medium text-sm text-gray-900 mb-1">{release.name}</p>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>{release.category}</span>
                        <span>{release.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Downloads Content */}
          <div className="lg:col-span-3">
            {/* Category Header */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-blue-100 text-blue-600`}>
                  {categories.find(c => c.name === activeCategory)?.icon}
                </div>
                <div>
                  <h2 className="text-xl font-medium text-gray-900">{activeCategory}</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {downloadData[activeCategory]?.length || 0} available downloads
                  </p>
                </div>
              </div>

              {/* Verification Badge */}
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                <FiCheckCircle className="text-green-500" />
                <span>All downloads are digitally signed and SHA-256 verified</span>
              </div>
            </div>

            {/* Downloads List */}
            <div className="space-y-4">
              {filteredDownloads?.length > 0 ? (
                filteredDownloads.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                              {item.type}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{item.description}</p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500 mb-1">Version</p>
                              <p className="font-medium">{item.version}</p>
                            </div>
                            <div>
                              <p className="text-gray-500 mb-1">Release Date</p>
                              <p className="font-medium">{item.releaseDate}</p>
                            </div>
                            <div>
                              <p className="text-gray-500 mb-1">File Size</p>
                              <p className="font-medium">{item.size}</p>
                            </div>
                          </div>

                          {/* Checksum */}
                          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <FiHash className="text-gray-500" />
                              <span className="text-sm font-medium text-gray-700">SHA-256 Checksum</span>
                            </div>
                            <code className="text-xs text-gray-600 font-mono break-all">
                              {item.checksum}
                            </code>
                          </div>

                          {/* Requirements */}
                          {item.requirements && (
                            <div className="mt-4">
                              <p className="text-sm font-medium text-gray-700 mb-2">System Requirements</p>
                              <p className="text-sm text-gray-600">{item.requirements}</p>
                            </div>
                          )}
                        </div>

                        {/* Download Button */}
                        <div className="lg:w-48">
                      
                          <p className="text-xs text-gray-500 mt-2 text-center lg:text-left">
                            Verified • Secure • Latest Version
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                  <FiCloud className="text-4xl text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">No downloads found</h3>
                  <p className="text-gray-600">
                    {searchQuery ? 'Try a different search term' : 'Downloads will be available soon'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Verification Guidelines Section */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-medium mb-6">Download Security Guidelines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-900 rounded-lg">
                  <FiShield className="text-blue-300" />
                </div>
                <h3 className="font-medium">Verification</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Always verify SHA-256 checksums before installation to ensure file integrity.
              </p>
            </div>

            <div className="p-5 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-900 rounded-lg">
                  <FiCheckCircle className="text-green-300" />
                </div>
                <h3 className="font-medium">Authenticity</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Downloads are digitally signed. Verify signatures using our public keys.
              </p>
            </div>

            <div className="p-5 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-900 rounded-lg">
                  <FiLock className="text-purple-300" />
                </div>
                <h3 className="font-medium">Security</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Download only from this official portal. Avoid third-party sources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}