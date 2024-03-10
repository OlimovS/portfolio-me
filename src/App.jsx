import { Scene } from "./Scene";
import { Canvas } from "@react-three/fiber";
// css
import "./App.css";

function App() {
  return (
    <div className="r3f_wrapper">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
