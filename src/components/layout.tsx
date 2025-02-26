import type { ReactNode } from "react"
import InteractiveBackground from "./interactive-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen">
      <InteractiveBackground />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
