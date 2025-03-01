"use client"
import { cn } from "@/lib/utils"

type NavItem = {
  id: string
  label: string
}

type NavMenuProps = {
  items: NavItem[]
  activeSection: string
  setActiveSection: (id: string) => void
}

export function NavMenu({ items, activeSection, setActiveSection }: NavMenuProps) {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const topOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setActiveSection(id)
    }
  }

  return (
    <nav className="space-y-4 mt-12 font-bold">
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "block text-gray-400 transition-colors",
            "relative pl-6 group flex items-center",
            activeSection === item.id && "text-white",
          )}
        >
          <span
            className={cn(
              "absolute border-2 border-white left-0 w-3 h-3 rounded-full",
              "transition-all duration-500",
              activeSection === item.id ? "bg-white scale-100" : "bg-transparent group-hover:text-white",
            )}
          />
          <a
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              handleScroll(item.id)
            }}
            className={cn("transition-all duration-200 hover:text-white", activeSection === item.id && "translate-x-4")}
          >
            {item.label}
          </a>
        </div>
      ))}
      <style jsx>{`
        @media (max-width: 1023px) {
          nav {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
          }
          nav > div {
            margin-top: 0 !important;
          }
        }
      `}</style>
    </nav>
  )
}

