"use client";
import * as THREE from "three";
import {
  MeshReflectorMaterial,
  Environment,
  useTexture,
} from "@react-three/drei";
import { useQuality } from "./PerformanceMonitor";

function BaseEnvironment() {
  const quality = useQuality();
  return (
    <>
      <color attach="background" args={["#191920"]} />
      <fog attach="fog" args={["#191920", 0, 100]} />
      {quality === 'low' && <ambientLight intensity={1} color={'white'} />}
      <group position={[0, -0.65, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[150, 200]} />
          <MeshReflectorMaterial
            blur={quality === 'low' ? [50, 20] : [300, 100]}
            resolution={quality === 'low' ? 256 : 1080}
            mixBlur={quality === 'low' ? 0.2 : 1}
            mixStrength={quality === 'low' ? 10 : 80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
          />
        </mesh>
      </group>
      {quality !== 'low' && <Environment preset="city" background />}
    </>
  );
}

export default BaseEnvironment;
