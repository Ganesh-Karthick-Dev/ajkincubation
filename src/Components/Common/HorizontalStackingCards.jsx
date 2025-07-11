'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalStackingCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const cardsData = [
    {
      id: 1,
      title: "Co-working & lab infrastructure",
      description: "Modern workspace and laboratory facilities for startups and entrepreneurs.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Business mentoring",
      description: "Expert guidance and mentorship for business development and growth.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Market linkage & branding support",
      description: "Connect with markets and build strong brand presence.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Prototype development & seed funding guidance",
      description: "Support for prototype development and securing initial funding.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;
    
    if (!container || cards.length === 0) return;

    // Find the custom scroll container
    const scrollerElement = document.getElementById('main-scroll-area');

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Set initial stacked state
    cards.forEach((card, index) => {
      if (!card) return;
      
      gsap.set(card, {
        x: index * 10, // Slight offset for stacked effect
        y: index * 20,
        scale: 1 - index * 0.05,
        zIndex: cards.length - index,
        rotation: index * 2,
        transformOrigin: "center center"
      });
    });

    // Create scroll trigger for the container
    ScrollTrigger.create({
      trigger: container,
      start: "center center+=60",
      end: "bottom center-=60",
      scroller: scrollerElement || window,
    //   markers: true,
      onEnter: () => {
        // Kill any ongoing animations first
        cards.forEach(card => gsap.killTweensOf(card));
        
        // Expand cards horizontally - 2 left, 2 right
        cards.forEach((card, index) => {
          let xPosition;
          if (index === 0) {
            xPosition = -440; // Far left
          } else if (index === 1) {
            xPosition = -140; // Near left
          } else if (index === 2) {
            xPosition = 140;  // Near right
          } else {
            xPosition = 440;  // Far right
          }
          
          gsap.to(card, {
            x: xPosition,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.1,
            overwrite: true // Overwrite any conflicting animations
          });
        });
      },
      onLeave: () => {
        // Kill any ongoing animations first
        cards.forEach(card => gsap.killTweensOf(card));
        
        // Only collapse when leaving downward (scrolling down past the end)
        cards.forEach((card, index) => {
          gsap.to(card, {
            x: index * 10,
            y: index * 20,
            scale: 1 - index * 0.05,
            rotation: index * 2,
            duration: 0.6,
            ease: "power2.in",
            delay: (cards.length - index - 1) * 0.1,
            overwrite: true // Overwrite any conflicting animations
          });
        });
      },
      onEnterBack: () => {
        // Kill any ongoing animations first
        cards.forEach(card => gsap.killTweensOf(card));
        
        // Expand again when scrolling back up - 2 left, 2 right
        cards.forEach((card, index) => {
          let xPosition;
          if (index === 0) {
            xPosition = -440; // Far left
          } else if (index === 1) {
            xPosition = -140; // Near left
          } else if (index === 2) {
            xPosition = 140;  // Near right
          } else {
            xPosition = 440;  // Far right
          }
          
          gsap.to(card, {
            x: xPosition,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.1,
            overwrite: true // Overwrite any conflicting animations
          });
        });
      },
      onLeaveBack: () => {
        // Kill any ongoing animations first
        cards.forEach(card => gsap.killTweensOf(card));
        
        // Collapse when scrolling up past the start trigger
        cards.forEach((card, index) => {
          gsap.to(card, {
            x: index * 10,
            y: index * 20,
            scale: 1 - index * 0.05,
            rotation: index * 2,
            duration: 0.6,
            ease: "power2.in",
            delay: (cards.length - index - 1) * 0.1,
            overwrite: true // Overwrite any conflicting animations
          });
        });
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className=" mt-[5rem]">

 
      {/* Cards Container */}
      <div 
        ref={containerRef} 
        className="relative flex items-center justify-center"
      >
        <div className="relative w-[1200px] h-[400px]">
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              ref={el => cardsRef.current[index] = el}
              className="absolute w-[260px] h-[380px] p-2 rounded-3xl overflow-hidden shadow-xl bg-white border-[20px] border-gray-100"
              style={{ 
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              {/* Image */}
              <div className="h-[200px] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3 leading-tight">
                  {card.title}
                </h3>
                {/* <p className="text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-[100px]"></div>
    </div>
  );
};

export default HorizontalStackingCards; 