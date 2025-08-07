import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function AjkLogo(props) {
  const { nodes, materials } = useGLTF('/models/text_models/Logo with color.glb')
  return (
    <group {...props} dispose={null} position={[-0.873, 3.2, -57.8]} rotation={[1.5, 0, 0.023]} scale={0.3}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.004']}
        position={[1.483, 0.065, -0.411]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.844, -0.06, -0.844]}
      />
    </group>
  )
}

useGLTF.preload('/models/text_models/Logo with color.glb')