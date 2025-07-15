import React, { useRef } from 'react';
import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
import { useCurrentSheet } from '@theatre/r3f';
import { val } from '@theatre/core';
import { useFrame } from '@react-three/fiber';
import { useRouter } from 'next/navigation';

const StartUpNav = () => {
    const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
    // const sheet = useCurrentSheet();
    const groupRef = useRef();
    const router = useRouter();



        const handleAbout = () => {
            // console.log("About");
            router.push("/startups");
        }

    return (
        <group
            ref={groupRef}
            position={[0, 3.110, -60.7]}
            rotation={[0, 0 , 0]}
        >
            <Center>
                {/* Card background */}
                <mesh position={[3, 0.3, -0.0001]} scale={[1.253, 1, 1]}>
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
                    StartupsTN
                    <meshStandardMaterial color="white" />
                </Text3D>
                <axesHelper args={[2000]} />
            </Center>
        </group>
    );
};

export default React.memo(StartUpNav)