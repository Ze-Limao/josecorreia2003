import type { ReactNode } from "react";
import { ProjectCard } from "./card";
import projectsData from "@/projects.json";
import type { Project } from "@/types/project"

type SectionContainerProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function ProjectsSection() {
  const projects: Project[] = projectsData.projectsData
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
        <h3 className="text-2xl mb-8">{title}</h3>
        <div className="text-gray-300">
          {id === "projects" ? <ProjectsSection /> : children}
        </div>
      </div>
    </section>
  );
}
