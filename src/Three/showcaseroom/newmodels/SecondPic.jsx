import React, { useRef, useEffect, useMemo } from 'react'
import { useTexture } from '@react-three/drei'
import { DoubleSide, PlaneGeometry } from 'three'

export function SecondPic(props) {
  const meshRef1 = useRef()
  
  // CURVED TV DISPLAY - Creates a gentle curve like Samsung curved TVs
  const texture2 = useTexture('/webp/programs/Group 107.webp')


  // Add error handling for texture loading
  useEffect(() => {
    texture2.flipY = false
  }, [texture2])
  
  return (
    <group {...props} dispose={null} position={[-4.3, 1.04, -61.5]} rotation={[0, 0, 0]} scale={1.01} >
        {/* <axesHelper args={[10000]} /> */}
      <mesh
        ref={meshRef1}
        position={[-3, 0, 2]}
        rotation={[0, 1.286, 0]} // [x, y, z] - Adjust rotation as needed
        castShadow
        receiveShadow
      >
        <planeGeometry args={[0.9, 1]} />
        <meshLambertMaterial 
          map={texture2} 
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