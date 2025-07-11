"use client"

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LaptopModel(props) {
  const { nodes, materials } = useGLTF('/models/Laptop.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene" >
        <mesh
          name="Object_4"
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.T_ComputerLaptop}
          position={[-7.009, 0.539, -60.089]}
          rotation={[0, 1.5123, 0]}
        //   rotation={[-0.657, 1.556, 0.611]}
          scale={0.23}
        >
          {/* <axesHelper args={[100]} />    */}

        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Laptop.glb')
