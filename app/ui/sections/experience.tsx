import ContentCard from "../content-card";

export default function Experience() {
  return (
    <div>
      <ol className="group/list">
        <li className="mb-12">
          <ContentCard
            header="2021 - Present"
            title="Stellar Elements"
            subtitle="Senior Frontend Engineer"
            href="https://roamdigital.com/"
            tags={[
              "React",
              "JavaScript",
              "TypeScript",
              "HTML & CSS",
              "GraphQL",
              "Next.js",
              "React Native",
              "SCSS",
            ]}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, earum,
            labore debitis reiciendis doloribus animi ratione distinctio,
            reprehenderit deserunt eaque esse odio aliquid ipsum ipsa incidunt
            numquam molestias sunt hic?
          </ContentCard>
        </li>
        <li className="mb-12">
          <ContentCard
            header="2017 - 2021"
            title="Roam Digital"
            subtitle="Frontend Engineer"
            href="https://roamdigital.com/"
            tags={[
              "React",
              "JavaScript",
              "TypeScript",
              "HTML & CSS",
              "GraphQL",
              "Gatsby",
              "Redux",
              "AWS",
            ]}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, earum,
            labore debitis reiciendis doloribus animi ratione distinctio,
            reprehenderit deserunt eaque esse odio aliquid ipsum ipsa incidunt
            numquam molestias sunt hic?
          </ContentCard>
        </li>
      </ol>
    </div>
  );
}
