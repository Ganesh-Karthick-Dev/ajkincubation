import React, { useState } from 'react';
import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
import { useCurrentSheet } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';

const DoorTwoText = () => {
    const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
    const sheet = useCurrentSheet();
    const [currentDuration, setCurrentDuration] = useState(0);

    useFrame(() => {
        if (sheet) {
            setCurrentDuration(sheet.sequence.position);
        }
    });

    // Only render if currentDuration is between 16.00 and 17.50
    // if (currentDuration < 21.16 || currentDuration > 30.41) return null;

    return (
        <group>
            <group
                position={[0, 2.2, 26.7]}
                rotation={[0, 0 , 0]}
                visible={true}
            >
               <Center>
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.6123}
                        height={0}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.00002}
                        bevelSize={0.01}
                        bevelOffset={0}
                        bevelSegments={1}
                        letterSpacing={0.03}
                    >
                        Action
                        {/* <meshMatcapMaterial color="white" matcap={matcapTexture} /> */}
                    </Text3D>
                </Center>
            </group>
        </group>
    );
};

export default DoorTwoText;