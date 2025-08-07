import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BlackObect(props) {
  const { nodes, materials } = useGLTF('/models/NewModels/black object-opt.glb')
  return (
    <group {...props} dispose={null} position={[0, 2.423, 15.927]} scale={[0.960, 0.989, 0.438]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame1_Scifi_Tunnel_Loop_M_01429.geometry}
        material={materials['Scifi_Tunnel_Loop_M.002']}
        // position={[-4.318, -4.734, 18.252]}
        scale={0.01}
      />
      {/* <axesHelper args={[1000]} /> */}
    </group>
  )
}

useGLTF.preload('/models/NewModels/black object-opt.glb')

