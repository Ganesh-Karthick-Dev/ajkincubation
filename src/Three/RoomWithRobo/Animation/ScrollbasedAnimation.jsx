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
  const INTRO_DURATION = 4; // Duration of intro animation
  const INTRO_ANIMATION_DURATION = 6.5; // Increased duration for slower animation
  const INITIAL_DELAY = 100; // Increased initial delay

  // Wait for project to be ready
  useEffect(() => {
    if (!project) return;

    project.ready.then(() => {
      setProjectReady(true);
    });
  }, [project]);

  // Handle intro animation after project is ready
  useEffect(() => {
    if (!sheet || !projectReady || introPlayed) return;

    let startTime = null;
    let animationFrame = null;

    const animateIntro = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000; // Convert to seconds
      const progress = Math.min(elapsed / INTRO_ANIMATION_DURATION, 1);
      
      // Apply gentler easing for smoother motion
      const easedProgress = easeInOutQuint(progress);
      const currentPosition = easedProgress * INTRO_DURATION;
      
      // Add small smoothing to the position update
      const smoothness = 0.1;
      const currentAnimPos = sheet.sequence.position;
      const newPosition = currentAnimPos + (currentPosition - currentAnimPos) * smoothness;

      console.log(`totalDuration: ${totalDuration}`);
      console.log(`currentDuration: ${sheet.sequence.position}`);
      
      
      sheet.sequence.position = newPosition;
      scrollRef.current.current = newPosition;
      scrollRef.current.target = newPosition;

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateIntro);
      } else {
        // Ensure we end exactly at INTRO_DURATION
        sheet.sequence.position = INTRO_DURATION;
        scrollRef.current.current = INTRO_DURATION;
        scrollRef.current.target = INTRO_DURATION;
        setIntroPlayed(true);
      }
    };

    // Add a longer delay before starting the intro animation
    setTimeout(() => {
      animationFrame = requestAnimationFrame(animateIntro);
    }, INITIAL_DELAY);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [sheet, projectReady, introPlayed]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!introPlayed || !projectReady) return;

      e.preventDefault();
      const scrollSpeed = 0.0015;
      const deltaY = e.deltaY * scrollSpeed;
      
      const newTarget = Math.max(
        INTRO_DURATION,
        Math.min(totalDuration, scrollRef.current.target + deltaY)
      );
      
      scrollRef.current.target = newTarget;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [totalDuration, introPlayed, projectReady]);

  useFrame((state, delta) => {
    if (!sheet || !projectReady || !introPlayed) return;

    const { current, target } = scrollRef.current;
    const distance = target - current;
    const smoothness = 0.075;
    
    scrollRef.current.current += distance * smoothness;
    
    scrollRef.current.current = Math.max(
      INTRO_DURATION,
      Math.min(totalDuration, scrollRef.current.current)
    );
    
    sheet.sequence.position = scrollRef.current.current;
  });

  return null;
}

export default ScrollbasedAnimation;
