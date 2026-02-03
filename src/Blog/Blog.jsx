import React from "react";
import {
  Shield,
  Globe,
  TrendingUp,
  Users,
  BookOpen,
  FileText,
  ChevronRight,
  Clock,
  Calendar,
  Tag,
  Bookmark,
  MessageSquare,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  Search,
  ArrowUp,
  ArrowDown,
  Heart,
  Eye,
} from "lucide-react";

export default function Blog() {
  
  const scrollToFirstBlog = () => {
    const firstBlog = document.getElementById("blog-1");
    if (firstBlog) {
      firstBlog.scrollIntoView({ behavior: "smooth" });
    }
  };

const articles = [
  {
    id: 1,
    icon: Shield,
    title: "The Future of AI in Cybersecurity",
    description:
      "How artificial intelligence is transforming threat detection and response in enterprise security.",
    category: "AI & Security",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    author: "Dr. Sarah Johnson",
    authorRole: "Chief Security Officer",
    authorImage:
      "https://tse1.mm.bing.net/th/id/OIP.W7FxJkqmYnPgzMsaxEe9HwHaE8?pid=Api&P=0&h=180",
    tags: ["AI", "Machine Learning", "Threat Detection", "Automation"],
    content: `
      <div class="relative mb-10">
        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="AI Cybersecurity" class="w-full h-96 object-cover rounded-2xl shadow-lg" />
      </div>
      
      <p class="text-gray-700 text-lg mb-6 leading-relaxed">The cybersecurity landscape is undergoing a <span class="font-semibold text-gray-900">seismic shift</span>, driven by the rapid adoption of artificial intelligence and machine learning technologies. What was once science fiction is now operational reality in Security Operations Centers (SOCs) worldwide.</p>
      
      <div class="bg-gray-50 border-l-4 border-gray-400 pl-6 py-6 my-8 rounded-r-lg">
        <p class="text-gray-800 italic text-lg mb-2 font-medium">"AI isn't replacing cybersecurity professionals—it's amplifying their capabilities. The human-machine partnership is where true security innovation happens."</p>
        <p class="text-gray-900 font-semibold">— Dr. Sarah Johnson</p>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">Predictive Threat Intelligence</h3>
      <p class="text-gray-700 mb-6">Modern AI systems can analyze <span class="font-semibold text-gray-900">billions of data points</span> in real-time, identifying patterns and anomalies that would be impossible for human analysts to detect. At KalpTech, our AI-powered platform has demonstrated a 92% improvement in early threat detection across enterprise clients.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">Real-World Applications</h3>
      <div class="grid md:grid-cols-3 gap-6 my-8">
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
          
          <h4 class="font-bold text-gray-900 mb-2">Behavioral Analytics</h4>
          <p class="text-gray-600 text-sm">ML models that establish baseline user behavior and detect deviations.</p>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
          
          <h4 class="font-bold text-gray-900 mb-2">Automated Response</h4>
          <p class="text-gray-600 text-sm">Systems that contain threats within seconds of detection.</p>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
         
          <h4 class="font-bold text-gray-900 mb-2">Predictive Management</h4>
          <p class="text-gray-600 text-sm">AI that prioritizes patching based on exploit likelihood.</p>
        </div>
      </div>
      
      <div class="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-xl">
        <h4 class="text-lg font-bold text-gray-900 mb-3">📊 Industry Impact</h4>
        <p class="text-gray-700">By 2025, AI is expected to handle <span class="font-bold text-gray-900">80% of routine security tasks</span>, freeing human experts for strategic threat hunting. Organizations that effectively integrate AI into security operations while maintaining human oversight will lead the industry.</p>
      </div>
    `,
    bgColor: "bg-gray-100",
    accentColor: "text-gray-900",
    categoryColor: "bg-gray-800",
  },
  {
    id: 2,
    icon: Globe,
    title: "Zero Trust in a Hybrid World",
    description:
      "Implementing Zero Trust architecture across cloud, on-premise, and remote work environments.",
    category: "Architecture",
    date: "Feb 28, 2024",
    readTime: "10 min read",
    author: "Michael Rodriguez",
    authorRole: "Head of Threat Intelligence",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    tags: ["Zero Trust", "Cloud Security", "Hybrid Work", "Access Control"],
    content: `
      <div class="relative mb-10">
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Zero Trust Architecture" class="w-full h-96 object-cover rounded-2xl shadow-lg" />
      </div>
      
      <p class="text-gray-700 text-lg mb-6 leading-relaxed">The traditional <span class="font-semibold text-gray-900">castle-and-moat security model</span> is obsolete. With employees working from anywhere and data distributed across multiple clouds, the network perimeter has dissolved. Zero Trust architecture is no longer optional—it's essential for modern enterprise security.</p>
      
      <div class="grid md:grid-cols-2 gap-8 my-10">
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
          <h4 class="text-lg font-bold text-gray-900 mb-3">🚨 Never Trust, Always Verify</h4>
          <p class="text-gray-700 text-sm">Every access request is authenticated and authorized, regardless of source or location.</p>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
          <h4 class="text-lg font-bold text-gray-900 mb-3">🔐 Least Privilege Access</h4>
          <p class="text-gray-700 text-sm">Users and systems receive only the permissions needed for specific tasks.</p>
        </div>
      </div>
      
      
      
      <h3 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Implementation Roadmap</h3>
      <div class="space-y-6 mb-10">
        <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <div class="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold">1</div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Identity Management</h4>
            <p class="text-gray-600">Implementing robust identity verification across all systems and devices.</p>
          </div>
        </div>
        <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <div class="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold">2</div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Micro-Segmentation</h4>
            <p class="text-gray-600">Breaking networks into small, isolated zones to contain potential breaches.</p>
          </div>
        </div>
        <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <div class="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold">3</div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Continuous Monitoring</h4>
            <p class="text-gray-600">Real-time analysis of user behavior and system activity.</p>
          </div>
        </div>
      </div>
      
      <div class="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-xl">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <h4 class="text-lg font-bold text-gray-900">Success Story: Global Financial Institution</h4>
        </div>
        <p class="text-gray-700">We helped a multinational bank implement Zero Trust across their 50,000+ endpoints. The results were transformative, with significant improvements in security posture and operational efficiency.</p>
      </div>
    `,
    bgColor: "bg-white",
    accentColor: "text-gray-900",
    categoryColor: "bg-gray-800",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "2024 Cybersecurity Trends Report",
    description:
      "Our annual analysis of emerging threats, technologies, and strategies shaping the security landscape.",
    category: "Research",
    date: "Jan 15, 2024",
    readTime: "15 min read",
    author: "Elena Petrova",
    authorRole: "VP of Cloud Security",
    authorImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    tags: ["Trends", "Research", "Threat Landscape", "Predictions"],
    content: `
      <div class="relative mb-10">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Cybersecurity Trends" class="w-full h-96 object-cover rounded-2xl shadow-lg" />
      </div>
      
      <p class="text-gray-700 text-lg mb-6 leading-relaxed">Based on our analysis of <span class="font-bold text-gray-900">1,200+ enterprise breaches</span> and security incidents, we've identified the key trends that will dominate cybersecurity in 2024 and beyond.</p>
      
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8">
        <h4 class="text-xl font-bold text-gray-900 mb-4">🔥 Top Threats for 2024</h4>
        <div class="space-y-4">
          <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
            <div class="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-sm">1</span>
            </div>
            <div>
              <h5 class="font-bold text-gray-900 mb-1">AI-Powered Attacks</h5>
              <p class="text-gray-700 text-sm">Attackers using AI to craft phishing emails, generate polymorphic malware, and automate reconnaissance.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
            <div class="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-sm">2</span>
            </div>
            <div>
              <h5 class="font-bold text-gray-900 mb-1">Supply Chain Compromises</h5>
              <p class="text-gray-700 text-sm">Targeting software vendors to gain access to multiple downstream customers simultaneously.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
            <div class="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-sm">3</span>
            </div>
            <div>
              <h5 class="font-bold text-gray-900 mb-1">Cloud Configuration Exploits</h5>
              <p class="text-gray-700 text-sm">Misconfigurations as the primary attack vector in cloud environments.</p>
            </div>
          </div>
        </div>
      </div>
      
      
      <h3 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Emerging Defense Technologies</h3>
      <div class="grid md:grid-cols-3 gap-6 mb-10">
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h4 class="font-bold text-gray-900 mb-2">Extended Detection (XDR)</h4>
          <p class="text-gray-600 text-sm">Unified platforms that correlate data across endpoints, networks, and clouds.</p>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
         
          <h4 class="font-bold text-gray-900 mb-2">Security Mesh</h4>
          <p class="text-gray-600 text-sm">Distributed controls that follow users and data wherever they go.</p>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
          
          <h4 class="font-bold text-gray-900 mb-2">Quantum Cryptography</h4>
          <p class="text-gray-600 text-sm">Preparing for quantum computing that could break current encryption.</p>
        </div>
      </div>
      
      <div class="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-xl">
        <h4 class="text-lg font-bold text-gray-900 mb-3">🎯 Strategic Recommendations</h4>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-center gap-2">
            <div class="w-2 h-2 bg-gray-800 rounded-full"></div>
            <span>Implement comprehensive AI defense strategies</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="w-2 h-2 bg-gray-800 rounded-full"></div>
            <span>Strengthen third-party risk management programs</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="w-2 h-2 bg-gray-800 rounded-full"></div>
            <span>Automate cloud security posture management</span>
          </li>
        </ul>
      </div>
    `,
    bgColor: "bg-gray-100",
    accentColor: "text-gray-900",
    categoryColor: "bg-gray-800",
  },
  {
    id: 4,
    icon: Users,
    title: "Building Security-First Cultures",
    description:
      "Strategies for fostering security awareness and responsibility across organizations.",
    category: "Culture",
    date: "Dec 20, 2023",
    readTime: "6 min read",
    author: "David Chen",
    authorRole: "Security Culture Director",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    tags: ["Security Culture", "Training", "Awareness", "Human Factor"],
    content: `
      <div class="relative mb-10">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Security Culture" class="w-full h-96 object-cover rounded-2xl shadow-lg" />
      </div>
      
      <p class="text-gray-700 text-lg mb-6 leading-relaxed">Technology alone cannot protect organizations from cyber threats. The most sophisticated security tools are useless if employees click on phishing links or reuse weak passwords. <span class="font-bold text-gray-900">Building a security-first culture</span> is the most critical investment an organization can make.</p>
      
      <div class="bg-gray-50 border-l-4 border-gray-400 pl-6 py-6 my-8 rounded-r-lg">
        <p class="text-gray-800 text-lg mb-2 font-medium">"Culture eats strategy for breakfast. In cybersecurity, culture determines whether your security investments succeed or fail."</p>
        <p class="text-gray-900 font-semibold">— David Chen</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6 my-10">
        <div class="text-center p-6 bg-gray-50 border border-gray-200 rounded-xl">
          <div class="text-4xl font-bold text-gray-900 mb-2">70%</div>
          <div class="text-sm text-gray-600">Fewer Security Incidents</div>
        </div>
        <div class="text-center p-6 bg-gray-50 border border-gray-200 rounded-xl">
          <div class="text-4xl font-bold text-gray-900 mb-2">50%</div>
          <div class="text-sm text-gray-600">Faster Response Time</div>
        </div>
        <div class="text-center p-6 bg-gray-50 border border-gray-200 rounded-xl">
          <div class="text-4xl font-bold text-gray-900 mb-2">40%</div>
          <div class="text-sm text-gray-600">Lower Insurance Premiums</div>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Building Blocks of Security Culture</h3>
      <div class="grid md:grid-cols-2 gap-6 mb-10">
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h4 class="font-bold text-gray-900">Leadership Commitment</h4>
          </div>
          <p class="text-gray-700 text-sm">Security starts at the top. Executives modeling good security behavior set the organizational tone.</p>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h4 class="font-bold text-gray-900">Continuous Education</h4>
          </div>
          <p class="text-gray-700 text-sm">Monthly micro-learning sessions and gamified challenges drive engagement.</p>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h4 class="font-bold text-gray-900">Psychological Safety</h4>
          </div>
          <p class="text-gray-700 text-sm">Employees must feel safe reporting security concerns without fear.</p>
        </div>
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h4 class="font-bold text-gray-900">Work Integration</h4>
          </div>
          <p class="text-gray-700 text-sm">Security checkpoints integrated into existing workflows.</p>
        </div>
      </div>
      
     
      
      <div class="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-xl">
        <h4 class="text-lg font-bold text-gray-900 mb-3">📈 Measuring Success</h4>
        <p class="text-gray-700">We track culture metrics alongside technical ones: phishing click rates (target: less than 5%), security training completion rates, employee knowledge assessments, and frequency of security-related questions and suggestions.</p>
      </div>
    `,
    bgColor: "bg-white",
    accentColor: "text-gray-900",
    categoryColor: "bg-gray-800",
  },
];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-white border-b border-gray-200">
        <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Expert Analysis on{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Modern Cybersecurity
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
              In-depth research, actionable insights, and strategic guidance
              from KalpTech's security experts. Stay informed about the latest
              threats, technologies, and best practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToFirstBlog}
                className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg font-medium hover:opacity-90 transition shadow-lg flex items-center gap-2 cursor-pointer"
              >
                Start Reading
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ARTICLES SECTIONS ================= */}
      {articles.map((article, index) => (
        <section
          key={article.id}
          id={`blog-${article.id}`}
          className="bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 py-20">
            {/* Article Header */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                <article.icon className="w-4 h-4" />
                <span>{article.category}</span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                {article.title}
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {article.description}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <img
                  src={article.authorImage}
                  alt={article.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-800 font-medium">{article.author}</p>
                  <p>{article.authorRole}</p>
                </div>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {article.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {article.readTime}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10 text-sm text-gray-500">
              {article.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>#{tag}</span>
              ))}
            </div>

            {/* Article Content */}
            <div
              className="prose prose-gray max-w-none
                   prose-headings:font-semibold
                   prose-h2:mt-12 prose-h2:mb-4
                   prose-h3:mt-10 prose-h3:mb-3
                   prose-p:leading-relaxed
                   prose-img:rounded-lg"
            >
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Navigation */}
            <div className="mt-16 flex justify-between text-sm text-gray-500">
              {index > 0 && (
                <a
                  href={`#blog-${articles[index - 1].id}`}
                  className="hover:text-gray-900"
                >
                  ← Previous Article
                </a>
              )}

              {index < articles.length - 1 && (
                <a
                  href={`#blog-${articles[index + 1].id}`}
                  className="hover:text-gray-900 ml-auto"
                >
                  Next Article →
                </a>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* ================= NEWSLETTER ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full mb-8 border border-white/10">
              <Mail className="w-5 h-5 text-blue-300" />
              <span className="text-blue-100 font-medium">
                Weekly Newsletter
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Security Insights
              </span>
            </h2>

            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
              Receive weekly analysis, threat intelligence reports, and expert
              commentary directly to your inbox. Join 15,000+ security
              professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:opacity-90 transition shadow-lg">
                Subscribe Now
              </button>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              No spam. Unsubscribe anytime. Read our{" "}
              <a
                href="/privacy"
                className="text-blue-300 hover:text-blue-200 underline"
              >
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
