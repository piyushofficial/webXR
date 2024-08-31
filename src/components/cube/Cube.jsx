import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Cube = () => {
  const cubeRef = useRef();
  useFrame((state, delta) => {
    // console.log("useFrame");
    // console.log('cubeRef: ', cubeRef);
    cubeRef.current.rotation.y += delta
  });
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={cubeRef}>
        <boxGeometry args={[2,2,2]} />
        <meshStandardMaterial color={"mediumpurple"} />
      </mesh>
    </>
  );
};

export default Cube;
