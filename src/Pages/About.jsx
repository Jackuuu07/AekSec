import { Mail, Phone, Globe, Shield, Users, Briefcase, Target, Award, Zap, BarChart, Heart, Clock, ShieldCheck, Lock, Cpu, GitBranch, Cloud, Code, MessageCircle, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            
            <main className="bg-white text-gray-800">
                {/* ================= HERO / ABOUT ================= */}
                <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-28 px-10 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-blue-100/20 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
                    <div className="max-w-7xl mx-auto relative">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="lg:w-2/3">
                                <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                                    Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Trust Layer</span> for AI
                                </h1>
                                <p className="text-xl text-gray-600 max-w-4xl leading-relaxed mb-10">
                                    KalpTech is pioneering the critical infrastructure required to securely power the next generation of artificial intelligence. 
                                    We empower enterprises to design, deploy, and protect AI systems with confidence, scale, and trust—transforming how organizations 
                                    integrate AI into their core operations while maintaining uncompromising security and compliance standards.
                                </p>
                                <div className="flex flex-wrap gap-6 mt-12">
                                    <Link to="/services/cybersecurity" className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border hover:shadow-md transition">
                                        <ShieldCheck className="text-green-600" size={24} />
                                        <span className="font-medium">Enterprise-Grade Security</span>
                                    </Link>
                                    <Link to="/products/ai-platform" className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border hover:shadow-md transition">
                                        <Cpu className="text-blue-600" size={24} />
                                        <span className="font-medium">AI-Native Architecture</span>
                                    </Link>
                                    <Link to="/Training" className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border hover:shadow-md transition">
                                        <GitBranch className="text-purple-600" size={24} />
                                        <span className="font-medium">Full Lifecycle Coverage</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:w-1/3 flex justify-center">
                                <div className="relative">
                                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-10 blur-3xl"></div>
                                    <div className="absolute top-0 left-0 w-64 h-64 rounded-3xl border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50 shadow-2xl flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                                                <Shield className="text-white" size={36} />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">Since 2022</h3>
                                            <p className="text-gray-600">Protecting AI Infrastructure</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= OUR STORY ================= */}
                <section className="py-24 px-10 bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                Founded in 2022 by a team of cybersecurity veterans and AI researchers, KalpTech emerged from a simple observation: 
                                the rapid adoption of artificial intelligence was creating unprecedented security challenges that traditional 
                                infrastructure tools couldn't address.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                                    <Target className="text-blue-600" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">The Beginning</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our founders witnessed firsthand how organizations struggled to secure AI pipelines, 
                                    protect sensitive training data, and monitor model behavior in production environments.
                                </p>
                            </div>
                            
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
                                    <Zap className="text-indigo-600" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">The Breakthrough</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We developed a proprietary architecture that unifies security, observability, and governance 
                                    across the entire AI lifecycle—from data ingestion to model deployment and monitoring.
                                </p>
                            </div>
                            
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
                                    <Award className="text-green-600" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Today</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Trusted by Fortune 500 companies, government agencies, and innovative startups, 
                                    KalpTech has become the standard for secure AI infrastructure in regulated industries.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= MISSION & VISION ================= */}
                <section className="py-24 px-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20">
                            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl shadow-xl border border-blue-100">
                                <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                        <Shield className="text-white" size={28} />
                                    </div>
                                    <span>Our Mission</span>
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                    Our mission is to make AI infrastructure secure, observable, and resilient by design. 
                                    As AI adoption accelerates, organizations face growing risks around data integrity, 
                                    model behavior, and operational complexity.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                    KalpTech enables businesses to innovate faster while maintaining strong security posture, 
                                    regulatory compliance, and operational clarity across their AI lifecycle. We believe 
                                    that security shouldn't be an afterthought—it should be woven into the very fabric of 
                                    AI infrastructure.
                                </p>
                                
                                <div className="space-y-6 mt-10">
                                    <Link to="/privacy" className="flex items-start gap-4 hover:bg-blue-50 p-3 rounded-lg transition">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                            <Lock className="text-green-600" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Zero-Trust Architecture</h4>
                                            <p className="text-gray-600">Every component verifies every request, eliminating implicit trust.</p>
                                        </div>
                                    </Link>
                                    
                                    <Link to="/services/data-analytics" className="flex items-start gap-4 hover:bg-blue-50 p-3 rounded-lg transition">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                                            <BarChart className="text-purple-600" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">End-to-End Observability</h4>
                                            <p className="text-gray-600">Complete visibility from data pipelines to model inferences.</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-50 to-white p-10 rounded-3xl shadow-xl border border-indigo-100">
                                <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                        <Globe className="text-white" size={28} />
                                    </div>
                                    <span>Our Vision</span>
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                    We envision a future where AI systems are transparent, trusted, and safe by default. 
                                    KalpTech aims to become the foundational layer for AI-native enterprises worldwide—the 
                                    invisible infrastructure that makes advanced AI both powerful and trustworthy.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                    By unifying security, networking, and AI operations, we empower teams to focus on 
                                    innovation rather than infrastructure risk. We're building toward a world where 
                                    organizations can deploy AI at scale without compromising on security or compliance.
                                </p>
                                
                                <div className="space-y-6 mt-10">
                                    <Link to="/services/cloud" className="flex items-start gap-4 hover:bg-indigo-50 p-3 rounded-lg transition">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <Cloud className="text-blue-600" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Global AI Safety Standards</h4>
                                            <p className="text-gray-600">Establishing new benchmarks for responsible AI deployment.</p>
                                        </div>
                                    </Link>
                                    
                                    <Link to="/services/engineering" className="flex items-start gap-4 hover:bg-indigo-50 p-3 rounded-lg transition">
                                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                            <Code className="text-orange-600" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Developer-First Security</h4>
                                            <p className="text-gray-600">Making security seamless for AI engineers and data scientists.</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= OUR VALUES ================= */}
                <section className="py-24 px-10 bg-gradient-to-b from-white to-blue-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                These principles guide every decision we make, from product development to customer interactions
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <Link to="/feedback" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:border-blue-200">
                                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
                                    <Heart className="text-red-600" size={30} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Customer Trust First</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We prioritize our customers' security and success above all else. Every feature, 
                                    every update, and every decision is made with their trust as the foundation.
                                </p>
                            </Link>
                            
                            <Link to="/certifications" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:border-blue-200">
                                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                                    <Zap className="text-blue-600" size={30} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Technical Excellence</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We pursue engineering excellence in everything we build. Our systems are designed 
                                    for reliability, performance, and scalability from day one.
                                </p>
                            </Link>
                            
                            <Link to="/values/inclusion" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:border-blue-200">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                                    <Users className="text-green-600" size={30} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Collaborative Innovation</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We believe the best solutions emerge from diverse perspectives. We foster an 
                                    environment where every voice is heard and every idea is considered.
                                </p>
                            </Link>
                            
                            <Link to="/Support" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:border-blue-200">
                                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                                    <ShieldCheck className="text-purple-600" size={30} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Transparent Operations</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We practice radical transparency with our customers, partners, and team. 
                                    Security through obscurity is not our approach—we build systems that are secure by design.
                                </p>
                            </Link>
                            
                            <Link to="/about/analyst-speak" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:border-blue-200">
                                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
                                    <Clock className="text-yellow-600" size={30} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Long-Term Thinking</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We're building for the future, not just the next quarter. Our architecture is designed 
                                    to evolve with the rapidly changing AI landscape for decades to come.
                                </p>
                            </Link>
                            
                            <Link to="/Training" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:border-blue-200">
                                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
                                    <BookOpen className="text-indigo-600" size={30} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    The AI security landscape evolves daily. We maintain a culture of constant learning, 
                                    research, and adaptation to stay ahead of emerging threats and opportunities.
                                </p>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ================= CAREERS ================= */}
                <section className="py-24 px-10 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                                        <Briefcase className="text-white" size={28} />
                                    </div>
                                    <span>Careers at KalpTech</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    At KalpTech, we're assembling a world-class team of engineers, researchers, designers, 
                                    and security professionals who are passionate about shaping the future of AI infrastructure. 
                                    We're tackling some of the most challenging problems at the intersection of artificial 
                                    intelligence, cybersecurity, and distributed systems.
                                </p>
                                
                                <div className="space-y-6 mb-10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Ownership & Impact</h4>
                                            <p className="text-gray-600">Take ownership of critical projects that directly impact enterprise AI security worldwide.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <div className="w-4 h-4 rounded-full bg-green-600"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Cutting-Edge Technology</h4>
                                            <p className="text-gray-600">Work with the latest AI models, security frameworks, and cloud-native architectures.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <div className="w-4 h-4 rounded-full bg-purple-600"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Growth & Development</h4>
                                            <p className="text-gray-600">We invest in your growth with dedicated learning budgets, conferences, and mentorship programs.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <Link to="/career" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                                    View Open Positions →
                                </Link>
                            </div>
                            
                            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl shadow-xl border border-blue-100">
                                <h3 className="text-2xl font-bold mb-6">Open Roles</h3>
                                <div className="space-y-4">
                                    <Link to="/career" className="p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors block hover:shadow-md">
                                        <h4 className="font-bold text-lg mb-1">Senior AI Security Engineer</h4>
                                        <p className="text-gray-600 mb-3">Design and implement security controls for AI/ML pipelines</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Remote</span>
                                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Full-time</span>
                                        </div>
                                    </Link>
                                    
                                    <Link to="/career" className="p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors block hover:shadow-md">
                                        <h4 className="font-bold text-lg mb-1">DevOps Security Specialist</h4>
                                        <p className="text-gray-600 mb-3">Build secure deployment pipelines for AI infrastructure</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Ahmedabad</span>
                                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Full-time</span>
                                        </div>
                                    </Link>
                                    
                                    <Link to="/career" className="p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors block hover:shadow-md">
                                        <h4 className="font-bold text-lg mb-1">AI Governance Researcher</h4>
                                        <p className="text-gray-600 mb-3">Develop frameworks for ethical AI deployment and compliance</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Remote</span>
                                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Full-time</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= CONTACT ================= */}
                <section className="py-24 px-10 bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16">
                            <div>
                                <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 flex items-center justify-center">
                                        <Mail className="text-white" size={28} />
                                    </div>
                                    <span>Contact Us</span>
                                </h2>
                                
                                <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl">
                                    Whether you're an enterprise customer exploring secure AI deployment, a potential partner, 
                                    a researcher collaborating on AI safety, or a journalist covering the AI security landscape—our team is here to help.
                                </p>
                                
                                <div className="space-y-6 mb-12">
                                    <Link to="/connect" className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors block">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <Mail className="text-blue-600" size={22} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">General Inquiries</h4>
                                            <p className="text-gray-600">sales@kalptechitsolutions.com</p>
                                        </div>
                                    </Link>
                                    
                                    <Link to="/values/partners" className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors block">
                                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                            <Users className="text-green-600" size={22} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Partnerships</h4>
                                            <p className="text-gray-600">partners@kalptechitsolutions.com</p>
                                        </div>
                                    </Link>
                                    
                                    <Link to="/Support" className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors block">
                                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                                            <MessageCircle className="text-purple-600" size={22} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Technical Support</h4>
                                            <p className="text-gray-600">support@kalptechitsolutions.com</p>
                                        </div>
                                    </Link>
                                    
                                    <Link to="/about/case-studies" className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors block">
                                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                            <BookOpen className="text-orange-600" size={22} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Research Collaborations</h4>
                                            <p className="text-gray-600">research@kalptechitsolutions.com</p>
                                        </div>
                                    </Link>
                                </div>
                                
                                <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                                    <h4 className="font-bold text-lg mb-2">Office Locations</h4>
                                    <p className="text-gray-600">Ahmedabad • Remote Teams Worldwide</p>
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl shadow-xl border border-blue-100">
                                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">First Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Last Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Company</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Message</label>
                                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"></textarea>
                                    </div>
                                    
                                    <Link to="/contact" className="w-full block">
                                        <button type="button" className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg">
                                            Send Message
                                        </button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= CONNECT WITH KalpTech ================= */}
                <section className="py-24 px-10 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="bg-gradient-to-br from-indigo-50 to-white p-10 rounded-3xl shadow-xl border border-indigo-100">
                                <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                        <Users className="text-white" size={28} />
                                    </div>
                                    <span>Connect with KalpTech</span>
                                </h2>
                                
                                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                    Stay connected with KalpTech to receive product updates, cutting-edge research insights, 
                                    security advisories, and announcements about the future of AI infrastructure security.
                                </p>
                                
                                <div className="grid grid-cols-2 gap-6">
                                    <Link to="/Community" className="p-5 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all flex flex-col items-center justify-center text-center group">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                                            <Users className="text-blue-700" size={24} />
                                        </div>
                                        <span className="font-semibold">Community</span>
                                        <span className="text-sm text-gray-500 mt-1">Join discussions & forums</span>
                                    </Link>
                                    
                                    <Link to="/what-we-think" className="p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col items-center justify-center text-center group">
                                        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-3 group-hover:bg-gray-800 transition-colors">
                                            <BookOpen className="text-white" size={22} />
                                        </div>
                                        <span className="font-semibold">Thought Leadership</span>
                                        <span className="text-sm text-gray-500 mt-1">Blogs & insights</span>
                                    </Link>
                                    
                                    <Link to="/Training" className="p-5 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all flex flex-col items-center justify-center text-center group">
                                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3 group-hover:bg-orange-200 transition-colors">
                                            <BookOpen className="text-orange-600" size={22} />
                                        </div>
                                        <span className="font-semibold">Training</span>
                                        <span className="text-sm text-gray-500 mt-1">Courses & certifications</span>
                                    </Link>
                                    
                                    <Link to="/connect" className="p-5 bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all flex flex-col items-center justify-center text-center group">
                                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3 group-hover:bg-red-200 transition-colors">
                                            <Mail className="text-red-600" size={22} />
                                        </div>
                                        <span className="font-semibold">Contact</span>
                                        <span className="text-sm text-gray-500 mt-1">Get in touch</span>
                                    </Link>
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-3xl font-bold mb-6">Join Our Community</h3>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    Beyond social media, we host regular events, webinars, and workshops for the AI security community. 
                                    Join thousands of security professionals, AI researchers, and infrastructure engineers who are 
                                    shaping the future of secure artificial intelligence.
                                </p>
                                
                                <div className="space-y-6">
                                    <Link to="/trial-demos" className="p-5 bg-gradient-to-r from-white to-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition block">
                                        <h4 className="font-bold text-lg mb-2">KalpTech Security Summit</h4>
                                        <p className="text-gray-600 mb-3">Annual conference on AI security, governance, and infrastructure</p>
                                        <span className="text-sm text-blue-600 font-medium">Next event: October 15-17, 2024</span>
                                    </Link>
                                    
                                    <Link to="/Training" className="p-5 bg-gradient-to-r from-white to-purple-50 rounded-xl border border-purple-100 hover:shadow-md transition block">
                                        <h4 className="font-bold text-lg mb-2">AI Security Webinars</h4>
                                        <p className="text-gray-600 mb-3">Monthly deep dives into emerging threats and defensive strategies</p>
                                        <span className="text-sm text-purple-600 font-medium">Every third Wednesday at 10am IST</span>
                                    </Link>
                                    
                                    <Link to="/Downloads" className="p-5 bg-gradient-to-r from-white to-green-50 rounded-xl border border-green-100 hover:shadow-md transition block">
                                        <h4 className="font-bold text-lg mb-2">Open Source Contributions</h4>
                                        <p className="text-gray-600 mb-3">Contribute to our open-source security tools and frameworks</p>
                                        <span className="text-sm text-green-600 font-medium">Access resources & tools</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= FEEDBACK ================= */}
                <section className="py-24 px-10 bg-gradient-to-b from-white to-blue-50">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8">We Value Your Feedback</h2>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
                            Your feedback is instrumental in shaping the future of KalpTech. We actively listen to our customers, 
                            partners, and the broader AI community to evolve our products in ways that address real-world challenges 
                            and unlock new possibilities for secure AI deployment.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-8 mt-16">
                            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                                <div className="text-5xl font-bold text-blue-600 mb-4">1500+</div>
                                <h4 className="font-bold text-lg mb-2">Enterprise Customers</h4>
                                <p className="text-gray-600">Providing feedback that shapes our roadmap</p>
                            </div>
                            
                            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                                <div className="text-5xl font-bold text-green-600 mb-4">98%</div>
                                <h4 className="font-bold text-lg mb-2">Customer Satisfaction</h4>
                                <p className="text-gray-600">Based on quarterly feedback surveys</p>
                            </div>
                            
                            <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                                <div className="text-5xl font-bold text-purple-600 mb-4">48h</div>
                                <h4 className="font-bold text-lg mb-2">Average Response Time</h4>
                                <p className="text-gray-600">For all feedback and feature requests</p>
                            </div>
                        </div>
                        
                        <Link to="/feedback">
                            <button className="mt-12 px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-lg">
                                Share Your Feedback
                            </button>
                        </Link>
                    </div>
                </section>

                {/* ================= LEGAL SECTIONS ================= */}
                <section className="py-24 px-10 bg-gradient-to-b from-gray-100 to-gray-200">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Policies & Information</h2>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                            <Link to="/privacy" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                                <h3 className="font-bold text-xl mb-4 flex items-center gap-3">
                                    <ShieldCheck className="text-blue-600" size={20} />
                                    Privacy
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We respect your privacy and are committed to protecting your personal data through 
                                    transparent policies and strong technical and organizational safeguards.
                                </p>
                                <div className="inline-block mt-4 text-blue-600 font-medium hover:underline">
                                    Read Privacy Policy →
                                </div>
                            </Link>

                            <Link to="/terms-conditions" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                                <h3 className="font-bold text-xl mb-4 flex items-center gap-3">
                                    <Shield className="text-green-600" size={20} />
                                    Terms & Conditions
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    KalpTech maintains industry-leading security certifications including SOC 2 Type II, 
                                    ISO 27001, and HIPAA compliance.
                                </p>
                                <div className="inline-block mt-4 text-blue-600 font-medium hover:underline">
                                    View Terms →
                                </div>
                            </Link>

                            <Link to="/help" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                                <h3 className="font-bold text-xl mb-4 flex items-center gap-3">
                                    <BookOpen className="text-purple-600" size={20} />
                                    Documentation & Help
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Access comprehensive documentation, API references, implementation guides, FAQs, 
                                    and customer support resources.
                                </p>
                                <div className="inline-block mt-4 text-blue-600 font-medium hover:underline">
                                    Visit Help Center →
                                </div>
                            </Link>

                            <Link to="/cookie-policy" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                                <h3 className="font-bold text-xl mb-4 flex items-center gap-3">
                                    <Globe className="text-orange-600" size={20} />
                                    Cookie Policy
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our terms are designed to be fair, transparent, and aligned with industry best practices.
                                </p>
                                <div className="inline-block mt-4 text-blue-600 font-medium hover:underline">
                                    Review Cookie Policy →
                                </div>
                            </Link>
                        </div>
                        
                        <div className="mt-16 pt-10 border-t border-gray-300 text-center text-gray-600">
                            <p className="mb-4">© 2026 KalpTech IT Solutions. All rights reserved.</p>
                            <p className="text-sm">AI infrastructure security for the next generation of enterprise innovation.</p>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
}