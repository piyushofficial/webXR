import { Canvas } from "@react-three/fiber";
import React from "react";
import Cube from "./Cube";

function CubeContainer() {
  return (
    <Canvas>
      <Cube />
    </Canvas>
  );
}

export default CubeContainer;
