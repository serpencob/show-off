import ExternalLink from "@/app/ui/links/external-link";
import Section from "@/app/ui/section";
import About from "@/app/ui/sections/about";
import Experience from "@/app/ui/sections/experience";
import Footer from "@/app/ui/sections/footer";
import Projects from "@/app/ui/sections/projects";
import { NavRoutes } from "@/app/ui/utils/types";

export default function Portfolio() {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <Section id={NavRoutes.About}>
        <About />
      </Section>
      <Section id={NavRoutes.Experience}>
        <Experience />
        <ExternalLink href="/resume.pdf">View Full Résumé</ExternalLink>
      </Section>
      <Section id={NavRoutes.Projects}>
        <Projects />
      </Section>
      <Footer />
    </main>
  );
}
