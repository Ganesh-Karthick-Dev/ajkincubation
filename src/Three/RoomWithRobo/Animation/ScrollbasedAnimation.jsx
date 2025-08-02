import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useCurrentSheet } from "@theatre/r3f";
import { val } from "@theatre/core";

// Smooth easing function
const easeOutCubic = (x) => {
  return 1 - Math.pow(1 - x, 3);
};

// Gentler easing function for smoother motion
const easeInOutQuint = (x) => {
  return x < 0.5 
    ? 16 * x * x * x * x * x
    : 1 - Math.pow(-2 * x + 2, 5) / 2;
};

function ScrollbasedAnimation({ project }) {
  const sheet = useCurrentSheet();
  const scrollRef = useRef({
    current: 0,
    target: 0,
    velocity: 0,
    lastScrollTime: 0,
  });
  const [introPlayed, setIntroPlayed] = useState(false);
  const [projectReady, setProjectReady] = useState(false);
  const totalDuration = val(sheet.sequence.pointer.length);
  const MAX_SCROLL_DURATION = 39; // Limit scrolling to duration 39
  const INTRO_DURATION = 4; // Duration of intro animation
  const INTRO_ANIMATION_DURATION = 0.5; // Fast intro - just 0.5 seconds
  const INITIAL_DELAY = 0; // No delay - immediate start

  // Wait for project to be ready
  useEffect(() => {
    if (!project) return;

    project.ready.then(() => {
      setProjectReady(true);
    });
  }, [project]);

  // Quick intro animation setup
  useEffect(() => {
    if (!sheet || !projectReady || introPlayed) return;

    // Set initial position immediately and enable interaction
    sheet.sequence.position = INTRO_DURATION;
    scrollRef.current.current = INTRO_DURATION;
    scrollRef.current.target = INTRO_DURATION;
    
    // Enable interaction immediately after a very short delay
    setTimeout(() => {
      setIntroPlayed(true);
    }, 200); // Just 200ms for scene to settle

  }, [sheet, projectReady, introPlayed]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!introPlayed || !projectReady) return;

      e.preventDefault();
      const scrollSpeed = 0.0015;
      const deltaY = e.deltaY * scrollSpeed;
      
      const newTarget = Math.max(
        INTRO_DURATION,
        Math.min(MAX_SCROLL_DURATION, scrollRef.current.target + deltaY)
      );
      
      scrollRef.current.target = newTarget;
    };

    // Touch event handlers for mobile devices
    let touchStartY = 0;
    let touchStartTime = 0;

    const handleTouchStart = (e) => {
      if (!introPlayed || !projectReady) return;
      
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
    };

    const handleTouchMove = (e) => {
      if (!introPlayed || !projectReady) return;

      e.preventDefault();
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY; // Inverted for natural feel
      const scrollSpeed = 0.01; // MUCH faster for touch
      
      const newTarget = Math.max(
        INTRO_DURATION,
        Math.min(MAX_SCROLL_DURATION, scrollRef.current.target + deltaY * scrollSpeed)
      );
      
      scrollRef.current.target = newTarget;
      touchStartY = touchY; // Update for continuous tracking
    };

    const handleTouchEnd = (e) => {
      if (!introPlayed || !projectReady) return;
      
      const touchEndTime = Date.now();
      const touchDuration = touchEndTime - touchStartTime;
      
      // Add momentum for quick swipes
      if (touchDuration < 300) {
        const velocity = 0.006; // MUCH faster momentum
        const momentum = velocity * (touchDuration / 100);
        
        const newTarget = Math.max(
          INTRO_DURATION,
          Math.min(MAX_SCROLL_DURATION, scrollRef.current.target + momentum)
        );
        
        scrollRef.current.target = newTarget;
      }
    };

    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [MAX_SCROLL_DURATION, introPlayed, projectReady]);

  useFrame((state, delta) => {
    if (!sheet || !projectReady || !introPlayed) return;

    const { current, target } = scrollRef.current;
    const distance = target - current;
    const smoothness = 0.075;
    
    scrollRef.current.current += distance * smoothness;
    
    scrollRef.current.current = Math.max(
      INTRO_DURATION,
      Math.min(MAX_SCROLL_DURATION, scrollRef.current.current)
    );
    
    sheet.sequence.position = scrollRef.current.current;
  });

  return null;
}

export default ScrollbasedAnimation;
