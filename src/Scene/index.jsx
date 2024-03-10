import { useGLTF } from "@react-three/drei";

export function Scene(props) {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-farm/model.gltf"
  );
  return <primitive object={scene} {...props} />;
}
