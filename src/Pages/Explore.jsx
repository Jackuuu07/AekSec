import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroExplore from "../Explore/HeroExplore";
import AekSecBlog from "../Explore/AekSecBlog";
import AekSecNewSlider from "../Explore/AekSecNewSlider";
import AILeadershipExperience from "../Explore/AILeadershipExperience";
import AlternatingMediaSection from "../Explore/AlternatingMediaSection";
import ConnectProtectAI from "../Explore/ConnectProtectAI";
import ResponsibleAISection from "../Explore/ResponsibleAISection";

export default function Explore() {
  return (
    <>
      <Navbar />

      <HeroExplore/>

      <ConnectProtectAI/>
                  
      <AlternatingMediaSection/>

      <AekSecNewSlider/>

      <AILeadershipExperience/>

      <ResponsibleAISection/>

      <AekSecBlog/>

      <Footer />
    </>
  );
}
