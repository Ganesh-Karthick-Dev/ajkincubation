import React, { useRef, useMemo } from 'react'
import { useGLTF, Float } from '@react-three/drei'
import { AdaptiveLOD, SimplifiedModel } from '@/Components/Common/AdaptiveLOD'

export function BitcoinModel(props) {
  const { nodes, materials } = useGLTF('/models/showcaseroom/bitcoin.glb')
  
  const memoizedGeometry = useMemo(() => nodes.Object_4003.geometry, [nodes])
  const memoizedMaterial = useMemo(() => materials['material.001'], [materials])
  
  const lowQualityVersion = (
    <SimplifiedModel 
      position={[7.019, 1.571, -60.217]}
      scale={[0.121, 0.121, 0.121]}
      color="#FFD700"
    />
  );
  
  const fullQualityVersion = (
    <Float rotationIntensity={0.0123} speed={1.75} > 
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={memoizedGeometry}
        material={memoizedMaterial}
        position={[7.019, 1.571, -60.217]}
        rotation={[1.562, -0.203, 1.285]}
        scale={0.121}
        frustumCulled
      />
    </group>
    </Float>
  );
  
  return (
    <AdaptiveLOD lowQualityComponent={lowQualityVersion}>
      {fullQualityVersion}
    </AdaptiveLOD>
  )
}

useGLTF.preload('/models/showcaseroom/bitcoin.glb')