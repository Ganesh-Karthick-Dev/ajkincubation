"use client";
import { useAnimations, Clone } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

export default function AnimatedScientistInstance({ scene, animations, position, rotation, scale }) {
  const groupRef = useRef();
  const { actions, names } = useAnimations(animations, groupRef);

  useEffect(() => {
    if (actions && names.length > 0) {
      actions[names[0]].reset().play();
    }
  }, [actions, names]);

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <Clone object={scene} />
    </group>
  );
}
