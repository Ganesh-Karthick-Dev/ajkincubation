import React, { useRef } from 'react';
import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
import { useCurrentSheet } from '@theatre/r3f';
import { val } from '@theatre/core';
import { useFrame } from '@react-three/fiber';
import { useRouter } from 'next/navigation';

const ContactUsNav = () => {
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
            // console.log("About");
            router.push("/contact");
        }

    return (
        <group
            ref={groupRef}
            position={[5.332, 2.9, -50.5]}
            rotation={[0.0123,-2.456,0.0143]}
        >
            <Center>
                {/* Card background */}
                <mesh position={[2.523, 0.3, -0.0001]} scale={[1.253, 1.123, 1.223]}>
                    <planeGeometry args={[5, 1.5]} />
                    <meshStandardMaterial color="black" />
                </mesh>
                {/* 3D Text */}
                <Text3D
                    font={"/fonts/Poppins_Regular.json"}
                    size={0.433}
                    height={0.1}
                    // onClick={handleAbout}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.02}
                    bevelSize={0.01}
                    bevelOffset={0}
                    bevelSegments={5}
                >
                    ContactUs
                    <meshStandardMaterial color="white" />
                </Text3D>
            </Center>
        </group>
    );
};

export default ContactUsNav