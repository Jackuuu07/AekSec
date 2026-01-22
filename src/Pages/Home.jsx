import { useNavigate, Link } from "react-router-dom";
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
  Shield,
  Lock,
  Key,
} from "lucide-react";
import { useEffect, useState } from "react";

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
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
      setFadeIn(true);
    }, 500);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* ============ HeroBanner Section ============ */}
      <section className="h-screen bg-gradient-to-br from-gray-950 via-blue-950/30 to-gray-950
 flex items-center px-8 md:px-20 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10"></div>

        {/* Grid lines */}
        <div className="absolute inset-0 bg-grid-white/5 opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="mb-10">
                <div className="flex items-center gap-4 md:gap-6">
                  {/* Logo Mark - Security Themed */}
                  <div className="relative w-14 h-14 md:w-16 md:h-16 group shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500 border-2 border-blue-500/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl transform -rotate-45">
                        KT
                      </span>{" "}
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="flex-1">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                      <span className="text-white">Kulp</span>
                      <span className="text-blue-300">Tech</span>
                    </h1>
                    <div className="h-1 w-full md:w-96 bg-gradient-to-r from-blue-600 to-blue-400 mt-2 md:mt-3"></div>
                  </div>
                </div>
              </div>

              <div className="h-24 md:h-32 flex items-center">
                <div className="space-y-4">
                  <div
                    className={`transition-all duration-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                  >
                    <h2 className="text-3xl md:text-4xl font-light text-blue-200 tracking-wide">
                      AI's Secure Frontier
                    </h2>
                  </div>

                  <div
                    className={`transition-all duration-700 transform ${fadeIn ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                  >
                    <h3 className="text-2xl md:text-3xl font-medium text-white">
                      {lines[currentLine]}
                    </h3>
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                <p className="text-lg text-slate-300 leading-relaxed max-w-xl tracking-tight">
                  Secure AI at the edge with enterprise-grade compute,
                  zero-trust networking, and advanced security where your data
                  originates. Protect innovation while enabling real-time
                  experiences with KulpTech.
                </p>
              </div>

              <div
                className={`transition-all duration-1000 delay-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                <button
                  onClick={() => navigate("/explore")}
                  className="
              group
              relative
              bg-gradient-to-r from-blue-600 to-blue-800
              text-white
              px-8 py-4
              rounded-lg
              font-medium
              flex items-center gap-3
              transition-all duration-300 ease-out
              hover:from-blue-700 hover:to-blue-900
              hover:shadow-2xl
              hover:shadow-blue-500/20
              active:scale-[0.98]
              overflow-hidden
              tracking-wide
              border border-blue-500/20
            "
                >
                  <Shield className="w-5 h-5" />
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
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="hidden lg:block">
                    <div className="relative h-[500px]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Luxurious 3D text effect */}
                        <div className="relative perspective-1000">
                          {/* Deep 3D shadow layer */}
                          <div className="absolute inset-0 flex space-x-1 -translate-y-1 translate-x-1">
                            {["K", "u", "l", "p", "T", "e", "c", "h"].map(
                              (letter, index) => (
                                <span
                                  key={index}
                                  className="text-8xl font-black text-blue-900/40 animate-depth-shadow"
                                  style={{
                                    animationDelay: `${index * 0.1}s`,
                                    fontFamily:
                                      "'Inter', -apple-system, sans-serif",
                                  }}
                                >
                                  {letter}
                                </span>
                              ),
                            )}
                          </div>

                          {/* Main luxurious text */}
                          <div className="flex space-x-1 relative z-10">
                            {["K", "u", "l", "p", "T", "e", "c", "h"].map(
                              (letter, index) => (
                                <div key={index} className="relative group">
                                  <span
                                    className="text-8xl font-black bg-gradient-to-b from-white via-blue-100 to-blue-300 bg-clip-text text-transparent animate-luxury-reveal relative z-20"
                                    style={{
                                      animationDelay: `${index * 0.1}s`,
                                      fontFamily:
                                        "'Inter', -apple-system, sans-serif",
                                      textShadow: `
                    0 1px 0 rgba(255, 255, 255, 0.4),
                    0 2px 4px rgba(0, 0, 0, 0.3),
                    0 4px 8px rgba(0, 0, 0, 0.2),
                    0 8px 16px rgba(0, 0, 0, 0.1),
                    0 16px 32px rgba(0, 0, 0, 0.05)
                  `,
                                    }}
                                  >
                                    {letter}
                                  </span>

                                  {/* Metallic shine overlay */}
                                  <span
                                    className="absolute inset-0 text-8xl font-black bg-gradient-to-r from-transparent via-white/20 to-transparent bg-clip-text text-transparent animate-shine"
                                    style={{
                                      animationDelay: `${index * 0.1 + 1.5}s`,
                                      fontFamily:
                                        "'Inter', -apple-system, sans-serif",
                                    }}
                                  >
                                    {letter}
                                  </span>

                                  {/* Glowing aura */}
                                  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                    <span className="text-8xl font-black text-blue-500/20 blur-xl">
                                      {letter}
                                    </span>
                                  </div>
                                </div>
                              ),
                            )}
                          </div>

                          {/* Security mantra with luxurious reveal */}
                          <div className="mt-16 text-center">
                            <div className="relative inline-block">
                              <span className="text-xl font-light tracking-[0.5em] text-blue-300/80 uppercase animate-mantra-reveal">
                                SECURE • INTELLIGENT • ENTERPRISE
                              </span>
                              <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-glow-line"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <style jsx>{`
                      .perspective-1000 {
                        perspective: 1000px;
                      }

                      @keyframes luxury-reveal {
                        0% {
                          opacity: 0;
                          transform: translateY(50px) rotateX(-90deg) scale(0.8);
                          filter: brightness(0) blur(20px);
                        }
                        50% {
                          opacity: 0.7;
                          filter: brightness(1.2) blur(5px);
                        }
                        100% {
                          opacity: 1;
                          transform: translateY(0) rotateX(0) scale(1);
                          filter: brightness(1) blur(0);
                        }
                      }

                      @keyframes depth-shadow {
                        0% {
                          opacity: 0;
                          transform: translateY(30px);
                        }
                        100% {
                          opacity: 0.4;
                          transform: translateY(0);
                        }
                      }

                      @keyframes shine {
                        0% {
                          transform: translateX(-100%);
                          opacity: 0;
                        }
                        50% {
                          opacity: 0.8;
                        }
                        100% {
                          transform: translateX(100%);
                          opacity: 0;
                        }
                      }

                      @keyframes mantra-reveal {
                        0% {
                          opacity: 0;
                          letter-spacing: 1em;
                          filter: blur(10px);
                        }
                        100% {
                          opacity: 1;
                          letter-spacing: 0.5em;
                          filter: blur(0);
                        }
                      }

                      @keyframes glow-line {
                        0% {
                          width: 0;
                          opacity: 0;
                        }
                        100% {
                          width: 100%;
                          opacity: 0.5;
                        }
                      }

                      @keyframes float-slow {
                        0%,
                        100% {
                          transform: translateY(0);
                        }
                        50% {
                          transform: translateY(-10px);
                        }
                      }

                      @keyframes float-medium {
                        0%,
                        100% {
                          transform: translateY(0);
                        }
                        50% {
                          transform: translateY(-15px);
                        }
                      }

                      @keyframes float-fast {
                        0%,
                        100% {
                          transform: translateY(0);
                        }
                        50% {
                          transform: translateY(-20px);
                        }
                      }

                      @keyframes fade-in-delay {
                        0% {
                          opacity: 0;
                        }
                        100% {
                          opacity: 1;
                        }
                      }

                      .animate-luxury-reveal {
                        animation: luxury-reveal 1.2s
                          cubic-bezier(0.4, 0, 0.2, 1) forwards;
                        opacity: 0;
                      }

                      .animate-depth-shadow {
                        animation: depth-shadow 1s ease-out forwards;
                        opacity: 0;
                      }

                      .animate-shine {
                        animation: shine 2s ease-in-out infinite;
                        animation-delay: 1.5s;
                      }

                      .animate-mantra-reveal {
                        animation: mantra-reveal 2s ease-out 1.8s forwards;
                        opacity: 0;
                      }

                      .animate-glow-line {
                        animation: glow-line 2s ease-out 2.5s forwards;
                        opacity: 0;
                      }

                      .animate-float-slow {
                        animation: float-slow 4s ease-in-out infinite;
                      }

                      .animate-float-medium {
                        animation: float-medium 3s ease-in-out infinite;
                      }

                      .animate-float-fast {
                        animation: float-fast 2.5s ease-in-out infinite;
                      }

                      .animate-fade-in-delay {
                        animation: fade-in-delay 1s ease-out 2.8s forwards;
                      }
                    `}</style>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .bg-grid-white {
            background-image:
              linear-gradient(
                to right,
                rgba(255, 255, 255, 0.05) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.05) 1px,
                transparent 1px
              );
            background-size: 50px 50px;
          }
        `}</style>
      </section>

      {/* ============ QuickLinks Section ============ */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">
              Accelerate Your Secure AI Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Access essential security resources, expert guidance, and
              industry-leading tools to transform your organization with
              intelligent, protected infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[
              {
                icon: CloudDownload,
                label: "Downloads",
                path: "/downloads",
                desc: "Secure software, SDKs, and tools",
              },
              {
                icon: GraduationCap,
                label: "Certifications",
                path: "/certifications",
                desc: "Security-recognized credentials",
              },
              {
                icon: BadgeCheck,
                label: "KulpTech Validated",
                path: "/kulptech-validated",
                desc: "Verified secure solutions",
              },
              {
                icon: BookOpen,
                label: "Training",
                path: "/training",
                desc: "Security-focused learning",
              },
              {
                icon: UsersIcon,
                label: "Community",
                path: "/community",
                desc: "Connect with security experts",
              },
              {
                icon: Headphones,
                label: "Support",
                path: "/support",
                desc: "24/7 security assistance",
              },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="group flex flex-col items-center gap-4 p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-slate-200 hover:border-blue-200 hover:bg-blue-50/30"
              >
                <div className="relative">
                  <div className="p-4 rounded-full bg-gradient-to-br from-blue-50 to-slate-100 group-hover:from-blue-100 group-hover:to-blue-50 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-blue-700" />
                  </div>
                </div>
                <span className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {item.label}
                </span>
                <p className="text-sm text-slate-500 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
              </button>
            ))}
          </div>

          <div className="text-center mt-16 pt-8 border-t border-slate-300">
            <p className="text-slate-600 mb-6">
              Need personalized security guidance? Our experts are ready to
              help.
            </p>
            <button
              onClick={() => navigate("/learn")}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-900 hover:shadow-lg transition-all duration-300"
            >
              Schedule Security Leaning Consulting
            </button>
          </div>
        </div>
      </section>

      {/* ============ LatestProducts Section ============ */}
      <section className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-light text-slate-900 mb-4">
              Enterprise-Grade Secure AI Infrastructure
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              KulpTech delivers comprehensive AI platforms with built-in
              security that seamlessly integrate compute, networking, and
              protection for your most demanding AI workloads.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "KulpTech AI Platform",
                tagline: "Secure AI Orchestration",
                icon: Shield,
                image:
                  "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                description:
                  "A secure platform designed to build, deploy, and protect AI workloads at enterprise scale. Built-in governance, compliance, and threat detection.",
                features: [
                  "Secure Model Management",
                  "Protected MLOps",
                  "Enterprise Security",
                ],
                primaryLink: "/products/ai-platform",
                secondaryLink: "/products/ai-platform",
                primaryText: "Explore Platform",
                secondaryText: "Security Specs",
              },
              {
                title: "KulpTech AI Defense",
                tagline: "Proactive AI Security",
                icon: Fingerprint,
                image:
                  "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                description:
                  "Advanced AI-native security solution that continuously monitors model behavior, data pipelines, and inference activity for threats.",
                features: [
                  "Threat Detection",
                  "Data Protection",
                  "Compliance Monitoring",
                ],
                primaryLink: "/products/ai-defense",
                secondaryLink: "/products/ai-defense",
                primaryText: "Explore Security",
                secondaryText: "Security Whitepaper",
              },
              {
                title: "KulpTech HyperFabric",
                tagline: "Secure Networking",
                icon: Network,
                image:
                  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                description:
                  "Zero-trust networking fabric with built-in security that simplifies data center operations for high-performance AI traffic.",
                features: [
                  "AI-Optimized",
                  "Zero-Trust Security",
                  "Automated Protection",
                ],
                primaryLink: "/products/hyperfabric",
                secondaryLink: "/products/hyperfabric",
                primaryText: "Explore Networking",
                secondaryText: "Security Architecture",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-200"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={product.title}
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <product.icon className="w-4 h-4 text-white" />
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-700 to-blue-800 text-white text-xs font-semibold rounded-full">
                      {product.tagline}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    {product.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <Link
                      to={product.primaryLink}
                      className="flex items-center justify-between group/link px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
                    >
                      <span>{product.primaryText}</span>
                      <span className="transform group-hover/link:translate-x-2 transition-transform">
                        →
                      </span>
                    </Link>

                    <Link
                      to={product.secondaryLink}
                      className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors flex items-center gap-2"
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
                onClick={() => navigate("/products/product-service")}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 hover:shadow-xl transition-all duration-300"
              >
                View All Products
              </button>
              <button
                onClick={() => navigate("/solutions/solution-lab")}
                className="px-10 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                Explore Security Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ InnovationShowcase Section ============ */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-slate-900 mb-4">
              Securing the Future of AI
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover how KulpTech is protecting enterprises with cutting-edge
              security capabilities and innovative AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Announcing Secure AI Canvas",
                description:
                  "Experience real-time security telemetry, AI insights, and team collaboration in a protected workspace.",
                category: "Security Launch",
                icon: Shield,
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
                  "Secure your AI development with comprehensive visibility, automated guardrails, and real-time threat intelligence.",
                category: "Security",
                icon: Fingerprint,
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
                title: "Secure AI with NVIDIA",
                category: "Partnership",
                icon: Lock,
                description:
                  "From secure AI PODs to managed AI stacks, see how KulpTech protects enterprise AI with NVIDIA's computing.",
                primaryAction: {
                  text: "Explore Partnership",
                  path: "/partners/nvidia",
                },
                secondaryAction: {
                  text: "Security Details",
                  path: "/ai-infrastructure",
                },
              },
              {
                image:
                  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Secure AI Infrastructure",
                category: "Infrastructure",
                icon: Key,
                description:
                  "Unlock scalable, high-performance AI with our portfolio of secure infrastructure solutions.",
                primaryAction: {
                  text: "Explore Portfolio",
                  path: "/infrastructure",
                },
                secondaryAction: {
                  text: "Security Architecture",
                  path: "/technology/silicon",
                },
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-200"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <card.icon className="w-4 h-4 text-white" />
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-700/90 to-blue-800/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {card.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4 leading-tight">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="space-y-4">
                    <button
                      onClick={() => navigate(card.primaryAction.path)}
                      className="flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-lg font-medium hover:from-blue-100 hover:to-blue-200 transition-colors group/btn"
                    >
                      <span>{card.primaryAction.text}</span>
                      <span className="transform group-hover/btn:translate-x-2 transition-transform">
                        →
                      </span>
                    </button>

                    <button
                      onClick={() => navigate(card.secondaryAction.path)}
                      className="flex items-center justify-between w-full px-4 py-3 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors group/btn2 border border-slate-200"
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
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 hover:shadow-xl transition-all duration-300"
              >
                Explore Innovation Center
              </button>
              <button
                onClick={() => navigate("/why/whyAekSec")}
                className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Why Choose KulpTech Security?
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TechnologyDomains Section ============ */}
      <section className="py-24 px-6 bg-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-slate-900 mb-4">
              Comprehensive Security Technology Portfolio
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore KulpTech's integrated security solutions across every
              critical technology domain for modern enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Network,
                label: "Secure Networking",
                description:
                  "Zero-trust, AI-optimized networking solutions with built-in security",
                path: "/networking",
              },
              {
                icon: Shield,
                label: "Enterprise Security",
                description:
                  "End-to-end security solutions for AI infrastructure protection",
                path: "/SecureAi-inside",
              },
              {
                icon: Eye,
                label: "Security Observability",
                description:
                  "Real-time security monitoring and insights across AI environments",
                path: "/observability",
              },
              {
                icon: Users,
                label: "Secure Collaboration",
                description:
                  "AI-powered collaboration tools with enterprise-grade security",
                path: "/collaboration",
              },
              {
                icon: Server,
                label: "Secure Edge Computing",
                description:
                  "Protected distributed computing solutions for AI at the edge",
                path: "/computing",
              },
              {
                icon: Sparkles,
                label: "Secure AI & ML",
                description:
                  "Complete AI/ML platform with built-in security for innovation",
                path: "/AiCanvaslearning-inside",
              },
            ].map((tech, index) => (
              <button
                key={index}
                onClick={() => navigate(tech.path)}
                className="group p-8 bg-gradient-to-br from-white to-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-left"
              >
                <div className="flex flex-col items-start gap-6">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-slate-100 group-hover:from-blue-100 group-hover:to-blue-50 transition-colors">
                    <tech.icon className="w-12 h-12 text-blue-700" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                      {tech.label}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:text-blue-800 transition-colors mt-4">
                    <span>Explore Security Solutions</span>
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
              onClick={() => navigate("/solutions/solution-lab")}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 hover:shadow-xl transition-all duration-300"
            >
              Browse All Security Solutions
            </button>
            <button
              onClick={() => navigate("/explore")}
              className="px-10 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Explore Security Services
            </button>
          </div>
        </div>
      </section>

      {/* ============ InsightsSection ============ */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-slate-900 mb-4">
              Security Insights & Research
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay ahead with cutting-edge security research, threat analysis,
              and expert perspectives from KulpTech's security leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="space-y-10">
                {[
                  {
                    category: "Security Report",
                    title: "KulpTech AI Security Index 2024",
                    description:
                      "Discover how enterprises are securing AI-driven transformation and why proactive security planning is critical.",
                    cta: "Download Report",
                    path: "/report/AiReadiness-report",
                  },
                  {
                    category: "Threat Analysis",
                    title: "State of AI Security Threats 2025",
                    description:
                      "Key developments, emerging threats, and strategic predictions shaping AI security across enterprises.",
                    cta: "Read Analysis",
                    path: "/report/SecuringAi-report",
                  },
                  {
                    category: "Technical Brief",
                    title: "Securing AI-Powered Infrastructure",
                    description:
                      "Learn how modern security architectures protect critical infrastructure while enabling innovation.",
                    cta: "Get Technical Brief",
                    path: "/report/StateofSecurity-report",
                  },
                ].map((insight, index) => (
                  <div
                    key={index}
                    className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-200"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {insight.category}
                      </span>
                      <span className="text-blue-500 text-sm font-semibold">
                        New
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-blue-800 transition-colors">
                      {insight.title}
                    </h3>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {insight.description}
                    </p>

                    <button
                      onClick={() => navigate(insight.path)}
                      className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors group/insight"
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

            <div>
              <h3 className="text-3xl font-light text-slate-900 mb-8">
                Security Leadership
              </h3>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                Access expert security guidance, threat intelligence, and
                industry-leading practices from KulpTech's security thought
                leadership.
              </p>

              <div className="space-y-8">
                <button
                  onClick={() => navigate("/security-research")}
                  className="flex items-center gap-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span>Explore Security Research Library</span>
                  <span className="transform group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </button>

                <button
                  onClick={() => navigate("/security-webinars")}
                  className="flex items-center gap-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
                    <UsersIcon className="w-6 h-6" />
                  </div>
                  <span>Join Security Expert Webinars</span>
                  <span className="transform group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-20 pb-12 pt-12 border-t w-full border-slate-300 bg-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">
                  5000+
                </div>
                <div className="text-slate-600">
                  Secure Enterprise Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">
                  99.99%
                </div>
                <div className="text-slate-600">Security Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">60%</div>
                <div className="text-slate-600">Faster Threat Detection</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">
                  24/7
                </div>
                <div className="text-slate-600">Security Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
