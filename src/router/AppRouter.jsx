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

import RefreshRedirect from "../Pages/RefreshRedirect";

import AekSecValidate from "../FrontButtons/AekSecValidate";
import Certifications from "../FrontButtons/Certifications";
import Community from "../FrontButtons/Community";
import  Downloads  from "../FrontButtons/Downloads";
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

export default function AppRouter() {
  return (
    <RefreshRedirect>

    <Routes>
      <Route path="/" element={<Home />} />
     
      <Route path="/explore" element={<Explore />} />
     
      <Route path="/login" element={<Login />} />
     
      <Route path="/register" element={<Register />} />
     
      <Route path="/solutions/solution-lab" element={<SolutionLableShow />} /> 
      
      <Route path="/learn/learnAekSec" element={<LearnAekSecShow />} /> 

      <Route path="/products/product-service" element={<ProductShow />} /> 

      <Route path="/support/support-lab" element={<SupportShow />} /> 

      <Route path="/why/whyAekSec" element={<WhyAekSecShow />} /> 

      <Route path="/about" element={<About />} /> 

      <Route path="/blog" element={<Blog />} /> 

      <Route path="/AekSecValidate" element={<AekSecValidate />} /> 

      <Route path="/Certificatioons" element={<Certifications />} /> 

      <Route path="/Community" element={<Community />} /> 

      <Route path="/Downloads" element={<Downloads />} /> 

      <Route path="/Support" element={<Support />} /> 

      <Route path="/Training" element={<Training />} /> 

      <Route path="/products/ai-platform" element={<AiPlatform />} /> 

      <Route path="/products/ai-defense" element={<AiDefence />} /> 

      <Route path="/products/hyperfabric" element={<AiNexsus />} /> 

      <Route path="/report/AiReadiness-report" element={<AiReadinessReport />} /> 

      <Route path="/report/StateofSecurity-report" element={<StateofSecurity />} /> 
      
      <Route path="/report/SecuringAi-report" element={<SecuringAi />} /> 
      
      <Route path="/AekSec-canvas" element={<AekSecCanvas />} /> 
      
      <Route path="/AekSec-infrastructure" element={<AekSecInfrastructre />} /> 
      
      <Route path="/AekSec-SecureAiFactory" element={<SecureAiNVIDIA />} /> 

      <Route path="/Exploremoreai-news" element={<ExploreMoreAINews />} /> 
     
      <Route path="/AiCanvaslearning-inside" element={<AiCanvasPopUp />} /> 

      <Route path="/SecureAi-inside" element={<SecureAiPopUp />} /> 

      <Route path="/trial-demos" element={<TrialsAndDemos />} />

      <Route path="/collaboration" element={<BusinessCollaboration />} /> 
 
      <Route path="/networking" element={<Networking />} /> 

      <Route path="/computing" element={<Computing />} /> 

    </Routes>
    </RefreshRedirect>
  );
}
