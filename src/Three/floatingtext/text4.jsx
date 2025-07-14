import React, { useRef } from 'react';
import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
import { useCurrentSheet } from '@theatre/r3f';
import { val } from '@theatre/core';
import { useFrame } from '@react-three/fiber';

const TextFour = () => {
    const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
    const sheet = useCurrentSheet();
    const groupRef = useRef();

    useFrame(() => {
        if (!sheet || !groupRef.current) return;
        const position = sheet.sequence.position;
        const total = val(sheet.sequence.pointer.length);
        const percent = position / total;
        const shouldBeVisible = percent >= 0.81 && percent <= 0.84;
        groupRef.current.visible = shouldBeVisible;
    });

    return (
        <group
            ref={groupRef}
            position={[0, 2.5, -40.7]}
            rotation={[0, 0 , 0]}
        >
            <Center>
                <Text3D
                    font="/fonts/Poppins_Regular.json"  
                    size={0.2}
                    height={0.1}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.00002}
                    bevelSize={0.01}
                    bevelOffset={0}
                    bevelSegments={1}
                    letterSpacing={0.05}
                >
                    Testing Text Four
                    <meshMatcapMaterial color="blue" matcap={matcapTexture} />
                </Text3D>
            </Center>
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 1, 1]} intensity={1} />
            {/* <axesHelper args={[2]} /> */}
        </group>
    );
};

export default TextFour;