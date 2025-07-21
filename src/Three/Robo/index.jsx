"use client";
import React, { useEffect, useRef, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";

export function Robo(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Robo/robo.glb");
  const { actions, names, clips } = useAnimations(animations, group);
  
  // Memoize complex geometries and materials to prevent re-creation
  const memoizedNodes = useMemo(() => nodes, [nodes]);
  const memoizedMaterials = useMemo(() => materials, [materials]);

  useEffect(() => {
    console.log({ actions, names, animations, clips });

  }, [animations, actions, names, clips]);

  return (
    <group
      theatreKey="robo"
      ref={group}
      {...props}
      dispose={null}
      scale={0.4}
      position={[0, 0.5, 0]}
    >
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cylinder_78">
                <mesh
                  name="Object_150"
                  castShadow
                  receiveShadow
                  geometry={memoizedNodes.Object_150.geometry}
                  material={memoizedMaterials.glow}
                  frustumCulled
                />
              </group>
              <group name="Empty001_74">
                <group name="Armature003_73">
                  <group name="Bone_72" position={[4.968, 0.437, 0]}>
                    <group
                      name="Bone001_70"
                      position={[0, 1, 0]}
                      rotation={[0, 0, -0.471]}
                    >
                      <group
                        name="Bone002_68"
                        position={[0, 3.245, 0]}
                        rotation={[0, 0, 1.255]}
                      >
                        <group
                          name="Bone003_66"
                          position={[0, 1.849, 0]}
                          rotation={[0, 0, 1.165]}
                        >
                          <group
                            name="Bone004_64"
                            position={[0, 2.63, 0]}
                            rotation={[0, 0, 0.107]}
                          >
                            <group
                              name="Bone005_50"
                              position={[0.023, 0.176, 0.21]}
                              rotation={[1.366, -0.373, -0.431]}
                            >
                              <group
                                name="Bone006_48"
                                position={[0, 0.202, 0]}
                                rotation={[-1.03, -0.189, 0.386]}
                              >
                                <group
                                  name="Bone007_46"
                                  position={[0, 0.458, 0]}
                                  rotation={[2.37, -0.43, 2.917]}
                                >
                                  <group
                                    name="Plane038_45"
                                    position={[1.645, 3.691, 0.344]}
                                    rotation={[2.794, 0.519, 0.945]}
                                  >
                                    <mesh
                                      name="Object_100"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_100.geometry}
                                      material={materials["Material.004"]}
                                    />
                                  </group>
                                </group>
                                <group
                                  name="Plane049_47"
                                  position={[-2.35, 3.261, -1.751]}
                                  rotation={[-0.361, -0.039, -2.148]}
                                >
                                  <mesh
                                    name="Object_102"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_102.geometry}
                                    material={materials.metal}
                                  />
                                  <mesh
                                    name="Object_103"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_103.geometry}
                                    material={materials["Material.004"]}
                                  />
                                </group>
                              </group>
                              <group
                                name="Plane047_49"
                                position={[-3.016, -0.722, -3.046]}
                                rotation={[-1.368, -0.349, -1.846]}
                              >
                                <mesh
                                  name="Object_105"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_105.geometry}
                                  material={materials.metal}
                                />
                                <mesh
                                  name="Object_106"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_106.geometry}
                                  material={materials["Material.004"]}
                                />
                              </group>
                            </group>
                            <group
                              name="Bone008_56"
                              position={[0.031, 0.178, -0.188]}
                              rotation={[0.112, 1.119, -1.601]}
                            >
                              <group
                                name="Bone009_54"
                                position={[0, 0.183, 0]}
                                rotation={[-0.076, -0.063, 0.997]}
                              >
                                <group
                                  name="Bone010_52"
                                  position={[0, 0.456, 0]}
                                  rotation={[0.026, 0.009, 0.732]}
                                >
                                  <group
                                    name="Plane045_51"
                                    position={[0.063, 3.727, -1.569]}
                                    rotation={[-0.696, -1.066, -3.05]}
                                  >
                                    <mesh
                                      name="Object_111"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_111.geometry}
                                      material={materials["Material.004"]}
                                    />
                                  </group>
                                </group>
                                <group
                                  name="Plane050_53"
                                  position={[-2.458, 3.31, -1.472]}
                                  rotation={[0.779, -1.025, -1.461]}
                                >
                                  <mesh
                                    name="Object_113"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_113.geometry}
                                    material={materials.metal}
                                  />
                                  <mesh
                                    name="Object_114"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_114.geometry}
                                    material={materials["Material.004"]}
                                  />
                                </group>
                              </group>
                              <group
                                name="Plane048_55"
                                position={[-3.962, -0.644, -1.668]}
                                rotation={[1.12, -0.084, -0.712]}
                              >
                                <mesh
                                  name="Object_116"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_116.geometry}
                                  material={materials.metal}
                                />
                                <mesh
                                  name="Object_117"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_117.geometry}
                                  material={materials["Material.004"]}
                                />
                              </group>
                            </group>
                            <group
                              name="Bone011_62"
                              position={[-0.243, 0.177, 0.035]}
                              rotation={[-2.476, 0.147, 1.636]}
                            >
                              <group
                                name="Bone012_60"
                                position={[0, 0.164, 0]}
                                rotation={[0.544, 0.231, 0.789]}
                              >
                                <group
                                  name="Bone013_58"
                                  position={[0, 0.449, 0]}
                                  rotation={[0.476, 0.137, 0.552]}
                                >
                                  <group
                                    name="Plane046_57"
                                    position={[1.738, 2.936, -1.487]}
                                    rotation={[Math.PI, -0.718, 1.202]}
                                  >
                                    <mesh
                                      name="Object_122"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_122.geometry}
                                      material={materials["Material.004"]}
                                    />
                                  </group>
                                </group>
                                <group
                                  name="Plane052_59"
                                  position={[-0.264, 4.152, 0.261]}
                                  rotation={[Math.PI, -0.718, 0.441]}
                                >
                                  <mesh
                                    name="Object_124"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_124.geometry}
                                    material={materials.metal}
                                  />
                                  <mesh
                                    name="Object_125"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_125.geometry}
                                    material={materials["Material.004"]}
                                  />
                                </group>
                              </group>
                              <group
                                name="Plane051_61"
                                position={[-2.988, 2.004, 2.248]}
                                rotation={[3.046, -0.674, -0.643]}
                              >
                                <mesh
                                  name="Object_127"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_127.geometry}
                                  material={materials.metal}
                                />
                                <mesh
                                  name="Object_128"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_128.geometry}
                                  material={materials["Material.004"]}
                                />
                              </group>
                            </group>
                            <group
                              name="Plane037_63"
                              position={[-1.699, 4.162, 0]}
                              rotation={[0, 0, -2.296]}
                            >
                              <mesh
                                name="Object_130"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_130.geometry}
                                material={materials["Material.004"]}
                              />
                              <mesh
                                name="Object_131"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_131.geometry}
                                material={materials.red_glow}
                              />
                            </group>
                          </group>
                          <group
                            name="Plane032_65"
                            position={[-2.134, 6.587, 0]}
                            rotation={[0, 0, -2.189]}
                          >
                            <mesh
                              name="Object_133"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_133.geometry}
                              material={materials.metal}
                            />
                            <mesh
                              name="Object_134"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_134.geometry}
                              material={materials["Material.004"]}
                            />
                          </group>
                        </group>
                        <group
                          name="Plane036_67"
                          position={[-6.894, 2.487, 0]}
                          rotation={[0, 0, -1.024]}
                        >
                          <mesh
                            name="Object_136"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_136.geometry}
                            material={materials.metal}
                          />
                          <mesh
                            name="Object_137"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_137.geometry}
                            material={materials["Material.004"]}
                          />
                        </group>
                      </group>
                      <group
                        name="Plane035_69"
                        position={[-4.508, -2.534, 0]}
                        rotation={[0, 0, 0.231]}
                      >
                        <mesh
                          name="Object_139"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_139.geometry}
                          material={materials.metal}
                        />
                        <mesh
                          name="Object_140"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_140.geometry}
                          material={materials["Material.004"]}
                        />
                      </group>
                    </group>
                    <group name="Plane034_71" position={[-4.968, -0.437, 0]}>
                      <mesh
                        name="Object_142"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_142.geometry}
                        material={materials.metal}
                      />
                      <mesh
                        name="Object_143"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_143.geometry}
                        material={materials["Material.004"]}
                      />
                    </group>
                  </group>
                </group>
              </group>
              <group name="Empty002_44" rotation={[Math.PI, -1.032, Math.PI]}>
                <group name="Armature001_43">
                  <group name="Bone_42" position={[4.968, 0.437, 0]}>
                    <group
                      name="Bone001_40"
                      position={[0, 1, 0]}
                      rotation={[0, 0, -0.471]}
                    >
                      <group
                        name="Bone002_38"
                        position={[0, 3.245, 0]}
                        rotation={[0, 0, 1.255]}
                      >
                        <group
                          name="Bone003_36"
                          position={[0, 1.849, 0]}
                          rotation={[0, 0, 1.165]}
                        >
                          <group
                            name="Bone004_34"
                            position={[0, 2.63, 0]}
                            rotation={[0, 0, 0.107]}
                          >
                            <group
                              name="Bone005_20"
                              position={[0.023, 0.176, 0.21]}
                              rotation={[1.366, -0.373, -0.431]}
                            >
                              <group
                                name="Bone006_18"
                                position={[0, 0.202, 0]}
                                rotation={[-1.03, -0.189, 0.386]}
                              >
                                <group
                                  name="Bone007_16"
                                  position={[0, 0.458, 0]}
                                  rotation={[2.37, -0.43, 2.917]}
                                >
                                  <group
                                    name="Plane030_15"
                                    position={[1.645, 3.691, 0.344]}
                                    rotation={[2.794, 0.519, 0.945]}
                                  >
                                    <mesh
                                      name="Object_45"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_45.geometry}
                                      material={materials["Material.004"]}
                                    />
                                  </group>
                                </group>
                                <group
                                  name="Plane041_17"
                                  position={[-2.35, 3.261, -1.751]}
                                  rotation={[-0.361, -0.039, -2.148]}
                                >
                                  <mesh
                                    name="Object_47"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_47.geometry}
                                    material={materials.metal}
                                  />
                                  <mesh
                                    name="Object_48"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_48.geometry}
                                    material={materials["Material.004"]}
                                  />
                                </group>
                              </group>
                              <group
                                name="Plane039_19"
                                position={[-3.016, -0.722, -3.046]}
                                rotation={[-1.368, -0.349, -1.846]}
                              >
                                <mesh
                                  name="Object_50"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_50.geometry}
                                  material={materials.metal}
                                />
                                <mesh
                                  name="Object_51"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_51.geometry}
                                  material={materials["Material.004"]}
                                />
                              </group>
                            </group>
                            <group
                              name="Bone008_26"
                              position={[0.031, 0.178, -0.188]}
                              rotation={[0.112, 1.119, -1.601]}
                            >
                              <group
                                name="Bone009_24"
                                position={[0, 0.183, 0]}
                                rotation={[-0.076, -0.063, 0.997]}
                              >
                                <group
                                  name="Bone010_22"
                                  position={[0, 0.456, 0]}
                                  rotation={[0.026, 0.009, 0.732]}
                                >
                                  <group
                                    name="Plane031_21"
                                    position={[0.063, 3.727, -1.569]}
                                    rotation={[-0.696, -1.066, -3.05]}
                                  >
                                    <mesh
                                      name="Object_56"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_56.geometry}
                                      material={materials["Material.004"]}
                                    />
                                  </group>
                                </group>
                                <group
                                  name="Plane042_23"
                                  position={[-2.458, 3.31, -1.472]}
                                  rotation={[0.779, -1.025, -1.461]}
                                >
                                  <mesh
                                    name="Object_58"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_58.geometry}
                                    material={materials.metal}
                                  />
                                  <mesh
                                    name="Object_59"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_59.geometry}
                                    material={materials["Material.004"]}
                                  />
                                </group>
                              </group>
                              <group
                                name="Plane040_25"
                                position={[-3.962, -0.644, -1.668]}
                                rotation={[1.12, -0.084, -0.712]}
                              >
                                <mesh
                                  name="Object_61"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_61.geometry}
                                  material={materials.metal}
                                />
                                <mesh
                                  name="Object_62"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_62.geometry}
                                  material={materials["Material.004"]}
                                />
                              </group>
                            </group>
                            <group
                              name="Bone011_32"
                              position={[-0.243, 0.177, 0.035]}
                              rotation={[-2.476, 0.147, 1.636]}
                            >
                              <group
                                name="Bone012_30"
                                position={[0, 0.164, 0]}
                                rotation={[0.544, 0.231, 0.789]}
                              >
                                <group
                                  name="Bone013_28"
                                  position={[0, 0.449, 0]}
                                  rotation={[0.476, 0.137, 0.552]}
                                >
                                  <group
                                    name="Plane033_27"
                                    position={[1.738, 2.936, -1.487]}
                                    rotation={[Math.PI, -0.718, 1.202]}
                                  >
                                    <mesh
                                      name="Object_67"
                                      castShadow
                                      receiveShadow
                                      geometry={nodes.Object_67.geometry}
                                      material={materials["Material.004"]}
                                    />
                                  </group>
                                </group>
                                <group
                                  name="Plane044_29"
                                  position={[-0.264, 4.152, 0.261]}
                                  rotation={[Math.PI, -0.718, 0.441]}
                                >
                                  <mesh
                                    name="Object_69"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_69.geometry}
                                    material={materials.metal}
                                  />
                                  <mesh
                                    name="Object_70"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_70.geometry}
                                    material={materials["Material.004"]}
                                  />
                                </group>
                              </group>
                              <group
                                name="Plane043_31"
                                position={[-2.988, 2.004, 2.248]}
                                rotation={[3.046, -0.674, -0.643]}
                              >
                                <mesh
                                  name="Object_72"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_72.geometry}
                                  material={materials.metal}
                                />
                                <mesh
                                  name="Object_73"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.Object_73.geometry}
                                  material={materials["Material.004"]}
                                />
                              </group>
                            </group>
                            <group
                              name="Plane029_33"
                              position={[-1.699, 4.162, 0]}
                              rotation={[0, 0, -2.296]}
                            >
                              <mesh
                                name="Object_75"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_75.geometry}
                                material={materials["Material.004"]}
                              />
                              <mesh
                                name="Object_76"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_76.geometry}
                                material={materials.red_glow}
                              />
                            </group>
                          </group>
                          <group
                            name="Plane025_35"
                            position={[-2.134, 6.587, 0]}
                            rotation={[0, 0, -2.189]}
                          >
                            <mesh
                              name="Object_78"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_78.geometry}
                              material={materials.metal}
                            />
                            <mesh
                              name="Object_79"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_79.geometry}
                              material={materials["Material.004"]}
                            />
                          </group>
                        </group>
                        <group
                          name="Plane028_37"
                          position={[-6.894, 2.487, 0]}
                          rotation={[0, 0, -1.024]}
                        >
                          <mesh
                            name="Object_81"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_81.geometry}
                            material={materials.metal}
                          />
                          <mesh
                            name="Object_82"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_82.geometry}
                            material={materials["Material.004"]}
                          />
                        </group>
                      </group>
                      <group
                        name="Plane027_39"
                        position={[-4.508, -2.534, 0]}
                        rotation={[0, 0, 0.231]}
                      >
                        <mesh
                          name="Object_84"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_84.geometry}
                          material={materials.metal}
                        />
                        <mesh
                          name="Object_85"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_85.geometry}
                          material={materials["Material.004"]}
                        />
                      </group>
                    </group>
                    <group name="Plane026_41" position={[-4.968, -0.437, 0]}>
                      <mesh
                        name="Object_87"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_87.geometry}
                        material={materials.metal}
                      />
                      <mesh
                        name="Object_88"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_88.geometry}
                        material={materials["Material.004"]}
                      />
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="Empty_14"
                position={[0, 11.197, 0]}
                rotation={[-Math.PI, 1.129, -Math.PI]}
              >
                <group name="Armature002_13" position={[0, -11.197, 0]} />
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
                rotation={[-0.208, -0.061, 0.023]}
              >
                <mesh
                  name="Object_167"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_167.geometry}
                  material={materials["glow.001"]}
                />
              </group>
              <group
                name="eyes_83"
                position={[-0.228, 4.076, 0.69]}
                rotation={[-0.208, -0.061, 0.023]}
              >
                <mesh
                  name="Object_165"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_165.geometry}
                  material={materials["glow.001"]}
                />
              </group>
              <group name="floor_77" position={[0, 6.232, 0]} scale={1.111} />
              <group name="NurbsPath_79" position={[6.503, 5.87, 0]} />
              <group
                name="Plane_80"
                position={[-19.918, 5.511, -9.396]}
                rotation={[0.088, -0.567, -1.535]}
              />
              <group name="robot_173" position={[0, 0.202, 0.009]}>
                <group
                  name="hand001_172"
                  position={[-1.319, 2.078, -0.552]}
                  rotation={[-1.853, -0.025, 0]}
                >
                  <group
                    name="elbow001_171"
                    position={[0.009, 0.457, 0.867]}
                    rotation={[0, -1.338, 0]}
                  />
                  <group name="wrist001_170" rotation={[-1.572, 0.032, 0.037]}>
                    <group
                      name="Cube004_169"
                      position={[1.36, 1.978, -0.508]}
                      rotation={[Math.PI, 0.032, 0.012]}
                    >
                      <mesh
                        name="Object_315"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_315.geometry}
                        material={materials.white}
                      />
                    </group>
                    <group
                      name="finger012_150"
                      position={[0.025, 0.474, -0.01]}
                      rotation={[0.008, -0.001, -0.256]}
                    >
                      <group
                        name="finger013_148"
                        position={[0, 0.196, 0]}
                        rotation={[0.002, 0, -0.064]}
                      >
                        <group
                          name="finger014_146"
                          position={[0, 0.194, 0]}
                          rotation={[0.003, 0, -0.091]}
                        >
                          <group
                            name="Plane009_145"
                            position={[0.673, 1.519, -0.519]}
                            rotation={[-Math.PI, 0.032, -0.399]}
                          >
                            <mesh
                              name="Object_282"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_282.geometry}
                              material={materials.grey}
                            />
                          </group>
                        </group>
                        <group
                          name="Plane007_147"
                          position={[0.808, 1.647, -0.515]}
                          rotation={[-Math.PI, 0.032, -0.308]}
                        >
                          <mesh
                            name="Object_284"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_284.geometry}
                            material={materials.grey}
                          />
                        </group>
                      </group>
                      <group
                        name="Plane008_149"
                        position={[0.912, 1.789, -0.512]}
                        rotation={[Math.PI, 0.032, -0.244]}
                      >
                        <mesh
                          name="Object_286"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_286.geometry}
                          material={materials.grey}
                        />
                      </group>
                    </group>
                    <group
                      name="finger015_156"
                      position={[0.018, 0.46, 0.193]}
                      rotation={[0.008, -0.001, -0.256]}
                    >
                      <group
                        name="finger016_154"
                        position={[0, 0.196, 0]}
                        rotation={[0.002, 0, -0.064]}
                      >
                        <group
                          name="finger017_152"
                          position={[0, 0.194, 0]}
                          rotation={[0.003, 0, -0.091]}
                        >
                          <group
                            name="Plane006_151"
                            position={[0.675, 1.531, -0.723]}
                            rotation={[-Math.PI, 0.032, -0.399]}
                          >
                            <mesh
                              name="Object_291"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_291.geometry}
                              material={materials.grey}
                            />
                          </group>
                        </group>
                        <group
                          name="Plane001_153"
                          position={[0.811, 1.66, -0.718]}
                          rotation={[-Math.PI, 0.032, -0.308]}
                        >
                          <mesh
                            name="Object_293"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_293.geometry}
                            material={materials.grey}
                          />
                        </group>
                      </group>
                      <group
                        name="Plane005_155"
                        position={[0.915, 1.802, -0.715]}
                        rotation={[Math.PI, 0.032, -0.244]}
                      >
                        <mesh
                          name="Object_295"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_295.geometry}
                          material={materials.grey}
                        />
                      </group>
                    </group>
                    <group
                      name="finger018_162"
                      position={[0.032, 0.46, -0.241]}
                      rotation={[0.008, -0.001, -0.256]}
                    >
                      <group
                        name="finger019_160"
                        position={[0, 0.196, 0]}
                        rotation={[0.002, 0, -0.064]}
                      >
                        <group
                          name="finger020_158"
                          position={[0, 0.194, 0]}
                          rotation={[0.003, 0, -0.091]}
                        >
                          <group
                            name="Plane012_157"
                            position={[0.661, 1.531, -0.288]}
                            rotation={[-Math.PI, 0.032, -0.399]}
                          >
                            <mesh
                              name="Object_300"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_300.geometry}
                              material={materials.grey}
                            />
                          </group>
                        </group>
                        <group
                          name="Plane010_159"
                          position={[0.797, 1.66, -0.284]}
                          rotation={[-Math.PI, 0.032, -0.308]}
                        >
                          <mesh
                            name="Object_302"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_302.geometry}
                            material={materials.grey}
                          />
                        </group>
                      </group>
                      <group
                        name="Plane011_161"
                        position={[0.901, 1.802, -0.281]}
                        rotation={[Math.PI, 0.032, -0.244]}
                      >
                        <mesh
                          name="Object_304"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_304.geometry}
                          material={materials.grey}
                        />
                      </group>
                    </group>
                    <group
                      name="finger021_168"
                      position={[0.121, 0.102, -0.316]}
                      rotation={[-0.254, -0.297, -0.746]}
                    >
                      <group
                        name="finger022_166"
                        position={[0, 0.168, 0]}
                        rotation={[0.096, 0.114, 0.163]}
                      >
                        <group
                          name="finger023_164"
                          position={[0, 0.19, 0]}
                          rotation={[0.09, 0.153, 0.139]}
                        >
                          <group
                            name="Plane004_163"
                            position={[0.366, 1.806, -0.478]}
                            rotation={[3.035, -0.124, -0.353]}
                          >
                            <mesh
                              name="Object_309"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_309.geometry}
                              material={materials.grey}
                            />
                          </group>
                        </group>
                        <group
                          name="Plane003_165"
                          position={[0.038, 2.066, -0.322]}
                          rotation={[3.106, -0.26, -0.511]}
                        >
                          <mesh
                            name="Object_311"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_311.geometry}
                            material={materials.grey}
                          />
                        </group>
                      </group>
                      <group
                        name="Plane002_167"
                        position={[-0.333, 2.231, -0.089]}
                        rotation={[-3.127, -0.364, -0.689]}
                      >
                        <mesh
                          name="Object_313"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_313.geometry}
                          material={materials.grey}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="hand_144"
                  position={[1.31, 2.078, -0.552]}
                  rotation={[-1.853, -0.025, 0]}
                >
                  <group
                    name="elbow_143"
                    position={[0.082, 0.457, 0.866]}
                    rotation={[0, -1.338, 0]}
                  />
                  <group name="wrist_142" rotation={[-1.571, 0.032, 0.013]}>
                    <group
                      name="Cube010_141"
                      position={[-1.315, 1.978, -0.594]}
                      rotation={[Math.PI, 0.032, -0.012]}
                    >
                      <mesh
                        name="Object_274"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_274.geometry}
                        material={materials.white}
                      />
                    </group>
                    <group
                      name="finger003_128"
                      position={[-0.031, 0.46, 0.192]}
                      rotation={[-0.008, -0.001, 0.256]}
                    >
                      <group
                        name="finger004_126"
                        position={[0, 0.196, 0]}
                        rotation={[-0.002, 0, 0.064]}
                      >
                        <group
                          name="finger005_124"
                          position={[0, 0.194, 0]}
                          rotation={[-0.003, 0, 0.091]}
                        >
                          <group
                            name="Plane018_123"
                            position={[-0.618, 1.527, -0.764]}
                            rotation={[-Math.PI, 0.032, 0.399]}
                          >
                            <mesh
                              name="Object_250"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_250.geometry}
                              material={materials.grey}
                            />
                          </group>
                        </group>
                        <group
                          name="Plane013_125"
                          position={[-0.753, 1.657, -0.769]}
                          rotation={[Math.PI, 0.032, 0.308]}
                        >
                          <mesh
                            name="Object_252"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_252.geometry}
                            material={materials.grey}
                          />
                        </group>
                      </group>
                      <group
                        name="Plane017_127"
                        position={[-0.858, 1.8, -0.772]}
                        rotation={[Math.PI, 0.032, 0.244]}
                      >
                        <mesh
                          name="Object_254"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_254.geometry}
                          material={materials.grey}
                        />
                      </group>
                    </group>
                    <group
                      name="finger006_134"
                      position={[-0.017, 0.46, -0.243]}
                      rotation={[-0.008, -0.001, 0.256]}
                    >
                      <group
                        name="finger007_132"
                        position={[0, 0.196, 0]}
                        rotation={[-0.002, 0, 0.064]}
                      >
                        <group
                          name="finger008_130"
                          position={[0, 0.194, 0]}
                          rotation={[-0.003, 0, 0.091]}
                        >
                          <group
                            name="Plane024_129"
                            position={[-0.632, 1.527, -0.33]}
                            rotation={[Math.PI, 0.032, 0.399]}
                          >
                            <mesh
                              name="Object_259"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_259.geometry}
                              material={materials.grey}
                            />
                          </group>
                        </group>
                        <group
                          name="Plane022_131"
                          position={[-0.767, 1.657, -0.334]}
                          rotation={[Math.PI, 0.032, 0.308]}
                        >
                          <mesh
                            name="Object_261"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_261.geometry}
                            material={materials.grey}
                          />
                        </group>
                      </group>
                      <group
                        name="Plane023_133"
                        position={[-0.872, 1.8, -0.338]}
                        rotation={[Math.PI, 0.032, 0.244]}
                      >
                        <mesh
                          name="Object_263"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_263.geometry}
                          material={materials.grey}
                        />
                      </group>
                    </group>
                    <group
                      name="finger009_140"
                      position={[-0.1, 0.102, -0.323]}
                      rotation={[0.219, -0.298, 0.745]}
                    >
                      <group
                        name="finger010_138"
                        position={[0, 0.168, 0]}
                        rotation={[-0.011, 0.042, -0.198]}
                      >
                        <group
                          name="finger011_136"
                          position={[0, 0.19, 0]}
                          rotation={[0.036, 0.085, -0.176]}
                        >
                          <group
                            name="Plane016_135"
                            position={[-0.49, 1.803, -0.338]}
                            rotation={[3.034, -0.198, 0.318]}
                          >
                            <mesh
                              name="Object_268"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_268.geometry}
                              material={materials.grey}
                            />
                          </group>
                        </group>
                        <group
                          name="Plane015_137"
                          position={[-0.195, 2.061, -0.255]}
                          rotation={[3.105, -0.299, 0.491]}
                        >
                          <mesh
                            name="Object_270"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_270.geometry}
                            material={materials.grey}
                          />
                        </group>
                      </group>
                      <group
                        name="Plane014_139"
                        position={[0.203, 2.224, -0.287]}
                        rotation={[-3.127, -0.342, 0.699]}
                      >
                        <mesh
                          name="Object_272"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_272.geometry}
                          material={materials.grey}
                        />
                      </group>
                    </group>
                    <group
                      name="finger_122"
                      position={[-0.025, 0.474, -0.012]}
                      rotation={[-0.008, -0.001, 0.256]}
                    >
                      <group
                        name="finger001_120"
                        position={[0, 0.196, 0]}
                        rotation={[-0.002, 0, 0.064]}
                      >
                        <group
                          name="finger002_118"
                          position={[0, 0.194, 0]}
                          rotation={[-0.003, 0, 0.091]}
                        >
                          <group
                            name="Plane021_117"
                            position={[-0.629, 1.515, -0.561]}
                            rotation={[-Math.PI, 0.032, 0.399]}
                          >
                            <mesh
                              name="Object_241"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_241.geometry}
                              material={materials.grey}
                            />
                          </group>
                        </group>
                        <group
                          name="Plane019_119"
                          position={[-0.764, 1.644, -0.566]}
                          rotation={[Math.PI, 0.032, 0.308]}
                        >
                          <mesh
                            name="Object_243"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_243.geometry}
                            material={materials.grey}
                          />
                        </group>
                      </group>
                      <group
                        name="Plane020_121"
                        position={[-0.868, 1.787, -0.569]}
                        rotation={[Math.PI, 0.032, 0.244]}
                      >
                        <mesh
                          name="Object_245"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_245.geometry}
                          material={materials.grey}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="leg001_116"
                  position={[-0.246, 0.225, -0.017]}
                  rotation={[-Math.PI / 2, -0.002, 0]}
                >
                  <group name="foot001_114" rotation={[-2.349, -0.004, 0.002]}>
                    <group
                      name="Cube005_113"
                      position={[0.382, 0.172, 0.145]}
                      rotation={[-2.363, -0.002, 0.002]}
                    >
                      <mesh
                        name="Object_232"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_232.geometry}
                        material={materials.grey}
                      />
                      <mesh
                        name="Object_233"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_233.geometry}
                        material={materials.white}
                      />
                    </group>
                  </group>
                  <group
                    name="knee001_115"
                    position={[0.002, -0.8, 0.76]}
                    rotation={[-3.127, 0.041, 0]}
                    scale={[1, 1, 1.001]}
                  />
                </group>
                <group
                  name="leg_112"
                  position={[0.306, 0.225, -0.017]}
                  rotation={[-Math.PI / 2, -0.002, 0]}
                >
                  <group name="foot_110" rotation={[-2.349, -0.004, 0.002]}>
                    <group
                      name="Cube007_109"
                      position={[-0.396, 0.172, 0.146]}
                      rotation={[-2.363, -0.002, 0.002]}
                    >
                      <mesh
                        name="Object_226"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_226.geometry}
                        material={materials.grey}
                      />
                      <mesh
                        name="Object_227"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_227.geometry}
                        material={materials.white}
                      />
                    </group>
                  </group>
                  <group
                    name="knee_111"
                    position={[0.002, -0.8, 0.76]}
                    rotation={[-3.127, 0.041, 0]}
                    scale={[1, 1, 1.001]}
                  />
                </group>
                <group
                  name="root_108"
                  position={[0, 2.202, -0.808]}
                  rotation={[1.545, 0, 0]}
                >
                  <group
                    name="chest_97"
                    position={[0, 0.676, -0.109]}
                    rotation={[-1.65, 0, 0]}
                  >
                    <group
                      name="arm001_92"
                      position={[-1.105, 1.298, -0.288]}
                      rotation={[-2.679, -0.111, 0.162]}
                    >
                      <group
                        name="Cube002_91"
                        position={[1.766, 3.326, -0.508]}
                        rotation={[3.14, 0.031, 0.175]}
                      >
                        <mesh
                          name="Object_185"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_185.geometry}
                          material={materials.grey}
                        />
                        <mesh
                          name="Object_186"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_186.geometry}
                          material={materials.white}
                        />
                      </group>
                      <group
                        name="forearm001_90"
                        position={[0, 0.731, 0]}
                        rotation={[-0.62, -0.026, 0.046]}
                      >
                        <group
                          name="Cube003_89"
                          position={[1.448, 2.791, -0.489]}
                          rotation={[-3.134, 0.033, 0.057]}
                        >
                          <mesh
                            name="Object_182"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_182.geometry}
                            material={materials.grey}
                          />
                          <mesh
                            name="Object_183"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_183.geometry}
                            material={materials.white}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="arm_88"
                      position={[1.062, 1.298, -0.288]}
                      rotation={[-2.67, 0.186, -0.201]}
                    >
                      <group
                        name="Cube008_87"
                        position={[-1.721, 3.327, -0.619]}
                        rotation={[3.14, 0.032, -0.175]}
                      >
                        <mesh
                          name="Object_177"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_177.geometry}
                          material={materials.grey}
                        />
                        <mesh
                          name="Object_178"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_178.geometry}
                          material={materials.white}
                        />
                      </group>
                      <group
                        name="forearm_86"
                        position={[0, 0.731, 0]}
                        rotation={[-0.598, 0.02, -0.064]}
                      >
                        <group
                          name="Cube009_85"
                          position={[-1.404, 2.792, -0.581]}
                          rotation={[-3.134, 0.032, -0.058]}
                        >
                          <mesh
                            name="Object_174"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_174.geometry}
                            material={materials.grey}
                          />
                          <mesh
                            name="Object_175"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_175.geometry}
                            material={materials.white}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="body001_96"
                      position={[0, -2.329, -0.11]}
                      rotation={[0.105, 0, 0]}
                    >
                      <group
                        name="body002_93"
                        position={[-0.723, 4.074, -0.935]}
                        rotation={[-0.548, -0.333, 0.866]}
                        scale={-1}
                      >
                        <mesh
                          name="Object_196"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_196.geometry}
                          material={materials["white.001"]}
                        />
                        <mesh
                          name="Object_197"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_197.geometry}
                          material={materials.black}
                        />
                      </group>
                      <group
                        name="body003_94"
                        position={[0.684, 4.074, -0.94]}
                        rotation={[2.698, -0.181, 0.898]}
                      >
                        <mesh
                          name="Object_199"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_199.geometry}
                          material={materials["white.001"]}
                        />
                        <mesh
                          name="Object_200"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_200.geometry}
                          material={materials.black}
                        />
                      </group>
                      <group
                        name="Cube011_95"
                        position={[0.001, 4.069, 0.108]}
                        scale={0.897}
                      >
                        <mesh
                          name="Object_202"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_202.geometry}
                          material={materials["grey.001"]}
                        />
                      </group>
                      <mesh
                        name="Object_188"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_188.geometry}
                        material={materials["white.001"]}
                      />
                      <mesh
                        name="Object_189"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_189.geometry}
                        material={materials.black}
                      />
                      <mesh
                        name="Object_190"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_190.geometry}
                        material={materials["grey.001"]}
                      />
                      <mesh
                        name="Object_191"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_191.geometry}
                        material={materials.glass}
                      />
                      <mesh
                        name="Object_192"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_192.geometry}
                        material={materials.material}
                      />
                      <mesh
                        name="Object_193"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_193.geometry}
                        material={materials.logo}
                      />
                      <mesh
                        name="Object_194"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_194.geometry}
                        material={materials.control}
                      />
                    </group>
                  </group>
                  <group
                    name="hip_107"
                    position={[0, 0.681, 0.026]}
                    rotation={[1.56, 0, 0]}
                  >
                    <group
                      name="Cylinder004_106"
                      position={[0, 2.196, -0.047]}
                      rotation={[-3.105, 0, 0]}
                    >
                      <mesh
                        name="Object_221"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_221.geometry}
                        material={materials["grey.001"]}
                      />
                      <mesh
                        name="Object_222"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_222.geometry}
                        material={materials["white.001"]}
                      />
                    </group>
                    <group
                      name="thigh001_105"
                      position={[-0.346, 0.407, -0.123]}
                      rotation={[-0.085, -0.053, -0.053]}
                    >
                      <group
                        name="Cylinder002_104"
                        position={[0.423, 1.757, 0.244]}
                        rotation={[-3.013, 0.01, 0.043]}
                      >
                        <mesh
                          name="Object_218"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_218.geometry}
                          material={materials.grey}
                        />
                        <mesh
                          name="Object_219"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_219.geometry}
                          material={materials.white}
                        />
                      </group>
                      <group
                        name="shin001_103"
                        position={[0, 0.814, 0]}
                        rotation={[0.279, -0.019, -0.038]}
                      >
                        <group
                          name="Cube001_102"
                          position={[0.382, 0.99, -0.057]}
                          rotation={[2.968, -0.002, 0]}
                        >
                          <mesh
                            name="Object_215"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_215.geometry}
                            material={materials.grey}
                          />
                          <mesh
                            name="Object_216"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_216.geometry}
                            material={materials.white}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="thigh_101"
                      position={[0.36, 0.407, -0.123]}
                      rotation={[-0.091, 0.029, 0.018]}
                    >
                      <group
                        name="Cylinder001_100"
                        position={[-0.44, 1.757, 0.24]}
                        rotation={[-3.013, -0.001, -0.045]}
                      >
                        <mesh
                          name="Object_210"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_210.geometry}
                          material={materials.grey}
                        />
                        <mesh
                          name="Object_211"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_211.geometry}
                          material={materials.white}
                        />
                      </group>
                      <group
                        name="shin_99"
                        position={[0, 0.814, 0]}
                        rotation={[0.298, 0.006, 0.043]}
                      >
                        <group
                          name="Cube006_98"
                          position={[-0.396, 0.99, -0.055]}
                          rotation={[2.968, -0.002, 0]}
                        >
                          <mesh
                            name="Object_207"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_207.geometry}
                            material={materials.grey}
                          />
                          <mesh
                            name="Object_208"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_208.geometry}
                            material={materials.white}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="Cube014_10"
          position={[-6.472, 0, -7.522]}
          rotation={[-Math.PI / 2, 0, -2.931]}
        >
          <mesh
            name="Object_11"
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.metal}
          />
          <mesh
            name="Object_12"
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Object_13"
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.red_glow}
          />
        </group>
        <group
          name="Cylinder003_8"
          position={[3.059, 0, -6.926]}
          rotation={[-Math.PI / 2, 0, 2.329]}
        >
          <mesh
            name="Object_16"
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.metal}
          />
          <mesh
            name="Object_17"
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          name="Cylinder006_6"
          position={[2.46, 0, -5.962]}
          rotation={[-Math.PI / 2, 0, 2.414]}
        >
          <mesh
            name="Object_20"
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials.metal}
          />
          <mesh
            name="Object_21"
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          name="Cylinder007_4"
          position={[5.585, 0, 4.651]}
          rotation={[-Math.PI / 2, 0, 0.711]}
        >
          <mesh
            name="Object_24"
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials.metal}
          />
          <mesh
            name="Object_25"
            castShadow
            receiveShadow
            geometry={nodes.Object_25.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          name="Cylinder008_2"
          position={[4.954, 0, -3.847]}
          rotation={[-Math.PI / 2, 0, 2.226]}
        >
          <mesh
            name="Object_28"
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials.metal}
          />
          <mesh
            name="Object_29"
            castShadow
            receiveShadow
            geometry={nodes.Object_29.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group
          name="Cylinder005_0"
          position={[0.272, 0, -5.653]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        >
          <mesh
            name="Object_32"
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Object_33"
            castShadow
            receiveShadow
            geometry={nodes.Object_33.geometry}
            material={materials.metal}
          />
        </group>
        <group name="Cylinder010_12" />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Robo/robo.glb");
