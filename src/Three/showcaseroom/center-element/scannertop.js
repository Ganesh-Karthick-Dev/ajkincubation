
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ScannerTop(props) {    
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/showcaseroom/laserScanning.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null} position={[0.038, 4.994, -57.603]} rotation={[3.423, 1, 0]}>
      <group name="Scene">
        <group name="RootNode">
          <group name="Plane" rotation={[-Math.PI / 2, 0, 0]} scale={0.600}>
            <mesh
              name="Plane_Hologram-lights_0"
              castShadow
              receiveShadow
              geometry={nodes['Plane_Hologram-lights_0'].geometry}
              material={materials['Hologram-lights']}
            />
          </group>
          <group
            name="Suzanne"
            position={[0, 344.162, -7.185]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.600}
          />
        </group>
        <mesh
          name="Circle_Metal-part_0"
          castShadow
          receiveShadow
          geometry={nodes['Circle_Metal-part_0'].geometry}
          material={materials['Metal-part']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.200}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/showcaseroom/laserScanning.glb')