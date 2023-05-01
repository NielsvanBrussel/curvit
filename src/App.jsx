import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { OrbitControls } from '@react-three/drei'
import Loading from './Loading'
import Lights from './three_components/Lights'



function App() {


  const camera = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [ 16.5, 6.5, 10 ]
  }

  return (
    <>
      <div style={{ position:'absolute', left: 0, alignItems: 'center', width: '100%', margin: '0 auto'}}>
          <h1 style={{ fontSize: '5rem'}}>CV</h1> 
      </div>
      <Canvas shadows camera={camera}>
        <Lights />
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0}/>
        <Suspense fallback={ <Loading /> }> 
          <Experience />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
