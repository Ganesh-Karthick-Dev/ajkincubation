import React, { useMemo } from 'react';
import { useThree } from '@react-three/fiber';
import { useDetectGPU } from '@react-three/drei';

export function AdaptiveLOD({ 
  children, 
  distance = 50, 
  lowQualityComponent = null,
  mediumQualityComponent = null 
}) {
  const { camera } = useThree();
  const gpu = useDetectGPU();
  
  const qualityLevel = useMemo(() => {
    if (!gpu) return 'medium';
    
    const { tier, gpu: gpuInfo } = gpu;
    
    // Determine quality based on GPU tier and device capabilities
    if (tier === 1 || gpuInfo?.includes('Intel') || window.devicePixelRatio <= 1) {
      return 'low';
    } else if (tier === 2) {
      return 'medium';
    } else {
      return 'high';
    }
  }, [gpu]);

  const shouldRenderLowQuality = qualityLevel === 'low';
  const shouldRenderMediumQuality = qualityLevel === 'medium';

  if (shouldRenderLowQuality && lowQualityComponent) {
    return lowQualityComponent;
  }
  
  if (shouldRenderMediumQuality && mediumQualityComponent) {
    return mediumQualityComponent;
  }
  
  return children;
}

// Simplified model component for low-end devices
export function SimplifiedModel({ position, scale, color = "#cccccc" }) {
  return (
    <mesh position={position} scale={scale} frustumCulled>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

// Utility hook to check if device is low-end
export function useDeviceCapabilities() {
  return useMemo(() => {
    const isLowEnd = 
      window.devicePixelRatio <= 1 ||
      navigator.hardwareConcurrency <= 2 ||
      navigator.deviceMemory <= 2 ||
      /Android.*4\.|iPhone.*iOS [4-9]/.test(navigator.userAgent);
    
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    return {
      isLowEnd,
      isMobile,
      cores: navigator.hardwareConcurrency || 2,
      memory: navigator.deviceMemory || 'unknown',
      pixelRatio: window.devicePixelRatio
    };
  }, []);
}