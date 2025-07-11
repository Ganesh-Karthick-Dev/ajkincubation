import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CoffeeBoxModel(props) {
  const { nodes, materials } = useGLTF('/models/showcaseroom/coffee box.glb')
  return (
    <group {...props} dispose={null}>
      <group 
      position={[-2.700, 0.006, -65.857]}
      rotation={[0, -1.357, 0]}
       scale={0.546}
       >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface2_Coffee_cup_0_1.geometry}
          material={materials.Coffee_cup}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface2_Coffee_cup_0_2.geometry}
          material={materials.Shiny_Stuff1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface2_Coffee_cup_0_3.geometry}
          material={materials.Transparent}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface2_Coffee_cup_0_4.geometry}
          material={materials.Coffee_Case}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/showcaseroom/coffee box.glb')