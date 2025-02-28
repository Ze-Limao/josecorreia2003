"use client";

import { TextShimmerWave } from "@/components/ui/text-shimmer-wave";
import { TextLoop } from "@/components/ui/text-loop";

export function NameTitle() {
  return (
    <div className="justify-left">
      <div className="-space-y-4 sm:-space-y-6 md:-space-y-8 lg:-space-y-12">
        <TextShimmerWave
          duration={1}
          spread={1}
          zDistance={1}
          scaleDistance={1.1}
          rotateYDistance={20}
          className="font-rubikScribble text-[2rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-wrap [--base-color:#ffffff] [--base-gradient-color:#ffffff]"
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
      <div>
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
          <span className="flex font-rubikMono text-[1rem] md:text-[1.2rem] lg:text-[1.6rem] sm:text-[1rem]">Software Engineer</span>
          <span className="flex font-rubikMono text-[1rem] md:text-[1.2rem] lg:text-[1.6rem] sm:text-[1rem]">Web Developer</span>
        </TextLoop>
      </div>
    </div>
  );
}
