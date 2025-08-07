import React, { useState } from 'react';
import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
import { useCurrentSheet } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SixStepAiif = () => {
    // const [matcapTexture] = useMatcapTexture("/matcaps/Gradient.png");
    
    // Create gradient material
    const gradientMaterial = new THREE.ShaderMaterial({
        uniforms: {
            color1: { value: new THREE.Color(0x00cc66) }, // Darker Green
            color2: { value: new THREE.Color(0x0066cc) }, // Darker Blue
            color3: { value: new THREE.Color(0x00cccc) }, // Darker Cyan
        },
        vertexShader: `
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
                vUv = uv;
                vNormal = normalize(normalMatrix * normal);
                vPosition = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 color1;
            uniform vec3 color2;
            uniform vec3 color3;
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            
            void main() {
                // Create gradient
                vec3 color = mix(color1, color2, vUv.x);
                color = mix(color, color3, vUv.y);
                
                // Add lighting effect
                vec3 light = normalize(vec3(1.0, 1.0, 1.0));
                float intensity = max(0.0, dot(vNormal, light));
                
                // Apply lighting to gradient with higher base brightness
                color = color * (0.6 + 0.4 * intensity);
                
                gl_FragColor = vec4(color, 1.0);
            }
        `,
        transparent: false,
        side: THREE.DoubleSide
    });
    
    // const sheet = useCurrentSheet();
    // const [currentDuration, setCurrentDuration] = useState(0);

    // useFrame(() => {
    //     if (sheet) {
    //         setCurrentDuration(sheet.sequence.position);
    //     }
    // });

    // // Only render if currentDuration is between 16.00 and 17.50
    // if (currentDuration < 13.0 || currentDuration > 15.5) return null;

    return (
        <group>
            <group
                position={[6.187, 3.5, -27.933]}
                rotation={[0, -0.263 , 0]}
                visible={true}
            >
               <Center>
                        <Text3D
                         font="/fonts/Ethnocentric_Regular.json"
                         size={0.623}
                         height={0.0334}
                         curveSegments={12}
                         bevelEnabled={false}
                         letterSpacing={0.05}
                     >
                       AIIF
                        <primitive object={gradientMaterial} attach="material" />
                    </Text3D>
                </Center>
            </group>
        </group>
    );
};

export default SixStepAiif;