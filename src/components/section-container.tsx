import type { ReactNode } from "react";
import { ProjectCard } from "./card";
import projectsData from "@/projects.json";
import type { Project } from "@/types/project";
import { ExperienceCard } from "./exp-card";
import experienceData from "@/experiences.json";
import type { Experience } from "@/types/experience";

type SectionContainerProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function ExperienceSection() {
  const experiences: Experience[] = experienceData.experiences;

  return (
    <div className="bg-white/20 rounded-xl p-6 border-2 space-y-8 hover:border-white transition-colors">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.company} experience={experience} />
      ))}
    </div>
  );
}

export function ProjectsSection() {
  const projects: Project[] = projectsData.projectsData;
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
        <div className="text-zinc-300">
          {id === "projects" ? (
            <ProjectsSection />
          ) : id === "experience" ? (
            <ExperienceSection />
          ) : (
            children
          )}
        </div>
      </div>
    </section>
  );
}
