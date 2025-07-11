
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function HumanoidRobotModel(props) {
  const { nodes, materials } = useGLTF('/models/showcaseroom/Humanoid Robot.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.material}
        position={[8.500, 0.041, -57.817]}
        rotation={[4.767, 0, 3.570]}
        scale={1.397}
      >
        {/* <axesHelper args={[1000]} /> */}
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/showcaseroom/Humanoid Robot.glb')
