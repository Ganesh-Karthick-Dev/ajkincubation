import React, { useRef } from 'react';
import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
import { useCurrentSheet } from '@theatre/r3f';
import { val } from '@theatre/core';
import { useFrame } from '@react-three/fiber';
import { useRouter } from 'next/navigation';

const AboutNav = () => {
    const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
    const sheet = useCurrentSheet();
    const groupRef = useRef();
    const router = useRouter();
    // useFrame(() => {
    //     if (!sheet || !groupRef.current) return;
    //     const position = sheet.sequence.position;
    //     const total = val(sheet.sequence.pointer.length);
    //     const percent = position / total;
    //     const shouldBeVisible = percent >= 0.53 && percent <= 0.58;
    //     groupRef.current.visible = shouldBeVisible;
    // });


        const handleAbout = () => {
            console.log("About");
            router.push("/about");
        }

    return (
        <group
            ref={groupRef}
            position={[-7.832, 3.0, -52.5]}
            rotation={[0.053, 2.550 , -0.029]}
        >
            <Center>
                {/* Card background */}
                <mesh position={[1, 0.3, -0.0001]} scale={[0.863, 1.123, 0.123]}>
                    <planeGeometry args={[5, 1.5]} />
                    <meshStandardMaterial color="black" />
                </mesh>
                {/* 3D Text */}
                <Text3D
                    font={"/fonts/Poppins_Regular.json"}
                    size={0.4}
                    height={0.1}
                    // onClick={handleAbout}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.02}
                    bevelSize={0.01}
                    bevelOffset={0}
                    bevelSegments={5}
                >
                    About
                    <meshStandardMaterial color="white" />
                </Text3D>
            </Center>
        </group>
    );
};

export default AboutNav;