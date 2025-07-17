import React, { useRef, useMemo } from 'react';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';
import { useRouter } from 'next/navigation';

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

    const handleStartups = () => {
        router.push("/startups");
    };

    return (
        <group
            ref={groupRef}
            position={[-1.1, 2.1, -66.7]}
            rotation={[0, 0, 0]}
            onClick={handleStartups}
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
                    <meshStandardMaterial color="#e6f0ff" emissive="#b3d1ff" emissiveIntensity={2.5} />
                </Text3D>
            </Center>
        </group>
    );
};

export default StartUpNav;