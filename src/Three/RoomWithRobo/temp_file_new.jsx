import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function CompressedRoomWithRobo(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    '/models/RoomWithRobo/latest_compressed_room_model.glb'
  )
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
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
        <group name="GLTF_SceneRootNode" position={[0, 0, -6.274]}>
          <group name="Empty001_74">
            <group name="Armature003_73">
              <group name="Bone_72" position={[4.968, 0.437, 0]}>
                <group name="Bone001_70" position={[0, 1, 0]} rotation={[0, 0, -0.471]}>
                  <group name="Bone002_68" position={[0, 3.245, 0]} rotation={[0, 0, 1.255]}>
                    <group name="Bone003_66" position={[0, 1.849, 0]} rotation={[0, 0, 1.165]}>
                      <group name="Bone004_64" position={[0, 2.63, 0]} rotation={[0, 0, 0.107]}>
                        <group
                          name="Bone005_50"
                          position={[0.023, 0.176, 0.21]}
                          rotation={[1.366, -0.373, -0.431]}>
                          <group
                            name="Bone006_48"
                            position={[0, 0.202, 0]}
                            rotation={[-1.03, -0.189, 0.386]}>
                            <group
                              name="Bone007_46"
                              position={[0, 0.458, 0]}
                              rotation={[2.37, -0.43, 2.917]}>
                              <group
                                name="Plane038_45"
                                position={[1.645, 3.691, 0.344]}
                                rotation={[2.794, 0.519, 0.945]}>
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
                            <group
                              name="Plane049_47"
                              position={[-2.35, 3.261, -1.751]}
                              rotation={[-0.361, -0.039, -2.148]}>
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
                          <group
                            name="Plane047_49"
                            position={[-3.016, -0.722, -3.046]}
                            rotation={[-1.368, -0.349, -1.846]}>
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
                        </group>
                        <group
                          name="Bone008_56"
                          position={[0.031, 0.178, -0.188]}
                          rotation={[0.112, 1.119, -1.601]}>
                          <group
                            name="Bone009_54"
                            position={[0, 0.183, 0]}
                            rotation={[-0.076, -0.063, 0.997]}>
                            <group
                              name="Bone010_52"
                              position={[0, 0.456, 0]}
                              rotation={[0.026, 0.009, 0.732]}>
                              <group
                                name="Plane045_51"
                                position={[0.063, 3.727, -1.569]}
                                rotation={[-0.696, -1.066, -3.05]}>
                                <mesh
                                  name="Object_111"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_111.geometry}
                                  material={materials['Material.004']}
                                  position={[1.243, 3.573, -0.44]}
                                />
                              </group>
                            </group>
                            <group
                              name="Plane050_53"
                              position={[-2.458, 3.31, -1.472]}
                              rotation={[0.779, -1.025, -1.461]}>
                              <mesh
                                name="Object_113"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_113.geometry}
                                material={materials.metal}
                                position={[1.402, 3.754, -0.51]}
                              />
                              <mesh
                                name="Object_114"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_114.geometry}
                                material={materials['Material.004']}
                                position={[1.582, 3.881, -0.447]}
                              />
                            </group>
                          </group>
                          <group
                            name="Plane048_55"
                            position={[-3.962, -0.644, -1.668]}
                            rotation={[1.12, -0.084, -0.712]}>
                            <mesh
                              name="Object_116"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_116.geometry}
                              material={materials.metal}
                              position={[1.75, 3.979, -0.357]}
                            />
                            <mesh
                              name="Object_117"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_117.geometry}
                              material={materials['Material.004']}
                              position={[1.807, 3.959, -0.248]}
                            />
                          </group>
                        </group>
                        <group
                          name="Bone011_62"
                          position={[-0.243, 0.177, 0.035]}
                          rotation={[-2.476, 0.147, 1.636]}>
                          <group
                            name="Bone012_60"
                            position={[0, 0.164, 0]}
                            rotation={[0.544, 0.231, 0.789]}>
                            <group
                              name="Bone013_58"
                              position={[0, 0.449, 0]}
                              rotation={[0.476, 0.137, 0.552]}>
                              <group
                                name="Plane046_57"
                                position={[1.738, 2.936, -1.487]}
                                rotation={[Math.PI, -0.718, 1.202]}>
                                <mesh
                                  name="Object_122"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_122.geometry}
                                  material={materials['Material.004']}
                                  position={[1.678, 3.09, 0.023]}
                                />
                              </group>
                            </group>
                            <group
                              name="Plane052_59"
                              position={[-0.264, 4.152, 0.261]}
                              rotation={[Math.PI, -0.718, 0.441]}>
                              <mesh
                                name="Object_124"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_124.geometry}
                                material={materials.metal}
                                position={[1.91, 3.187, 0.023]}
                              />
                              <mesh
                                name="Object_125"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_125.geometry}
                                material={materials['Material.004']}
                                position={[2.023, 3.387, 0.023]}
                              />
                            </group>
                          </group>
                          <group
                            name="Plane051_61"
                            position={[-2.988, 2.004, 2.248]}
                            rotation={[3.046, -0.674, -0.643]}>
                            <mesh
                              name="Object_127"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_127.geometry}
                              material={materials.metal}
                              position={[2.095, 3.595, 0.023]}
                            />
                            <mesh
                              name="Object_128"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_128.geometry}
                              material={materials['Material.004']}
                              position={[2.048, 3.691, 0.023]}
                            />
                          </group>
                        </group>
                        <group
                          name="Plane037_63"
                          position={[-1.699, 4.162, 0]}
                          rotation={[0, 0, -2.296]}>
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
                        </group>
                      </group>
                      <group
                        name="Plane032_65"
                        position={[-2.134, 6.587, 0]}
                        rotation={[0, 0, -2.189]}>
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
                      </group>
                    </group>
                    <group
                      name="Plane036_67"
                      position={[-6.894, 2.487, 0]}
                      rotation={[0, 0, -1.024]}>
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
                    </group>
                  </group>
                  <group name="Plane035_69" position={[-4.508, -2.534, 0]} rotation={[0, 0, 0.231]}>
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
                  </group>
                </group>
                <group name="Plane034_71" position={[-4.968, -0.437, 0]}>
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
                </group>
              </group>
            </group>
          </group>
          <group name="Empty002_44" rotation={[Math.PI, -1.032, Math.PI]}>
            <group name="Armature001_43">
              <group name="Bone_42" position={[4.968, 0.437, 0]}>
                <group name="Bone001_40" position={[0, 1, 0]} rotation={[0, 0, -0.471]}>
                  <group name="Bone002_38" position={[0, 3.245, 0]} rotation={[0, 0, 1.255]}>
                    <group name="Bone003_36" position={[0, 1.849, 0]} rotation={[0, 0, 1.165]}>
                      <group name="Bone004_34" position={[0, 2.63, 0]} rotation={[0, 0, 0.107]}>
                        <group
                          name="Bone005_20"
                          position={[0.023, 0.176, 0.21]}
                          rotation={[1.366, -0.373, -0.431]}>
                          <group
                            name="Bone006_18"
                            position={[0, 0.202, 0]}
                            rotation={[-1.03, -0.189, 0.386]}>
                            <group
                              name="Bone007_16"
                              position={[0, 0.458, 0]}
                              rotation={[2.37, -0.43, 2.917]}>
                              <group
                                name="Plane030_15"
                                position={[1.645, 3.691, 0.344]}
                                rotation={[2.794, 0.519, 0.945]}>
                                <mesh
                                  name="Object_45"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_45.geometry}
                                  material={materials['Material.004']}
                                  position={[1.243, 3.573, 0.485]}
                                />
                              </group>
                            </group>
                            <group
                              name="Plane041_17"
                              position={[-2.35, 3.261, -1.751]}
                              rotation={[-0.361, -0.039, -2.148]}>
                              <mesh
                                name="Object_47"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_47.geometry}
                                material={materials.metal}
                                position={[1.405, 3.751, 0.543]}
                              />
                              <mesh
                                name="Object_48"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_48.geometry}
                                material={materials['Material.004']}
                                position={[1.582, 3.881, 0.493]}
                              />
                            </group>
                          </group>
                          <group
                            name="Plane039_19"
                            position={[-3.016, -0.722, -3.046]}
                            rotation={[-1.368, -0.349, -1.846]}>
                            <mesh
                              name="Object_50"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_50.geometry}
                              material={materials.metal}
                              position={[1.755, 3.98, 0.397]}
                            />
                            <mesh
                              name="Object_51"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_51.geometry}
                              material={materials['Material.004']}
                              position={[1.819, 3.97, 0.294]}
                            />
                          </group>
                        </group>
                        <group
                          name="Bone008_26"
                          position={[0.031, 0.178, -0.188]}
                          rotation={[0.112, 1.119, -1.601]}>
                          <group
                            name="Bone009_24"
                            position={[0, 0.183, 0]}
                            rotation={[-0.076, -0.063, 0.997]}>
                            <group
                              name="Bone010_22"
                              position={[0, 0.456, 0]}
                              rotation={[0.026, 0.009, 0.732]}>
                              <group
                                name="Plane031_21"
                                position={[0.063, 3.727, -1.569]}
                                rotation={[-0.696, -1.066, -3.05]}>
                                <mesh
                                  name="Object_56"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_56.geometry}
                                  material={materials['Material.004']}
                                  position={[1.243, 3.573, -0.44]}
                                />
                              </group>
                            </group>
                            <group
                              name="Plane042_23"
                              position={[-2.458, 3.31, -1.472]}
                              rotation={[0.779, -1.025, -1.461]}>
                              <mesh
                                name="Object_58"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_58.geometry}
                                material={materials.metal}
                                position={[1.402, 3.754, -0.51]}
                              />
                              <mesh
                                name="Object_59"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_59.geometry}
                                material={materials['Material.004']}
                                position={[1.582, 3.881, -0.447]}
                              />
                            </group>
                          </group>
                          <group
                            name="Plane040_25"
                            position={[-3.962, -0.644, -1.668]}
                            rotation={[1.12, -0.084, -0.712]}>
                            <mesh
                              name="Object_61"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_61.geometry}
                              material={materials.metal}
                              position={[1.75, 3.979, -0.357]}
                            />
                            <mesh
                              name="Object_62"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_62.geometry}
                              material={materials['Material.004']}
                              position={[1.807, 3.959, -0.248]}
                            />
                          </group>
                        </group>
                        <group
                          name="Bone011_32"
                          position={[-0.243, 0.177, 0.035]}
                          rotation={[-2.476, 0.147, 1.636]}>
                          <group
                            name="Bone012_30"
                            position={[0, 0.164, 0]}
                            rotation={[0.544, 0.231, 0.789]}>
                            <group
                              name="Bone013_28"
                              position={[0, 0.449, 0]}
                              rotation={[0.476, 0.137, 0.552]}>
                              <group
                                name="Plane033_27"
                                position={[1.738, 2.936, -1.487]}
                                rotation={[Math.PI, -0.718, 1.202]}>
                                <mesh
                                  name="Object_67"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_67.geometry}
                                  material={materials['Material.004']}
                                  position={[1.678, 3.09, 0.023]}
                                />
                              </group>
                            </group>
                            <group
                              name="Plane044_29"
                              position={[-0.264, 4.152, 0.261]}
                              rotation={[Math.PI, -0.718, 0.441]}>
                              <mesh
                                name="Object_69"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_69.geometry}
                                material={materials.metal}
                                position={[1.91, 3.187, 0.023]}
                              />
                              <mesh
                                name="Object_70"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_70.geometry}
                                material={materials['Material.004']}
                                position={[2.023, 3.387, 0.023]}
                              />
                            </group>
                          </group>
                          <group
                            name="Plane043_31"
                            position={[-2.988, 2.004, 2.248]}
                            rotation={[3.046, -0.674, -0.643]}>
                            <mesh
                              name="Object_72"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_72.geometry}
                              material={materials.metal}
                              position={[2.095, 3.595, 0.023]}
                            />
                            <mesh
                              name="Object_73"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_73.geometry}
                              material={materials['Material.004']}
                              position={[2.048, 3.691, 0.023]}
                            />
                          </group>
                        </group>
                        <group
                          name="Plane029_33"
                          position={[-1.699, 4.162, 0]}
                          rotation={[0, 0, -2.296]}>
                          <mesh
                            name="Object_75"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_75.geometry}
                            material={materials['Material.004']}
                            position={[1.854, 3.876, 0.012]}
                          />
                          <mesh
                            name="Object_76"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_76.geometry}
                            material={materials.red_glow}
                            position={[1.873, 3.894, 0.012]}
                          />
                        </group>
                      </group>
                      <group
                        name="Plane025_35"
                        position={[-2.134, 6.587, 0]}
                        rotation={[0, 0, -2.189]}>
                        <mesh
                          name="Object_78"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_78.geometry}
                          material={materials['Wall Paint']}
                          position={[3.367, 5.092, 0.008]}
                        />
                        <mesh
                          name="Object_79"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_79.geometry}
                          material={materials['Material.004']}
                          position={[3.363, 5.023, 0.001]}
                        />
                      </group>
                    </group>
                    <group
                      name="Plane028_37"
                      position={[-6.894, 2.487, 0]}
                      rotation={[0, 0, -1.024]}>
                      <mesh
                        name="Object_81"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_81.geometry}
                        material={materials['Wall Paint']}
                        position={[4.154, 5.533, -0.025]}
                      />
                      <mesh
                        name="Object_82"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_82.geometry}
                        material={materials['Material.004']}
                        position={[4.786, 5.471, -0.006]}
                      />
                    </group>
                  </group>
                  <group name="Plane027_39" position={[-4.508, -2.534, 0]} rotation={[0, 0, 0.231]}>
                    <mesh
                      name="Object_84"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_84.geometry}
                      material={materials['Wall Paint']}
                      position={[5.709, 4.518, -0.024]}
                    />
                    <mesh
                      name="Object_85"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_85.geometry}
                      material={materials['Material.004']}
                      position={[5.514, 3.675, 0.013]}
                    />
                  </group>
                </group>
                <group name="Plane026_41" position={[-4.968, -0.437, 0]}>
                  <mesh
                    name="Object_87"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_87.geometry}
                    material={materials['Wall Paint']}
                    position={[4.965, 1.395, -0.024]}
                  />
                  <mesh
                    name="Object_88"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_88.geometry}
                    material={materials['Material.004']}
                    position={[4.964, 1.193, -0.01]}
                  />
                </group>
              </group>
            </group>
          </group>
          <group name="Empty_14" position={[0, 11.197, 0]} rotation={[-Math.PI, 1.129, -Math.PI]}>
            <group name="Armature002_13" position={[0, -11.197, 0]}>
              <group name="GLTF_created_0" position={[1.511, 7.143, -1.048]}>
                <group name="GLTF_created_0_rootJoint" position={[-0.786, -7.143, -1.662]}>
                  <group
                    name="Bone_11"
                    position={[1.809, 11.134, 3.828]}
                    rotation={[-Math.PI, 1.129, -0.211]}>
                    <group name="Bone001_9" position={[0, 2.478, 0]} rotation={[0, 0, 1.024]}>
                      <group name="Bone002_7" position={[0, 2.514, 0]} rotation={[0, 0, -0.085]}>
                        <group name="Bone003_5" position={[0, 1.199, 0]} rotation={[0, 0, 1.703]}>
                          <group
                            name="Bone004_3"
                            position={[0, 1.426, 0]}
                            rotation={[0, 0, -1.515]}>
                            <group
                              name="Bone005_1"
                              position={[-0.861, 1.193, 0]}
                              rotation={[0, 0, -0.916]}>
                              <group
                                name="Cylinder005_0"
                                position={[0.945, 7.009, 2.721]}
                                rotation={[0, 0, -Math.PI]}>
                                <mesh
                                  name="Object_32"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_32.geometry}
                                  material={materials['Material.004']}
                                  position={[0.26, 6.73, -0.075]}
                                />
                                <mesh
                                  name="Object_33"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_33.geometry}
                                  material={materials['Wall Paint']}
                                  position={[0.26, 6.158, -0.075]}
                                />
                              </group>
                            </group>
                            <group
                              name="Cylinder008_2"
                              position={[5.285, 4.721, 2.721]}
                              rotation={[0, 0, 2.226]}>
                              <mesh
                                name="Object_28"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_28.geometry}
                                material={materials.metal}
                                position={[0.238, 6.025, -0.056]}
                              />
                              <mesh
                                name="Object_29"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_29.geometry}
                                material={materials['Material.004']}
                                position={[0.08, 6.155, -0.064]}
                              />
                            </group>
                          </group>
                          <group
                            name="Cylinder007_4"
                            position={[5.272, -3.833, 2.721]}
                            rotation={[0, 0, 0.711]}>
                            <mesh
                              name="Object_24"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_24.geometry}
                              material={materials.metal}
                              position={[-1.181, 7.163, -0.056]}
                            />
                            <mesh
                              name="Object_25"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_25.geometry}
                              material={materials['Material.004']}
                              position={[-1.266, 7.089, -0.064]}
                            />
                          </group>
                        </group>
                        <group
                          name="Cylinder006_6"
                          position={[3.007, 6.75, 2.721]}
                          rotation={[0, 0, 2.414]}>
                          <mesh
                            name="Object_20"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_20.geometry}
                            material={materials.metal}
                            position={[-2.127, 6.101, -0.056]}
                          />
                          <mesh
                            name="Object_21"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_21.geometry}
                            material={materials['Material.004']}
                            position={[-2.198, 6.165, -0.064]}
                          />
                        </group>
                      </group>
                      <group
                        name="Cylinder003_8"
                        position={[3.569, 8.984, 2.721]}
                        rotation={[0, 0, 2.329]}>
                        <mesh
                          name="Object_16"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_16.geometry}
                          material={materials.vray_Open_book_pages_02}
                          position={[-3.858, 7.845, -0.052]}
                        />
                        <mesh
                          name="Object_17"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_17.geometry}
                          material={materials['Material.004']}
                          position={[-3.77, 7.917, -0.049]}
                        />
                      </group>
                    </group>
                    <group
                      name="Cube014_10"
                      position={[-5.801, 10.128, 2.721]}
                      rotation={[0, 0, -2.931]}>
                      <mesh
                        name="Object_11"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_11.geometry}
                        material={materials['Wall Paint']}
                        position={[-4.18, 10.428, 0.008]}
                      />
                      <mesh
                        name="Object_12"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_12.geometry}
                        material={materials['Material.004']}
                        position={[-4.43, 9.95, 0.017]}
                      />
                      <mesh
                        name="Object_13"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_13.geometry}
                        material={materials.red_glow}
                        position={[-3.5, 10.79, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group
            name="eye_l_174"
            position={[-0.228, 4.076, 0.69]}
            rotation={[-0.208, -0.061, 0.023]}
          />
          <group
            name="eye_r_175"
            position={[0.144, 4.094, 0.733]}
            rotation={[-0.208, -0.061, 0.023]}
          />
          <group
            name="eyes001_84"
            position={[0.144, 4.094, 0.733]}
            rotation={[-0.208, -0.061, 0.023]}>
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
        <group name="chest_97" position={[0, 2.53, -6.4]} rotation={[-0.105, 0, 0]}>
          <group name="arm_88" position={[1.062, 1.298, -0.288]} rotation={[-2.67, 0.186, -0.201]}>
            <group
              name="Cube008_87"
              position={[-1.721, 3.327, -0.619]}
              rotation={[3.14, 0.032, -0.175]}>
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
              <group
                name="Cube009_85"
                position={[-1.404, 2.792, -0.581]}
                rotation={[-3.134, 0.032, -0.058]}>
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
        <mesh
          name="Frame1_Scifi_Tunnel_Loop_M_0001"
          castShadow
          receiveShadow
          geometry={nodes.Frame1_Scifi_Tunnel_Loop_M_0001.geometry}
          material={materials['Scifi_Tunnel_Loop_M.002']}
          position={[0, 2.439, 15.247]}
          scale={0.01}
        />
        <mesh
          name="Tunnel_door_L2_Scifi_Tunnel_Door_0001"
          castShadow
          receiveShadow
          geometry={nodes.Tunnel_door_L2_Scifi_Tunnel_Door_0001.geometry}
          material={materials['Scifi_Tunnel_Door.002']}
          position={[-0.869, 2.187, 15.762]}
          scale={0.01}
        />
        <mesh
          name="Tunnel_Glass_L_Door_Scifi_Door_Glass_0001"
          castShadow
          receiveShadow
          geometry={nodes.Tunnel_Glass_L_Door_Scifi_Door_Glass_0001.geometry}
          material={materials['Scifi_Door_Glass.006']}
          position={[-1.303, 2.198, 24.844]}
          scale={0.01}
        />
        <mesh
          name="Tunnel_Glass_L_Door1_Scifi_Door_Glass_0001"
          castShadow
          receiveShadow
          geometry={nodes.Tunnel_Glass_L_Door1_Scifi_Door_Glass_0001.geometry}
          material={materials['Scifi_Door_Glass.002']}
          position={[-1.303, 2.198, 18.775]}
          scale={0.01}
        />
        <mesh
          name="Tunnel_Glass_L_Door2_Scifi_Door_Glass_0001"
          castShadow
          receiveShadow
          geometry={nodes.Tunnel_Glass_L_Door2_Scifi_Door_Glass_0001.geometry}
          material={materials['Scifi_Door_Glass.004']}
          position={[-1.303, 2.198, 30.913]}
          scale={0.01}
        />
        <group
          name="Object_7001"
          position={[0.027, 2.54, -57.589]}
          rotation={[-Math.PI / 2, 0, -3.138]}
          scale={[-3, 3, 0.292]}>
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
        <mesh
          name="Tunnel_door_L2_Scifi_Tunnel_Door_0"
          castShadow
          receiveShadow
          geometry={nodes.Tunnel_door_L2_Scifi_Tunnel_Door_0.geometry}
          material={materials['Scifi_Tunnel_Door.003']}
          position={[-0.869, 2.269, -47.385]}
          scale={0.01}
        />
        <mesh
          name="Tunnel_Glass_L_Door_Scifi_Door_Glass_0"
          castShadow
          receiveShadow
          geometry={nodes.Tunnel_Glass_L_Door_Scifi_Door_Glass_0.geometry}
          material={materials['Scifi_Door_Glass.003']}
          position={[-1.303, 2.28, -37.788]}
          scale={0.01}
        />
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
      </group>
    </group>
  )
}

useGLTF.preload('/compressed_1754297760510_Incubation without element & with out gradient (1).glb')
