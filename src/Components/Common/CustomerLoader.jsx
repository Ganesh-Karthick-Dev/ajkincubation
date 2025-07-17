"use client"

import { Html, useProgress } from "@react-three/drei"
import { useEffect, useState } from "react"

export function CustomLoader() {
  const { progress } = useProgress()
  const [isVisible, setIsVisible] = useState(true)
  const [displayProgress, setDisplayProgress] = useState(0)

  // Smooth progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        const target = progress
        const diff = target - prev
        return prev + diff * 0.08 // Smooth animation
      })
    }, 50)

    return () => clearInterval(interval)
  }, [progress])

  // Hide loader when progress reaches 100
  useEffect(() => {
    if (progress === 100) {
      setIsVisible(false)
    }
  }, [progress])

  if (!isVisible) return null

  return (
    <Html
      center
      style={{
        width: "100vw",
        height: "120vh",
        pointerEvents: "none",
        zIndex: 99999
      }}
    >
      <div className="fixed inset-0" style={{
        background: "linear-gradient(135deg, #4e73ff 0%, #6b95ff 100%)",
        zIndex: 99999
      }}>
        {/* Top left logo/text */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8">
          <div className="flex items-center space-x-1 text-white text-2xl font-bold">
            A I I F
          </div>
        </div>

        {/* Top right text */}
        <div className="absolute top-6 right-6 md:top-8 md:right-[100px]">
          <div className="text-white text-sm md:text-base font-medium tracking-wider">
            LAUNCHING 3D
            <span className="ml-2 inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
          </div>
        </div>

        {/* Center percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white font-bold tracking-tight select-none">
            <span
              className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem]"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontWeight: 800,
                lineHeight: 0.8,
              }}
            >
              {Math.round(displayProgress)}%
            </span>
          </div>
        </div>

        {/* Bottom progress indicator (optional thin line) */}
        <div className="absolute md:bottom-[12.2rem] bottom-[10.2rem] lg:bottom-[14.2rem] left-0 w-full h-2 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${displayProgress}%` }}
          />
        </div>
      </div>
    </Html>
  )
}
