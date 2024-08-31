import { Route, Routes } from "react-router-dom";
import "./App.css";
import CubeContainer from "./components/cube/CubeContainer";
import XrCubeContainer from "./components/xr-Cube/XrCubeContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<XrCubeContainer />} />
      <Route path="/cube" element={<CubeContainer />} />
      <Route path="/xr-cube" element={<CubeContainer />} />
    </Routes>
  );
}

export default App;
