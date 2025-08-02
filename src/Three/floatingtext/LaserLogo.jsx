import React, { useRef, useMemo } from 'react';
import { Center, Text3D, useMatcapTexture, shaderMaterial, Outlines } from '@react-three/drei';
import { useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';

// Custom gradient shader material
const GradientMaterial = shaderMaterial(
    {
        topColor: new THREE.Color('#90EE90'), // Light green
        bottomColor: new THREE.Color('#ADD8E6'), // Light blue
        emissiveIntensity: 0.8,
        time: 0
    },
    // Vertex shader
    `
    varying vec3 vPosition;
    void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
    // Fragment shader
    `
    uniform vec3 topColor;
    uniform vec3 bottomColor;
    uniform float emissiveIntensity;
    uniform float time;
    varying vec3 vPosition;
    
    void main() {
        float gradientFactor = (vPosition.y + 0.2) / 0.4; // Adjust range as needed
        gradientFactor = clamp(gradientFactor, 0.0, 1.0);
        
        vec3 color = mix(bottomColor, topColor, gradientFactor);
        vec3 emissiveColor = color * emissiveIntensity;
        
        gl_FragColor = vec4(color + emissiveColor, 1.0);
    }
    `
);

extend({ GradientMaterial });

const LaserLogo = () => {
    const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
    const groupRef = useRef();
    const materialRef = useRef();
    const lightRef = useRef();

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        
        // Reduced pulsing effect to prevent excessive brightness
        if (materialRef.current) {
            const pulse = 0.4 + Math.sin(time * 2.5) * 0.2; // Lower base and variation
            materialRef.current.emissive.setHex(0x4e73ff);
            materialRef.current.emissiveIntensity = pulse;
        }
        
        // Reduced animated spotlight intensity
        if (lightRef.current) {
            lightRef.current.intensity = 1.0 + Math.sin(time * 2) * 0.2; // Much lower intensity
        }
        
        // Subtle floating animation
        if (groupRef.current) {
            groupRef.current.position.y = 3.3 + Math.sin(time * 1.5) * 0.05;
        }
    });

    return (
        <group
            ref={groupRef}
            position={[0.043, 3.3, -58.0]}
            rotation={[0, 0, 0]}
        >
            {/* Reduced spotlight intensity to prevent excessive brightness */}
            <spotLight
                ref={lightRef}
                position={[0, 6, -55]}
                target-position={[0.043, 3.3, -58.0]}
                angle={0.3}
                penumbra={0.5}
                intensity={1.2}
                color="#4e73ff"
                castShadow={false}
            />
            
            {/* Reduced rim lighting to prevent excessive brightness */}
            <pointLight 
                position={[2, 4, -56]} 
                intensity={0.4} 
                color="#00ff88" 
                distance={8}
            />
            <pointLight 
                position={[-2, 4, -56]} 
                intensity={0.4} 
                color="#0088ff" 
                distance={8}
            />
            
            <Center>
                <group>
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.38}
                        height={0.18}
                        curveSegments={16}
                        bevelEnabled
                        bevelThickness={0.005}
                        bevelSize={0.03}
                        bevelOffset={0}
                        bevelSegments={4}
                        letterSpacing={0.08}
                        position={[0, 0.7, -0.03]}
                    >
                        AIIF
                        <meshStandardMaterial 
                            ref={materialRef}
                            color="#6e93ff" 
                            emissive="#4e73ff"
                            emissiveIntensity={0.9}
                            metalness={0.6}
                            roughness={0.3}
                            envMapIntensity={1.2}
                        />
                        <Outlines thickness={3.5} color="#00ff88" opacity={0.9} />
                    </Text3D>
                    
                    {/* Additional glow effect using a larger transparent version */}
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.42}
                        height={0.02}
                        curveSegments={8}
                        bevelEnabled={false}
                        letterSpacing={0.08}
                        position={[0, 0.7, -0.05]}
                    >
                        AIIF
                        <meshBasicMaterial 
                            color="#4e73ff" 
                            transparent 
                            opacity={0.3}
                        />
                    </Text3D>
                </group>
            </Center>
        </group>
    );
};

export default LaserLogo;