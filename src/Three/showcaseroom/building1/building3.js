import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Building3Model(props) {
  const { nodes, materials } = useGLTF('/models/showcaseroom/Innovation Centre.glb')
  return (
    <group {...props} dispose={null}>
      <group
          position={[4.4790, 0.581, -51.729]}
          rotation={[0, 0.610, 0]}
        scale={[-1.052, -0.08, -1.65]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube091.geometry}
          material={materials.mesh_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube091_1.geometry}
          material={materials.slab}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube091_2.geometry}
          material={materials.water}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube091_3.geometry}
          material={materials.mullion}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube091_4.geometry}
          material={materials.moss}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube091_5.geometry}
          material={materials.glaze}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/showcaseroom/Innovation Centre.glb')
