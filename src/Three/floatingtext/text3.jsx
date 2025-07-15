import React, { useRef } from 'react';
import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
import { useCurrentSheet } from '@theatre/r3f';
import { val } from '@theatre/core';
import { useFrame } from '@react-three/fiber';

const ANIM_SPEED = 0.2;
const BASE_Y = 2.5;
const HIDDEN_Y = 2.7; // BASE_Y + 1

const TextThree = () => {
    const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
    const sheet = useCurrentSheet();
    const groupRef = useRef();
    const animationState = useRef('hidden');
    const lastPercentRef = useRef(0);

    useFrame(() => {
        if (!sheet || !groupRef.current) return;
        const position = sheet.sequence.position;
        const total = val(sheet.sequence.pointer.length);
        const percent = position / total;
        const scrollDirection = percent > lastPercentRef.current ? 'forward' : 'backward';
        lastPercentRef.current = percent;
        const inRange = percent >= 0.79 && percent <= 0.83;

        switch (animationState.current) {
            case 'hidden':
                if (inRange) {
                    if (scrollDirection === 'forward') {
                        animationState.current = 'showing';
                        groupRef.current.position.y = HIDDEN_Y;
                        groupRef.current.visible = true;
                    } else if (scrollDirection === 'backward') {
                        animationState.current = 'visible';
                        groupRef.current.position.y = BASE_Y;
                        groupRef.current.visible = true;
                    }
                }
                break;
            case 'showing':
                groupRef.current.position.y -= (groupRef.current.position.y - BASE_Y) * ANIM_SPEED;
                if (Math.abs(groupRef.current.position.y - BASE_Y) < 0.01) {
                    groupRef.current.position.y = BASE_Y;
                    animationState.current = 'visible';
                }
                break;
            case 'visible':
                if (!inRange) {
                    if (scrollDirection === 'backward' && percent < 0.79) {
                        animationState.current = 'hiding';
                    } else if (scrollDirection === 'forward' && percent > 0.83) {
                        groupRef.current.visible = false;
                        animationState.current = 'hidden';
                    }
                }
                break;
            case 'hiding':
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
            position={[-0.623, HIDDEN_Y, -35.7]}
            rotation={[0, 0 , 0]}
            visible={false}
        >
            <Center>
                <Text3D
                    font="/fonts/Poppins_Regular.json"
                    size={0.15}
                    height={0.1}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.00002}
                    bevelSize={0.01}
                    bevelOffset={0}
                    bevelSegments={1}
                    letterSpacing={0.03}
                >
                    Testing Text Three
                    <meshMatcapMaterial color="orange" matcap={matcapTexture} />
                </Text3D>
            </Center>
        </group>
    );
};

export default TextThree;