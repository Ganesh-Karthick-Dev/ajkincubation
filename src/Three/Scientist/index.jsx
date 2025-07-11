"use client";
import { useFBX, useGLTF, useAnimations } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

function Scientist({position,scale,rotation}) {
  const scientistRef = useRef();
  const { scene,animations } = useGLTF("./models/Scientist/draco.glb");

  const { actions, names } = useAnimations(animations, scientistRef);

  useEffect(() => {
    if (actions && actions[names[0]]) {
      actions[names[0]].reset().play();
    }
  }, [actions, names]);

  return (
    <group>
      <primitive
        ref={scientistRef}
        object={scene}
        position={position}
        scale={scale}
        rotation={rotation}
      />
      
    </group>
  );
}

export default Scientist;

useGLTF.preload("./models/Scientist/draco.glb");
