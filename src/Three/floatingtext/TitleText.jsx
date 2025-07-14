import React, { useRef } from 'react';
import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
import { useCurrentSheet } from '@theatre/r3f';
import { val } from '@theatre/core';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const ANIM_SPEED = 0.2;
const BASE_Y = 2.5;
const HIDDEN_Y = 3.5; // Hidden position (BASE_Y + 1)

const TitleText = () => {

    // const matcapTexture = useLoader(TextureLoader, '/matcaps/matcap-revised.jpg');

    const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");

    const sheet = useCurrentSheet();
    const groupRef = useRef();
    const animationState = useRef('hidden'); // 'hidden' | 'showing' | 'visible' | 'hiding'
    const lastPercentRef = useRef(0);

    useFrame(() => {
        if (!sheet || !groupRef.current) return;
        
        const position = sheet.sequence.position;
        const total = val(sheet.sequence.pointer.length);
        const percent = position / total;
        const scrollDirection = percent > lastPercentRef.current ? 'forward' : 'backward';
        lastPercentRef.current = percent;

        // Determine if we're in the visible range
        const inRange = percent >= 0.47 && percent <= 0.52;

        switch (animationState.current) {
            case 'hidden':
                if (inRange) {
                    if (scrollDirection === 'forward') {
                        // Animate in from bottom
                        animationState.current = 'showing';
                        groupRef.current.position.y = HIDDEN_Y;
                        groupRef.current.visible = true;
                    } else if (scrollDirection === 'backward') {
                        // Immediately show when scrolling backward into range
                        animationState.current = 'visible';
                        groupRef.current.position.y = BASE_Y;
                        groupRef.current.visible = true;
                    }
                }
                break;
                
            case 'showing':
                // Animate upward to visible position
                groupRef.current.position.y -= (groupRef.current.position.y - BASE_Y) * ANIM_SPEED;
                if (Math.abs(groupRef.current.position.y - BASE_Y) < 0.01) {
                    groupRef.current.position.y = BASE_Y;
                    animationState.current = 'visible';
                }
                break;
                
            case 'visible':
                if (!inRange) {
                    if (scrollDirection === 'backward' && percent < 0.47) {
                        // Animate out to bottom
                        animationState.current = 'hiding';
                    }
                    else if (scrollDirection === 'forward' && percent > 0.50) {
                        // Hide immediately when scrolling forward past 50%
                        groupRef.current.visible = false;
                        animationState.current = 'hidden';
                    }
                }
                break;
                
            case 'hiding':
                // Animate downward to hidden position
                groupRef.current.position.y += (HIDDEN_Y - groupRef.current.position.y) * ANIM_SPEED;
                if (Math.abs(groupRef.current.position.y - HIDDEN_Y) < 0.01) {
                    groupRef.current.position.y = HIDDEN_Y;
                    groupRef.current.visible = false;
                    animationState.current = 'hidden';
                }
                break;
        }
    });

    return (
        <group
            ref={groupRef}
            position={[-0.1, HIDDEN_Y, 12.7]}
            rotation={[0, 0, 0]}
            scale={[0.7, 1, 1]}
            visible={false}
        >
            <Center>
                <Text3D
                    font="/fonts/Poppins_Regular.json"
                    size={0.23}
                    height={0.04}
                    curveSegments={3}
                    bevelEnabled
                    bevelThickness={0.00002}
                    bevelSize={0.01}
                    bevelOffset={0}
                    bevelSegments={1}
                    letterSpacing={0.05}
                    maxWidth={10}
                    lineHeight={0.8}
                >
                    Launch Your Startup Before You Graduate.
                    <meshMatcapMaterial color="orange" matcap={matcapTexture} />
                </Text3D>
                <Text3D
                    font="/fonts/Poppins_Regular.json"
                    size={0.23}
                    height={0.04}
                    curveSegments={3}
                    bevelEnabled
                    bevelThickness={0.00002}
                    bevelSize={0.01}
                    bevelOffset={0}
                    bevelSegments={1}
                    letterSpacing={0.05}
                    maxWidth={10}
                    lineHeight={0.8}
                    position={[0, -0.4, 0]}
                >
                    We Turn Ideas into Impact.
                    <meshMatcapMaterial color="orange" matcap={matcapTexture} />
                </Text3D>
            </Center>
        </group>
    );
};

export default TitleText;