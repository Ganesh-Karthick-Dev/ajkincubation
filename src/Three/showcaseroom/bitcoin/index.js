import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

export function BitcoinModel(props) {
  const { nodes, materials } = useGLTF('/models/showcaseroom/bitcoin.glb')
  return (
    <Float rotationIntensity={0.0123} speed={1.75} > 

    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4003.geometry}
        material={materials['material.001']}
        position={[7.019, 1.571, -60.217]}
        rotation={[1.562, -0.203, 1.285]}
        scale={0.121}
      />
    </group>
    </Float>
  )
}

useGLTF.preload('/models/showcaseroom/bitcoin.glb')