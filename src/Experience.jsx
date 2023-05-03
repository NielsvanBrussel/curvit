import { useState, Suspense } from 'react'
import Default from './three_components/Default';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loading from './Loading'
import Lights from './three_components/Lights'

const Experience = () => {

  const camera = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [ 13.7, 9.5, 18.4 ]
  }


  return (
      <Canvas shadows camera={camera}>
        <Lights />
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0}/>
        <Suspense fallback={ <Loading /> }> 
          <Default />
        </Suspense>
      </Canvas>
  );
}

export default Experience