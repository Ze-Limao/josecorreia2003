import { ExternalLink } from "lucide-react"
import type { Experience } from "@/types/experience"

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="">
      <div className="flex flex-row justify-between mb-2">
        <div className="flex items-center gap-2">
          {experience.link && (
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-indigo-300 transition-colors"
            >
              <h3 className="text-lg sm:text-xl font-semibold">{experience.company}</h3>
              <ExternalLink size={16} className="shrink-0" />
            </a>
          )}
        </div>
        <span className="font-mono text-sm sm:text-base text-zinc-400 shrink-0">
          {experience.startDate} - {experience.endDate}
        </span>
      </div>
      <ul className="space-y-1.5 sm:space-y-2">
        {experience.roles.map((role, index) => (
          <li key={index} className="pl-3 sm:pl-4">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-zinc-300 font-mono text-sm sm:text-base">
              <span className="text-zinc-300 shrink-0">•</span>
              <span className="shrink-0">{role.title}</span>
              {role.department && (
                <>
                  <span className="text-zinc-400 shrink-0">-</span>
                  <span className="text-zinc-300">{role.department}</span>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

