import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BulbModel(props) {
  const { nodes, materials } = useGLTF('/models/showcaseroom/Bulb.glb')
  return (
    <group {...props} dispose={null}>
      <group 
       position={[-5.009, 1.339, -51.699]}
      rotation={[-Math.PI / 2, -0.643, 0]} 
      scale={0.281}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_0_1.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_0_2.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_0_3.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_0_4.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_0_5.geometry}
          material={materials.wire_spiral}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/showcaseroom/Bulb.glb')