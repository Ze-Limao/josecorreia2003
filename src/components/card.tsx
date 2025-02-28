import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Tilt } from "@/components/ui/tilt";

interface Technology {
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  link?: string;
  logo?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  link,
  logo,
}: ProjectCardProps) {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div className="flex flex-col bg-white bg-opacity-25 border-2 rounded-xl hover:border-white transition-colors group py-2">
        <div className="flex items-center w-auto gap-2">
          <Image
            src={logo || "/placeholder.svg"}
            alt={`${title} logo`}
            width={320}
            height={120}
          />
        </div>
        <div className="flex flex-col space-y-2 pr-2 pl-4">
          <div className="flex text-white hover:text-indigo-400 transition-colors">
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
          <div className="flex flex-wrap gap-2 pr-2 pl-4">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="px-2 py-1 text-xs rounded bg-zinc-800 text-zinc-400"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  );
}
