import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three";
import url from "/testvid2.mp4";

const Screen2 = () => {

  const { nodes, materials } = useGLTF("./screen2.glb")



  const [video] = useState(() => {
    const vid = document.createElement("video")
    vid.src = url
    vid.crossOrigin = "Anonymous"
    vid.playsInline = true
    vid.autoplay = true
    vid.loop = true
    vid.muted = true
    vid.play()
    return vid
  });

  return (
    <group>
      <mesh geometry={nodes["screen000"].geometry}>
        <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
}

export default Screen2