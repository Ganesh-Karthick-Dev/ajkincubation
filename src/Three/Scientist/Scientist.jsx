"use client";
import { useGLTF } from "@react-three/drei";
import React from "react";
import AnimatedScientistInstance from "./AnimatedScientistInstance";

function Scientists() {
  const { scene, animations } = useGLTF("./models/Scientist/draco.glb");

  const baseProps = {
    rotation: [0, Math.PI / 2, 0],
    scale: 1.5,
  };

  return (
    <group>
      <AnimatedScientistInstance
        scene={scene}
        animations={animations}
        position={[-8.5, -0.4, -5.5]}
        {...baseProps}
      />

    </group>
  );
}

export { Scientists };

useGLTF.preload("./models/Scientist/draco.glb");
