"use client"

import Layout from "@/components/layout"
import { TextShimmerWave } from "@/components/ui/text-shimmer-wave"
import { Github, Linkedin, FileUser, Mail } from "lucide-react"
import { TextLoop } from "@/components/ui/text-loop"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
  ]

  useEffect(() => {
    const observers = new Map()

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id)
              }
            })
          },
          {
            threshold: 0.5,
          },
        )

        observer.observe(element)
        observers.set(id, observer)
      }
    })
    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, []); 

  return (
    <Layout>
      <main className="flex flex-col lg:flex-row min-h-screen px-4 sm:px-6 lg:px-[5%] py-6 sm:py-8 lg:py-16 overflow-hidden">
        {/* Fixed Left Side */}
        <div className="w-full lg:w-[42%] static lg:fixed lg:h-screen overflow-y-auto px-4 mb-8 lg:mb-0 lg:pl-4 ">
          <div className="justify-left">
            <div className="-space-y-4 sm:-space-y-6 md:-space-y-8 lg:-space-y-12" >
            <TextShimmerWave
              duration={1}
              spread={1}
              zDistance={1}
              scaleDistance={1.1}
              rotateYDistance={20}
              className="font-rubikScribble text-[2rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[6rem] text-wrap [--base-color:#ffffff] [--base-gradient-color:#ffffff]"
            >
              José&nbsp;
            </TextShimmerWave>
            <TextShimmerWave
              duration={1}
              spread={1}
              zDistance={1}
              scaleDistance={1.1}
              rotateYDistance={20}
              className="font-rubikScribble text-[2rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-wrap [--base-color:#ffffff] [--base-gradient-color:#ffffff]"
            >
              Correia
            </TextShimmerWave>
            </div>
            <TextLoop
              className="flex"
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 19,
                mass: 1.2,
              }}
              variants={{
                initial: {
                  opacity: 0,
                  filter: "blur(4px)",
                },
                animate: {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                },
                exit: {
                  opacity: 0,
                  filter: "blur(4px)",
                },
              }}
              interval={3}
            >
              <span className="flex font-rubikMono text-[1rem] md:text-[1.6rem] lg:text-[1.8rem] sm:text-[1rem]">Software Engineer</span>
              <span className="flex font-rubikMono text-[1rem] md:text-[1.6rem] lg:text-[1.8rem] sm:text-[1rem]">Web Developer</span>
            </TextLoop>
            <div className="flex flex-col sm:gap-0 gap-2">
              <div className="flex flex-wrap gap-2 sm:gap-4 my-4">
                <a href="https://github.com/Ze-Limao" target="_blank" rel="noopener noreferrer" className="flex ">
                  <button className="flex p-2 border-2 border-white rounded rounded-xl hover:text-indigo-400 transition-colors ">
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
                  <button className="flex p-2 border-2 border-white rounded rounded-xl hover:text-indigo-400 transition-colors ">
                    <Linkedin className="mr-1" />
                    <span> LinkedIn </span>
                  </button>
                </a>
                <a href="mailto:joseafonso2003@gmail.com" className="flex hover:text-indigo-400 transition-colors ">
                  <button className="flex p-2 border-2 border-white rounded rounded-xl hover:text-indigo-400 transition-colors ">
                    <Mail className="mr-1" />
                    <span> Mail </span>
                  </button>
                </a>
              </div>
              <div className="flex">
                <a
                  href="/JoseCorreia-Resume.pdf"
                  download="JoseCorreia-Resume.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                  className="flex"
                >
                  <button className="flex p-2 border-2 border-white bg-white rounded rounded-xl text-indigo-800 transition-colors hover:bg-indigo-500 hover:text-white">
                    <FileUser className="mr-1" />
                    <span> Download Resume </span>
                  </button>
                </a>
              </div>
            </div>
            <nav className="space-y-4 md:mt-16 !hidden sm:!block">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    "text-gray-400 transition-colors",
                    "relative pl-6 group flex items-center",
                    activeSection === item.id && "text-white",
                  )}
                >
                  <span
                    className={cn(
                      "absolute border-2 border-white left-0 w-3 h-3 rounded-full",
                      "transition-all duration-200",
                      activeSection === item.id ? "bg-white scale-100" : "bg-transparent group-hover:text-white",
                    )}
                  />
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(item.id)?.scrollIntoView({
                        behavior: "smooth",
                      })
                      setActiveSection(item.id)
                    }}
                    className={cn(
                      "transition-all duration-200 hover:text-white",
                      activeSection === item.id && "translate-x-4",
                    )}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </nav>
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
          </div>
        </div>

        {/* Scrollable Right Side */}
        <div className="w-full lg:ml-[48%] lg:w-[45%] flex-1 overflow-y-auto space-y-12 lg:space-y-16 pb-16 lg:pb-24 p-4 pr-[10%]">
          <section id="about" className="min-h-[80vh] lg:min-h-screen">
            <div>
              <h3 className="text-2xl mb-4">ABOUT</h3>
              <div className="text-gray-300">
                This is indeed one of the websites in the internet. This is indeed one of the websites in the internet.
                This is indeed one of the websites in the internet. This is indeed one of the websites in the internet.
                This is indeed one of the websites in the internet. This is indeed one of the websites in the internet.
              </div>
            </div>
          </section>

          <section id="experience" className="min-h-[80vh] lg:min-h-screen">
            <div>
              <h3 className="text-2xl mb-4">EXPERIENCE</h3>
              <div className="text-gray-300">
                Your experience content goes here. Add your work history, skills, and other relevant information.
              </div>
            </div>
          </section>

          <section id="projects">
            <div>
              <h3 className="text-2xl mb-4">PROJECTS</h3>
              <div className="text-gray-300 min-h-[80vh] lg:min-h-screen">
                Your projects content goes here. Showcase your portfolio items, personal projects, and contributions.
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}

