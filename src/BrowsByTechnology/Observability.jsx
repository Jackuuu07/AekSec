import React, { useState } from "react";
import {
  FiEye,
  FiShield,
  FiAlertTriangle,
  FiActivity,
  FiTrendingUp,
  FiGlobe,
  FiDatabase,
  FiCloud,
  FiLock,
  FiBarChart2,
  FiBell,
  FiFilter,
  FiUsers,
  FiClock,
  FiCheckCircle,
  FiSettings,
  FiRefreshCw,
  FiServer,
  FiCpu,
  FiLayers,
  FiLink,
  FiPackage,
  FiGitMerge,
  FiMonitor,
  FiHexagon,
  FiTerminal,
  FiBox,
  FiAnchor,
} from "react-icons/fi";
import { 
  Shield, 
  Network, 
  Server, 
  Eye, 
  Brain,
  Zap,
  AlertCircle,
  Cloud,
  Code,
  Database,
  Cpu,
  GitBranch,
  Container,
  Key,
  Search,
  BarChart,
  Globe,
  ShieldCheck,
  Activity
} from "lucide-react";

export default function SecurityObservability() {
  const [activeCapability, setActiveCapability] = useState("Real-time Monitoring");

  const capabilities = {
    "Real-time Monitoring": {
      icon: <FiActivity />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      features: [
        "Continuous threat detection across AI workloads",
        "Behavioral analytics for anomalous patterns",
        "Live dashboards with AI-powered insights",
        "Automated alerting for security incidents",
        "Real-time traffic analysis and packet inspection",
        "Active session monitoring and user behavior tracking"
      ],
      description: "Monitor security posture across AI environments with real-time visibility into threats, vulnerabilities, and compliance status. Continuous surveillance ensures immediate detection and response to security events as they occur."
    },
    "AI Security Analytics": {
      icon: <Brain size={24} />,
      color: "text-purple-600",
      bg: "bg-purple-50",
      features: [
        "ML-based anomaly detection and classification",
        "Predictive threat intelligence modeling",
        "Model behavior monitoring and drift detection",
        "Attack pattern recognition and correlation",
        "Automated incident root cause analysis",
        "Behavioral baselining and deviation alerts"
      ],
      description: "Leverage machine learning to analyze security data, predict potential threats, and identify emerging attack vectors in AI systems. Advanced analytics transform raw security data into actionable intelligence."
    },
    "Threat Intelligence": {
      icon: <FiGlobe />,
      color: "text-red-600",
      bg: "bg-red-50",
      features: [
        "Global threat feed integration and correlation",
        "Vulnerability mapping and impact analysis",
        "Attack surface modeling and exposure assessment",
        "Risk scoring and prioritization frameworks",
        "Threat actor profiling and attribution",
        "Zero-day vulnerability early warning systems"
      ],
      description: "Integrate global threat intelligence with contextual awareness specific to AI infrastructure and data pipelines. Comprehensive threat feeds provide early warning of emerging risks."
    },
    "Compliance Monitoring": {
      icon: <FiCheckCircle />,
      color: "text-green-600",
      bg: "bg-green-50",
      features: [
        "Regulatory compliance tracking and reporting",
        "Automated audit trail generation and retention",
        "Policy enforcement validation and verification",
        "Automated compliance reporting and documentation",
        "Privacy regulation adherence monitoring",
        "Industry-specific standard compliance checking"
      ],
      description: "Ensure AI systems comply with industry regulations and internal security policies through continuous monitoring and reporting. Automated compliance reduces audit complexity and ensures ongoing adherence."
    }
  };

  const metrics = [
    { label: "Threats Detected", value: "1,247", change: "+12%", icon: <FiAlertTriangle />, trend: "up", description: "Total security incidents identified across all monitored systems" },
    { label: "Mean Time to Detect", value: "2.4min", change: "-18%", icon: <FiClock />, trend: "down", description: "Average time from threat occurrence to detection" },
    { label: "Compliance Score", value: "98.7%", change: "+3.2%", icon: <FiCheckCircle />, trend: "up", description: "Overall compliance with security policies and regulations" },
    { label: "Active Incidents", value: "12", change: "-25%", icon: <FiBell />, trend: "down", description: "Currently open security incidents requiring attention" },
  ];

  const aiEnvironments = [
    { 
      name: "Training Clusters", 
      threats: "High", 
      status: "Protected", 
      icon: <Server />,
      details: "GPU-intensive compute environments for model training with sensitive data processing requirements",
      protection: "Encrypted data at rest, secure model versioning, access control lists"
    },
    { 
      name: "Model Serving", 
      threats: "Medium", 
      status: "Monitored", 
      icon: <Network />,
      details: "Production inference endpoints serving predictions to applications and users",
      protection: "API rate limiting, input validation, model watermarking, output filtering"
    },
    { 
      name: "Data Pipelines", 
      threats: "Low", 
      status: "Secured", 
      icon: <FiDatabase />,
      details: "ETL processes and data transformation workflows feeding AI systems",
      protection: "Data lineage tracking, PII detection, encryption in transit, data quality monitoring"
    },
    { 
      name: "API Endpoints", 
      threats: "High", 
      status: "Protected", 
      icon: <FiCloud />,
      details: "External-facing interfaces for AI service consumption and integration",
      protection: "Authentication tokens, API keys, request validation, DDoS protection"
    },
  ];

  const integrations = [
    { name: "SIEM Systems", icon: <Search size={24} />, description: "Security Information and Event Management platforms for centralized logging" },
    { name: "Cloud Platforms", icon: <Cloud size={24} />, description: "AWS, Azure, GCP security services and native monitoring tools" },
    { name: "AI Frameworks", icon: <Cpu size={24} />, description: "TensorFlow, PyTorch, and other ML framework security extensions" },
    { name: "Kubernetes", icon: <Container size={24} />, description: "Container orchestration security and cluster monitoring" },
    { name: "Container Security", icon: <Package size={24} />, description: "Docker, containerd runtime security and image scanning" },
    { name: "API Gateways", icon: <Api size={24} />, description: "API management and security gateway integrations" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-10 h-10 text-blue-400" />
            <span className="text-blue-400 font-medium">Security Observability Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
            Security Observability
            <br />
            <span className="text-blue-400">for AI Infrastructure</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
            Comprehensive security monitoring, threat detection, and compliance assurance 
            specifically designed for artificial intelligence environments. Gain unparalleled 
            visibility into your AI stack while maintaining enterprise-grade security posture.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Continuous Security Monitoring</div>
              <div className="text-sm text-gray-400 mt-2">Non-stop surveillance of AI workloads</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-2xl font-bold mb-2">99.9%</div>
              <div className="text-gray-300">Threat Detection Accuracy</div>
              <div className="text-sm text-gray-400 mt-2">AI-powered threat identification</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-2xl font-bold mb-2">&lt;1min</div>
              <div className="text-gray-300">Mean Time to Detection</div>
              <div className="text-sm text-gray-400 mt-2">Rapid incident identification</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY METRICS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light text-center mb-4">
            Security Performance Metrics
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Real-time security KPIs measuring protection effectiveness across AI infrastructure
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${metric.trend === 'up' ? 'bg-green-100' : 'bg-blue-100'}`}>
                    <div className={`${metric.trend === 'up' ? 'text-green-600' : 'text-blue-600'}`}>
                      {metric.icon}
                    </div>
                  </div>
                  <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-green-600' : 'text-blue-600'}`}>
                    {metric.change}
                  </span>
                </div>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="text-gray-900 font-medium mb-2">{metric.label}</div>
                <div className="text-sm text-gray-500">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AI ENVIRONMENT SECURITY ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-light mb-4">AI Infrastructure Security Assessment</h2>
              <p className="text-gray-600">Detailed security status across critical AI environment components</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Protected & Secured</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">Monitored & Controlled</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm">Requires Attention</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiEnvironments.map((env, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <div className="text-gray-700">{env.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">{env.name}</h4>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium inline-block ${
                        env.threats === 'High' ? 'bg-red-100 text-red-700' :
                        env.threats === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {env.threats} Security Risk Level
                      </div>
                    </div>
                  </div>
                  <div className={`font-medium ${
                    env.status === 'Protected' ? 'text-green-600' :
                    env.status === 'Monitored' ? 'text-blue-600' :
                    'text-gray-600'
                  }`}>
                    {env.status}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Environment Description</div>
                    <div className="text-gray-700">{env.details}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Security Measures</div>
                    <div className="text-gray-700">{env.protection}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light text-center mb-4">
            Advanced Security Capabilities
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Enterprise-grade security features specifically engineered for artificial intelligence infrastructure protection
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {Object.keys(capabilities).map((cap) => (
              <button
                key={cap}
                onClick={() => setActiveCapability(cap)}
                className={`p-5 rounded-xl text-left transition-all ${
                  activeCapability === cap
                    ? `${capabilities[cap].bg} border-2 border-blue-500 shadow-md`
                    : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-3 rounded-lg ${capabilities[cap].bg}`}>
                    <div className={capabilities[cap].color}>{capabilities[cap].icon}</div>
                  </div>
                  <h4 className="font-medium text-gray-900">{cap}</h4>
                </div>
                <p className="text-sm text-gray-600">
                  {capabilities[cap].description.substring(0, 100)}...
                </p>
              </button>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
            <div className="flex items-start gap-6 mb-8">
              <div className={`p-5 rounded-xl ${capabilities[activeCapability].bg}`}>
                <div className={`text-3xl ${capabilities[activeCapability].color}`}>
                  {capabilities[activeCapability].icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-medium mb-4">{activeCapability}</h3>
                <p className="text-gray-700 mb-8 text-lg">
                  {capabilities[activeCapability].description}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities[activeCapability].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light text-center mb-4">
            Strategic Security Advantages
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Transformative benefits of implementing comprehensive security observability for AI systems
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-blue-400/50 transition">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="text-xl font-medium mb-4">Comprehensive Infrastructure Visibility</h4>
              <p className="text-gray-300 mb-6">
                Gain end-to-end visibility across your entire AI technology stack, from data ingestion 
                pipelines to model deployment endpoints. Monitor security posture across distributed 
                systems with unified dashboards and detailed analytics.
              </p>
              <div className="text-sm text-blue-300">
                Real-time monitoring of 100+ security metrics across all AI components
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-purple-400/50 transition">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-purple-400" />
              </div>
              <h4 className="text-xl font-medium mb-4">Proactive Threat Intelligence</h4>
              <p className="text-gray-300 mb-6">
                Identify and respond to security threats before they impact your 
                AI operations with intelligent, predictive analytics. Machine learning 
                algorithms detect anomalous patterns and predict emerging attack vectors.
              </p>
              <div className="text-sm text-purple-300">
                85% reduction in security incident response time through automation
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-green-400/50 transition">
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-green-400" />
              </div>
              <h4 className="text-xl font-medium mb-4">Regulatory Compliance Assurance</h4>
              <p className="text-gray-300 mb-6">
                Maintain compliance with industry regulations and internal policies 
                through automated monitoring, reporting, and audit trails. Continuous 
                compliance validation reduces audit complexity and ensures ongoing adherence.
              </p>
              <div className="text-sm text-green-300">
                Automated compliance reporting for 20+ regulatory frameworks
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTEGRATIONS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light text-center mb-4">
            Enterprise Integration Ecosystem
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Seamlessly connect with your existing security infrastructure and AI development tools
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition hover:border-blue-200 border border-gray-200">
                <div className="text-3xl mb-4 text-blue-600 flex justify-center">
                  {integration.icon}
                </div>
                <div className="font-medium text-gray-900 mb-2">{integration.name}</div>
                <div className="text-sm text-gray-500">{integration.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPLEMENTATION ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-light mb-6">
                Enterprise Security Implementation Framework
              </h2>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive security observability deployment methodology for artificial intelligence environments
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl">
                  <FiSettings className="text-blue-600 text-xl" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Automated Deployment Architecture</div>
                    <div className="text-sm text-gray-600">Infrastructure-as-code templates for rapid deployment across cloud and on-premises environments</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl">
                  <FiUsers className="text-blue-600 text-xl" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Team Collaboration Workflows</div>
                    <div className="text-sm text-gray-600">Role-based access control, incident management, and cross-team security coordination</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl">
                  <FiRefreshCw className="text-blue-600 text-xl" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Continuous Security Updates</div>
                    <div className="text-sm text-gray-600">Automated threat intelligence feeds, signature updates, and vulnerability patches</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl">
                  <FiBarChart2 className="text-blue-600 text-xl" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Performance Analytics Dashboard</div>
                    <div className="text-sm text-gray-600">Real-time security metrics, trend analysis, and predictive risk assessment</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl">
                  <FiShield className="text-blue-600 text-xl" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Compliance Automation</div>
                    <div className="text-sm text-gray-600">Automated audit trails, compliance reporting, and regulatory requirement mapping</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl">
                  <FiEye className="text-blue-600 text-xl" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Continuous Monitoring Coverage</div>
                    <div className="text-sm text-gray-600">24/7 surveillance of AI workloads, model behavior, and data processing activities</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <div className="text-gray-700 mb-4">
                Security observability implementation typically completes within 2-4 weeks, with measurable security improvements visible within the first month of operation.
              </div>
              <div className="text-sm text-gray-500">
                Enterprise deployment includes dedicated security engineering support and custom integration services
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}