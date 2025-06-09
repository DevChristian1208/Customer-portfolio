import HeroSection from "@/Components/HeroSection";
import Aboutme from "@/Components/Aboutme";
import MyProjects from "@/Components/Myprojects";
import Services from "@/Components/Services";
import Contact from "@/Components/Contacme";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Aboutme myname="christian" />
      <MyProjects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
