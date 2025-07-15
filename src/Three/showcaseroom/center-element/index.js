import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CenterElementModel(props) {
  const { nodes, materials } = useGLTF('/models/showcaseroom/center element.glb')
  return (
    <group {...props} dispose={null}>
      <group
         position={[-0.001, 5.871, -57.717]}
        rotation={[Math.PI / 2, 0, 3.138]}
        scale={[-3, -3, -0.312]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001.geometry}
          material={materials['blue.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001_1.geometry}
          material={materials['light.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001_2.geometry}
          material={materials['white.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001_3.geometry}
          material={materials['light.003']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/showcaseroom/center element.glb')
