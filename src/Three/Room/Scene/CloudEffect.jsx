"use client";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Clouds, Cloud } from "@react-three/drei";

export function CloudEffect() {
  const ref = useRef();
  const cloud0 = useRef();

  const config = {
    seed: 10,
    segments: 300,
    volume: 40,
    opacity: 0.01,
    fade: 20,
    growth: 40,
    speed: 1,
  };

  const bounds = [6, 1, 1];

//   useFrame((state, delta) => {
//     ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 2;
//     ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 2;
//     cloud0.current.rotation.y -= delta;
//   });

  return (
    <group ref={ref} position={[0, 15, 0]}>
      <Clouds material={THREE.MeshLambertMaterial} limit={400}>
        {/* <Cloud ref={cloud0} {...config} bounds={bounds} color="white" /> */}
        <Cloud {...config} bounds={bounds} color="#ffffff" seed={2} position={[-10, 2, 38]} />
        {/* <Cloud {...config} bounds={bounds} color="#d0e0d0" seed={3} position={[-15, 0, 0]} />
        <Cloud {...config} bounds={bounds} color="#a0b0d0" seed={4} position={[0, 0, -12]} />
        <Cloud {...config} bounds={bounds} color="#c0c0dd" seed={5} position={[0, 0, 12]} /> */}
        {/* <Cloud 
          concentrate="outside" 
          growth={100} 
          color="#ffccdd" 
          opacity={1.25} 
          seed={0.3} 
          bounds={200} 
          volume={200} 
          position={[0, 2.4, 34.3]}
        /> */}
      </Clouds>
    </group>
  );
} 