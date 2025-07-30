import React, { useRef } from 'react';
import { Center, Text3D } from '@react-three/drei';
import { useCurrentSheet } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';

const TextOne = () => {
    const sheet = useCurrentSheet();
    const currentDurationRef = useRef(0);
    const shouldRenderRef = useRef(false);

    useFrame(() => {
        if (sheet) {
            currentDurationRef.current = sheet.sequence.position;
            shouldRenderRef.current = currentDurationRef.current >= 16.16 && currentDurationRef.current <= 17.5;
        }
    });

    // Only render if currentDuration is between 16.16 and 17.5
    if (!shouldRenderRef.current) return null;

    return (
        <group>
            <group
                position={[-2, 3.1, -5.3]}
                rotation={[0, 4.412 , 0]}
                visible={true}
            >
               <Center>
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.1123}
                        height={0}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.00002}
                        bevelSize={0.01}
                        bevelOffset={0}
                        bevelSegments={1}
                        letterSpacing={0.03}
                    >
                        Big Dreams.
                        {/* <meshMatcapMaterial color="white" matcap={matcapTexture} /> */}
                    </Text3D>
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.1123}
                        height={0}
                        curveSegments={12}
                        bevelEnabled    
                        bevelThickness={0.00002}
                        bevelSize={0.01}
                        bevelOffset={0}
                        bevelSegments={1}
                        letterSpacing={0.03}
                        position={[0, -0.3, 0]}
                    >
                        Small Towns.
                        {/* <meshMatcapMaterial color="white" matcap={matcapTexture} /> */}
                    </Text3D>
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.1123}
                        height={0}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.00002}
                        bevelSize={0.01}
                        bevelOffset={0}
                        bevelSegments={1}
                        letterSpacing={0.03}
                        position={[0, -0.6, 0]}
                    >
                        Global Impact. 
                        {/* <meshMatcapMaterial color="white" matcap={matcapTexture} /> */}
                    </Text3D>
                </Center>
            </group>
        </group>
    );
};

export default TextOne;