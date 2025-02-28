"use client"

import { useMemo, useState, useEffect } from "react"

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
    <div className="fixed inset-0 bg-gradient-to-b from-indigo-700/30 to-indigo-500/30 from-70% overflow-hidden">
      <div
        className="absolute bg-indigo-600/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl transition-all duration-100 ease-out"
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

