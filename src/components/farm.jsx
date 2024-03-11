import { Center, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import * as THREE from "three";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

let center;
export function Scene() {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-farm/model.gltf"
  );
  const { rotation } = useControls({
    rotation: { min: 0, max: 6.28, value: 0 },
  });
  const scene_wrapper_ref = useRef();

  useEffect(() => {
    // getting the actual center of the scene and applying it
    var box = new THREE.Box3().setFromObject(scene);
    center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center); // center the model
  }, [scene]);

  useEffect(() => {
    scene_wrapper_ref.current.rotation.y = -rotation;
  }, [rotation]);

  return (
    <group ref={scene_wrapper_ref}>
      <primitive name="farm" object={scene} />
    </group>
  );
}
