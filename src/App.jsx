import { Scene } from "./components/farm";
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
// components
import { Airplane } from "./components/airplane";
// css
import "./App.css";

function App() {
  return (
    <>
      <Airplane position={[0, 1, 5]} rotation-y={Math.PI * 0.4} scale={0.4} />
      <OrbitControls />
      <PerspectiveCamera makeDefault position={[0, 1, 10]} />
      <axesHelper args={[2, 2, 2]} />
      <Environment preset="city" />
      <Scene />
    </>
  );
}

export default App;
