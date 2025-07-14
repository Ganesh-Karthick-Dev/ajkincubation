'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const HorizontalStackingCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

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
    const cards = cardsRef.current;
    
    if (cards.length === 0) return;

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

    // Expand cards immediately after a short delay
    setTimeout(() => {
      cards.forEach((card, index) => {
        if (!card) return;
        // Distribute cards evenly across the horizontal space
        const spread = 1200; // increased spread for more space between cards
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
    }, 100); // Small delay to ensure component is mounted

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