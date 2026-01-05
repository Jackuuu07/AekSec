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
            navigate("/support/support-lab");
          }}
          className="text-blue-600 font-medium"
        >
          Support Home
        </button>

        <LeftItem label="Downloads" active={active} setActive={setActive} />
        <LeftItem label="Documentation" active={active} setActive={setActive} />
        <LeftItem label="Community" active={active} setActive={setActive} />
        <LeftItem label="Licensing" active={active} setActive={setActive} />
        <LeftItem
          label="Contact Support"
          active={active}
          setActive={setActive}
        />
      </div>

      {/* RIGHT AREA */}
      <div className="px-12 py-10 overflow-y-auto no-scrollbar h-full">
        {/* ===== DEFAULT (NO ACTIVE) ===== */}
        {active === null && (
          <div className="grid grid-cols-3 gap-10">
            <MenuCard
              img="https://www.cisco.com/content/dam/cisco-cdc/site/images/header/support-home-penn1_brandlibrary-DSC0318.jpg"
              title="Technical Support"
              text="Get help from AekSec experts."
              cta="Open a case"
            />
            <MenuCard
              img="https://www.cisco.com/content/dam/cisco-cdc/site/images/header/support-software-downloads-hatchlibrary-general-gettyPA-Cisco-1309760275.jpg"
              title="Product Downloads"
              text="Access software and updates."
              cta="Go to downloads"
            />
            <MenuCard
              img="https://www.cisco.com/content/dam/cisco-cdc/site/images/header/support-licensing-hatchlibrary-security-gettyPA-Cisco-1518851638.jpg"
              title="Community Forums"
              text="Learn from peers and experts."
              cta="Join the community"
            />
          </div>
        )}

        {/* ===== DOWNLOADS VIEW ===== */}
        {active === "Downloads" && <DownloadsView />}

        {/* ===== DOCUMENTATION VIEW ===== */}
        {active === "Documentation" && <DocumentationView />}

        {/* ===== COMMUNITY VIEW ===== */}
        {active === "Community" && <CommunityView />}

        {/* ===== LICENSING VIEW ===== */}
        {active === "Licensing" && <LicensingView />}

        {/* ===== CONTACT SUPPORT VIEW ===== */}
        {active === "Contact Support" && <ContactSupportView />}
      </div>
    </div>
  );
}

/* ---------------- LEFT ITEM ---------------- */
function LeftItem({ label, active, setActive }) {
  const isActive = active === label;

  return (
    <button
      onClick={() => setActive(label)}
      className={`flex items-center gap-3 w-full text-left transition
        ${
          isActive
            ? "text-black font-semibold"
            : "text-gray-800 hover:text-gray-600"
        }
      `}
    >
      <span
        className={`w-1 h-5 rounded ${
          isActive ? "bg-blue-600" : "bg-transparent"
        }`}
      />
      {label}
    </button>
  );
}

/* ---------------- MENU CARD ---------------- */
function MenuCard({ img, title, text, cta }) {
  return (
    <div>
      <img src={img} className="rounded mb-4 h-40 w-full object-cover" />
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{text}</p>
      <span className="text-blue-600 text-sm font-medium">{cta} →</span>
    </div>
  );
}

/* ---------------- DOWNLOADS VIEW ---------------- */
function DownloadsView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">
          Product Downloads & Software Updates
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Access the latest software releases, firmware updates, drivers, and
          tools for all AekSec products and solutions.
        </p>
        <span className="text-blue-600 font-medium">
          Visit Downloads Center →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Software Downloads</h3>
            <ul className="space-y-2 text-gray-600 cursor-pointer hover:blue">
              <li className="hover:text-blue-400">Operating Systems</li>
              <li className="hover:text-blue-400">Management Software</li>
              <li className="hover:text-blue-400">Security Applications</li>
              <li className="hover:text-blue-400">Drivers & Utilities</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Firmware & Updates</h3>
            <ul className="space-y-2 text-gray-600 cursor-pointer">
              <li className="hover:text-blue-400">Network Device Firmware</li>
              <li className="hover:text-blue-400">Security Appliance Updates</li>
              <li className="hover:text-blue-400">Server BIOS/Firmware</li>
              <li className="hover:text-blue-400">Patch Management</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Mobile Apps</h3>
            <ul className="space-y-2 text-gray-600 cursor-pointer">
              <li className="hover:text-blue-400">Management Applications</li>
              <li className="hover:text-blue-400">Monitoring Tools</li>
              <li className="hover:text-blue-400">Collaboration Apps</li>
              <li className="hover:text-blue-400">Security Clients</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Documentation & Tools</h3>
            <ul className="space-y-2 text-gray-600 cursor-pointer">
              <li className="hover:text-blue-400">Configuration Guides</li>
              <li className="hover:text-blue-400">Deployment Tools</li>
              <li className="hover:text-blue-400">Diagnostic Utilities</li>
              <li className="hover:text-blue-400">Migration Assistants</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Release Information</h3>
            <ul className="space-y-2 text-gray-600 cursor-pointer">
              <li className="hover:text-blue-400">Release Notes</li>
              <li className="hover:text-blue-400">Known Issues</li>
              <li className="hover:text-blue-400">Compatibility Matrices</li>
              <li className="hover:text-blue-400">End-of-Life Notices</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Download Services</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Automatic Updates</li>
              <li className="hover:text-blue-400">Bulk Download Tools</li>
              <li className="hover:text-blue-400">Software Maintenance</li>
              <li className="hover:text-blue-400">Version Control</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all downloads →
            </button>
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
        <h2 className="text-2xl font-light mb-4">
          Product Documentation & Knowledge Base
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Comprehensive technical documentation, configuration guides, and
          troubleshooting resources for all AekSec products.
        </p>
        <span className="text-blue-600 font-medium">
          Visit Documentation Portal →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Product Documentation</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Installation Guides</li>
              <li className="hover:text-blue-400">Configuration Manuals</li>
              <li className="hover:text-blue-400">Administration Guides</li>
              <li className="hover:text-blue-400">Reference Architectures</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Technical Resources</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">White Papers</li>
              <li className="hover:text-blue-400">Technical Specifications</li>
              <li className="hover:text-blue-400">Best Practices</li>
              <li className="hover:text-blue-400">Design Guides</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Video Resources</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Product Demos</li>
              <li className="hover:text-blue-400">Configuration Tutorials</li>
              <li className="hover:text-blue-400">Troubleshooting Videos</li>
              <li className="hover:text-blue-400">Webinar Recordings</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">API Documentation</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">REST API References</li>
              <li className="hover:text-blue-400">SDK Documentation</li>
              <li className="hover:text-blue-400">Integration Guides</li>
              <li className="hover:text-blue-400">Sample Code</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Knowledge Base</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Troubleshooting Articles</li>
              <li className="hover:text-blue-400">How-To Guides</li>
              <li className="hover:text-blue-400">Frequently Asked Questions</li>
              <li className="hover:text-blue-400">Error Code References</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Documentation Tools</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Documentation Search</li>
              <li className="hover:text-blue-400">PDF Downloads</li>
              <li className="hover:text-blue-400">Offline Documentation</li>
              <li className="hover:text-blue-400">Documentation Feedback</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all documentation →
            </button>
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
        <h2 className="text-2xl font-light mb-4">AekSec Community & Forums</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Connect with peers, share knowledge, and get answers from experts and
          other AekSec users worldwide.
        </p>
        <span className="text-blue-600 font-medium cursur-pointer">
          Visit Community Portal →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Discussion Forums</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Networking Discussions</li>
              <li className="hover:text-blue-400">Security Forums</li>
              <li className="hover:text-blue-400">Collaboration Topics</li>
              <li className="hover:text-blue-400">Infrastructure Chat</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Expert Communities</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600 ">
              <li className="hover:text-blue-400">Certified Experts</li>
              <li className="hover:text-blue-400">Technology Specialists</li>
              <li className="hover:text-blue-400">Developer Community</li>
              <li className="hover:text-blue-400">Architect Network</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">User Groups</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Local User Groups</li>
              <li className="hover:text-blue-400">Industry Special Interest</li>
              <li className="hover:text-blue-400">Technology Focus Groups</li>
              <li className="hover:text-blue-400">Virtual Meetups</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Knowledge Sharing</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Blogs & Articles</li>
              <li className="hover:text-blue-400">User Contributions</li>
              <li className="hover:text-blue-400">Tips & Tricks</li>
              <li className="hover:text-blue-400">Solution Exchange</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Events & Activities</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Webinars</li>
              <li className="hover:text-blue-400">Community Challenges</li>
              <li className="hover:text-blue-400">AMA Sessions</li>
              <li className="hover:text-blue-400">Virtual Conferences</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Community Programs</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Beta Programs</li>
              <li className="hover:text-blue-400">User Feedback</li>
              <li className="hover:text-blue-400">Ambassador Programs</li>
              <li className="hover:text-blue-400">Contribution Recognition</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all community resources →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- LICENSING VIEW ---------------- */
function LicensingView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">
          Software Licensing & Entitlements
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Manage your software licenses, view entitlements, and access licensing
          resources for all AekSec products.
        </p>
        <span className="text-blue-600 font-medium">
          Visit Licensing Portal →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">License Management</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">License Registration</li>
              <li className="hover:text-blue-400">Entitlement Lookup</li>
              <li className="hover:text-blue-400">License Transfers</li>
              <li className="hover:text-blue-400">Compliance Reporting</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Software Subscriptions</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Subscription Management</li>
              <li className="hover:text-blue-400">Renewal Services</li>
              <li className="hover:text-blue-400">Flexible Licensing</li>
              <li className="hover:text-blue-400">Usage Reporting</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Product Activation</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Activation Codes</li>
              <li className="hover:text-blue-400">Smart Licensing</li>
              <li className="hover:text-blue-400">Trial Licenses</li>
              <li className="hover:text-blue-400">Evaluation Units</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">License Types</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Perpetual Licenses</li>
              <li className="hover:text-blue-400">Subscription Licenses</li>
              <li className="hover:text-blue-400">Cloud Licenses</li>
              <li className="hover:text-blue-400">Metered Licensing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">License Resources</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">License Agreements</li>
              <li className="hover:text-blue-400">Pricing Information</li>
              <li className="hover:text-blue-400">License Migration</li>
              <li className="hover:text-blue-400">End-of-Life Policies</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Support Services</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">License Consulting</li>
              <li className="hover:text-blue-400">Audit Assistance</li>
              <li className="hover:text-blue-400">Optimization Services</li>
              <li className="hover:text-blue-400">License Training</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all licensing resources →
            </button>
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
        <h2 className="text-2xl font-light mb-4">
          Technical Support & Contact Options
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Get expert technical assistance, open support cases, and access
          various support channels for your AekSec products.
        </p>
        <span className="text-blue-600 font-medium">
          Visit Support Center →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Support Channels</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Phone Support</li>
              <li className="hover:text-blue-400">Email Support</li>
              <li className="hover:text-blue-400">Live Chat</li>
              <li className="hover:text-blue-400">Remote Assistance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Case Management</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Open New Case</li>
              <li className="hover:text-blue-400">Track Existing Cases</li>
              <li className="hover:text-blue-400">Case Escalation</li>
              <li className="hover:text-blue-400">Case History</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Support Services</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Technical Account Managers</li>
              <li className="hover:text-blue-400">Premium Support</li>
              <li className="hover:text-blue-400">Dedicated Support Engineers</li>
              <li className="hover:text-blue-400">Emergency Support</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">
              Service Level Agreements
            </h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Response Time Guarantees</li>
              <li className="hover:text-blue-400">Service Availability</li>
              <li className="hover:text-blue-400">Escalation Procedures</li>
              <li className="hover:text-blue-400">Support Coverage Hours</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Support Resources</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Support Phone Numbers</li>
              <li className="hover:text-blue-400">Regional Support Centers</li>
              <li className="hover:text-blue-400">Support Documentation</li>
              <li className="hover:text-blue-400">Hardware Replacement</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Account Management</h3>
            <ul className="cursor-pointer space-y-2 text-gray-600">
              <li className="hover:text-blue-400">Support Contract Lookup</li>
              <li className="hover:text-blue-400">Entitlement Verification</li>
              <li className="hover:text-blue-400">Support Renewal</li>
              <li className="hover:text-blue-400">Account Preferences</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all support options →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
