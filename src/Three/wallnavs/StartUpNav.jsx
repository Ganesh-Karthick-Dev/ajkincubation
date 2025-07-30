import React, { useRef, useMemo, useState } from 'react';
import { Text3D, Center, Outlines } from '@react-three/drei';
import * as THREE from 'three';
import { useRouter } from 'next/navigation';
import { useCurrentSheet } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';

const CARD_WIDTH = 6;
const CARD_HEIGHT = 2.5;
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

const StartUpNav = () => {
    const router = useRouter();
    const groupRef = useRef();
    const gradientTexture = useGradientTexture();
    const [isHovered, setIsHovered] = useState(false);

    const handleStartups = () => {
        router.push("/startups");
    };

    const sheet = useCurrentSheet();
    const [currentDuration, setCurrentDuration] = useState(0);
    

    useFrame(() => {
        if (sheet) {
            setCurrentDuration(sheet.sequence.position);
        }
    });

    // Only render if currentDuration is between 16.00 and 17.50
    if (currentDuration >= 38.06) return null;

    return (
        <group
            ref={groupRef}
            position={[-1.1, 2.1, -66.7]}   
            rotation={[0, 0, 0]}
            onClick={handleStartups}
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
        >
            {/* Black border plane (slightly larger) */}
            {/* <mesh position={[1, 0.3, -0.01]}>
                <planeGeometry args={[CARD_WIDTH + BORDER_SIZE, CARD_HEIGHT + BORDER_SIZE]} />
                <meshBasicMaterial color="black" />
            </mesh> */}
            {/* Main card plane with gradient and gloss */}
            {/* <mesh position={[1, 0.3, 0]}>
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
            </mesh> */}
            {/* Centered 3D Text with TV broadcast look */}
            <Center position={[1, 0.3, 0.08]} onClick={handleStartups} style={{cursor: 'pointer'}}>
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
                >
                    StartupsTN
                    <meshStandardMaterial 
                        color={isHovered ? "#0066ff" : "#e6f0ff"} 
                        emissive={isHovered ? "#0044cc" : "#b3d1ff"} 
                        emissiveIntensity={2.5} 
                    />
                    <Outlines thickness={2.07} color={isHovered ? "white" : "yellow"} />
                </Text3D>
            </Center>
        </group>
    );
};

export default StartUpNav;