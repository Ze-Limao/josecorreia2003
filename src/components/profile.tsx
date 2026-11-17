"use client";

import { NameTitle } from "./name-title";
import { SocialLinks } from "./social";
import { ResumeButton } from "./resume";
import { NavMenu } from "./nav-menu";
import { MascotPlaceholder } from "./mascot-placeholder";

type ProfileSidebarProps = {
  navItems: Array<{ id: string; label: string }>;
  activeSection: string;
  setPendingTargetId: (id: string | null) => void;
};

export function ProfileSidebar({
  navItems,
  activeSection,
  setPendingTargetId,
}: ProfileSidebarProps) {
  return (
    <div className="w-full lg:w-[42%] static lg:fixed lg:h-screen overflow-hidden px-4 mb-8 lg:mb-0 lg:pl-4">
      <div className="justify-left text-pretty">
        <NameTitle />
        <SocialLinks>
          <ResumeButton />
        </SocialLinks>
        <div className="sm:block hidden">
          <NavMenu
            items={navItems}
            activeSection={activeSection}
            setPendingTargetId={setPendingTargetId}
          />
        </div>
        <div className="hidden lg:flex mx-auto mt-10 h-[480px] w-[480px] items-center justify-center">
          <MascotPlaceholder sectionKey={activeSection} />
        </div>
      </div>
    </div>
  );
}
