import { useState } from "react";
import { FiSearch, FiChevronDown, FiChevronUp, FiLock, FiShield, FiCloud, FiCpu, FiUsers, FiMessageSquare, FiAlertTriangle, FiHelpCircle, FiSettings, FiDatabase, FiGlobe, FiExternalLink } from "react-icons/fi";

export default function Support() {
  const [openSupport, setOpenSupport] = useState(null);

  const toggle = (key) => {
    setOpenSupport(openSupport === key ? null : key);
  };

  // Security product categories
  const securityProducts = [
    { name: "Firewall & Network Security", count: 245, icon: <FiShield /> },
    { name: "Cloud Security Platforms", count: 189, icon: <FiCloud /> },
    { name: "Endpoint Protection", count: 167, icon: <FiCpu /> },
    { name: "SIEM & Threat Intelligence", count: 142, icon: <FiDatabase /> },
    { name: "Identity & Access Management", count: 98, icon: <FiLock /> },
    { name: "Web Application Security", count: 76, icon: <FiGlobe /> },
    { name: "Email Security", count: 64, icon: <FiMessageSquare /> },
    { name: "IoT & OT Security", count: 45, icon: <FiSettings /> }
  ];

  // Critical security alerts
  const securityAlerts = [
    { 
      id: 1, 
      title: "Critical Security Patch - Firewall v4.5", 
      severity: "Critical", 
      date: "2024-12-01",
      affected: "All enterprise firewalls",
      status: "Patch Available"
    },
    { 
      id: 2, 
      title: "Zero-Day Vulnerability - Cloud Security Platform", 
      severity: "High", 
      date: "2024-11-28",
      affected: "v3.2 - v3.8",
      status: "Workaround Available"
    },
    { 
      id: 3, 
      title: "Security Enhancement - Endpoint Protection", 
      severity: "Medium", 
      date: "2024-11-25",
      affected: "EPP v2.1+",
      status: "Update Recommended"
    }
  ];

  // Quick support resources
  const quickResources = [
    { title: "Security Configuration Guides", count: "145+ guides" },
    { title: "Threat Response Playbooks", count: "89 playbooks" },
    { title: "Compliance Documentation", count: "GDPR, HIPAA, PCI-DSS" },
    { title: "API Security Best Practices", count: "Latest version" }
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-3">Security Support</h1>
          <p className="text-gray-600 max-w-2xl">
            Access security resources, critical updates, and support documentation for all security products.
          </p>
        </div>

        <div className="relative max-w-xl">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search security products or documentation..."
            className="w-full pl-12 pr-6 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </section>

      {/* Security Alerts */}
      <section className="bg-gray-50 border-y py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <FiAlertTriangle className="text-red-500" />
            <h2 className="text-lg font-medium text-gray-900">Active Security Alerts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {securityAlerts.map(alert => (
              <div key={alert.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    alert.severity === 'Critical' ? 'bg-red-50 text-red-700' :
                    alert.severity === 'High' ? 'bg-orange-50 text-orange-700' :
                    'bg-yellow-50 text-yellow-700'
                  }`}>
                    {alert.severity}
                  </span>
                  <span className="text-xs text-gray-500">{alert.date}</span>
                </div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm">{alert.title}</h4>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>Affected: {alert.affected}</p>
                  <p className="text-blue-600 font-medium">{alert.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Security Products */}
        <div>
          <h3 className="text-base font-medium text-gray-900 mb-4 flex items-center gap-2">
            <FiShield className="text-blue-600" />
            Security Products
          </h3>

          <div className="space-y-2 mb-8">
            {securityProducts.map((product) => (
              <div
                key={product.name}
                className="px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-gray-500">
                      {product.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      {product.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {product.count}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-base font-medium text-gray-900 mb-4 flex items-center gap-2">
            <FiHelpCircle className="text-blue-600" />
            Quick Resources
          </h3>
          <div className="space-y-3">
            {quickResources.map((resource, index) => (
              <div key={index} className="border-l border-blue-500 pl-4 py-2">
                <h5 className="text-sm font-medium text-gray-900">{resource.title}</h5>
                <p className="text-xs text-gray-600">{resource.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column: Communities & Licenses */}
        <div>
          <h3 className="text-base font-medium text-gray-900 mb-4 flex items-center gap-2">
            <FiUsers className="text-blue-600" />
            Security Communities
          </h3>

          <ul className="space-y-3 mb-8">
            {[
              { name: "Security Operations Center", members: "12.5K" },
              { name: "Threat Intelligence", members: "8.9K" },
              { name: "Cloud Security", members: "7.3K" },
              { name: "Compliance & GRC", members: "5.4K" },
              { name: "Security Research", members: "3.8K" },
            ].map((community, index) => (
              <li key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-800">
                  {community.name}
                </span>
                <span className="text-xs text-gray-500">{community.members}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-base font-medium text-gray-900 mb-4 flex items-center gap-2">
            <FiLock className="text-blue-600" />
            Security Licenses
          </h3>

          <div className="space-y-4 text-sm">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-900 flex items-center gap-2">
                <FiShield className="text-gray-500" />
                Threat Intelligence
              </p>
              <p className="text-gray-600 mt-1 text-xs">
                Real-time threat feeds and intelligence reports.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-900 flex items-center gap-2">
                <FiCloud className="text-gray-500" />
                Cloud Security
              </p>
              <p className="text-gray-600 mt-1 text-xs">
                Cloud security posture and workload protection.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-900 flex items-center gap-2">
                <FiDatabase className="text-gray-500" />
                SIEM Analytics
              </p>
              <p className="text-gray-600 mt-1 text-xs">
                Extended log retention and analytics capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Support */}
        <div>
          <h3 className="text-base font-medium text-gray-900 mb-4 flex items-center gap-2">
            <FiSettings className="text-blue-600" />
            Support Resources
          </h3>

          {[
            { 
              title: "Open Security Cases", 
              description: "Active security incidents and tickets" 
            },
            { 
              title: "Software Downloads", 
              description: "Patches, updates, and security tools" 
            },
            { 
              title: "Vulnerability Scans", 
              description: "Security assessment results" 
            },
            { 
              title: "Compliance Reports", 
              description: "Regulatory compliance documentation" 
            },
          ].map((item) => (
            <div key={item.title} className="border-b border-gray-100">
              <button
                onClick={() => toggle(item.title)}
                className="w-full flex justify-between items-center py-3 hover:bg-gray-50 px-1 rounded transition-colors"
              >
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
                <span className="text-gray-400">
                  {openSupport === item.title ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>
              
              {openSupport === item.title && (
                <div className="px-1 pb-3">
                  <div className="bg-gray-50 rounded-lg p-3 mt-1">
                    <p className="text-xs text-gray-700 mb-2">
                      {item.title === "Open Security Cases" && "Access requires enterprise authentication."}
                      {item.title === "Software Downloads" && "Latest security patches available for download."}
                      {item.title === "Vulnerability Scans" && "Vulnerability assessments and remediation guidance."}
                      {item.title === "Compliance Reports" && "Compliance reports and audit documentation."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}

          

          

          {/* Device Inventory */}
          <h3 className="text-base font-medium text-gray-900 mt-8 mb-4 flex items-center gap-2">
            <FiCpu className="text-blue-600" />
            Security Management
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <p className="text-sm text-gray-900 mb-2">Enterprise Security Portal</p>
            <p className="text-xs text-gray-600">
              View security appliance inventory and compliance status.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}