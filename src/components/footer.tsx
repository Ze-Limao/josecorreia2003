"use client";

import { Brush, Coffee, Code } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number>(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full py-8 border-t border-white/10">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-zinc-300 text-sm flex items-center gap-2 mb-2">
          <Brush size={12} />
          <span className="font-mono">Designed & Built</span>
          <span className="font-mono">by myself </span>
        </p>

        <div className="flex items-center gap-4 text-zinc-400 text-xs mt-2">
          <div className="flex items-center gap-1">
            <Coffee size={12} />
            <span>Fueled by coffee</span>
          </div>
          <div className="flex items-center gap-1">
            <Code size={12} />
            <span>Built with Next.js & Tailwind</span>
          </div>
        </div>

        <p className="text-zinc-500 text-xs mt-4">
          © {year} José Correia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
