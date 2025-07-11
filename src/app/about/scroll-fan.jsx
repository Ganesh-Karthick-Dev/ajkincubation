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
  let rotation = 0 // Declare the rotation variable

  useEffect(() => {
    if (!containerRef.current || !fanRef.current) return

    const container = containerRef.current
    const fan = fanRef.current
    const textElements = textElementsRef.current

    // Set initial state - only show text on the right
    gsap.set(textElements, { opacity: 0.3 })
    gsap.set(textElements[0], { opacity: 1 })

    // Create scroll trigger for fan rotation
    ScrollTrigger.create({
      trigger: container,
      start: "center center",
      end: "+=1500", // Even longer scroll distance for ultra-smooth spinning
      scrub: 3,
      scroller: "#main-scroll-area", // Tell ScrollTrigger to use the LayoutWrapper's scroll container
      pin: true, // Pin the component in place while scrolling
      onUpdate: (self) => {
        const progress = self.progress
        rotation = -progress * 240 // Reduced rotation to stop cleanly after 3 blades

        // Rotate the entire fan
        gsap.set(fan, { rotation: rotation })

        // Calculate which text should be visible based on rotation
        let activeText = 0
        if (progress < 0.33) {
          activeText = 0 // Mission
        } else if (progress < 0.66) {
          activeText = 1 // Vision
        } else {
          activeText = 2 // Values
        }

        // Show only the text on the right side and fix alignment
        textElements.forEach((element, index) => {
          if (index === activeText) {
            gsap.to(element, { opacity: 1, duration: 0.3 })
            // Fix the text rotation for the active element
            const textContent = element.querySelector(".text-content")
            if (textContent) {
              gsap.set(textContent, { rotation: -rotation - index * 120 })
            }
          } else {
            gsap.to(element, { opacity: 0.3, duration: 0.3 })
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
            {/* Static Logo with 3 Concentric Circles */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              {/* Outer Circle */}
              <div className="w-[800px] h-[800px] rounded-full border-2 border-gray-300 flex items-center justify-center">
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

          {/* Spinning Text Elements */}
          <div ref={fanRef} className="absolute inset-0 w-full h-full">

            {fanBlades.map((blade, index) => {
              const angle = index * 120 // 120 degrees apart

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

        </div>
      </div>
    </div>
  )
}
