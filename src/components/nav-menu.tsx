"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useCallback } from "react";

type NavItem = {
  id: string;
  label: string;
};

type NavMenuProps = {
  items: NavItem[];
  activeSection: string;
  setPendingTargetId: (id: string | null) => void;
};

export function NavMenu({
  items,
  activeSection,
  setPendingTargetId,
}: NavMenuProps) {
  const handleScroll = useCallback(
    (id: string, behavior: ScrollBehavior = "smooth") => {
      const element = document.getElementById(id);
      if (element) {
        const topOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - topOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior,
        });
      }
    },
    []
  );

  const handleArrowKeyNavigation = useCallback(
    (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }

      const currentIndex = items.findIndex((item) => item.id === activeSection);

      if (event.key === "ArrowDown") {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        const nextSectionId = items[nextIndex].id;
        setPendingTargetId(nextSectionId);
        handleScroll(nextSectionId, "smooth");
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        const prevSectionId = items[prevIndex].id;
        setPendingTargetId(prevSectionId);
        handleScroll(prevSectionId, "smooth");
      }
    },
    [activeSection, items, handleScroll, setPendingTargetId]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleArrowKeyNavigation);

    return () => {
      window.removeEventListener("keydown", handleArrowKeyNavigation);
    };
  }, [handleArrowKeyNavigation]);

  return (
    <nav className="space-y-4 mt-12 font-bold">
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "block text-zinc-400 transition-colors",
            "relative pl-6 group flex items-center",
            activeSection === item.id && "text-white"
          )}
        >
          <span
            className={cn(
              "absolute border-2 border-white left-0 w-3 h-3 rounded-full",
              "transition-all duration-500",
              activeSection === item.id
                ? "bg-white scale-100"
                : "bg-transparent group-hover:text-white"
            )}
          />
          <a
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              setPendingTargetId(item.id);
              handleScroll(item.id, "smooth");
            }}
            className={cn(
              "transition-all duration-200 hover:text-white",
              activeSection === item.id && "translate-x-4"
            )}
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
  );
}
