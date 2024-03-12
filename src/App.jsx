import { Scene } from "./components/scene";
import { Environment, Scroll, ScrollControls } from "@react-three/drei";
// components
// css
import "./App.css";
import { HtmlElems } from "./components/html-elems";

function App() {
  return (
    <>
      {/* <OrbitControls
      //  enableZoom={false} enablePan={false}
      /> */}
      <color args={["#87ceeb"]} attach={"background"} />
      <Environment preset="city" blur={0.5} />

      <ScrollControls pages={3} maxSpeed={0.4}>
        <Scene />
        <HtmlElems />
      </ScrollControls>
    </>
  );
}

export default App;
