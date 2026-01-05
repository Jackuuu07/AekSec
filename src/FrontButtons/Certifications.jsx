import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Certifications() {
  const stories = [
    {
      name: "Rahul Mehta",
      role: "Security Analyst",
      company: "FinTech Company",
      quote:
        "AekSec certification helped me transition into a cybersecurity role within 6 months.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Ananya Patel",
      role: "Cloud Security Engineer",
      company: "SaaS Startup",
      quote:
        "The hands-on labs and real-world scenarios made AekSec Academy stand out.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Vikram Singh",
      role: "SOC Engineer",
      company: "Enterprise MSSP",
      quote:
        "Industry-aligned curriculum and expert instructors helped me crack interviews confidently.",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const [activeStory, setActiveStory] = useState(0);

  return (
    <>
        <Navbar/>

        
    <div className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1535223289827-42f1e9919769"
          alt="Cybersecurity Certification"
          className="w-full h-[520px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-8">
            <h1 className="text-4xl md:text-5xl font-light text-white max-w-3xl leading-tight">
              Build Industry-Ready Cybersecurity Skills with AekSec Certifications
            </h1>
            <p className="text-gray-200 mt-6 max-w-2xl">
              Globally relevant certifications designed for real-world security challenges.
            </p>

            <button className="mt-8 px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
              Explore Certifications
            </button>
          </div>
        </div>
      </section>

      {/* ================= AEKSEC ACADEMY ================= */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-light mb-6">
            AekSec Academy
          </h2>
          <p className="text-lg mb-4">
            AekSec Academy is built to bridge the gap between academic learning and
            enterprise cybersecurity requirements.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Industry-aligned curriculum</li>
            <li>Hands-on labs & simulations</li>
            <li>Expert-led training programs</li>
            <li>Career-focused certifications</li>
          </ul>
        </div>

        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692"
          alt="Academy Training"
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* ================= CERTIFICATION PROGRAMS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light mb-12 text-center">
            Certification Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Certified Network Security Associate",
              "Certified SOC Analyst",
              "Certified Cloud Security Professional",
              "Certified Ethical Hacker (Foundations)",
              "Certified DevSecOps Engineer",
              "Certified Zero Trust Architect",
            ].map((cert) => (
              <div
                key={cert}
                className="bg-white border rounded-xl p-8 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-medium mb-3">{cert}</h3>
                <p className="text-sm text-gray-600">
                  Enterprise-focused certification covering tools, frameworks,
                  and real-world attack scenarios.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-light mb-12 text-center">
          Technologies You Will Work With
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            "Network Security",
            "Cloud Security",
            "SIEM & SOC",
            "Threat Intelligence",
            "Zero Trust",
            "DevSecOps",
            "Endpoint Security",
            "Incident Response",
          ].map((tech) => (
            <div
              key={tech}
              className="border rounded-xl p-6 hover:bg-blue-50 transition"
            >
              <p className="font-medium">{tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SUCCESS STORIES (SLIDER) ================= */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-light mb-12">
            Success Stories
          </h2>

          <div className="bg-gray-800 rounded-xl p-10 shadow-lg">
            <img
              src={stories[activeStory].img}
              alt={stories[activeStory].name}
              className="w-20 h-20 rounded-full mx-auto mb-6"
            />

            <p className="text-lg italic mb-6">
              “{stories[activeStory].quote}”
            </p>

            <p className="font-medium">
              {stories[activeStory].name}
            </p>
            <p className="text-sm text-gray-400">
              {stories[activeStory].role} — {stories[activeStory].company}
            </p>

            {/* SLIDER CONTROLS */}
            <div className="flex justify-center gap-3 mt-8">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStory(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeStory === index ? "bg-blue-500" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>

    <Footer/>
    </>
  );
}
