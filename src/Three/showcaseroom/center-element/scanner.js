
import React, { useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useCurrentSheet } from '@theatre/r3f'
import { useFrame } from '@react-three/fiber'

export function Scanner(props) {    
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/showcaseroom/laserScanning.glb')
  const { actions } = useAnimations(animations, group)

  const sheet = useCurrentSheet();
  const [currentDuration, setCurrentDuration] = useState(0);

  useFrame(() => {
    if (sheet) {
      setCurrentDuration(sheet.sequence.position);
    }
    // if (group.current) {
    //   group.current.rotation.y += 0.01 // Rotate around Y axis
    // }
  })

  // Only render if currentDuration is greater than or equal to 38.01
  if (currentDuration > 29.95 && currentDuration < 33.70) return null;

  return (
    <group ref={group} {...props} dispose={null} position={[0.038, 1.834, -57.603]}>
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