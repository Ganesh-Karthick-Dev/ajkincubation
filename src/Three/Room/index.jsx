"use client";
import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";

import { editable as e } from "@theatre/r3f";
import { useQuality } from "@/Components/Common/PerformanceMonitor";

export const Room = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/models/Room/scene.gltf");
  const quality = useQuality();
  // Helper to pick material
  const getMaterial = (origMat, color = '#cccccc') =>
    quality === 'low' ? new THREE.MeshLambertMaterial({ color }) : origMat;
  return (
    <group {...props} dispose={null} ref={ref}>
      <group name="cf456c283db24aeca1e4d07c7ae17a5bfbx" scale={0.01}>
        <mesh
          name="Center_Table_Scifi_Center_Table_mat_0"
          castShadow
          receiveShadow
          geometry={nodes.Center_Table_Scifi_Center_Table_mat_0.geometry}
          material={getMaterial(materials.Scifi_Center_Table_mat)}
        />
        <mesh
          name="Floor_Scifi_Floor_mat_0"
          castShadow
          receiveShadow
          geometry={nodes.Floor_Scifi_Floor_mat_0.geometry}
          material={getMaterial(materials.Scifi_Floor_mat)}
        />
        <mesh
          name="Roof_Scifi_Roof_mat_0"
          castShadow
          receiveShadow
          geometry={nodes.Roof_Scifi_Roof_mat_0.geometry}
          material={getMaterial(materials.Scifi_Roof_mat)}
        />
        <mesh
          name="Light3_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Light3_Scifi_Tunnel_Loop_M_0.geometry}
          material={getMaterial(materials.Scifi_Tunnel_Loop_M)}
        />
        <mesh
          name="Hollow2_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Hollow2_Scifi_Tunnel_Loop_M_0.geometry}
          material={getMaterial(materials.Scifi_Tunnel_Loop_M)}
        />
        <mesh
          name="Frame_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Frame_Scifi_Tunnel_Loop_M_0.geometry}
          material={getMaterial(materials.Scifi_Tunnel_Loop_M)}
        />
        <mesh
          name="Light2_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Light2_Scifi_Tunnel_Loop_M_0.geometry}
          material={materials.Scifi_Tunnel_Loop_M}
        />
        <mesh
          name="Hollow_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Hollow_Scifi_Tunnel_Loop_M_0.geometry}
          material={materials.Scifi_Tunnel_Loop_M}
        />
        <mesh
          name="Light_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Light_Scifi_Tunnel_Loop_M_0.geometry}
          material={materials.Scifi_Tunnel_Loop_M}
        />
        <mesh
          name="Light1_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Light1_Scifi_Tunnel_Loop_M_0.geometry}
          material={materials.Scifi_Tunnel_Loop_M}
        />
        <mesh
          name="Frame2_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Frame2_Scifi_Tunnel_Loop_M_0.geometry}
          material={materials.Scifi_Tunnel_Loop_M}
        />
        <mesh
          name="Light5_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Light5_Scifi_Tunnel_Loop_M_0.geometry}
          material={materials.Scifi_Tunnel_Loop_M}
        />
        <mesh
          name="Hollow4_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Hollow4_Scifi_Tunnel_Loop_M_0.geometry}
          material={materials.Scifi_Tunnel_Loop_M}
        />
        <mesh
          name="Frame4_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Frame4_Scifi_Tunnel_Loop_M_0.geometry}
          material={materials.Scifi_Tunnel_Loop_M}
        />
        <mesh
          name="Light4_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Light4_Scifi_Tunnel_Loop_M_0.geometry}
          material={materials.Scifi_Tunnel_Loop_M}
        />
        <mesh
          name="Hollow1_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Hollow1_Scifi_Tunnel_Loop_M_0.geometry}
          material={materials.Scifi_Tunnel_Loop_M}
        />
        <mesh
          name="Hollow3_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Hollow3_Scifi_Tunnel_Loop_M_0.geometry}
          material={materials.Scifi_Tunnel_Loop_M}
        />
        {/* front door -start*/}
        <e.mesh
          theatreKey="frontDoor_right"
          name="Tunnel_Exit_R_Door_Scifi_Tunnel_Door_0"
          castShadow
          receiveShadow
          geometry={nodes.Tunnel_Exit_R_Door_Scifi_Tunnel_Door_0.geometry}
          material={materials.Scifi_Tunnel_Door}
          position={[0, 0, 0]} //360
        />

        <e.mesh
          theatreKey="frontDoor_left"
          name="Tunnel_Exit_L_Door_Scifi_Tunnel_Door_0"
          castShadow
          receiveShadow
          geometry={nodes.Tunnel_Exit_L_Door_Scifi_Tunnel_Door_0.geometry}
          material={materials.Scifi_Tunnel_Door}
          // position={[-235, 0, 0]}
          // rotation={[2, 0, 0]}
        />
        {/* front door end */}
        <group>
          <e.mesh
            theatreKey="1stDoor_left"
            name="Tunnel_Glass_L_Door2_Scifi_Door_Glass_0"
            castShadow
            receiveShadow
            geometry={nodes.Tunnel_Glass_L_Door2_Scifi_Door_Glass_0.geometry}
            material={materials.Scifi_Door_Glass}
          />
          <e.mesh
            theatreKey="1stDoor_right"
            name="Tunnel_Glass_R_Door2_Scifi_Door_Glass_0"
            castShadow
            receiveShadow
            geometry={nodes.Tunnel_Glass_R_Door2_Scifi_Door_Glass_0.geometry}
            material={materials.Scifi_Door_Glass}
          />
        </group>
        <group>
          <e.mesh
            theatreKey="2ndDoor_right"
            name="Tunnel_Glass_R_Door1_Scifi_Door_Glass_0"
            castShadow
            receiveShadow
            geometry={nodes.Tunnel_Glass_R_Door1_Scifi_Door_Glass_0.geometry}
            material={materials.Scifi_Door_Glass}
          />
          <e.mesh
            theatreKey="2ndDoor_left"
            name="Tunnel_Glass_L_Door_Scifi_Door_Glass_0"
            castShadow
            receiveShadow
            geometry={nodes.Tunnel_Glass_L_Door_Scifi_Door_Glass_0.geometry}
            material={materials.Scifi_Door_Glass}
          />
        </group>

        <group>
          <e.mesh
            theatreKey="3rdDoor_right"
            name="Tunnel_Glass_R_Door_Scifi_Door_Glass_0"
            castShadow
            receiveShadow
            geometry={nodes.Tunnel_Glass_R_Door_Scifi_Door_Glass_0.geometry}
            material={materials.Scifi_Door_Glass}
          />
          <e.mesh
            theatreKey="3rdDoor_left"
            name="Tunnel_Glass_L_Door1_Scifi_Door_Glass_0"
            castShadow
            receiveShadow
            geometry={nodes.Tunnel_Glass_L_Door1_Scifi_Door_Glass_0.geometry}
            material={materials.Scifi_Door_Glass}
          />
        </group>

        <group>
          <e.mesh
            theatreKey="backDoor_right"
            name="Tunnel_door_R2_Scifi_Tunnel_Door_0"
            castShadow
            receiveShadow
            geometry={nodes.Tunnel_door_R2_Scifi_Tunnel_Door_0.geometry}
            material={materials.Scifi_Tunnel_Door}
          />
          <e.mesh
            theatreKey="backDoor_left"
            name="Tunnel_door_L2_Scifi_Tunnel_Door_0"
            castShadow
            receiveShadow
            geometry={nodes.Tunnel_door_L2_Scifi_Tunnel_Door_0.geometry}
            material={materials.Scifi_Tunnel_Door}
          />
        </group>

        <mesh
          name="Frame1_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Frame1_Scifi_Tunnel_Loop_M_0.geometry}
          material={materials.Scifi_Tunnel_Loop_M}
        />
        <mesh
          name="Frame3_Scifi_Tunnel_Loop_M_0"
          castShadow
          receiveShadow
          geometry={nodes.Frame3_Scifi_Tunnel_Loop_M_0.geometry}
          material={materials.Scifi_Tunnel_Loop_M}
        />
        <mesh
          name="Bench6_Scifi_Bench_mat_0"
          castShadow
          receiveShadow
          geometry={nodes.Bench6_Scifi_Bench_mat_0.geometry}
          material={materials.Scifi_Bench_mat}
          rotation={[-Math.PI, 0.654, -Math.PI]}
        />
        <mesh
          name="Bench7_Scifi_Bench_mat_0"
          castShadow
          receiveShadow
          geometry={nodes.Bench7_Scifi_Bench_mat_0.geometry}
          material={materials.Scifi_Bench_mat}
          rotation={[-Math.PI, -0.611, -Math.PI]}
        />
        <mesh
          name="Bench8_Scifi_Bench_mat_0"
          castShadow
          receiveShadow
          geometry={nodes.Bench8_Scifi_Bench_mat_0.geometry}
          material={materials.Scifi_Bench_mat}
          rotation={[0, 1.222, 0]}
        />
        <mesh
          name="Bench9_Scifi_Bench_mat_0"
          castShadow
          receiveShadow
          geometry={nodes.Bench9_Scifi_Bench_mat_0.geometry}
          material={materials.Scifi_Bench_mat}
        />
        <mesh
          name="Bench10_Scifi_Bench_mat_0"
          castShadow
          receiveShadow
          geometry={nodes.Bench10_Scifi_Bench_mat_0.geometry}
          material={materials.Scifi_Bench_mat}
          rotation={[0, -1.265, 0]}
        />
        <mesh
          name="Wall__Scifi_Window_Glass_0"
          castShadow
          receiveShadow
          geometry={nodes.Wall__Scifi_Window_Glass_0.geometry}
          material={materials.Scifi_Window_Glass}
        />
        <mesh
          name="Wall__Scifi_Wall_mat_0"
          castShadow
          receiveShadow
          geometry={nodes.Wall__Scifi_Wall_mat_0.geometry}
          material={materials.Scifi_Wall_mat}
        />
      </group>
    </group>
  );
});

useGLTF.preload("/models/Room/scene.gltf");
