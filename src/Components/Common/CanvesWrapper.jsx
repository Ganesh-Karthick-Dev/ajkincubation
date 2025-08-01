"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
} from "@react-three/drei";
import React, { Suspense, useEffect, useRef, useState } from "react";
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

// Initialize Theatre.js studio in development mode only
// if (process.env.NODE_ENV === 'development') {
//   studio.initialize();
//   studio.extend(extension);
// }

function CanvesWrapper({ children }) {
  const project = getProject("MainProject", { state: sequences });
  const sheet = project.sheet("HeroScene");
  const cameraLookAtRef = useRef(null);

  // Duration overlay logic
  const durationRef = useRef(0);
  const overlayRef = useRef(null);

  // Use quality context
  const quality = typeof window !== 'undefined' && window.__r3f_qualityLevel ? window.__r3f_qualityLevel : undefined;

  // Responsive camera state
  const [cameraSettings, setCameraSettings] = useState({
    position: [0, 2, 50],
    fov: 70,
  });

  useEffect(() => {
    function handleResize() {
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
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
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Prevent default scrolling behavior
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
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

  return (
    <div className="w-full h-full relative p-2 md:p-3 lg:p-5 ">
        {/* Duration overlay - only show in development */}
        {process.env.NODE_ENV === 'development' && (
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
        )}
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
              {children}
              {/* <OrbitControls rotateSpeed={0.3} zoomSpeed={0.9} panSpeed={0.3} /> */}
              <ambientLight intensity={0.3} />
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
  );
}

export default CanvesWrapper;
