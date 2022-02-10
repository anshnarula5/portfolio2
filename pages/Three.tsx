import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";

function Box() {
  const [ref, api] = useBox(() => ({ mass: 2, position: [0, 0, 0] }));
  return (
    <mesh
      ref={ref}
      position={[0, 0, 0]}
    >
      <boxBufferGeometry attach="geometry" args={[5, 5, 5]}  />
      <meshLambertMaterial attach="material"  color="blue" />
    </mesh>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color=" #272424" />
    </mesh>
  );
}

export default function Three() {
  return (
    <Canvas >
      <OrbitControls />
      <ambientLight intensity={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  );
}