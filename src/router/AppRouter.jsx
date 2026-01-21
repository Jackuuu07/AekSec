import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Explore from "../Pages/Explore";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

import SolutionLableShow from "../Pages/LablesInside/SolutionLableShow";
import SupportShow from "../Pages/LablesInside/SupportShow";
import WhyAekSecShow from "../Pages/LablesInside/WhyAekSecShow";
import ProductShow from "../Pages/LablesInside/ProducAndServiceLableShow";
import LearnAekSecShow from "../Pages/LablesInside/LearnLableShow";
import About from "../Pages/About";
import Blog from "../Blog/Blog";

import AekSecValidate from "../FrontButtons/AekSecValidate";
import Certifications from "../FrontButtons/Certifications";
import Community from "../FrontButtons/Community";
import Downloads from "../FrontButtons/Downloads";
import Support from "../FrontButtons/Support";
import Training from "../FrontButtons/Training";

import AiPlatform from "../CriticalStructure/AiPlatform";
import AiDefence from "../CriticalStructure/AiDefence";
import AiNexsus from "../CriticalStructure/AiNexsus";

import AiReadinessReport from "../InsideAekSec/AiReadinessReport";
import SecuringAi from "../InsideAekSec/SecuringAi";
import StateofSecurity from "../InsideAekSec/StateOfSecurity";

import AekSecCanvas from "../DrivingAiInovation/AekSecCanvas";
import AekSecInfrastructre from "../DrivingAiInovation/AekSecInfrastucutre";
import SecureAiNVIDIA from "../DrivingAiInovation/SecureAiNVIDIA";
import ExploreMoreAINews from "../DrivingAiInovation/ExploreMoreNews";

import AiCanvasPopUp from "../DrivingAiInovation/PopUp Pages/AiCanvasPopUp";
import SecureAiPopUp from "../DrivingAiInovation/PopUp Pages/SecureAiPopUp";
import TrialsAndDemos from "../Pages/TrialAndDemos";

import BusinessCollaboration from "../BrowsByTechnology/Collaboration";
import Networking from "../BrowsByTechnology/Networking";
import Computing from "../BrowsByTechnology/Computing";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Career from "../Pages/services/Career";
import WhatWeThink from "../Pages/services/WhatWeThink";
import Contact from "../Pages/services/Contact";

import Applications from "../Pages/whatwedo/Applications";
import KulpIntelligence from "../Pages/whatwedo/KulpIntelligence";
import BusinessProcessServices from "../Pages/whatwedo/BusinessProcessServices";
import Cloud from "../Pages/whatwedo/Cloud";
import Consulting from "../Pages/whatwedo/Consulting";
import Cybersecurity from "../Pages/whatwedo/Cybersecurity";
import DataAnalytics from "../Pages/whatwedo/DataAnalytics";
import DigitalExperiences from "../Pages/whatwedo/DigitalExperiences";
import Engineering from "../Pages/whatwedo/Engineering";
import Sustainability from "../Pages/whatwedo/Sustainability";

// About Us Pages
import AnalystSpeak from "../Pages/aboutkulptech/AnalystSpeak";
import AwardsRecognitions from "../Pages/aboutkulptech/AwardsRecognitions";
import CaseStudies from "../Pages/aboutkulptech/CaseStudies";
import CorporateSustainability from "../Pages/aboutkulptech/CorporateSustainability";
import Leadership from "../Pages/aboutkulptech/Leadership";
import Locations from "../Pages/aboutkulptech/Locations";

// Our Values Pages
import InclusionBelonging from "../Pages/aboutkulptech/InclusionBelonging";
import Investors from "../Pages/aboutkulptech/Investors";
import News from "../Pages/aboutkulptech/News";
import PartnerEcosystem from "../Pages/aboutkulptech/PartnerEcosystem";
import PrivacyAtKulpTech from "../Pages/aboutkulptech/PrivacyAtKulpTech";
import SupplierDiversity from "../Pages/aboutkulptech/SupplierDiversity";

// Innovation Pages
import InnovationNetwork from "../Pages/aboutkulptech/InnovationNetwork";
import KulpTechVentures from "../Pages/aboutkulptech/KulpTechVentures";
import KulpTechWellbeing from "../Pages/aboutkulptech/KulpTechWellbeing";

export default function AppRouter() {
  // const location = useLocation();

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/solutions/solution-lab" element={<SolutionLableShow />} />

        <Route path="/learn" element={<LearnAekSecShow />} />

        <Route path="/products/product-service" element={<ProductShow />} />

        <Route path="/support/support-lab" element={<SupportShow />} />

        <Route path="/why/whyAekSec" element={<WhyAekSecShow />} />

        <Route path="/about" element={<About />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/kulptech-validated" element={<AekSecValidate />} />

        <Route path="/certifications" element={<Certifications />} />

        <Route path="/Community" element={<Community />} />

        <Route path="/Downloads" element={<Downloads />} />

        <Route path="/Support" element={<Support />} />

        <Route path="/Training" element={<Training />} />

        <Route path="/products/ai-platform" element={<AiPlatform />} />

        <Route path="/products/ai-defense" element={<AiDefence />} />

        <Route path="/products/hyperfabric" element={<AiNexsus />} />

        <Route
          path="/report/AiReadiness-report"
          element={<AiReadinessReport />}
        />

        <Route
          path="/report/StateofSecurity-report"
          element={<StateofSecurity />}
        />

        <Route path="/report/SecuringAi-report" element={<SecuringAi />} />

        <Route path="/AekSec-canvas" element={<AekSecCanvas />} />

        <Route
          path="/AekSec-infrastructure"
          element={<AekSecInfrastructre />}
        />

        <Route path="/AekSec-SecureAiFactory" element={<SecureAiNVIDIA />} />

        <Route path="/Exploremoreai-news" element={<ExploreMoreAINews />} />

        <Route path="/AiCanvaslearning-inside" element={<AiCanvasPopUp />} />

        <Route path="/SecureAi-inside" element={<SecureAiPopUp />} />

        <Route path="/trial-demos" element={<TrialsAndDemos />} />

        <Route path="/collaboration" element={<BusinessCollaboration />} />

        <Route path="/networking" element={<Networking />} />

        <Route path="/computing" element={<Computing />} />

        <Route path="/career" element={<Career />} />

        <Route path="/what-we-think" element={<WhatWeThink />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/services/applications" element={<Applications />} />
        <Route
          path="/services/kulp-intelligence"
          element={<KulpIntelligence />}
        />
        <Route
          path="/services/business-process-services"
          element={<BusinessProcessServices />}
        />
        <Route path="/services/cloud" element={<Cloud />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        <Route path="/services/data-analytics" element={<DataAnalytics />} />
        <Route
          path="/services/digital-experiences"
          element={<DigitalExperiences />}
        />
        <Route path="/services/engineering" element={<Engineering />} />
        <Route path="/services/sustainability" element={<Sustainability />} />

        <Route path="/about/analyst-speak" element={<AnalystSpeak />} />
        <Route path="/about/awards" element={<AwardsRecognitions />} />
        <Route path="/about/case-studies" element={<CaseStudies />} />
        <Route
          path="/about/sustainability-events"
          element={<CorporateSustainability />}
        />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/about/locations" element={<Locations />} />

        {/* Our Values Routes */}
        <Route path="/values/inclusion" element={<InclusionBelonging />} />
        <Route path="/values/investors" element={<Investors />} />
        <Route path="/values/news" element={<News />} />
        <Route path="/values/partners" element={<PartnerEcosystem />} />
        <Route path="/values/privacy" element={<PrivacyAtKulpTech />} />
        <Route
          path="/values/supplier-diversity"
          element={<SupplierDiversity />}
        />

        {/* Innovation Routes */}
        <Route path="/innovation/network" element={<InnovationNetwork />} />
        <Route path="/innovation/ventures" element={<KulpTechVentures />} />
        <Route path="/innovation/wellbeing" element={<KulpTechWellbeing />} />
        
      </Routes>

      <Footer />
    </>
  );
}
