import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WhyAekSecMenu() {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-[260px_1fr] h-full">
      {/* LEFT SIDEBAR */}
      <div className="border-r px-8 py-10 space-y-6 text-sm">
        <button
            onClick={() => {
            setActive(null);
            navigate("/why/whyAekSec");
          }}          
          className="text-blue-600 font-medium"
        >
          Why AekSec
        </button>
        <LeftItem label="Outcomes We Deliver" active={active} setActive={setActive} />
        <LeftItem label="About Us" active={active} setActive={setActive} />
      </div>

      {/* RIGHT AREA */}
      <div className="px-12 py-10 overflow-y-auto no-scrollbar h-full">
        {/* ===== DEFAULT (NO ACTIVE OR WHY AEKSEC) ===== */}
        {(active === null || active === "Why AekSec") && (
          <div className="space-y-10">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-light mb-4">Why AekSec</h2>
              <p className="text-gray-600 mb-6 max-w-2xl">
                AekSec creates the infrastructure you need to transform how you connect, protect, and innovate in the AI era.
              </p>
              <span className="text-blue-600 font-medium">
                See the AekSec advantage →
              </span>
            </div>

            {/* Three Column Cards */}
            <div className="grid grid-cols-3 gap-10">
              <ContentCard
                title="Our Purpose"
                description="We Power an Inclusive Future for All."
                cta="Explore our Purpose"
                link="#"
                additionalLink={{
                  text: "Read FY24 Purpose Report",
                  link: "#"
                }}
              />
              <ContentCard
                title="Success stories"
                description="Discover how AekSec technologies drive real-world success for our customers and power AekSec's own operations and innovation."
                cta="Explore customer stories"
                link="#"
              />
              <ContentCard
                title="How we use our technology"
                description="Learn how we leverage our own solutions to enhance security, collaboration, and efficiency across our global operations."
                cta="Learn more"
                link="#"
              />
            </div>

            {/* Additional Highlights Section */}
            <div className="mt-16">
              <h3 className="text-xl font-light mb-6">AekSec Differentiators</h3>
              <div className="grid grid-cols-3 gap-6">
                <HighlightCard
                  title="AI-Powered Security"
                  description="Advanced threat detection and prevention using cutting-edge artificial intelligence"
                  icon="🛡️"
                />
                <HighlightCard
                  title="Global Innovation"
                  description="R&D centers worldwide delivering breakthrough technologies"
                  icon="🌍"
                />
                <HighlightCard
                  title="Sustainable Solutions"
                  description="Energy-efficient infrastructure with environmental responsibility"
                  icon="♻️"
                />
              </div>
            </div>
          </div>
        )}

        {/* ===== OUTCOMES WE DELIVER VIEW ===== */}
        {active === "Outcomes We Deliver" && <OutcomesView />}

        {/* ===== ABOUT US VIEW ===== */}
        {active === "About Us" && <AboutUsView />}
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

/* ---------------- CONTENT CARD ---------------- */
function ContentCard({ title, description, cta, link, additionalLink }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="font-medium mb-3 text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="space-y-2">
        <a href={link} className="block text-blue-600 text-sm font-medium hover:underline">
          {cta} →
        </a>
        {additionalLink && (
          <a href={additionalLink.link} className="block text-blue-600 text-sm font-medium hover:underline">
            {additionalLink.text} →
          </a>
        )}
      </div>
    </div>
  );
}

/* ---------------- HIGHLIGHT CARD ---------------- */
function HighlightCard({ title, description, icon }) {
  return (
    <div className="border-l-4 border-blue-600 pl-4 py-2">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xl">{icon}</span>
        <h4 className="font-medium">{title}</h4>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

/* ---------------- OUTCOMES WE DELIVER VIEW ---------------- */
function OutcomesView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">Outcomes We Deliver</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          We partner with organizations to achieve measurable business outcomes through innovative technology solutions and expert guidance.
        </p>
        <span className="text-blue-600 font-medium">
          Explore our outcomes framework →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Security Outcomes</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="pb-2 border-b border-gray-100">
                <span className="font-medium text-gray-800">Reduced Risk</span>
                <p className="text-sm mt-1">97% reduction in security incidents through proactive threat intelligence</p>
              </li>
              <li className="pb-2 border-b border-gray-100">
                <span className="font-medium text-gray-800">Compliance Assurance</span>
                <p className="text-sm mt-1">100% audit success rate with automated compliance reporting</p>
              </li>
              <li className="pb-2">
                <span className="font-medium text-gray-800">Faster Detection</span>
                <p className="text-sm mt-1">83% faster threat detection with AI-powered analytics</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Business Agility</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="pb-2 border-b border-gray-100">
                <span className="font-medium text-gray-800">Faster Innovation</span>
                <p className="text-sm mt-1">Reduce time-to-market by 40% with agile infrastructure</p>
              </li>
              <li className="pb-2 border-b border-gray-100">
                <span className="font-medium text-gray-800">Scalable Growth</span>
                <p className="text-sm mt-1">Support 300% business growth without infrastructure constraints</p>
              </li>
              <li className="pb-2">
                <span className="font-medium text-gray-800">Digital Transformation</span>
                <p className="text-sm mt-1">Complete digital transformation in 18 months instead of 36</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Operational Excellence</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="pb-2 border-b border-gray-100">
                <span className="font-medium text-gray-800">Cost Optimization</span>
                <p className="text-sm mt-1">35% reduction in IT operational costs through automation</p>
              </li>
              <li className="pb-2 border-b border-gray-100">
                <span className="font-medium text-gray-800">Uptime & Reliability</span>
                <p className="text-sm mt-1">99.999% availability with proactive monitoring and redundancy</p>
              </li>
              <li className="pb-2 border-b border-gray-100">
                <span className="font-medium text-gray-800">Simplified Management</span>
                <p className="text-sm mt-1">Unified management of multi-cloud environments from single dashboard</p>
              </li>
              <li className="pb-2">
                <span className="font-medium text-gray-800">Energy Efficiency</span>
                <p className="text-sm mt-1">45% reduction in data center energy consumption</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Customer Experience</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="pb-2 border-b border-gray-100">
                <span className="font-medium text-gray-800">Enhanced Collaboration</span>
                <p className="text-sm mt-1">75% improvement in team collaboration with unified communication tools</p>
              </li>
              <li className="pb-2 border-b border-gray-100">
                <span className="font-medium text-gray-800">Remote Workforce Enablement</span>
                <p className="text-sm mt-1">Secure, seamless remote work for 100% of employees</p>
              </li>
              <li className="pb-2">
                <span className="font-medium text-gray-800">Customer Satisfaction</span>
                <p className="text-sm mt-1">92% customer satisfaction rate with 24/7 global support</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- ABOUT US VIEW ---------------- */
function AboutUsView() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-4">About AekSec</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          AekSec is a global leader in cybersecurity and infrastructure solutions, empowering organizations to secure their digital future while driving innovation and growth.
        </p>
        <span className="text-blue-600 font-medium">
          Learn more about our company →
        </span>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Our Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="pb-3 border-b border-gray-100">
                <span className="font-medium text-gray-800 block mb-1">Founded</span>
                <p className="text-sm">2010 - 15 years of innovation excellence</p>
              </li>
              <li className="pb-3 border-b border-gray-100">
                <span className="font-medium text-gray-800 block mb-1">Global Presence</span>
                <p className="text-sm">Operations in 65+ countries across 6 continents</p>
              </li>
              <li className="pb-3 border-b border-gray-100">
                <span className="font-medium text-gray-800 block mb-1">Employees</span>
                <p className="text-sm">25,000+ dedicated professionals worldwide</p>
              </li>
              <li className="pb-3">
                <span className="font-medium text-gray-800 block mb-1">Headquarters</span>
                <p className="text-sm">San Francisco, California with regional hubs globally</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Leadership</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Executive Team</li>
              <li className="hover:text-blue-600 cursor-pointer">Board of Directors</li>
              <li className="hover:text-blue-600 cursor-pointer">Technology Advisory Board</li>
              <li className="hover:text-blue-600 cursor-pointer">Industry Leadership</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-4 text-lg">Innovation & Research</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="pb-3 border-b border-gray-100">
                <span className="font-medium text-gray-800 block mb-1">R&D Investment</span>
                <p className="text-sm">20% of revenue invested in research and development annually</p>
              </li>
              <li className="pb-3 border-b border-gray-100">
                <span className="font-medium text-gray-800 block mb-1">Patents</span>
                <p className="text-sm">2,500+ patents granted for breakthrough technologies</p>
              </li>
              <li className="pb-3 border-b border-gray-100">
                <span className="font-medium text-gray-800 block mb-1">Innovation Centers</span>
                <p className="text-sm">12 global innovation hubs focusing on AI, quantum security, and IoT</p>
              </li>
              <li className="pb-3">
                <span className="font-medium text-gray-800 block mb-1">Academic Partnerships</span>
                <p className="text-sm">Collaborations with 50+ leading universities worldwide</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Corporate Responsibility</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">Sustainability Initiatives</li>
              <li className="hover:text-blue-600 cursor-pointer">Community Engagement</li>
              <li className="hover:text-blue-600 cursor-pointer">Diversity & Inclusion</li>
              <li className="hover:text-blue-600 cursor-pointer">Ethical Business Practices</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-light mb-6">Awards & Recognition</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-amber-500 text-2xl mb-2">🏆</div>
            <h4 className="font-medium mb-1">Gartner Magic Quadrant Leader</h4>
            <p className="text-sm text-gray-600">Network Firewalls 2023-2024</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-blue-500 text-2xl mb-2">⭐</div>
            <h4 className="font-medium mb-1">Fortune 100 Best Companies</h4>
            <p className="text-sm text-gray-600">#24 in 2024 Rankings</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-green-500 text-2xl mb-2">🌱</div>
            <h4 className="font-medium mb-1">Dow Jones Sustainability Index</h4>
            <p className="text-sm text-gray-600">Industry Leader 3 years running</p>
          </div>
        </div>
      </div>
    </div>
  );
}