// import React, { useRef } from 'react';
// import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
// import { useCurrentSheet } from '@theatre/r3f';
// import { val } from '@theatre/core';
// import { useFrame } from '@react-three/fiber';

// const ANIM_SPEED = 0.2;
// const BASE_Y = 5.4;
// const HIDDEN_Y = 5.7; // BASE_Y + 1

// const RobotTopText = () => {
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
//         const inRange = percent >= 0.65 && percent <= 0.69;

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
//                     if (scrollDirection === 'backward' && percent < 0.65) {
//                         animationState.current = 'hiding';
//                     } else if (scrollDirection === 'forward' && percent > 0.69) {
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
//             position={[-1, HIDDEN_Y, -2.1]}
//             rotation={[-0.60, -0.020 , 0]}
//             visible={false}
//         >
//             <Center>
//                 <Text3D
//                     font="/fonts/Poppins_Regular.json"
//                     size={0.2}
//                     height={0.1}
//                     curveSegments={12}
//                     bevelEnabled
//                     bevelThickness={0.00002}
//                     bevelSize={0.01}
//                     bevelOffset={0}
//                     bevelSegments={1}
//                     letterSpacing={0.05}
//                 >
//                     From Campus to Company
//                     <meshMatcapMaterial color="orange" matcap={matcapTexture} />
//                 </Text3D>
//                 <Text3D
//                     font="/fonts/Poppins_Regular.json"
//                     size={0.2}
//                     height={0.1}
//                     curveSegments={12}
//                     bevelEnabled
//                     bevelThickness={0.00002}
//                     bevelSize={0.01}
//                     bevelOffset={0}
//                     bevelSegments={1}
//                     letterSpacing={0.05}
//                     position={[0, -0.4, 0]}
//                 >
//                    Your Startup Journey Starts
//                     <meshMatcapMaterial color="orange" matcap={matcapTexture} />
//                 </Text3D>
//                 <Text3D
//                     font="/fonts/Poppins_Regular.json"
//                     size={0.2}
//                     height={0.1}
//                     curveSegments={12}
//                     bevelEnabled
//                     bevelThickness={0.00002}
//                     bevelSize={0.01}
//                     bevelOffset={0}
//                     bevelSegments={1}
//                     letterSpacing={0.05}
//                     position={[2, -0.8, 0]}
//                 >
//                     Here.
//                     <meshMatcapMaterial color="orange" matcap={matcapTexture} />
//                 </Text3D>
//             </Center>
//         </group>
//     );
// };

// export default RobotTopText;


import React, { useState } from 'react';
import { Center, Text3D, useMatcapTexture } from '@react-three/drei';
import { useCurrentSheet } from '@theatre/r3f';
import { useFrame } from '@react-three/fiber';

const RobotTopText = () => {
    const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
    const sheet = useCurrentSheet();
    const [currentDuration, setCurrentDuration] = useState(0);

    useFrame(() => {
        if (sheet) {
            setCurrentDuration(sheet.sequence.position);
        }
    });

    // Only render if currentDuration is between 16.00 and 17.50
    if (currentDuration < 19.56 || currentDuration > 21.5) return null;

    return (
        <group>
            <group
                position={[0, 4.9, -1.3]}
                rotation={[-0.323, -0.072 , 0]}
                visible={true}
            >
               <Center>
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
                    >
                        From Campus to Company
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
                        position={[0, -0.3, 0]}
                    >
                        Your Startup Journey Starts
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
                        position={[0, -0.6, 0]}
                    >
                        Here.
                        {/* <meshMatcapMaterial color="white" matcap={matcapTexture} /> */}
                    </Text3D>
                </Center>
            </group>
        </group>
    );
};

export default RobotTopText;