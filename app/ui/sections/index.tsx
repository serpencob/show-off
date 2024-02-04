import About from "./about";
import Experience from "./experience";
import Projects from "./projects";
import Footer from "./footer";
import Section from "../section";
import ExternalLink from "../external-link";
import { NavRoutes } from "../utils/types";

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
