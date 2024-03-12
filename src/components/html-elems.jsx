import { Scroll } from "@react-three/drei";

export const HtmlElems = () => {
  return (
    <Scroll html>
      {/* DOM contents in here will scroll along */}
      <h1 className="scroll_html_elem" style={{ top: "50vh" }}>
        I am Sulaymon, Front-end developer with 3 years of experience!
      </h1>
      <h1 className="scroll_html_elem" style={{ top: "150vh" }}>
        My stack: React, Redux, Mobx, ClojureScript, Three.JS, React Three Fiber
      </h1>
      <h1 className="scroll_html_elem" style={{ top: "250vh" }}>
        third page
      </h1>
      <h1 className="scroll_html_elem" style={{ top: "350vh" }}>
        4 page
      </h1>
    </Scroll>
  );
};
