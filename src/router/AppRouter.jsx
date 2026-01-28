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

// CORRECT IMPORTS for industry pages:
import Banking from "../Pages/subsection/Banking";
import CapitalMarkets from "../Pages/subsection/CapitalMarkets";
import Insurance from "../Pages/subsection/Insurance";
import Telecom from "../Pages/subsection/Telecom";
import Media from "../Pages/subsection/Media";
import InfoServices from "../Pages/subsection/InfoServices";
import Retail from "../Pages/subsection/Retail";
import Ecommerce from "../Pages/subsection/Ecommerce";
import ConsumerGoods from "../Pages/subsection/ConsumerGoods";
import OilGas from "../Pages/subsection/OilGas";
import Utilities from "../Pages/subsection/Utilities";
import Manufacturing from "../Pages/subsection/Manufacturing";
import RenewableEnergy from "../Pages/subsection/RenewableEnergy";
import SoftwareDevelopment from "../Pages/subsection/SoftwareDevelopment";
import ITServices from "../Pages/subsection/ITServices";
import Hardware from "../Pages/subsection/Hardware";
import SaaS from "../Pages/subsection/SaaS";
import CloudServices from "../Pages/subsection/CloudServices";

// Add these imports to your existing imports section
import ConnectWithKulpTech from "../connect/ConnectWithKulpTech";
import Feedback from "../connect/Feedback";
import PrivacyPolicy from "../connect/PrivacyPolicy";
import CookiePolicy from "../connect/CookiePolicy";
import HelpCenter from "../connect/HelpCenter";
import TermsAndConditions from "../connect/TermsAndConditions";
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
        <Route path="/why/whyKalpTech" element={<WhyAekSecShow />} />
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

        <Route path="/industries/banking/banking" element={<Banking />} />
        <Route
          path="/industries/banking/capital-markets"
          element={<CapitalMarkets />}
        />
        <Route path="/industries/banking/insurance" element={<Insurance />} />
        <Route path="/industries/comms/telecom" element={<Telecom />} />
        <Route path="/industries/comms/media" element={<Media />} />
        <Route
          path="/industries/comms/info-services"
          element={<InfoServices />}
        />
        {/* <Route path="/industries/comms/broadcasting" element={<Broadcasting />} /> */}
        <Route path="/industries/consumer/retail" element={<Retail />} />
        <Route path="/industries/consumer/ecommerce" element={<Ecommerce />} />
        <Route path="/industries/consumer/goods" element={<ConsumerGoods />} />
        <Route path="/industries/energy/oil-gas" element={<OilGas />} />
        <Route path="/industries/energy/utilities" element={<Utilities />} />
        <Route
          path="/industries/energy/manufacturing"
          element={<Manufacturing />}
        />
        <Route
          path="/industries/energy/renewable"
          element={<RenewableEnergy />}
        />
        <Route
          path="/industries/technology/software"
          element={<SoftwareDevelopment />}
        />
        <Route
          path="/industries/technology/it-services"
          element={<ITServices />}
        />
        <Route path="/industries/technology/hardware" element={<Hardware />} />
        <Route path="/industries/technology/saas" element={<SaaS />} />
        <Route
          path="/industries/technology/cloud-services"
          element={<CloudServices />}
        />

        <Route path="/connect" element={<ConnectWithKulpTech />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        
      </Routes>

      <Footer />
    </>
  );
}
