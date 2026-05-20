"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Layout from "@/components/layout";
import { ProfileSidebar } from "@/components/profile";
import { SectionContainer } from "@/components/section-container";
import { ContentContainer } from "@/components/content-container";
import { Tilt } from "@/components/ui/tilt";
import Image from "next/image";
import Footer from "@/components/footer";
import { aboutParagraphs } from "@/content/about";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const pendingTargetIdRef = useRef<string | null>(null);
  const setPendingTargetId = useCallback((id: string | null) => {
    pendingTargetIdRef.current = id;
  }, []);

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
                const pendingTargetId = pendingTargetIdRef.current;
                if (pendingTargetId && id !== pendingTargetId) {
                  return;
                }
                if (pendingTargetId && id === pendingTargetId) {
                  pendingTargetIdRef.current = null;
                }
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
          setPendingTargetId={setPendingTargetId}
        />
        <ContentContainer>
          <SectionContainer id="about" title="ABOUT">
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                {aboutParagraphs.map((paragraph, index) => (
                  <p key={`${index}-${paragraph.slice(0, 20)}`}>{paragraph}</p>
                ))}
              </div>
              <Tilt rotationFactor={6} className="inline-block">
                <Image
                  src="/logo.png"
                  alt={`Eu`}
                  width={400}
                  height={400}
                  className="flex"
                />
              </Tilt>
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
