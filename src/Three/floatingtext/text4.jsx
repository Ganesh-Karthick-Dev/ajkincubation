// import React, { useRef } from 'react';
// import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
// import { useCurrentSheet } from '@theatre/r3f';
// import { val } from '@theatre/core';
// import { useFrame } from '@react-three/fiber';

// const ANIM_SPEED = 0.2;
// const BASE_Y = 2.5;
// const HIDDEN_Y = 2.4; // BASE_Y + 1

// const TextFour = () => {
//     const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
//     const sheet = useCurrentSheet();
//     const groupRef = useRef();
//     const animationState = useRef('hidden');
//     const lastPercentRef = useRef(0);

//     useFrame(() => {
//         if (!sheet || !groupRef.current) return;
//         const position = sheet.sequence.position;
//         const total = val(sheet.sequence.pointer.length);
//         const percent = position / total;
//         const scrollDirection = percent > lastPercentRef.current ? 'forward' : 'backward';
//         lastPercentRef.current = percent;
//         const inRange = percent >= 0.81 && percent <= 0.84;

//         switch (animationState.current) {
//             case 'hidden':
//                 if (inRange) {
//                     if (scrollDirection === 'forward') {
//                         animationState.current = 'showing';
//                         groupRef.current.position.y = HIDDEN_Y;
//                         groupRef.current.visible = true;
//                     } else if (scrollDirection === 'backward') {
//                         animationState.current = 'visible';
//                         groupRef.current.position.y = BASE_Y;
//                         groupRef.current.visible = true;
//                     }
//                 }
//                 break;
//             case 'showing':
//                 groupRef.current.position.y -= (groupRef.current.position.y - BASE_Y) * ANIM_SPEED;
//                 if (Math.abs(groupRef.current.position.y - BASE_Y) < 0.01) {
//                     groupRef.current.position.y = BASE_Y;
//                     animationState.current = 'visible';
//                 }
//                 break;
//             case 'visible':
//                 if (!inRange) {
//                     if (scrollDirection === 'backward' && percent < 0.81) {
//                         animationState.current = 'hiding';
//                     } else if (scrollDirection === 'forward' && percent > 0.84) {
//                         groupRef.current.visible = false;
//                         animationState.current = 'hidden';
//                     }
//                 }
//                 break;
//             case 'hiding':
//                 groupRef.current.position.y += (HIDDEN_Y - groupRef.current.position.y) * ANIM_SPEED;
//                 if (Math.abs(groupRef.current.position.y - HIDDEN_Y) < 0.01) {
//                     groupRef.current.position.y = HIDDEN_Y;
//                     groupRef.current.visible = false;
//                     animationState.current = 'hidden';
//                 }
//                 break;
//         }
//     });

//     return (
//         <group
//             ref={groupRef}
//             position={[-1.2124, HIDDEN_Y, -40.7]}
//             rotation={[0, 0 , 0]}
//             visible={false}
//         >
//              <Center>
//                 <Text3D
//                     font="/fonts/Poppins_Regular.json"
//                     size={0.1593}
//                     height={0.1}
//                     curveSegments={12}
//                     bevelEnabled
//                     bevelThickness={0.00002}
//                     bevelSize={0.01}
//                     bevelOffset={0}
//                     bevelSegments={1}
//                     letterSpacing={0.05}
//                 >
//                     Mentors Who Move You Forward 
//                     <meshMatcapMaterial color="orange" matcap={matcapTexture} />
//                 </Text3D>
//                 <Text3D
//                     font="/fonts/Poppins_Regular.json"
//                     size={0.120}
//                     height={0}
//                     curveSegments={12}
//                     bevelEnabled
//                     bevelThickness={0.00002}
//                     bevelSize={0.01}
//                     bevelOffset={0}
//                     bevelSegments={1}
//                     letterSpacing={0.03}
//                     position={[0, -0.4, 0]}
                    
//                 >
//                     1-on-1 sessions with startup experts
//                     <meshMatcapMaterial color="black" matcap={matcapTexture} />
//                 </Text3D>
//                 <Text3D
//                     font="/fonts/Poppins_Regular.json"
//                     size={0.120}
//                     height={0}
//                     curveSegments={12}
//                     bevelEnabled
//                     bevelThickness={0.00002}
//                     bevelSize={0.01}
//                     bevelOffset={0}
//                     bevelSegments={1}
//                     letterSpacing={0.03}
//                     position={[0, -0.7, 0]}
                    
//                 >
//                    to sharpen your pitch, product, and path.
//                     <meshMatcapMaterial color="black" matcap={matcapTexture} />
//                 </Text3D>
//             </Center>
//         </group>
//     );
// };

// export default TextFour;

import React, { useState } from 'react';
import { Center, Outlines, Text3D, useMatcapTexture } from '@react-three/drei';
import { useCurrentSheet } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';

const TextFour = () => {
    const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
    const sheet = useCurrentSheet();
    const [currentDuration, setCurrentDuration] = useState(0);

    useFrame(() => {
        if (sheet) {
            setCurrentDuration(sheet.sequence.position);
        }
    });

    // Only render if currentDuration is between 16.00 and 17.50
    // if (currentDuration < 21.16 || currentDuration > 30.41) return null;

    return (
        <group>
            <group
                position={[0, 3, -40.7]}
                rotation={[0, 0 , 0]}
                visible={true}
            >
               <Center>
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.2123}
                        height={0.033}
                        curveSegments={3}
                        bevelEnabled
                        bevelThickness={0.00002}
                        bevelSize={0.01}
                        bevelOffset={0}
                        bevelSegments={1}
                        letterSpacing={0.03}
                        position={[0.283, 0, 0]}
                    >
                        Mentors Who Move 
                        <meshMatcapMaterial color="#00f5ff" />
                        <Outlines thickness={2.07} color="#afe8e8" />
                    </Text3D>
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.2123}
                        height={0.033}
                        curveSegments={3}
                        bevelEnabled
                        bevelThickness={0.00002}
                        bevelSize={0.01}
                        bevelOffset={0}
                        bevelSegments={1}
                        letterSpacing={0.03}
                        position={[0.693, -0.3, 0]}
                    >
                         You Forward 
                         <meshMatcapMaterial color="#00f5ff" />
                         <Outlines thickness={2.07} color="#afe8e8" />
                    </Text3D>
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.1123}
                        height={0}
                        curveSegments={12}
                        bevelEnabled    
                        bevelThickness={0.00002}
                        bevelSize={0.01}
                        bevelOffset={0}
                        bevelSegments={1}
                        letterSpacing={0.03}
                        position={[0, -0.6, 0]}
                    >
                        1-on-1 sessions with startup experts
                        {/* <meshMatcapMaterial color="white" matcap={matcapTexture} /> */}
                    </Text3D>
                    <Text3D
                        font="/fonts/Poppins_Regular.json"
                        size={0.1123}
                        height={0}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.00002}
                        bevelSize={0.01}
                        bevelOffset={0}
                        bevelSegments={1}
                        letterSpacing={0.03}
                        position={[0, -0.8, 0]}
                    >
                        to sharpen your pitch, product, and path.
                    </Text3D>
                </Center>
            </group>
        </group>
    );
};

export default TextFour;