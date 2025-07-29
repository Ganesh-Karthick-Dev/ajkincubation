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

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        
        // Simple blinking effect
        if (materialRef.current) {
            materialRef.current.emissiveIntensity = 0.8 + Math.sin(time * 3) * 0.4;
            materialRef.current.time = time;
        }
    });

    return (
        <group
            ref={groupRef}
            position={[0.043, 3.3, -58.0]}
            rotation={[0, 0, 0]}
        >
            <Center>
                <group>
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.32}
                        height={0.13}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.0001}
                        bevelSize={0.02}
                        bevelOffset={0}
                        bevelSegments={2}
                        letterSpacing={0.05}
                        position={[0, 0.7, -0.03]}
                    >
                        AIIF
                        <gradientMaterial
                            ref={materialRef}
                            topColor={new THREE.Color('#90EE90')}
                            bottomColor={new THREE.Color('#ADD8E6')}
                            emissiveIntensity={0.8}
                        />
                        <Outlines thickness={2.07} color={"grey"} />
                    </Text3D>
                </group>
            </Center>
        </group>
    );
};

export default LaserLogo;