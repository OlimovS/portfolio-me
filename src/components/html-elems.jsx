import { Html, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { createPortal } from "react-dom";

export const HtmlElems = () => {
  const data = useScroll();

  const elem1_ref = useRef();
  const elem2_ref = useRef();
  const elem3_ref = useRef();

  useFrame(() => {
    const t1 = data.range(0, 0.3);
    const t2 = data.curve(0.3, 0.5); // t2 is not working properly
    const t3 = data.curve(0.6, 1);

    if (elem1_ref.current) elem1_ref.current.style.opacity = 1 - t1;
    if (elem2_ref.current) elem2_ref.current.style.opacity = t2;
    if (elem3_ref.current) elem3_ref.current.style.opacity = t3;
  });

  return (
    <Html>
      {createPortal(
        <>
          <h2 ref={elem1_ref} className="scroll_html_elem">
            I am Sulaymon <br /> Front-end developer with 3 years of experience!
          </h2>
          <h2 ref={elem2_ref} className="scroll_html_elem">
            My stack: React, ThreeJS, R3F
          </h2>
          <h2 ref={elem3_ref} className="scroll_html_elem">
            Contact
            <br />
            <a href="mailto:sulaymondev08@gmail.com">sulaymondev08@gmail.com</a>
            <br />
            <a href="https://linkedin.com/in/sulaymonolimov">
              linkedin.com/in/sulaymonolimov
            </a>
          </h2>
        </>,
        document.body
      )}
    </Html>
  );
};
