"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Text3D, Center, Float } from "@react-three/drei";
import { useCurrentSheet } from "@theatre/r3f";
import { useQuality } from "@/Components/Common/PerformanceMonitor";

function Wall() {
  const quality = useQuality();
  // Create video element and set up
  const [video] = useState(() => 
    Object.assign(document.createElement('video'), { 
      src: '/video/white_bg.webm', 
      crossOrigin: 'Anonymous', 
      loop: true, 
      muted: true,
      playsInline: true
    })
  );
  
  // Create video texture
  const [videoTexture] = useState(() => new THREE.VideoTexture(video));
  
  // Play video when component mounts
  useEffect(() => {
    video.play();
    // Use the new approach for color space
    videoTexture.colorSpace = THREE.SRGBColorSpace;
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    return () => {
      if (!video.paused) video.pause();
    };
  }, [video, videoTexture]);

  // Use low-res textures for low quality
  const [colorMap, normalMap, roughnessMap, metalnessMap] = useLoader(
    THREE.TextureLoader,
    quality === 'low'
      ? [
          "/textures/Wall/Poliigon_PlasticMoldDryBlast_7495_BaseColor.jpg", // fallback to same, but you can add low-res if available
          "/textures/Wall/Poliigon_PlasticMoldDryBlast_7495_Normal.png",
          "/textures/Wall/Poliigon_PlasticMoldDryBlast_7495_Roughness.jpg",
          "/textures/Wall/Poliigon_PlasticMoldDryBlast_7495_Metallic.jpg",
        ]
      : [
          "/textures/Wall/Poliigon_PlasticMoldDryBlast_7495_BaseColor.jpg",
          "/textures/Wall/Poliigon_PlasticMoldDryBlast_7495_Normal.png",
          "/textures/Wall/Poliigon_PlasticMoldDryBlast_7495_Roughness.jpg",
          "/textures/Wall/Poliigon_PlasticMoldDryBlast_7495_Metallic.jpg",
        ]
  );

  // Set texture parameters
  useEffect(() => {
    [colorMap, normalMap, roughnessMap, metalnessMap].forEach((texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(100, 100); // Adjust the repeat value as needed
    });
  }, [colorMap, normalMap, roughnessMap, metalnessMap]);

  // Create a shape with a hole
  const wallGeometry = useMemo(() => {
    // Wall dimensions
    const wallWidth = 100;
    const wallHeight = 60;

    // Define the six corner points of the hexagonal hole
    // Format: [x, y] coordinates
    const holePoints = [
      [-2, -2.45], // Bottom left
      [2.1, -2.45], // Bottom right
      [2.9, -0.3], // Middle right
      [2, 1.9], // Top right
      [-2, 1.9], // Top left
      [-2.9, -0.3], // Middle left
    ];

    // Create outer shape (wall)
    const shape = new THREE.Shape();
    shape.moveTo(-wallWidth / 2, -wallHeight / 2);
    shape.lineTo(wallWidth / 2, -wallHeight / 2);
    shape.lineTo(wallWidth / 2, wallHeight / 2);
    shape.lineTo(-wallWidth / 2, wallHeight / 2);
    shape.lineTo(-wallWidth / 2, -wallHeight / 2);

    // Create hole shape using the hexagon points
    const hole = new THREE.Path();
    hole.moveTo(holePoints[0][0], holePoints[0][1]); // Start at first point


    // Connect all points in sequence
    for (let i = 1; i < holePoints.length; i++) {
      hole.lineTo(holePoints[i][0], holePoints[i][1]);
    }

    // Close the path
    hole.lineTo(holePoints[0][0], holePoints[0][1]);

    // Add hole to shape
    shape.holes.push(hole);

    // Create geometry from shape
    const geometry = new THREE.ShapeGeometry(shape);

    return geometry;
  }, []);

  // Use simpler material for low quality
  const wallMaterial = useMemo(() => {
    if (quality === 'low') {
      return new THREE.MeshLambertMaterial({ map: colorMap });
    }
    return new THREE.MeshStandardMaterial({
      map: colorMap,
      normalMap,
      roughnessMap,
      metalnessMap,
    });
  }, [quality, colorMap, normalMap, roughnessMap, metalnessMap]);


  const sheet = useCurrentSheet();
  const [currentDuration, setCurrentDuration] = useState(0);

  useFrame(() => {
      if (sheet) {
          setCurrentDuration(sheet.sequence.position);
      }
  });


  return (
    <group >
      <mesh position={[0, 2.4234, 34.3]} rotation={[0, 0, 0]}>
        <primitive object={wallGeometry} />
        <meshStandardMaterial
          // map={colorMap}
          // normalMap={normalMap}
          // roughnessMap={roughnessMap}
          // metalnessMap={metalnessMap}
          // envMapIntensity={1}
          // side={THREE.DoubleSide}
        color="#587fff"
        />
      </mesh>

      <group position={[-11.423, 6.1, 34.1]} rotation={[0, 0, 0.0093]}>
        <Center>
          <Text3D
            font="/fonts/Audiowide_Regular.json"
            size={0.4}
            height={0.4}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.0005}
            bevelSize={0.01}
            bevelOffset={0}
            bevelSegments={2}
            letterSpacing={0.05}
          >
            From Spark to Solution
            {/* <meshBasicMaterial toneMapped={false} map={videoTexture} /> */}
          </Text3D>
        </Center>
      </group>

          <group position={[-11.423, 4.5123, 34.512]} rotation={[0, 0, -0.0093]}>
        <Center>
          <Text3D
            font="/fonts/Azonix_Regular.json"
            size={0.923}
            height={0.4}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.1}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            letterSpacing={0.15}
          >
            AIIF Ignites 
            <meshBasicMaterial toneMapped={false} map={videoTexture} />
          </Text3D>


          <Text3D
            font="/fonts/Audiowide_Regular.json"
            position={[5, -0.456, 1]} 
            size={0.1}
            height={0}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.0005}
            bevelSize={0.01}
            bevelOffset={0}
            bevelSegments={2}
            letterSpacing={0.05}
          >
            Scroll to see imagination turn into impact.
            {/* <meshBasicMaterial toneMapped={false} map={videoTexture} /> */}
          </Text3D>

        </Center>
      </group>
    </group>
  );
}

export default Wall;
