import { ExternalLink } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/types/project";

export function ProjectCard({
  title,
  description,
  technologies,
  link,
  logo,
}: Project) {
  return (
    <div className="flex flex-col bg-white bg-opacity-25 border-2 hover:border-white rounded-xl">
      <div className="relative w-full aspect-[2/1]">
        <Image
          src={logo || "/placeholder.svg"}
          alt={`${title} logo`}
          fill
          className="object-cover rounded-t-xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-2">
        <div className="flex flex-col space-y-2 pb-1">
          <div className="flex text-white hover:text-indigo-300">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 "
            >
              <h3 className="flex text-xl font-semibold ">{title}</h3>
              <ExternalLink size={16} />
            </a>
          </div>
          <p className="text-zinc-300 font-rubik text-sm">{description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="px-2 py-1 text-xs rounded rounded-xl bg-zinc-300 text-zinc-800"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
