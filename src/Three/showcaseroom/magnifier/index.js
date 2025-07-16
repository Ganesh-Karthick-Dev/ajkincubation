import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

export function MagnifierModel(props) {
  const { nodes, materials } = useGLTF('/models/showcaseroom/Magnifier.glb')
  return (
    <Float floatIntensity={1.0} rotationIntensity={0.0123} speed={1.75} > 
      <group {...props} dispose={null}>
        <mesh
          castShadow
        receiveShadow
        geometry={nodes.sd_default_0.geometry}
        material={materials['default']}
        position={[-0.100, 1.176, -65.157]}
        rotation={[-1.540, 1, 0]}
        scale={0.0112}
      >
        {/* <axesHelper args={[10000]} /> */}
      </mesh>
    </group>
    </Float>
  )
}

useGLTF.preload('/models/showcaseroom/Magnifier.glb')
