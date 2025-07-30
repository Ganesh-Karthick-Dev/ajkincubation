"use client";
import * as THREE from "three";
import {
  MeshReflectorMaterial,
  Environment,
  useTexture,
} from "@react-three/drei";
import { useQuality } from "./PerformanceMonitor";

function BaseEnvironment() {
  // const quality = useQuality();
  return (
    <>
      <color attach="background" args={["#191920"]} />
      <fog attach="fog" args={["#191920", 0, 100]} />
      <group position={[0, -0.65, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[150, 200]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={1080}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
          />
        </mesh>
      </group>
      <Environment preset="city" background />
      
      {/* Enhanced ambient lighting for better visibility - controlled by DynamicLighting when scroll > 38.5 */}
      {/* <ambientLight intensity={0.6} color="#ffffff" /> */}
      
      {/* Soft directional light for depth */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.8}
        color="#ffffff"
        castShadow
      />
      
      {/* Additional fill lights for better illumination */}
      <pointLight position={[-10, 5, 10]} intensity={0.4} color="#e6f3ff" />
      <pointLight position={[10, 5, -10]} intensity={0.4} color="#fff5e6" />
    </>
  );
}

export default BaseEnvironment;
