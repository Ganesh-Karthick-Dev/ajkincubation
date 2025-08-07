"use client";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import ScrollbasedAnimation from "./Animation/ScrollbasedAnimation";

export const CompressedRoomWithRobo = React.forwardRef((props, ref) => {
  const animationRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/RoomWithRobo/compressed_room_with_robo.glb"
  );
  const { actions, clips, names } = useAnimations(animations, animationRef);

  useEffect(() => {
    actions.Animation?.play();
  }, [actions, clips, names]);
  
  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Text"
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={nodes.Text.material}
          position={[2.467, 0.112, 14.692]}
        />
        <mesh
          name="Text005"
          castShadow
          receiveShadow
          geometry={nodes.Text005.geometry}
          material={materials['Material.010']}
          position={[4.355, 5.259, -28.147]}
          rotation={[1.566, -0.001, 0.239]}
          scale={0.4}
        />
        <group name="GLTF_SceneRootNode" ref={animationRef} position={[0, 0, -6.274]}>
          {/* Robot armature groups */}
          <group name="Empty001_74">
            <group name="Armature003_73">
              {/* Robot arm structure */}
            </group>
          </group>
          <group name="Empty002_44" rotation={[Math.PI, -1.032, Math.PI]}>
            <group name="Armature001_43">
              {/* Second robot arm structure */}
            </group>
          </group>
          <group name="Empty_14" position={[0, 11.197, 0]} rotation={[-Math.PI, 1.129, -Math.PI]}>
            <group name="Armature002_13" position={[0, -11.197, 0]}>
              <group name="GLTF_created_0" position={[1.511, 7.143, -1.048]}>
                <skinnedMesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.metal}
                  skeleton={nodes.Object_8.skeleton}
                />
                <primitive object={nodes.GLTF_created_0_rootJoint} />
              </group>
            </group>
          </group>
          
          {/* Eye elements */}
          <group name="eye_l_174" position={[-0.228, 4.076, 0.69]} rotation={[-0.208, -0.061, 0.023]} />
          <group name="eye_r_175" position={[0.144, 4.094, 0.733]} rotation={[-0.208, -0.061, 0.023]} />
          <group name="eyes001_84" position={[0.144, 4.094, 0.733]} rotation={[-0.208, -0.061, 0.023]}>
            <mesh
              name="Object_167"
              castShadow
              receiveShadow
              geometry={nodes.Object_167.geometry}
              material={materials['glow.001']}
              position={[0.003, 0, -0.377]}
            />
          </group>
          <group name="eyes_83" position={[-0.228, 4.076, 0.69]} rotation={[-0.208, -0.061, 0.023]}>
            <mesh
              name="Object_165"
              castShadow
              receiveShadow
              geometry={nodes.Object_165.geometry}
              material={materials['glow.001']}
              position={[0, 0, -0.197]}
            />
          </group>
        </group>

        {/* Room elements */}
        <mesh
          name="Object_150"
          castShadow
          receiveShadow
          geometry={nodes.Object_150.geometry}
          material={materials.glow}
          position={[-0.097, 0.09, -6.314]}
        />
        <mesh
          name="Object_151"
          castShadow
          receiveShadow
          geometry={nodes.Object_151.geometry}
          material={materials.metal}
          position={[0.681, -0.279, -7.223]}
        />
        <mesh
          name="Object_152"
          castShadow
          receiveShadow
          geometry={nodes.Object_152.geometry}
          material={materials.metal2}
          position={[0, -0.318, -6.274]}
        />
        <mesh
          name="Object_153"
          castShadow
          receiveShadow
          geometry={nodes.Object_153.geometry}
          material={materials.floor}
          position={[0.003, -0.046, -6.283]}
        />
        <mesh
          name="Object_154"
          castShadow
          receiveShadow
          geometry={nodes.Object_154.geometry}
          material={materials.Transparent}
          position={[0.713, 0.924, -7.271]}
        />
        <mesh
          name="Object_155"
          castShadow
          receiveShadow
          geometry={nodes.Object_155.geometry}
          material={materials['Material.001']}
          position={[0.711, 0.699, -7.27]}
        />
        <mesh
          name="Object_156"
          castShadow
          receiveShadow
          geometry={nodes.Object_156.geometry}
          material={materials['Material.002']}
          position={[0.715, 0.927, -7.274]}
        />
        <mesh
          name="Object_157"
          castShadow
          receiveShadow
          geometry={nodes.Object_157.geometry}
          material={materials['Material.003']}
          position={[0.715, 0.872, -7.274]}
        />
        <mesh
          name="Object_145"
          castShadow
          receiveShadow
          geometry={nodes.Object_145.geometry}
          material={materials['floor.001']}
          position={[0.002, 9.474, -6.277]}
          scale={1.111}
        />
        <mesh
          name="Object_146"
          castShadow
          receiveShadow
          geometry={nodes.Object_146.geometry}
          material={materials.light}
          position={[0, 7.529, -6.274]}
          scale={1.111}
        />
        <mesh
          name="Object_147"
          castShadow
          receiveShadow
          geometry={nodes.Object_147.geometry}
          material={materials.chrome}
          position={[0.061, -0.131, -6.508]}
          scale={1.111}
        />
        <mesh
          name="Object_148"
          castShadow
          receiveShadow
          geometry={nodes.Object_148.geometry}
          material={materials['Wall Paint']}
          position={[0.015, 11.444, -6.275]}
          scale={1.111}
        />
        <mesh
          name="Object_159"
          castShadow
          receiveShadow
          geometry={nodes.Object_159.geometry}
          material={materials.wires}
          position={[0.009, 6.932, -7.369]}
        />

        {/* Robot body parts */}
        <mesh
          name="Object_315"
          castShadow
          receiveShadow
          geometry={nodes.Object_315.geometry}
          material={materials.white}
          position={[-1.341, 2.026, -6.723]}
          rotation={[-0.282, 0, 0]}
        />
        <mesh
          name="Object_282"
          castShadow
          receiveShadow
          geometry={nodes.Object_282.geometry}
          material={materials.grey}
          position={[-1.156, 1.375, -6.53]}
          rotation={[-0.282, 0, 0]}
        />

        {/* Robot chest and arms */}
        <group name="chest_97" position={[0, 2.53, -6.4]} rotation={[-0.105, 0, 0]}>
          <group name="arm_88" position={[1.062, 1.298, -0.288]} rotation={[-2.67, 0.186, -0.201]}>
            <group name="Cube008_87" position={[-1.721, 3.327, -0.619]} rotation={[3.14, 0.032, -0.175]}>
              <mesh
                name="Object_177"
                castShadow
                receiveShadow
                geometry={nodes.Object_177.geometry}
                material={materials.grey}
                position={[1.19, 3.085, -0.546]}
              />
              <mesh
                name="Object_178"
                castShadow
                receiveShadow
                geometry={nodes.Object_178.geometry}
                material={materials.white}
                position={[1.343, 3.56, -0.542]}
              />
            </group>
            <group name="forearm_86" position={[0, 0.731, 0]} rotation={[-0.598, 0.02, -0.064]}>
              <group name="Cube009_85" position={[-1.404, 2.792, -0.581]} rotation={[-3.134, 0.032, -0.058]}>
                <mesh
                  name="Object_174"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_174.geometry}
                  material={materials.grey}
                  position={[1.266, 2.042, -0.532]}
                />
                <mesh
                  name="Object_175"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_175.geometry}
                  material={materials.white}
                  position={[1.35, 2.397, -0.53]}
                />
              </group>
            </group>
          </group>
        </group>

        {/* Robot body panels */}
        <mesh
          name="Object_196"
          castShadow
          receiveShadow
          geometry={nodes.Object_196.geometry}
          material={materials.white}
          position={[-0.742, 4.747, -7.585]}
          rotation={[2.594, 0.333, -0.866]}
          scale={[-1, 1, 1]}
        />
        <mesh
          name="Object_197"
          castShadow
          receiveShadow
          geometry={nodes.Object_197.geometry}
          material={materials.black}
          position={[-0.904, 4.827, -7.764]}
          rotation={[2.594, 0.333, -0.866]}
          scale={[-1, 1, 1]}
        />
        <mesh
          name="Object_202"
          castShadow
          receiveShadow
          geometry={nodes.Object_202.geometry}
          material={materials.grey}
          position={[0.006, 4.257, -6.173]}
          scale={0.897}
        />
        <mesh
          name="Object_191"
          castShadow
          receiveShadow
          geometry={nodes.Object_191.geometry}
          material={materials.glass}
          position={[0.007, 4.256, -6.143]}
        />
        <mesh
          name="Object_192"
          castShadow
          receiveShadow
          geometry={nodes.Object_192.geometry}
          material={materials.material}
          position={[0.028, 3.88, -6.115]}
        />
        <mesh
          name="Object_193"
          castShadow
          receiveShadow
          geometry={nodes.Object_193.geometry}
          material={materials.logo}
          position={[0.661, 3.339, -5.713]}
        />
        <mesh
          name="Object_194"
          castShadow
          receiveShadow
          geometry={nodes.Object_194.geometry}
          material={materials.control}
          position={[0.506, 2.683, -5.646]}
        />

        {/* Tunnel elements with Theatre.js animations */}
        <e.group theatreKey="room1_backDoor_left">
          <mesh
            name="Tunnel_door_L2_Scifi_Tunnel_Door_0001"
            castShadow
            receiveShadow
            geometry={nodes.Tunnel_door_L2_Scifi_Tunnel_Door_0001.geometry}
            material={materials['Scifi_Tunnel_Door.002']}
            position={[-0.869, 2.187, 15.762]}
            scale={0.01}
          />
        </e.group>
        <e.group theatreKey="room1_2ndDoor_left">
          <mesh
            name="Tunnel_Glass_L_Door_Scifi_Door_Glass_0001"
            castShadow
            receiveShadow
            geometry={nodes.Tunnel_Glass_L_Door_Scifi_Door_Glass_0001.geometry}
            material={materials['Scifi_Door_Glass.002']}
            position={[-1.303, 2.198, 24.844]}
            scale={0.01}
          />
        </e.group>
        <e.group theatreKey="room1_1stDoor_left">
          <mesh
            name="Tunnel_Glass_L_Door1_Scifi_Door_Glass_0001"
            castShadow
            receiveShadow
            geometry={nodes.Tunnel_Glass_L_Door1_Scifi_Door_Glass_0001.geometry}
            material={materials['Scifi_Door_Glass.002']}
            position={[-1.303, 2.198, 18.775]}
            scale={0.01}
          />
        </e.group>
        <e.group theatreKey="room1_3rdDoor_left">
          <mesh
            name="Tunnel_Glass_L_Door2_Scifi_Door_Glass_0001"
            castShadow
            receiveShadow
            geometry={nodes.Tunnel_Glass_L_Door2_Scifi_Door_Glass_0001.geometry}
            material={materials['Scifi_Door_Glass.004']}
            position={[-1.303, 2.198, 30.913]}
            scale={0.01}
          />
        </e.group>

        {/* Tunnel frames and structures */}
        <mesh
          name="Frame1_Scifi_Tunnel_Loop_M_0001"
          castShadow
          receiveShadow
          geometry={nodes.Frame1_Scifi_Tunnel_Loop_M_0001.geometry}
          material={materials['Scifi_Tunnel_Loop_M.002']}
          position={[0, 2.439, 15.247]}
          scale={0.01}
        />

        {/* Room 2 elements */}
        <e.group theatreKey="room2_backDoor_left">
          <mesh
            name="Tunnel_door_L2_Scifi_Tunnel_Door_0"
            castShadow
            receiveShadow
            geometry={nodes.Tunnel_door_L2_Scifi_Tunnel_Door_0.geometry}
            material={materials['Scifi_Tunnel_Door.003']}
            position={[-0.869, 2.269, -47.385]}
            scale={0.01}
          />
        </e.group>
        <e.group theatreKey="room2_2ndDoor_left">
          <mesh
            name="Tunnel_Glass_L_Door_Scifi_Door_Glass_0"
            castShadow
            receiveShadow
            geometry={nodes.Tunnel_Glass_L_Door_Scifi_Door_Glass_0.geometry}
            material={materials['Scifi_Door_Glass.003']}
            position={[-1.303, 2.28, -37.788]}
            scale={0.01}
          />
        </e.group>

        {/* Wall elements */}
        <mesh
          name="Wall__Scifi_Wall_mat_0"
          castShadow
          receiveShadow
          geometry={nodes.Wall__Scifi_Wall_mat_0.geometry}
          material={materials['Scifi_Wall_mat.004']}
          position={[-0.002, 2.243, -60.44]}
          scale={0.01}
        />
        <mesh
          name="Wall__Scifi_Wall_mat_0263"
          castShadow
          receiveShadow
          geometry={nodes.Wall__Scifi_Wall_mat_0263.geometry}
          material={materials['Scifi_Wall_mat.002']}
          position={[-15.638, -6.409, -52.1]}
          scale={0.01}
        />
        <mesh
          name="Wall__Scifi_Wall_mat_0515"
          castShadow
          receiveShadow
          geometry={nodes.Wall__Scifi_Wall_mat_0515.geometry}
          material={materials['Material.028']}
          position={[5.573, 2.244, -50.45]}
          scale={0.01}
        />
        <mesh
          name="Wall__Scifi_Wall_mat_0526"
          castShadow
          receiveShadow
          geometry={nodes.Wall__Scifi_Wall_mat_0526.geometry}
          material={materials['Scifi_Wall_mat.007']}
          position={[0, 2.244, -66.796]}
          scale={0.01}
        />
        <mesh
          name="Wall__Scifi_Window_Glass_0"
          castShadow
          receiveShadow
          geometry={nodes.Wall__Scifi_Window_Glass_0.geometry}
          material={materials['Material.023']}
          position={[-8.853, 2.244, -60.525]}
          scale={0.01}
        />
        <mesh
          name="Wall__Scifi_Window_Glass_0005"
          castShadow
          receiveShadow
          geometry={nodes.Wall__Scifi_Window_Glass_0005.geometry}
          material={materials['Material.025']}
          position={[8.789, 2.244, -60.506]}
          scale={0.01}
        />

        {/* Additional room elements */}
        <group name="Object_7001" position={[0.027, 2.54, -57.589]} rotation={[-Math.PI / 2, 0, -3.138]} scale={[-3, 3, 0.292]}>
          <mesh
            name="Object_2001"
            castShadow
            receiveShadow
            geometry={nodes.Object_2001.geometry}
            material={materials['blue.002']}
          />
          <mesh
            name="Object_2001_1"
            castShadow
            receiveShadow
            geometry={nodes.Object_2001_1.geometry}
            material={materials['white.002']}
          />
          <mesh
            name="Object_2001_2"
            castShadow
            receiveShadow
            geometry={nodes.Object_2001_2.geometry}
            material={materials['light.002']}
          />
        </group>
        <mesh
          name="Center_Table_Scifi_Center_Table_mat_0"
          castShadow
          receiveShadow
          geometry={nodes.Center_Table_Scifi_Center_Table_mat_0.geometry}
          material={materials['Scifi_Center_Table_mat.002']}
          position={[-0.011, 0.643, -57.621]}
          scale={0.01}
        />
        <mesh
          name="Floor_Scifi_Floor_mat_0"
          castShadow
          receiveShadow
          geometry={nodes.Floor_Scifi_Floor_mat_0.geometry}
          material={materials['Scifi_Floor_mat.002']}
          position={[-0.013, -0.125, -57.553]}
          scale={0.01}
        />
        <mesh
          name="Roof_Scifi_Roof_mat_0"
          castShadow
          receiveShadow
          geometry={nodes.Roof_Scifi_Roof_mat_0.geometry}
          material={materials['Scifi_Roof_mat.002']}
          position={[0, 5.789, -57.654]}
          scale={0.01}
        />
        <mesh
          name="Bench10_Scifi_Bench_mat_0"
          castShadow
          receiveShadow
          geometry={nodes.Bench10_Scifi_Bench_mat_0.geometry}
          material={materials['Scifi_Bench_mat.002']}
          position={[7.128, 0.157, -59.95]}
          rotation={[0, -1.265, 0]}
          scale={0.01}
        />
      </group>
    </group>
  );
});

useGLTF.preload("/models/RoomWithRobo/compressed_room_with_robo.glb"); 