"use client"

import { useState, useEffect } from "react"

export function SimpleLoader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15 + 5 // Random progress increment
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #4e73ff 0%, #6b95ff 100%)',
      zIndex: 99999,
      pointerEvents: 'none'
    }}>
      {/* Top left logo/text */}
      <div className="absolute top-3 left-3 md:top-6 md:left-6 lg:top-8 lg:left-8">
        <div className="flex items-center space-x-1 text-white text-lg md:text-2xl font-bold">
          A I I F
        </div>
      </div>

      {/* Top right text */}
      <div className="absolute top-[150px] right-3 md:top-6 md:right-6 lg:top-[200px] lg:right-[80px]">
        <div className="text-white text-xs md:text-sm lg:text-base font-medium tracking-wider">
          LAUNCHING 3D
          <span className="ml-1 md:ml-2 inline-block w-1 h-1 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></span>
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
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Bottom progress indicator */}
      <div className="absolute bottom-[10.1rem] md:bottom-[10.2rem] lg:bottom-[12.2rem] xl:bottom-[14.2rem] left-0 w-full h-1 md:h-2 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}