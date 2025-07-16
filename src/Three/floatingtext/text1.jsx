import React, { useState } from 'react';
import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
import { useCurrentSheet } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';

const TextOne = () => {
    const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
    const sheet = useCurrentSheet();
    const [currentDuration, setCurrentDuration] = useState(0);

    useFrame(() => {
        if (sheet) {
            setCurrentDuration(sheet.sequence.position);
        }
    });

    // Only render if currentDuration is between 16.00 and 17.50
    if (currentDuration < 16.0 || currentDuration > 17.5) return null;

    return (
        <group>
            <group
                position={[0, 3.5, -9.7]}
                rotation={[0, 5.1 , 0]}
                visible={true}
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
                        Big Dreams.
                        <meshMatcapMaterial color="orange" matcap={matcapTexture} />
                    </Text3D>
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
                        position={[0, -0.4, 0]}
                    >
                        Small Towns.
                        <meshMatcapMaterial color="orange" matcap={matcapTexture} />
                    </Text3D>
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
                        position={[0, -0.8, 0]}
                    >
                        Global Impact. 
                        <meshMatcapMaterial color="orange" matcap={matcapTexture} />
                    </Text3D>
                </Center>
            </group>
        </group>
    );
};

export default TextOne;