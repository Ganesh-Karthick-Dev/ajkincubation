import React, { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export function BannerOne(props) {
  const meshRef = useRef();
  
  // Load a sample texture - you can replace this URL with your image
  const texture = useLoader(TextureLoader, '/logo.png');
  
  // Memoize the material for performance
  const material = useMemo(() => ({
    map: texture,
    transparent: true,
    alphaTest: 0.1
  }), [texture]);



  return (
    <group  position={[-0.323, 3.092, -20.05812]} rotation={[0, 0, 0]}>
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
        frustumCulled
      >
        {/* Banner geometry - rectangular plane */}
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial 
          {...material}
          side={2} // DoubleSide to make it visible from both sides
        />
      </mesh>
      
      {/* Optional: Add a frame around the banner */}
      
      
      {/* Optional: Add some subtle lighting */}
      <pointLight 
        position={[0, 0, 2]} 
        intensity={0.5} 
        color="#ffffff"
        distance={10}
        decay={2}
      />
    </group>
  );
}

export default BannerOne;