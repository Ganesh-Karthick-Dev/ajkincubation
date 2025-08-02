import { useMemo } from 'react';

// Optimized material presets for different use cases
export const MaterialPresets = {
  // For text and logos that need to glow
  emissive: {
    metalness: 0.6,
    roughness: 0.3,
    envMapIntensity: 1.2,
    emissiveIntensity: 0.8
  },
  
  // For models that need realistic lighting
  realistic: {
    metalness: 0.1,
    roughness: 0.8,
    envMapIntensity: 1.0,
    emissiveIntensity: 0
  },
  
  // For performance-critical models
  simple: {
    metalness: 0,
    roughness: 1,
    envMapIntensity: 0.5,
    emissiveIntensity: 0
  }
};

// Hook to create optimized materials
export function useOptimizedMaterial(preset = 'realistic', customProps = {}) {
  return useMemo(() => ({
    ...MaterialPresets[preset],
    ...customProps
  }), [preset, customProps]);
}

// Component to wrap models that should cast shadows selectively
export function SelectiveShadow({ children, castShadow = true, receiveShadow = true }) {
  return (
    <group>
      {children}
    </group>
  );
}