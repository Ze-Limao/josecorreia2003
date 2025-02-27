"use client"

import { useMemo, useState, useEffect } from "react"
import Logo from "@/components/logo"

//const logoGradient = useMemo(() => {
//    if (!mounted) return ""
//    const rect = logoRef.current?.getBoundingClientRect()
//    const xPos = mousePos.x - (rect?.left ?? 0)
//    const yPos = mousePos.y - (rect?.top ?? 0)
//
//    return `radial-gradient(circle at ${xPos}px ${yPos}px, black 30%, transparent 100%)`
//  }, [mousePos.x, mousePos.y, mounted])

export default function InteractiveBackground() {
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setMounted(true)
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const updateMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("mousemove", updateMouse)
    window.addEventListener("resize", updateSize)

    return () => {
      window.removeEventListener("mousemove", updateMouse)
      window.removeEventListener("resize", updateSize)
    }
  }, [])

  const dx = useMemo(() => Math.abs(mousePos.x - windowSize.width / 2), [mousePos.x, windowSize.width])

  const dy = useMemo(() => Math.abs(mousePos.y - windowSize.height / 2), [mousePos.y, windowSize.height])

  const distance = useMemo(() => Math.sqrt(dx * dx + dy * dy), [dx, dy])

  const size = useMemo(() => Math.max(300 - distance / 3, 150), [distance])

  const opacity = useMemo(() => Math.min(Math.max(size / 300, 0.7), 1), [size])

  if (!mounted) {
    return <div className="fixed inset-0 bg-black" />
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-t from-blue-900/30 to-blue-600/30 from-10% overflow-hidden">
      <div
        className="absolute bg-blue-600/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl transition-all duration-100 ease-out"
        style={{
          opacity,
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    </div>
  )
}

