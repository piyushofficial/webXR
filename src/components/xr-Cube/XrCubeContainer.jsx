import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import React from "react";
import XrCube from "./XrCube";

function XrCubeContainer() {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <XrCube />
        </XR>
      </Canvas>
    </>
  );
}

export default XrCubeContainer;
