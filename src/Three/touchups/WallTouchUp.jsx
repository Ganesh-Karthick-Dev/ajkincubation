


import React, { useRef } from 'react';
import { Center, Outlines, Text3D } from '@react-three/drei';
import { useCurrentSheet } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';

const WallTouchUp = () => {


    return (
        <group>
            <group
                 position={[0, 3, -26.3]}
                rotation={[0, 0 , 0]}
                visible={true}
            >
                <mesh>
                    <boxGeometry args={[4, 2, 0.5]} />
                    <meshStandardMaterial color="#e4d5b7" />
                </mesh>
            </group>
        </group>
    );
};

export default WallTouchUp;