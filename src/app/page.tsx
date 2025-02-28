"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import { ProfileSidebar } from "@/components/profile";
import { SectionContainer } from "@/components/section-container";
import { ContentContainer } from "@/components/content-container";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
  ];

  useEffect(() => {
    const observers = new Map();

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          {
            threshold: 0.5,
            rootMargin: "-24px 0px 0px 0px", // Offset for the top padding
          }
        );

        observer.observe(element);
        observers.set(id, observer);
      }
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <Layout>
      <main className="flex flex-col lg:flex-row min-h-screen px-4 sm:px-6 lg:px-[5%] py-6 sm:py-8 lg:py-16 overflow-hidden">
        <ProfileSidebar
          navItems={navItems}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <ContentContainer>
          <SectionContainer id="about" title="ABOUT">
            This is indeed one of the websites in the internet. This is indeed
            one of the websites in the internet. This is indeed one of the
            websites in the internet. This is indeed one of the websites in the
            internet. This is indeed one of the websites in the internet. This
            is indeed one of the websites in the internet.
          </SectionContainer>

          <SectionContainer id="experience" title="EXPERIENCE">
            This is indeed one of the websites in the internet. This is indeed
            one of the websites in the internet. This is indeed one of the
            websites in the internet. This is indeed one of the websites in the
            internet. This is indeed one of the websites in the internet. This
            is indeed one of the websites in the internet.
          </SectionContainer>

          <SectionContainer id="projects" title="PROJECTS">
            This is indeed one of the websites in the internet. This is indeed
            one of the websites in the internet. This is indeed one of the
            websites in the internet. This is indeed one of the websites in the
            internet. This is indeed one of the websites in the internet. This
            is indeed one of the websites in the internet.
          </SectionContainer>
        </ContentContainer>
      </main>
    </Layout>
  );
}
