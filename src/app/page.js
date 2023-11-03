import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex h-screen flex-col snap-y snap-mandatory overflow-scroll">
      <Navbar />
      <div className=" w-9/12 m-auto   ">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
    
  );
}
