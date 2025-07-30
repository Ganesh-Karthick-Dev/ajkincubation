"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
} from "@react-three/drei";
import React, { Suspense, useEffect, useRef, useState, Component } from "react";
import BaseEnvironment from "./BaseEnvironment";
import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { editable as e } from "@theatre/r3f";
import sequences from "@/../public/sequences/MainProject.theatre-project-state_3.json";
import ScrollbasedAnimation from "@/Three/RoomWithRobo/Animation/ScrollbasedAnimation";
import { AdaptiveQuality, useQuality } from "./PerformanceMonitor";
import { CustomLoader } from "./CustomerLoader";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import DynamicLighting from "@/Three/lighting/DynamicLighting";

// Error boundary for React errors
class ThreeErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Three.js error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-[3rem]">
          <div className="text-white text-center">
            <div>3D Scene Error</div>
            <button 
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => this.setState({ hasError: false })}
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Initialize Theatre.js studio in development mode only
// if (process.env.NODE_ENV === 'development') {
//   studio.initialize();
//   studio.extend(extension);
// }

function CanvesWrapper({ children }) {
  const [isClient, setIsClient] = useState(false);
  
  // Initialize all hooks first - before any conditional returns
  const project = getProject("MainProject", { state: sequences });
  const sheet = project.sheet("HeroScene");
  const cameraLookAtRef = useRef(null);
  const durationRef = useRef(0);
  const overlayRef = useRef(null);

  // Null safety check for children
  const safeChildren = children || null;
  
  // Use quality context with hydration safety
  const [quality, setQuality] = useState('medium');
  
  // Responsive camera state
  const [cameraSettings, setCameraSettings] = useState({
    position: [0, 2, 50],
    fov: 70,
  });
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setQuality(window.__r3f_qualityLevel || 'medium');
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
          // Mobile
          setCameraSettings({
            position: [0, 2, 80], // Move camera back for mobile
            fov: 120, // Wider field of view for mobile
          });
        } else {
          // Desktop
          setCameraSettings({
            position: [0, 2, 50],
            fov: 70,
          });
        }
      }
    }
    
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    // Prevent default scrolling behavior
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, []);

  useEffect(() => {
    let frame;
    function update() {
      if (sheet && overlayRef.current) {
        durationRef.current = sheet.sequence.position;
        overlayRef.current.textContent = `Current Duration: ${durationRef.current.toFixed(2)}`;
      }
      frame = requestAnimationFrame(update);
    }
    update();
    return () => cancelAnimationFrame(frame);
  }, [sheet]);
  
  if (!isClient) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-[3rem]">
        <div className="text-white">Loading 3D Scene...</div>
      </div>
    );
  }

  return (
    <ThreeErrorBoundary>
      <div className="w-full h-full relative p-2 md:p-3 lg:p-5 ">
          {/* Duration overlay - only show in development */}
          {/* {process.env.NODE_ENV === 'development' && (
            <div ref={overlayRef} style={{
              position: 'fixed',
              top: 20,
              left: 20,
              color: 'white',
              background: 'rgba(0,0,0,0.7)',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '1.1em',
              fontFamily: 'monospace',
              zIndex: 800,
              pointerEvents: 'none',
            }} />
          )} */}
        <div className="w-full h-full relative bg-black rounded-[3rem] overflow-hidden">
          <Canvas
          camera={{ fov: cameraSettings.fov, position: cameraSettings.position }}
          gl={{
            antialias: quality === 'low' ? false : (typeof window !== 'undefined' ? window.devicePixelRatio <= 1 : true),
            preserveDrawingBuffer: false,
            powerPreference: quality === 'low' ? 'default' : 'high-performance',
            alpha: false,
            stencil: false,
            depth: true
          }}
          dpr={quality === 'low' ? 1 : (typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1)}
          shadows={quality === 'low' ? false : (typeof window !== 'undefined' && window.devicePixelRatio > 1 ? "soft" : "basic")}
          performance={{ min: 0.1, max: 1, debounce: 200 }}
          frameloop="always"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Suspense fallback={<CustomLoader />}>
            
          <AdaptiveQuality>
            <SheetProvider sheet={sheet}>
              <ScrollbasedAnimation project={project} />
              <PerspectiveCamera
                makeDefault
                position={cameraSettings.position}
                fov={cameraSettings.fov}
                theatreKey="camera"
                lookAt={cameraLookAtRef}
              />
              <e.mesh
                theatreKey="camera_lookAt"
                visible="editor"
                position={cameraSettings.position}
                fov={cameraSettings.fov}
                ref={cameraLookAtRef}
                >
                <octahedronGeometry args={[0.1, 0]} />
                <meshStandardMaterial color="red" />
              </e.mesh>
              <BaseEnvironment />
              <DynamicLighting />
              {safeChildren}
              {/* <OrbitControls rotateSpeed={0.3} zoomSpeed={0.9} panSpeed={0.3} /> */}
              {/* <EffectComposer>
                <Bloom intensity={0.33423} luminanceThreshold={0} luminanceSmoothing={0.9} layers={[1]} />
              </EffectComposer> */}
            </SheetProvider>
            {/* <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
              <GizmoViewport
              axisColors={["red", "green", "blue"]}
                labelColor="black"
                />
                </GizmoHelper> */}
            {/* <Grid
          position={[0, -0.65, 0]}
          args={[150, 200]}
          cellColor="black"
          cellSize={1}
          cellThickness={1}
          /> */}
          </AdaptiveQuality>
          </Suspense>
          </Canvas>
        </div>
      </div>
    </ThreeErrorBoundary>
  );
}

export default CanvesWrapper;
