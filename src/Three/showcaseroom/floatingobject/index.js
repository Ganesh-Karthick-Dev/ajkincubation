import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function FloatingObjectModel(props) {
  const { nodes, materials } = useGLTF('/models/showcaseroom/Floting.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.platform001_platform_0002.geometry}
        material={materials.platform}
        position={[2.600, 0.016, -65.817]}
        rotation={[-1.565, 0, 0]}
        scale={0.470}
      >
        {/* <axesHelper args={[1000]} /> */}
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/showcaseroom/Floting.glb')
