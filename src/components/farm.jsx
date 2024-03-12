import { useGLTF } from "@react-three/drei";
import { Vector3, Box3 } from "three";
import { forwardRef, useEffect } from "react";

let center;
export const Farm = forwardRef((props, ref) => {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-farm/model.gltf"
  );

  useEffect(() => {
    // getting the actual center of the scene and applying it
    var box = new Box3().setFromObject(scene);
    center = new Vector3();
    box.getCenter(center);
    scene.position.sub(center); // center the model
  }, [scene]);

  return (
    <group ref={ref} {...props}>
      <primitive name="farm" object={scene} />
    </group>
  );
});
