"use client";
import * as THREE from "three";
import {
  MeshReflectorMaterial,
  Environment,
} from "@react-three/drei";

function BaseEnvironment() {
  // Balanced performance and quality
  return (
    <>
      <color attach="background" args={["#2a2a30"]} />
      <fog attach="fog" args={["#2a2a30", 0, 120]} />
      
      {/* Floor with optimized reflection and shadow receiving */}
      <group position={[0, -0.65, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[150, 200]} />
          <MeshReflectorMaterial
            blur={[100, 30]}
            resolution={256}
            mixBlur={0.6}
            mixStrength={20}
            roughness={1}
            depthScale={0.8}
            minDepthThreshold={0.6}
            maxDepthThreshold={1}
            color="#050505"
            metalness={0.2}
          />
        </mesh>
      </group>
      
      {/* Brighter environment lighting for better visibility */}
      <Environment preset="city" environmentIntensity={0.4} background={false} />
      
      {/* Balanced ambient lighting - removed to prevent double lighting with DynamicLighting */}
      
      {/* Stronger directional light for depth and to prevent blackish areas */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.0}
        color="#ffffff"
        castShadow={false}
      />
      
      {/* Enhanced fill lights to prevent dark/black areas */}
      <pointLight position={[-15, 8, 15]} intensity={0.6} color="#e6f3ff" distance={120} />
      <pointLight position={[15, 8, -15]} intensity={0.6} color="#fff5e6" distance={120} />
      <pointLight position={[0, 15, 0]} intensity={0.8} color="#ffffff" distance={150} />
      
      {/* Additional fill lights for comprehensive coverage */}
      <pointLight position={[0, 8, -80]} intensity={0.5} color="#ffffff" distance={120} />
      <pointLight position={[-25, 6, -40]} intensity={0.4} color="#f0f8ff" distance={100} />
      <pointLight position={[25, 6, -40]} intensity={0.4} color="#fff8f0" distance={100} />
    </>
  );
}

export default BaseEnvironment;
