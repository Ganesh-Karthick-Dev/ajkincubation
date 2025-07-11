import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

export function FactoryModel(props) {
  // Leva controls for position, rotation, and scale
//   const { position, rotation, scale } = useControls('Factory', {
//     position: { value: [4.4790, 1.581, -51.729], step: 0.01 },
//     rotation: { value: [4.50, -0.10, 0.0], step: 0.01 },
//     scale: { value: [0.01167, -0.0133, 0.0134], step: 0.0001 }
//   })

  /* [
    4.479,
    1.581,
    -51.729
] , [
    4.5,
    -0.1,
    0
] , [
    0.01167,
    -0.0133,
    0.0134
] */

//   console.log(position, rotation, scale)

  const { nodes, materials } = useGLTF('/models/showcaseroom/Factory.glb')
  return (
    <group {...props} dispose={null}>
      <group 
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Factory}
        />
        <axesHelper args={[1000]} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Silo}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/showcaseroom/Factory.glb')