"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
} from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import BaseEnvironment from "./BaseEnvironment";
import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { editable as e } from "@theatre/r3f";
import sequences from "@/../public/sequences/MainProject.theatre-project-state_3.json";
import ScrollbasedAnimation from "@/Three/RoomWithRobo/Animation/ScrollbasedAnimation";

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
    <div className="w-full h-full relative p-5">
        {/* <div ref={overlayRef} style={{
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
        }} /> */}
      <div className="w-full h-full relative bg-black rounded-[3rem] overflow-hidden">
        <Canvas
          camera={{ fov: 70, position: [0, 2, 50] }}
          gl={{ antialias: true, preserveDrawingBuffer: true }}
          dpr={[1, 1.5]}
          shadows
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <SheetProvider sheet={sheet}>
            <ScrollbasedAnimation project={project} />
            <PerspectiveCamera
              makeDefault
              position={[0, 2, 50]}
              fov={70}
              theatreKey="camera"
              lookAt={cameraLookAtRef}
            />
            <e.mesh
              theatreKey="camera_lookAt"
              visible="editor"
              position={[0, 2, 50]}
              fov={70}
              ref={cameraLookAtRef}
            >
              <octahedronGeometry args={[0.1, 0]} />
              <meshStandardMaterial color="red" />
            </e.mesh>
            <BaseEnvironment />
            {children}
            {/* <OrbitControls rotateSpeed={0.3} zoomSpeed={0.9} panSpeed={0.3} /> */}
            <ambientLight intensity={0.3} />
            <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
              <GizmoViewport
                axisColors={["red", "green", "blue"]}
                labelColor="black"
              />
            </GizmoHelper>
            {/* <Grid
          position={[0, -0.65, 0]}
          args={[150, 200]}
          cellColor="black"
          cellSize={1}
          cellThickness={1}
          /> */}
          </SheetProvider>
        </Canvas>
      </div>
    </div>
  );
}

export default CanvesWrapper;
