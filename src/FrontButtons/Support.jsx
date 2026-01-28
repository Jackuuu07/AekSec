import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiSearch, FiChevronDown, FiChevronUp, FiLock, FiShield, FiCloud, FiCpu, FiUsers, FiMessageSquare, FiDownload, FiAlertTriangle, FiHelpCircle, FiSettings, FiDatabase, FiGlobe } from "react-icons/fi";

export default function Support() {
  const navigate = useNavigate();
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
    { title: "Security Configuration Guides", count: "145+ guides", link: "/learn" },
    { title: "Threat Response Playbooks", count: "89 playbooks", link: "/support" },
    { title: "Compliance Documentation", count: "GDPR, HIPAA, PCI-DSS", link: "/learn" },
    { title: "API Security Best Practices", count: "Latest version", link: "/learn" }
  ];

  return (
    <>
      <div className="bg-white text-gray-800">
        {/* ================= HEADER ================= */}
        <section className="max-w-7xl mx-auto px-8 py-16">
          <div className="mb-10">
            <h1 className="text-4xl font-light mb-4">Security Support Center</h1>
            <p className="text-gray-600 max-w-3xl">
              Get 24/7 security support, access critical patches, and find expert resources 
              for all KalpTech security products and services.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-light mb-6">
              Find Security Products and Downloads
            </h2>
            <div className="relative max-w-2xl mx-auto">
              <FiSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search security products, vulnerabilities, or support articles..."
                className="w-full pl-14 pr-6 py-4 rounded-full border outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Try: "firewall patch", "zero-day", "compliance guide", "API security"
            </p>
          </div>
        </section>

        {/* ================= SECURITY ALERTS BANNER ================= */}
        <section className="bg-gradient-to-r from-red-50 to-orange-50 border-y py-6">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <FiAlertTriangle className="text-red-600 text-2xl" />
                <div>
                  <h3 className="font-medium">Active Security Alerts</h3>
                  <p className="text-sm text-gray-600">Critical updates requiring immediate attention</p>
                </div>
              </div>
              <button 
                onClick={() => navigate("/learn")}
                className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition text-sm font-medium"
              >
                View All Alerts
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {securityAlerts.map(alert => (
                <div key={alert.id} className="bg-white border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      alert.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                      alert.severity === 'High' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {alert.severity}
                    </span>
                    <span className="text-sm text-gray-500">{alert.date}</span>
                  </div>
                  <h4 className="font-medium mb-2">{alert.title}</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Affected: {alert.affected}</p>
                    <p className="text-blue-600 font-medium">{alert.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MAIN GRID ================= */}
        <section className="max-w-7xl mx-auto px-8 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-16 pt-16">
          {/* ================= LEFT: SECURITY PRODUCTS ================= */}
          <div>
            <h3 className="text-xl font-medium mb-6 border-b pb-3 flex items-center gap-2">
              <FiShield className="text-blue-600" />
              Security Products by Category
            </h3>

            <div className="space-y-3">
              {securityProducts.map((product) => (
                <div
                  key={product.name}
                  onClick={() => navigate("/products/product-service")}
                  className="px-4 py-3 border rounded-lg hover:bg-blue-50 cursor-pointer transition group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-blue-600">
                        {product.icon}
                      </div>
                      <span className="font-medium group-hover:text-blue-700">
                        {product.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {product.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/products/product-service"
              className="inline-flex items-center gap-2 mt-6 text-blue-600 hover:underline font-medium"
            >
              Browse All Security Products
              <FiChevronDown />
            </Link>

            {/* Quick Resources */}
            <div className="mt-12">
              <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                <FiHelpCircle className="text-blue-600" />
                Quick Security Resources
              </h4>
              <div className="space-y-3">
                {quickResources.map((resource, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h5 className="font-medium">{resource.title}</h5>
                    <p className="text-sm text-gray-600">{resource.count}</p>
                    <Link 
                      to={resource.link}
                      className="text-blue-600 hover:underline text-sm font-medium inline-flex items-center gap-1 mt-1"
                    >
                      Access Resources
                      <FiChevronDown className="rotate-90" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= MIDDLE: COMMUNITY & LICENSES ================= */}
          <div>
            <h3 className="text-xl font-medium mb-6 border-b pb-3 flex items-center gap-2">
              <FiUsers className="text-blue-600" />
              Security Communities
            </h3>

            <ul className="space-y-4 mb-10">
              {[
                { name: "Security Operations Center (SOC) Community", members: "12.5K" },
                { name: "Threat Intelligence & Hunting Group", members: "8.9K" },
                { name: "Cloud Security Architects", members: "7.3K" },
                { name: "Compliance & GRC Professionals", members: "5.4K" },
                { name: "Security Researchers & Bug Bounty", members: "3.8K" },
              ].map((community, index) => (
                <li key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer group">
                  <span className="text-blue-600 group-hover:underline font-medium">
                    {community.name}
                  </span>
                  <span className="text-sm text-gray-500">{community.members} members</span>
                </li>
              ))}
            </ul>

            <Link 
              to="/Community"
              className="text-blue-600 hover:underline font-medium inline-flex items-center gap-2"
            >
              Join Security Community
              <FiChevronDown />
            </Link>

            <h3 className="text-xl font-medium mt-12 mb-6 border-b pb-3 flex items-center gap-2">
              <FiLock className="text-blue-600" />
              Security Licenses & Entitlements
            </h3>

            <div className="space-y-6 text-sm">
              <div className="border rounded-lg p-4">
                <p className="font-medium flex items-center gap-2">
                  <FiShield className="text-green-600" />
                  Threat Intelligence Licenses
                </p>
                <p className="text-gray-600 mt-2">
                  Access to real-time threat feeds, IOC databases, and intelligence reports.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <p className="font-medium flex items-center gap-2">
                  <FiCloud className="text-blue-600" />
                  Cloud Security Subscriptions
                </p>
                <p className="text-gray-600 mt-2">
                  Manage cloud security posture, compliance scanning, and workload protection.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <p className="font-medium flex items-center gap-2">
                  <FiDatabase className="text-purple-600" />
                  SIEM Data Retention & Analytics
                </p>
                <p className="text-gray-600 mt-2">
                  Extended log retention, advanced analytics, and machine learning capabilities.
                </p>
              </div>

              <Link 
                to="/support"
                className="text-blue-600 hover:underline font-medium inline-flex items-center gap-2"
              >
                License Management Portal
                <FiChevronDown />
              </Link>
            </div>
          </div>

          {/* ================= RIGHT: MY SUPPORT ================= */}
          <div>
            <h3 className="text-xl font-medium mb-6 border-b pb-3 flex items-center gap-2">
              <FiSettings className="text-blue-600" />
              My Security Support
            </h3>

            {[
              { 
                title: "Open Security Cases", 
                description: "Track active security incidents and support tickets" 
              },
              { 
                title: "Security Software Downloads", 
                description: "Access patches, updates, and security tools" 
              },
              { 
                title: "Vulnerability Scans", 
                description: "View recent security assessment results" 
              },
              { 
                title: "Compliance Reports", 
                description: "Access regulatory compliance documentation" 
              },
            ].map((item) => (
              <div key={item.title} className="border-b">
                <button
                  onClick={() => toggle(item.title)}
                  className="w-full flex justify-between items-center py-4 hover:bg-gray-50 px-2 rounded-lg transition"
                >
                  <div className="text-left">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-gray-400">
                    {openSupport === item.title ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </button>
                
                {openSupport === item.title && (
                  <div className="px-2 pb-4">
                    <div className="bg-blue-50 rounded-lg p-4 mt-2">
                      <p className="text-sm text-gray-700">
                        {item.title === "Open Security Cases" && "Access requires enterprise authentication. Contact your security administrator."}
                        {item.title === "Security Software Downloads" && "Latest security patches and updates available for download. Verify checksums before installation."}
                        {item.title === "Vulnerability Scans" && "Scheduled vulnerability assessments and penetration test results. Remediation guidance available."}
                        {item.title === "Compliance Reports" && "GDPR, HIPAA, PCI-DSS, ISO 27001 compliance reports and audit trails."}
                      </p>
                      <button className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
                        Access Now
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button className="mt-6 text-blue-600 hover:underline font-medium flex items-center gap-2">
              <FiMessageSquare />
              Submit Security Feedback
            </button>

            {/* ================= SECURITY DEVICE INVENTORY ================= */}
            <h3 className="text-xl font-medium mt-12 mb-6 border-b pb-3 flex items-center gap-2">
              <FiCpu className="text-blue-600" />
              Security Device Inventory
            </h3>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-sm mb-4">
                <span className="font-medium">Enterprise Security Management</span>
              </p>
              <p className="text-sm text-gray-600 mb-4">
                View and manage your security appliance inventory, track compliance status, 
                and monitor security posture across your enterprise.
              </p>
              <button 
                onClick={() => navigate("/login")}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
              >
                Log in to Security Portal
              </button>
            </div>

            {/* ================= SECURITY SUPPORT CONTACT ================= */}
            <h3 className="text-xl font-medium mb-6 border-b pb-3 flex items-center gap-2">
              <FiHelpCircle className="text-blue-600" />
              24/7 Security Support
            </h3>

            <div className="space-y-6">
              <div className="border rounded-lg p-5">
                <p className="font-medium mb-3">Critical Security Incidents</p>
                <p className="text-gray-600 text-sm mb-2">Emergency hotline for security breaches and zero-day attacks</p>
                <p className="text-2xl font-bold text-red-600">1-800-KLPTSEC</p>
                <p className="text-xs text-gray-500 mt-1">Available 24/7/365</p>
              </div>

              <div className="border rounded-lg p-5">
                <p className="font-medium mb-3">General Security Support</p>
                <p className="text-gray-600 text-sm mb-2">Enterprise security consultation and technical support</p>
                <p className="text-lg font-medium">India: 000 800 100 1364</p>
                <button className="text-blue-600 hover:underline text-sm font-medium mt-2">
                  Global Support Numbers
                </button>
              </div>

              <div className="border rounded-lg p-5">
                <p className="font-medium mb-3">Security Advisory Services</p>
                <p className="text-gray-600 text-sm mb-2">Proactive security guidance and architecture review</p>
                <button 
                  onClick={() => navigate("/contact")}
                  className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-sm font-medium"
                >
                  Schedule Security Review
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}