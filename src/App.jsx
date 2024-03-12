import { Scene } from "./components/scene";
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
  ScrollControls,
  useScroll,
  useAnimations,
} from "@react-three/drei";
// components
// css
import "./App.css";

function App() {
  return (
    <>
      {/* <OrbitControls /> */}
      <axesHelper args={[2, 2, 2]} />
      <Environment preset="city" />
      <ScrollControls pages={4} maxSpeed={0.4}>
        <Scene />
      </ScrollControls>
    </>
  );
}

export default App;
