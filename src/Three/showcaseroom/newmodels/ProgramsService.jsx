import React, { useRef, useEffect, useMemo } from 'react'
import { useTexture } from '@react-three/drei'
import { DoubleSide, PlaneGeometry } from 'three'

export function ProgramsService(props) {
  const meshRef1 = useRef()
  
  // CURVED TV DISPLAY - Creates a gentle curve like Samsung curved TVs
  const texture1 = useTexture('/webp/programs/Group 106.webp')

  // Add error handling for texture loading
  useEffect(() => {
    texture1.flipY = false
  }, [texture1])
  
  return (
    <group {...props} dispose={null} position={[-4.6, 1.04, -60.5]} rotation={[0, 0, 0]} scale={1.01} >
      <mesh
        ref={meshRef1}
        position={[-3, 0, 2]}
        rotation={[0, 1.286, 0]} // [x, y, z] - Adjust rotation as needed
        castShadow
        receiveShadow
      >
        <planeGeometry args={[0.9, 1]} />
        <meshLambertMaterial 
          map={texture1} 
          side={DoubleSide}
          transparent={true}
          emissive="#222222"
          emissiveIntensity={0.3}
          opacity={1}
        />
      </mesh>

    </group>
  )
}