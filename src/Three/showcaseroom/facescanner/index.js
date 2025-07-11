import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function FaceScannerModel(props) {
    const { nodes, materials } = useGLTF('/models/showcaseroom/Face Scanner.glb')
    return (
        <group {...props} dispose={null}>
            <group
                position={[6.900, 0.016, -62.517]}
                rotation={[0, 5.078, 0]}
                scale={0.906}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Computer_Base_1_Computer_1_0_1.geometry}
                    material={materials.Computer_1}
                />
                {/* <axesHelper args={[1000]} /> */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Computer_Base_1_Computer_1_0_2.geometry}
                    material={materials.Computer_2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Computer_Base_1_Computer_1_0_3.geometry}
                    material={materials.Vials}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/showcaseroom/Face Scanner.glb')
