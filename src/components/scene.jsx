import { Farm } from "./farm";
import { Airplane } from "./airplane";
import { PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Vector3 } from "three";

const base_helicopter_rotation = Math.PI * 0.4;

export function Scene() {
  const farm_ref = useRef();
  const helicopter_ref = useRef();

  const camera_ref = useRef();

  const data = useScroll();
  console.log(data);

  useLayoutEffect(() => {
    camera_ref.current.lookAt(0, 0, 0);
  }, []);

  useFrame(() => {
    const scrolled_section = data.range(0, 1);

    farm_ref.current.rotation.y = 2 * Math.PI * scrolled_section;

    const radius = 5;
    const x = Math.sin(2 * Math.PI * scrolled_section) * 5;
    const z = Math.cos(2 * Math.PI * scrolled_section) * 5;
    helicopter_ref.current.position.x = x;
    helicopter_ref.current.position.z = z;

    helicopter_ref.current.rotation.y =
      base_helicopter_rotation + 2 * Math.PI * scrolled_section;
  });

  return (
    <>
      <Farm ref={farm_ref} />
      <Airplane
        ref={helicopter_ref}
        position={[0, 1, 5]}
        rotation-y={base_helicopter_rotation}
        scale={0.4}
      />
      <PerspectiveCamera ref={camera_ref} makeDefault position-y={15} />
    </>
  );
}
