import { Github, Linkedin, Mail } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 my-4">
      <a href="https://github.com/Ze-Limao" target="_blank" rel="noopener noreferrer" className="flex">
        <button className="flex p-2 border-2 border-white rounded rounded-xl hover:text-indigo-400 transition-colors">
          <Github className="mr-1" />
          <span> Github </span>
        </button>
      </a>
      <a
        href="https://linkedin.com/in/josecorreia24"
        target="_blank"
        rel="noopener noreferrer"
        className="flex hover:text-indigo-400 transition-colors"
      >
        <button className="flex p-2 border-2 border-white rounded rounded-xl hover:text-indigo-400 transition-colors">
          <Linkedin className="mr-1" />
          <span> LinkedIn </span>
        </button>
      </a>
      <a href="mailto:joseafonso2003@gmail.com" className="flex hover:text-indigo-400 transition-colors">
        <button className="flex p-2 border-2 border-white rounded rounded-xl hover:text-indigo-400 transition-colors">
          <Mail className="mr-1" />
          <span> Mail </span>
        </button>
      </a>
    </div>
  )
}

