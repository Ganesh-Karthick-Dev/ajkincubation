import React, { useState, useMemo } from 'react';
import { Center, Text3D } from '@react-three/drei';
import { useCurrentSheet } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RoboName = () => {

    // Working gradient shader for Text3D
    const gradientMaterial = useMemo(() => {
        return new THREE.ShaderMaterial({
            uniforms: {
                topColor: { value: new THREE.Color('#aaffaa') }, // Light green
                bottomColor: { value: new THREE.Color('#4488ff') } // Blue
            },
            vertexShader: `
                varying vec3 vPosition;
                void main() {
                    vPosition = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 topColor;
                uniform vec3 bottomColor;
                varying vec3 vPosition;
                void main() {
                    float mixValue = (vPosition.y + 0.1) / 0.2; // Adjust based on text height
                    mixValue = clamp(mixValue, 0.0, 1.0);
                    vec3 color = mix(bottomColor, topColor, mixValue);
                    gl_FragColor = vec4(color, 1.0);
                }
            `
        });
    }, []);

    const sheet = useCurrentSheet();
    const [currentDuration, setCurrentDuration] = useState(0);

    useFrame(() => {
        if (sheet) {
            setCurrentDuration(sheet.sequence.position);
        }
    });

    return (
        <group>
            <group
                position={[-0.523, 3.092, -6.05812]}
                rotation={[0, 0 , 0]}
                visible={true}
            >
               <Center>
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.1723}
                        height={0.041}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.00002}
                        bevelSize={0.01}
                        bevelOffset={0}
                        bevelSegments={1}
                        letterSpacing={0.03}
                        material={gradientMaterial}
                    >
                        AIIF
                    </Text3D>
                </Center>
            </group>
        </group>
    );
};

export default RoboName;