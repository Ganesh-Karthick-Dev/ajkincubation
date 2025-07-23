'use client';
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalStackingCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const mobileCardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  const cardsData = [
    {
      id: 1,
      title: "Campus-Led Innovation",
      description: "Modern workspace and laboratory facilities for startups and entrepreneurs.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Personalized Mentorship",
      description: "Expert guidance and mentorship for business development and growth.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Prototype to Product Pipeline",
      description: "Connect with markets and build strong brand presence.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Investor & Grant Support",
      description: "Support for prototype development and securing initial funding.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Collaborative Learning",
      description: "Support for prototype development and securing initial funding.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      console.log('Mobile detected:', mobile, 'Window width:', window.innerWidth);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      console.log('Setting up mobile animations for', mobileCardsRef.current.length, 'cards');
      
      // Mobile animation - simple staggered entrance
      const mobileCards = mobileCardsRef.current;
      if (mobileCards.length === 0) {
        console.log('No mobile cards found');
        return;
      }

      // Wait a bit for cards to be visible, then apply animations
      setTimeout(() => {
        // Set initial state for mobile cards
        mobileCards.forEach((card, index) => {
          if (!card) return;
          
          gsap.set(card, {
            x: -100,
            opacity: 0,
            scale: 0.9,
            transformOrigin: "left center"
          });
        });

        // Animate all cards in sequence without ScrollTrigger
        gsap.to(mobileCards, {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15, // Stagger each card by 0.15 seconds
          delay: 0.2 // Small initial delay
        });
      }, 300); // Reduced wait time
    } else {
      // Desktop animation - existing horizontal stacking
      const cards = cardsRef.current;
      if (cards.length === 0) return;

      // Set initial stacked state
      cards.forEach((card, index) => {
        if (!card) return;
        
        gsap.set(card, {
          x: index * 10,
          y: index * 20,
          scale: 1 - index * 0.05,
          zIndex: cards.length - index,
          rotation: index * 2,
          transformOrigin: "center center"
        });
      });

      // Expand cards after delay
      setTimeout(() => {
        cards.forEach((card, index) => {
          if (!card) return;
          const spread = 1200;
          const step = cards.length > 1 ? spread / (cards.length - 1) : 0;
          const xPosition = -spread / 2 + index * step;
          gsap.to(card, {
            x: xPosition,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.1
          });
        });
      }, 100);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  return (
    <div className="mt-[2m]">
      {/* Desktop Version - Hidden on mobile */}
      <div className="hidden md:block">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version - Simple Rectangle Cards */}
      <div className="block md:hidden px-1 md:px-4">
        <div className="space-y-4">
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              ref={el => mobileCardsRef.current[index] = el}
              className="bg-white rounded-xl shadow-lg border-[20px] border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              style={{ 
                minHeight: '100px',
                opacity: 1,
                transform: 'translateX(0)'
              }}
            >
              <div className="flex items-center p-4 gap-4">
                {/* Image - Left side */}
                <div className="flex-shrink-0 w-20 h-20">
                  <div className="w-full h-full rounded-lg overflow-hidden bg-gray-200">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.log('Image failed to load:', card.image);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Content - Right side */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacing */}
      <div className=" hidden md:block h-[70px]"></div>
    </div>
  );
};

export default HorizontalStackingCards; 