import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SupportMenu() {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-[260px_1fr] h-full">
      {/* LEFT SIDEBAR */}
      <div className="border-r px-8 py-10 space-y-6 text-sm">
        <button
            onClick={() => {
            setActive(null);
            navigate("/learn/learnAekSec");
          }}          
          className="text-blue-600 font-medium"
        >
          Learn basis on AekSec
        </button>
        <LeftItem label="Products and Downloads" active={active} setActive={setActive} />
        <LeftItem label="Documentation" active={active} setActive={setActive} />
        <LeftItem label="Contact Support" active={active} setActive={setActive} />
        <LeftItem label="Licenses and Contracts" active={active} setActive={setActive} />
        <LeftItem label="Tools and Resources" active={active} setActive={setActive} />
        <LeftItem label="Cisco Community" active={active} setActive={setActive} />
      </div>

      {/* RIGHT AREA */}
      <div className="px-12 py-10 overflow-y-auto no-scrollbar h-full">
        {/* ===== DEFAULT (NO ACTIVE OR SUPPORT HOME) ===== */}
        {(active === null || active === "Learn") && (
          <div className="space-y-10">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-light mb-4">Learn</h2>
              <p className="text-gray-600 mb-6 max-w-2xl">
                Access documentation, security notices, and support tools for Cisco products.
              </p>
              <span className="text-blue-600 font-medium">
                View Cisco Support →
              </span>
            </div>

            {/* Three Column Cards */}
            <div className="grid grid-cols-3 gap-10">
              <SupportCard
                title="Software downloads"
                description="Download and manage new software, get updates or patches, or upgrade your current software to the latest release."
                cta="View Software Central"
                link="#"
              />
              <SupportCard
                title="Licensing support"
                description="Troubleshoot common licensing issues and leverage easy-to-follow documentation for both PAK-based or Smart Licenses."
                cta="Get licensing support"
                link="#"
              />
              <SupportCard
                title="Technical Support"
                description="Get help from Cisco experts 24/7. Open a case, chat with support, or find troubleshooting resources."
                cta="Contact Support"
                link="#"
              />
            </div>

            {/* Additional Resources Section */}
            <div className="mt-16">
              <h3 className="text-xl font-light mb-6">Quick links</h3>
              <div className="grid grid-cols-3 gap-6">
                <QuickLink
                  title="Documentation"
                  description="Product manuals, configuration guides, and technical references"
                  link="#"
                />
                <QuickLink
                  title="Security Advisories"
                  description="Latest security bulletins and vulnerability information"
                  link="#"
                />
                <QuickLink
                  title="Warranty Lookup"
                  description="Check warranty status and service coverage for your products"
                  link="#"
                />
              </div>
            </div>
          </div>
        )}

        {/* ===== PRODUCTS AND DOWNLOADS VIEW ===== */}
        {active === "Products and Downloads" && <ProductsDownloadsView />}

        {/* ===== DOCUMENTATION VIEW ===== */}
        {active === "Documentation" && <DocumentationView />}

        {/* ===== CONTACT SUPPORT VIEW ===== */}
        {active === "Contact Support" && <ContactSupportView />}

        {/* ===== LICENSES AND CONTRACTS VIEW ===== */}
        {active === "Licenses and Contracts" && <LicensesContractsView />}

        {/* ===== TOOLS AND RESOURCES VIEW ===== */}
        {active === "Tools and Resources" && <ToolsResourcesView />}

        {/* ===== CISCO COMMUNITY VIEW ===== */}
        {active === "Cisco Community" && <CommunityView />}
      </div>
    </div>
  );
}

/* ---------------- LEFT ITEM ---------------- */
function LeftItem({ label, active, setActive, isHome = false }) {
  const isActive = active === label;

  return (
    <button
      onClick={() => setActive(label)}
      className={`flex items-center gap-3 w-full text-left transition
        ${
          isActive || (isHome && active === null)
            ? "text-blue-600 font-semibold"
            : "text-gray-800 hover:text-gray-600"
        }
      `}
    >
      <span
        className={`w-1 h-5 rounded ${
          isActive || (isHome && active === null) ? "bg-blue-600" : "bg-transparent"
        }`}
      />
      {label}
    </button>
  );
}

/* ---------------- SUPPORT CARD ---------------- */
function SupportCard({ title, description, cta, link }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="font-medium mb-3 text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-blue-600 text-sm font-medium hover:underline">
        {cta} →
      </a>
    </div>
  );
}

/* ---------------- QUICK LINK ---------------- */
function QuickLink({ title, description, link }) {
  return (
    <div className="border-l-4 border-blue-600 pl-4 py-2">
      <h4 className="font-medium mb-1">{title}</h4>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <a href={link} className="text-blue-600 text-sm hover:underline">
        Learn more →
      </a>
    </div>
  );
}

/* ---------------- PRODUCTS AND DOWNLOADS VIEW ---------------- */
function ProductsDownloadsView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">Products and Downloads</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Find software, firmware, and drivers for all Cisco products. Access the latest updates, patches, and upgrade paths.
        </p>
        <span className="text-blue-600 font-medium">
          Visit Software Central →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">By Product Category</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Networking Software</li>
              <li className="hover:text-blue-600 cursor-pointer">Security Software</li>
              <li className="hover:text-blue-600 cursor-pointer">Collaboration Tools</li>
              <li className="hover:text-blue-600 cursor-pointer">Data Center Software</li>
              <li className="hover:text-blue-600 cursor-pointer">Wireless Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Download Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Bulk Download Tool</li>
              <li className="hover:text-blue-600 cursor-pointer">Download Manager</li>
              <li className="hover:text-blue-600 cursor-pointer">ISO Image Builder</li>
              <li className="hover:text-blue-600 cursor-pointer">Software Checker</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Software Updates</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Latest Releases</li>
              <li className="hover:text-blue-600 cursor-pointer">Security Patches</li>
              <li className="hover:text-blue-600 cursor-pointer">Recommended Releases</li>
              <li className="hover:text-blue-600 cursor-pointer">End-of-Life Software</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Support Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Serial Number Lookup</li>
              <li className="hover:text-blue-600 cursor-pointer">Download Dashboard</li>
              <li className="hover:text-blue-600 cursor-pointer">Software Advisor</li>
              <li className="hover:text-blue-600 cursor-pointer">Compatibility Matrix</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- DOCUMENTATION VIEW ---------------- */
function DocumentationView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">Product Documentation</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Comprehensive technical documentation, configuration guides, release notes, and troubleshooting resources.
        </p>
        <span className="text-blue-600 font-medium">
          Visit Documentation Center →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Product Documentation</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Configuration Guides</li>
              <li className="hover:text-blue-600 cursor-pointer">Command References</li>
              <li className="hover:text-blue-600 cursor-pointer">Installation Manuals</li>
              <li className="hover:text-blue-600 cursor-pointer">User Guides</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Technical Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">White Papers</li>
              <li className="hover:text-blue-600 cursor-pointer">Design Guides</li>
              <li className="hover:text-blue-600 cursor-pointer">Best Practices</li>
              <li className="hover:text-blue-600 cursor-pointer">Reference Architectures</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Release Information</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Release Notes</li>
              <li className="hover:text-blue-600 cursor-pointer">Field Notices</li>
              <li className="hover:text-blue-600 cursor-pointer">Bug Search Tool</li>
              <li className="hover:text-blue-600 cursor-pointer">Known Issues</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Documentation Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Documentation Search</li>
              <li className="hover:text-blue-600 cursor-pointer">PDF Downloads</li>
              <li className="hover:text-blue-600 cursor-pointer">Offline Documentation</li>
              <li className="hover:text-blue-600 cursor-pointer">Mobile Access</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- CONTACT SUPPORT VIEW ---------------- */
function ContactSupportView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">Contact Technical Support</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Get expert assistance for your Cisco products. Open a case, chat with support, or find contact information.
        </p>
        <span className="text-blue-600 font-medium">
          Visit Support Contact Center →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Support Channels</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Open a Case Online</li>
              <li className="hover:text-blue-600 cursor-pointer">Live Chat Support</li>
              <li className="hover:text-blue-600 cursor-pointer">Phone Support</li>
              <li className="hover:text-blue-600 cursor-pointer">Email Support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Case Management</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Track Existing Cases</li>
              <li className="hover:text-blue-600 cursor-pointer">Case History</li>
              <li className="hover:text-blue-600 cursor-pointer">Escalation Procedures</li>
              <li className="hover:text-blue-600 cursor-pointer">Service Request Manager</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Regional Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Global Support Numbers</li>
              <li className="hover:text-blue-600 cursor-pointer">Local Language Support</li>
              <li className="hover:text-blue-600 cursor-pointer">Regional Support Centers</li>
              <li className="hover:text-blue-600 cursor-pointer">Time Zone Coverage</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Support Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Technical Account Managers</li>
              <li className="hover:text-blue-600 cursor-pointer">Premium Support</li>
              <li className="hover:text-blue-600 cursor-pointer">Dedicated Support Engineers</li>
              <li className="hover:text-blue-600 cursor-pointer">Emergency Support Contacts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- LICENSES AND CONTRACTS VIEW ---------------- */
function LicensesContractsView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">Licenses and Contracts</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Manage your software licenses, view contracts, and access licensing support for Cisco products.
        </p>
        <span className="text-blue-600 font-medium">
          Visit Licensing Portal →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">License Management</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Smart License Portal</li>
              <li className="hover:text-blue-600 cursor-pointer">PAK-based Licenses</li>
              <li className="hover:text-blue-600 cursor-pointer">License Registration</li>
              <li className="hover:text-blue-600 cursor-pointer">Entitlement Lookup</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Contract Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Support Contract Lookup</li>
              <li className="hover:text-blue-600 cursor-pointer">Contract Renewals</li>
              <li className="hover:text-blue-600 cursor-pointer">Service Level Agreements</li>
              <li className="hover:text-blue-600 cursor-pointer">Warranty Information</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">License Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Troubleshooting Guides</li>
              <li className="hover:text-blue-600 cursor-pointer">Common Issues</li>
              <li className="hover:text-blue-600 cursor-pointer">Migration Assistance</li>
              <li className="hover:text-blue-600 cursor-pointer">License FAQs</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Compliance & Reporting</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">License Compliance</li>
              <li className="hover:text-blue-600 cursor-pointer">Usage Reports</li>
              <li className="hover:text-blue-600 cursor-pointer">Audit Tools</li>
              <li className="hover:text-blue-600 cursor-pointer">Compliance Documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- TOOLS AND RESOURCES VIEW ---------------- */
function ToolsResourcesView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">Tools and Resources</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Access diagnostic tools, calculators, configuration generators, and other resources for Cisco products.
        </p>
        <span className="text-blue-600 font-medium">
          Visit Tools Portal →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Diagnostic Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">TAC Case Collection</li>
              <li className="hover:text-blue-600 cursor-pointer">Output Interpreter</li>
              <li className="hover:text-blue-600 cursor-pointer">SNMP Object Navigator</li>
              <li className="hover:text-blue-600 cursor-pointer">Error Message Decoder</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Configuration Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Config Generator</li>
              <li className="hover:text-blue-600 cursor-pointer">IP Subnet Calculator</li>
              <li className="hover:text-blue-600 cursor-pointer">VLAN Calculator</li>
              <li className="hover:text-blue-600 cursor-pointer">Password Recovery</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Security Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Security Advisories</li>
              <li className="hover:text-blue-600 cursor-pointer">PSIRT OpenVuln API</li>
              <li className="hover:text-blue-600 cursor-pointer">CVE Lookup</li>
              <li className="hover:text-blue-600 cursor-pointer">Security Configuration</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Product Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Serial Number Decoder</li>
              <li className="hover:text-blue-600 cursor-pointer">End-of-Life Search</li>
              <li className="hover:text-blue-600 cursor-pointer">Product Selector</li>
              <li className="hover:text-blue-600 cursor-pointer">Compatibility Checker</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMMUNITY VIEW ---------------- */
function CommunityView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">Cisco Community</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Connect with peers, share knowledge, and get answers from experts and other Cisco users worldwide.
        </p>
        <span className="text-blue-600 font-medium">
          Visit Community Portal →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Discussion Forums</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Networking Forums</li>
              <li className="hover:text-blue-600 cursor-pointer">Security Discussions</li>
              <li className="hover:text-blue-600 cursor-pointer">Collaboration Topics</li>
              <li className="hover:text-blue-600 cursor-pointer">Data Center Forums</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Expert Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Ask the Experts</li>
              <li className="hover:text-blue-600 cursor-pointer">Technical Blogs</li>
              <li className="hover:text-blue-600 cursor-pointer">Webinar Archive</li>
              <li className="hover:text-blue-600 cursor-pointer">Best Practices Library</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Community Programs</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Beta Programs</li>
              <li className="hover:text-blue-600 cursor-pointer">User Groups</li>
              <li className="hover:text-blue-600 cursor-pointer">Ambassador Program</li>
              <li className="hover:text-blue-600 cursor-pointer">Community Champions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Learning Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Community Learning</li>
              <li className="hover:text-blue-600 cursor-pointer">Study Groups</li>
              <li className="hover:text-blue-600 cursor-pointer">Certification Support</li>
              <li className="hover:text-blue-600 cursor-pointer">Technical Challenges</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}