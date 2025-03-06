"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import { ProfileSidebar } from "@/components/profile";
import { SectionContainer } from "@/components/section-container";
import { ContentContainer } from "@/components/content-container";
import Image from "next/image";
import Footer from "@/components/footer";

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
            rootMargin: "-24px 0px 0px 0px",
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
      <main className="flex flex-col lg:flex-row min-h-screen px-4 sm:px-6 lg:px-[5%] pt-6 sm:pt-8 lg:pt-16 overflow-hidden">
        <ProfileSidebar
          navItems={navItems}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <ContentContainer>
          <SectionContainer id="about" title="ABOUT">
            <div className="flex flex-col items-center space-y-8">
              <p>
                I am a first-year Master&apos;s student in Software Engineering
                at the University of Minho, Braga, Portugal. My journey in
                computer science has given me expertise in areas like
                Algorithms, AI, and Software Development. I use this site to
                showcase my projects, share my experiences, and document my
                learning process.
              </p>
              <Image
                src="/logo.png"
                alt={`Eu`}
                width={600}
                height={600}
                className="flex"
              />
            </div>
          </SectionContainer>
          <SectionContainer id="experience" title="EXPERIENCE">
            {undefined}
          </SectionContainer>
          <SectionContainer id="projects" title="PROJECTS">
            {undefined}
          </SectionContainer>
          <Footer />
        </ContentContainer>
      </main>
    </Layout>
  );
}
