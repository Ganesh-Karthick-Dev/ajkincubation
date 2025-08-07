import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useCurrentSheet } from '@theatre/r3f';

export function AlternateWall(props) {
  const { nodes, materials } = useGLTF('/models/NewModels/startup without text-opt.glb')

  const sheet = useCurrentSheet();
    const [currentDuration, setCurrentDuration] = useState(0);

    useFrame(() => {
        if (sheet) {
            setCurrentDuration(sheet.sequence.position);
        }
    });

    // Only render if currentDuration is greater than or equal to 39.01
    if (currentDuration < 38.01) return null;
    
  return (
    <group {...props} dispose={null} position={[-0.100, 2.276, -66.157]} rotation={[0, 0, 0]} scale={0.93} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall__Scifi_Wall_mat_0526.geometry}
        material={materials['Scifi_Wall_mat.007']}
        // position={[0, 2.244, -66.796]}
        scale={0.01}
      />
      {/* <axesHelper args={[1000]} /> */}
    </group>
  )
}

useGLTF.preload('/models/NewModels/startup without text-opt.glb')
