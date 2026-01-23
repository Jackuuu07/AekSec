import { Link } from "react-router-dom";
import {
  FiMonitor,
  FiCloud,
  FiShield,
  FiDatabase,
  FiCode,
  FiTrendingUp,
  FiGlobe,
  FiUsers,
  FiBriefcase,
  FiHeart,
  FiChevronRight,
} from "react-icons/fi";
import {
  MdBusiness,
  MdEmail,
  MdLocalHospital,
  MdScience,
  MdDevicesOther,
  MdAccountBalance,
  MdPhoneIphone,
  MdStore,
  MdElectricBolt,
  MdSettings,
} from "react-icons/md";
import { useState, useRef, useEffect } from "react";

// Industry submenu data
const industrySubmenus = {
  "Banking & Financial Services": {
    items: [
      { label: "Banking", to: "/industries/banking/banking" },
      { label: "Capital Markets", to: "/industries/banking/capital-markets" },
      { label: "Insurance", to: "/industries/banking/insurance" },
      ],
  },
  "Comms, Media & Information Services": {
    items: [
      { label: "Telecommunications", to: "/industries/comms/telecom" },
      { label: "Media & Entertainment", to: "/industries/comms/media" },
      { label: "Information Services", to: "/industries/comms/info-services" },
      { label: "Broadcasting", to: "/industries/comms/broadcasting" },
    ],
  },
  Consumer: {
    items: [
      { label: "Retail", to: "/industries/consumer/retail" },
      { label: "E-commerce", to: "/industries/consumer/ecommerce" },
      { label: "Consumer Goods", to: "/industries/consumer/goods" },
    ],
  },
  "Energy, Manufacturing and Resources": {
    items: [
      { label: "Oil & Gas", to: "/industries/energy/oil-gas" },
      { label: "Utilities", to: "/industries/energy/utilities" },
      { label: "Manufacturing", to: "/industries/energy/manufacturing" },
      { label: "Renewable Energy", to: "/industries/energy/renewable" },
    ],
  },
  "Technology Products and Services": {
    items: [
      { label: "Software Development", to: "/industries/technology/software" },
      { label: "IT Services", to: "/industries/technology/it-services" },
      { label: "Hardware", to: "/industries/technology/hardware" },
      { label: "SaaS", to: "/industries/technology/saas" },
      { label: "Cloud Services", to: "/industries/technology/cloud-services" },
    ],
  },
  
  "Hi-Tech": {
    items: [
      { label: "Semiconductors", to: "/industries/hi-tech/semiconductors" },
      { label: "Electronics", to: "/industries/hi-tech/electronics" },
      { label: "Robotics", to: "/industries/hi-tech/robotics" },
      { label: "IoT", to: "/industries/hi-tech/iot" },
    ],
  },
 
  
  "Platforms, Software Products and Gaming": {
    items: [
      { label: "Enterprise Software", to: "/industries/platforms/enterprise" },
      { label: "Consumer Software", to: "/industries/platforms/consumer" },
      { label: "Mobile Apps", to: "/industries/platforms/mobile-apps" },
      { label: "Video Games", to: "/industries/platforms/gaming" },
      
    ],
  },
};

export default function MegaMenu({
  type,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) {
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const [isSubmenuHovered, setIsSubmenuHovered] = useState(false);
  const submenuRef = useRef(null);
  const industryItemsRef = useRef({});

  // Keep submenu open when hovering over it
  useEffect(() => {
    const handleMouseEnterSubmenu = () => setIsSubmenuHovered(true);
    const handleMouseLeaveSubmenu = () => setIsSubmenuHovered(false);

    const submenuElement = submenuRef.current;
    if (submenuElement) {
      submenuElement.addEventListener("mouseenter", handleMouseEnterSubmenu);
      submenuElement.addEventListener("mouseleave", handleMouseLeaveSubmenu);
    }

    return () => {
      if (submenuElement) {
        submenuElement.removeEventListener(
          "mouseenter",
          handleMouseEnterSubmenu,
        );
        submenuElement.removeEventListener(
          "mouseleave",
          handleMouseLeaveSubmenu,
        );
      }
    };
  }, []);

  // Reset hoveredIndustry when submenu is not hovered and no industry is actively hovered
  useEffect(() => {
    if (!isSubmenuHovered && hoveredIndustry) {
      // Check if any industry item is still hovered
      const isAnyIndustryHovered = Object.values(industryItemsRef.current).some(
        (element) => element && element.matches(":hover"),
      );

      if (!isAnyIndustryHovered) {
        const timer = setTimeout(() => {
          setHoveredIndustry(null);
        }, 150); // Small delay to allow moving between items
        return () => clearTimeout(timer);
      }
    }
  }, [isSubmenuHovered, hoveredIndustry]);

  const menuData = {
    "what-we-do": {
      title: "What We Do",
      sections: [
        {
          title: "Services",
          items: [
            {
              icon: <FiMonitor />,
              label: "Applications",
              to: "/services/applications",
            },
            {
              icon: <FiTrendingUp />,
              label: "Kulp Intelligence",
              to: "/services/kulp-intelligence",
            },
            {
              icon: <FiBriefcase />,
              label: "Business Process Services",
              to: "/services/business-process",
            },
            { icon: <FiCloud />, label: "Cloud", to: "/services/cloud" },
            {
              icon: <FiUsers />,
              label: "Consulting",
              to: "/services/consulting",
            },
            {
              icon: <FiShield />,
              label: "Cybersecurity",
              to: "/services/cybersecurity",
            },
            {
              icon: <FiDatabase />,
              label: "Data & Analytics",
              to: "/services/data-analytics",
            },
            {
              icon: <FiGlobe />,
              label: "Digital Experiences",
              to: "/services/digital-experiences",
            },
            {
              icon: <FiCode />,
              label: "Engineering",
              to: "/services/engineering",
            },
            {
              icon: <FiHeart />,
              label: "Sustainability",
              to: "/services/sustainability",
            },
          ],
        },
        {
          title: "Industries",
          items: [
            {
              icon: <MdAccountBalance />,
              label: "Banking & Financial Services",
            },
            {
              icon: <MdPhoneIphone />,
              label: "Comms, Media & Information Services",
            },
            {
              icon: <MdStore />,
              label: "Consumer",
            },
            {
              icon: <MdElectricBolt />,
              label: "Energy, Manufacturing and Resources",
            },
            {
              icon: <MdSettings />,
              label: "Technology Products and Services",
            },
            
            {
              icon: <MdDevicesOther />,
              label: "Hi-Tech",
            },
            
            
            {
              icon: <FiMonitor />,
              label: "Platforms, Software Products and Gaming",
            },
          ],
        },
      ],
    },
    about: {
      title: "About KalpTech",
      sections: [
        {
          title: "About Us",
          items: [
            {
              icon: <FiUsers />,
              label: "Analyst Speak",
              to: "/about/analyst-speak",
            },
            {
              icon: <FiTrendingUp />,
              label: "Awards and Recognitions",
              to: "/about/awards",
            },
            {
              icon: <FiBriefcase />,
              label: "Case Studies",
              to: "/about/case-studies",
            },
            {
              icon: <FiHeart />,
              label: "Corporate Sustainability Events",
              to: "/about/sustainability-events",
            },
            { icon: <FiUsers />, label: "Leadership", to: "/about/leadership" },
            { icon: <FiGlobe />, label: "Locations", to: "/about/locations" },
          ],
        },
        {
          title: "Our Values",
          items: [
            {
              icon: <FiUsers />,
              label: "Inclusion and Belonging",
              to: "/values/inclusion",
            },
            {
              icon: <MdBusiness />,
              label: "Investors",
              to: "/values/investors",
            },
            { icon: <MdEmail />, label: "News", to: "/values/news" },
            {
              icon: <FiUsers />,
              label: "Partner Ecosystem",
              to: "/values/partners",
            },
            {
              icon: <FiShield />,
              label: "Privacy at KalpTech",
              to: "/values/privacy",
            },
            {
              icon: <FiUsers />,
              label: "Supplier Diversity",
              to: "/values/supplier-diversity",
            },
          ],
        },
        {
          title: "Innovation",
          items: [
            {
              icon: <FiTrendingUp />,
              label: "KalpTech Innovation Network",
              to: "/innovation/network",
            },
            {
              icon: <MdBusiness />,
              label: "KalpTech Ventures",
              to: "/innovation/ventures",
            },
            {
              icon: <FiHeart />,
              label: "KalpTech Wellbeing",
              to: "/innovation/wellbeing",
            },
          ],
        },
      ],
    },
  };

  const data = menuData[type];

  if (!data) return null;

  const showIndustrySubmenu =
    hoveredIndustry && industrySubmenus[hoveredIndustry];

  return (
    <div
      className="absolute top-full max-w-6xl left-1/2 -translate-x-1/2 w-full bg-white border-t shadow-xl z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => {
        if (!isSubmenuHovered) {
          setHoveredIndustry(null);
        }
        onMouseLeave();
      }}
    >
      <div className="max-w-7xl mx-auto px-12 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{data.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.sections.map((section, sectionIndex) => {
            // For industries section, we need special handling
            if (section.title === "Industries") {
              return (
                <div key={sectionIndex} className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <div
                          ref={(el) =>
                            (industryItemsRef.current[item.label] = el)
                          }
                          onMouseEnter={() => setHoveredIndustry(item.label)}
                          className="relative"
                        >
                          <div className="flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group cursor-default">
                            <div className="flex items-center gap-3">
                              <span className="text-gray-500 group-hover:text-blue-600 transition-colors">
                                {item.icon}
                              </span>
                              <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                                {item.label}
                              </span>
                            </div>
                            <FiChevronRight className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            // Regular section (Services, About Us, etc.)
            return (
              <div key={sectionIndex} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        to={item.to}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
                        onClick={onClose}
                      >
                        <span className="text-gray-500 group-hover:text-blue-600 transition-colors">
                          {item.icon}
                        </span>
                        <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Third column for industry submenu */}
          {showIndustrySubmenu && (
            <div
              ref={submenuRef}
              className="space-y-4"
              onMouseEnter={() => setIsSubmenuHovered(true)}
              onMouseLeave={() => setIsSubmenuHovered(false)}
            >
              <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
                {hoveredIndustry}
              </h3>
              <ul className="space-y-1">
                {industrySubmenus[hoveredIndustry].items.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
                      onClick={onClose}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-blue-600" />
                      <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* If no industry is hovered and we have exactly 2 sections, show empty third column for spacing */}
          {!showIndustrySubmenu && data.sections.length === 2 && (
            <div className="space-y-4">{/* Empty column for spacing */}</div>
          )}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {type === "what-we-do"
                  ? "Ready to transform your business?"
                  : "Want to learn more about us?"}
              </h3>
              <p className="text-gray-600 mt-1">
                {type === "what-we-do"
                  ? "Let's discuss how we can help you succeed"
                  : "Get in touch with our team today"}
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={onClose}
              >
                {type === "what-we-do" ? "Contact Sales" : "Contact Us"}
              </Link>
              {type === "what-we-do" && (
                <Link
                  to="/trial-demos"
                  className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                  onClick={onClose}
                >
                  Request Demo
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
