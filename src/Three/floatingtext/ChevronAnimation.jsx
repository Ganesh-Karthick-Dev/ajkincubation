import React, { useState, useEffect } from 'react';
import { useCurrentSheet } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';

// Theatre.js Timing Controller for Chevron Animation (Inside Canvas)
const ChevronAnimation = ({ 
  chevronRefs,
  showStartTime = 0,
  showEndTime = 4.5,
  onVisibilityChange 
}) => {
  const sheet = useCurrentSheet();
  const [currentDuration, setCurrentDuration] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useFrame(() => {
    if (sheet) {
      setCurrentDuration(sheet.sequence.position);
    }
  });

  useEffect(() => {
    // Start animation when in the correct time range
    if (currentDuration >= showStartTime && currentDuration <= showEndTime && !isAnimating) {
      setIsAnimating(true);
      
      if (chevronRefs && chevronRefs.current && chevronRefs.current.length > 0) {
        // Set initial state - all chevrons invisible
        gsap.set(chevronRefs.current, { opacity: 0 });

        // Create timeline for scroll-based animation (4-5 seconds duration)
        const tl = gsap.timeline();

        // Animate each chevron in sequence over 4.5 seconds
        chevronRefs.current.forEach((chevron, index) => {
          const startTime = index * 0.8; // Stagger by 0.8 seconds
          const fadeInDuration = 0.4;
          const fadeOutDuration = 0.4;
          
          // Fade in
          tl.to(chevron, {
            opacity: 1,
            duration: fadeInDuration,
            ease: "power2.out"
          }, startTime);

          // Fade out
          tl.to(chevron, {
            opacity: 0,
            duration: fadeOutDuration,
            ease: "power2.in"
          }, startTime + fadeInDuration + 0.2); // Small delay before fading out
        });
      }
    } else if ((currentDuration < showStartTime || currentDuration > showEndTime) && isAnimating) {
      // Stop animation when outside the time range
      setIsAnimating(false);
      
      if (chevronRefs && chevronRefs.current) {
        // Reset all chevrons to invisible
        gsap.set(chevronRefs.current, { opacity: 0 });
      }
    }
  }, [currentDuration, showStartTime, showEndTime, isAnimating, chevronRefs]);

  // This component doesn't render anything, it just controls the animation
  return null;
};

export default ChevronAnimation; 