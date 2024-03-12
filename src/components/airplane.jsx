import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";

export const Airplane = forwardRef((props, ref) => {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/helicopter/model.gltf"
  );
  return <primitive ref={ref} name="farm" object={scene} {...props} />;
});
