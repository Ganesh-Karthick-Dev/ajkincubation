import React, { useRef, useEffect, useMemo } from 'react'
import { useTexture } from '@react-three/drei'
import { DoubleSide, PlaneGeometry } from 'three'

export function ImageDisplayModel(props) {
  const meshRef = useRef()
  
  // CURVED TV DISPLAY - Creates a gentle curve like Samsung curved TVs
  const texture = useTexture('/webp/business-success-report-graph-concept-min.webp')

  // Create curved geometry
  const curvedGeometry = useMemo(() => {
    const geometry = new PlaneGeometry(6, 5.2, 32, 1)
    const position = geometry.attributes.position
    
    // Apply curve to the vertices
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i)
      const z = position.getZ(i)
      
      // Create subtle curve - bend edges forward like curved TV
      const curveAmount = 0.0463 // Adjust for more/less curve
      const newZ = z + (x * x) * curveAmount
      
      position.setZ(i, newZ)
    }
    
    position.needsUpdate = true
    geometry.computeVertexNormals()
    
    return geometry
  }, [])
  
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        geometry={curvedGeometry}
        position={[-9.187, 3.5, -25.933]} // [x, y, z] - Adjust position as needed
        rotation={[0, 0.486, 0]} // [x, y, z] - Adjust rotation as needed
        castShadow
        receiveShadow
      >
        <meshLambertMaterial 
          map={texture} 
          side={DoubleSide}
          transparent={true}
          emissive="#222222"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  )
}