import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { CustomCursor } from "@/components/CustomCursor";
import { TechStack } from "@/components/TechStack";
import { GitHubActivity } from "@/components/GitHubActivity";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { VolunteerActivities } from "@/components/VolunteerActivities";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <TechStack />
      <GitHubActivity />
      <Projects />
      <Certifications />
      <VolunteerActivities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
