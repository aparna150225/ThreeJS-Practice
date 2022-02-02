import React from 'react'
// import {useLoader} from '@react-three/fiber'
// import {TextureLoader} from 'three/src/loaders/TextureLoader'
// import logo from '../images/logo.svg';

export default function Box() {
    //   const colorMap=useLoader(TextureLoader,logo);

    return (
        <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
            <meshNormalMaterial attach="material" />
        </mesh>
    )
}