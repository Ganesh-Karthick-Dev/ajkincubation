import React, { useRef, useMemo } from 'react';
import { useCurrentSheet } from "@theatre/r3f";
import { val } from "@theatre/core";
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Optimized dynamic lighting with better performance
const DynamicLighting = () => {
  const sheet = useCurrentSheet();
  const ambientLightRef = useRef();
  const spotLightRef = useRef();
  const lastUpdateRef = useRef(0);
  
  // LaserLogo position
  const laserLogoPosition = useMemo(() => new THREE.Vector3(0.043, 3.3, -58.0), []);
  
  useFrame((state) => {
    if (!sheet) return;
    
    const time = state.clock.elapsedTime;
    
    // Throttle to 30fps for performance
    if (time - lastUpdateRef.current < 0.033) return;
    lastUpdateRef.current = time;
    
    const currentDuration = sheet.sequence.position;
    const FOCUS_START = 38.5;
    const FOCUS_COMPLETE = 39;
    
    // Calculate transition progress
    let transitionProgress = 0;
    if (currentDuration >= FOCUS_START) {
      transitionProgress = Math.min(1, (currentDuration - FOCUS_START) / (FOCUS_COMPLETE - FOCUS_START));
    }
    
    // Control ambient light - improved visibility to prevent blackish scenes
    if (ambientLightRef.current) {
      const baseIntensity = 0.7; // Increased base intensity for better visibility
      const dimmedIntensity = 0.35; // Much brighter dimmed intensity to prevent blackish areas
      
      if (currentDuration < FOCUS_START) {
        ambientLightRef.current.intensity = baseIntensity;
      } else {
        ambientLightRef.current.intensity = baseIntensity - (baseIntensity - dimmedIntensity) * transitionProgress;
      }
    }
    
    // Simplified spotlight control
    if (spotLightRef.current && transitionProgress > 0) {
      spotLightRef.current.intensity = transitionProgress * 2.5;
    }
  });

  return (
    <group>
      {/* Main ambient light - increased intensity for better visibility */}
      <ambientLight ref={ambientLightRef} intensity={0.7} color="#ffffff" />
      
      {/* Focused spotlight for LaserLogo */}
      <spotLight
        ref={spotLightRef}
        position={[0.043, 11.3, -55]}
        target-position={laserLogoPosition}
        color="#90EE90"
        intensity={0}
        angle={Math.PI * 0.15}
        penumbra={0.5}
        distance={30}
        decay={1.2}
        castShadow={false}
      />
    </group>
  );
};

export default DynamicLighting;