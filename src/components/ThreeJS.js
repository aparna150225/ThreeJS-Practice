import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import Box from './Box';
import './ThreeJS.css';


const ThreeJS = () => {
    return (
        <div className="wrapper">
            <Canvas className="canvas">
                <OrbitControls enableZoom={true} />
                <ambientLight intenstiy={0.5} />
                <directionalLight position={[-2, 5, 2]} intenstiy={1} />
                <Suspense fallback={null}>
                    <Box />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default ThreeJS;
