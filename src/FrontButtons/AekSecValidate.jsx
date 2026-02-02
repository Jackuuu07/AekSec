import { useState } from "react";

export default function KulpTechValidate() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gray-900">
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
      alt="KalpTech Validate"
      className="w-full h-full object-cover opacity-40"
    />
  </div>
  
  <div className="relative max-w-6xl mx-auto px-6 py-16 sm:py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Content */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-light text-white mb-4">
          KalpTech Validate
        </h1>
        <p className="text-gray-300 max-w-xl text-base">
          Validated security architectures and deployment frameworks for enterprise digital platforms.
        </p>
      </div>

      {/* Right Content - Compliance Badges */}
      <div>
        <p className="text-gray-400 text-sm mb-4">Compliance Standards</p>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
            ISO 27001
          </span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
            NIST
          </span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
            GDPR
          </span>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
            PCI DSS
          </span>
        </div>
        <p className="text-gray-400 text-xs mt-4">
          Validated against industry standards and frameworks
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Overview Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <p className="text-gray-700 text-base leading-relaxed">
              KalpTech Validate provides security architects, engineers, and teams with validated 
              solutions for designing, deploying, and securing critical platforms. Our validated 
              architectures help organizations reduce implementation risk and ensure secure outcomes.
            </p>

            {/* FAQ Accordion */}
            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Target Audience",
                  content: "IT architects, security engineers, deployment teams, and organizations responsible for operating and securing enterprise platforms.",
                },
                {
                  title: "Service Offering",
                  content: "Design guides, deployment frameworks, validated architectures, and best practices aligned with real-world cybersecurity challenges.",
                },
                {
                  title: "Benefits",
                  content: "Validated designs reduce implementation risk, speed up deployments, and ensure consistent, secure outcomes across environments.",
                },
              ].map((item, index) => (
                <div key={index} className="border-b pb-4">
                  <button
                    onClick={() => setOpenItem(openItem === index ? null : index)}
                    className="w-full flex justify-between items-center text-left font-medium text-gray-900 text-sm sm:text-base"
                  >
                    {item.title}
                    <span className="text-xl text-gray-500">
                      {openItem === index ? "−" : "+"}
                    </span>
                  </button>

                  {openItem === index && (
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
  <h3 className="font-medium text-gray-900 mb-6">Validation Process</h3>
  
  <div className="space-y-4">
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
        1
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900">Assessment</p>
        <p className="text-gray-600 text-xs mt-1">Architecture review and requirements analysis</p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
        2
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900">Validation</p>
        <p className="text-gray-600 text-xs mt-1">Testing and compliance verification</p>
      </div>
    </div>

    <div className="flex items-start gap-3">
      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
        3
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900">Documentation</p>
        <p className="text-gray-600 text-xs mt-1">Deployment guides and architecture documentation</p>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gray-50 border-y">
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">
            Validation Portfolio
          </h2>

          <div className="space-y-16">
            {/* Design Zone */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Validated Design Zone"
                className="rounded-lg shadow-sm w-full"
              />
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Validated Design Zone
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Tested and documented approaches for securely designing, deploying, operating, 
                  and scaling cybersecurity solutions. Provides best practices and proven 
                  architectures for enterprise-grade implementations.
                </p>
              </div>
            </div>

            {/* Validation Framework */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1600267165477-6d4cc741b379"
                  alt="Validated Framework"
                  className="rounded-lg shadow-sm w-full"
                />
              </div>
              <div className="lg:order-1">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Validation Framework
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Agile validation framework delivering technical insights, design documentation, 
                  and deployment guidance. Built around customer-centric criteria and modern 
                  security challenges.
                </p>
              </div>
            </div>

            {/* Validated Profiles */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <img
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
                alt="Validated Profiles"
                className="rounded-lg shadow-sm w-full"
              />
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Validated Profiles
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Tested configurations, topologies, and deployment models for hardware, 
                  software, and cloud-based security environments—ensuring reliability, 
                  compliance, and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-3">Architecture Validation</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive testing and validation of security architecture designs
            </p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-3">Deployment Guidance</h3>
            <p className="text-gray-600 text-sm">
              Step-by-step deployment frameworks and implementation guides
            </p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-3">Compliance Assurance</h3>
            <p className="text-gray-600 text-sm">
              Ensuring designs meet regulatory and industry compliance requirements
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}