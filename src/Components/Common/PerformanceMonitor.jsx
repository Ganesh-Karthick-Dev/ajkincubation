import React, { useRef, useEffect, useState, createContext, useContext } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

// Quality Context for global access
const QualityContext = createContext('high');
export const useQuality = () => useContext(QualityContext);

export function PerformanceMonitor({ 
  onPerformanceChange, 
  degradeThreshold = 30,
  improveThreshold = 50 
}) {
  const [performanceValue, setPerformanceValue] = useState(100);
  const frameCount = useRef(0);
  const lastTime = useRef(null);
  const fpsHistory = useRef([]);
  const { gl } = useThree();

  useEffect(() => {
    // Only set lastTime on client
    if (typeof performance !== "undefined" && performance.now) {
      lastTime.current = performance.now();
    } else {
      lastTime.current = Date.now(); // fallback, should not happen in browser
    }
  }, []);

  useFrame(() => {
    if (lastTime.current === null) return; // Wait until lastTime is set
    frameCount.current++;
    const now = (typeof performance !== "undefined" && performance.now)
      ? performance.now()
      : Date.now();
    
    if (now - lastTime.current >= 1000) {
      const fps = (frameCount.current * 1000) / (now - lastTime.current);
      fpsHistory.current.push(fps);
      
      // Keep only last 10 measurements
      if (fpsHistory.current.length > 10) {
        fpsHistory.current.shift();
      }
      
      // Calculate average FPS
      const avgFps = fpsHistory.current.reduce((a, b) => a + b, 0) / fpsHistory.current.length;
      
      // Calculate performance percentage (60fps = 100%)
      const newPerformance = Math.min(100, (avgFps / 60) * 100);
      
      if (Math.abs(newPerformance - performanceValue) > 5) {
        setPerformanceValue(newPerformance);
        
        if (onPerformanceChange) {
          onPerformanceChange({
            fps: avgFps,
            performance: newPerformance,
            shouldDegrade: newPerformance < degradeThreshold,
            shouldImprove: newPerformance > improveThreshold
          });
        }
      }
      
      frameCount.current = 0;
      lastTime.current = now;
    }
  });

  useEffect(() => {
    // Check device capabilities
    const canvas = gl.domElement;
    const context = gl.getContext();
    
    const deviceInfo = {
      maxTextureSize: context.getParameter(context.MAX_TEXTURE_SIZE),
      maxRenderBufferSize: context.getParameter(context.MAX_RENDERBUFFER_SIZE),
      maxVertexUniforms: context.getParameter(context.MAX_VERTEX_UNIFORM_VECTORS),
      maxFragmentUniforms: context.getParameter(context.MAX_FRAGMENT_UNIFORM_VECTORS),
      devicePixelRatio: typeof window !== "undefined" ? window.devicePixelRatio : 1,
      isLowEnd: typeof window !== "undefined"
        ? (window.devicePixelRatio <= 1 ||
          navigator.hardwareConcurrency <= 2 ||
          context.getParameter(context.MAX_TEXTURE_SIZE) < 4096)
        : false
    };
    
    if (onPerformanceChange) {
      onPerformanceChange({ deviceInfo });
    }
  }, [gl, onPerformanceChange]);

  return null;
}

export function AdaptiveQuality({ children }) {
  const [quality, setQuality] = useState('high');
  const { gl } = useThree();

  const handlePerformanceChange = ({ fps, performance, shouldDegrade, shouldImprove, deviceInfo }) => {
    if (deviceInfo?.isLowEnd) {
      setQuality('low');
      return;
    }

    if (shouldDegrade && quality !== 'low') {
      setQuality(quality === 'high' ? 'medium' : 'low');
      console.log(`Performance degraded to ${quality}. FPS: ${fps?.toFixed(1)}`);
    } else if (shouldImprove && quality !== 'high') {
      setQuality(quality === 'low' ? 'medium' : 'high');
      console.log(`Performance improved to ${quality}. FPS: ${fps?.toFixed(1)}`);
    }
  };

  useEffect(() => {
    if (!gl) return; // Don't run if gl is not ready
    // Ensure userData exists
    if (!gl.userData) {
      gl.userData = {};
    }
    // Apply quality settings
    const settings = {
      low: {
        dpr: Math.min(1, typeof window !== 'undefined' ? window.devicePixelRatio : 1),
        antialias: false,
        shadows: false,
        toneMapping: 0,
        powerPreference: 'default'
      },
      medium: {
        dpr: Math.min(1.5, typeof window !== 'undefined' ? window.devicePixelRatio : 1),
        antialias: typeof window !== 'undefined' ? window.devicePixelRatio <= 1 : true,
        shadows: 'basic',
        toneMapping: 1,
        powerPreference: 'high-performance'
      },
      high: {
        dpr: Math.min(2, typeof window !== 'undefined' ? window.devicePixelRatio : 1),
        antialias: true,
        shadows: 'soft',
        toneMapping: 4,
        powerPreference: 'high-performance'
      }
    };

    const currentSettings = settings[quality];
    gl.setPixelRatio(currentSettings.dpr);
    
    // Store quality level for other components to use
    gl.userData.qualityLevel = quality;
    
  }, [quality, gl]);

  return (
    <QualityContext.Provider value={quality}>
      <PerformanceMonitor onPerformanceChange={handlePerformanceChange} />
      {children}
    </QualityContext.Provider>
  );
}