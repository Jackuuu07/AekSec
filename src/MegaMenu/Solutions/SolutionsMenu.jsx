import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SolutionsMenu() {
  const [active, setActive] = useState(null);

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-[260px_1fr] h-full">
      {/* LEFT SIDEBAR */}
      <div className="border-r px-8 py-10 space-y-6 text-sm">
        <button
          onClick={() => {
            setActive(null);
            navigate("/solutions/solution-lab");
          }}
          className="text-blue-600 font-medium"
        >
          Solutions Overview
        </button>

        <LeftItem
          label="Enterprise Security"
          active={active}
          setActive={setActive}
        />
        <LeftItem
          label="AI Infrastructure"
          active={active}
          setActive={setActive}
        />
        <LeftItem
          label="Cloud & Data Center"
          active={active}
          setActive={setActive}
        />
        <LeftItem label="Hybrid Work" active={active} setActive={setActive} />
        <LeftItem
          label="Industry Solutions"
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
              img="https://www.cisco.com/content/dam/cisco-cdc/site/images/header/solutions-ai.jpg"
              title="Zero Trust Security"
              text="Protect users, apps, and data everywhere."
              cta="Explore security"
            />
            <MenuCard
              img="https://www.cisco.com/content/dam/cisco-cdc/site/images/header/solutions-campus-branch.jpg"
              title="AI-ready Infrastructure"
              text="Build scalable, high-performance AI systems."
              cta="View AI solutions"
            />
            <MenuCard
              img="https://www.cisco.com/content/dam/cisco-cdc/site/images/header/solutions-smb.jpg"
              title="Hybrid Work"
              text="Enable secure, flexible work environments."
              cta="Learn more"
            />
          </div>
        )}

        {/* ===== ENTERPRISE SECURITY VIEW ===== */}
        {active === "Enterprise Security" && <EnterpriseSecurityView />}

        {/* ===== AI INFRASTRUCTURE VIEW ===== */}
        {active === "AI Infrastructure" && <AIInfrastructureView />}

        {/* ===== CLOUD & DATA CENTER VIEW ===== */}
        {active === "Cloud & Data Center" && <CloudDataCenterView />}

        {/* ===== HYBRID WORK VIEW ===== */}
        {active === "Hybrid Work" && <HybridWorkView />}

        {/* ===== INDUSTRY SOLUTIONS VIEW ===== */}
        {active === "Industry Solutions" && <IndustrySolutionsView />}
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

/* ---------------- ENTERPRISE SECURITY VIEW ---------------- */
function EnterpriseSecurityView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">
          Zero Trust Security Framework
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Comprehensive security architecture that verifies every user, device,
          and application before granting access, regardless of location.
        </p>
        <span className="text-blue-600 font-medium">
          Explore Security Framework →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Identity & Access</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Multi-factor Authentication</li>
              <li className="hover:text-blue-400 cursor-pointer">Single Sign-On</li>
              <li className="hover:text-blue-400 cursor-pointer">Identity Governance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Network Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Micro-segmentation</li>
              <li className="hover:text-blue-400 cursor-pointer">Secure Access Service Edge</li>
              <li className="hover:text-blue-400 cursor-pointer">Network Detection</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Endpoint Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Endpoint Protection</li>
              <li className="hover:text-blue-400 cursor-pointer">Device Compliance</li>
              <li className="hover:text-blue-400 cursor-pointer">Mobile Security</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Data Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Data Loss Prevention</li>
              <li className="hover:text-blue-400 cursor-pointer">Encryption Services</li>
              <li className="hover:text-blue-400 cursor-pointer">Data Classification</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Cloud Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Cloud Access Security Broker</li>
              <li className="hover:text-blue-400 cursor-pointer">Cloud Workload Protection</li>
              <li className="hover:text-blue-400 cursor-pointer">Cloud Security Posture</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Security Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Managed Detection & Response</li>
              <li className="hover:text-blue-400 cursor-pointer">Security Consulting</li>
              <li className="hover:text-blue-400 cursor-pointer">Incident Response</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all security solutions →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- AI INFRASTRUCTURE VIEW ---------------- */
function AIInfrastructureView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">
          AI-Ready Infrastructure Solutions
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Scalable, high-performance infrastructure designed to accelerate AI/ML
          workloads and drive innovation.
        </p>
        <span className="text-blue-600 font-medium">
          Explore AI Infrastructure →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Compute Platforms</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">GPU-Accelerated Servers</li>
              <li className="hover:text-blue-400 cursor-pointer">AI-Optimized Processors</li>
              <li className="hover:text-blue-400 cursor-pointer">High-Performance Computing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Storage Solutions</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">High-Performance Storage</li>
              <li className="hover:text-blue-400 cursor-pointer">Scale-out File Systems</li>
              <li className="hover:text-blue-400 cursor-pointer">Data Pipeline Storage</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Networking</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">High-Speed Interconnects</li>
              <li className="hover:text-blue-400 cursor-pointer">AI Fabric Networking</li>
              <li className="hover:text-blue-400 cursor-pointer">Low-Latency Networks</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Software Stack</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">AI Frameworks</li>
              <li className="hover:text-blue-400 cursor-pointer">ML Operations Platform</li>
              <li className="hover:text-blue-400 cursor-pointer">Container Orchestration</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Cloud AI Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">AI-as-a-Service</li>
              <li className="hover:text-blue-400 cursor-pointer">Model Training Services</li>
              <li className="hover:text-blue-400 cursor-pointer">Inference Services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Professional Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">AI Strategy Consulting</li>
              <li className="hover:text-blue-400 cursor-pointer">Implementation Services</li>
              <li className="hover:text-blue-400 cursor-pointer">Managed AI Operations</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all AI solutions →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- CLOUD & DATA CENTER VIEW ---------------- */
function CloudDataCenterView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">
          Hybrid Cloud & Modern Data Center
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Seamlessly connect and manage workloads across on-premises data
          centers, multiple clouds, and edge locations.
        </p>
        <span className="text-blue-600 font-medium">
          Explore Cloud Solutions →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Cloud Infrastructure</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Private Cloud</li>
              <li className="hover:text-blue-400 cursor-pointer">Hybrid Cloud Management</li>
              <li className="hover:text-blue-400 cursor-pointer">Multi-cloud Networking</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">
              Data Center Modernization
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Hyperconverged Infrastructure</li>
              <li className="hover:text-blue-400 cursor-pointer">Software-Defined Data Center</li>
              <li className="hover:text-blue-400 cursor-pointer">Automation & Orchestration</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Storage Solutions</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Software-Defined Storage</li>
              <li className="hover:text-blue-400 cursor-pointer">Backup & Disaster Recovery</li>
              <li className="hover:text-blue-400 cursor-pointer">Data Management</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Cloud Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Infrastructure as a Service</li>
              <li className="hover:text-blue-400 cursor-pointer">Platform as a Service</li>
              <li className="hover:text-blue-400 cursor-pointer">Database as a Service</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Edge Computing</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Edge Infrastructure</li>
              <li className="hover:text-blue-400 cursor-pointer">IoT Edge Solutions</li>
              <li className="hover:text-blue-400 cursor-pointer">5G Edge Computing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Migration Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Cloud Assessment</li>
              <li className="hover:text-blue-400 cursor-pointer">Workload Migration</li>
              <li className="hover:text-blue-400 cursor-pointer">Optimization Services</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all cloud solutions →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- HYBRID WORK VIEW ---------------- */
function HybridWorkView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">
          Modern Hybrid Work Solutions
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Enable secure, productive, and flexible work environments that support
          employees anywhere, on any device.
        </p>
        <span className="text-blue-600 font-medium">
          Explore Hybrid Work Solutions →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Collaboration Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Video Conferencing</li>
              <li className="hover:text-blue-400 cursor-pointer">Team Messaging</li>
              <li className="hover:text-blue-400 cursor-pointer">Content Collaboration</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Endpoint Solutions</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Laptops & Mobile Devices</li>
              <li className="hover:text-blue-400 cursor-pointer">Virtual Desktop Infrastructure</li>
              <li className="hover:text-blue-400 cursor-pointer">Device Management</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Workspace Technology</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Meeting Room Systems</li>
              <li className="hover:text-blue-400 cursor-pointer">Digital Signage</li>
              <li className="hover:text-blue-400 cursor-pointer">Smart Office Solutions</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Network & Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Secure Remote Access</li>
              <li className="hover:text-blue-400 cursor-pointer">SD-WAN for Branch Offices</li>
              <li className="hover:text-blue-400 cursor-pointer">Zero Trust Network Access</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Employee Experience</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Digital Workplace Platforms</li>
              <li className="hover:text-blue-400 cursor-pointer">Employee Engagement Tools</li>
              <li className="hover:text-blue-400 cursor-pointer">Wellness Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Consulting Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Hybrid Work Strategy</li>
              <li className="hover:text-blue-400 cursor-pointer">Change Management</li>
              <li className="hover:text-blue-400 cursor-pointer">Adoption Services</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all hybrid work solutions →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- INDUSTRY SOLUTIONS VIEW ---------------- */
function IndustrySolutionsView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">
          Industry-Specific Solutions
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Tailored technology solutions designed to address unique challenges
          and opportunities in your industry.
        </p>
        <span className="text-blue-600 font-medium">
          Explore Industry Solutions →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Healthcare</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Digital Health Platforms</li>
              <li className="hover:text-blue-400 cursor-pointer">Medical IoT Security</li>
              <li className="hover:text-blue-400 cursor-pointer">Healthcare Collaboration</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Financial Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Secure Banking Infrastructure</li>
              <li className="hover:text-blue-400 cursor-pointer">Fraud Detection Systems</li>
              <li className="hover:text-blue-400 cursor-pointer">Digital Branch Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Manufacturing</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Industrial IoT</li>
              <li className="hover:text-blue-400 cursor-pointer">Smart Factory Solutions</li>
              <li className="hover:text-blue-400 cursor-pointer">Supply Chain Visibility</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Retail</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Unified Commerce</li>
              <li className="hover:text-blue-400 cursor-pointer">Customer Experience</li>
              <li className="hover:text-blue-400 cursor-pointer">Store Digitalization</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Education</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Digital Learning Platforms</li>
              <li className="hover:text-blue-400 cursor-pointer">Campus Networking</li>
              <li className="hover:text-blue-400 cursor-pointer">Remote Learning Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Government</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-400 cursor-pointer">Secure Government Networks</li>
              <li className="hover:text-blue-400 cursor-pointer">Citizen Services Platforms</li>
              <li className="hover:text-blue-400 cursor-pointer">Public Safety Solutions</li>
            </ul>
            <button className="mt-4 text-blue-600 text-sm font-medium">
              View all industry solutions →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
