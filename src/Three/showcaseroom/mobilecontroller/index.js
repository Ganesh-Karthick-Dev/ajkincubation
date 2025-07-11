
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MobileControllerModel(props) {
  const { nodes, materials } = useGLTF('/models/showcaseroom/Mobile controller.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tablet-material'].geometry}
        material={materials.tablet}
        position={[0.400, 0.576, -65.057]}
        rotation={[3.167, 1, 0]}
        scale={0.049}
      />
    </group>
  )
}

useGLTF.preload('/models/showcaseroom/Mobile controller.glb')
