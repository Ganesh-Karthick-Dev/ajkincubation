import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ScifiBoxModel(props) {
  const { nodes, materials } = useGLTF('/models/showcaseroom/Sci Fi Box.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Cube_0"
          position={[-7.120, 0.412, -63.126]}
          rotation={[-Math.PI / 2, 0, -0.414]}
          scale={0.319}>
          <mesh
            name="Cube_0_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube_0_1.geometry}
            material={materials.blue_glow}
          />
          <mesh
            name="Cube_0_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube_0_2.geometry}
            material={materials.red_glow}
          />
          {/* <axesHelper args={[100]} />    */}
          <mesh
            name="Cube_0_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube_0_3.geometry}
            material={materials.lock}
          />
          <mesh
            name="Cube_0_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube_0_4.geometry}
            material={materials.bloack}
          />
          <mesh
            name="Cube_0_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube_0_5.geometry}
            material={materials.BakedCycles}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/showcaseroom/Sci Fi Box.glb')
