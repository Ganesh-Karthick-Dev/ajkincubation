import React, { useRef } from 'react';
import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LaserLogo = () => {
    const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
    const groupRef = useRef();
    const laserTopGroup = useRef();
    const laserBottomGroup = useRef();
    const glitterRef = useRef();
    const highlightRef = useRef();
    const timeRef = useRef(0);

    // --- Sizing factor ---
    const SCALE = 1.4;

    // --- Particles Only (no clouds) ---
    const particleCount = 18;
    const particleRefs = useRef([]);
    if (particleRefs.current.length !== particleCount) particleRefs.current = Array(particleCount).fill().map(() => React.createRef());

    // --- Memory Pulse Waves ---
    const memoryPulseCount = 4;
    const memoryPulseRefs = useRef({ top: [], bottom: [] });
    if (memoryPulseRefs.current.top.length !== memoryPulseCount) memoryPulseRefs.current.top = Array(memoryPulseCount).fill().map(() => React.createRef());
    if (memoryPulseRefs.current.bottom.length !== memoryPulseCount) memoryPulseRefs.current.bottom = Array(memoryPulseCount).fill().map(() => React.createRef());

    // --- Memory Wave Lines ---
    const waveSegments = 32;
    const topLineRef = useRef();
    const bottomLineRef = useRef();
    // Precompute X positions for the wave
    const waveXs = Array.from({ length: waveSegments }, (_, i) => -0.8 + (1.6 * i) / (waveSegments - 1));

    useFrame((state, delta) => {
        timeRef.current += delta;
        const t = Math.sin(timeRef.current * 2) * 0.3 * SCALE;
        // Top and bottom lines are now straight, no wave
        // Animate memory pulse waves
        const pulseDuration = 1.2;
        for (let i = 0; i < memoryPulseCount; i++) {
            // Each pulse is offset in time
            const pulseTime = (timeRef.current - i * (pulseDuration / memoryPulseCount)) % pulseDuration;
            const progress = pulseTime / pulseDuration;
            // Animate top
            if (memoryPulseRefs.current.top[i].current) {
                const dir = progress < 0.5 ? 1 : -1; // Outward from center, then reset
                const localProgress = dir === 1 ? progress * 2 : (1 - progress) * 2;
                memoryPulseRefs.current.top[i].current.position.x = dir * localProgress * 0.8 * SCALE;
                memoryPulseRefs.current.top[i].current.position.y = 0.5 * SCALE;
                memoryPulseRefs.current.top[i].current.material.opacity = 0.7 * (1 - localProgress);
            }
            // Animate bottom
            if (memoryPulseRefs.current.bottom[i].current) {
                const dir = progress < 0.5 ? 1 : -1;
                const localProgress = dir === 1 ? progress * 2 : (1 - progress) * 2;
                memoryPulseRefs.current.bottom[i].current.position.x = dir * localProgress * 0.8 * SCALE;
                memoryPulseRefs.current.bottom[i].current.position.y = -0.7 * SCALE;
                memoryPulseRefs.current.bottom[i].current.material.opacity = 0.7 * (1 - localProgress);
            }
        }
        if (laserTopGroup.current) {
            laserTopGroup.current.position.y = 0.5 * SCALE + t;
        }
        if (laserBottomGroup.current) {
            laserBottomGroup.current.position.y = -0.7 * SCALE - t;
        }
        if (glitterRef.current && glitterRef.current.material) {
            let mat = glitterRef.current.material;
            if (Array.isArray(mat)) mat = mat[0];
            if (mat && mat.emissive) {
                const flicker = 0.5 + 0.5 * Math.sin(timeRef.current * 10 + Math.sin(timeRef.current * 2));
                mat.emissive.setHSL(0.55 + flicker * 0.2, 1, 0.6 + flicker * 0.1);
                mat.emissiveIntensity = 1.2 + flicker * 1.2;
            }
        }
        // Animate highlight sweep
        let scanX = 0;
        if (highlightRef.current) {
            scanX = Math.sin(timeRef.current * 1.5) * 0.7 * SCALE;
            highlightRef.current.position.x = scanX;
        }
        // Animate particles: scatter from scan line
        particleRefs.current.forEach((ref, i) => {
            if (ref.current) {
                // Each particle has a base angle and radius
                const angle = (i / particleCount) * Math.PI * 2;
                // Scatter outward from scanX, with a burst effect
                const burst = 0.5 + 0.5 * Math.sin(timeRef.current * 2 + i);
                const r = 0.15 + burst * 0.45;
                // Particles originate from the scan line
                ref.current.position.x = scanX + Math.cos(angle) * r * (0.7 + 0.3 * Math.sin(timeRef.current + i));
                ref.current.position.y = Math.sin(angle) * r * (0.7 + 0.3 * Math.cos(timeRef.current * 1.2 + i));
                ref.current.position.z = 0.13 + Math.sin(timeRef.current * 0.7 + i) * 0.05;
                // Fade out as they move away from scan line
                if (ref.current.material) {
                    ref.current.material.opacity = 0.7 - 0.5 * burst;
                }
            }
        });
    });

    return (
        <group
            ref={groupRef}
            position={[-0.0623, 2.7 * SCALE, -58.0]}
            rotation={[0, 0 , 0]}
        >
            {/* Top Straight Line */}
            <mesh position={[0, 0.5 * SCALE, 0]}>
                <planeGeometry args={[1.6 * SCALE, 0.03 * SCALE]} />
                <meshBasicMaterial
                    color={0x00ffff}
                    transparent
                    opacity={0.45}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
            {/* Bottom Straight Line */}
            <mesh position={[0, -0.7 * SCALE, 0]}>
                <planeGeometry args={[1.6 * SCALE, 0.03 * SCALE]} />
                <meshBasicMaterial
                    color={0x00ffff}
                    transparent
                    opacity={0.45}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>
            {/* Top Memory Pulses */}
            {memoryPulseRefs.current.top.map((ref, i) => (
                <mesh
                    ref={ref}
                    key={"top-pulse-" + i}
                    position={[0, 0.5 * SCALE, 0.01 * SCALE]}
                >
                    <planeGeometry args={[0.22 * SCALE, 0.06 * SCALE]} />
                    <meshBasicMaterial
                        color={0x00ffff}
                        transparent
                        opacity={0.7}
                        blending={THREE.AdditiveBlending}
                        depthWrite={false}
                    />
                </mesh>
            ))}
            {/* Bottom Memory Pulses */}
            {memoryPulseRefs.current.bottom.map((ref, i) => (
                <mesh
                    ref={ref}
                    key={"bottom-pulse-" + i}
                    position={[0, -0.7 * SCALE, 0.01 * SCALE]}
                >
                    <planeGeometry args={[0.22 * SCALE, 0.06 * SCALE]} />
                    <meshBasicMaterial
                        color={0x00ffff}
                        transparent
                        opacity={0.7}
                        blending={THREE.AdditiveBlending}
                        depthWrite={false}
                    />
                </mesh>
            ))}
            <Center>
                <group>
                    {/* Animated highlight sweep */}
                    <mesh
                        ref={highlightRef}
                        position={[0, 0, 0.07 * SCALE]}
                    >
                        <planeGeometry args={[0.35 * SCALE, 0.7 * SCALE]} />
                        <meshBasicMaterial
                            color={0xffffff}
                            transparent
                            opacity={0.25}
                            blending={THREE.AdditiveBlending}
                        />
                    </mesh>
                    {/* Richer AIIF: layered text for outline and glow */}
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.32 * SCALE}
                        height={0.13 * SCALE}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.0001 * SCALE}
                        bevelSize={0.02 * SCALE}
                        bevelOffset={0}
                        bevelSegments={2}
                        letterSpacing={0.05 * SCALE}
                        position={[0, -0.2 * SCALE, -0.03 * SCALE]}
                    >
                        AIIF
                        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1.5} metalness={0.7} roughness={0.2} />
                    </Text3D>
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.3 * SCALE}
                        height={0.1 * SCALE}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.00002 * SCALE}
                        bevelSize={0.01 * SCALE}
                        bevelOffset={0}
                        bevelSegments={1}
                        letterSpacing={0.05 * SCALE}
                        position={[0, -0.2 * SCALE, 0]}
                        ref={glitterRef}
                    >
                        AIIF
                        <meshMatcapMaterial color="orange" matcap={matcapTexture} />
                    </Text3D>
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.3 * SCALE}
                        height={0.1 * SCALE}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.00002 * SCALE}
                        bevelSize={0.01 * SCALE}
                        bevelOffset={0}
                        bevelSegments={1}
                        letterSpacing={0.05 * SCALE}
                        position={[0, -0.2 * SCALE, 0.03 * SCALE]}
                    >
                        AIIF
                        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.7} metalness={0.2} roughness={0.7} transparent opacity={0.18} />
                    </Text3D>
                    {/* Scattering particles from scan line */}
                    {particleRefs.current.map((ref, i) => (
                        <mesh
                            ref={ref}
                            key={i}
                            position={[0, 0, 0.13 * SCALE]}
                        >
                            <sphereGeometry args={[(0.014 + (i % 3) * 0.006) * SCALE, 8, 8]} />
                            <meshBasicMaterial
                                color={0x00ffff}
                                transparent
                                opacity={0.7}
                                blending={THREE.AdditiveBlending}
                                depthWrite={false}
                            />
                        </mesh>
                    ))}
                </group>
            </Center>
        </group>
    );
};

export default LaserLogo;