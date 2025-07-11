import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MoneyModel(props) {
  const { nodes, materials } = useGLTF('/models/showcaseroom/money.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube76_money_0.geometry}
        material={materials.money}
        position={[7.019, 1.571, -59.217]}
        rotation={[-1.854, 0.41, 0.929]}
      >
        <axesHelper args={[10]} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/showcaseroom/money.glb')