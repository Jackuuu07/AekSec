import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductsMenu() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  return (
    <div className="grid grid-cols-[260px_1fr] h-full">
      {/* LEFT SIDEBAR */}
      <div className="border-r px-8 py-10 space-y-5 text-sm">
        <button
          onClick={() => {
            setActive(null);
            navigate("/products/product-service");
          }}
          className="text-blue-600 font-medium mb-6"
        >
          Products & Services Home
        </button>

        <LeftItem label="Networking" active={active} setActive={setActive} />
        <LeftItem label="Security" active={active} setActive={setActive} />
        <LeftItem label="Collaboration" active={active} setActive={setActive} />
        <LeftItem label="Computing" active={active} setActive={setActive} />
        <LeftItem label="Observability" active={active} setActive={active} />
        <LeftItem label="Software" active={active} setActive={setActive} />
        <LeftItem label="Services (CX)" active={active} setActive={setActive} />
      </div>

      {/* RIGHT AREA */}
      <div className="px-12 py-10 overflow-y-auto no-scrollbar h-full">
        {/* ===== DEFAULT (NO ACTIVE) ===== */}
        {active === null && (
          <div className="grid grid-cols-3 gap-10">
            <PromoCard
              img="https://tse3.mm.bing.net/th/id/OIP.VdNa61_IWvdXMwsXiGr2qgHaE8?pid=Api&P=0&h=180"
              title="Save on 100G or 400G optics"
              text="Boost your network with volume discounts on optical transceivers."
              cta="Save on optics today"
            />
            <PromoCard
              img="https://masterbundles.com/wp-content/uploads/edd/2022/08/free-cyber-security-powerpoint-template-4-1024x1024.jpg"
              title="Security free trials"
              text="Try security solutions before you buy."
              cta="Start a free trial"
            />
            <PromoCard
              img="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              title="AekSec Services"
              text="Deliver tangible business value with less risk and effort."
              cta="Choose AekSec Services"
            />
          </div>
        )}

        {/* ===== NETWORKING VIEW ===== */}
        {active === "Networking" && <NetworkingView />}

        {/* ===== SECURITY VIEW ===== */}
        {active === "Security" && <SecurityView />}

        {/* ===== COLLABORATION VIEW ===== */}
        {active === "Collaboration" && <CollaborationView />}

        {/* ===== COMPUTING VIEW ===== */}
        {active === "Computing" && <ComputingView />}

        {/* ===== OBSERVABILITY VIEW ===== */}
        {active === "Observability" && <ObservabilityView />}

        {/* ===== SOFTWARE VIEW ===== */}
        {active === "Software" && <SoftwareView />}

        {/* ===== SERVICES (CX) VIEW ===== */}
        {active === "Services (CX)" && <ServicesCXView />}
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
            ? "text-black -600 font-semibold"
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

/* ---------------- PROMO CARD ---------------- */
function PromoCard({ img, title, text, cta }) {
  return (
    <div>
      <img src={img} className="rounded mb-4 h-40 w-full object-cover" />
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{text}</p>
      <span className="text-blue-600 text-sm font-medium">{cta} →</span>
    </div>
  );
}

/* ---------------- NETWORKING VIEW ---------------- */
function NetworkingView() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">Unified network management</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Manage your entire network from a single, intuitive cloud interface
          with the Meraki and Catalyst Center Global Overview.
        </p>
        <span className="text-blue-600 font-medium">
          Explore Networking Platform →
        </span>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Access networking</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Routers</li>
              <li className="hover:text-blue-400 cursor-pointer">Switches</li>
              <li className="hover:text-blue-400 cursor-pointer">Wireless</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">
              Campus and branch networking
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Switches</li>
              <li className="hover:text-blue-400 cursor-pointer">Wireless</li>
              <li className="hover:text-blue-400 cursor-pointer">Routers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">
              Data center and cloud networking
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Switches</li>
              <li className="hover:text-blue-400 cursor-pointer">Optics</li>
              <li className="hover:text-blue-400 cursor-pointer">Network software</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">
              Wide-area networking (WAN)
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">SD-WAN</li>
              <li className="hover:text-blue-400 cursor-pointer">Routers</li>
              <li className="hover:text-blue-400 cursor-pointer">Security</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Networking software</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">DNA Center</li>
              <li className="hover:text-blue-400 cursor-pointer">Meraki Dashboard</li>
              <li className="hover:text-blue-400 cursor-pointer">Catalyst Center</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">
              Services for enterprise networking
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Professional Services</li>
              <li className="hover:text-blue-400 cursor-pointer">Support Services</li>
              <li className="hover:text-blue-400 cursor-pointer">Managed Services</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all networking products →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SECURITY VIEW ---------------- */
function SecurityView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">Advanced Threat Protection</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Comprehensive security solutions to protect your network, endpoints,
          and cloud environments from advanced threats.
        </p>
        <span className="text-blue-600 font-medium">
          Explore Security Solutions →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Network Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Firewalls</li>
              <li className="hover:text-blue-400 cursor-pointer">Secure Web Gateway</li>
              <li className="hover:text-blue-400 cursor-pointer">VPN</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Cloud Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Cloud Access Security</li>
              <li className="hover:text-blue-400 cursor-pointer">Cloud Firewall</li>
              <li className="hover:text-blue-400 cursor-pointer">Cloud Security Posture</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Endpoint Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Anti-virus</li>
              <li className="hover:text-blue-400 cursor-pointer">Endpoint Detection</li>
              <li className="hover:text-blue-400 cursor-pointer">Device Control</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Security Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Managed Security</li>
              <li className="hover:text-blue-400 cursor-pointer">Security Consulting</li>
              <li className="hover:text-blue-400 cursor-pointer">Incident Response</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all security products →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COLLABORATION VIEW ---------------- */
function CollaborationView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">Unified Communications</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Seamless collaboration tools for calling, meetings, and team
          communication across any device.
        </p>
        <span className="text-blue-600 font-medium">
          Explore Collaboration Platform →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Calling</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Cloud Calling</li>
              <li className="hover:text-blue-400 cursor-pointer">IP Phones</li>
              <li className="hover:text-blue-400 cursor-pointer">Call Management</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Contact Center</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Omnichannel</li>
              <li className="hover:text-blue-400 cursor-pointer">AI-Powered Routing</li>
              <li className="hover:text-blue-400 cursor-pointer">Analytics</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Meetings</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Video Conferencing</li>
              <li className="hover:text-blue-400 cursor-pointer">Webinar</li>
              <li className="hover:text-blue-400 cursor-pointer">Team Spaces</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Devices</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Desk Phones</li>
              <li className="hover:text-blue-400 cursor-pointer">Headsets</li>
              <li className="hover:text-blue-400 cursor-pointer">Room Systems</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all collaboration products →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMPUTING VIEW ---------------- */
function ComputingView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">
          Enterprise Computing Solutions
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          High-performance computing infrastructure for modern data centers and
          hybrid cloud environments.
        </p>
        <span className="text-blue-600 font-medium">
          Explore Computing Solutions →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Servers</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Rack Servers</li>
              <li className="hover:text-blue-400 cursor-pointer">Blade Servers</li>
              <li className="hover:text-blue-400 cursor-pointer">Modular Systems</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Hyperconverged</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">HCI Software</li>
              <li className="hover:text-blue-400 cursor-pointer">Integrated Systems</li>
              <li className="hover:text-blue-400 cursor-pointer">Management</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Storage</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">SAN Storage</li>
              <li className="hover:text-blue-400 cursor-pointer">NAS Storage</li>
              <li className="hover:text-blue-400 cursor-pointer">Hyperconverged Storage</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Deployment Services</li>
              <li className="hover:text-blue-400 cursor-pointer">Support Services</li>
              <li className="hover:text-blue-400 cursor-pointer">Consulting</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all computing products →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- OBSERVABILITY VIEW ---------------- */
function ObservabilityView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">Full-Stack Observability</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Gain complete visibility across applications, infrastructure,
          networks, and cloud with AI-powered insights.
        </p>
        <span className="text-blue-600 font-medium">
          Explore Observability Platform →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Application Monitoring</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">APM</li>
              <li className="hover:text-blue-400 cursor-pointer">Real User Monitoring</li>
              <li className="hover:text-blue-400 cursor-pointer">Synthetic Monitoring</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">
              Infrastructure Monitoring
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Server Monitoring</li>
              <li className="hover:text-blue-400 cursor-pointer">Cloud Monitoring</li>
              <li className="hover:text-blue-400 cursor-pointer">Container Monitoring</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Network Monitoring</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Flow Analysis</li>
              <li className="hover:text-blue-400 cursor-pointer">Packet Capture</li>
              <li className="hover:text-blue-400 cursor-pointer">Performance Metrics</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">AI Operations</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Anomaly Detection</li>
              <li className="hover:text-blue-400 cursor-pointer">Root Cause Analysis</li>
              <li className="hover:text-blue-400 cursor-pointer">Predictive Insights</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all observability products →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SOFTWARE VIEW ---------------- */
function SoftwareView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">
          Enterprise Software Solutions
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Comprehensive software portfolio for managing, securing, and
          optimizing your IT infrastructure.
        </p>
        <span className="text-blue-600 font-medium">
          Explore Software Solutions →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Management Software</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Network Management</li>
              <li className="hover:text-blue-400 cursor-pointer">IT Service Management</li>
              <li className="hover:text-blue-400 cursor-pointer">Asset Management</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Security Software</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Identity Management</li>
              <li className="hover:text-blue-400 cursor-pointer">Encryption</li>
              <li className="hover:text-blue-400 cursor-pointer">Compliance Tools</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Cloud Software</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">SaaS Applications</li>
              <li className="hover:text-blue-400 cursor-pointer">Cloud Management</li>
              <li className="hover:text-blue-400 cursor-pointer">Integration Tools</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Analytics Software</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Business Intelligence</li>
              <li className="hover:text-blue-400 cursor-pointer">Data Analytics</li>
              <li className="hover:text-blue-400 cursor-pointer">Reporting Tools</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all software products →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SERVICES (CX) VIEW ---------------- */
function ServicesCXView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">
          Customer Experience Services
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          End-to-end services to design, implement, and optimize your technology
          solutions for maximum business value.
        </p>
        <span className="text-blue-600 font-medium">
          Explore Services Portfolio →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Professional Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Consulting</li>
              <li className="hover:text-blue-400 cursor-pointer">Implementation</li>
              <li className="hover:text-blue-400 cursor-pointer">Migration Services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Managed Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">24/7 Monitoring</li>
              <li className="hover:text-blue-400 cursor-pointer">Managed Security</li>
              <li className="hover:text-blue-400 cursor-pointer">Cloud Operations</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Support Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Technical Support</li>
              <li className="hover:text-blue-400 cursor-pointer">Software Updates</li>
              <li className="hover:text-blue-400 cursor-pointer">On-site Support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Training Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Certification Training</li>
              <li className="hover:text-blue-400 cursor-pointer">Technical Workshops</li>
              <li className="hover:text-blue-400 cursor-pointer">Digital Learning</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all services →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
