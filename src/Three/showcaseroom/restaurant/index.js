
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RestaurantModel(props) {
  const { nodes, materials } = useGLTF('/models/showcaseroom/Restaurant.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube13517.geometry}
        material={materials.Texture_buildings1}
        position={[4.0390, 0.641, -51.537]}
        rotation={[0, 0.610, 0]}
        // scale={[-2.061, -0.211, -1.395]}
        scale={[-1.827, -0.088, -2.617]}
      >
        {/* <axesHelper args={[1000]} /> */}
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/showcaseroom/Restaurant.glb')