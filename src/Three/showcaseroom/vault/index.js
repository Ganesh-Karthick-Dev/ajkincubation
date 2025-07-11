import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function VaultModel(props) {
  const { nodes, materials } = useGLTF('/models/showcaseroom/vault.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4002.geometry}
        material={materials.Cashbox}
        position={[7.019, 0.571, -59.817]}
        rotation={[0, -1.255, 0]}
        scale={0.829}
      />
    </group>
  )
}

useGLTF.preload('/models/showcaseroom/vault.glb')
