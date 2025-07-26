"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Rocket, FileText, Navigation, Shield } from "lucide-react"

const OtherSection = () => {
  const cardsRef = useRef([])
  const iconRefs = useRef([])
  const [hoveredCard, setHoveredCard] = useState(null)

  const sections = [
    {
      title: "Power Your Startup with Precision",
      content: "AJK equips aspiring entrepreneurs with everything they need to build smart, scalable ventures. From proven pitch deck templates to structured business model canvases, students are armed with tools to map their vision clearly and professionally.",
      icon: Rocket,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Your Personal Incubation Blueprint",
      content: "Every great startup needs a guide. At AJK, students receive exclusive handbooks and step-by-step policies that decode the incubation process — helping them move from concept to company with clarity and direction.",
      icon: FileText,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Navigate the Startup System with Ease",
      content: "Understanding the system is half the battle. Whether it's MSME/Udyam registration or tapping into government startup schemes, AJK ensures founders are well-informed and fully supported to unlock official benefits and growth channels.",
      icon: Navigation,
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Safeguard Your Innovation",
      content: "Ideas are powerful — and worth protecting. That's why AJK offers essential legal documents like MOUs, NDAs, and IP templates to secure your startup's core, letting you focus on building boldly and creatively.",
      icon: Shield,
      color: "from-indigo-500 to-blue-600"
    }
  ]

  useEffect(() => {
    const cards = cardsRef.current

    // Simple entrance animation
    gsap.fromTo(cards, 
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3
      }
    )

    return () => {
      // Cleanup
      gsap.killTweensOf(cards)
    }
  }, [])

  const handleCardHover = (index) => {
    setHoveredCard(index)
    const icon = iconRefs.current[index]
    
    if (icon) {
      // Kill any existing animations
      gsap.killTweensOf(icon)
      
      // Icon expands to cover the whole card
      gsap.to(icon, {
        x: 0,
        y: 0,
        scale: 8,
        rotation: 0,
        opacity: 0.1,
        duration: 0.3,
        ease: "power2.out",
        onStart: function() {
          // Move icon behind content when expanding
          gsap.set(icon, { zIndex: 0 })
        },
        onComplete: function() {
          // Add subtle floating animation while expanded
          gsap.to(icon, {
            scale: "random(7.5, 8.5)",
            opacity: "random(0.08, 0.12)",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
          })
        }
      })
    }
  }

  const handleCardLeave = (index) => {
    setHoveredCard(null)
    const icon = iconRefs.current[index]
    
    if (icon) {
      // Kill the expanded animation
      gsap.killTweensOf(icon)
      
      // Return to original size and position
      gsap.to(icon, {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
        onComplete: function() {
          // Move icon back in front when done
          gsap.set(icon, { zIndex: 10 })
        }
      })
    }
  }

  return (
    <section className="py-20 mt-[2rem]">

<p className='text-4xl font-bold text-center mb-[3.5rem]'>Resources That Build Real Businesses</p>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            const isHovered = hoveredCard === index
            
            return (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 border-[20px] border-gray-100 overflow-hidden cursor-pointer"
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={() => handleCardLeave(index)}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon with background expansion animation */}
                <div className="relative z-10 mb-6">
                  <div 
                    ref={el => iconRefs.current[index] = el}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white transition-all duration-300`}
                  >
                    <IconComponent size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-20">
                  <h3 className=" md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 md:leading-relaxed md:text-lg">
                    {section.content}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-transparent to-gray-50 rounded-full -translate-y-16 translate-x-16 opacity-50" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-transparent to-gray-50 rounded-full translate-y-12 -translate-x-12 opacity-30" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OtherSection