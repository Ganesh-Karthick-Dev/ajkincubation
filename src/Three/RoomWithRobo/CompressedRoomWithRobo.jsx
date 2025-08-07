"use client";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";

export const CompressedRoomWithRobo = React.forwardRef((props, ref) => {
  const animationRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/RoomWithRobo/latest_compressed_room_model.glb"
  );
  const { actions, clips, names } = useAnimations(animations, animationRef);

  useEffect(() => {
    if (actions.Animation) {
      actions.Animation.play();
    }
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
        <mesh
          name="Text008"
          castShadow
          receiveShadow
          geometry={nodes.Text008.geometry}
          material={materials['Material.016']}
          position={[4.277, 3.415, -28.004]}
          rotation={[1.566, -0.001, 0.253]}
          scale={1.084}
        />
        
        {/* Robot Armature with Theatre.js integration */}
        <e.group
          theatreKey="robot_armature"
          name="GLTF_SceneRootNode"
          position={[0, 0, -6.274]}
          ref={animationRef}
        >
          {/* Robot arms and mechanical parts */}
          <group name="Empty001_74">
            <group name="Armature003_73">
              <e.group theatreKey="robot_arm_left" name="Bone_72" position={[4.968, 0.437, 0]}>
                {/* Left arm structure */}
                <group name="Bone001_70" position={[0, 1, 0]} rotation={[0, 0, -0.471]}>
                  <group name="Bone002_68" position={[0, 3.245, 0]} rotation={[0, 0, 1.255]}>
                    <group name="Bone003_66" position={[0, 1.849, 0]} rotation={[0, 0, 1.165]}>
                      <group name="Bone004_64" position={[0, 2.63, 0]} rotation={[0, 0, 0.107]}>
                        {/* Arm segments with glow effects */}
                        <e.group
                          theatreKey="arm_segment_1"
                          name="Bone005_50"
                          position={[0.023, 0.176, 0.21]}
                          rotation={[1.366, -0.373, -0.431]}
                        >
                          <group name="Bone006_48" position={[0, 0.202, 0]} rotation={[-1.03, -0.189, 0.386]}>
                            <group name="Bone007_46" position={[0, 0.458, 0]} rotation={[2.37, -0.43, 2.917]}>
                              <group name="Plane038_45" position={[1.645, 3.691, 0.344]} rotation={[2.794, 0.519, 0.945]}>
                                <mesh
                                  name="Object_100"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_100.geometry}
                                  material={materials['Material.004']}
                                  position={[1.243, 3.573, 0.485]}
                                />
                              </group>
                            </group>
                            <group name="Plane049_47" position={[-2.35, 3.261, -1.751]} rotation={[-0.361, -0.039, -2.148]}>
                              <mesh
                                name="Object_102"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_102.geometry}
                                material={materials.metal}
                                position={[1.405, 3.751, 0.543]}
                              />
                              <mesh
                                name="Object_103"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_103.geometry}
                                material={materials['Material.004']}
                                position={[1.582, 3.881, 0.493]}
                              />
                            </group>
                          </group>
                          <group name="Plane047_49" position={[-3.016, -0.722, -3.046]} rotation={[-1.368, -0.349, -1.846]}>
                            <mesh
                              name="Object_105"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_105.geometry}
                              material={materials.metal}
                              position={[1.755, 3.98, 0.397]}
                            />
                            <mesh
                              name="Object_106"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_106.geometry}
                              material={materials['Material.004']}
                              position={[1.819, 3.97, 0.294]}
                            />
                          </group>
                        </e.group>
                        
                        {/* Additional arm segments */}
                        <e.group
                          theatreKey="arm_segment_2"
                          name="Bone008_56"
                          position={[0.031, 0.178, -0.188]}
                          rotation={[0.112, 1.119, -1.601]}
                        >
                          {/* Arm segment content */}
                        </e.group>
                        
                        <e.group
                          theatreKey="arm_segment_3"
                          name="Bone011_62"
                          position={[-0.243, 0.177, 0.035]}
                          rotation={[-2.476, 0.147, 1.636]}
                        >
                          {/* Arm segment content */}
                        </e.group>
                        
                        {/* Glow effect */}
                        <e.group
                          theatreKey="arm_glow"
                          name="Plane037_63"
                          position={[-1.699, 4.162, 0]}
                          rotation={[0, 0, -2.296]}
                        >
                          <mesh
                            name="Object_130"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_130.geometry}
                            material={materials['Material.004']}
                            position={[1.854, 3.876, 0.012]}
                          />
                          <mesh
                            name="Object_131"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_131.geometry}
                            material={materials.red_glow}
                            position={[1.873, 3.894, 0.012]}
                          />
                        </e.group>
                      </group>
                      
                      {/* Wall panels */}
                      <e.group
                        theatreKey="wall_panel_1"
                        name="Plane032_65"
                        position={[-2.134, 6.587, 0]}
                        rotation={[0, 0, -2.189]}
                      >
                        <mesh
                          name="Object_133"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_133.geometry}
                          material={materials['Wall Paint']}
                          position={[3.367, 5.092, 0.008]}
                        />
                        <mesh
                          name="Object_134"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_134.geometry}
                          material={materials['Material.004']}
                          position={[3.363, 5.023, 0.001]}
                        />
                      </e.group>
                    </group>
                    
                    <e.group
                      theatreKey="wall_panel_2"
                      name="Plane036_67"
                      position={[-6.894, 2.487, 0]}
                      rotation={[0, 0, -1.024]}
                    >
                      <mesh
                        name="Object_136"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_136.geometry}
                        material={materials['Wall Paint']}
                        position={[4.154, 5.533, -0.025]}
                      />
                      <mesh
                        name="Object_137"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_137.geometry}
                        material={materials['Material.004']}
                        position={[4.786, 5.471, -0.006]}
                      />
                    </e.group>
                  </group>
                  
                  <e.group
                    theatreKey="wall_panel_3"
                    name="Plane035_69"
                    position={[-4.508, -2.534, 0]}
                    rotation={[0, 0, 0.231]}
                  >
                    <mesh
                      name="Object_139"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_139.geometry}
                      material={materials['Wall Paint']}
                      position={[5.709, 4.518, -0.024]}
                    />
                    <mesh
                      name="Object_140"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_140.geometry}
                      material={materials['Material.004']}
                      position={[5.514, 3.675, 0.013]}
                    />
                  </e.group>
                </group>
                
                <e.group
                  theatreKey="wall_panel_4"
                  name="Plane034_71"
                  position={[-4.968, -0.437, 0]}
                >
                  <mesh
                    name="Object_142"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_142.geometry}
                    material={materials['Wall Paint']}
                    position={[4.965, 1.395, -0.024]}
                  />
                  <mesh
                    name="Object_143"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_143.geometry}
                    material={materials['Material.004']}
                    position={[4.964, 1.193, -0.01]}
                  />
                </e.group>
              </e.group>
            </group>
          </group>

          {/* Right arm mirror */}
          <e.group
            theatreKey="robot_arm_right"
            name="Empty002_44"
            rotation={[Math.PI, -1.032, Math.PI]}
          >
            {/* Mirror of left arm structure */}
          </e.group>

          {/* Robot body and head */}
          <e.group
            theatreKey="robot_body"
            name="Empty_14"
            position={[0, 11.197, 0]}
            rotation={[-Math.PI, 1.129, -Math.PI]}
          >
            <group name="Armature002_13" position={[0, -11.197, 0]}>
              <group name="GLTF_created_0" position={[1.511, 7.143, -1.048]}>
                <group name="GLTF_created_0_rootJoint" position={[-0.786, -7.143, -1.662]}>
                  <e.group
                    theatreKey="robot_main_bone"
                    name="Bone_11"
                    position={[1.809, 11.134, 3.828]}
                    rotation={[-Math.PI, 1.129, -0.211]}
                  >
                    {/* Robot body structure */}
                  </e.group>
                </group>
              </group>
            </group>
          </e.group>

          {/* Robot eyes with glow effects */}
          <e.group
            theatreKey="robot_eye_left"
            name="eye_l_174"
            position={[-0.228, 4.076, 0.69]}
            rotation={[-0.208, -0.061, 0.023]}
          />
          <e.group
            theatreKey="robot_eye_right"
            name="eye_r_175"
            position={[0.144, 4.094, 0.733]}
            rotation={[-0.208, -0.061, 0.023]}
          />
          
          <e.group
            theatreKey="robot_eyes_glow"
            name="eyes001_84"
            position={[0.144, 4.094, 0.733]}
            rotation={[-0.208, -0.061, 0.023]}
          >
            <mesh
              name="Object_167"
              castShadow
              receiveShadow
              geometry={nodes.Object_167.geometry}
              material={materials['glow.001']}
              position={[0.003, 0, -0.377]}
            />
          </e.group>
          
          <e.group
            theatreKey="robot_eye_glow_left"
            name="eyes_83"
            position={[-0.228, 4.076, 0.69]}
            rotation={[-0.208, -0.061, 0.023]}
          >
            <mesh
              name="Object_165"
              castShadow
              receiveShadow
              geometry={nodes.Object_165.geometry}
              material={materials['glow.001']}
              position={[0, 0, -0.197]}
            />
          </e.group>
        </e.group>

        {/* Room environment elements */}
        <e.group theatreKey="room_environment">
          {/* Floor and lighting */}
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
          
          {/* Screen elements */}
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
          
          {/* Upper floor and lighting */}
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
          
          {/* Wires and connections */}
          <mesh
            name="Object_159"
            castShadow
            receiveShadow
            geometry={nodes.Object_159.geometry}
            material={materials.wires}
            position={[0.009, 6.932, -7.369]}
          />
        </e.group>

        {/* Robot hand and arm details */}
        <e.group theatreKey="robot_hands">
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
        </e.group>

        {/* Robot chest and body */}
        <e.group theatreKey="robot_chest" name="chest_97" position={[0, 2.53, -6.4]} rotation={[-0.105, 0, 0]}>
          <e.group
            theatreKey="robot_arm_right_detailed"
            name="arm_88"
            position={[1.062, 1.298, -0.288]}
            rotation={[-2.67, 0.186, -0.201]}
          >
            {/* Right arm detailed structure */}
          </e.group>
        </e.group>

        {/* Additional robot body parts */}
        <e.group theatreKey="robot_body_parts">
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
        </e.group>

        {/* Sci-fi room elements */}
        <e.group theatreKey="scifi_room">
          {/* Tunnel and door elements */}
          <mesh
            name="Frame1_Scifi_Tunnel_Loop_M_0001"
            castShadow
            receiveShadow
            geometry={nodes.Frame1_Scifi_Tunnel_Loop_M_0001.geometry}
            material={materials['Scifi_Tunnel_Loop_M.002']}
            position={[0, 2.439, 15.247]}
            scale={0.01}
          />
          <e.group
            theatreKey="tunnel_door_left"
            name="Tunnel_door_L2_Scifi_Tunnel_Door_0001"
          >
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
          
          {/* Glass doors */}
          <e.group
            theatreKey="glass_door_1"
            name="Tunnel_Glass_L_Door_Scifi_Door_Glass_0001"
          >
            <mesh
              name="Tunnel_Glass_L_Door_Scifi_Door_Glass_0001"
              castShadow
              receiveShadow
              geometry={nodes.Tunnel_Glass_L_Door_Scifi_Door_Glass_0001.geometry}
              material={materials['Scifi_Door_Glass.006']}
              position={[-1.303, 2.198, 24.844]}
              scale={0.01}
            />
          </e.group>
          
          <e.group
            theatreKey="glass_door_2"
            name="Tunnel_Glass_L_Door1_Scifi_Door_Glass_0001"
          >
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
          
          <e.group
            theatreKey="glass_door_3"
            name="Tunnel_Glass_L_Door2_Scifi_Door_Glass_0001"
          >
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
        </e.group>

        {/* Additional room elements */}
        <e.group theatreKey="room_furniture">
          {/* Center table */}
          <mesh
            name="Center_Table_Scifi_Center_Table_mat_0"
            castShadow
            receiveShadow
            geometry={nodes.Center_Table_Scifi_Center_Table_mat_0.geometry}
            material={materials['Scifi_Center_Table_mat.002']}
            position={[-0.011, 0.643, -57.621]}
            scale={0.01}
          />
          
          {/* Floor */}
          <mesh
            name="Floor_Scifi_Floor_mat_0"
            castShadow
            receiveShadow
            geometry={nodes.Floor_Scifi_Floor_mat_0.geometry}
            material={materials['Scifi_Floor_mat.002']}
            position={[-0.013, -0.125, -57.553]}
            scale={0.01}
          />
          
          {/* Roof */}
          <mesh
            name="Roof_Scifi_Roof_mat_0"
            castShadow
            receiveShadow
            geometry={nodes.Roof_Scifi_Roof_mat_0.geometry}
            material={materials['Scifi_Roof_mat.002']}
            position={[0, 5.789, -57.654]}
            scale={0.01}
          />
          
          {/* Bench */}
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
        </e.group>

        {/* Wall elements */}
        <e.group theatreKey="room_walls">
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
            name="Wall__Scifi_Wall_mat_0876"
            castShadow
            receiveShadow
            geometry={nodes.Wall__Scifi_Wall_mat_0876.geometry}
            material={materials['Scifi_Wall_mat.005']}
            position={[-5.573, 2.244, -50.45]}
            scale={0.01}
          />
          
          {/* Window glass */}
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
            name="Wall__Scifi_Window_Glass_0001"
            castShadow
            receiveShadow
            geometry={nodes.Wall__Scifi_Window_Glass_0001.geometry}
            material={materials['Material.024']}
            position={[-8.796, 2.244, -60.506]}
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
        </e.group>
      </group>
    </group>
  );
});

useGLTF.preload('/models/RoomWithRobo/latest_compressed_room_model.glb'); 