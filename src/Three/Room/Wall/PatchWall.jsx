"use client";
import React from "react";

function PatchWall() {
  return (
    <group position={[0,0,0.5353]}>
      <mesh position={[0, -0.53, 40.3]} rotation={[1.523, 0, 0]} scale={[2.7,1.2,0.7]}>
        <boxGeometry args={[20, 10, 1]} />
        <meshStandardMaterial
        color="#587fff"
        flatShading={true}
        roughness={5.9}
        metalness={0.6}
        />
      </mesh>
    </group>
  );
}

export default PatchWall;
