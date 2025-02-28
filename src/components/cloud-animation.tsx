"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function CloudAnimation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className=" w-full overflow-hidden">
      <div className="cloud absolute bottom-0 w-full">
        {[1, 2, 3, 4, 5].map((i) => (
          <Image
            key={i}
            src={`/clouds/cloud${i}.png`}
            alt=""
            width="auto"
            height="auto"
            className="absolute bottom-0 opacity-60 animate-cloud"
            style={{
              animationDelay: `${i * 1}s`,
              animationDuration: `${30 * i}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

