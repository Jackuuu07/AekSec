import { useNavigate, Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import {
  CloudDownload,
  GraduationCap,
  BadgeCheck,
  BookOpen,
  Users as UsersIcon,
  Headphones,
  Network,
  Fingerprint,
  Eye,
  Users,
  Server,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

// Import your local assets (make sure these paths are correct)
import AiDefence from "../assets/def_1.jpg";
import HyperSonic from "../assets/hyp_1.jpg";

export default function Home() {
  const navigate = useNavigate();
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const lines = [
    "Redefining Intelligent Infrastructure",
    "Where AI Meets Enterprise Excellence",
    "Secure, Scalable, Future-Ready Solutions",
  ];

  useEffect(() => {
    // Initial delay before animation starts
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
      setFadeIn(true);
    }, 500);

    // Text line rotation
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentLine((prev) => (prev + 1) % lines.length);
        setFadeIn(true);
      }, 500);
    }, 3000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* ============ HeroBanner Section ============ */}
      <section className="h-screen bg-white flex items-center px-8 md:px-20 relative overflow-hidden">
        {/* Subtle gradient background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50" />

        {/* Animated floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-medium" />
        <div className="absolute top-3/4 left-1/3 w-80 h-80 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-fast" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              {/* Company logo/brand */}
              <div className="mb-6">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    KulpTech
                  </span>
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mt-2" />
              </div>

              {/* Animated text display */}
              <div className="h-24 md:h-32 flex items-center">
                <div className="space-y-4">
                  <div
                    className={`transition-all duration-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                  >
                    <h2 className="text-3xl md:text-4xl font-light text-gray-800">
                      AI's Next Frontier
                    </h2>
                  </div>

                  <div
                    className={`transition-all duration-700 transform ${fadeIn ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                  >
                    <h3 className="text-2xl md:text-3xl font-medium text-blue-600">
                      {lines[currentLine]}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div
                className={`transition-all duration-1000 delay-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  Power AI at the edge by bringing compute, networking, and
                  security where your data originates and customer engagement
                  thrives. Unlock seamless, real-time experiences and new value
                  with KulpTech.
                </p>
              </div>

              {/* CTA Button */}
              <div
                className={`transition-all duration-1000 delay-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                <button
                  onClick={() => navigate("/explore")}
                  className="
                  group
                  relative
                  bg-gradient-to-r from-blue-600 to-purple-600
                  text-white
                  px-8 py-4
                  rounded-full
                  font-medium
                  flex items-center gap-3
                  transition-all duration-300 ease-out
                  hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)]
                  hover:scale-105
                  active:scale-95
                  overflow-hidden
                "
                >
                  <span className="relative z-10">
                    Explore Security Solutions
                  </span>
                  <span
                    className="
                  relative z-10
                  transition-transform duration-300
                  group-hover:translate-x-2
                "
                  >
                    →
                  </span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>
              </div>
            </div>

            {/* Right side - Tech visualization */}
            <div className="hidden lg:block">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Clean letter animation */}
                  <div className="flex space-x-1">
                    {["K", "u", "l", "p", "T", "e", "c", "h"].map(
                      (letter, index) => (
                        <span
                          key={index}
                          className="text-8xl font-bold text-gray-900 animate-fade-in"
                          style={{
                            animationDelay: `${index * 0.06}s`,
                            fontFamily: "'Inter', -apple-system, sans-serif",
                          }}
                        >
                          {letter}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes fade-in {
                0% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }

              .animate-fade-in {
                animation: fade-in 0.4s ease-out forwards;
                opacity: 0;
              }
            `}</style>
          </div>
        </div>

        {/* Add custom animations to tailwind config if not already present */}
        <style jsx>{`
          @keyframes float-slow {
            0%,
            100% {
              transform: translateY(0px) translateX(0px);
            }
            50% {
              transform: translateY(-20px) translateX(10px);
            }
          }
          @keyframes float-medium {
            0%,
            100% {
              transform: translateY(0px) translateX(0px);
            }
            50% {
              transform: translateY(-30px) translateX(-15px);
            }
          }
          @keyframes float-fast {
            0%,
            100% {
              transform: translateY(0px) translateX(0px);
            }
            50% {
              transform: translateY(-15px) translateX(20px);
            }
          }
          .animate-float-slow {
            animation: float-slow 10s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: float-medium 8s ease-in-out infinite;
          }
          .animate-float-fast {
            animation: float-fast 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* ============ QuickLinks Section ============ */}
      {/* ============ QuickLinks Section ============ */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Accelerate Your AI Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access essential resources, expert guidance, and industry-leading
              tools to transform your organization with intelligent
              infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[
              {
                icon: CloudDownload,
                label: "Downloads",
                path: "/downloads",
                desc: "Latest software, SDKs, and tools",
              },
              {
                icon: GraduationCap,
                label: "Certifications",
                path: "/certifications",
                desc: "Industry-recognized credentials",
              },
              {
                icon: BadgeCheck,
                label: "KulpTech Validated",
                path: "/kulptech-validated",
                desc: "Verified solutions & architectures",
              },
              {
                icon: BookOpen,
                label: "Training",
                path: "/training",
                desc: "Expert-led learning programs",
              },
              {
                icon: UsersIcon,
                label: "Community",
                path: "/community",
                desc: "Connect with peers & experts",
              },
              {
                icon: Headphones,
                label: "Support",
                path: "/support",
                desc: "24/7 technical assistance",
              },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="group flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-100"
              >
                <div className="relative">
                  <div className="p-4 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.label}
                </span>
                <p className="text-sm text-gray-500 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
              </button>
            ))}
          </div>

          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-6">
              Need personalized guidance? Our experts are ready to help.
            </p>
            <button
              onClick={() => navigate("/consultation")}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Schedule Expert Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ============ LatestProducts Section ============ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-light text-gray-900 mb-6">
              Enterprise-Grade AI Infrastructure Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              KulpTech delivers comprehensive AI platforms that seamlessly
              integrate compute, networking, and security to power your most
              demanding AI workloads at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "KulpTech AI Platform",
                tagline: "Unified AI Orchestration",
                image:
                  "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                description:
                  "A comprehensive platform designed to build, deploy, and secure AI workloads at enterprise scale. Enables faster innovation with built-in governance, observability, and compliance.",
                features: [
                  "Model Management",
                  "MLOps Pipeline",
                  "Enterprise Security",
                ],
                primaryLink: "/products/ai-platform",
                secondaryLink: "/products/ai-platform/details",
                primaryText: "Explore Platform",
                secondaryText: "Technical Specifications",
              },
              {
                title: "KulpTech AI Defense",
                tagline: "Proactive AI Security",
                image:
                  "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                description:
                  "Advanced AI-native security solution that continuously monitors model behavior, data pipelines, and inference activity to detect threats before impact.",
                features: [
                  "Threat Detection",
                  "Data Protection",
                  "Compliance Monitoring",
                ],
                primaryLink: "/products/ai-defense",
                secondaryLink: "/products/ai-defense/overview",
                primaryText: "Explore Security",
                secondaryText: "Security Whitepaper",
              },
              {
                title: "KulpTech HyperFabric",
                tagline: "Intelligent Networking",
                image:
                  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                description:
                  "Cloud-like networking fabric that simplifies data center operations, enabling high-performance AI traffic with zero manual complexity.",
                features: [
                  "AI-Optimized",
                  "Zero-Trust Security",
                  "Automated Operations",
                ],
                primaryLink: "/products/hyperfabric",
                secondaryLink: "/products/hyperfabric/architecture",
                primaryText: "Explore Networking",
                secondaryText: "Architecture Guide",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={product.title}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {product.tagline}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <Link
                      to={product.primaryLink}
                      className="flex items-center justify-between group/link px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                    >
                      <span>{product.primaryText}</span>
                      <span className="transform group-hover/link:translate-x-2 transition-transform">
                        →
                      </span>
                    </Link>

                    <Link
                      to={product.secondaryLink}
                      className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors flex items-center gap-2"
                    >
                      {product.secondaryText}
                      <span className="text-lg">↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <div className="inline-flex flex-col sm:flex-row gap-6 items-center">
              <button
                onClick={() => navigate("/products")}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View All Products
              </button>
              <button
                onClick={() => navigate("/solutions")}
                className="px-10 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                Explore Industry Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ InnovationShowcase Section ============ */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Driving the Future of Intelligent Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how KulpTech is transforming enterprises with
              cutting-edge AI capabilities and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Announcing KulpTech AI Canvas",
                description:
                  "Experience real-time telemetry, AI insights, and team collaboration in a unified workspace designed for modern AI development.",
                category: "Product Launch",
                primaryAction: { text: "Watch Demo", path: "/ai-canvas/demo" },
                secondaryAction: {
                  text: "Learn Methodology",
                  path: "/ai-approach",
                },
              },
              {
                image:
                  "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "KulpTech AI Defense Platform",
                description:
                  "Secure your AI development and usage with comprehensive visibility, automated guardrails, and real-time threat intelligence.",
                category: "Security",
                primaryAction: {
                  text: "Learn More",
                  path: "/products/ai-defense",
                },
                secondaryAction: {
                  text: "Request Demo",
                  path: "/demo/ai-defense",
                },
              },
              {
                image:
                  "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Secure AI Factory with NVIDIA",
                category: "Partnership",
                description:
                  "From AI PODs to fully managed AI stacks, see how KulpTech accelerates enterprise AI adoption with NVIDIA's computing power.",
                primaryAction: {
                  text: "Explore Partnership",
                  path: "/partners/nvidia",
                },
                secondaryAction: {
                  text: "Technical Details",
                  path: "/ai-infrastructure",
                },
              },
              {
                image:
                  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Mass-Scale AI Infrastructure",
                category: "Infrastructure",
                description:
                  "Unlock scalable, high-performance AI with our portfolio of advanced infrastructure solutions designed for enterprise needs.",
                primaryAction: {
                  text: "Explore Portfolio",
                  path: "/infrastructure",
                },
                secondaryAction: {
                  text: "Learn About Silicon",
                  path: "/technology/silicon",
                },
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold rounded-full">
                      {card.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="space-y-4">
                    <button
                      onClick={() => navigate(card.primaryAction.path)}
                      className="flex items-center justify-between w-full px-4 py-3 bg-blue-50 text-blue-600 rounded-xl font-medium hover:bg-blue-100 transition-colors group/btn"
                    >
                      <span>{card.primaryAction.text}</span>
                      <span className="transform group-hover/btn:translate-x-2 transition-transform">
                        →
                      </span>
                    </button>

                    <button
                      onClick={() => navigate(card.secondaryAction.path)}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors group/btn2"
                    >
                      <span>{card.secondaryAction.text}</span>
                      <span className="transform group-hover/btn2:translate-x-2 transition-transform">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-8 items-center justify-center">
              <button
                onClick={() => navigate("/innovation")}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Explore Innovation Center
              </button>
              <button
                onClick={() => navigate("/why/whyAekSec")}
                className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Why Choose KulpTech?
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TechnologyDomains Section ============ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Comprehensive Technology Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore KulpTech's integrated solutions across every critical
              technology domain for modern enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Network,
                label: "Intelligent Networking",
                description:
                  "AI-optimized networking solutions for seamless connectivity",
                path: "/networking",
              },
              {
                icon: Fingerprint,
                label: "Enterprise Security",
                description:
                  "End-to-end security solutions for AI infrastructure",
                path: "/security",
              },
              {
                icon: Eye,
                label: "AI Observability",
                description:
                  "Real-time monitoring and insights across AI environments",
                path: "/observability",
              },
              {
                icon: Users,
                label: "Collaboration Suite",
                description:
                  "AI-powered collaboration tools for distributed teams",
                path: "/collaboration",
              },
              {
                icon: Server,
                label: "Edge Computing",
                description:
                  "Distributed computing solutions for AI at the edge",
                path: "/computing",
              },
              {
                icon: Sparkles,
                label: "AI & Machine Learning",
                description:
                  "Complete AI/ML platform for enterprise innovation",
                path: "/ai-ml",
              },
            ].map((tech, index) => (
              <button
                key={index}
                onClick={() => navigate(tech.path)}
                className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-left"
              >
                <div className="flex flex-col items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
                    <tech.icon className="w-12 h-12 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {tech.label}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:text-blue-700 transition-colors mt-4">
                    <span>Explore Solutions</span>
                    <span className="transform group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-20 flex flex-col sm:flex-row gap-8 items-center justify-center">
            <button
              onClick={() => navigate("/technology")}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Browse All Technologies
            </button>
            <button
              onClick={() => navigate("/services")}
              className="px-10 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Explore Professional Services
            </button>
          </div>
        </div>
      </section>

      {/* ============ InsightsSection ============ */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-8">
                Insights & Research
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Stay ahead with cutting-edge research, industry analysis, and
                expert perspectives from KulpTech's thought leadership.
              </p>

              <div className="space-y-8">
                <button
                  onClick={() => navigate("/research")}
                  className="flex items-center gap-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                >
                  <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span>Explore Research Library</span>
                  <span className="transform group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </button>

                <button
                  onClick={() => navigate("/webinars")}
                  className="flex items-center gap-4 text-purple-600 font-semibold hover:text-purple-700 transition-colors group"
                >
                  <div className="p-3 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors">
                    <UsersIcon className="w-6 h-6" />
                  </div>
                  <span>Join Expert Webinars</span>
                  <span className="transform group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>

            <div className="space-y-10">
              {[
                {
                  category: "Research Report",
                  title: "KulpTech AI Readiness Index 2024",
                  description:
                    "Discover how enterprises are preparing for AI-driven transformation and why proactive infrastructure planning is now a strategic priority.",
                  cta: "Download Report",
                  path: "/research/ai-readiness",
                },
                {
                  category: "Industry Analysis",
                  title: "State of AI Security 2025",
                  description:
                    "Key developments, emerging trends, and strategic predictions shaping AI security across global enterprises.",
                  cta: "Read Analysis",
                  path: "/research/ai-security",
                },
                {
                  category: "Technical Brief",
                  title: "Securing AI-Powered Infrastructure",
                  description:
                    "Learn how modern security architectures protect critical infrastructure while enabling innovation at scale.",
                  cta: "Get Technical Brief",
                  path: "/research/ai-infrastructure-security",
                },
              ].map((insight, index) => (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-100"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                      {insight.category}
                    </span>
                    <span className="text-gray-400 text-sm">New</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {insight.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {insight.description}
                  </p>

                  <button
                    onClick={() => navigate(insight.path)}
                    className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors group/insight"
                  >
                    {insight.cta}
                    <span className="transform group-hover/insight:translate-x-2 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  5000+
                </div>
                <div className="text-gray-600">Enterprise Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  99.9%
                </div>
                <div className="text-gray-600">Platform Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-gray-600">Faster AI Deployment</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- TechCard Component ---------- */
// eslint-disable-next-line no-unused-vars
function TechCard({ icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        group
        w-full
        rounded-3xl
        border border-gray-300
        px-6 py-14
        flex flex-col items-center justify-center gap-6
        transition-all duration-300
        hover:border-blue-600
        hover:shadow-md
        cursor-pointer
        focus:outline-none
        focus:ring-2
        focus:ring-blue-600
      "
    >
      <Icon
        className="
          w-16 h-16
          text-blue-600
          stroke-[1.2]
        "
      />
      <span className="text-lg font-medium text-gray-900">{label}</span>
    </button>
  );
}


