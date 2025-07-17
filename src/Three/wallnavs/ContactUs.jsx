// import React, { useRef } from 'react';
// import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
// import { useCurrentSheet } from '@theatre/r3f';
// import { val } from '@theatre/core';
// import { useFrame } from '@react-three/fiber';
// import { useRouter } from 'next/navigation';

// const ContactUsNav = () => {
//     const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
//     const sheet = useCurrentSheet();
//     const groupRef = useRef();
//     const router = useRouter();
//     // useFrame(() => {
//     //     if (!sheet || !groupRef.current) return;
//     //     const position = sheet.sequence.position;
//     //     const total = val(sheet.sequence.pointer.length);
//     //     const percent = position / total;
//     //     const shouldBeVisible = percent >= 0.53 && percent <= 0.58;
//     //     groupRef.current.visible = shouldBeVisible;
//     // });


//         const handleAbout = () => {
//             // console.log("About");
//             router.push("/contact");
//         }

//     return (
//         <group
//             ref={groupRef}
//             position={[5.332, 2.9, -50.5]}
//             rotation={[0.0123,-2.456,0.0143]}
//         >
//             <Center>
//                 {/* Card background */}
//                 <mesh position={[2.523, 0.3, -0.0001]} scale={[1.253, 1.123, 1.223]}>
//                     <planeGeometry args={[5, 1.5]} />
//                     <meshStandardMaterial color="black" />
//                 </mesh>
//                 {/* 3D Text */}
//                 <Text3D
//                     font={"/fonts/Poppins_Regular.json"}
//                     size={0.433}
//                     height={0.1}
//                     // onClick={handleAbout}
//                     curveSegments={12}
//                     bevelEnabled
//                     bevelThickness={0.02}
//                     bevelSize={0.01}
//                     bevelOffset={0}
//                     bevelSegments={5}
//                 >
//                     ContactUs
//                     <meshStandardMaterial color="white" />
//                 </Text3D>
//             </Center>
//         </group>
//     );
// };

// export default ContactUsNav



import React, { useRef, useEffect, useMemo } from 'react';
import { useThree } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { Text3D, Center } from '@react-three/drei';
import { useRouter } from 'next/navigation';

const CARD_WIDTH = 5;
const CARD_HEIGHT = 2.3;
const BORDER_SIZE = 0.04;

// Helper to create a blue-to-green gradient texture
function useGradientTexture(width = 512, height = 256) {
    return useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, '#7ad1ff'); // blue
        gradient.addColorStop(1, '#caffc2'); // greenish
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        // Add a subtle gloss/frosted effect
        ctx.globalAlpha = 0.15;
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc(width * 0.2 + i * 60, height * 0.3 + i * 10, 40 + i * 10, 0, 2 * Math.PI);
            ctx.fillStyle = '#fff';
            ctx.fill();
        }
        return new THREE.CanvasTexture(canvas);
    }, [width, height]);
}

const ContactUsNav = () => {
    const router = useRouter();
    const groupRef = useRef();
    const gradientTexture = useGradientTexture();

    const handleService = () => {
        console.log("Service");
        router.push("/service");
    };

    return (
        <group
            ref={groupRef}
            position={[6.332, 2.1, -51.3]}
            rotation={[0.0223,-2.496,0.0143]}
            onClick={handleService}
        >
            {/* Black border plane (slightly larger) */}
            <mesh position={[1, 0.3, -0.01]}>
                <planeGeometry args={[CARD_WIDTH + BORDER_SIZE, CARD_HEIGHT + BORDER_SIZE]} />
                <meshBasicMaterial color="black" />
            </mesh>
            {/* Main card plane with gradient and gloss */}
            <mesh position={[1, 0.3, 0]}>
                <planeGeometry args={[CARD_WIDTH, CARD_HEIGHT]} />
                <meshPhysicalMaterial
                    map={gradientTexture}
                    roughness={0.25}
                    clearcoat={0.6}
                    clearcoatRoughness={0.15}
                    metalness={0.1}
                    reflectivity={0.25}
                    transparent={false}
                />
            </mesh>
            {/* Centered 3D Text with TV broadcast look, stacked vertically */}
            <Center position={[1.023, 0.393, 0.08]}>
          
                <Text3D
                    font={"/fonts/Poppins_Regular.json"}
                    size={0.5}
                    height={0}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.02}
                    bevelSize={0.01}
                    bevelOffset={0}
                    bevelSegments={5}
                    position={[1.223, -0.323, 0]}
                >
                            Contact Us
                    <meshStandardMaterial color="#e6f0ff" emissive="#b3d1ff" emissiveIntensity={2.5} />
                </Text3D>
          
            </Center>
        </group>
    );
};

export default ContactUsNav;