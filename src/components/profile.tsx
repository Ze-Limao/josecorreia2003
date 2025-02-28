"use client"

import { NameTitle } from "./name-title"
import { SocialLinks } from "./social"
import { ResumeButton } from "./resume"
import { NavMenu } from "./nav-menu"

type ProfileSidebarProps = {
  navItems: Array<{ id: string; label: string }>
  activeSection: string
  setActiveSection: (id: string) => void
}

export function ProfileSidebar({ navItems, activeSection, setActiveSection }: ProfileSidebarProps) {
  return (
    <div className="w-full lg:w-[42%] static lg:fixed lg:h-screen overflow-y-auto px-4 mb-8 lg:mb-0 lg:pl-4">
      <div className="justify-left text-pretty">
        <NameTitle />
        <div className="flex flex-col">
          <SocialLinks />
          <ResumeButton />
        </div>
        <NavMenu items={navItems} activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
    </div>
  )
}

