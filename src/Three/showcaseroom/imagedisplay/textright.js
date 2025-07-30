import React, { useRef, useEffect } from 'react'
import { useTexture } from '@react-three/drei'
import { DoubleSide } from 'three'

export function TextRight(props) {
  const meshRef = useRef()
  
  // CURVED TV DISPLAY - Creates a gentle curve like Samsung curved TVs
  // TODO: Replace this with your actual image path
  // Example: const texture = useTexture('/images/your-image.jpg')
  // For now using a data URL with a simple colored rectangle as placeholder
  const texture = useTexture('/webp/start-up-business-goals-strategy-min.webp')

  // Create the curve effect
  useEffect(() => {
    if (meshRef.current) {
      const geometry = meshRef.current.geometry
      const position = geometry.attributes.position
      
      // Apply curve to the vertices
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i)
        const z = position.getZ(i)
        
        // Create subtle curve - bend edges forward like curved TV
        const curveAmount = 0.0123 // Adjust for more/less curve
        const newZ = z + (x * x) * curveAmount
        
        position.setZ(i, newZ)
      }
      
      position.needsUpdate = true
      geometry.computeVertexNormals()
    }
  }, [])
  
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        position={[9.687, 3.5, -25.633]} // [x, y, z] - Adjust position as needed
        rotation={[0, -0.476, 0]} // [x, y, z] - Adjust rotation as needed
        castShadow
        receiveShadow
      >
        <planeGeometry args={[11, 8.2, 32, 1]} />
        {/* Width: 6, Height: 3.5, widthSegments: 32 for smooth curve */}
        <meshLambertMaterial 
          map={texture} 
          side={DoubleSide}
          transparent={true}
        />
      </mesh>
    </group>
  )
}