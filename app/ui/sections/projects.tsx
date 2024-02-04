import ContentCard from "../content-card";
import ProjectImage from "../project-image";

export default function Projects() {
  return (
    <div>
      <ul className="group/list">
        <li className="mb-12">
          <ContentCard
            header={
              <ProjectImage
                src="/hero-desktop.png"
                width={120}
                height={70}
                alt="Screenshots of the dashboard project showing desktop version"
              />
            }
            title="Modern Digital Banking"
            subtitle="Kiwibank"
            href="https://roamdigital.com/"
            tags={[
              "React",
              "TypeScript",
              "SCSS",
              "GraphQL",
              "Design System",
              "NX",
              "Micro Frontend",
              "Storybook",
              "Jest",
              "AWS",
            ]}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, earum,
            labore debitis reiciendis doloribus animi ratione distinctio,
            reprehenderit deserunt eaque esse odio aliquid ipsum ipsa incidunt
            numquam molestias sunt hic?
          </ContentCard>
        </li>
      </ul>
    </div>
  );
}
