import { Farm } from "./farm";
import { Airplane } from "./airplane";
import { PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";

const base_y_helicopter_rotation = Math.PI * 0.4;

export function Scene() {
  const farm_ref = useRef();
  const helicopter_ref = useRef();

  const camera_ref = useRef();

  const data = useScroll();

  useLayoutEffect(() => {
    camera_ref.current.lookAt(0, 2, 0);
  }, []);

  useFrame(() => {
    const scrolled_section = data.range(0, 1);

    const helicopter_radius = 5;
    const xh = Math.sin(2 * Math.PI * scrolled_section) * helicopter_radius;
    const zh = Math.cos(2 * Math.PI * scrolled_section) * helicopter_radius;
    helicopter_ref.current.position.x = xh;
    helicopter_ref.current.position.z = zh;
    helicopter_ref.current.position.y =
      1 + Math.sin(6 * Math.PI * scrolled_section) / 10;
    helicopter_ref.current.rotation.y =
      base_y_helicopter_rotation + 2 * Math.PI * scrolled_section;

    const camera_radius = 11;
    const xc = Math.sin(2 * Math.PI * scrolled_section) * camera_radius;
    const zc = Math.cos(2 * Math.PI * scrolled_section) * camera_radius;
    camera_ref.current.position.x = xc;
    camera_ref.current.position.z = zc;
    camera_ref.current.lookAt(0, 2, 0);
  });

  return (
    <>
      <Farm ref={farm_ref} position-y={0} />
      <Airplane
        ref={helicopter_ref}
        position={[0, 1, 5]}
        rotation-y={base_y_helicopter_rotation}
        scale={0.4}
      />
      <PerspectiveCamera ref={camera_ref} makeDefault position={[0, 2, 10]} />
    </>
  );
}
