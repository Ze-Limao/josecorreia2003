import { FileIcon } from "lucide-react"

export function ResumeButton() {
  return (
    <div className="flex">
      <a
        href="/JoseCorreia-Resume.pdf"
        download="JoseCorreia-Resume.pdf"
        target="blank"
        rel="noopener noreferrer"
        className="flex"
      >
        <button className="flex p-2 border-2 border-white bg-white rounded rounded-xl text-indigo-800 transition-colors hover:bg-indigo-500 hover:text-white">
          <FileIcon className="mr-1" />
          <span> Download Resume </span>
        </button>
      </a>
    </div>
  )
}

