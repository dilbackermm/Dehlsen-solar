'use client';

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Model } from '../../../../public/3Dmodel/Scene'
import { DirectionalLight } from 'three'


export default function Home() {

return(
    <Canvas shadows camera={{fov: 16}}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[1, 0, 0]} />
    <Model  position={[3.3, -4, -13]} rotation-y={Math.PI * -0.15} />
    <Environment preset='city' />
    <OrbitControls  enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
</Canvas>
)

}