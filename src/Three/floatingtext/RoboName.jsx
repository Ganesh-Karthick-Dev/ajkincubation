import React, { useState, useMemo } from 'react';
import { Center, Text3D } from '@react-three/drei';
import { useCurrentSheet } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RoboName = () => {

    // Create shader material for gradient
    const gradientMaterial = useMemo(() => {
        return new THREE.ShaderMaterial({
            uniforms: {
                topColor: { value: new THREE.Color(0x00ff88) }, // Green
                bottomColor: { value: new THREE.Color(0x0088ff) }, // Blue
                offset: { value: 33 },
                exponent: { value: 0.6 }
            },
            vertexShader: `
                varying vec3 vWorldPosition;
                void main() {
                    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                    vWorldPosition = worldPosition.xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 topColor;
                uniform vec3 bottomColor;
                uniform float offset;
                uniform float exponent;
                varying vec3 vWorldPosition;
                void main() {
                    float h = normalize(vWorldPosition + offset).y;
                    vec3 color = mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0));
                    gl_FragColor = vec4(color, 1.0);
                }
            `,
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
                position={[-0.323, 3.092, -6.05812]}
                rotation={[0, 0 , 0]}
                visible={true}
            >
               <Center>
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.1223}
                        height={0.041}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.00002}
                        bevelSize={0.01}
                        bevelOffset={0}
                        bevelSegments={1}
                        letterSpacing={0.03}
                    >
                        A I I F
                        <primitive object={gradientMaterial} />
                    </Text3D>
                </Center>
            </group>
        </group>
    );
};

export default RoboName;