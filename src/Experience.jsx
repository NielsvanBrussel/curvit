import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three";
import Screen1 from './three_components/Screen1';
import Screen2 from './three_components/Screen2';
import Default from './three_components/Default';
import { useThree, useFrame } from '@react-three/fiber'
import Fish from './three_components/Fish1';

const Experience = () => {

  // const { camera }= useThree()    

  // useFrame((state) =>
  // {
  //     console.log(state.camera.position)
  // })

  return (
    <group>
      {/* <primitive object={model2.scene} /> */}
      <Default />
      <Screen1 />
      <Screen2 />
      {/* <Fish /> */}
    </group>
  );
}

export default Experience