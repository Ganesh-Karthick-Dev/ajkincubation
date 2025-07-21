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
    </>
  );
}

export default BaseEnvironment;
