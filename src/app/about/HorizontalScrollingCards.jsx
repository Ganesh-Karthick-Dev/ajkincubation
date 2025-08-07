
// "use client"

// import { useEffect, useRef } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// // Register GSAP plugins
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger)
// }

const HorizontalScrollingCards = () => {
  // Commented out to prevent conflicts with scroll-fan
  
  // const containerRef = useRef(null)
  // const cardsContainerRef = useRef(null)

  // const fanBlades = [
  //   {
  //     id: 1,
  //     title: "Enable an entrepreneurial mindset among students and faculty.",
  //     description: "Foster innovation and entrepreneurship culture within academic institutions through comprehensive programs and initiatives.",
  //     color: "bg-gradient-to-br from-blue-500 to-purple-600"
  //   },
  //   {
  //     id: 2,
  //     title: "Facilitate idea validation and prototyping support",
  //     description: "Provide resources, mentorship, and technical support to transform innovative ideas into viable prototypes.",
  //     color: "bg-gradient-to-br from-purple-500 to-pink-600"
  //   },
  //   {
  //     id: 3,
  //     title: "Bridge academia, industry, and investors for sustainable venture growth.",
  //     description: "Create strategic partnerships and networks that connect academic research with industry needs and investment opportunities.",
  //     color: "bg-gradient-to-br from-pink-500 to-red-600"
  //   },
  // ]

  // useEffect(() => {
  //   if (!containerRef.current || !cardsContainerRef.current) return

  //   const container = containerRef.current
  //   const cardsContainer = cardsContainerRef.current

  //   // Check if we're on mobile
  //   const isMobile = window.innerWidth < 768

  //   if (!isMobile) {
  //     // Desktop: Horizontal scrolling animation
  //     const cards = cardsContainer.children
  //     const cardWidth = 320 // Width of each card (w-80 = 320px)
  //     const gap = 32 // Gap between cards
  //     const startPadding = window.innerWidth * 0.5 // 50vw starting position
  //     const totalWidth = (cardWidth + gap) * cards.length + 192 // +192 for end spacer
      
  //     // Set initial positions - all cards visible and normal
  //     gsap.set(cards, { scale: 1, opacity: 1 })

  //     // Create horizontal scroll animation - move from starting position to show all cards
  //     const horizontalTween = gsap.to(cardsContainer, {
  //       x: -(totalWidth - startPadding), // Move to show all cards
  //       ease: "none",
  //     })

  //     // Create scroll trigger for horizontal scrolling
  //     ScrollTrigger.create({
  //       trigger: container,
  //       start: "top top",
  //       end: () => `+=${totalWidth}`, // Scroll distance based on content width
  //       // scroller: "#main-scroll-area", // Use default window scroll when LayoutWrapper disabled
  //       pin: true, // Pin the component in place
  //       scrub: 2, // Slightly slower scrub for stability
  //       animation: horizontalTween,
  //       invalidateOnRefresh: true, // Prevent conflicts on page return
  //       onLeave: () => {
  //         // Reset cards when leaving section (going down)
  //         gsap.set(cards, { scale: 1, opacity: 1 })
  //       },
  //       onEnterBack: () => {
  //         // Reset cards when entering from bottom (scrolling up)
  //         gsap.set(cards, { scale: 1, opacity: 1 })
  //       },
  //       onLeaveBack: () => {
  //         // Reset cards when leaving upward
  //         gsap.set(cards, { scale: 1, opacity: 1 })
  //       }
  //     })
  //   }

  //   // Reset when component becomes visible again (prevent shaking on return)
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         // Component is visible, refresh ScrollTrigger
  //         ScrollTrigger.refresh()
  //       }
  //     })
  //   }, { threshold: 0.1 })

  //   if (container) {
  //     observer.observe(container)
  //   }

  //   return () => {
  //     if (container) {
  //       observer.unobserve(container)
  //     }
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  //   }
  // }, [])

  return (
    <div className="h-20 bg-gray-100 flex items-center justify-center">
      <p className="text-gray-600">Horizontal Scrolling Cards - Temporarily Disabled</p>
    </div>
  )
}

export default HorizontalScrollingCards;