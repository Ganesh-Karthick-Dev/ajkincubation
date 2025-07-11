
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ControlCenterModel(props) {
    const { nodes, materials } = useGLTF('/models/showcaseroom/Control Pannel.glb')
    return (
        <group {...props} dispose={null}>
            <group
                position={[7.100, 0.371, -52.217]}
                rotation={[4.767, 0, 3.770]}
                scale={1.205}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0005.geometry}
                    material={materials.Synth_Buttons}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0005_1.geometry}
                    material={materials.Synth_Machine}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/showcaseroom/Control Pannel.glb')