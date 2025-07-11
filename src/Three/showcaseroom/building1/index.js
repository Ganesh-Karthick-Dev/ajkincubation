import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Building1Model1(props) {
  const { nodes, materials } = useGLTF('/models/showcaseroom/Building.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[3.6990, 0.8291, -51.197]}
        rotation={[0, 0.610, 0]}
        scale={[-2.061, -0.211, -2.395]}
        >
        {/* <axesHelper args={[1000]} /> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={materials['03 - Default.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_1.geometry}
          material={materials['11 - Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_2.geometry}
          material={materials.Metal}
        />
        {/* <axesHelper args={[1000]} /> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_3.geometry}
          material={materials['16 - Matte Plastic']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_4.geometry}
          material={materials['15 - Glossy Plastic']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_5.geometry}
          material={materials['14 - Polished Aluminum']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_6.geometry}
          material={materials['13 - Brushed Metal #2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_7.geometry}
          material={materials['12 - Car Paint']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_8.geometry}
          material={materials['05 - Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_9.geometry}
          material={materials['06 - Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_10.geometry}
          material={materials.Ceramic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_11.geometry}
          material={materials['Solid Glass']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_12.geometry}
          material={nodes.Cube068_12.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_13.geometry}
          material={materials['04 - Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_14.geometry}
          material={materials['Wall Paint']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_15.geometry}
          material={materials['01 - Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube068_16.geometry}
          material={materials['02 - Default']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/showcaseroom/Building.glb')
