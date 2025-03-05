"use client"

import { useEffect, useRef, useState } from "react"

export default function InteractiveBackground() {
  const [mounted, setMounted] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  const mousePos = useRef({ x: 0, y: 0 })
  const elementRef = useRef<HTMLDivElement | null>(null)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    setMounted(true)
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })

    const updateMouse = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        if (elementRef.current) {
          const dx = Math.abs(mousePos.current.x - windowSize.width / 2)
          const dy = Math.abs(mousePos.current.y - windowSize.height / 2)
          const distance = Math.sqrt(dx * dx + dy * dy)

          const size = Math.max(300 - distance / 3, 150)
          const opacity = Math.min(Math.max(size / 300, 0.7), 1)

          elementRef.current.style.opacity = opacity.toString()
          elementRef.current.style.left = `${mousePos.current.x}px`
          elementRef.current.style.top = `${mousePos.current.y}px`
          elementRef.current.style.width = `${size}px`
          elementRef.current.style.height = `${size}px`
        }
      })
    }

    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("mousemove", updateMouse)
    window.addEventListener("resize", updateSize)

    return () => {
      window.removeEventListener("mousemove", updateMouse)
      window.removeEventListener("resize", updateSize)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-indigo-700/30 to-indigo-500/30 from-70% overflow-hidden">
      <div
        ref={elementRef}
        className="absolute bg-indigo-600/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl transition-all duration-200 ease-out"
      />
    </div>
  )
}
