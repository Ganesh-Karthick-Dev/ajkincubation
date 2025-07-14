import React, { useRef } from 'react';
import { Center, Text3D, useMatcapTexture, Html } from '@react-three/drei';
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
            position={[-5.232, 3.0, -50.2]}
            rotation={[0.083, 2.540 , -0.089]}
        >
            <Center>
                <Html
                 center
                 occlude
                 distanceFactor={0.8}
                 transform
                 >
                    <div 
                    onClick={handleAbout}
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '30rem',
                        color: '#4e73ff',
                        letterSpacing: '0.05em',
                        fontWeight: 'bold',
                        // textShadow: '0 2px 8px #CB4E88',
                        background: 'white',
                        padding: '0.5em 1em',
                        borderRadius: '0.5em',
                        border: '1px solid #4e73ff',
                        // boxShadow: '0 2px 12px #F384C3'
                    }}>
                        About
                    </div>
                </Html>
            </Center>
        </group>
    );
};

export default AboutNav;