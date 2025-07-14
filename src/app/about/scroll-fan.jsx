"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const fanBlades = [
  {
    id: 1,
    title: "Enable an entrepreneurial mindset among students and faculty.",
  },
  {
    id: 2,
    title: "Facilitate idea validation and prototyping support",
  },
  {
    id: 3,
    title: "Bridge academia, industry, and investors for sustainable venture growth.",
  },
]

export default function ScrollFan() {

  const containerRef = useRef(null)
  const fanRef = useRef(null)
  const textElementsRef = useRef([])
  const dotElementsRef = useRef([])
  let rotation = 0 // Declare the rotation variable

  useEffect(() => {
    if (!containerRef.current || !fanRef.current) return

    const container = containerRef.current
    const fan = fanRef.current
    const textElements = textElementsRef.current

    // Set initial state - show first text blade if it's on the right side
    gsap.set(textElements, { opacity: 0 })
    // Check if first blade is on the right side initially
    const firstBladeAngle = 0 * 120 // First blade starts at 0 degrees
    const isFirstBladeOnRight = firstBladeAngle >= 330 || firstBladeAngle <= 30
    if (isFirstBladeOnRight) {
      gsap.set(textElements[0], { opacity: 1 })
    }

    // Create scroll trigger for fan rotation
    ScrollTrigger.create({
      trigger: container,
      start: "center center",
      end: "+=680", // Increased scroll distance by 20% for slower blade transitions
      scrub: 3,
      scroller: "#main-scroll-area", // Tell ScrollTrigger to use the LayoutWrapper's scroll container
      pin: true, // Pin the component in place while scrolling
      onUpdate: (self) => {
        const progress = self.progress
        rotation = -progress * 60 // 2 * 30, so all 3 blades pass through the right side

        // Rotate only the text elements, not the entire fan container
        gsap.set(fanRef.current, { rotation: rotation })

        // Calculate which text should be visible based on rotation
        let activeText = 0 // Start with the first text blade (index 0)
        if (progress < 0.33) {
          activeText = 0 // First text blade (index 0)
        } else if (progress < 0.66) {
          activeText = 1 // Second text blade (index 1)
        } else {
          activeText = 2 // Third text blade (index 2)
        }

        // Show only the text on the right side and fix alignment
        textElements.forEach((element, index) => {
          // Calculate if this text is currently on the right side
          const baseAngle = index * 30 // 3 blades, 30 degrees apart (closer)
          const currentAngle = (baseAngle + rotation) % 360
          const normalizedAngle = currentAngle < 0 ? currentAngle + 360 : currentAngle
          
          // Check if text is on the right side (between 330 and 30 degrees)
          const isOnRightSide = normalizedAngle >= 330 || normalizedAngle <= 30
          
          // Debug logging
          console.log(`Text ${index}: angle=${normalizedAngle.toFixed(1)}°, isOnRightSide=${isOnRightSide}, activeText=${activeText}`)
          
          if (index === activeText && isOnRightSide) {
            gsap.to(element, { opacity: 1, duration: 0.3 })
            // Fix the text rotation for the active element
            const textContent = element.querySelector(".text-content")
            if (textContent) {
              gsap.set(textContent, { rotation: -rotation - index * 30 })
            }
            // Animate the corresponding dot: blue and visible
            if (dotElementsRef.current[index]) {
              gsap.to(dotElementsRef.current[index], { opacity: 1, background: '#2563eb', duration: 0.3 })
            }
          } else {
            gsap.to(element, { opacity: 0, duration: 0.3 })
            // Animate the corresponding dot: grey and faded
            if (dotElementsRef.current[index]) {
              gsap.to(dotElementsRef.current[index], { opacity: 0.3, background: '#d1d5db', duration: 0.3 })
            }
          }
        })
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

      return (
        <div className="bg-gradient-to-br relative">
        {/* Fan Container - No sticky, will scroll away naturally */}
        <div ref={containerRef} className="h-screen flex items-center justify-center relative -left-1/2">
          <div className="relative w-[900px] h-[900px]">
            {/* Spinning Fan: Blue Dots, Outer Circle, and Blades */}
            <div ref={fanRef} className="absolute inset-0 w-full h-full">
              {/* Static Blue Dots on the outer circle, one for each blade, perfectly aligned and animated */}
              {fanBlades.map((_, i) => {
                const radius = 400; // 800px diameter / 2
                const center = 450; // 900px container / 2
                const angleDeg = i * 30; // 0, 30, 60 degrees
                const angleRad = (angleDeg * Math.PI) / 180;
                const x = center + radius * Math.cos(angleRad) - 12; // -12 to center the 24px dot
                const y = center + radius * Math.sin(angleRad) - 12;
                return (
                  <div
                    key={i}
                    ref={el => { if (el) dotElementsRef.current[i] = el; }}
                    style={{
                      position: 'absolute',
                      left: `${x}px`,
                      top: `${y}px`,
                      width: '24px',
                      height: '24px',
                      background: '#2563eb', // default blue, will be updated by GSAP
                      borderRadius: '50%',
                      border: '4px solid white',
                      boxShadow: '0 0 0 4px #93c5fd',
                      zIndex: 30,
                      opacity: 0, // default, will be updated by GSAP
                      transition: 'background 0.3s',
                    }}
                  />
                );
              })}
              {/* Outer Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" style={{ willChange: 'auto', backfaceVisibility: 'hidden' }}>
                <div className="w-[800px] h-[800px] rounded-full border-2 border-gray-300"></div>
              </div>
              {/* Spinning Text Elements */}
              {fanBlades.map((blade, index) => {
                const angle = index * 30 // 3 blades, 30 degrees apart (closer)
                return (
                  <div
                    key={blade.id}
                    ref={(el) => {
                      if (el) textElementsRef.current[index] = el
                    }}
                    className="absolute top-1/2 left-1/2 transition-opacity duration-300"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                      transformOrigin: "50% 50%",
                    }}
                  >
                    {/* Text extending from center to right with more spacing */}
                    <div className="relative">
                      <div
                        className="absolute text-content"
                        style={{
                          left: "500px", // Increased spacing to clear the logo circles
                          top: "-30px",
                          width: "800px",
                          height: "60px",
                          transform: `rotate(${-angle}deg)`, // Initial rotation
                        }}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <h3 className="text-5xl font-medium text-gray-800">{blade.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            {/* Static Logo with 3 Concentric Circles (middle and inner only, not spinning) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none" style={{ willChange: 'auto', backfaceVisibility: 'hidden' }}>
              {/* Middle Circle with light blue fill */}
              <div className="w-[600px] h-[600px] rounded-full border-2 border-gray-300 bg-blue-100/50 flex items-center justify-center">
                {/* Inner Circle */}
                <div className="w-[250px] h-[250px] rounded-full border-2 border-gray-300 bg-white flex items-center justify-center shadow-lg">
                  {/* AIIF Logo */}
                  <div className="text-center">
                    <Image src="/logo.png" alt="AIIF Logo" width={1080} height={1080} className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}
