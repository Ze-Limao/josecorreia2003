import type { ReactNode } from "react";
import { ProjectCard } from "./card";

type SectionContainerProps = {
  id: string;
  title: string;
  children: ReactNode;
};

const projects = [
  {
    title: "Dharma Market",
    description:
      "Collaborated with an awesome team to take the project to the next level, implementing a whole new merchandise...",
    technologies: [
      { name: "Vue.js" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "Meilisearch" },
    ],
    logo: "/logo.png",
    link: "https://market.mydharma.network/",
  },
];

export function ProjectsSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}

export function SectionContainer({
  id,
  title,
  children,
}: SectionContainerProps) {
  return (
    <section id={id} className="min-h-[50vh] lg:min-h-screen">
      <div>
        <h3 className="text-2xl mb-4">{title}</h3>
        <div className="text-gray-300">
          {id === "projects" ? <ProjectsSection /> : children}
        </div>
      </div>
    </section>
  );
}
