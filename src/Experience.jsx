import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three";
import Screen1 from './three_components/Screen1';
import Screen2 from './three_components/Screen2';
import Default from './three_components/Default';
import { useThree, useFrame } from '@react-three/fiber'

const Experience = () => {


  return (
    <group>
      <Default />
      <Screen1 />
      <Screen2 />
    </group>
  );
}

export default Experience