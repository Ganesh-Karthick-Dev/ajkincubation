import React, { useRef, useMemo } from 'react';
import { useCurrentSheet } from "@theatre/r3f";
import { val } from "@theatre/core";
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Dynamic lighting component that creates a dramatic dim effect at the end of scroll animation
// Maintains normal lighting until duration 38.5, then dims dramatically to 0.05 intensity by duration 39
// Also adds a focused spotlight on the LaserLogo for enhanced visual focus
const DynamicLighting = () => {
  const sheet = useCurrentSheet();
  const ambientLightRef = useRef();
  const spotLightRef = useRef();
  const helperRef = useRef();
  
  // LaserLogo position from the component: [0.043, 3.3, -58.0]
  const laserLogoPosition = useMemo(() => new THREE.Vector3(0.043, 3.3, -58.0), []);
  
  useFrame(() => {
    if (!sheet) return;
    
    const currentDuration = sheet.sequence.position;
    const FOCUS_START = 38.5; // Start transition slightly before 39
    const FOCUS_COMPLETE = 39; // Complete the effect at exactly 39
    
    // Calculate transition progress (0 to 1)
    let transitionProgress = 0;
    if (currentDuration >= FOCUS_START) {
      transitionProgress = Math.min(1, (currentDuration - FOCUS_START) / (FOCUS_COMPLETE - FOCUS_START));
    }
    
    // Smooth transition using easing
    const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
    const easedProgress = easeOutCubic(transitionProgress);
    
    // Control ambient light throughout the entire scroll range
    if (ambientLightRef.current) {
      const baseIntensity = 0.6; // Normal intensity for most of the animation
      const dimmedIntensity = -0.04; // Much dimmer for dramatic effect at the end
      
      if (currentDuration < FOCUS_START) {
        // Keep normal ambient light before focus starts
        ambientLightRef.current.intensity = baseIntensity;
      } else {
        // Dim the light dramatically as we approach duration 39
        ambientLightRef.current.intensity = baseIntensity - (baseIntensity - dimmedIntensity) * easedProgress;
      }
    }
    
    // Control spotlight intensity and properties
    if (spotLightRef.current) {
      // Stronger spotlight intensity from 0 to 4.0 for more dramatic effect
      spotLightRef.current.intensity = easedProgress * 4.0;
      
      // Position spotlight above and slightly in front of LaserLogo
      const spotOffset = new THREE.Vector3(0, 8, 3); // Higher and further for better effect
      const spotPosition = laserLogoPosition.clone().add(spotOffset);
      spotLightRef.current.position.copy(spotPosition);
      
      // Target the LaserLogo
      spotLightRef.current.target.position.copy(laserLogoPosition);
      spotLightRef.current.target.updateMatrixWorld();
      
      // Adjust cone properties for more focused lighting
      spotLightRef.current.angle = Math.PI * 0.12; // Narrower 12-degree cone for more focus
      spotLightRef.current.penumbra = 0.4; // Softer edges for better blending
      spotLightRef.current.distance = 25; // Longer distance
      spotLightRef.current.decay = 1.5; // Less decay for stronger light
    }
  });

  return (
    <group>
      {/* Dynamic Ambient Light */}
      <ambientLight ref={ambientLightRef} intensity={0.6} />
      
      {/* Focused Spotlight for LaserLogo */}
      <spotLight
        ref={spotLightRef}
        color="#90EE90" // Light green to match LaserLogo colors
        intensity={0}
        angle={Math.PI * 0.12}
        penumbra={0.4}
        distance={25}
        decay={1.5}
        castShadow={false} // Disable shadows for performance
      />
      
      {/* Spotlight target helper (invisible) */}
      <object3D ref={helperRef} position={laserLogoPosition} />
    </group>
  );
};

export default DynamicLighting;