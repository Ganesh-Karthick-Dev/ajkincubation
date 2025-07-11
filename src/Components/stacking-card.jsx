'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StackingCards = ({ projects = [] }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // Default projects if none provided
  const defaultProjects = [
    {
      id: 1,
      title: "Templates for Pitch Decks and BMC",
      description: "Access ready-made, investor-friendly templates to build your Pitch Deck and Business Model Canvas (BMC). Designed to help early-stage startups clearly communicate their value, business model, and growth strategy.",
      color: "#6366f1",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Startup Policy & Handbook",
      description: "Stay informed with Tamil Nadu’s Startup Policy and essential handbooks curated for entrepreneurs. This guide includes eligibility criteria, incentive structures, and state-level startup ecosystem support.",
      color: "#8b5cf6",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "MSME/Udyam Registration Guide",
      description: "Step-by-step guide to register your startup as an MSME through the Udyam portal. Learn how this registration can help you access subsidies, tax exemptions, and priority sector benefits.",
      color: "#06b6d4",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Government Funding Schemes Updates",
      description: "Get updated information on central and state-level funding schemes, including Startup India Seed Fund, DST-NIDHI, and StartupTN initiatives. Know the eligibility, timelines, and application procedures.",
      color: "#10b981",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    }
  ];

  const cardsData = projects.length > 0 ? projects : defaultProjects;

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;
    
    if (!container || cards.length === 0) return;

    // Find the custom scroll container
    const scrollerElement = document.getElementById('main-scroll-area');
    
    if (!scrollerElement) {
      console.warn('main-scroll-area not found, using window scroll');
    }

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Set up the stacking animation
    cards.forEach((card, index) => {
      if (!card) return;

      // Set initial state - hide all cards except the first one
      gsap.set(card, {
        y: index === 0 ? 0 : 100 + (index * 40), // Cards start below, first card at normal position
        scale: 1 - index * 0.08,
        zIndex: index + 1,
        opacity: index === 0 ? 1 : 0,
        rotationZ: index * 2,
        transformOrigin: "50% 50%"
      });

      // Create individual scroll trigger for each card
      ScrollTrigger.create({
        trigger: container,
        start: `top+=${index * 300} center`,
        end: `bottom-=${(cards.length - index) * 400} center`,
        scroller: scrollerElement || window,
        scrub: 2,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Show card when it's time
          const shouldShow = progress > 0.1 || index === 0;
          
          // Enhanced stacking - cards come from bottom and stack
          const startY = index === 0 ? 0 : 100 + (index * 40); // Start position (below)
          const endY = index * 15; // Final stacked position
          const targetY = startY + (endY - startY) * progress;
          
          // Enhanced scaling with more dramatic effect
          const minScale = 1 - index * 0.03;
          const maxScale = 1 - index * 0.08;
          const targetScale = maxScale + (minScale - maxScale) * progress;
          
          // Rotation effect for better visual stacking
          const targetRotation = index * 2 * (1 - progress * 0.8);
          
          gsap.to(card, {
            scale: Math.max(targetScale, minScale),
            y: targetY,
            rotationZ: targetRotation,
            opacity: shouldShow ? 1 : 0,
            duration: 0.8,
            ease: "power2.out"
          });
        },
        onEnter: () => {
          // Smooth entrance animation
          gsap.to(card, { 
            opacity: 1, 
            duration: 0.6,
            ease: "power2.out"
          });
        },
        onLeaveBack: () => {
          // Smooth exit animation (except first card)
          if (index > 0) {
            gsap.to(card, { 
              opacity: 0, 
              duration: 0.6,
              ease: "power2.in"
            });
          }
        }
      });
    });

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [cardsData.length]);

  return (
    <div className="relative pb-[600px]">

      {/* Cards Container */}
      <div 
        ref={containerRef} 
        className="relative h-[300vh] flex items-start justify-center pt-20 "
      >
        <div className="sticky top-20">
          {cardsData.map((project, index) => (
            <div
              key={project.id || index}
              ref={el => cardsRef.current[index] = el}
              className="absolute w-[1000px] h-[400px] rounded-xl shadow-lg overflow-hidden bg-gray-100/80 border border-gray-200/50"
              style={{ 
                left: '50%',
                top: '0',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(240, 240, 240, 0.75) 100%)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.2) inset'
              }}
            >
              <div className="flex h-full">
                {/* Content Side */}
                <div className="flex-1 p-8 flex flex-col justify-center text-white">
                  <h3 className="text-2xl font-bold mb-4 text-green-500">{project.title}</h3>
                  <p className="text-sm mb-6 opacity-90 leading-relaxed text-black">{project.description}</p>
                  <button className="inline-flex items-center px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/25 transition-all duration-300 w-fit text-blue-500 border border-blue-500">
                    Register Now
                    <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Image Side */}
                <div className="flex-1 relative rounded-r-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/3 to-black/10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Margin Bottom Space After Stacked Cards */}
      <div className="h-[400px]"></div>
    </div>
  );
};

export default StackingCards; 