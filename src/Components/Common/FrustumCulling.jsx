import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function FrustumCulling({ children, distance = 100, updateFrequency = 0.1 }) {
  const groupRef = useRef();
  const lastUpdateRef = useRef(0);
  const isVisibleRef = useRef(true);
  const { camera } = useThree();
  
  const frustum = useMemo(() => new THREE.Frustum(), []);
  const cameraMatrix = useMemo(() => new THREE.Matrix4(), []);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    // Update at specified frequency
    if (time - lastUpdateRef.current < updateFrequency) return;
    lastUpdateRef.current = time;
    
    // Update frustum
    cameraMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(cameraMatrix);
    
    // Distance culling
    const distance = camera.position.distanceTo(groupRef.current.position);
    const isInDistance = distance < distance;
    
    // Frustum culling
    const boundingBox = new THREE.Box3().setFromObject(groupRef.current);
    const isInFrustum = frustum.intersectsBox(boundingBox);
    
    // Update visibility
    const shouldBeVisible = isInDistance && isInFrustum;
    if (shouldBeVisible !== isVisibleRef.current) {
      groupRef.current.visible = shouldBeVisible;
      isVisibleRef.current = shouldBeVisible;
    }
  });
  
  return (
    <group ref={groupRef} frustumCulled>
      {children}
    </group>
  );
}