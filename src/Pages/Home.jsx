import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import QuickLinks from "../components/QuickLinks";
import LatestProducts from "../components/LatestProducts";
import BrowseTechnology from "../components/BrowseTechnology";
import ImageTextSection from "../components/ImageTextSection";
import InsideCisco from "../components/InsideCisco";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <QuickLinks />

      <LatestProducts />

      <ImageTextSection />

      <BrowseTechnology />

      <InsideCisco />
 
      <Footer />
    </>
  );
}
